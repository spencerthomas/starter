# Frontend

The editorial website uses Next.js App Router, Geist, Motion, Radix, and stripped shadcn/ui primitives. It has three routes: overview (`/`), the original essay (`/why-starter`), and the guide (`/getting-started`). See [design](DESIGN.md) for the built identity and [research](../reports/website-research.md) for source boundaries.

Run `npm ci` and `npm run dev`. Verify with `npm run build` and `npm run typecheck`. The existing Vercel project serves starter.tomspencer.co from main; this local redesign is not a deployment. The guide currently targets the published template-and-workflow branch; update its clone command and essay source links when that work merges.

The project atlas, synchronized folder explorer, and five-stage loop explain real conventions with original vector diagrams. The explorer adapts Motion Primitives Pro Feature 1 and the supplied Noir reference; navigation uses a shared-layout indicator inspired by Nim. Tabs and buttons use reduced shadcn/ui composition. See [third-party notices](../THIRD_PARTY_NOTICES.md) for provenance and distribution boundaries.

Keep content present in server HTML. Motion responds to a choice and respects reduced-motion preferences; no essential content depends on animation. Use keyboard-operable controls, visible focus, readable narrow layouts, copy feedback, and accessible diagram descriptions. Verification covers all routes at desktop/mobile widths, real interaction states, browser errors, overflow, and the actual scaffold commands.

Website dependencies, paid component adaptations, and this visual identity remain outside template/. Generated projects receive the template's unconfigured frontend guide.
