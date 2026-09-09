# Explicit template and portable agent workflow

Status: adopted locally, 2026-09-09. User authorized refinement and implementation.

## Decision

Keep one repository with three boundaries: `template/` contains only project defaults; `scripts/scaffold.py` and `skills/start-project/` tailor and deliver them; the root website and docs explain and maintain the starter distribution. The generator is the supported minimal creation path. GitHub's template button duplicates the distribution and is no longer the primary call to action.

The template owns the canonical documentation checker. The root command delegates to it, so maintenance and generated projects exercise the same implementation. The generator copies an explicit allowlist, including `docs/WORKFLOW.md`; adding a source file does not silently add it to every project. Root docs never supply template prose. CI checks both knowledge bases and generated projects.

Add one short workflow document, routed from both agent entry points through AGENTS.md. It establishes outcome and evidence, an inspect/act/verify/review loop, bounded recovery, scope boundaries, and small cleanup at completion. Existing briefs carry the working agreement; existing plans carry shared ownership. No hooks, extra agents, plugin bundle, background service, or new task tracker is installed.

## Alternatives and consequences

A separate public template repository would make GitHub's template button clean, but introduces synchronization and release coordination. Defer it unless that route becomes a requirement. Moving the website to another deployment project offers no additional protection against template leakage once generation reads only `template/`; keep its current build location and deployment configuration.

Runtime-specific hooks could remind agents of the workflow but add installation, permission, and maintenance costs. Portable instructions plus actual project checks are the first layer. They cannot guarantee compliance: agent behavior, tool availability, fresh-session discovery, and multi-agent handoffs still require observed trials.

The template intentionally contains documentation, not a software architecture. Dependency rules, input validation, and taste constraints become mechanical only when a concrete project needs them. Merge policy remains governed by the project and user authorization.

## Evidence

See the [section review and implementation assessment](../../reports/harness-workflow-review.md), [tests](../../tests/test_starter.py), and [template workflow](../../template/docs/WORKFLOW.md).
