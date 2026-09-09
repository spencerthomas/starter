#!/usr/bin/env python3
"""Create a minimal project from this checkout, or install its shared skill."""

import argparse
from datetime import date
import os
from pathlib import Path
import shutil
import sys
import tempfile

from check_docs import REQUIRED_DIRS, REQUIRED_FILES, check


SOURCE = Path(__file__).resolve().parents[1]
KINDS = {
    "general": (
        "Define the audience and the smallest useful deliverable.",
        "Inspect the deliverable against the brief and record evidence and limitations.",
    ),
    "analysis": (
        "Define the question, population, timeframe, and input sources before selecting methods.",
        "Check data grain, units, missingness, duplicates, and joins; reproduce the result from named inputs.",
    ),
    "feature": (
        "Define the user, journey, and smallest observable behavior before selecting a stack.",
        "Exercise the key user journey and its relevant failure cases; record what was actually observed.",
    ),
    "research": (
        "Define the decision, audience, source standard, and intended report, deck, or other deliverable.",
        "Trace material claims to sources, separate inference, and record conflicting or missing evidence.",
    ),
}
EXTRA_FILES = (".gitignore", ".gitattributes", "scripts/check_docs.py", ".github/workflows/docs.yml")


def validate_destination(destination):
    if destination.is_symlink():
        raise ValueError("destination is a symlink; choose an explicit empty directory")
    if destination.exists():
        if not destination.is_dir():
            raise ValueError("destination must be a directory")
        existing = [item.name for item in destination.iterdir() if item.name != ".git"]
        if existing:
            raise ValueError("destination is not empty; preserve existing work and tailor it manually")


def project_readme(name, kind, brief):
    return f"""# {name}

{brief}

Starting point: **{kind}**. See the [project brief](docs/product-specs/project-brief.md) for scope, open questions, and acceptance.

## Working here

Read [AGENTS.md](AGENTS.md) and [ARCHITECTURE.md](ARCHITECTURE.md). The maintained knowledge base lives in [docs/](docs/). Keep working analysis in [analysis/](analysis/), inputs and provenance in [data/](data/), and deliverables in [reports/](reports/), [presentations/](presentations/), or [outputs/](outputs/).

Add code folders, dependencies, and run commands when implementation begins. No application stack is selected yet.

## Check the knowledge base

```sh
python3 scripts/check_docs.py
```

Requires Python 3.10+ and no third-party packages. This checks documentation structure and file links; add task-specific verification as work develops. CI runs the same check on changes and weekly.

Created from [spencerthomas/starter](https://github.com/spencerthomas/starter). Optional [skills and plugins](docs/references/skills-and-plugins.md) can support the work.
"""


def scaffold(destination, name, kind, brief, dry_run=False):
    destination = Path(os.path.abspath(Path(destination).expanduser()))
    validate_destination(destination)
    if not name.strip() or "\n" in name or "\r" in name:
        raise ValueError("name must be non-empty and on one line")
    if not brief.strip():
        raise ValueError("brief must be non-empty")
    files = (*REQUIRED_FILES, *EXTRA_FILES)
    for relative in files:
        if not (SOURCE / relative).is_file():
            raise ValueError(f"starter source missing {relative}; use the complete checkout")
    if dry_run:
        print(f"Would create {kind} project {name!r} at {destination}")
        print("\n".join(sorted((*files, "docs/product-specs/project-brief.md", *REQUIRED_DIRS))))
        return destination

    destination.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=".starter-", dir=destination.parent) as temp:
        stage = Path(temp)
        for relative in files:
            target = stage / relative
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(SOURCE / relative, target)
        for relative in REQUIRED_DIRS:
            (stage / relative).mkdir(parents=True, exist_ok=True)
            (stage / relative / ".gitkeep").touch()
        (stage / "README.md").write_text(project_readme(name, kind, brief), encoding="utf-8")
        guidance, evidence = KINDS[kind]
        project_brief = f"""# {name}

Status: draft. Starting point: {kind}.

## Intended outcome

{brief}

## First slice

{guidance}

## Scope

Establish the first useful result. Technology choices, datasets, and additional deliverables remain open unless specified above. Expand this brief as facts become known.

## Acceptance evidence

{evidence}

## Open questions

Audience, available inputs, constraints, and the concrete first deliverable need confirmation through the work. No implementation or findings are claimed by this scaffold.
"""
        (stage / "docs/product-specs/project-brief.md").write_text(project_brief, encoding="utf-8")
        (stage / "docs/product-specs/index.md").write_text(
            "# Product and work specifications\n\n"
            "| Document | Status | Last reviewed |\n| --- | --- | --- |\n"
            f"| [Project brief](project-brief.md) | Draft; scaffold only | {date.today()} |\n",
            encoding="utf-8",
        )
        # Adoption of starter defaults is explicit; this is not a review of project outcomes.
        (stage / "docs/design-docs/index.md").write_text(
            "# Design documents\n\n"
            "| Document | Status | Last reviewed |\n| --- | --- | --- |\n"
            f"| [Core beliefs](core-beliefs.md) | Adopted starter defaults | {date.today()} |\n",
            encoding="utf-8",
        )
        errors = check(stage)
        if errors:
            raise ValueError("generated documentation failed validation:\n" + "\n".join(errors))
        validate_destination(destination)
        destination.mkdir(exist_ok=True)
        for entry in stage.iterdir():
            entry.rename(destination / entry.name)
    print(f"Created {kind} project at {destination}; documentation check passed.")
    return destination


def install_skills(home=None, dry_run=False):
    home = Path(home) if home is not None else Path.home()
    source = SOURCE / "skills/start-project"
    if not (source / "SKILL.md").is_file():
        raise ValueError("skill missing; use the complete starter checkout")
    destinations = [home / ".agents/skills/start-project", home / ".claude/skills/start-project"]
    # Preflight both before mutating either; never replace an existing skill.
    for destination in destinations:
        if destination.exists() or destination.is_symlink():
            if not destination.is_symlink() or destination.resolve() != source.resolve():
                raise ValueError(f"skill already exists at {destination}; no skills changed")
    created = []
    try:
        for destination in destinations:
            if dry_run:
                print(f"Would link {destination} -> {source}")
            elif not destination.is_symlink():
                destination.parent.mkdir(parents=True, exist_ok=True)
                destination.symlink_to(source, target_is_directory=True)
                created.append(destination)
            if not dry_run:
                print(f"Linked {destination} -> {source}")
    except OSError:
        for destination in created:
            destination.unlink()
        raise
    if not dry_run:
        print("Start a new Codex or Claude session to discover start-project.")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("destination", nargs="?", type=Path)
    parser.add_argument("--kind", choices=KINDS, default="general")
    parser.add_argument("--name")
    parser.add_argument("--brief", default="Explore the project question and produce a useful first result.")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--install-skills", action="store_true")
    args = parser.parse_args()
    try:
        if args.install_skills:
            if args.destination is not None or args.name is not None:
                parser.error("--install-skills cannot be combined with a project destination or name")
            install_skills(dry_run=args.dry_run)
        elif args.destination is None:
            parser.error("provide a destination, or use --install-skills")
        else:
            scaffold(args.destination, args.name or args.destination.resolve().name,
                     args.kind, args.brief, args.dry_run)
    except (OSError, ValueError) as error:
        parser.exit(1, f"starter: {error}\n")


if __name__ == "__main__":
    main()
