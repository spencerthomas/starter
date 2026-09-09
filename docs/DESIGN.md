---
name: Starter
description: A restrained editorial system with explorable maps of project work.
colors:
  paper: "#f5f6f4"
  surface: "#fff"
  ink: "#19231f"
  muted: "#58635b"
  line: "#d6ddd5"
  green: "#245749"
  deep: "#173d33"
  pale: "#e4ece1"
  accent: "#c8ddba"
  button-hover: "#163f33"
  utility-surface: "#e9ede7"
typography:
  display:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(3.3rem, 7.5vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(2rem, 4.1vw, 3.2rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
  label:
    fontFamily: "Geist, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.3
  code:
    fontFamily: "Geist Mono, monospace"
    fontSize: "12px"
    lineHeight: 1.9
rounded:
  inline: "3px"
  tab: "5px"
  button: "6px"
  node: "7px"
  copy: "8px"
  panel: "10px"
  atlas: "12px"
spacing:
  compact: "8px"
  medium: "20px"
  wide: "40px"
  section-mobile: "65px"
  section: "110px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "11px 19px"
  button-primary-hover:
    backgroundColor: "{colors.button-hover}"
  button-outline:
    backgroundColor: "transparent"
    rounded: "{rounded.button}"
    padding: "11px 19px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "11px 19px"
  tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.tab}"
    padding: "10px 13px"
  copy-block:
    backgroundColor: "{colors.utility-surface}"
    rounded: "{rounded.copy}"
  atlas-node-selected:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.node}"
    padding: "22px"
---

# Design System: Starter

## Overview

**Creative North Star: “Systems atlas” — provisional implemented direction.**

Starter combines spacious technical publishing with precise, interactive vector diagrams. A pale neutral page, dark-green diagram fields, restrained controls, and substantial Geist headings give the work a clear home. This documents the locally built website, not a published or user-approved visual identity. The implementer selected candidate 3, seed `73c6ef78`, after optional direction questions went unanswered; there is no approved comp or standing visual preference.

Key characteristics:

- Broad editorial spacing and readable, factual prose.
- Relationships and selected states expressed through lines, labels, and color.
- Flat surfaces, modest corners, and motion tied to interaction.

The scope is the website; generated projects retain their own generic design guidance. Product context lives in [PRODUCT.md](../PRODUCT.md), surface intent in the [surface brief](../.impeccable/surfaces/src-app-page-tsx.md), and implementation tokens in [the stylesheet](../src/app/globals.css). This specification and its [extension sidecar](../.impeccable/design.json) were extracted from that source and the local review captures. The frontmatter is normative for extending this identity; refresh it when the implementation changes.

## Colors

The palette moves from cool pale neutrals to deep forest green, with soft leaf green marking emphasis.

- **Primary:** green identifies primary actions, headline emphasis, links, and focus. Deep forms the atlas field. Accent identifies the selected atlas node and text selection.
- **Neutral:** paper is the page ground; surface supports the skip link and primary-button text. Ink carries headings and active controls; muted carries supporting prose. Line separates sections. Pale supports hover and inline code; utility-surface groups file trees and copyable material.
- **State:** button-hover deepens the primary button. Detailed diagram strokes and caption tones remain local to the diagram rather than becoming a new general palette.

## Typography

Geist provides headings, prose, and controls; Geist Mono distinguishes commands and repository paths. The display role describes the homepage hero; the essay uses its own narrower display scale. Headings use medium weight, tight tracking, and balanced wrapping. Body copy remains lighter and more open.

Long-form essay text uses 17px at 1.95 line height, with a 70ch limit; guide copy uses 16px at 1.85. Supporting labels generally range from 11–14px. Reserve monospace for actual technical material, not decorative subtitles.

## Layout

The shared content width is at most 1160px, with 40px desktop gutters. Main sections pair a heading or explanation with an interactive artifact, separated by substantial vertical space. Guide and essay layouts use a 240px sticky contents column, a 95px gap, and a reading column capped at 725px.

At 1000px, gutters become 24px and column gaps tighten. At 700px, gutters become 20px, major sections stack, contents navigation becomes static, and the header reduces from 92px to 77px. The three route links remain visible; the separate GitHub header link hides. The atlas becomes a two-by-two layout with dedicated mobile connectors and a readable caption beneath it. Tabs wrap instead of requiring horizontal scrolling. Above 1450px the hero gains additional top space.

## Elevation & Depth

Surfaces are flat, separated by tone and fine rules. There are no ambient drop shadows, paper textures, or simulated paper illustrations. The outline-button inset shadow acts only as a border. Offset vector rectangles behind the atlas context node indicate grouped context; they are diagram geometry, not a general card treatment.

## Shapes

Use modest rounded rectangles for controls, code surfaces, and diagrams, following the frontmatter roles. Content sections remain open and use rules rather than enclosing every paragraph in a card. Fine line icons, the four-square brand mark, connector paths, and the loop orbit are the recurring vector vocabulary. Circles belong to step markers and orbit indicators.

## Components

- **Buttons:** the pared-back shadcn-derived primitive offers primary, outline, and ghost variants, plus a small size. Default controls have a 46px minimum height; small controls use 36px. Hover changes tone over 0.2 seconds. Visible keyboard focus uses a 2px green outline offset by 5px. Disabled buttons lower opacity and change the cursor.
- **Navigation:** a sticky, opaque header uses a fine bottom rule. The current route has dark text and a green underline, with a shared-layout marker transition of 0.25 seconds. Contents links provide direct section access on reading pages.
- **Tabs and loop stages:** compact text controls sit above a rule; active state reverses ink and paper. Radix tabs manage the start options. Loop stages are pressed-state buttons with explanatory text and an orbit indicator, not an additional tab implementation.
- **Copy blocks:** a pale utility panel separates its label and small ghost copy button from the text. Commands use monospace; prompts use normal prose. Successful copying temporarily shows “Copied”; failure leaves selectable text and a visible manual-copy instruction. Status is announced accessibly.
- **Repository explorer:** border-separated disclosure headings update the adjacent monospace file tree. Expanded state has darker text, explanatory copy, and a path. On narrow screens the file tree sits below the controls.
- **Project atlas:** three selectable nodes explain Context, Work, and Evidence. The selected node uses accent fill, its caption updates politely, and desktop and mobile connectors preserve the feedback relationship. Keyboard focus on the dark field uses a pale outline. The essay reuses this same diagram.
- **Working loop:** stage selection changes the explanation and orbit dot. The essay uses a compact variant without the orbit figure. Reduced-motion preferences remove spatial animation and smooth scrolling while retaining state feedback.

The sidecar contains representative static HTML/CSS specimens; application behavior remains in the React components. There are no general-purpose form inputs, chips, or card library to standardize in this build.

## Do's and Don'ts

- **Do** retain readable labels, captions, focus states, and connectors at mobile sizes.
- **Do** use the same primitives across all three routes and keep source links near claims.
- **Do** preserve actual state differences when reducing motion.
- **Don't** introduce textures, broad shadow effects, or decorative component families absent from the built identity.
- **Don't** interpret this provisional direction as a confirmed user preference or local screenshots as publication evidence.

Capture consequential decisions in [design-docs](design-docs/index.md): context, choice, useful alternatives, and consequences. Keep proposals visibly separate from adopted decisions. Prefer one canonical representation with links to derived views; record changes to audience, methods, interfaces, or boundaries where the next worker can find them. Small edits do not each need a design document.

When a real boundary or recurring review correction matters, encode the smallest useful invariant in an existing check, fixture, or example, and give failures a repair hint. Keep freedom inside the boundary; add application layers or new linters only for a concrete need.
