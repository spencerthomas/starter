---
name: start-project
description: Scaffold a minimal project using spencerthomas/starter for code, data analysis, feature exploration, research, or knowledge work. Use when the user asks to use the starter or create a new project structure.
---

# Start a project

Use the starter's maintained layout, tailoring intent to the user's task. Establish the destination from context; ask only if the write target is ambiguous. Infer the project kind and a short brief when possible. Do not make users answer a project questionnaire before there is work to do.

## Locate the starter

This skill ships in `skills/start-project/` inside the starter checkout or full Claude plugin. Resolve this skill directory's real path first if it is a symlink. The starter root is two directories above it. Read that root's `ARCHITECTURE.md` and `docs/references/skills-and-plugins.md` only as needed.

If only a repository URL was supplied, obtain a local checkout of `https://github.com/spencerthomas/starter` in an appropriate temporary location and read this skill there. Do not clone the starter over existing work.

## Scaffold

For a new or empty target (an existing `.git/` is allowed), run the bundled script using absolute paths. The following example uses illustrative paths; substitute real ones as separately quoted arguments:

```sh
python3 /absolute/path/to/starter/scripts/scaffold.py /absolute/path/to/new-project --kind analysis --name 'Project name' --brief 'The intended outcome'
```

Use `general`, `analysis`, `feature`, or `research` as the nearest starting point. Use `--dry-run` when a preview helps. The script copies the exact docs skeleton, working folders, and documentation check; it writes a project README and brief. It does not copy its own distribution tooling, initialize Git, install packages, or configure remotes.

For an existing project or a GitHub template copy, inspect its instructions and files first. Do not run the generator over it or force a reset. Add missing documents deliberately and tailor the existing brief, indexes, README, and architecture without replacing useful work. Retain the requested docs layout; don't create a competing planning tree.

## Tailor only what is known

- Rewrite the brief with known audience, desired result, scope, and observable acceptance. Label assumptions and unresolved details. Remove generic starter advice once concrete facts replace it.
- For analysis, identify question, population/timeframe, inputs, and first data-quality checks. Add `data/manifest.md` when actual inputs are known. Never invent findings or data availability.
- For a feature, identify the user journey and smallest useful behavior. Add code/UI folders and dependencies only when implementation is requested or needed for the first experiment.
- For research or knowledge work, identify the decision, source standard, and intended report/deck/artifact. Keep evidence and inference distinct.
- Keep `docs/`, `analysis/`, `data/`, `reports/`, `presentations/`, and `outputs/`. Add other folders only for immediate work. Do not manufacture example schemas, datasets, applications, or plans.
- Discover installed capabilities before suggesting them. Use relevant skills/plugins without making optional packages prerequisites for scaffolding.
- For substantial or parallel work, use `docs/PLANS.md` to capture owner, write scopes, acceptance checks, and handoffs. Don't start agents just to populate a scaffold.

## Finish

Run `python3 <target>/scripts/check_docs.py`. Inspect the brief and final tree for irrelevant leftovers. Report the target, what was tailored, validation, and the next useful action. Continue with the substantive work only when it is part of the user's request. Report Git publication or skill installation separately from local scaffold completion.
