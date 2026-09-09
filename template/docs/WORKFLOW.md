# Working loop

Use this loop for code, analysis, research, and deliverables. Scale the effort to the task; a small change needs no new plan file. These are agent instructions, not a background service or a guarantee that an agent follows them.

## Start with a working agreement

Read the brief and current evidence. Establish the intended outcome, scope, available inputs/tools, and how the result will be checked. Infer routine details from context; ask only when a missing answer changes the outcome or authorized scope. Put a durable agreement in the existing brief or plan, not a parallel tracking system.

## Inspect, act, verify, review

1. **Inspect:** Read the relevant source of truth and establish the baseline. Reproduce a failure or inspect the current artifact before changing it. Identify missing access or evidence early.
2. **Act:** Make the smallest coherent change within scope. Own the code, analysis, checks, and documentation needed for that result. Prefer existing tools and patterns; add a dependency only for a concrete need.
3. **Verify:** Exercise the result where it will be consumed. For software, run the relevant behavior and failure cases; for analysis, validate inputs and reproduce the result; for research, trace claims and conflicts; for documents, inspect the rendered artifact. Record the command or method, result, and limits. A structural pass is not factual or user acceptance.
4. **Review and recover:** Compare the result with the brief and inspect the diff or artifact for unintended effects. Fix actionable failures and rerun affected checks. Use an independent reviewer for consequential or ambiguous work when available and authorized, not for every trivial edit. Judge feedback against evidence. If the same failure persists after two materially different attempts, stop that loop, preserve evidence, and identify the missing capability or decision. Continue independent work; do not repeatedly retry unchanged steps or claim completion.
5. **Finish:** Report what changed, verification, remaining gaps, and the next action. Update affected knowledge and capture a useful correction in an existing rule, example, or check. If no recurring friction was observed, add nothing. Leave a resumable handoff for unfinished work.

## Scope and collaboration

Keep changes small enough to review and reverse. Follow existing permissions: local preparation does not authorize publishing, deployment, spending, sending messages, or merging. Do not add repeated approval gates for work already authorized. Required checks and material correctness failures remain blocking; a known flaky check needs evidence and a tracked follow-up, not a silent bypass.

Use [plans](PLANS.md) when work spans sessions or agents. Delegate only independent outcomes with explicit input paths, write scope, and acceptance; one integrator owns shared indexes and the combined result. Isolate conflicting edits or runnable environments only when necessary. Workers return artifacts and evidence, not just a confident summary.

## Keep the environment useful

At task completion, compare touched instructions with the observed behavior and remove misleading examples. At a milestone or when drift appears, inspect relevant docs, a runnable path, and known debt together; correct a bounded discrepancy or record it. Weekly CI checks structure only. Add scheduled review or agent-specific hooks only after a recurring need is demonstrated, with an owner, bounded scope, stop condition, and notification policy. Hooks cannot establish factual correctness or grant authority.
