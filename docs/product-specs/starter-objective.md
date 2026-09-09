# Starter repository and scaffold

Status: user-stated objective, captured 2026-09-09. Implementation acceptance remains partial.

## Audience and outcome

A person should be able to start Codex or Claude, reference this repository or invoke its shared skill, and ask for a minimal project for code, data analysis, feature exploration, research, reports, presentations, or general knowledge work. The project should remain easy to grow, maintain, and share as scope emerges.

## Required structure and behavior

- Preserve the harness-inspired documentation layout: root `AGENTS.md` and `ARCHITECTURE.md`; `docs/design-docs/` with its index and core beliefs; `docs/exec-plans/active/`, `completed/`, and debt tracker; `docs/generated/`; indexed `docs/product-specs/`; `docs/references/`; and `DESIGN.md`, `FRONTEND.md`, `PLANS.md`, `PRODUCT_SENSE.md`, `QUALITY_SCORE.md`, `RELIABILITY.md`, and `SECURITY.md` within docs.
- Keep the agent entry point short and route readers to maintained repository knowledge.
- Always provide homes for analysis, data, reports, presentations, and other outputs. Support multiple implementation or deliverable variants when needed.
- Leave technology, schemas, datasets, and specific artifacts undecided until the work needs them. Example filenames in the source layout are illustrative, not mandatory empty documents.
- Connect the scaffold to reusable skills and relevant optional plugins without requiring a large capability bundle.
- Make collaboration practical through explicit ownership, bounded write scopes, durable plans, integration responsibility, and handoffs.
- Check documentation structure and drift mechanically. Distinguish structural validation from semantic review and real outcome acceptance.

## Acceptance evidence

Generate each supported project kind into an empty destination, preserve existing work, and validate the result. In fresh Codex and Claude sessions, exercise ordinary-language requests such as “use the starter for a data analysis project” and a feature exploration request. Inspect whether each agent finds the skill, tailors the brief, preserves the layout, and avoids unnecessary scaffolding. Exercise a small shared task and a handoff to a fresh session. Verify CI configuration and separately record actual run evidence when available.

## Sources and current assessment

See [source references](../references/harness-engineering.md) for the two supplied URLs and the local PDF provenance. See the [2026-09-09 assessment](../../reports/starter-objective-assessment.md) for implementation evidence, gaps, and proposed next steps. No numerical quality score or user-experience acceptance is implied.
