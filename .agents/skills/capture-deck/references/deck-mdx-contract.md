# Deck MDX Contract

## Existing renderer

The project already uses Astro plus astromotion/Reveal. Every
`src/decks/**/*.deck.mdx` file builds to `/decks/<slug>/`. Keep this renderer,
route system, keyboard behaviour, print support, and `src/decks/theme.css`.

Do not add standalone HTML navigation, Reveal CDN imports, Marp, Slidev,
PowerPoint generation, `python-pptx`, or `pptxgenjs`.

## Authoring syntax

- YAML frontmatter supplies `title` and `description`.
- A thematic break (`---`) starts a new slide.
- Single-line MDX comments apply astromotion directives such as
  `{/* _class: impact */}`.
- Speaker notes use a fenced `notes` block. Notes are markdown and compile to
  Reveal's speaker view.
- Authoring rationale may use a fenced `comment` block; it is stripped from
  the learner-facing deck.
- Import existing Astro/framework components at the top and render them
  statically unless interaction genuinely requires hydration.

Example:

````mdx
---
title: Capture briefing
description: Optional orientation to one consultation.
---

import EditorialRoomScene from "../components/EditorialRoomScene.astro";

{/* _class: capture-scene */}

# One defensible assertion

<EditorialRoomScene ... />

```notes
Explain the approved evidence and name the transition into the next slide.
```
````

## Content and evidence

- Keep Claim IDs and support status accurate.
- A claim label is not a substitute for a speaker note explaining its limit.
- Use `DIRECT` only when the registered source substantially states the claim.
- Disclose course-constructed connections as `SYNTHESIS`.
- Scene-only slides may use `SCENE ONLY` in the planning ledger and do not need
  a decorative claim label on screen.
- Never add a source from memory or from an unregistered web result.

## Visual system

- Reuse `EditorialRoomScene.astro`, `MiloFigure.astro`, course colours, and the
  existing editorial object language when they serve the slide.
- Put deck-specific rules in `src/decks/theme.css`, scoped under a distinctive
  deck class. Do not import the full website stylesheet into Reveal.
- Add a local SVG only when an existing component cannot express the teaching
  relation. Keep an Astro SVG component under `src/decks/components/` or a
  standalone file under `src/decks/assets/`, and include accessible text.
- Avoid cards as the default composition. Use scene, detail, comparison,
  sequence, or a single statement according to the learning function.

## Links and base path

Use project-supported markdown links and verify the built HTML contains the
GitHub Pages base path `/comp4020-ass2-GuangdeShi/`. Never assume a root-hosted
deployment from localhost behaviour alone.

## Density and notes

On-slide text should be readable at projection distance and quickly parsed.
Speaker notes hold the fuller approved explanation, evidence boundary, and
transition. Notes are prompts, not a script and not a hidden second textbook.
If the deck must be understood asynchronously, add only the context needed to
make the assertion honest; the full lesson still belongs in Capture.
