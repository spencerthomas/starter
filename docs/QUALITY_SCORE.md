# Quality and evidence

Reviewed locally: 2026-09-09. This register describes the starter distribution. Generated projects receive an unassessed register from `template/`.

| Area | Grade | Evidence | Gap / next check |
| --- | --- | --- | --- |
| Template generation and isolation | Verified locally | Seven [behavior tests](../tests/test_starter.py) pass; all four kinds generate and run their standalone checker | Fresh-machine installation not exercised |
| Knowledge structure | Verified locally | `python3 scripts/check_docs.py` and `python3 scripts/check_docs.py template` pass | Structural checks do not establish semantic accuracy |
| Portable agent workflow | Gap | [Workflow](../template/docs/WORKFLOW.md), shared skill handoff, and brief agreement implemented and routed | Observe fresh Codex/Claude sessions and a shared-task handoff |
| Website build | Verified locally | `npm run build` and `npm run typecheck` pass after CTA update | Browser behavior, remote CI, and deployment not verified |
| Article adaptation | Verified locally | [Ten-section review and source diagrams](../reports/harness-workflow-review.md); images extracted and inspected | Interpretation is not a guarantee of future agent behavior |

See the [implementation handoff](exec-plans/completed/starter-workflow.md). No overall numerical score is inferred. Passing local checks is not publication or user acceptance.
