# Skills and plugins

The shared scaffold skill is distributed by [spencerthomas/starter](https://github.com/spencerthomas/starter). It establishes project intent and layout; it does not install a technology stack or complete the project itself.

## Setup

Clone the starter once, then run `python3 scripts/scaffold.py --install-skills` in that checkout. It links the same skill into Codex's `~/.agents/skills/start-project` and Claude's `~/.claude/skills/start-project`. Existing entries are preserved; move or uninstall a conflicting skill deliberately before retrying. The installer preflights both paths before making changes.

Keep the source checkout available. The skill resolves the scaffold and templates through that checkout, so copying only `SKILL.md` is insufficient. Start a fresh session after installation. With a custom Codex home, install the skill in the user skill location supported by that installation instead of assuming the default.

Claude can alternatively load the full checkout as a plugin with `claude --plugin-dir /absolute/path/to/starter`; invoke `/starter:start-project`. Choose either skill installation or plugin loading to avoid duplicate discovery. There is no required marketplace, hook, MCP server, or runtime service.

Without installation, ask either agent to use the repository URL and read `skills/start-project/SKILL.md`. Global discovery is a local setup step, not something a GitHub template automatically provides.

## Add capabilities when the work needs them

These names are discovery hints for installations that provide them, not dependencies or guaranteed marketplace identifiers. Inspect the available skills/plugins in the current agent before choosing one. If missing, use native tools or explain the missing capability. Don't install a whole bundle just to scaffold folders.

| Work | Candidate skills / plugin families | First useful evidence |
| --- | --- | --- |
| Data analysis | `data-analytics`, `spreadsheets`, `jupyter-notebooks` | Input provenance, data quality, reproducible result |
| Feature exploration | `product-design`, `impeccable`, planning/review skills | User journey, bounded prototype, observed behavior |
| Research and knowledge | Research/source tools, `documents`, `pdf` | Source-backed claims with unresolved questions |
| Reports and decks | `documents`, `presentations`, `pdf`, `visualize` | Editable source and inspected export |
| Software | Framework-specific skills, test/browser tools | Run command and behavior appropriate to the change |

Choose only capabilities relevant to the first deliverable. Record actual dependencies and commands in the project README, and project-specific skill guidance next to the work. Tool/plugin instructions should support the user's scope and the repository's canonical documentation layout.

For multiple agents, use the ownership and handoff contract in [PLANS.md](../PLANS.md). No orchestration service is required.

Discovery references: [Codex skills](https://developers.openai.com/codex/skills), [Claude skills](https://code.claude.com/docs/en/skills), [Claude plugins](https://code.claude.com/docs/en/plugins-reference). Installation behavior also checked against local CLI help on 2026-09-09.
