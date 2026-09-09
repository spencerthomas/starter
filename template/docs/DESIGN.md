# Design

Capture consequential decisions in [design-docs](design-docs/index.md): context, choice, alternatives when useful, and consequences. Keep proposed choices visibly separate from adopted ones.

Prefer one canonical representation with links to derived views. Record changes to audience, methods, interfaces, or boundaries where the next worker can find them. Do not create a design document for every small edit.

When a real boundary or recurring review correction matters, encode the smallest useful invariant in an existing check, fixture, or example. Give failures a repair hint. Keep freedom inside the boundary; do not impose application layers or write a linter before the project has a concrete need.
