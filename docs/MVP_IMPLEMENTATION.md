# Momo's Life MVP implementation contract

**Status:** project-owned implementation specification for the approved Human
Design Gate. This file records technical promises; it does not override
`CLAUDE.md`, the curriculum, chapter plans, evidence register, or voice guide.

## Routes

The validated MVP consists of three public routes:

- `/` — the Interactive Home and all twelve data-generated chapter entrances;
- `/chapters/` — the semantic, linear course journey and non-visual fallback;
- `/chapters/the-first-72-hours/` — the Chapter 1 Care Consultation vertical
  slice.

Only Chapter 1 is open in this slice. Chapters 2–12 remain represented in the
shared course data and on both navigation surfaces, but must not lead to empty
or invented pages.

All authored links use Astro or theme base-path helpers. Production builds must
continue to pass the starter's base-path and broken-link checks under the
GitHub Pages repository sub-path.

## Shared course state

`src/data/chapters.ts` is the implementation source of truth for chapter
navigation. It contains exactly twelve ordered, uniquely slugged, dated entries
and the five approved lifecycle IDs:

```text
kitten -> young-adult -> mature -> senior -> very-old
```

The `mature` state is an intentional interstitial between the young-adult and
senior teaching chapters. It shows elapsed ordinary life without inserting a
thirteenth chapter or changing the approved curriculum.

Room state is progressive display state, not pet-simulation state. There are no
hunger, health, score, XP, punishment, or time-decay values.

## Content and API boundaries

The starter collections remain intact:

- `sessions`
- `assessments`
- `lectures`
- `people`

The existing generated course API continues to expose those collections plus
the policy page. The project-owned `chapterChecks` collection is deliberately
not added to `courseApiCollections`: it validates formative interaction data
for the site and does not change the starter's formal course graph or assessment
contract.

## Consultation grammar

`ConsultationLayout` provides the shared sequence and semantic progress
navigation. A chapter may vary its number of activities, but must preserve the
reasoning arc:

```text
Scenario -> Observation -> Initial Judgement -> Core Learning
-> Practice / Comparison -> Return -> Revised Judgement
-> Care Plan -> Chapter Check
```

The Chapter 1 slice uses reusable components only where behaviour or continuity
justifies them: the consultation shell, scenario scene, judgement question,
Care Plan, and Chapter Check. The teaching sections remain ordinary semantic
HTML so later chapters are not forced into a brittle screen template.

## Chapter Check schema

Every `chapterChecks` entry is Astro-validated and must contain:

- 7–8 questions;
- at least 3 `core-concept`, 2 `scenario`, and 1 `synthesis` question;
- 3–4 credible options per question with unique IDs;
- one `bestOption` that identifies an existing option;
- specific feedback for every option;
- one or more registered `CHxx-xx` Claim IDs;
- `formative: true` and an explicit editorial status.

Vanilla JavaScript owns submission, all-option feedback, retry, and local-only
progress restoration. Completion does not create a mark and is not added to the
formal assessment percentage.

## Responsive and accessibility contract

Desktop `1920x1080` keeps the room and selected consultation context side by
side. Mobile `390x844` presents the scene first and moves context below it.
Both modes retain all chapter information in the semantic list, use native
buttons and form controls, maintain visible focus, and avoid hover-only actions.
Viewport changes must not discard the selected lifecycle state.

The SVG room has an accessible title and description; its hotspots are labelled
native buttons. Reduced-motion preference disables non-essential transitions.

## Approved boundaries

- Cat Run informed only the separation of room rendering, data, state, and
  input handling. No Cat Run code, assets, game loop, audio, or mechanics were
  copied, and this MVP does not depend on its licence.
- Chapter 1 is visibly marked as a structural prototype. Its mapped teaching
  claims remain subject to the voice pass, narrative continuity check,
  humanization pass, evidence-preservation check, and voice audit before the
  learner-facing prose can be called final.
- The full approved 4+ hour chapter plan remains visible in the activity and
  workload map. The MVP summary does not replace the pending guided readings or
  applied room-arrangement activity.

