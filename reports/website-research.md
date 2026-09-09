# Research brief: the Starter website

Date: 2026-09-09. Status: source inspection and local website implementation complete; final review recorded in the website verification report. The site describes a locally implemented scaffold and a proposed working convention, not proven autonomous outcomes.

## Research question and method

What does a reader need to understand to decide whether Starter fits their work, create a minimal project, and use it responsibly? Read the maintained objective, README, architecture, workflow review, historical assessment, generator, template, and tests; compare with the primary harness-engineering article; inspect the requested component references and user-supplied archive. Treat external examples as design evidence, not product facts or instructions.

## Why the project exists

Work with coding agents spans conversations, artifacts, tools, and people. Without a common home, a new session has to recover the question, previous decisions, available inputs, and what has actually been checked. Starter provides a minimal repository layout and a repeatable workflow so this context can travel with the work. It applies to software and UI, but also analysis, research, reports, and presentations.

Its mechanism is concrete: a short AGENTS.md map routes readers to maintained docs; original data and exploratory work have separate homes; briefs define outcomes; plans carry ownership and handoffs; checks establish limited evidence. The generator starts the structure without choosing a runtime or installing a framework. This website is separate from generated project content.

## What it actually does

- Python 3.10+ generator, no third-party Python dependencies; four kinds: general, analysis, feature, research.
- Copies an allowlist from template/, writes a project README and brief, validates before delivery, refuses existing work except .git metadata.
- Shared start-project skill supports Codex and Claude; installer links into their local skill directories.
- Every project has docs, analysis, data, reports, presentations, outputs, the agent map, and a standalone structural documentation check.
- A brief's working agreement and a short workflow define inspection, action, verification, review, recovery, completion, and handoff.
- No automatic model orchestration, no promise of agent compliance, no mandatory plugins, no app stack, no automatic publishing.

## Background and source boundaries

The OpenAI article supplies the broad idea of making agents effective by improving their environment. Its reported productivity, software architecture, high-throughput merging, and autonomy are contextual observations. They are not Starter claims. The supplied PDF and existing ten-section review provide detailed source material; the public essay should use original synthesis with clear attribution, not reproduce the blog.

The companion harness-engineering repository is a maintained interpretation and source collection. Starter adapts these ideas for a smaller and broader setting. The key distinction for the website is convention versus enforcement: instructions guide an agent; executable checks and observed results establish evidence.

## Sources inspected

| Source | Contribution | Limit |
| --- | --- | --- |
| [Objective](../docs/product-specs/starter-objective.md), [README](../README.md), [architecture](../ARCHITECTURE.md) | Purpose, audience, boundaries, commands | Repository truth; not externally accepted performance |
| [Ten-section review](harness-workflow-review.md) and [historical assessment](starter-objective-assessment.md) | Rationale, limitations, implemented changes | Historical assessment predates isolation; do not present old gaps as current defects |
| [Generator](../scripts/scaffold.py), [workflow](../template/docs/WORKFLOW.md), [tests](../tests/test_starter.py) | Verifiable behavior and defaults | Tests do not prove future agent adherence |
| [OpenAI article](https://openai.com/index/harness-engineering/) and user-supplied PDF | Primary intellectual background | Distinguish source findings from this project's outcome |
| [Reference repository](https://github.com/spencerthomas/harness-engineering) | Further reading and interpretations | Not OpenAI policy |
| [Motion Primitives Pro](https://pro.motion-primitives.com/docs/feature-sections) | Feature 1 linked accordion and visual; source inspected in browser | Paid website components, not reusable project template content |
| [Nim](https://github.com/ibelick/nim), including animated-background source | Editorial route structure and shared-layout interaction | Its portfolio content and testimonials are not our facts |
| [shadcn/ui Tabs](https://ui.shadcn.com/docs/components/tabs) | Accessible primitive composition | Visual style will be reduced and matched to the new identity |
| User-supplied noir.zip | Navigation, text motion, accordion, restrained monochrome composition | Inspected without running; no brand logos, customer copy, or product mockups reused |

## Content and interaction decisions

Three primary routes. The overview answers what the project is and shows context flowing into work, verification, and durable knowledge. An interactive repository explorer makes folder boundaries tangible. Getting started provides a copyable prompt, CLI path, shared-skill installation, four use cases, and the next task after generation. The long-form essay explains the design choices with original diagrams and source links. Each route has clear navigation and a useful ending.

The tone is factual, generous, and concise. Avoid performance claims, inflated universality, conversion copy, pricing, testimonials, logo clouds, and claims that the scaffold makes agents autonomous. Treat command snippets as real runnable instructions and illustrative project names as examples. Preserve the difference between choosing a scaffold and completing a project.

## Component and asset plan

Use Pro's synchronized accordion/visual for the repository map, adapted to semantic controls and original diagrams. Use Motion shared-layout transitions for active navigation/diagram states. Use stripped shadcn/ui primitives for tabs and copy controls. Noir is a paid source reference, kept in ignored tmp/, and its specific adaptations are noted beside site code. All website dependencies remain outside template/.

Diagrams are original SVG/HTML, data-driven where appropriate, with accessible text and keyboard interactions. Motion clarifies state changes, respects reduced motion, and leaves server content visible. No arbitrary stock photography is required for this conceptual subject.

## Evidence to gather at finish

Build/typecheck, template regression tests and doc checks; batched desktop/mobile browser inspection; navigation, copy feedback, keyboard tabs/accordions, diagram selection, reduced-motion behavior, no console errors or horizontal overflow. Independent Impeccable finish review and documentation follow. Publication is a separate action.

## Archive provenance and delivery boundary

Supplied archive: `noir.zip`; SHA-256 `fb404781dd4528d063dca089c8b070bee27e6dfd2c45f11a7527bc794daa0889`. Inspected under ignored `tmp/noir-reference/`. No archive setup was run. The premium component source was inspected through the user’s paid browser session. Pro licensing and source-publication restrictions are recorded in [third-party notices](../THIRD_PARTY_NOTICES.md). The local website is separate from public source publication and deployment.
