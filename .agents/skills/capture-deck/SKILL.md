---
name: capture-deck
description: Convert one approved Milo Capture chapter into a narrative educational briefing deck in the project's existing astromotion .deck.mdx system. Use only when asked to plan, create, revise, or audit a course briefing deck.
---

# Capture Deck

This is a project-specific teaching skill, not a general presentation generator.
It turns approved Chapter material into an optional visual briefing that leads
into the full Capture. It never replaces the Capture, changes the curriculum,
or creates a parallel slide runtime.

## Required context

Before deck work, read:

1. `CLAUDE.md`
2. `docs/CURRICULUM.md`
3. `docs/VOICE.md`
4. `docs/LESSON_SYSTEM.md`
5. the relevant `docs/chapters/chapter-XX.md`
6. the relevant entries in `docs/SOURCES.md`
7. the current learner-facing Capture data/page
8. `src/decks/theme.css` and any existing deck being revised

Authority remains with those project documents. This skill has no curriculum,
medical, evidence, assessment, or visual-direction authority of its own.

## Output contract

- Output stays in the existing `src/decks/**/*.deck.mdx` system.
- Use astromotion/Reveal and `src/decks/theme.css`; do not add another runtime.
- A Chapter briefing is normally 8-12 slides.
- The deck is optional orientation. The complete 4+ hour Capture remains the
  primary learning experience.
- Prefer the existing Milo/editorial components and locally authored SVG. Do
  not fetch unlicensed visual material.

Read `references/deck-mdx-contract.md` before editing a deck.

## Gate 1: content source

Build a small content ledger before outlining:

- approved scene and chapter capability;
- Claim IDs and Source IDs used;
- DIRECT or SYNTHESIS status;
- owner-level action and professional-escalation boundary;
- details intentionally omitted because the full Capture teaches them.

Only approved Chapter content, registered Claim IDs, and verified Source IDs
may supply factual teaching. Do not add medical facts, change a claim to make it
shorter, turn SYNTHESIS into DIRECT, or imply diagnosis, prescribing, or home
treatment. If the source material cannot support a proposed slide, cut the
slide or stop for Human Review.

## Gate 2: narrative spine

Write the ending first: what should the learner notice or decide differently
before entering the Capture? Then propose an 8-12 slide spine. Every slide must
name exactly four things:

| Field | Requirement |
| --- | --- |
| Assertion | One complete, defensible message, not a topic label |
| Learning function | What changes in the learner's observation or judgement |
| Visual intent | The visual relationship that makes the idea clearer |
| Evidence | Claim IDs, Source IDs, and DIRECT/SYNTHESIS status where relevant |

Use the course arc when it fits:

`scene -> notice -> misconception -> evidence -> decision -> return to Milo`

The arc governs the whole briefing, not every individual slide. Follow
`references/narrative-gates.md`. Do not begin slide production until the spine
has been reviewed when the task includes a Human Design Gate.

## Gate 3: slide design

Each slide carries one main idea and passes these rules:

- assertion headline rather than a generic subject heading;
- short on-slide copy; speaker notes hold explanation and delivery cues;
- one earned focal element, with a clear reading order;
- a visual relationship when it clarifies the claim;
- no paragraph wall, bullet soup, generic icon grid, decorative diagram,
  repeated card layout, fake emotional language, or pitch-deck treatment;
- no three or more consecutive slides with the same composition;
- no image or motion that merely repeats the headline;
- no invented inner voice for Milo.

Reject the first reflexive layout before composing each slide. A large quote,
comparison, timeline, diagram, or full scene is used only when the content
earns that form. Emotion must come from a specific true moment, not from hype.

## Gate 4: project narrative

Keep Milo continuous with the course lifecycle and current chapter scene. The
briefing should feel like a warm field notebook following one cat across a
lifetime. The learner is an owner learning to observe and decide, not a trainee
veterinarian and not a passive audience for a mini textbook.

Return to the opening situation after evidence. End with a clear, non-forced
route into the full Capture. Do not turn the final slide into a generic recap or
marketing call to action.

## Gate 5: QA

Run the complete checklist in `references/visual-qa.md`. At minimum:

- render and inspect every slide;
- 3-second test and one-message-per-slide test;
- map every slide back to the approved spine;
- check source accuracy and DIRECT/SYNTHESIS status;
- inspect layout variety, contrast, overflow, and speaker notes;
- test keyboard navigation;
- inspect at 1920x1080 and 390x844;
- verify GitHub Pages base-path links and console output;
- run the project build, tests, evidence check, and `git diff --check`.

Report unrun checks honestly. Do not call a deck complete from source review
alone.

## Scaling boundary

Chapter 01 is the Human Design Gate. Do not generate Chapter 02-12 decks until
the human explicitly approves Chapter 01 as the production reference.
