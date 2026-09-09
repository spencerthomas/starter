# Copy and claim review: “The project is part of the prompt”

Reviewed 2026-09-09 against [the local essay](http://localhost:3100/why-starter) and the current working tree. **Review only: website copy has not been edited.**

This is the pre-rewrite audit. The essay was subsequently revised; see the [rewrite and paragraph justification](why-starter-copy-rewrite.md) for the current copy. Original quotes and snapshots below are retained as review history.

## Overall finding

The essay is broadly faithful to the intended project, but it sometimes describes an operating convention as if it were an automatic or observed result. Starter actually generates a documented repository skeleton and supplies a structural checker. It asks agents and people to establish scope, verify work, retain evidence, and leave handoffs. It does not itself retrieve relevant context, execute an agent loop, preserve all inputs immutably, choose tools, or guarantee a useful next session. The strongest paragraphs name files and mechanisms. The weakest use “remembers,” “learns,” or declarative agent behavior without naming the actor or the evidence limit.

The remedy is mostly copy precision and concrete examples—not additional infrastructure merely to justify ambitious language. A convention is a legitimate design feature when labeled as one.

## Most consequential edits

1. **Say what the product is near the top.** A reusable repository layout, a shared scaffolding skill, a Python generator, and a short working guide. The current title/deck/lead defer that literal description.
2. **Change automatic-sounding outcomes into explicit instructions.** “The agent retrieves,” “Workers return,” “ready for the next session,” and “the project chooses its tools” need an actor or qualification. See 3.P2, 7.P2, C04, D13, D17.
3. **Use “records” or “takes cues from” instead of ambiguous memory/learning language.** This is repository context and maintenance, not model training or a memory service. See I01, 9.P1, D11–D20.
4. **Distinguish included configuration from running services.** The weekly checker is a GitHub Actions workflow that needs the GitHub/default-branch environment; a semantic-review agent is not installed. See 9.P3. File ignore patterns also do not enforce confidentiality or immutability; see 6.P1.
5. **Keep uncertainty rather than only what is verified.** “Keep what you can verify” conflicts with the project’s explicit provision for drafts, experiments, open questions, and unassessed results. Use “Keep the evidence and its limits.” See D18.

## What “designed to do this” means in this review

| Evidence level | What it establishes | What it does not establish |
| --- | --- | --- |
| Implemented | A source path or executable behavior actually creates/checks something | That the result meets every user need |
| Documented convention | Agent/user instructions explicitly call for the behavior | That agents obey it or a runtime enforces it |
| Conditional capability | Configuration/extension supports it after named setup | That it is running now or installed by generation |
| Editorial inference | A reasoned principle, metaphor, example, or intended benefit | A measured product outcome or universal fact |
| Unverified outcome | A desirable result without sufficient run evidence | Acceptance; absence of evidence is not evidence the design cannot work |

An instruction file can support “designed to encourage X.” It cannot, by itself, support “X reliably happens.” Tests and the fresh scaffold observation corroborate generator behavior; the current quality register still records fresh Codex/Claude and handoff trials as gaps.

## Scope, method, and evidence

“Line by line” means stable semantic units—each sentence, heading, label, and diagram state—rather than visual line wraps, which change with viewport width. Every body paragraph has a purpose and editorial verdict; every sentence within it has its own source/support/action row. Repeated contents headings and shared labels are explicitly cross-referenced rather than silently omitted.

I opened the local route, captured its rendered main text, and selected all three atlas states and all five loop stages. The initial capture was at the narrow viewport left by the previous review; desktop-only hint/tag text and shared navigation/footer were additionally inspected in source. The exact main text and states are preserved in [page-snapshot.json](why-starter-copy-review/page-snapshot.json). The body paragraphs were compared against `src/lib/essay.ts`; source-line locations below refer to this snapshot.

I read the generator, emitted brief, template instructions and folder guides, CI configuration, checker implementation, and tests. A fresh research scaffold produced 31 files including three `.gitkeep` placeholders, with no `src/` or `package.json`; [scaffold-observation.json](why-starter-copy-review/scaffold-observation.json) preserves its file list and brief. Seven existing behavior tests passed during this review. This is direct evidence for structural features, not a new agent-workflow acceptance test.

The primary article’s author/date and relevant sections were checked live. Official Claude Code import semantics and GitHub scheduling conditions were also checked. The linked remote adaptation report and template AGENTS.md returned HTTP 200 and matched their local files. The entire external template tree and every downstream reference were not exhaustively audited. Local review scope is the working tree atop HEAD `d2f64312c40880f52f337b8f31b806798e2a2085`, not that commit alone; the website is still uncommitted. [Source hashes](why-starter-copy-review/source-manifest.json) identify the implementation files checked.

This is a claim/provenance review, not a usability study, security audit, or proof of model behavior. “Source” means the supporting evidence for a line; it does not mean the wording was copied from that source or that this review can reconstruct the draft’s hidden generation history.

## Suggested literal opening

> Starter is a reusable repository layout, a scaffolding tool, and a short working guide for projects with coding agents. It creates a project brief, a map to maintained knowledge, places for analysis and deliverables, and a structural documentation check. The working guide asks agents to inspect, act, verify, review, and record useful context. Those are conventions to follow and test in use; they are not an installed agent runtime.

This is a proposed replacement, not an implemented edit. It is supported by the generator, agent map, workflow, and checker—not by an assumed improvement in agent performance.

## Title, framing, metadata, and opening paragraphs

| ID | Exact copy | Why it is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| F01 | The project is part of the prompt. | State the central editorial thesis. | [A](#source-a), [C](#source-c), [W7](#source-w7). Metaphor: selected repository files become context when read/imported. The entire project is not automatically inserted into every prompt. | Keep only with an early literal explanation of what Starter creates and what agents must read. |
| F02 | A small foundation for working with agents—and a way to keep the intent, evidence, and learning close to the work. | Describe the benefit beneath the title. | [G](#source-g), [B](#source-b), [Q](#source-q), [W15](#source-w15). Files and conventions support this; evidence and learning are not automatically collected. “Small” is relative: fresh generation has 31 files including placeholders. | Replace with a concrete deck: “A reusable repository structure and working guide for code, analysis, and research projects.” |
| F03 | Tom Spencer | Assign authorial responsibility. | [PAGE](#source-page), [O](#source-o). The user owns the project and commissioned the site. This essay was drafted by the agent; the byline alone does not establish Tom wrote or approved these words. | Treat as editorial attribution pending Tom’s approval; do not infer endorsement from a hardcoded label. |
| F04 | September 9, 2026 | Give a date to the article. | [PAGE](#source-page). Hardcoded local drafting date; not evidence of public publication. | Label it a draft/review date until released; update if publication occurs later. |
| F05 | 7 min read | Set a reading-time expectation. | [PAGE](#source-page). Implemented estimate: ceiling of 1,323 body words / 220. It omits surrounding copy; all captured paragraphs total 1,464 words and still round to seven. Not timed reader evidence. | Keep as approximate; ideally count the complete article consistently. |
| F06 | The project is part of the prompt — Starter | Name the browser/search page. | [PAGE](#source-page). Metadata is implemented and matches the headline; same metaphor limit as F01. | Keep; branding is clear. |
| F07 | An essay on repository knowledge, observable work, and a smaller application of harness engineering. | Summarize the route in metadata. | [PAGE](#source-page), [G](#source-g), [W13](#source-w13). Accurate description of the article’s topics; “observable work” refers to a convention rather than bundled instrumentation. | Keep; “practical adaptation” is more concrete than “smaller application.” |
| F08 | In this essay | Introduce the contents navigation. | [PAGE](#source-page). Implemented section anchors generated from the ten headings. | Keep. Each heading is assessed below; the contents repeats it with its trailing period removed. |
| I01 | A good project remembers why it exists, makes its work inspectable, and gives the next person—or agent—a useful place to begin. | State what the essay values before its argument. | [O](#source-o), [A](#source-a), [B](#source-b), [W13](#source-w13), [P](#source-p). Editorial criterion; files can preserve intent and references, but inspectability and successful resumption need actual work and checks. | Revise “remembers” to “records”; add a concrete object here instead of another benefit metaphor. |
| I02 | Starter is an attempt to make that easier. | Position the project as an experiment rather than a proven system. | [O](#source-o), [GAP](#source-gap). Honest qualification; no measured ease-of-use result is claimed. | Keep “attempt,” but replace “that” with a concrete action if the preceding sentence changes. |
| I03 | It draws on the ideas in Ryan Lopopolo’s harness engineering essay and adapts them to projects that may be much smaller, less settled, or not primarily about software at all. | Credit the primary source and explain the adaptation’s scope. | [H](#source-h), [O](#source-o), [G](#source-g), [HR](#source-hr). Attribution verified live. Analysis/research/general presets support the intended scope; usefulness outside software remains a design goal, not validated comparative evidence. | Keep and link the source; add a local template/workflow link to show the adaptation. |

The introductory paragraph comprises I02 and I03: I02 honestly limits the claim; I03 attributes the idea and broadens its intended use. Keep that function, but put the literal product definition before further metaphors. F02 is a single-sentence deck; I01 is a separate lead paragraph. F03–F05 are metadata, not proof of personal authorship, publication, or measured reading time.

## Paragraph and sentence audit

### 1. Begin with a question, not a stack.

**Heading / contents label:** “Begin with a question, not a stack.”

**Why:** Focus the opening on intent before tooling. **Source/design:** [O](#source-o), [G](#source-g), [AR](#source-ar) — A design preference actually embodied by no default app stack. **Copy action:** Keep; a plain “Start with the question” would avoid the oppositional formula. The contents repeats this heading without the final period; the same assessment applies.

#### 1.P1 — paragraph at essay.ts line 6

**Copy location:** [essay.ts](../src/lib/essay.ts), line 6. **Why this paragraph exists:** Recognize the reader’s early, unsettled work before proposing a repository.

**Paragraph verdict:** Tighten: useful audience framing, but the opening quantifier is unsupported.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 1.P1.S1 | Most projects begin before anyone knows exactly what they are building. | Normalize uncertainty at the start. | [O](#source-o). Editorial generalization; no research here establishes what most projects do. | Replace “Most” with “Projects often”; do not present prevalence as measured. |
| 1.P1.S2 | There is a question to investigate, a workflow that feels awkward, a dataset that might explain something, or a report that needs to exist. | Name four concrete entry situations. | [O](#source-o), [G](#source-g). Intended use cases; analysis/feature/research/general presets exist. Examples, not user evidence. | Keep; this grounds an otherwise abstract opening. |
| 1.P1.S3 | Choosing a framework is often not the first useful decision. | Explain why a stack is not the first requirement. | [AR](#source-ar), [SK](#source-sk). Documented design choice; no app scaffold is installed. “Often” remains judgment. | Keep, or combine with the first sentence to reduce repetition. |

**Possible revision:** Projects often start with a question rather than a settled implementation.

#### 1.P2 — paragraph at essay.ts line 7

**Copy location:** [essay.ts](../src/lib/essay.ts), line 7. **Why this paragraph exists:** Give the first tangible account of what a new project receives.

**Paragraph verdict:** Keep the concrete claims; qualify “handful” and distinguish files from later work.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 1.P2.S1 | Starter gives that early work a home. | Connect the problem to the product. | [G](#source-g), [OBS](#source-obs). Implemented as generated files/directories; “home” is a metaphor. | Keep only if the next sentence explains what is created. |
| 1.P2.S2 | The initial brief names an intended outcome. | Name the central artifact. | [B](#source-b), [OBS](#source-obs). Implemented: user brief is written under Intended outcome; it may still be draft or vague. | Keep; do not imply the generator independently defines a good outcome. |
| 1.P2.S3 | A handful of folders separate context, working material, and deliverables. | Explain how organization helps. | [AR](#source-ar), [G](#source-g), [OBS](#source-obs). Implemented folder separation. Fresh output contains 31 files, not just a few empty folders. | Prefer “Separate folders”; avoid implying a smaller payload than exists. |
| 1.P2.S4 | The rest can emerge through use. | Allow scope to emerge. | [B](#source-b), [SK](#source-sk). Documented convention; scope explicitly remains open. No automatic project evolution. | Keep as permission, not automation. |
| 1.P2.S5 | A research project does not inherit an application shell; a small feature experiment does not need the architecture of a platform. | Show absence of stack assumptions across project kinds. | [G](#source-g), [T](#source-t), [AR](#source-ar). Research receives no app shell; feature advice is a normative preference, not proof no experiment ever needs platform structure. | Keep the first clause; change the second to “does not inherit a platform architecture.” |

**Possible revision:** Starter creates a project brief, an agent map, and separate places for maintained knowledge, working material, and deliverables. It does not choose an application stack.

#### 1.P3 — paragraph at essay.ts line 8

**Copy location:** [essay.ts](../src/lib/essay.ts), line 8. **Why this paragraph exists:** Extend minimal scaffolding into a rule for later growth.

**Paragraph verdict:** Keep the principle, but avoid contradicting the fixed starter layout.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 1.P3.S1 | The same principle applies once the work becomes substantial. | Bridge small beginnings to larger work. | [A](#source-a), [AR](#source-ar). Convention; no scaling study establishes the result at larger size. | Optional cut: it repeats the paragraph’s implied transition. |
| 1.P3.S2 | Add a folder when it has something to hold. | Avoid empty speculative structure. | [A](#source-a), [G](#source-g). Convention for additions, not literal initial behavior: generator intentionally creates empty plan/generated directories. | Say “Add further folders when the work needs them.” |
| 1.P3.S3 | Add a dependency when it enables a real check or capability. | Tie dependency cost to a purpose. | [W12](#source-w12), [SK](#source-sk). Explicit instruction; no dependency-policy linter is supplied. | Keep; “only” is appropriate as a chosen convention. |
| 1.P3.S4 | Keep the first result small enough that someone can inspect it and decide what should happen next. | Make early output assessable. | [W19](#source-w19), [B](#source-b). Reviewability is instructed; no automatic size or usability check. | Keep, perhaps replace “first result” with “each change” in this later-growth paragraph. |

**Possible revision:** After the required starter layout, add folders and dependencies only for concrete work. Keep each change small enough to inspect.

### 2. The environment is part of the work.

**Heading / contents label:** “The environment is part of the work.”

**Why:** Introduce the environment-design argument. **Source/design:** [W7](#source-w7), [H](#source-h) — Interpretive thesis, supported by documented working agreement, not proof of improved agent performance. **Copy action:** Keep. The contents repeats this heading without the final period; the same assessment applies.

#### 2.P1 — paragraph at essay.ts line 15

**Copy location:** [essay.ts](../src/lib/essay.ts), line 15. **Why this paragraph exists:** Introduce environment design as the reason a scaffold could help an agent.

**Paragraph verdict:** Keep, with practical rather than universal wording.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 2.P1.S1 | A capable agent still needs to know what success means, where the relevant information lives, and how to observe the result of an action. | Identify necessary task context and feedback. | [W7](#source-w7), [W11](#source-w11), [W13](#source-w13), [H](#source-h). Starter convention; conceptual source: Redefining the role of the engineer and Increasing application legibility. Not an empirical sufficiency claim. | Keep; name “an agent” rather than implying capability has been measured. |
| 2.P1.S2 | When any of those are missing, repeating the instruction is unlikely to fix the underlying problem. | Discourage prompt repetition without diagnosing missing inputs. | [W14](#source-w14). Explicit bounded-recovery convention supports the recommendation, not a measured failure probability. | Keep as advice; “unlikely” is an inference. |

**Possible revision:** An agent needs a clear outcome, relevant context, and a way to inspect results. When those are missing, improve the setup before repeating the same instruction.

#### 2.P2 — paragraph at essay.ts line 16

**Copy location:** [essay.ts](../src/lib/essay.ts), line 16. **Why this paragraph exists:** Attribute the central idea while preventing transfer of OpenAI’s outcomes to this starter.

**Paragraph verdict:** Keep; shorten its two generic caveat sentences.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 2.P2.S1 | That is the useful idea behind harness engineering: improve the environment around the agent. | Define the essay’s use of the term. | [H](#source-h). Source synthesis: Redefining the role of the engineer; not a universal formal definition. | Say “The idea we take from harness engineering is…” to own the interpretation. |
| 2.P2.S2 | In the OpenAI account, that includes tools for running and observing an application, repository knowledge, automated checks, and review loops. | Name what the source environment contains. | [H](#source-h), [HR](#source-hr). Source-backed: Increasing application legibility, repository knowledge, review/autonomy. Not all of this is implemented here. | Keep; follow immediately with what Starter actually includes. |
| 2.P2.S3 | The specific environment matters. | Signal context dependence. | [H](#source-h). Source-backed caution in Increasing levels of autonomy. | Merge with the following sentence; alone it adds little. |
| 2.P2.S4 | Its results cannot be transferred to a new repository by copying a directory tree. | Reject copying a reported outcome by copying files. | [H](#source-h), [GAP](#source-gap). Source caution plus implementation boundary; this project has no equivalent runtime toolchain or acceptance evidence. | Keep; one of the essay’s important qualifications. |

**Possible revision:** OpenAI’s account combines repository knowledge, runtime visibility, checks, and review. Starter adapts part of that environment; copying its folder layout does not reproduce the same results.

#### 2.P3 — paragraph at essay.ts line 17

**Copy location:** [essay.ts](../src/lib/essay.ts), line 17. **Why this paragraph exists:** Translate a broad environment argument into fields an agent and person can use.

**Paragraph verdict:** Keep; the six-sentence question sequence is longer than necessary.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 2.P3.S1 | For Starter, the smaller translation is a working agreement. | Name the local adaptation. | [B](#source-b), [W7](#source-w7). Implemented brief section plus documented instruction to tailor it. | Keep; link directly to an example generated brief or generator definition. |
| 2.P3.S2 | What are we trying to achieve? | Ask for the desired outcome. | [B](#source-b), [W7](#source-w7). Field exists; value is supplied/inferred, not guaranteed well-defined. | Keep as one item in a compact list rather than a standalone rhetorical sentence. |
| 2.P3.S3 | What inputs and tools are available? | Ask what can be used. | [B](#source-b), [W7](#source-w7). Placeholder/instruction exists; no source discovery or tool provisioning in the Python generator. | Keep; make clear it records availability rather than creates it. |
| 2.P3.S4 | What is in scope? | Ask for boundaries. | [B](#source-b), [W19](#source-w19). Scope text and authority convention exist; no technical scope sandbox. | Keep, with the other agreement fields. |
| 2.P3.S5 | What evidence would establish a useful result? | Ask for acceptance evidence. | [B](#source-b), [W13](#source-w13). Template explicitly says replace generic evidence text with a concrete method. | Keep; this is an important unfinished step after scaffolding. |
| 2.P3.S6 | These belong in the brief or current plan, where both a person and the next agent can find them. | Give those decisions a durable location. | [B](#source-b), [P](#source-p). Files/plan format exist. Accessibility depends on saving the information and agent file access. | Keep; “can find” is a reasonable affordance, not tested fresh-session success. |

**Possible revision:** The brief’s working agreement records the intended outcome, scope, available inputs and tools, and the evidence needed for a useful result.

### 3. Give the agent a map.

**Heading / contents label:** “Give the agent a map.”

**Why:** Name progressive disclosure in familiar language. **Source/design:** [A](#source-a), [K](#source-k), [H](#source-h) — A real short entry map and length check exist. **Copy action:** Keep; link the actual map in the body. The contents repeats this heading without the final period; the same assessment applies.

#### 3.P1 — paragraph at essay.ts line 24

**Copy location:** [essay.ts](../src/lib/essay.ts), line 24. **Why this paragraph exists:** Explain progressive disclosure without requiring the reader to know the term.

**Paragraph verdict:** Keep; trim one repeated short-map explanation if the callout stays.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 3.P1.S1 | A repository can contain more context than any single task needs. | Explain why a repository needs selective reading. | [A](#source-a), [H](#source-h). Principle from repository-knowledge section; local map explicitly says read relevant documents. | Keep; “can” appropriately avoids asserting every project is large. |
| 3.P1.S2 | Loading all of it at once makes the important parts harder to find. | Describe the problem with loading everything. | [H](#source-h), [A](#source-a). Source-backed design rationale; no context-window experiment is performed here. | Keep as rationale, not a quantified result. |
| 3.P1.S3 | A short entry document is useful precisely because it does not try to be the entire manual. | Define the entry document’s job. | [A](#source-a), [K](#source-k). Convention plus actual 100-line cap for AGENTS.md. It checks length, not navigational usefulness. | Keep; link AGENTS.md so readers can inspect the example. |

#### 3.P2 — paragraph at essay.ts line 25

**Copy location:** [essay.ts](../src/lib/essay.ts), line 25. **Why this paragraph exists:** Prove that “map” refers to real files and a supported agent entry path.

**Paragraph verdict:** Revise the automatic-reading implication and slightly improve routing precision.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 3.P2.S1 | AGENTS.md points to the sources of truth: the brief for intent, architecture for boundaries, plans for current work, and quality records for evidence and gaps. | Name source-of-truth destinations. | [A](#source-a), [B](#source-b). Implemented links, partly indirect: README links brief; AGENTS points to spec index and architecture. | Keep with “routes readers to”; do not imply every destination is a direct link from one table. |
| 3.P2.S2 | Claude uses the same map through CLAUDE.md. | Describe the Claude integration. | [C](#source-c), [CC](#source-cc), [T](#source-t). Implemented import syntax; supported by official docs and a structural test. Fresh Claude behavior not exercised in this audit. | Specify “Claude Code is configured to import…” for exact product and evidence status. |
| 3.P2.S3 | More detailed documents are read when the task calls for them. | Describe selective retrieval as if it occurs. | [A](#source-a), [GAP](#source-gap). Documented instruction only; no retrieval engine or observed fresh-session compliance. | Change “are read” to “the instructions ask agents to read.” |

**Possible revision:** AGENTS.md routes readers through the README and spec index to the brief, architecture, plans, and quality records. CLAUDE.md imports the same map for Claude Code. The instructions ask agents to read deeper documents as needed.

#### 3.P3 — paragraph at essay.ts line 26

**Copy location:** [essay.ts](../src/lib/essay.ts), line 26. **Why this paragraph exists:** Give readers a test for where durable decisions should live.

**Paragraph verdict:** Keep the useful maintenance test; reduce conceptual repetition.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 3.P3.S1 | This is progressive disclosure applied to project knowledge. | Name the pattern after explaining it. | [A](#source-a), [H](#source-h). Interpretation of the linked-document organization, not a separate feature. | Keep; this earns the technical term with an example. |
| 3.P3.S2 | It also creates a practical maintenance question: if an agent needs to know something, where would it look? | Turn the pattern into a diagnostic question. | [A](#source-a), [P](#source-p). Editorial heuristic consistent with navigation/handoff rules. | Keep; it is actionable and low overhead. |
| 3.P3.S3 | A decision that exists only in an old conversation is difficult to recover. | Explain the failure of chat-only decisions. | [A](#source-a), [P](#source-p). Plausible rationale; external chat history may exist, so recovery is not impossible. | Keep “difficult”; avoid a stronger “lost” claim. |
| 3.P3.S4 | Capture its durable part in the repository, with a link to the evidence that supports it. | Specify the corrective action. | [A](#source-a), [W15](#source-w15), [D](#source-d). Explicit convention for durable knowledge/provenance; no automatic chat capture. | Keep; consider “Ask the agent to capture…” to name the actor. |

#### Callout after 3.P3

| ID | Exact copy | Why it is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| C01 | Read what the task needs. | Provide a memorable callout for selective reading. | [A](#source-a). Direct instruction; repeats the section’s point. | Keep only if the callout materially aids scanning; otherwise remove to reduce repetition. |
| C02 | The entry map stays short. | Explain the first half of progressive disclosure. | [K](#source-k), [A](#source-a). Mechanically checked at no more than 100 lines when the checker is run; actual template is 42 lines. It can still become long between checks. | Prefer “The checker caps AGENTS.md at 100 lines” if specificity is useful. |
| C03 | The repository holds the detail. | Explain where deeper context lives. | [AR](#source-ar), [G](#source-g). Folders and base guides exist. Task-specific details must be added. | Keep as “Keep the detail in linked repository documents.” |
| C04 | The agent retrieves it as the work calls for it. | Describe the intended agent reading behavior. | [A](#source-a), [GAP](#source-gap). Convention only; no retriever, relevance ranker or guaranteed behavior is implemented. | Change to “The instructions ask the agent to read the relevant documents as needed.” |

**Callout paragraph verdict:** C02–C04 repeats the main argument. Either remove it or retain a shorter instruction; C04 must stop implying automatic retrieval.

### 4. Context, work, and evidence are different things.

**Heading / contents label:** “Context, work, and evidence are different things.”

**Why:** Introduce provenance and acceptance distinctions. **Source/design:** [Q](#source-q), [AR](#source-ar) — A useful conceptual separation; context and work can also contain evidence, so these are roles rather than mutually exclusive types. **Copy action:** Keep, but avoid presenting a strict information taxonomy. The contents repeats this heading without the final period; the same assessment applies.

#### 4.P1 — paragraph at essay.ts line 33

**Copy location:** [essay.ts](../src/lib/essay.ts), line 33. **Why this paragraph exists:** Establish the difference between available material and accepted evidence.

**Paragraph verdict:** Keep the distinction; shorten the four consecutive negations.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 4.P1.S1 | An input is not a conclusion. | Separate source material from an inference. | [AR](#source-ar), [D](#source-d), [Q](#source-q). Explicit knowledge/provenance convention; no automated epistemic classifier. | Keep or combine into the proposed compact sentence. |
| 4.P1.S2 | An experiment is not an accepted result. | Separate exploration from acceptance. | [AN](#source-an), [RP](#source-rp), [Q](#source-q). Status conventions exist; actual acceptance requires a reviewer/check. | Keep the concept; can combine with the first sentence. |
| 4.P1.S3 | A successful build is not proof that a user can complete the intended task. | Distinguish a build from behavioral proof. | [W13](#source-w13), [Q](#source-q). Explicit verification limit; logical distinction, not a claim that builds are useless. | Keep as the concrete example. |
| 4.P1.S4 | Keeping these distinctions visible is more useful than giving every artifact the same reassuring status. | State why these labels matter. | [Q](#source-q), [RP](#source-rp). Editorial value judgment; no comparison study of labeling practices. | Cut “reassuring” for a less admonishing tone, or omit after the example. |

**Possible revision:** Keep inputs, experiments, and accepted results visibly distinct. A passing build, for example, does not establish that the user journey works.

#### 4.P2 — paragraph at essay.ts line 34

**Copy location:** [essay.ts](../src/lib/essay.ts), line 34. **Why this paragraph exists:** Map the epistemic distinction to the generated folder layout.

**Paragraph verdict:** Qualify empty scaffolding versus filled and reproducible work.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 4.P2.S1 | In the scaffold, data holds source provenance, analysis holds reproducible investigation, and docs holds maintained intent and decisions. | Assign roles to three folders. | [D](#source-d), [AN](#source-an), [AR](#source-ar), [OBS](#source-obs). Implemented folder guides, not populated sources or reproducible analyses. | Change “holds” to “provides places for” or “is intended for.” |
| 4.P2.S2 | Reports, presentations, and other outputs have their own homes. | Name deliverable-specific homes. | [RP](#source-rp), [DECK](#source-deck), [OUT](#source-out), [G](#source-g). Implemented required directories and guides. | Keep; concrete and accurate. |
| 4.P2.S3 | Code gets a location when it exists. | Explain deferred code structure. | [AR](#source-ar), [G](#source-g), [T](#source-t). Generator omits src/apps; instructions add them when code is introduced. | Keep; not an automatic location selector. |
| 4.P2.S4 | Variants can sit alongside one another without making every version look authoritative. | Prevent ambiguity among alternatives. | [OUT](#source-out), [RP](#source-rp), [Q](#source-q). Possible through naming/status guidance; no enforced selected-version registry or acceptance UI. | Change to “Label variants by purpose and record which result is accepted.” |

**Possible revision:** The scaffold provides places for source provenance, analysis, maintained decisions, and deliverables. Instructions ask contributors to record methods and identify the accepted variant; the folders do not establish those qualities on their own.

#### 4.P3 — paragraph at essay.ts line 35

**Copy location:** [essay.ts](../src/lib/essay.ts), line 35. **Why this paragraph exists:** Show how the same workflow applies outside software.

**Paragraph verdict:** Keep; these are verification obligations, not bundled analysis or document tools.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 4.P3.S1 | The pattern extends beyond software. | Signal the broader intended audience. | [O](#source-o), [G](#source-g). Analysis/research/general kinds and deliverable guides exist. | Keep; useful transition rather than capability proof. |
| 4.P3.S2 | A data analysis needs checks on grain, units, missing values, and joins. | Give analysis a concrete quality bar. | [R](#source-r), [G](#source-g). Exact checks are prescribed in reliability and analysis preset. No validator executes these checks for arbitrary datasets. | Keep; add “The guidance calls for…” if the surrounding context might imply automation. |
| 4.P3.S3 | Research needs traceable claims and conflicting evidence. | Give research a concrete evidence bar. | [W13](#source-w13), [SK](#source-sk). Traceability/conflict review is prescribed, not an installed research engine. | Keep; “record conflicting evidence” is clearer than suggesting conflict must exist. |
| 4.P3.S4 | A presentation needs to be rendered and inspected. | Give presentation work an actual consumption check. | [DECK](#source-deck), [R](#source-r). Render/inspect instruction exists; no renderer is supplied by the generator. | Keep; avoid implying all presentations have already been inspected. |
| 4.P3.S5 | The method of verification changes; the responsibility to verify does not. | Unify the principle across project kinds. | [W13](#source-w13), [O](#source-o). Normative workflow supported in the template. | Keep as conclusion, or cut if reducing repeated maxims. |

### 5. Make the feedback loop explicit.

**Heading / contents label:** “Make the feedback loop explicit.”

**Why:** Introduce the actual workflow contract. **Source/design:** [W11](#source-w11), [W12](#source-w12), [W13](#source-w13), [W14](#source-w14), [W15](#source-w15) — Five steps are prescribed, not executed by a runner. **Copy action:** Keep; qualify “instruction” in the paragraph beneath it. The contents repeats this heading without the final period; the same assessment applies.

#### 5.P1 — paragraph at essay.ts line 42

**Copy location:** [essay.ts](../src/lib/essay.ts), line 42. **Why this paragraph exists:** Expose the actual five-step workflow.

**Paragraph verdict:** Keep but link its canonical implementation and name it an instruction.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 5.P1.S1 | The default workflow is short: inspect, act, verify, review, finish. | Name the five stages. | [A](#source-a), [W11](#source-w11), [W12](#source-w12), [W13](#source-w13), [W14](#source-w14), [W15](#source-w15). Explicit workflow text, no loop runner. | Say “workflow instruction”; link docs/WORKFLOW.md. |
| 5.P1.S2 | Inspect the baseline before changing it. | Explain Inspect. | [W11](#source-w11). Exact prescribed action; no forced baseline capture. | Keep, or let the interactive stage explain it. |
| 5.P1.S3 | Make a focused change. | Explain Act. | [W12](#source-w12). Exact prescribed action; no change-size enforcement. | Keep, or defer to diagram. |
| 5.P1.S4 | Check the actual result. | Explain Verify. | [W13](#source-w13). Exact prescribed action; task-specific tools are external. | Keep, but the very generic phrase needs the later concrete examples. |
| 5.P1.S5 | Compare it with the brief. | Explain Review. | [W14](#source-w14). Exact prescribed action; no automatic evaluator of brief satisfaction. | Keep; links verification back to intent. |
| 5.P1.S6 | Then leave useful knowledge behind. | Explain Finish. | [W15](#source-w15). Exact prescribed action; no automatic memory write-back. | Prefer “Record useful decisions and evidence” over “knowledge.” |

**Possible revision:** The template gives agents a five-step instruction: inspect, act, verify, review, finish. Establish a baseline, make a focused change, check it against the brief, and record what matters for the next step.

#### 5.P2 — paragraph at essay.ts line 43

**Copy location:** [essay.ts](../src/lib/essay.ts), line 43. **Why this paragraph exists:** Explain why a superficial success signal is insufficient, with cross-domain examples.

**Paragraph verdict:** Keep the concrete examples; the first sentence repeats the workflow rule.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 5.P2.S1 | Verification has to reach the place where the work is consumed. | Require verification in the consumption context. | [W13](#source-w13). Direct convention. It does not mean every check must be end-to-end regardless of scope. | “Use checks suited to how the result will be consumed” is more proportionate. |
| 5.P2.S2 | Source inspection may reveal an implementation error, but it cannot establish that an interface works at a narrow width. | Distinguish code reading from responsive behavior. | [W13](#source-w13), [Q](#source-q). Sound validation distinction; the website has browser evidence, but generated projects do not inherit it. | Keep as illustrative reasoning, not a claimed universal testing mandate. |
| 5.P2.S3 | A syntactically valid query may still join at the wrong grain. | Distinguish query syntax from data semantics. | [R](#source-r). Grain/join checks are explicitly requested; no dataset-specific SQL tests included. | Keep; strong analysis example. |
| 5.P2.S4 | A polished paragraph may still make a claim its source cannot support. | Distinguish writing quality from source support. | [W13](#source-w13), [SK](#source-sk). Direct research convention; this copy audit is an application of it, not independent validation of all research projects. | Keep; particularly relevant to this essay. |

#### 5.P3 — paragraph at essay.ts line 44

**Copy location:** [essay.ts](../src/lib/essay.ts), line 44. **Why this paragraph exists:** Specify recovery and the evidence a blocked handoff needs.

**Paragraph verdict:** Keep the procedure; cut the closing slogan if shortening.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 5.P3.S1 | When a check fails, use the evidence to choose the next action. | Use a failure as diagnostic input. | [W14](#source-w14). Explicit recovery instruction; no autonomous failure classifier. | Keep. |
| 5.P3.S2 | If repeated attempts reveal the same missing capability or decision, make that gap explicit instead of retrying unchanged steps. | Bound repetitive work when something is missing. | [W14](#source-w14). Explicit stop rule after two materially different attempts; essay compresses that detail. | Keep, optionally link the exact stop condition rather than repeat it here. |
| 5.P3.S3 | A good handoff explains the state, the evidence, and what would allow progress. | Define a useful blocked handoff. | [P](#source-p), [W15](#source-w15). Explicit handoff fields. Completeness is not mechanically validated. | Keep; this is specific enough to guide a person. |
| 5.P3.S4 | Confidence is not a substitute for any of them. | Reject confidence as evidence. | [Q](#source-q), [W14](#source-w14). Editorial restatement, not an extra capability. | Cut or merge; the preceding sentence already establishes the standard. |

The inserted five-stage figure is audited separately under “Interactive working-loop copy,” including every alternate state, not just the default Inspect state.

### 6. Be precise about boundaries. Leave freedom inside them.

**Heading / contents label:** “Be precise about boundaries. Leave freedom inside them.”

**Why:** Explain selective enforcement. **Source/design:** [DES](#source-des), [W19](#source-w19) — Local policy plus limited structural enforcement, not the source’s complete application architecture. **Copy action:** Keep, or shorten to “Set useful boundaries.” The contents repeats this heading without the final period; the same assessment applies.

#### 6.P1 — paragraph at essay.ts line 51

**Copy location:** [essay.ts](../src/lib/essay.ts), line 51. **Why this paragraph exists:** Protect a small number of meaningful boundaries without overbuilding rules.

**Paragraph verdict:** Revise declarative guarantees into instructions.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 6.P1.S1 | Not every preference needs a rule, and not every rule needs a script. | Avoid translating every preference into machinery. | [DES](#source-des), [A](#source-a). Explicit minimalism principle; discretionary, not a formal policy engine. | Keep, or shorten to “Automate rules when a real need warrants it.” |
| 6.P1.S2 | Start with the constraints that protect the meaning of the work: original inputs stay intact, sensitive data stays out of Git, important claims retain provenance, and a change respects its agreed scope. | Name the essential safeguards. | [D](#source-d), [S](#source-s), [I](#source-i), [W19](#source-w19). Instructions exist; selected file patterns are ignored. No immutable store, secret scanner, evidence validator, or scope enforcement is installed. | Change “stay/stays/retain/respects” to “preserve/keep/record/respect” with an explicit human/agent actor. |

**Possible revision:** The conventions ask agents to preserve original inputs, keep sensitive data out of Git, retain claim provenance, and respect scope. These are operating rules; .gitignore is only a partial aid.

#### 6.P2 — paragraph at essay.ts line 52

**Copy location:** [essay.ts](../src/lib/essay.ts), line 52. **Why this paragraph exists:** Explain when adding a check is justified.

**Paragraph verdict:** Keep with an explicit examples-not-features cue.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 6.P2.S1 | When a failure repeats, an executable check may be the smallest lasting fix. | Connect repeated friction to a durable check. | [DES](#source-des), [W15](#source-w15). Explicit principle; “may” appropriately leaves room for a documentation fix. | Keep. |
| 6.P2.S2 | It might validate an input schema, prevent a forbidden dependency, or catch a misleading export. | Show the possible form of future checks. | [DES](#source-des), [AR](#source-ar), [H](#source-h). Illustrative possibilities; schema/dependency/export validators are not shipped. Source architecture section is inspiration, not evidence of local tools. | Add “in a project that needs them” or the proposed final clarification. |
| 6.P2.S3 | Good failure messages explain how to repair the problem. | Set a quality standard for failures. | [DES](#source-des), [K](#source-k). Guidance exists; checker includes repair-oriented messages for missing entries, import and provenance. No claim all future failures comply. | Keep; this has a concrete local example. |
| 6.P2.S4 | The purpose is to reduce recurring friction, not to accumulate a library of hypothetical safeguards. | Explain why the check exists. | [A](#source-a), [DES](#source-des). Stated philosophy rather than measurable improvement. | Keep, but can combine with the first sentence. |

**Possible revision:** When a failure recurs, add the smallest useful check. Depending on the project, that might validate a schema, a dependency boundary, or an export. Those checks are added for the task; they are not bundled here.

#### 6.P3 — paragraph at essay.ts line 53

**Copy location:** [essay.ts](../src/lib/essay.ts), line 53. **Why this paragraph exists:** Provide the strongest implemented example in the essay.

**Paragraph verdict:** Keep; make the test scope precise and link the generator/tests.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 6.P3.S1 | Starter applies that idea to itself. | Move from recommendation to local implementation. | [G](#source-g), [T](#source-t). Supported by following specific mechanism; not evidence the whole harness vision is complete. | Keep as transition. |
| 6.P3.S2 | Its reusable template is an explicit boundary. | Name the distribution/template boundary. | [DIST](#source-dist), [G](#source-g). Implemented: TEMPLATE constant and explicit copy list. | Keep; one repository still contains both, so “boundary” is conceptual/code-level, not separate repos. |
| 6.P3.S3 | The generator reads project defaults from template/, rather than copying the website’s documentation. | Explain the actual copy source. | [G](#source-g). Directly verified at lines 93–96; root site docs not copied. | Keep; exact and checkable. |
| 6.P3.S4 | Regression tests check that distribution content does not enter a generated project. | Name regression evidence. | [T](#source-t). Tests verify listed absent files and leak strings across selected files. They are not exhaustive detection of any conceivable future leakage. | Say “Tests check key distribution files and references stay out.” |
| 6.P3.S5 | That is a real invariant with a small, concrete test. | Explain the value of the example. | [T](#source-t), [G](#source-g). Supported, but “small” is a size judgment and the last sentence restates the previous four. | Optional cut; link to the tests instead. |

### 7. More agents need clearer ownership.

**Heading / contents label:** “More agents need clearer ownership.”

**Why:** Explain the coordination cost of parallel work. **Source/design:** [A](#source-a), [W21](#source-w21), [P](#source-p) — Clear ownership is prescribed, not assigned automatically. **Copy action:** Keep. The contents repeats this heading without the final period; the same assessment applies.

#### 7.P1 — paragraph at essay.ts line 60

**Copy location:** [essay.ts](../src/lib/essay.ts), line 60. **Why this paragraph exists:** Explain why collaboration needs boundaries rather than simply more agents.

**Paragraph verdict:** Keep as a practical judgment, not a measured throughput claim.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 7.P1.S1 | Parallel work is useful when the outcomes can progress independently. | State the condition for useful parallelism. | [A](#source-a), [W21](#source-w21). Explicit delegation convention; no performance evidence from a comparative agent study. | Keep; useful constraint, appropriately conditional. |
| 7.P1.S2 | It is less useful when several agents edit the same artifact, rely on different assumptions, or produce conclusions that no one integrates. | Describe common coordination failure modes. | [A](#source-a), [P](#source-p). Reasoned motivation for ownership and integration; not a recorded failure series here. | Keep; avoid suggesting these cases were empirically measured in Starter. |

#### 7.P2 — paragraph at essay.ts line 61

**Copy location:** [essay.ts](../src/lib/essay.ts), line 61. **Why this paragraph exists:** Specify the protocol contributors are expected to follow.

**Paragraph verdict:** Revise the actor wording so the text does not imply an orchestrator assigns or polices work.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 7.P2.S1 | For substantial shared work, a plan names the outcome, input paths, write scopes, and acceptance checks. | List the shared plan contract. | [P](#source-p), [A](#source-a). Actual template fields and instructions exist; a new project has no populated multi-agent plan. | Change “a plan names” to “the plan template asks for.” |
| 7.P2.S2 | One integrating agent owns the combined result and shared indexes. | Assign integration responsibility. | [A](#source-a), [W21](#source-w21). Written convention only; no integrator is instantiated or elected by the scaffold. | Change to “Assign one integrating agent…” or “The conventions call for…”. |
| 7.P2.S3 | Workers return changed artifacts, evidence, limitations, and a next action. | Define worker output. | [A](#source-a), [P](#source-p). Written handoff contract, not verified agent behavior. | Change “Workers return” to “Workers should return.” |
| 7.P2.S4 | Separate worktrees are an option when concurrent code edits need isolation, not a ritual for every task. | Limit worktree overhead to actual conflict. | [A](#source-a), [W21](#source-w21). Guidance exists; generator does not create worktrees or manage concurrency. | Keep as optional technique; no special worktree integration is promised. |

**Possible revision:** The plan template asks for an outcome, inputs, write scopes, and acceptance checks. The working conventions assign one integrator and define what each worker should return. Use separate worktrees when concurrent edits need isolation.

#### 7.P3 — paragraph at essay.ts line 62

**Copy location:** [essay.ts](../src/lib/essay.ts), line 62. **Why this paragraph exists:** Connect collaboration protocol to continuity across sessions.

**Paragraph verdict:** Keep as the intended acceptance criterion; explicitly acknowledge it remains untested.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 7.P3.S1 | The same arrangement supports work across time. | Bridge simultaneous work and later resumption. | [A](#source-a), [P](#source-p). Reasonable inference from durable artifacts, not a demonstrated continuity result. | Keep if followed by the conditional evidence wording. |
| 7.P3.S2 | A later session should be able to resume from the brief, current plan, and evidence without reconstructing the original conversation. | Describe the desired fresh-session outcome. | [A](#source-a), [GAP](#source-gap), [O](#source-o). Explicit user objective; current evidence register still lists fresh-session/handoff trials as a gap. | “Is intended to let” is safer; add the evidence gap rather than imply success. |
| 7.P3.S3 | That is a more useful measure of a handoff than its length. | Prioritize usefulness over document length. | [P](#source-p). Editorial criterion; no objective measure is implemented. | Keep as judgment, or combine with the proposed acceptance wording. |

**Possible revision:** These records are intended to let a fresh session resume without the original chat. That is an acceptance check for real use, not a result the scaffold can guarantee.

### 8. Autonomy follows evidence and authority.

**Heading / contents label:** “Autonomy follows evidence and authority.”

**Why:** Limit the meaning of autonomy. **Source/design:** [W19](#source-w19), [W7](#source-w7) — A normative authorization principle; no autonomy controller. **Copy action:** Keep; “authority” could be “permission” for plain language. The contents repeats this heading without the final period; the same assessment applies.

#### 8.P1 — paragraph at essay.ts line 69

**Copy location:** [essay.ts](../src/lib/essay.ts), line 69. **Why this paragraph exists:** Separate the source’s autonomy level from Starter’s conventions.

**Paragraph verdict:** Keep; label the second sentence partly as local interpretation.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 8.P1.S1 | The OpenAI article describes a software environment in which agents can carry changes through increasingly complete development loops. | Describe the source’s reported end-to-end loop. | [H](#source-h), [HR](#source-hr). Supported by Increasing levels of autonomy. It is OpenAI’s account, not a local capability claim. | Keep; attribution is necessary. |
| 8.P1.S2 | That depends on accessible tools, meaningful feedback, recovery paths, and the authority to perform the actions involved. | Name the conditions behind autonomy. | [H](#source-h), [W19](#source-w19). Tooling/feedback/recovery are source themes; authority is also Starter’s explicit policy interpretation. | Say “For Starter, any broader autonomy would also require…” when introducing authority. |

#### 8.P2 — paragraph at essay.ts line 70

**Copy location:** [essay.ts](../src/lib/essay.ts), line 70. **Why this paragraph exists:** Prevent readers mistaking workflow guidance for authority or installed automation.

**Paragraph verdict:** Keep the limit; narrow “does not grant” to policy, since files cannot enforce permission.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 8.P2.S1 | Starter provides conventions for that loop. | Name the actual level of support. | [A](#source-a), [W7](#source-w7). Explicit convention, routed from agent map. | Keep; move a version of this sentence near the beginning of the essay too. |
| 8.P2.S2 | It does not grant permission to publish, merge, deploy, spend money, or send messages. | Describe authorization limits. | [W19](#source-w19), [S](#source-s). Correct policy statement, not an access-control mechanism. No write/publish capability is provisioned by generator. | Keep as “The instructions do not treat preparation as authorization to…”. |
| 8.P2.S3 | Nor does it install an orchestration service. | Deny an installed orchestrator. | [G](#source-g), [OBS](#source-obs), [SK](#source-sk). Directly supported by delivered file list and generator scope; website diagrams also do not run agents. | Keep; decisive product boundary. |
| 8.P2.S4 | Local work that is already authorized should continue without unnecessary checkpoints; a genuinely missing decision should be surfaced clearly. | Balance autonomy with necessary decisions. | [W7](#source-w7), [W19](#source-w19). Explicit convention; conflict handling and user permission still depend on the host and agent. | Keep; combine into one clear rule to reduce defensive wording. |

**Possible revision:** Starter supplies instructions for this loop, not an orchestration service. Those instructions preserve the user’s existing permissions and ask agents to continue authorized work without repeated approval gates.

#### 8.P3 — paragraph at essay.ts line 71

**Copy location:** [essay.ts](../src/lib/essay.ts), line 71. **Why this paragraph exists:** Set a conservative interpretation of small changes and passing checks.

**Paragraph verdict:** Keep; make the checker’s limited link coverage explicit.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 8.P3.S1 | Small, reviewable changes make feedback and correction easier. | Explain why changes stay small. | [W19](#source-w19). Normative engineering inference, not a benchmark measured here. | Keep, without suggesting a particular merge rate or workflow is proven. |
| 8.P3.S2 | They do not justify bypassing a material failure. | Reject using smallness to excuse wrong results. | [W19](#source-w19). Explicit material-failure and required-check rule. | Keep; this deliberately does not copy OpenAI’s merge policy wholesale. |
| 8.P3.S3 | A structural documentation check can establish that files and links are present. | Describe the automated checker. | [K](#source-k), [T](#source-t). Checks required files and selected Markdown local file targets; not all repository links, URL availability, or semantic correctness. | Replace broad “files and links” with the precise scope in the proposed paragraph. |
| 8.P3.S4 | It cannot establish factual accuracy or guarantee that a future agent follows the workflow. | State what the checker cannot prove. | [K](#source-k), [Q](#source-q), [GAP](#source-gap). Directly supported by code absence and evidence policy. | Keep; central to an honest account of the product. |

**Possible revision:** Small changes are easier to review, but required checks still matter. The supplied checker validates required files, selected local links, catalogs, review dates, and provenance fields. It does not judge factual accuracy or agent compliance.

### 9. Leave the project easier to return to.

**Heading / contents label:** “Leave the project easier to return to.”

**Why:** Introduce practical maintenance. **Source/design:** [W15](#source-w15), [W25](#source-w25) — A stated finish/milestone convention, not a guaranteed result. **Copy action:** Keep. The contents repeats this heading without the final period; the same assessment applies.

#### 9.P1 — paragraph at essay.ts line 78

**Copy location:** [essay.ts](../src/lib/essay.ts), line 78. **Why this paragraph exists:** Explain why repository examples and guidance need maintenance.

**Paragraph verdict:** Revise “learn” to avoid suggesting model training or persistent memory.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 9.P1.S1 | Agents learn from the patterns already present in a repository, including the misleading ones. | Connect present examples to future agent outputs. | [H](#source-h), [W25](#source-w25). Source Entropy section discusses pattern replication; no training/fine-tuning/memory-updating mechanism is implemented. | Replace “learn” with “can copy” or “take cues from.” |
| 9.P1.S2 | A small inconsistency can become the next example. | Explain how inconsistency propagates. | [H](#source-h), [W25](#source-w25). Source-supported possibility, not measured local propagation. | Keep “can”; no universal causal guarantee. |
| 9.P1.S3 | Maintenance is therefore part of finishing a result, not merely a future cleanup project. | Derive a completion habit. | [W15](#source-w15), [W25](#source-w25). Explicit convention. It does not install recurring cleanup. | Keep; combine with the first sentence if removing repetition. |

**Possible revision:** Agents can copy patterns they find in the repository, including misleading ones. Treat useful cleanup as part of finishing the work.

#### 9.P2 — paragraph at essay.ts line 79

**Copy location:** [essay.ts](../src/lib/essay.ts), line 79. **Why this paragraph exists:** Give maintenance a bounded set of practical actions.

**Paragraph verdict:** Keep; this is specific and proportionate.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 9.P2.S1 | Compare the guidance you touched with the behavior you observed. | Compare changed guidance with reality. | [W25](#source-w25). Exact maintenance instruction; no semantic drift detector. | Keep. |
| 9.P2.S2 | Remove an obsolete instruction. | Remove stale guidance. | [W25](#source-w25). Explicit manual/agent action; no automatic pruning. | Keep, or group with the next two actions. |
| 9.P2.S3 | Record a useful decision. | Retain a consequential decision. | [W15](#source-w15), [DES](#source-des). Explicit convention; a decision log must actually be updated by a person/agent. | Keep. |
| 9.P2.S4 | Turn a recurring correction into a better example or a focused check. | Turn repeated correction into a small improvement. | [W15](#source-w15), [DES](#source-des). Explicit choice among a rule, example, or check; not mandatory automation. | Keep; the range is faithful to the minimal design. |
| 9.P2.S5 | If nothing useful was learned, there is no need to manufacture a new rule. | Avoid accumulating empty process. | [W15](#source-w15). Directly supported: add nothing if no recurring friction was observed. | Keep; “useful learning” and “recurring friction” are close but not identical criteria. |

#### 9.P3 — paragraph at essay.ts line 80

**Copy location:** [essay.ts](../src/lib/essay.ts), line 80. **Why this paragraph exists:** Distinguish shipped structural CI from optional semantic maintenance.

**Paragraph verdict:** Qualify the schedule and the work needed to add an agent.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 9.P3.S1 | The scaffold includes a weekly structural documentation check. | Describe the shipped weekly check. | [CI](#source-ci), [G](#source-g), [GH](#source-gh). Config is included. Actual scheduling is conditional on GitHub, default-branch workflow and Actions availability; no local timer is installed. | Use “workflow configured to…” and state the hosting condition. |
| 9.P3.S2 | Semantic review remains a working habit: at completion, at a milestone, or when drift appears. | Describe semantic review cadence. | [W25](#source-w25), [P](#source-p). Documented habit at finish/milestones/drift, not a shipped semantic review service. | Say “The conventions call for semantic review…” rather than implying observed practice. |
| 9.P3.S3 | A scheduled reviewing agent can be added when recurring work justifies one, with clear scope and ownership. | Describe an optional future reviewing agent. | [W25](#source-w25), [P](#source-p). Permitted extension, not a one-click supported integration or existing job. Model/runtime/access/owner/stop conditions still need configuration. | Change “can be added” to “could be configured separately.” |
| 9.P3.S4 | A minimal starter should make that possible without making it mandatory. | Restate minimalism. | [O](#source-o), [W25](#source-w25). Design opinion; no extra functionality beyond not installing such an agent. | Cut if shortening; the distinction already does the work. |

**Possible revision:** The scaffold includes a GitHub Actions workflow configured to run the structural checker weekly. It runs only after the project is hosted on GitHub with the workflow enabled on the default branch. Semantic review is a working convention; a scheduled reviewing agent would require a separate setup.

### 10. A foundation, not a finished system.

**Heading / contents label:** “A foundation, not a finished system.”

**Why:** Close by distinguishing starter infrastructure from completed work. **Source/design:** [G](#source-g), [Q](#source-q), [SK](#source-sk) — Accurate boundary; no actual project findings are generated. **Copy action:** Keep; it repeats the foundation metaphor, so shorten adjacent prose. The contents repeats this heading without the final period; the same assessment applies.

#### 10.P1 — paragraph at essay.ts line 87

**Copy location:** [essay.ts](../src/lib/essay.ts), line 87. **Why this paragraph exists:** Return from process principles to the actual product boundaries and entry path.

**Paragraph verdict:** Keep, but earlier placement would orient the reader sooner.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 10.P1.S1 | The website, the scaffold tooling, and the generated project are separate things. | Separate distribution components. | [DIST](#source-dist), [G](#source-g), [T](#source-t). Code-level separation verified; all live in the same source repository, not three separate repositories. | Keep; add this distinction near the introduction. |
| 10.P1.S2 | You can read the explanation here, use the shared skill or generator to create a project, and then choose the capabilities the actual work requires. | Describe a practical use sequence. | [SK](#source-sk), [G](#source-g), [O](#source-o). Generator and installable shared skill exist; actual capability selection is user/agent work. Fresh natural-language discovery remains a gap. | Keep; avoid implying arbitrary tools are installed automatically. |

#### 10.P2 — paragraph at essay.ts line 88

**Copy location:** [essay.ts](../src/lib/essay.ts), line 88. **Why this paragraph exists:** Define what “useful” means after a scaffold exists.

**Paragraph verdict:** Keep; remove “intentionally modest” if it obscures the actual file count and setup.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 10.P2.S1 | The result is intentionally modest: a brief, a map, places for the work, and a way to record what has been checked. | List the core deliverables again. | [B](#source-b), [A](#source-a), [AR](#source-ar), [Q](#source-q), [OBS](#source-obs). Implemented skeleton; “a way to record” means Markdown fields, not a evidence-tracking application. | Keep literal objects; clarify this once rather than repeating “modest/foundation/small.” |
| 10.P2.S2 | What matters next is the first real task. | Shift attention to substantive work. | [SK](#source-sk), [B](#source-b). Explicit scaffold-only status and first-task guidance. | Keep; useful next step. |
| 10.P2.S3 | Can another person or agent find the intent? | Ask whether intent is discoverable. | [O](#source-o), [GAP](#source-gap). Acceptance question, not a passed result. | Keep as a question; link the known trial gap if presenting validation status. |
| 10.P2.S4 | Can the result be reproduced or inspected? | Ask whether output is reproducible/inspectable. | [W13](#source-w13), [R](#source-r). Task-specific expectation, not a reproducibility feature supplied for every output. | Keep as an acceptance question. |
| 10.P2.S5 | Is the remaining uncertainty clear? | Ask whether uncertainty is visible. | [Q](#source-q), [P](#source-p). Evidence-status convention; no uncertainty evaluator. | Keep as an acceptance question. |

**Possible revision:** Starter gives you a brief, an agent map, work folders, and a place to record evidence. The first real task should test whether another person or agent can find the intent, inspect the result, and identify what remains unresolved.

#### 10.P3 — paragraph at essay.ts line 89

**Copy location:** [essay.ts](../src/lib/essay.ts), line 89. **Why this paragraph exists:** Close the argument with the intended standard for project growth.

**Paragraph verdict:** Tighten: a recap of the previous paragraph, not new evidence.

| Sentence | Exact sentence | Why this sentence is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| 10.P3.S1 | Those questions are the point of Starter. | Tie the closing questions back to purpose. | [O](#source-o). Editorial synthesis of the user’s objective. | Optional cut; the preceding paragraph already states the test. |
| 10.P3.S2 | The repository grows well when the answers get easier to find. | Define successful growth as easier retrieval. | [O](#source-o), [A](#source-a), [P](#source-p). Qualitative aspiration; discoverability alone does not prove code quality, reliability, or useful outcomes. | Say “One sign the structure is helping is…” instead of making this the whole definition of growing well. |

## Interactive atlas copy

These are explanatory UI states, not an execution trace. Captions are part of the copy argument and need the same claim discipline as the prose. D12–D13 form the Context caption; D15–D17 form Work; D18–D20 form Evidence. The Work paragraph needs a human/agent actor and the Evidence heading needs to preserve unverified material with clear status.

| ID | Exact copy | Why it is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| D01 | The project, made legible | Title the interactive atlas. | [DIAG](#source-diag), [A](#source-a), [AR](#source-ar). Explanatory visualization of the convention; not a live view of a user’s repository or a measured legibility result. | Prefer “How project context is organized” if a literal label is wanted. |
| D02 | Select a part to explore | Tell the reader how to use the diagram. | [DIAG](#source-diag). Implemented buttons change local explanations. This desktop hint is hidden at the captured mobile width. | Keep; it accurately describes the UI interaction. |
| D03 | A question | Identify the diagram’s starting point. | [B](#source-b), [G](#source-g). The brief records an intended outcome; not every project begins as a literal interrogative. | Keep as shorthand; “An outcome” would align more exactly with the brief. |
| D04 | What are we trying to understand? | Make the input human-readable. | [B](#source-b), [O](#source-o). A useful prompt for investigation; feature implementation or artifact production may aim to do something rather than understand it. | Consider “What are we trying to achieve?” to cover all supported kinds. |
| D05 | Context | Name the maintained project knowledge node. | [A](#source-a), [AR](#source-ar). Actual docs/map/brief support the role. | Keep. |
| D06 | Brief · decisions · sources | Give concrete examples of context. | [B](#source-b), [DES](#source-des), [D](#source-d). Brief generated; decisions/source records are guidance and locations, often empty initially. | Keep as examples, not a claim all three are populated. |
| D07 | Work | Name the activity node. | [AR](#source-ar), [W12](#source-w12). Represents later agent/person work; clicking the diagram does not perform it. | Keep. |
| D08 | Build · analyze · write | Show the breadth of activity. | [O](#source-o), [G](#source-g), [W13](#source-w13). Kinds and instructions support these activities; no compiler, analysis engine or authoring package is bundled into new projects. | Keep as verbs, not product automation claims. |
| D09 | Evidence | Name checked results and limitations. | [Q](#source-q), [W13](#source-w13). A recordkeeping convention and Markdown locations exist, not an automated evidence store. | Keep. |
| D10 | Check · review · retain | Summarize the evidence process. | [W13](#source-w13), [W14](#source-w14), [W15](#source-w15). Explicit instructions, not operations executed by the UI. | Keep. |
| D11 | Leave the next run better informed | Label the feedback path. | [W15](#source-w15), [A](#source-a), [GAP](#source-gap). Desired outcome of saving useful evidence/decisions; no automatic transfer or proven improvement. | Change to “Record decisions and evidence for the next session.” |
| D12 | Context travels with the work. | Headline the selected Context explanation. | [AR](#source-ar), [A](#source-a). Repository files travel when copied/shared; ignored data and external tools do not necessarily travel. | Use “Keep context alongside the work” to express the convention without a transport guarantee. |
| D13 | The question, decisions, and constraints live in the repository, ready for the next session. | Explain context persistence. | [B](#source-b), [P](#source-p), [A](#source-a), [GAP](#source-gap). Initial brief and guides exist; decisions/constraints must be captured and made accessible. Readiness for another session is not verified. | Change to “Record the question, decisions, and constraints in the repository so another session can find them.” |
| D14 | A working convention | Identify the diagram’s evidence level. | [DIAG](#source-diag), [W7](#source-w7). Accurate qualifier; displayed on desktop, hidden on narrow screens. | Keep the qualifier available on mobile too, or put the convention/automation distinction in nearby main copy. |
| D15 | Make room for the real work. | Headline the selected Work explanation. | [AR](#source-ar), [G](#source-g). Metaphor for work directories; “real” adds little. | Prefer “Give the work a place.” |
| D16 | Code, analysis, reports, and presentations get a home. | Name deliverables covered by the structure. | [AR](#source-ar), [AN](#source-an), [RP](#source-rp), [DECK](#source-deck), [G](#source-g). Analysis/report/presentation folders exist; code folders are deferred until needed. | Clarify that code gets a folder when introduced; avoid implying src is generated. |
| D17 | The project chooses its tools as it grows. | Express deferred stack choice. | [AR](#source-ar), [SK](#source-sk). No tool-selection agent or autonomous project mechanism exists. People/agents choose tools within scope. | Change to “Choose tools when the work needs them.” |
| D18 | Keep what you can verify. | Headline the selected Evidence explanation. | [Q](#source-q), [AN](#source-an), [W13](#source-w13). Potentially misleading: project also explicitly retains unverified experiments, open questions and missing evidence with status. | Change to “Keep the evidence and its limits.” Do not imply unverified material should be discarded. |
| D19 | Record the result, how it was checked, and what remains uncertain. | Specify a useful evidence record. | [W13](#source-w13), [Q](#source-q). Exact documented convention; no automatic capture. | Keep; one of the clearest lines in the diagram. |
| D20 | Feed useful learning back into the project. | Explain the return arrow. | [W15](#source-w15), [W25](#source-w25). Means updating docs/examples/checks; no model training or automatic learning pipeline. | Replace with “Update the relevant decision, example, or check.” |
| D21 | Question → context → work → evidence → context (visual relationship, no literal sentence) | Explain sequence and feedback conveyed by connectors. | [DIAG](#source-diag), [W7](#source-w7), [W11](#source-w11), [W12](#source-w12), [W13](#source-w13), [W15](#source-w15). Original explanatory model, not a copied OpenAI figure, enforced data pipeline or executed state machine. Work and evidence can interleave. | Keep, with explicit “working convention” labeling across widths; do not portray the arrows as tool execution. |

## Interactive working-loop copy

Every stage has a selector, a heading, an action description, and an expected-artifact label. The five descriptions are faithful summaries of WORKFLOW.md. The figure changes text when clicked; it performs none of the prescribed project actions. Stage headings with multiple sentences and multi-sentence descriptions are split below. The final two rows form the shared recovery caption.

| ID | Exact copy | Why it is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| L1T | Inspect | Let the reader select this stage. | [LOOPUI](#source-loopui), [DIAG](#source-diag), [W11](#source-w11), [W7](#source-w7). Actual explanation selector. It does not start or complete an agent stage. | Keep; numeric prefixes appear at larger widths and are hidden in the compact essay variant. |
| L1H1 | What do we know? | Identify the baseline and missing inputs. | [LOOPUI](#source-loopui), [W11](#source-w11), [W7](#source-w7). Stage prompt or example supported by the written workflow, not an observed execution result. | Keep; these are questions, not claims that the baseline has been established. |
| L1H2 | What is still missing? | Identify the baseline and missing inputs. | [LOOPUI](#source-loopui), [W11](#source-w11), [W7](#source-w7). Stage prompt or example supported by the written workflow, not an observed execution result. | Keep; these are questions, not claims that the baseline has been established. |
| L1P1 | Read the brief, inspect the current artifact, and establish a baseline. | Explain the selected stage’s required action. | [LOOPUI](#source-loopui), [W11](#source-w11), [W7](#source-w7). Direct summary of the canonical instruction. The diagram displays it; a person/agent still performs it. | Keep; these are questions, not claims that the baseline has been established. |
| L1A | The question + the current state | Describe the kind of record the stage should leave. | [LOOPUI](#source-loopui), [W11](#source-w11), [W7](#source-w7). An expected artifact label, not data generated by the website. At Finish, a separate decision is not required on every task. | Label this area “Expected evidence” if readers could mistake it for a live result; retain task-proportionate documentation. |
| L2T | Act | Let the reader select this stage. | [LOOPUI](#source-loopui), [DIAG](#source-diag), [W12](#source-w12). Actual explanation selector. It does not start or complete an agent stage. | Keep; numeric prefixes appear at larger widths and are hidden in the compact essay variant. |
| L2H1 | Code, analysis, a report, or an experiment. | Translate intent into one bounded piece of work. | [LOOPUI](#source-loopui), [W12](#source-w12). Stage prompt or example supported by the written workflow, not an observed execution result. | Keep; examples are correctly not restricted to software. |
| L2P1 | Make the smallest coherent change within the agreed scope. | Explain the selected stage’s required action. | [LOOPUI](#source-loopui), [W12](#source-w12). Direct summary of the canonical instruction. The diagram displays it; a person/agent still performs it. | Keep; examples are correctly not restricted to software. |
| L2A | A focused change or experiment | Describe the kind of record the stage should leave. | [LOOPUI](#source-loopui), [W12](#source-w12). An expected artifact label, not data generated by the website. At Finish, a separate decision is not required on every task. | Label this area “Expected evidence” if readers could mistake it for a live result; retain task-proportionate documentation. |
| L3T | Verify | Let the reader select this stage. | [LOOPUI](#source-loopui), [DIAG](#source-diag), [W13](#source-w13). Actual explanation selector. It does not start or complete an agent stage. | Keep; numeric prefixes appear at larger widths and are hidden in the compact essay variant. |
| L3H1 | Run it. | Make verification reach an observable result. | [LOOPUI](#source-loopui), [W13](#source-w13). Stage prompt or example supported by the written workflow, not an observed execution result. | Keep; choose the appropriate action for the artifact rather than literally running every kind of deliverable. |
| L3H2 | Inspect it. | Make verification reach an observable result. | [LOOPUI](#source-loopui), [W13](#source-w13). Stage prompt or example supported by the written workflow, not an observed execution result. | Keep; choose the appropriate action for the artifact rather than literally running every kind of deliverable. |
| L3H3 | Trace it to the source. | Make verification reach an observable result. | [LOOPUI](#source-loopui), [W13](#source-w13). Stage prompt or example supported by the written workflow, not an observed execution result. | Keep; choose the appropriate action for the artifact rather than literally running every kind of deliverable. |
| L3P1 | Check the result where it will be used. | Explain the selected stage’s required action. | [LOOPUI](#source-loopui), [W13](#source-w13). Direct summary of the canonical instruction. The diagram displays it; a person/agent still performs it. | Keep; choose the appropriate action for the artifact rather than literally running every kind of deliverable. |
| L3P2 | Keep the method and its limits. | Explain the selected stage’s required action. | [LOOPUI](#source-loopui), [W13](#source-w13). Direct summary of the canonical instruction. The diagram displays it; a person/agent still performs it. | Keep; choose the appropriate action for the artifact rather than literally running every kind of deliverable. |
| L3A | An observed result, with evidence | Describe the kind of record the stage should leave. | [LOOPUI](#source-loopui), [W13](#source-w13). An expected artifact label, not data generated by the website. At Finish, a separate decision is not required on every task. | Label this area “Expected evidence” if readers could mistake it for a live result; retain task-proportionate documentation. |
| L4T | Review | Let the reader select this stage. | [LOOPUI](#source-loopui), [DIAG](#source-diag), [W14](#source-w14). Actual explanation selector. It does not start or complete an agent stage. | Keep; numeric prefixes appear at larger widths and are hidden in the compact essay variant. |
| L4H1 | Does the result answer the actual question? | Evaluate fit to intent and decide what remains. | [LOOPUI](#source-loopui), [W14](#source-w14). Stage prompt or example supported by the written workflow, not an observed execution result. | Keep; “real blockers” can be simplified to “missing access, evidence, or decisions.” |
| L4P1 | Compare the result with the brief. | Explain the selected stage’s required action. | [LOOPUI](#source-loopui), [W14](#source-w14). Direct summary of the canonical instruction. The diagram displays it; a person/agent still performs it. | Keep; “real blockers” can be simplified to “missing access, evidence, or decisions.” |
| L4P2 | Resolve actionable failures; surface real blockers. | Explain the selected stage’s required action. | [LOOPUI](#source-loopui), [W14](#source-w14). Direct summary of the canonical instruction. The diagram displays it; a person/agent still performs it. | Keep; “real blockers” can be simplified to “missing access, evidence, or decisions.” |
| L4A | A finding, correction, or decision | Describe the kind of record the stage should leave. | [LOOPUI](#source-loopui), [W14](#source-w14). An expected artifact label, not data generated by the website. At Finish, a separate decision is not required on every task. | Label this area “Expected evidence” if readers could mistake it for a live result; retain task-proportionate documentation. |
| L5T | Finish | Let the reader select this stage. | [LOOPUI](#source-loopui), [DIAG](#source-diag), [W15](#source-w15). Actual explanation selector. It does not start or complete an agent stage. | Keep; numeric prefixes appear at larger widths and are hidden in the compact essay variant. |
| L5H1 | What should the next run know? | Preserve useful state at completion. | [LOOPUI](#source-loopui), [W15](#source-w15). Stage prompt or example supported by the written workflow, not an observed execution result. | Keep; explicitly allow no new decision or handoff document for trivial finished work. |
| L5P1 | Update the useful knowledge and leave the next session a clear place to begin. | Explain the selected stage’s required action. | [LOOPUI](#source-loopui), [W15](#source-w15). Direct summary of the canonical instruction. The diagram displays it; a person/agent still performs it. | Keep; explicitly allow no new decision or handoff document for trivial finished work. |
| L5A | A decision and a useful handoff | Describe the kind of record the stage should leave. | [LOOPUI](#source-loopui), [W15](#source-w15). An expected artifact label, not data generated by the website. At Finish, a separate decision is not required on every task. | Label this area “Expected evidence” if readers could mistake it for a live result; retain task-proportionate documentation. |
| L6A | Repeat when a check reveals a problem. | Label the recovery path. | [W14](#source-w14). Workflow calls for repairs and rerunning affected checks, not unbounded retries. | Keep together with the following stop-condition sentence. |
| L6B | Stop an unproductive loop and make the missing evidence or decision visible. | Bound repeated work and preserve a blocker. | [W14](#source-w14). Explicit instruction; actual threshold is two materially different unsuccessful attempts. No runtime loop limiter exists. | Keep; link the canonical recovery instruction if readers need the exact threshold. |

**Paragraph-level verdict for the five states:** Keep their explanatory function. Inspect asks for a baseline; Act narrows the change; Verify demands relevant evidence; Review compares with the brief; Finish asks what to retain. Make clear that artifact labels are expected kinds of evidence. Finish should not imply a new decision or document is mandatory for every task. The common caption correctly combines repair with a stop condition; the canonical instruction gives the fuller bounded-retry rule.

## Sources, closing paragraph, and calls to action

| ID | Exact copy | Why it is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| S01 | Sources & further reading. | Separate evidence links from argument. | [PAGE](#source-page). Implemented reference section and matching contents anchor. | Keep. |
| S02 | The distinction throughout this essay is between the source ideas, Starter’s implementation, and outcomes that still require observation. | Explain how to read the claims. | [Q](#source-q), [GAP](#source-gap), [HR](#source-hr). Good intended distinction, but several declarative sentences blur it, as identified in this review. | Move a shorter explicit convention-versus-enforcement distinction to the opening; then keep this source note only if needed. |
| S03 | Harness engineering | Label the primary source. | [H](#source-h), [PAGE](#source-page). Correct abbreviated article name, linked to canonical OpenAI URL. | Keep; full title may be useful in the reference entry. |
| S04 | Ryan Lopopolo · OpenAI · February 2026 | Attribute the primary source. | [H](#source-h). Author and month verified live; publication date is February 11, 2026. | Keep; exact day is optional, not a factual correction. |
| S05 | Harness engineering reference collection | Label supplementary background. | [REF](#source-ref). Live repository is a fork of Ryan Lopopolo’s collection, not the starter implementation. | Keep; call it a reference collection/fork if attribution matters. |
| S06 | Background, interpretations, and source material | Explain why the supplementary link exists. | [REF](#source-ref), [HR](#source-hr). Reasonable description of the repository’s role; not evidence of local generator behavior. | Keep; do not treat it as a second independent proof of OpenAI’s claims. |
| S07 | The section-by-section review | Link the detailed adaptation record. | [HR](#source-hr), [PAGE](#source-page). Local report exists; its linked remote branch copy returned HTTP 200 and matched local bytes during this audit. | Keep; use a durable release/default-branch link after merge. |
| S08 | Source diagrams, adaptations, and implementation limits | Describe that review’s contents. | [HR](#source-hr). Report contains ten source sections, three extracted figures, adaptation/evidence/limits. Those original images are in the report; this essay uses original interactive figures. | Keep; the distinction between original source figures and this website’s diagrams matters. |
| S09 | The project template | Link the generated-project defaults. | [G](#source-g), [PAGE](#source-page). Link names the template directory on the implementation branch. Generator copies an allowlist and customizes the brief/README; it does not copy every possible future file. | Keep; “Template defaults” is slightly more precise. |
| S10 | The files and conventions new projects receive | Explain the template link. | [G](#source-g), [B](#source-b). Mostly accurate, but brief/README are tailored and the source directory is not the exact final output. | Prefer “The defaults used to generate a new project.” |
| Z01 | Put the idea to work. | Transition from reading to the guide. | [PAGE](#source-page), [SK](#source-sk). An invitation, not a capability claim. | Keep; clear closing action. |
| Z02 | Start with a question. | Recap the first step. | [B](#source-b), [O](#source-o). Convention; repeats the opening. | Keep in a short close, or cut repeated three-part rhetoric. |
| Z03 | Make a small result. | Encourage a concrete first task. | [B](#source-b), [W12](#source-w12). Convention rather than an automatic result of clicking the CTA. | Prefer “Produce one inspectable result.” |
| Z04 | Leave the project better informed. | Recap the finish step. | [W15](#source-w15). Desired effect of recorded evidence/decisions; not measured improvement. | Prefer “Record what you checked and what remains open.” |
| Z05 | Create your first project | Label the next action. | [PAGE](#source-page), [SK](#source-sk). Link opens /getting-started; it does not itself create a directory. “First” is assumed. | Prefer “Get started” or “See how to create a project.” |

**Paragraph verdicts:** The source-introduction paragraph is S02; its distinction should govern the whole article rather than appear only at the end. The closing paragraph is Z02–Z04; it is faithful advice but repeats earlier slogans. Replace its last sentence with an explicit recordkeeping action. The closing button should describe navigation to instructions, not imply that clicking creates the project.

## Shared page chrome

These lines are shared across the site but are visible or accessible around this essay; they are included so “the page” is not reduced to its body copy. Repeated Starter labels share N02. Hidden-at-mobile desktop navigation text was checked in source.

| ID | Exact copy | Why it is here | Source and actual design support | Copy action |
| --- | --- | --- | --- | --- |
| N01 | Skip to content | Offer a keyboard shortcut past navigation. | [PAGE](#source-page). Shared layout links to main content; interface function, not product behavior. | Keep. |
| N02 | Starter | Identify the site and home link, repeated in header/footer. | [NAV](#source-nav), [O](#source-o). Actual project name and / destination. | Keep; same rationale for both occurrences. |
| N03 | Overview | Name the homepage destination. | [NAV](#source-nav). Actual / route. | Keep. |
| N04 | The idea | Name the current essay destination. | [NAV](#source-nav), [PAGE](#source-page). Actual /why-starter route; generic but intelligible in this navigation. | Keep, or use “Why Starter” for a more descriptive label. |
| N05 | Get started | Name the practical guide destination. | [NAV](#source-nav). Actual /getting-started route. | Keep. |
| N06 | GitHub | Name the external repository destination. | [NAV](#source-nav). Actual repository URL; desktop header hides this separate item on mobile. | Keep; “Repository” would describe the destination rather than platform. |
| N07 | A small foundation. | Footer positioning. | [NAV](#source-nav), [G](#source-g), [OBS](#source-obs). Qualitative metaphor for a scaffold, not a measured size comparison. | Optional trim; deck/closing already repeat it. |
| N08 | Room for the work to grow. | Footer aspiration. | [NAV](#source-nav), [AR](#source-ar), [O](#source-o). The layout permits additions without choosing a stack; it does not establish maintenance at scale. | Keep as positioning, not a guarantee. |
| N09 | Start a project | Footer call to the guide. | [NAV](#source-nav). Opens instructions rather than directly generating. | “Get started” would align with navigation and avoid an immediate-action implication. |
| N10 | Explore the repository | Footer source link. | [NAV](#source-nav). Actual GitHub repository URL. | Keep. |
| N11 | Made by Tom Spencer | Assign project identity in the footer. | [NAV](#source-nav), [O](#source-o). Consistent with user ownership; does not establish manual authorship of every line. | Keep for project ownership if intended; handle essay authorship separately at F03. |
| N12 | For code, analysis, and knowledge work. | Restate intended audience breadth. | [NAV](#source-nav), [O](#source-o), [G](#source-g). Supported by project kinds and layout; usefulness for every such project has not been established. | Keep as scope, not an outcome guarantee. |

## What the project demonstrably provides versus what remains an intention

| Essay topic | Concrete support today | Remaining dependency or gap |
| --- | --- | --- |
| Minimal starting structure | Template allowlist, draft brief, folder guides, no app stack; generator tests | Tailored intent and useful output still require substantive work |
| Short map and Claude entry | 42-line AGENTS.md, @AGENTS.md import, checker cap/import test | Selection of deeper files and instruction compliance remain agent behavior |
| Evidence-aware work | Quality statuses, provenance/reproduction instructions, distinct artifact homes | No general claim validator, immutable source store, or automatic evidence collector |
| Five-step loop | WORKFLOW.md and map/skill references | No loop runner, recovery controller, or automatic reviewer |
| Collaboration | Plan fields, exclusive write-scope/integration/handoff conventions | No scheduler or concurrency manager; fresh project handoff acceptance remains open |
| Architectural boundaries | Template/distribution copy separation and regression coverage | No generic application layering or dependency linter is installed |
| Maintenance | Structural checker, scheduled GitHub workflow config, semantic-review instructions | GitHub setup required for CI; no installed semantic gardening agent |
| Agent autonomy | Scope/permission/recovery rules | Authority comes from user/host; tools and runtime are external |

No additional automation should be built solely to make the prose sound stronger. First correct the copy to match the existing design. If fresh-agent trials later reveal a recurring failure, that evidence can justify a focused change to the starter.

## Source register

Each code below is linked from individual annotations. Line ranges are snapshot coordinates for the audited working tree; links open the actual file. Template sources take precedence over similarly named distribution docs when assessing what a generated project receives.

<a id="source-o"></a>

**O — [Original objective](../docs/product-specs/starter-objective.md).** Audience/outcome, required structure, and acceptance: user intent; not proof of use.

<a id="source-g"></a>

**G — [Generator](../scripts/scaffold.py).** lines 15–35, 74–155: template allowlist, required directories, tailored brief, structural validation. No application runtime.

<a id="source-b"></a>

**B — [Generated brief](../scripts/scaffold.py).** lines 102–131: intended outcome, first slice, scope, acceptance evidence, working agreement, unresolved questions.

<a id="source-a"></a>

**A — [Agent map](../template/AGENTS.md).** lines 3–26: navigation and workflow; 28–42: collaboration, evidence, input preservation, authorized scope.

<a id="source-c"></a>

**C — [Claude import](../template/CLAUDE.md).** line 1: @AGENTS.md. This is integration configuration, not a recorded Claude session.

<a id="source-w7"></a>

**W7 — [Working agreement](../template/docs/WORKFLOW.md).** line 7: establish outcome, scope, available inputs/tools, checks; infer routine details; record in brief/plan.

<a id="source-w11"></a>

**W11 — [Inspect](../template/docs/WORKFLOW.md).** line 11: baseline, actual artifact/failure, missing access/evidence.

<a id="source-w12"></a>

**W12 — [Act](../template/docs/WORKFLOW.md).** line 12: smallest coherent scoped change; existing tools; dependencies for concrete need.

<a id="source-w13"></a>

**W13 — [Verify](../template/docs/WORKFLOW.md).** line 13: consumed result, software behavior, analysis reproduction, research claims/conflicts, rendered documents; method/results/limits.

<a id="source-w14"></a>

**W14 — [Review and recover](../template/docs/WORKFLOW.md).** line 14: compare brief, inspect unintended effects, fix/retest, bounded retries after two materially different attempts, preserve blockers.

<a id="source-w15"></a>

**W15 — [Finish](../template/docs/WORKFLOW.md).** line 15: changed work, verification, gaps, next action, affected knowledge, useful correction, resumable handoff.

<a id="source-w19"></a>

**W19 — [Scope rules](../template/docs/WORKFLOW.md).** line 19: reviewable/reversible changes; authority boundaries; no repeated gates; required checks/material failures remain blocking.

<a id="source-w21"></a>

**W21 — [Collaboration](../template/docs/WORKFLOW.md).** line 21: independent outcomes, input paths/write scope/acceptance, integration, isolation when needed.

<a id="source-w25"></a>

**W25 — [Maintenance](../template/docs/WORKFLOW.md).** line 25: touched instructions vs behavior, milestone review, structure-only CI; optional bounded scheduled review/hooks.

<a id="source-p"></a>

**P — [Plans](../template/docs/PLANS.md).** lines 3–28: plan template and ownership/handoff; line 32: structural CI vs manual semantic gardening.

<a id="source-ar"></a>

**AR — [Project architecture](../template/ARCHITECTURE.md).** lines 3–40: knowledge/work/deliverable homes, input flow, later code folders and actual dependency boundaries.

<a id="source-d"></a>

**D — [Data guide](../template/data/README.md).** lines 3–7: source manifest, source/date/version/sensitivity/schema, immutable raw inputs and reproducible derived work.

<a id="source-an"></a>

**AN — [Analysis guide](../template/analysis/README.md).** lines 3–5: question, inputs, method, reproduction, uncertainty, links to accepted conclusions.

<a id="source-r"></a>

**R — [Reliability](../template/docs/RELIABILITY.md).** lines 3–7: reproducibility, grain/units/missingness/joins, rendered deliverables, provenance.

<a id="source-q"></a>

**Q — [Quality register](../template/docs/QUALITY_SCORE.md).** lines 3–9: unassessed/gap/verified locally/accepted; initial row unassessed; verification limits.

<a id="source-s"></a>

**S — [Security](../template/docs/SECURITY.md).** lines 3–7: sensitive data policy, .gitignore not security enforcement, source instructions untrusted, publication boundaries.

<a id="source-i"></a>

**I — [Ignore defaults](../template/.gitignore).** lines 2–6 and 21–23: selected sensitive file patterns/data payloads ignored; no content scanning.

<a id="source-out"></a>

**OUT — [Outputs guide](../template/outputs/README.md).** lines 3–5: variant purpose, provenance, status, separate runnable code and storage.

<a id="source-rp"></a>

**RP — [Reports guide](../template/reports/README.md).** line 3: editable source, evidence, reproduction, draft/verified/accepted status.

<a id="source-deck"></a>

**DECK — [Presentations guide](../template/presentations/README.md).** line 3: audience, purpose, sources, export command, review status, inspect rendered/exported slides.

<a id="source-des"></a>

**DES — [Generic design guidance](../template/docs/DESIGN.md).** Consequential decisions; one canonical representation; smallest useful invariant/check and repair hints.

<a id="source-t"></a>

**T — [Behavior tests](../tests/test_starter.py).** lines 26–58: all four kinds, no app/dependencies/distribution leak, import/workflow/brief; 85–102: structural drift.

<a id="source-k"></a>

**K — [Checker implementation](../template/scripts/check_docs.py).** lines 65–128: required structure, 100-line map cap, Claude import, local file targets, catalogs/review dates, generated provenance fields. No semantics, external URL fetch, secret scan, claim verification, or agent execution.

<a id="source-ci"></a>

**CI — [Generated CI](../template/.github/workflows/docs.yml).** lines 2–18: push/PR/manual triggers and Monday 15:00 UTC schedule; runs Python docs checker on GitHub.

<a id="source-sk"></a>

**SK — [Shared skill](../skills/start-project/SKILL.md).** lines 14–46: get checkout, run generator, adapt existing work deliberately, tailor known facts, follow loop, report limited evidence.

<a id="source-dist"></a>

**DIST — [Distribution architecture](../ARCHITECTURE.md).** Website/tooling/template separation; explicit allowlist and no Git initialization/install/publication.

<a id="source-gap"></a>

**GAP — [Current evidence gaps](../docs/QUALITY_SCORE.md).** Portable workflow remains a gap pending fresh Codex/Claude sessions and handoff observation; local tests are narrower evidence.

<a id="source-obs"></a>

**OBS — [Fresh scaffold observation](why-starter-copy-review/scaffold-observation.json).** Research project generated during this review: 31 files including three .gitkeep files; no src/package.json; draft brief and CI config present.

<a id="source-h"></a>

**H — [OpenAI source](https://openai.com/index/harness-engineering/).** Ryan Lopopolo, February 11, 2026. Use the named section in each annotation; source ideas are not Starter performance evidence.

<a id="source-hr"></a>

**HR — [Section review and original diagrams](harness-workflow-review.md).** Local adaptation/source map, linked to supplied PDF provenance; secondary interpretation, not independent validation.

<a id="source-gh"></a>

**GH — [GitHub schedule conditions](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule).** Schedule runs from default branch on GitHub; subject to workflow availability and scheduling conditions, not a local timer.

<a id="source-cc"></a>

**CC — [Claude Code import semantics](https://code.claude.com/docs/en/memory#agentsmd).** Official docs explicitly support CLAUDE.md importing @AGENTS.md; runtime adherence still requires observation.

<a id="source-page"></a>

**PAGE — [Essay route](../src/app/why-starter/page.tsx).** Page title/deck/byline, intro, callout, reference labels, closing copy and reading-time calculation.

<a id="source-diag"></a>

**DIAG — [Diagram implementation](../src/components/site/diagrams.tsx).** ProjectAtlas: three local React selection states and captions; WorkingLoop: selected explanation. No project execution, ingestion, or write-back.

<a id="source-loopui"></a>

**LOOPUI — [Loop display data](../src/lib/project.ts).** lines 48–93: headings, descriptions, stage labels and expected artifacts rendered in the essay.

<a id="source-nav"></a>

**NAV — [Shared navigation/footer](../src/components/site/navigation.tsx).** Labels/destinations and author-site attribution; reused around the essay.

<a id="source-ref"></a>

**REF — [Reference repository](https://github.com/spencerthomas/harness-engineering).** Live repository identifies itself as a fork of lopopolo/harness-engineering; supplementary material, not this generator.

## Coverage and completion record

- 10 section headings, all 30 main-body paragraphs, and all 112 sentences within those paragraphs individually assessed.
- 90 additional framing, metadata, callout, diagram, source, closing, and shared-interface units assessed.
- All three atlas states and all five workflow states captured; desktop-only text cross-checked in source. Contents duplicates explicitly mapped to the corresponding heading review.
- Exact quotes generated from the frozen copy/source and manually authored assessments; no paragraph skipped because its recommendation is “keep.”
- Website source left unchanged. This report supplies justification and proposed revisions, not approval or implementation of those revisions.
