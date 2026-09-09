# Architecture

This repository distributes a starter. Its website and descriptions are separate from the project content it generates.

| Boundary | Ownership |
| --- | --- |
| [template/](template/) | Portable project defaults: docs, work folders, agent instructions, documentation checker and CI |
| [scripts/scaffold.py](scripts/scaffold.py), [skills/start-project/](skills/start-project/) | Deliver the template and tailor the README, brief, and catalogs |
| [src/app/](src/app/), [src/components/](src/components/) | Next.js introductory website and its animation; root npm and Vercel config serve this site |
| [docs/](docs/), [reports/](reports/), [data/](data/) | Distribution intent, decisions, assessments, and source provenance |
| [tests/](tests/), [.github/workflows/](.github/workflows/) | Distribution verification, including generated-project portability and isolation |

The generator reads an explicit allowlist from `template/`, stages a new project, tailors its brief, validates it, and copies it into an empty target. It preserves an existing `.git/` and refuses existing work. It never copies root docs, website code, package dependencies, reports, or the source PDF. No Git initialization, package installation, publication, or remote changes occur.

The canonical documentation checker lives in `template/scripts/check_docs.py`. The root `scripts/check_docs.py` delegates to it with the distribution root as default. Generated projects receive the standalone implementation. CI checks both knowledge bases; there is no second checker implementation to synchronize.

Generated-project architecture is defined in [the template architecture](template/ARCHITECTURE.md). It preserves the required docs layout and homes for analysis, data, reports, presentations, and outputs. It adds code folders and actual dependency boundaries only when needed. One [portable work loop](template/docs/WORKFLOW.md) is routed through AGENTS.md and Claude's import; it is an instruction contract, not an installed runtime hook.

The website remains at its existing build location; it has no API, database, or authentication. Keeping one repository avoids a separate template release/synchronization process. GitHub's template button copies the distribution, so the generator or shared skill is the recommended creation path.

See the [adopted decision](docs/design-docs/template-and-workflow.md) and [article review](reports/harness-workflow-review.md) for rationale and evidence.
