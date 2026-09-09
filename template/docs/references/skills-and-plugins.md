# Capabilities

Choose tools for the first useful result. Discover what the current agent can actually access before naming a dependency. Prefer an existing CLI, connector, browser, or document tool. Record required access and the verification command or manual check in the brief; expose a missing capability rather than inventing a result.

| Work | Capability to look for | First evidence |
| --- | --- | --- |
| Code or UI | Runtime, tests, browser or simulator | Observed behavior and relevant failure cases |
| Analysis | Data access, queries, notebooks or spreadsheets | Input quality and reproducible result |
| Research | Source retrieval and document reading | Traceable claims and unresolved conflicts |
| Reports or decks | Editable authoring and rendering | Inspected output and source provenance |

Tools and plugins are optional and agent-specific. Do not install a bundle, add hooks, or create services merely to populate the project. The [starter repository](https://github.com/spencerthomas/starter) documents scaffold-skill installation for creating future projects; its tooling is not part of this project.

For shared work, use [plans and handoffs](../PLANS.md). A coordinating agent can assign bounded independent artifacts when authorized; no orchestration service is required.
