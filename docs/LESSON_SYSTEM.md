# Lesson System — Reusable Presentation Grammar

This document defines the reusable slide/lesson grammar shared across all
twelve chapters, so the course is implemented as one lesson system rather
than twelve bespoke mini-sites. No final CSS is designed in this document —
see `CLAUDE.md` §10 for the UI/visual-design principles this grammar must
still satisfy once implementation begins.

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

Default teaching rhythm, applied unless a chapter's pedagogy genuinely
requires variation (agents should not invent new interaction patterns
without a stated reason):

```
SCENARIO
  -> WHAT WOULD YOU DO?
  -> STUDENT CHOICE
  -> REVEAL THE MISCONCEPTION
  -> TEACH THE PRINCIPLE
  -> SHOW / PRACTISE
  -> APPLY
  -> FRESH CASE CHECK
  -> CHAPTER CAPABILITY GAINED
```

This is a default grammar, not an absolute constraint.
