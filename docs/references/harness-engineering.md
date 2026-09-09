# Harness engineering sources

Reviewed: 2026-09-09.

- [Ryan Lopopolo, “Harness engineering: leveraging Codex in an agent-first world,” OpenAI, February 11, 2026](https://openai.com/index/harness-engineering/). The user-supplied PDF was inspected on 2026-09-09 (13 pages; documentation section on pages 4–6). In the starter source checkout, an unchanged local copy is stored at `data/raw/openai-harness-engineering.pdf`; acquisition details and SHA-256 are recorded in `data/manifest.md`. Data payloads are ignored by Git and excluded from generated projects; the public article remains the portable reference.
- [Harness Engineering reference repository](https://github.com/spencerthomas/harness-engineering). Its README and agent routing distinguish context, tools, outcome evidence, and cumulative improvements. Its playbooks are editorial syntheses, not procedures authored by Ryan. Repository-authored material is CC BY 4.0; see its [attribution guidance](https://github.com/spencerthomas/harness-engineering/blob/trunk/COPYING.md).

This starter adapts the article's documentation layout and progressive disclosure pattern. The folders for analysis, data, and deliverables, the optional scaffold skill, and the small structural checker are starter-specific choices. The prose here is newly written; the reference repository is not vendored.

Adopted: short agent map, maintained repository knowledge, explicit evidence, versioned plans, clear ownership, and mechanical feedback. Deferred until needed: application layers, observability infrastructure, deployment automation, and agent-driven gardening. The scaffold does not claim the article's autonomy or productivity results.

See the [section-by-section review](../../reports/harness-workflow-review.md) for all ten requested sections, the three original diagrams, and the implemented adaptations. Generated projects receive a shorter source reference and workflow; they do not inherit this distribution report or local source paths.
