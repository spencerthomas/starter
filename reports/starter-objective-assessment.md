# Starter assessment against the original objective

Date: 2026-09-09. Status: local source review and checks; not user acceptance, live deployment verification, or a fresh-session agent trial.

Historical assessment before template/workflow separation. See the [subsequent section review](harness-workflow-review.md) for the implementation and current limits.

## Verdict

The project substantially meets the requested minimal scaffold. Its strongest areas are the documentation layout, broad applicability, safe generation, and separation of source data from maintained knowledge and deliverables. The remaining uncertainty is whether the intended conversational and collaborative experience works smoothly in real use.

The [captured objective](../docs/product-specs/starter-objective.md) is the evaluation contract. The supplied [OpenAI article and reference repository](../docs/references/harness-engineering.md) provide design context. The article advocates a concise entry map, indexed repository knowledge, durable plans, and automated maintenance. This project implements the structural foundation; semantic gardening and application-specific enforcement remain deferred.

## Requirement comparison

| Requirement | Assessment | Evidence and limits |
| --- | --- | --- |
| Exact documentation skeleton | Met | All requested directories and named baseline docs exist; `AGENTS.md` is 41 lines. Illustrative schema, onboarding, and technology-reference files are correctly omitted until relevant. |
| Minimal, useful beyond software | Met | Four project kinds tailor the initial question and evidence. Python generator has no third-party dependencies; generated projects have no chosen app stack. |
| Analysis, data, reports, presentations, outputs | Met | Each has a dedicated home and guidance. Named variants are supported by convention rather than pre-created folders. |
| Repository knowledge as source of truth | Mostly met | Routing, catalogs, decisions, plans, and provenance guidance exist. The starter's own quality register still says no project work exists. |
| Reusable Codex and Claude entry point | Implemented; experience unverified | Shared skill, CLI, installer, and Claude plugin manifest exist. Installer behavior is tested in temporary homes. Actual discovery and ordinary-language activation in fresh sessions were not exercised. |
| Optional skills and plugins | Partial | Capability guide maps work types to candidate tools and instructs discovery. There is no tested per-use-case capability selection flow. A mandatory bundle would conflict with minimalism. |
| Effective multi-agent work | Contract present; unverified | Agent instructions and plan template specify owners, input paths, write scopes, acceptance, integration, and handoffs. No observed shared task or cold-session handoff establishes effectiveness or enjoyment. |
| Mechanical maintenance | Met for structure | Checker validates files, local links, catalog coverage, dates, and generated Markdown provenance. CI runs documentation checks and starter tests/build. It does not validate factual accuracy, link anchors, or general ownership completeness. |
| Recurring semantic gardening | Deferred | Weekly CI flags structural/date issues. No agent compares docs with behavior or opens corrective PRs. This is a deliberate reduction from the article, not equivalent implementation. |
| Minimal generated content | Mostly met | Website, packages, tests, and distribution tooling are excluded by the generator. However, copied architecture/reference prose still describes starter-only components and setup. |
| GitHub template path | Less minimal than generator | A template copy includes the landing page and distribution tooling; README asks the agent to tailor it. There is no automated cleanup or acceptance test for that route. |

## Observed gaps and priorities

1. **Separate starter-specific documentation from generated guidance.** Generated `ARCHITECTURE.md` describes a website and distribution tooling that are absent. The optional-capabilities guide includes local installation commands for an excluded scaffold script. Label source-checkout-only instructions or generate neutral counterparts. Validate the resulting prose, not just file links.
2. **Validate the main promise in fresh sessions.** Try analysis and feature requests with Codex and Claude, inspect the resulting brief and tree, and record what each actually discovers. Include one repository-URL route and one installed-skill route. Current Python tests establish generation, not conversational success.
3. **Exercise a small collaboration and handoff.** Use independently owned artifacts, one integrator, and a fresh reader. Record whether intent and evidence can be recovered without the originating conversation. No orchestration framework is justified yet.
4. **Make the starter's own evidence current without leaking it into generated projects.** Its quality register and debt tracker remain generic. Maintain distribution evidence separately or reset those documents during generation before adding starter-specific links and claims.
5. **Clarify template adoption.** Prefer the generator for a minimal new project; make removal of the website and tooling explicit for GitHub template users.
6. **Keep semantic gardening optional until there is recurring drift.** If required for parity with the article, give the reviewer a bounded remit and record actual results. More structural rules alone will not detect incorrect prose.

## Verification

Checks run in this task on 2026-09-09: `python3 scripts/check_docs.py`, `python3 -m unittest discover -s tests` (6 tests), `npm run typecheck`, and `npm run build` all passed during the initial review. Python tests cover all four generated kinds, preservation of existing work and symlinks, dry runs, existing Git metadata, documentation drift, and installer idempotence/conflicts. Documentation and Python checks were repeated after adding this assessment.

The website source was inspected; its rendered browser behavior and live deployment were not checked. CI configuration was inspected, not remote run history. The user-supplied PDF was preserved unchanged and text-inspected; no source repository content was vendored.

## Work completed and next action

Captured the original objective, added this assessment, retained the two source URLs, and copied the supplied PDF into ignored local source storage with a checksum manifest. No implementation changes, skill installations, agent launches, publication, or deployment were performed. The next focused implementation task is to remove starter-specific prose from generated projects, followed by fresh-session acceptance trials.
