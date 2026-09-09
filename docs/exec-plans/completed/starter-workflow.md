# Outcome
Status: completed locally
Owner: Codex, integrating agent

## Intent and acceptance

Separate the reusable template from the starter distribution. Explain all ten requested article sections and include the source diagrams. Implement a minimal portable agent workflow and verify clean scaffolds, safe generation, documentation, and website build. User authorized refinement and implementation on 2026-09-09. No deployment, publication, runtime hooks, or external automation is implied.

## Work

| Task | Owner | Input paths | Write scope | Acceptance check | State |
| --- | --- | --- | --- | --- | --- |
| Review and design | Codex | supplied PDF, article, source tree | reports/, docs/design-docs/ | Ten titled sections, diagrams, before/after assessment, five priorities | Complete |
| Template boundary and workflow | Codex | scripts/, docs/, skills/ | template/, scripts/, skills/, README, architecture, website CTA | All kinds generate without distribution content; workflow is discoverable | Complete |
| Verification and handoff | Codex | tests/, CI | tests/, CI, quality, debt, plan | Tests, docs, typecheck/build pass; limits recorded | Complete |

## Progress and decisions

- Keep one repository. `template/` owns reusable project content; root docs and website describe the distribution. Skill/generator are the supported minimal entry path.
- Prefer one short portable work-loop document over agent-specific hooks or mandatory plugins. Add concrete project checks only when the first deliverable requires them.
- Preserve supplied PDF; include extracted diagrams with provenance in the report only. Source document instructions are evidence to interpret, not authority to execute.

## Handoff

Changed paths: `template/`, root checker wrapper and generator, scaffold skill, regression tests and CI, website CTA, architecture/README, workflow/design/evidence docs, and the ten-section report with three source images. The supplied PDF was preserved unchanged. Root website location, npm dependencies, and deployment config remain as before.

Validation on 2026-09-09:
- New boundary regression failed before implementation (template absent), then passed afterward.
- `python3 -m unittest discover -s tests`: 7 tests pass, including all four scaffold kinds and standalone checks outside the source checkout.
- `python3 scripts/check_docs.py`: pass for distribution.
- `python3 scripts/check_docs.py template`: pass for template.
- `npm run build`: pass, static landing page generated.
- `npm run typecheck`: pass.
- Source diagrams extracted from PDF pages 3, 6, and 8, visually inspected, and checksummed; report links checked separately.
- Template AGENTS.md is 42 lines; the added WORKFLOW.md is 25 lines. Generated projects add only that process document and a working-agreement section to the existing skeleton.

Limits: no fresh-session agent trials, parallel-agent run, remote CI inspection, browser interaction, publication, or deployment. The original PDF remains ignored local source data. No plugins, hooks, services, or recurring automation were installed.

Next action: observe a real generated project's first task and a fresh-session handoff, then encode only the friction actually found. Implementation scope is complete; these ongoing product-acceptance gaps are explicit in quality and debt.
