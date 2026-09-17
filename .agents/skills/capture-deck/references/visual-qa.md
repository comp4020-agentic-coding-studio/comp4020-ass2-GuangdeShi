# Visual and Learning QA

## Slide-by-slide record

Review the rendered deck, not only the MDX source.

| # | 3-sec | One message | Spine beat | Layout | Contrast | Overflow | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

- **3-sec:** the primary message and reading order are apparent quickly.
- **One message:** the slide does one teaching job; split competing assertions.
- **Spine beat:** the slide maps to the approved narrative spine.
- **Layout:** the form is earned by the content; flag three consecutive
  compositions that are effectively identical.
- **Contrast:** body/caption text meets 4.5:1; text at 24px or larger meets at
  least 3:1. Check actual colours.
- **Overflow:** no clipped text, hidden SVG label, scroll-within-slide, or
  horizontal page overflow.
- **Evidence:** claim wording, IDs, Source IDs, and DIRECT/SYNTHESIS boundary
  match the register.
- **Notes:** each substantive slide has useful delivery context and no invented
  claim.

## Whole-deck checks

- The opening is a Milo situation, not an agenda.
- The deck has a visible narrative turn and returns to the opening problem.
- The ending opens the full Capture rather than claiming the deck completed it.
- No paragraph wall, bullet soup, generic icon strip, repeated card grid,
  ornamental chart, empty slogan, fake quote, or unearned emotional crescendo.
- Milo remains one observed cat, not a mascot delivering dialogue.
- No visual asset has unclear provenance.
- Motion, if present, communicates sequence or state and respects reduced
  motion.

## Technical checks

1. Build and run Astro diagnostics.
2. Run project tests and evidence checks.
3. Open the deck at 1920x1080 and 390x844.
4. Inspect the first, densest, most visual, and final slides at both sizes.
5. Advance and reverse with keyboard arrows; open help with `?`; open speaker
   notes with `S` when browser automation permits.
6. Check the browser console for errors.
7. Follow the final link into the Capture and refresh the deep route.
8. Verify built links and assets include the GitHub Pages base path.
9. Run `git diff --check` and review every changed file.

Report failures and any check that could not be run. Passing automation does
not replace Human Review of the narrative or visual language.
