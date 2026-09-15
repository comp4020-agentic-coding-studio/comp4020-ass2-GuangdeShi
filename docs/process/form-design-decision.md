# Process record — Human Design Gate: Momo's Life

**Status:** Human-approved form/experience decision, recorded 2026-09-15.
This is process evidence for the final `PROCESS.md`; it does not override the
curriculum, chapter plans, evidence register, or voice guide.

## Decision

The approved primary experience is:

> **Momo's Life — Interactive Home + Care Consultations**

The homepage is Momo's home. It remains recognisably the same place across all
twelve chapters while Momo moves from kitten to young/adult, mature, senior,
and very old. The home's objects, access, and adaptations reveal curriculum
progression. Chapters are entered through meaningful situations in that life,
not presented primarily as a generic list of LMS cards.

Every chapter is framed as a **Care Consultation**. An owner brings a concrete
problem involving Momo to a professional but ordinary-person-facing feline-care
consultant. The learner is asked to observe and make an initial judgement,
learns through the chapter's full evidence and practice, returns to the same
problem, revises the judgement, and leaves with a safe owner-level Care Plan.
The role is not veterinary training: it ends at recognising, recording,
adjusting safe environmental or behavioural factors, and seeking professional
help at the appropriate point.

Each chapter ends with a **formative Chapter Check** of approximately 7–8
questions. The usual balance is 3–4 core-concept questions, 2 realistic
scenario questions, and 1–2 ambiguous synthesis questions. Wrong answers are
credible misconceptions, and post-submission feedback explains the attraction
and limitation of every option. Chapter Checks do not automatically contribute
to formal assessment weight.

## Why this form fits the course

The decision makes the approved thesis visible: the course is Momo's life, and
care changes because the same cat and the same household change over time. It
also embodies the learner progression from instruction-following owner to
observer, interpreter, and adaptive lifelong caregiver. The home supplies
continuity; the consultation supplies a repeated reasoning practice; the check
supplies low-stakes transfer and misconception feedback.

The form supports existing curricular callbacks rather than inventing new
ones. In particular: Chapter 1 establishes the safe room and log; Chapter 5
reframes scratching and enrichment; Chapter 8 makes a household-specific
access decision; Chapter 10 reopens that decision as Momo ages and adapts the
home; Chapter 12 returns to the same home with Momo very old.

## Guardrails accepted with the decision

- Exactly twelve dated teaching weeks, four Parts, chapter order, capabilities,
  dependencies, source IDs, claim IDs, and DIRECT/SYNTHESIS status remain
  unchanged.
- The interface organises the existing 4+ hour depth of every chapter; it does
  not replace rich teaching with a short scenario flow or summary cards.
- Momo is a narrative anchor, not a game-stat pet. There is no hunger meter,
  score decay, punishment loop, or requirement to keep a simulation alive.
- Interaction exists to support observation, interpretation, comparison,
  environmental planning, and safe decisions. Decorative game mechanics do
  not earn implementation priority.
- Momo is observed rather than anthropomorphised. The course does not claim to
  know her private thoughts or put human dialogue in her mouth.
- Production copy remains subject to `docs/VOICE.md`, the evidence register,
  and `CLAUDE.md` §22's editorial/evidence-preservation workflow.
- The Astro/SlopU stack and required content collections remain in place.
- Desktop 1920x1080 and mobile 390x844 are first-class design targets, with
  keyboard access, visible focus, semantic fallbacks, and reduced motion.

## Technical direction approved for MVP planning

Use Astro for routes, layouts, static chapter content, and build-time content
validation. Use small vanilla-JS modules only where stateful interaction is
needed: room hotspots, consultation progress, initial/revised judgements,
practice feedback, and Chapter Check state. Prefer semantic HTML and SVG for
the inspectable room so hotspots remain accessible and responsive; reserve
Canvas for optional, isolated Momo motion only if SVG/CSS proves insufficient.

Cat Run may inform separation between room rendering, object definitions,
input handling, and responsive state. Its runner mode, decaying pet stats,
score loops, and audio/game architecture are outside this course. No Cat Run
code or assets may be copied until the repository licence file and the specific
material's provenance are verified and recorded.

## Human gate result

The major form/experience direction is approved. Future implementation should
solve details inside this system rather than reopening alternative visual
directions. Any proposal to replace the Interactive Home, remove the Care
Consultation arc, turn Chapter Checks into formal weighted assessment, or
reduce chapter depth requires a new human decision gate.

## MVP implementation evidence

The first implementation slice preserves the approved form in two independent
navigation modes. Commit
[`3f6a435`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-GuangdeShi/commit/3f6a435)
adds the SVG-first Interactive Home, five lifecycle states, twelve generated
chapter entrances, and the semantic `/chapters/` journey. The same data drives
the visual and linear routes, so changing a chapter entrance cannot silently
leave the fallback behind.

Commit
[`40914bb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-GuangdeShi/commit/40914bb)
implements the Chapter 1 vertical slice through the complete consultation arc.
It adds an Astro-validated seven-question formative check with feedback for
every option and Claim IDs for every question. Initial and revised judgements,
observations, and check completion are local interaction state only; none
changes formal assessment weight.

The implementation was checked at `1920x1080` and `390x844`. Browser inspection
confirmed no horizontal overflow, 46-pixel mobile lifecycle controls, retained
lifecycle state after resize, visible keyboard focus, and submission/restoration
of all 21 Chapter Check option explanations. `pnpm check` also verifies the
three MVP routes, twelve chapter records, lifecycle vocabulary, preserved core
collections and generated API types, Chapter Check structure, accessibility,
base-path links, and broken links.

No Cat Run material was copied. Chapter 1 remains visibly labelled as a
structural prototype because the learner-facing prose has not passed the Voice
Gate; the UI maps all `CH1-01`–`CH1-09` teaching clusters without presenting
that wording as final copy.
