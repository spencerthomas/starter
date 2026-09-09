# Starter

A small home for code, analysis, and knowledge work. Start with a question and grow the structure as the work becomes real.

[starter.tomspencer.co](https://starter.tomspencer.co) hosts the introduction. This branch expands it into an overview, an essay, and a getting-started guide; the current website changes are local until published.

## Start a project

Point Codex or Claude at this repository:

> Use https://github.com/spencerthomas/starter to scaffold a data analysis project in ../customer-retention. We need to understand why customers leave.

Or use the local scaffold (Python 3.10+, no packages required):

```sh
python3 scripts/scaffold.py ../customer-retention --kind analysis --name "Customer retention" --brief "Understand why customers leave."
```

Kinds are `general`, `analysis`, `feature`, and `research`. They set an initial question and suggested first checks, not a fixed technology stack. The destination must be empty (an existing `.git/` is fine). Use `--dry-run` to preview. The scaffold never installs dependencies, initializes Git, or changes remotes.

Use the skill or generator for a minimal project. GitHub's template button copies this entire distribution, including its website and tooling; it does not extract `template/`. For an existing copy, ask the agent to adapt it deliberately without overwriting useful work.

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
| [template/](template/) | Project defaults; the only source of generated project content |
| [scripts/scaffold.py](scripts/scaffold.py) and [shared skill](skills/start-project/SKILL.md) | Tailor and deliver the template |
| [src/app/](src/app/) | Distribution website; excluded from projects |
| [AGENTS.md](AGENTS.md) | Map for maintaining this distribution; Claude imports it through `CLAUDE.md` |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Boundaries, folder ownership, and how work flows |
| [docs/](docs/) | Canonical intent, decisions, plans, references, and quality evidence |
| [analysis/](analysis/) | Reproducible queries, notebooks, experiments, and working notes |
| [data/](data/) | Input/derived data and provenance; payloads ignored by default |
| [reports/](reports/) | Reports and their source documents |
| [presentations/](presentations/) | Decks and their source documents |
| [outputs/](outputs/) | Other deliverables, exports, and named variants |

Add `src/` for one codebase, or `apps/<name>/` when independent apps actually exist. Reports and presentations already have homes; don't duplicate them under outputs. Name experimental variants by purpose, then record which one was selected.

## Keep it healthy

The editorial website uses Next.js, Motion Primitives, and stripped shadcn/ui primitives. Run it with `npm ci` then `npm run dev`; verify with `npm run build` and `npm run typecheck`. The existing Vercel project deploys from `main`; a local build does not update the public site. The scaffold command excludes the website and its dependencies from generated projects.

```sh
python3 scripts/check_docs.py
python3 scripts/check_docs.py template
python3 -m unittest discover -s tests
```

The documentation check runs in CI and weekly. It checks structure, local Markdown file links, catalog coverage, and review dates. It cannot establish factual correctness or replace project-specific tests. Update docs with the work; use [PLANS.md](docs/PLANS.md) for shared plans and handoffs.

This starter adapts the repository map and feedback-loop ideas from [OpenAI's harness engineering article](https://openai.com/index/harness-engineering/) and [the harness-engineering reference repository](https://github.com/spencerthomas/harness-engineering). See [sources and adaptations](docs/references/harness-engineering.md).

## Objective and assessment

See the [original objective](docs/product-specs/starter-objective.md), the [implementation assessment](reports/starter-objective-assessment.md), and the [source references](docs/references/harness-engineering.md). The supplied article PDF is preserved locally with a [source manifest](data/manifest.md); the payload is ignored by Git.

## How agents work in generated projects

The [template workflow](template/docs/WORKFLOW.md) guides agents to establish an outcome, inspect the baseline, act within scope, verify the result, review failures, and update useful knowledge. The initial brief carries the working agreement; substantial plans carry shared ownership and handoffs. Tools and checks are added for the first real result, with no mandatory plugins, hooks, or background agents.

Read the [section-by-section harness review](reports/harness-workflow-review.md) for the original diagrams, adaptations, implementation evidence, and limits. Instructions establish conventions; project-specific checks and observed agent runs establish whether they work.

The [website research](reports/website-research.md) maps the sources, content, and component provenance for the editorial redesign.
