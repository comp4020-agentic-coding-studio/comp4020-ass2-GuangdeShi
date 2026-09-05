# Process record — the Voice & Editorial Design stage

**Status:** Process evidence, preserved to be cited later when the
project's final `PROCESS.md` is written. This is not that document — it
is the raw record of why a distinct editorial stage exists between
content production and presentation design.

## What had already happened before this stage began

All twelve chapters of the curriculum (Parts I–IV) were drafted,
individually Part-reviewed, and committed. A whole-course progression
audit was then run across all twelve chapters together — checking claim
IDs, prerequisite chains, and cross-chapter references for consistency
— and its findings were fixed and committed. At that point the course
was factually complete, internally consistent, and structurally locked:
every chapter had an approved Concrete Knowledge Map, a registered claim
in `docs/SOURCES.md`, and a justified place in the sequence.

## Why that wasn't the end of the content work

Assignment 2 does not only ask for a curriculum that is factually
correct. It asks for a curriculum that holds together as one idea and
has a voice of its own — explicitly warning against a course that reads
as a set of "content-shaped chunks": twelve competent, interchangeable
articles that happen to share a topic. A factually complete, well-cited
curriculum can still fail that requirement, because factual correctness
and voice are different properties. Nothing in the audit stage tested
for voice, because nothing in that stage was supposed to.

This is the reason the project moved to a distinct **Voice & Editorial
Design** stage rather than proceeding directly to presentation design
(slides, UI, the Cat Run interface). Presentation design assumes there
is a settled prose voice to present — building slides or an interface
on top of unvoiced content would have meant designing the *container*
before the *substance* it contains was finished.

## What this stage did

1. Inspected available third-party "Humanizer" and "Storyteller"
   skills. Found a genuine, licence-compatible upstream match for
   Humanizer (`jooray/humanizer`, MIT) and adapted it, narrowed to this
   project's genre, with attribution recorded in
   `.claude/skills/humanizer/ATTRIBUTION.md`. Found no matching upstream
   for Storyteller — several tools shared the name but addressed
   unrelated problems (screenplay breakdown, web-design scroll effects,
   commit-message narration, brand copywriting) — and authored an
   original skill instead, with the reasoning recorded in
   `.claude/skills/storyteller/NOTE.md`.
2. Established `docs/VOICE.md` as the authoritative editorial voice
   guide: the one-line voice ("a warm field notebook following one cat
   across a lifetime"), the qualities the prose should and shouldn't
   have, anti-slop warning patterns, a flexible chapter voice grammar,
   the Momo-continuity requirement, and — the load-bearing rule — that
   voice may change how a true thing is said but never what is true.
3. Added a persistent workflow rule to `CLAUDE.md` (§22) defining the
   editorial pipeline (`LOCKED CONTENT → VOICE PASS → NARRATIVE PASS →
   HUMANIZATION PASS → EVIDENCE-PRESERVATION CHECK → VOICE AUDIT →
   APPROVED PROSE`) and the human-approval boundary for editorial
   changes, mirroring the boundary already used for curriculum work.
4. Produced one representative sample — a partial voice-pass rewrite of
   Chapter 5 (`docs/process/voice-sample-chapter-05.md`) — rather than
   rewriting all twelve chapters immediately, so the voice itself could
   be reviewed and approved before the larger, more expensive rewrite
   pass is run against locked content.
5. Ran a voice audit against that sample and recorded the findings
   directly in the sample document.

## What this stage deliberately did not do

- Did not modify any chapter file's content, claims, or structure.
- Did not rewrite Chapters 1–12 in full.
- Did not begin UI, slide, or Cat Run / virtual-cat interface work.
- Did not attempt to imitate a specific living author's style.

## The sequence this establishes

```
CONTENT-FIRST          — twelve chapters drafted, reviewed, audited
       |
VOICE DESIGN            — this stage: voice system + one sample + audit
       |
PRESENTATION DESIGN      — not yet started: slides, UI, Cat Run interface
```

The reasoning for keeping these as separate, sequential stages —
each one locked before the next begins — is the same reasoning already
governing the rest of this project: build and verify one layer before
building the next layer on top of it, so a mistake at one layer doesn't
propagate silently into the next.
