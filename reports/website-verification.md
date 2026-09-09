# Editorial website verification

Date: 2026-09-09. Status: verified locally; not published, deployed, or accepted by the user. Scope: three website routes and template isolation. Research is in [website-research.md](website-research.md).

## Delivered

Overview with explorable context/work/evidence map, synchronized folder explorer, and five-stage workflow; original ten-section essay with references; getting-started guide with four example kinds, agent prompts, CLI, skill installation, and practical details. Motion Primitives Pro/Noir behavior and stripped shadcn/ui composition are scoped to the website. All illustrations are original vector/HTML; no raster-generation or stock assets were needed.

## Local evidence

| Check | Observed result |
| --- | --- |
| `npm run build` | Pass after implementation and reviewer corrections; all three routes statically generated |
| `npm run typecheck` | Pass; final build also runs TypeScript |
| `python3 -m unittest discover -s tests` | Seven tests pass, including generated-project isolation |
| Documentation checks, root and template | Pass after final design documentation |
| Four project kinds | Analysis, feature, research, general generate into temporary destinations and pass standalone docs validation |
| Route/viewport matrix | Overview, guide, essay at 1440×1100 and 390×844; six captures show no document horizontal overflow |
| Navigation | Main navigation, essay link, home link reach the expected routes |
| Diagram controls | Atlas evidence selection changes caption; folder selection changes visible tree; Verify stage changes detail and evidence |
| Tabs | Pointer and ArrowRight selection switch examples; four CLI examples render real multiline commands |
| Clipboard | Copied research prompt equals the visible text; simulated denied write displays manual-copy fallback |
| Reduced motion | Browser emulation matches preference, scroll behavior is auto, CSS transition duration is effectively zero; selected evidence text remains reachable |
| Console | Zero errors or warnings during the tested browser session |
| Impeccable detector | One pass, empty findings; not rerun |
| Direction persistence | Product/surface files present; emitted HTML contains seed 73c6ef78 |

Captures are local, ignored review evidence under `.impeccable/review/`: desktop.png, mobile.png, hero-desktop.png, guide-desktop.png, guide-mobile.png, essay-desktop.png, essay-mobile.png. Reproduce by building, starting on port 3100, opening each route at the listed viewport dimensions, and capturing from the top. No screenshot is evidence of deployment.

## Independent finish review

A fresh agent reviewed seven captures, the product/surface contract, and sampled source. Initial disposition: fix. Findings: mobile atlas lacked relationship paths; the essay invitation simulated paper instead of using the declared vector language; the working-loop heading repeated the selected stage as an eyebrow.

Corrected all three in one batch. Rebuilt and recaptured the same seven files. Reviewer scored each resolved, found no visible material regression, and returned **disposition: ship**. The follow-up ship verdict covers the scored fixes; interaction evidence above belongs to the integrating agent, not the screenshot reviewer.

## Limits and next action

The code-first systems-atlas direction was an explicit working assumption after optional questions went unanswered, not an approved visual comp or standing preference. No real-device, screen-reader, fresh-machine, remote CI, or deployed-site acceptance is claimed. Browser interaction and reduced-motion checks were local Chromium checks.

The source-publication boundary for the paid component adaptation is recorded in [third-party notices](../THIRD_PARTY_NOTICES.md). The guide currently clones the published template-and-workflow branch. Before a later release, resolve premium source redistribution and update branch-specific links if the starter work merges. This task did not push or deploy changes.

Final design documentation: [DESIGN.md](../docs/DESIGN.md) records the built tokens and component rules; `.impeccable/design.json` supplies schema-version-2 extension metadata and eight static component specimens. A separate documenter extracted these from final source and captures, preserving decision-recording guidance.
