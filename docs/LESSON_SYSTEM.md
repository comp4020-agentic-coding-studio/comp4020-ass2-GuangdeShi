# Lesson System — Care Consultation Presentation Grammar

**Status:** Form/experience direction approved at the Human Design Gate on
2026-09-15. This document defines the reusable lesson grammar shared across
all twelve chapters, so the course is implemented as one consultation system
rather than twelve bespoke mini-sites. It does not alter the curriculum or
define final CSS; see `CLAUDE.md` §10 and §23.

## Approved experience frame

The site is **Momo's Life — Interactive Home + Care Consultations**.

- The homepage is one recognisable home that changes with Momo's age and the
  care decisions made visible across the twelve-chapter course.
- A chapter begins with a concrete problem in that life, not a topic card.
- The learner acts as Momo's owner seeking practical guidance, not as a
  veterinary trainee.
- The consultant's recurring reasoning is: observe, recognise, interpret,
  make a safe owner-level decision, and know when professional help is needed.
- The learner makes an initial judgement before teaching, then revisits the
  same problem after evidence, comparison, and practice.
- The consultation ends with a practical Care Plan and a formative Chapter
  Check.

The consultation is the chapter's narrative and pedagogical wrapper. It must
not turn a 4+ hour chapter into a short branching quiz. Core teaching,
readings/evidence, practice, transfer cases, and self-review remain present,
using progressive disclosure where useful.

## Consultation phases

| Phase | Purpose | Typical lesson types | Required outcome |
|---|---|---|---|
| Arrival | Establish Momo's age, household context, and concrete problem | HERO, SCENARIO | The learner understands what has happened without being handed the interpretation |
| Notice | Ask what the learner observes before explaining it | QUESTION, ANNOTATED SCENE | The learner separates visible evidence from assumption |
| Initial judgement | Capture a plausible first decision and its reasoning | QUESTION, COMPARE | A revisitable judgement is stored locally for the consultation |
| Consultation | Teach the chapter's approved knowledge clusters | TEACH, IMAGE + TEXT, DIAGRAM, COMPARE | All substantive content and evidence in the chapter plan remain accessible |
| Guided practice | Apply the new reasoning to observations, arrangements, or comparisons | DIAGRAM, COMPARE, SCENARIO | The learner practises the chapter capability rather than only reading it |
| Return to Momo | Reopen the original problem with the relevant evidence now visible | SCENARIO, QUESTION, REVEAL | The learner makes and explains a revised judgement |
| Care Plan | Turn the judgement into safe owner actions, observations to record, and escalation boundaries | REVEAL, TEACH | A concise, printable/retained recommendation grounded in the chapter |
| Chapter Check | Test concepts, realistic scenarios, and ambiguous synthesis | CHECKPOINT | Formative feedback explains every option; no formal assessment weight is implied |

The phases are a common language, not a requirement for one screen per row.
A reasoning-heavy chapter may spend longer in comparison and evidence; a
spatial chapter may spend longer in an annotated room. Every chapter must
still make the opening judgement and later re-judgement legible.

## Slide vocabulary

