# Starter

A small home for code, analysis, and knowledge work. Start with a question and grow the structure as the work becomes real.

[starter.tomspencer.co](https://starter.tomspencer.co) is the one-page introduction.

## Start a project

Point Codex or Claude at this repository:

> Use https://github.com/spencerthomas/starter to scaffold a data analysis project in ../customer-retention. We need to understand why customers leave.

Or use the local scaffold (Python 3.10+, no packages required):

```sh
python3 scripts/scaffold.py ../customer-retention --kind analysis --name "Customer retention" --brief "Understand why customers leave."
```

Kinds are `general`, `analysis`, `feature`, and `research`. They set an initial question and suggested first checks, not a fixed technology stack. The destination must be empty (an existing `.git/` is fine). Use `--dry-run` to preview. The scaffold never installs dependencies, initializes Git, or changes remotes.

To use GitHub's template button, create a repo from this template, then ask the agent to tailor the README and project brief in place. Keep the starter tooling only if that project will also create new projects.

## Use it from any project

Install the shared `start-project` skill once. From this checkout:

```sh
python3 scripts/scaffold.py --install-skills
```

This links the skill into `~/.agents/skills/` (Codex) and `~/.claude/skills/` (Claude), without replacing existing skills. Keep this checkout at its current path. Start a new agent session after installation.

Then say:

- “Use the starter for a data analysis project.”
- “Scaffold a starter for a product feature I am exploring.”
- “Use the starter for a research report and a presentation.”
- “Use the starter for a small CLI with two alternative implementations.”

Explicit invocation: `$start-project` in Codex or `/start-project` in Claude. For Claude plugin packaging and optional companion capabilities, see [skills and plugins](docs/references/skills-and-plugins.md). A plain repo URL also works without installation: ask the agent to read the skill in this repo.

## What lives where

| Path | Purpose |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Short map for agents; Claude imports it through `CLAUDE.md` |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Boundaries, folder ownership, and how work flows |
| [docs/](docs/) | Canonical intent, decisions, plans, references, and quality evidence |
| [analysis/](analysis/) | Reproducible queries, notebooks, experiments, and working notes |
| [data/](data/) | Input/derived data and provenance; payloads ignored by default |
| [reports/](reports/) | Reports and their source documents |
| [presentations/](presentations/) | Decks and their source documents |
| [outputs/](outputs/) | Other deliverables, exports, and named variants |

Add `src/` for one codebase, or `apps/<name>/` when independent apps actually exist. Reports and presentations already have homes; don't duplicate them under outputs. Name experimental variants by purpose, then record which one was selected.

## Keep it healthy

The landing page uses Next.js and Motion Primitives. Run it with `npm ci` then `npm run dev`; verify with `npm run build` and `npm run typecheck`. It deploys through the existing Vercel project from `main`. The scaffold command excludes the website and its dependencies from generated projects.

```sh
python3 scripts/check_docs.py
python3 -m unittest discover -s tests
```

The documentation check runs in CI and weekly. It checks structure, local Markdown file links, catalog coverage, and review dates. It cannot establish factual correctness or replace project-specific tests. Update docs with the work; use [PLANS.md](docs/PLANS.md) for shared plans and handoffs.

This starter adapts the repository map and feedback-loop ideas from [OpenAI's harness engineering article](https://openai.com/index/harness-engineering/) and [the harness-engineering reference repository](https://github.com/spencerthomas/harness-engineering). See [sources and adaptations](docs/references/harness-engineering.md).
