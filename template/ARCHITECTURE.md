# Architecture

The project has three boundaries: maintained knowledge in `docs/`, working material in `analysis/` and `data/`, and deliverables in `reports/`, `presentations/`, and `outputs/`. Code gets a home when it exists.

```text
AGENTS.md                    agent map
CLAUDE.md                    imports the same map
ARCHITECTURE.md               this file
docs/
  design-docs/
    index.md
    core-beliefs.md
  exec-plans/
    active/
    completed/
    tech-debt-tracker.md
  generated/
  product-specs/
    index.md
  references/
  DESIGN.md
  FRONTEND.md
  PLANS.md
  PRODUCT_SENSE.md
  QUALITY_SCORE.md
  RELIABILITY.md
  SECURITY.md
analysis/
data/
reports/
presentations/
outputs/
scripts/                     small repeatable checks and utilities
```

Inputs flow from `data/` through reproducible work in `analysis/` into deliverables. Methods, decisions, and evidence links live in `docs/`. Do not promote a source assertion or an experimental result to accepted knowledge without verification.

Create `src/` for one codebase. Use `apps/<name>/` for multiple independently runnable applications and `packages/` only once shared code exists. Each runnable variant owns its dependencies, run command, and checks. Document actual dependency boundaries here once known; this starter imposes no language or framework.

Generated schemas and inventories belong in `docs/generated/`, with the producer, input version, and regeneration command. There is no database schema until there is a database.