| Slide Type | Pedagogical Purpose | Expected Text Density | Typical Visual Arrangement | Allowed Interaction | Typical Momo Role | Animation Guidance | Mobile Considerations |
|---|---|---|---|---|---|---|---|
| HERO | Introduce a major moment/chapter | Very low (a few words / a title) | Full-bleed image or scene, minimal text overlay | None (advance only) | Enter/Appear | One entrance motion only | Text must remain legible over the image at narrow widths; avoid a side-by-side split at mobile scale |
| SCENARIO | Put Momo into a concrete situation before teaching the answer | Low (1-2 sentences) | Scene illustration/photo, short caption | None (advance only) | Context-dependent (often Hide or Alert) | Motion only if it conveys the situation (e.g. Hide) | Scene must remain readable cropped to a narrow aspect ratio |
| QUESTION | Test the student's current intuition | Low-moderate (question + 3 options) | Question text with stacked/grid option buttons | Click/tap one option | Usually unchanged from prior scenario | None decorative; feedback only on selection | Options must stack vertically and stay tap-sized (44px+) |
| REVEAL | Expose the misconception or principle | Moderate (short explanation) | Text-led, may reuse prior scene image smaller | Advance only | May transition (e.g. Hide -> Relax) | One state-change motion tied to the explanation | Keep explanation short enough to avoid scroll within a slide |
| TEACH | Explain one concrete concept | Moderate | Concept text + one supporting diagram/image | Advance only | Supporting role, often static | Minimal; a single highlight/attention motion at most | Diagram must remain legible at narrow widths — simplify or stack labels |
| IMAGE + TEXT | Use a visual example with short explanatory copy | Low-moderate | Image with adjacent/below short text | Advance only | Illustrative | None required | Image and text stack vertically on narrow viewports |
| DIAGRAM / ANNOTATED SCENE | Teach spatial, behavioural or procedural information | Low text, diagram-led | Annotated scene/diagram with labelled zones or objects | Inspect/reveal labels; optionally arrange/place objects | Positioned within the diagram | None beyond label reveal | Diagram must remain usable at 390px width — consider a simplified/stacked mobile variant rather than shrinking the same layout |
| COMPARE | Contrast two arrangements, interpretations or decisions | Low-moderate | Two-column (desktop) / stacked (mobile) comparison | Advance only, or select-a-side | Present in one or both sides if relevant | None required | Two columns must become two stacked sections, not a shrunk side-by-side |
| CHECKPOINT | Test transfer using a fresh scenario | Moderate (new scenario + options) | Same pattern as SCENARIO + QUESTION combined | Click/tap one option | Reflects outcome of choice (Relax or Stress/Withdrawal) | Feedback motion tied to correctness, not celebratory | Same option-sizing rules as QUESTION |

## Momo motion language

Momo's animation must support the teaching meaning. It must never become
random decoration. Every movement communicates one of: state, attention,
response, progression, or feedback.

| Behaviour | When used |
|---|---|
| Enter / Appear | Momo enters as a scenario begins |
| Hide | Teaching fear, uncertainty, or safe-space behaviour |
| Relax | After a safer or more appropriate choice |
| Alert | Drawing attention to important information |
| Small Positive Response | Successful reasoning — restrained, not a gamified "correct answer" celebration |
| Stress / Withdrawal | Illustrating a harmful or overwhelming choice — used carefully |
| Lifecycle Transition | Between major parts of the course, as Momo ages |

All motion must additionally respect `prefers-reduced-motion` (a working
precedent for this already exists in the vendored theme/astromotion
packages — see repo audit notes). Animations should be small, reusable
building blocks, not one-off effects per slide.

## Standard chapter rhythm

Default consultation rhythm, applied unless a chapter's approved pedagogy
genuinely requires variation:

```
MOMO'S SITUATION
  -> WHAT DO YOU NOTICE?
  -> INITIAL JUDGEMENT
  -> CONSULTATION: EVIDENCE + CORE KNOWLEDGE
  -> GUIDED PRACTICE / COMPARISON
  -> RETURN TO MOMO
  -> REVISED JUDGEMENT
  -> CARE PLAN / RECOMMENDATION
  -> CHAPTER CHECK
  -> CHAPTER CAPABILITY GAINED
```

This is a default grammar, not an absolute constraint.

## Formative Chapter Check contract

Each chapter should normally end with 7–8 questions, assembled from the
chapter's claim map, common misconceptions, transfer scenarios, and
prerequisite callbacks:

| Question group | Typical count | Design rule |
|---|---:|---|
| Core concepts | 3–4 | Test distinctions or reasoning the chapter explicitly taught, not isolated trivia |
| Realistic scenarios | 2 | Change the household or situation enough to require transfer, not recall of Momo's exact scene |
| Ambiguous synthesis | 1–2 | Include incomplete or competing evidence and ask for the safest, best-supported owner-level judgement |

Every option must carry feedback. The preferred answer explains why it is
better supported; each distractor explains both why a learner might reasonably
choose it and where its reasoning fails. Distractors should come from the
chapter's documented misconceptions. Results are formative and local by
default: no score is sent into the formal assessment system and no percentage
weight is created.

## Home-to-chapter continuity

Momo's home is a visible course memory. Reuse only lifecycle changes and
callbacks supported by `docs/CURRICULUM.md` and the chapter files: the Chapter
1 safe room and observation log, Chapter 5 scratching/feeding/enrichment,
Chapter 8 access decision, Chapter 10 senior adaptations and reconsideration
of that access decision, and the familiar home in Chapter 12 with Momo very
old. Object changes should show accumulated care and adaptation, not game
inventory or reward collection.
