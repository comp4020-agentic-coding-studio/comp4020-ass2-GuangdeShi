# Chapter Script System

This directory holds the **teaching + visual production script** for every
chapter, written *before* any deck/code implementation. A chapter script is
a planning document, not implementation — it is what gets approved before
`src/decks/chapter-NN.deck.mdx` is touched.

`chapter-01.md`, `chapter-02.md`, and `chapter-03.md` (drafted together
during the Chapters 1–3 stage) use the expanded template below, and double
as the template every future `chapter-04.md` … `chapter-12.md` should
follow. Copy their section headings; do not invent new top-level sections
without a reason.

**Note on history:** the original version of this template (still visible
in early revisions of `chapter-01.md`) had fewer sections — no prerequisite
capability, no concrete knowledge map, no owner-facing application, no
practice/applied activity, no common misconceptions, no learning workload
breakdown, no placement justification. The Chapters 1–3 stage expanded the
template to make each chapter answer, on paper, all of the A–M content
requirements (chapter identity, core problem, learning outcome, prerequisite
capability, knowledge map, evidence, owner-facing application, opening
scenario, practice activity, transfer case, misconceptions, four-hour
workload breakdown, placement justification) before any deck/code
implementation begins. This is a `PROPOSED` template change and should be
reviewed alongside the Chapters 1–3 content itself.

## Template structure

### Chapter metadata
Chapter number, teaching week, part, working title, Momo age/life stage,
status, learning outcome.

### Teaching purpose
The specific misconception, knowledge gap, or owner capability this chapter
addresses — not a generic topic statement.

### Prerequisite capability
What earlier chapter(s) this one depends on, and what specific capability
from them it assumes rather than re-teaches. "None — first chapter" is a
valid answer for Chapter 1 only.

### Concrete knowledge map
Concrete concepts, distinctions, procedures and observable signals that
must actually be taught, organised into a small number of lettered clusters
(roughly 6–10 concepts total across clusters). Avoid vague entries
("understand cats", "learn about stress", "explore wellbeing"). Each
concept should note its owner-relevance and, where applicable, the
misconception it corrects, with a `docs/SOURCES.md` claim ID.

### Owner-facing application
What the student should concretely be able to do with this chapter's
content in their own home, stated as an observable capability, not a topic.

### Opening scenario
What Momo is doing; what the student sees; what information is deliberately
withheld; what decision the student must make.

### Opening question
Question text; plausible answer options; intended answer; why each wrong
option is tempting; what misconception each wrong option reveals. Wrong
options must not be ridiculous strawmen.

### Slide / Beat Plan
A table with columns: Beat, Slide Type, Student-facing Text, Teaching
Content, Visual Asset, Momo State/Motion, Interaction, Source Claim, Notes.
This is the single most important table in the document — it should make
the whole chapter reviewable before any implementation.

### Practice / applied activity
A described (not implemented) activity giving the student hands-on practice
applying the chapter's judgement, distinct from the opening question and
transfer scenario. Description only — no UI/interaction design at this
stage.

### Transfer scenario / Case Check
A new scenario (not identical to the opening question) testing genuine
transfer — a different situation that requires the same underlying
judgement, not a repeat of the same facts. Record: scenario, options,
answer, reasoning, misconception tested.

### Common misconceptions
2–4 concrete misconceptions this chapter should leave the student without,
each tied to a specific piece of content or claim ID above.

### Learning workload breakdown
A table estimating time across core teaching, guided reading,
scenario/case analysis, applied/observation activity, and
checkpoint/self-review, targeting 4+ hours of genuine student learning —
not slide-deck runtime. If a chapter cannot honestly reach this target from
real components, flag it rather than padding it.

### Chapter completion
What capability was gained; how Momo's state/age changes; what becomes
possible in the next chapter.

### Placement justification
Why this chapter belongs at this point in the sequence: what breaks if it
moved earlier or later, and what the course would lose if it were removed.
Should be able to answer the "could this swap with a distant chapter?" test
from `CLAUDE.md` §5.

### Open questions for human review
Any `QUESTION FOR HUMAN` or `PROPOSED` items the chapter raises, kept in one
place at the end of the file.

## Status and authority

Every chapter file must carry an explicit status (e.g. `APPROVED WORKING
DIRECTION`, `DRAFT`, `PROPOSED`). Content beyond what the human has actually
approved must be marked `PROPOSED` or `QUESTION FOR HUMAN` inline — see
`CLAUDE.md` §16. See `docs/LESSON_SYSTEM.md` for the shared slide-type
definitions the "Slide Type" column draws from, and `docs/SOURCES.md` for
the Claim IDs the "Source Claim" column references.
