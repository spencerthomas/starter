# Plans and handoffs

Small tasks can use a short in-chat plan. Use a committed execution plan for work that spans sessions, has material uncertainty, or involves multiple agents. Keep it in [active/](exec-plans/active/); move it to [completed/](exec-plans/completed/) after verification and update links.

Start a plan with just the useful fields:

```markdown
# Outcome
Status: active
Owner: integrating agent or person

## Intent and acceptance
What must change, for whom, and what evidence will establish success?

## Work
| Task | Owner | Input paths | Write scope | Acceptance check | State |
| --- | --- | --- | --- | --- | --- |

## Progress and decisions
Dated observations, decisions, and links to artifacts.

## Handoff
Changed paths, checks and results, unresolved issues, next action.
```

Give each worker a bounded outcome, enough input context, and an exclusive write scope. A fresh reader can review the result without the implementation discussion. The integrating agent maintains shared indexes and validates the combined result.

Keep deferred problems in the [debt tracker](exec-plans/tech-debt-tracker.md). A completed plan records acceptance evidence and remaining limits; it does not silently turn an unverified result into a success.

## Gardening

Update knowledge with the work. Weekly CI flags structural drift and catalog entries not reviewed in 90 days. To garden the docs, compare affected claims with source artifacts, check links and commands, prune obsolete instructions, and update review dates only after inspection. Record substantive gaps in quality or debt. The scheduled job reports problems; it does not run an agent or open automatic fix-up PRs. Add that automation when it has an owner and a demonstrated need.
