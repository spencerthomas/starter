# Frontend

The starter's one-page introduction lives in `src/app/` and uses Next.js App Router. Run `npm ci` and `npm run dev`; use `npm run build` and `npm run typecheck` to check it. The existing Vercel project `starter` serves `starter.tomspencer.co` from `main`.

Match [Tom's website](https://www.tomspencer.co): Geist typography, a 736px maximum column, white background, neutral text, and generous spacing. Keep the landing page text-led, with links to the GitHub template, guide, and source.

`src/components/animated-group.tsx` adapts [Motion Primitives Animated Group](https://motion-primitives.com/docs/animated-group). Content stays visible in server HTML; a small entrance movement respects reduced-motion preferences. Attribution is in the root third-party notices file.

Verify desktop and narrow layouts, keyboard focus, outbound link destinations, and browser errors. This website is excluded from generated projects; the generator resets this frontend guide to its unconfigured state.
