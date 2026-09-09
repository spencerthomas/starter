#!/usr/bin/env python3
"""Check the maintained knowledge map, not factual accuracy or external URLs."""

import argparse
from datetime import date
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit


DEFAULT_ROOT = Path(__file__).resolve().parents[1]

REQUIRED_FILES = (
    "AGENTS.md", "CLAUDE.md", "ARCHITECTURE.md", "README.md",
    "docs/design-docs/index.md", "docs/design-docs/core-beliefs.md",
    "docs/product-specs/index.md", "docs/exec-plans/tech-debt-tracker.md",
    "docs/DESIGN.md", "docs/FRONTEND.md", "docs/PLANS.md",
    "docs/PRODUCT_SENSE.md", "docs/QUALITY_SCORE.md",
    "docs/RELIABILITY.md", "docs/SECURITY.md", "docs/WORKFLOW.md",
    "docs/references/harness-engineering.md",
    "docs/references/skills-and-plugins.md",
    "analysis/README.md", "data/README.md", "reports/README.md",
    "presentations/README.md", "outputs/README.md",
)
REQUIRED_DIRS = (
    "docs/exec-plans/active", "docs/exec-plans/completed", "docs/generated",
)


def prose(text):
    """Exclude code examples; those paths are not claims about existing files."""
    lines = []
    fence = None
    for line in text.splitlines():
        marker = re.match(r"^\s*(`{3,}|~{3,})", line)
        if marker:
            token = marker.group(1)
            if fence is None:
                fence = token
            elif token[0] == fence[0] and len(token) >= len(fence):
                fence = None
            continue
        if fence is None:
            lines.append(line)
    return re.sub(r"`+[^`\n]*`+", "", "\n".join(lines))


def links(text):
    """Inline destinations and reference definitions in maintained Markdown."""
    pattern = r'!?\[[^\]\n]*\]\(\s*(<[^>]+>|[^\s)]+)(?:\s+"[^"\n]*")?\s*\)'
    result = re.findall(pattern, text)
    result += re.findall(r"^\s*\[[^\]]+\]:\s*(<[^>]+>|\S+)", text, re.MULTILINE)
    return [item.strip("<>") for item in result]


def local_target(root, document, destination):
    parsed = urlsplit(destination)
    if parsed.scheme or parsed.netloc or not parsed.path:
        return None
    path = unquote(parsed.path)
    return (root / path.lstrip("/") if path.startswith("/") else document.parent / path).resolve()


def check(root, today=None, max_age=90):
    root = Path(root).resolve()
    today = today or date.today()
    errors = []
    for relative in REQUIRED_FILES:
        file = root / relative
        if not file.is_file() or not file.read_text(encoding="utf-8").strip():
            errors.append(f"{relative}: missing or empty; restore the knowledge-map entry")
    for relative in REQUIRED_DIRS:
        if not (root / relative).is_dir():
            errors.append(f"{relative}: missing directory; retain it with .gitkeep when empty")
    agents = root / "AGENTS.md"
    if agents.is_file() and len(agents.read_text(encoding="utf-8").splitlines()) > 100:
        errors.append("AGENTS.md: exceeds 100 lines; move detail into linked docs")
    claude = root / "CLAUDE.md"
    if claude.is_file() and "@AGENTS.md" not in claude.read_text(encoding="utf-8").splitlines():
        errors.append("CLAUDE.md: import @AGENTS.md to keep one instruction map")

    documents = set(root.glob("*.md")) | set((root / "docs").rglob("*.md"))
    documents |= {root / name for name in REQUIRED_FILES if name.endswith("/README.md")}
    for document in sorted(documents):
        if not document.is_file():
            continue
        for destination in links(prose(document.read_text(encoding="utf-8"))):
            target = local_target(root, document, destination)
            if target is not None and (not target.is_relative_to(root) or not target.exists()):
                errors.append(f"{document.relative_to(root)}: broken/outside local link {destination}")

    for folder in ("docs/design-docs", "docs/product-specs"):
        index = root / folder / "index.md"
        if not index.is_file():
            continue
        catalogued = set()
        for line in index.read_text(encoding="utf-8").splitlines():
            if not line.startswith("|") or not links(line):
                continue
            cells = [cell.strip() for cell in line.strip("|").split("|")]
            destinations = links(cells[0])
            if not destinations:
                continue
            for destination in destinations:
                target = local_target(root, index, destination)
                if target is not None:
                    catalogued.add(target)
            if len(cells) != 3 or not cells[1]:
                errors.append(f"{folder}/index.md: each catalog row needs document, status, review date")
                continue
            try:
                reviewed = date.fromisoformat(cells[2])
            except ValueError:
                errors.append(f"{folder}/index.md: invalid review date {cells[2]!r}; use YYYY-MM-DD")
                continue
            age = (today - reviewed).days
            if age < 0 or age > max_age:
                errors.append(f"{folder}/index.md: review {cells[0]} (date {reviewed}); inspect before updating")
        for document in (root / folder).rglob("*.md"):
            if document != index and document.resolve() not in catalogued:
                errors.append(f"{document.relative_to(root)}: add status and review date to {folder}/index.md")

    for document in (root / "docs/generated").rglob("*.md"):
        text = document.read_text(encoding="utf-8")
        for field in ("Producer:", "Inputs:", "Regenerate:"):
            if not any(line.startswith(field) and line[len(field):].strip() for line in text.splitlines()):
                errors.append(f"{document.relative_to(root)}: add {field} provenance")
    return errors


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("root", nargs="?", type=Path, default=DEFAULT_ROOT)
    parser.add_argument("--max-age", type=int, default=90, help="Maximum catalog review age in days")
    args = parser.parse_args()
    if args.max_age < 1:
        parser.error("--max-age must be positive")
    errors = check(args.root, max_age=args.max_age)
    if errors:
        print("Documentation check failed:\n" + "\n".join(f"- {error}" for error in errors))
        return 1
    print("Documentation check passed (structure, file links, catalogs, review dates, generated provenance).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
