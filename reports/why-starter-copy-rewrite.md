# Essay rewrite and justification

Date: 2026-09-09. Scope: the local essay, its shared diagram captions and footer, and the homepage link to the essay. The [previous copy audit](why-starter-copy-review.md) and its snapshots describe the superseded draft. This record describes the rewrite requested after that audit.

The user asked for direct prose and defensible statements. I interpreted “if you can justify a statement, cut it” as “if you cannot justify it, cut it,” consistent with the surrounding request. Claims below are retained because they describe implemented setup, explicit project conventions, or attributed source material. Instructions are not presented as observed agent behavior.

## Editorial changes

- Replaced the metaphorical title with “Project structure for agent work.” The opening identifies the repository layout, generator, skill, and emitted files.
- Removed claims about a project remembering, choosing tools, or automatically making later sessions better informed. Named the person or agent responsible for recording context and performing work.
- Replaced “Keep what you can verify” with “Record evidence and uncertainty,” consistent with retained drafts, experiments, and review status.
- Removed the repetitive reading callout and closing slogans. Used headings that describe the section’s subject.
- Specified the difference between generated GitHub Actions configuration and a running scheduled job; between written scope rules and technical enforcement; and between instructions and a runtime service.
- Replaced the personal essay byline with “Starter documentation” and an update date. Reading time is explicitly approximate and includes the introduction, deck, body, and closing paragraph.
- Preserved the section IDs so existing links still work. Shared diagram/footer text changes also appear elsewhere on the website. The homepage essay teaser uses the new title and description.

## Paragraph justification

Paragraph identifiers refer to the ordered paragraphs in [essay.ts](../src/lib/essay.ts). Each row covers every assertion in the named paragraph; the source locations establish whether it is executable behavior or a stated convention.

