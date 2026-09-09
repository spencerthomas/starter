# Editorial website
Status: completed locally
Owner: Codex, integrating agent

## Intent and acceptance

Research purpose, sources, and repository shape before designing. Build a complete editorial Starter website: overview diagrams, a substantial original essay, practical getting-started paths, premium Motion Primitives interactions, and restrained shadcn/ui primitives. Preserve project truth and template isolation. User permits a distinct visual identity and supplies Noir as reference material. No deployment or push requested in this turn.

## Work

| Task | Owner | Inputs | Write scope | Acceptance | State |
| --- | --- | --- | --- | --- | --- |
| Research and source mapping | Codex | docs, reports, source, article, Pro/Nim, noir.zip | reports/website-research.md, docs | Source-backed narrative, content map, component provenance | Complete |
| Design and implementation | Codex | research, Impeccable direction, stated audience assumption | src/, public/, package/config, product/surface docs | Overview, essay, guide; real accessible interactions; narrow layouts | Complete |
| Finish review | Impeccable reviewer | screenshots, contract, request | review evidence only | Independent disposition and any material fixes | Complete |
| Design documentation | Impeccable documenter | final source and screenshots | docs/DESIGN.md and sidecar | Captures built identity without touching template | Complete |

## Decisions

- Keep the existing Next.js application and template boundary. Website source and dependencies do not enter generated projects.
- Source archive is read-only reference material, extracted under ignored tmp/; never execute its setup or copy its fictional claims, customer logos, or stock product screenshots.
- Use three core routes: overview, getting started, and an editorial essay with references. UI diagrams explain the actual repository and verification loop.
- Bounded verification: build fully, inspect desktop/mobile in one batch, fix in one batch, confirm at most once, then independent finish review and documentation.

## Handoff

Three local routes implemented: overview, essay, and guide. Source research, archive checksum, component provenance, product truth, and surface contract are recorded. The code-first atlas direction was an explicit assumption after optional questions went unanswered; it is not a user-approved comp. Generated template files are unchanged.

Build and typecheck pass. Seven scaffold tests pass; all four kinds generate. Root/template documentation checks pass. Browser validation covers three routes at desktop/mobile sizes, tabs, navigation, diagram states, clipboard contents/fallback, reduced-motion emulation, and no browser errors/overflow. See [verification](../../../reports/website-verification.md) for evidence and limits.

Independent finish review initially returned fix; mobile connectors, flat vector essay artwork, and the redundant stage label were corrected. The reviewer scored all three resolved and returned disposition: ship, limited to those scored fixes. Final visual documentation merges the built identity with existing design-process guidance; template docs remain unchanged.

No push or deployment. Before later public-source publication, resolve the paid component distribution terms in third-party notices. The guide targets the already published template-and-workflow branch; update branch-specific links when merged.