| Paragraph | Why it is included | Evidence and limit |
| --- | --- | --- |
| Introduction: lead | Tell readers exactly what Starter is and creates | [Generator](../scripts/scaffold.py), lines 15–35 and 74–155; [skill](../skills/start-project/SKILL.md). These implement scaffolding, not substantive project work. |
| Introduction: attribution | Identify the primary source and the broader local scope | [OpenAI article](https://openai.com/index/harness-engineering/); [user objective](../docs/product-specs/starter-objective.md); four generator kinds. No transfer of OpenAI performance claims. |
| 1.P1 | Explain project-kind behavior and the draft brief | Generator KINDS, lines 17–33, and emitted brief, lines 102–131. No framework or data is selected. |
| 1.P2 | Explain what must be tailored after generation | Generator’s scope/open questions; skill lines 28–40; [agent instructions](../template/AGENTS.md), line 24. A person/agent must supply facts. |
| 2.P1 | Distinguish the source environment from this implementation | OpenAI sections on application legibility, repository knowledge, and autonomy; [source review](harness-workflow-review.md). Starter has no equivalent application-observation stack. |
| 2.P2 | Explain the working agreement and who completes it | [Workflow](../template/docs/WORKFLOW.md), line 7; emitted brief, lines 122–131. Fields are generated; task-specific details are not. |
| 3.P1 | Explain actual navigation, Claude import, and length check | Template AGENTS.md; [CLAUDE.md](../template/CLAUDE.md); [checker](../template/scripts/check_docs.py), lines 76–81. A check must run to detect violations. |
| 3.P2 | State selective reading as an instruction and identify decision storage | AGENTS.md line 3 and boundaries; [design guidance](../template/docs/DESIGN.md). No automatic retriever is supplied. |
| 4.P1 | Explain folder purposes and deferred code directories | [Template architecture](../template/ARCHITECTURE.md); data, analysis, reports, presentations and outputs guides. These are initially folders/guides, not completed work. |
| 4.P2 | Explain the supported evidence statuses and variant labels | [Quality register](../template/docs/QUALITY_SCORE.md), lines 3–9; [outputs guide](../template/outputs/README.md); reports guide. Status is recorded by contributors, not inferred by a classifier. |
| 5.P1 | Name the exact five-stage instruction | WORKFLOW.md lines 11–15 and map reference. No execution service is installed. |
| 5.P2 | Give concrete checks for each supported work type | WORKFLOW.md line 13; [reliability](../template/docs/RELIABILITY.md), lines 3–7; [presentations guide](../template/presentations/README.md). These checks need appropriate task tools. |
| 5.P3 | State the actual bounded-retry instruction | WORKFLOW.md line 14: two materially different attempts, preserve evidence, stop the failed loop, continue independent work. No runtime enforcement. |
| 6.P1 | Explain input/sensitivity/scope rules without claiming enforcement | AGENTS.md boundaries; [security](../template/docs/SECURITY.md); [ignore patterns](../template/.gitignore). No immutable storage or secret-content scanning. |
| 6.P2 | Give a concrete enforced boundary | Generator copy list and template source; [tests](../tests/test_starter.py), lines 26–58. Tests cover key files/references, not every possible future leak. |
| 6.P3 | Explain when project-specific checks may be added | Template DESIGN.md line 7; actual dependency boundaries deferred in architecture. Schema/dependency/export checks are examples of future additions. |
| 7.P1 | Explain the shared-work protocol | [Plans](../template/docs/PLANS.md), lines 3–26; AGENTS.md lines 28–34; WORKFLOW.md line 21. No workers or worktrees are created by scaffolding. |
| 7.P2 | Explain the handoff expectation and its evidence gap | Same handoff instructions; [current quality register](../docs/QUALITY_SCORE.md), portable workflow row; original acceptance plan. Generator tests do not establish fresh-agent handoff success. |
| 8.P1 | Explain authority boundaries and avoidance of redundant approvals | WORKFLOW.md lines 7 and 19; security guidance. Actual permissions belong to the user/host. |
| 8.P2 | Describe the checker’s real scope and what a pass cannot mean | check_docs.py lines 65–128; WORKFLOW.md line 19; template quality guidance. No factual or behavioral agent assessment. |
| 9.P1 | Justify maintenance and bound its effort | OpenAI’s Entropy and garbage collection section; WORKFLOW.md lines 15 and 25. Refers to copying repository patterns, not model training. |
| 9.P2 | Describe included CI and actual hosting requirements | [Generated workflow](../template/.github/workflows/docs.yml); [GitHub scheduling documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule), checked in the preceding audit. Local generation does not schedule anything. |
| 9.P3 | Identify semantic review as contributor work and optional automation as separate setup | WORKFLOW.md line 25; PLANS.md line 32. No recurring reviewing agent is included. |
| 10.P1 | Direct the reader from setup to a concrete task | Shared skill tailoring/finish instructions; generated brief’s first slice and acceptance fields. Tools remain task-specific. |
| 10.P2 | State intended acceptance checks and the limited meaning of generation success | User objective; WORKFLOW.md verification; generator structural validation. These are checks to perform, not results already achieved. |
| Closing | Explain the next navigation/action | [Getting-started route](../src/app/getting-started/page.tsx), generator and skill. The button opens instructions; it does not generate a project in the browser. |

## Supporting copy justification

The atlas now tells contributors to record project context, choose tools for a task, and retain evidence with uncertainty. Each caption is an imperative grounded in the template’s brief, architecture, quality register, and workflow. The return arrow says “Update decisions and evidence”; it describes a contributor action rather than automatic learning. The figure remains labeled “A working convention” on desktop, and the prose explicitly states its instruction-only nature across viewports.

The workflow controls still select explanatory text. Verify says “Check the result against the brief”; Review specifies missing access, evidence, or decisions; Finish asks for changed work, checks, and unresolved issues. The Finish artifact label names relevant records rather than requiring a new decision or handoff document on every task. The recovery caption summarizes repair/retest and stopping repeated failure; the body provides the exact two-attempt condition.

The shared footer now describes project structure and instructions, rather than a growing foundation. Source labels identify the primary article, supplementary collection, detailed review, and template defaults. The template label acknowledges that generation tailors the output. No adoption, performance, productivity, or demonstrated autonomous-work claim is included.

## Verification

`npm run build` and `npm run typecheck` passed. The revised essay was inspected at 1440px and 390px widths: no horizontal overflow, and all contents anchors resolved. All three atlas captions and the Finish workflow state rendered their revised copy. The homepage teaser opened the essay route, and its shared footer fit at the narrow width. Desktop/mobile header and mobile atlas screenshots were visually inspected. No browser console errors were reported. Local screenshots are in the ignored `.impeccable/review/essay-rewrite-*` files. Structural documentation checks passed.

The source justification above was checked against all 23 revised body paragraphs and the supporting copy. Existing behavioral tests were not repeated for this copy-only change; the previous audit ran them, and generator/template/test hashes remain unchanged. This rewrite changes copy only; the generator, reusable template, and project workflow implementation are unchanged. The earlier audit remains historical evidence rather than an assessment of the rewritten sentences.
