# Chapter 1 production and Voice Gate record

**Date:** 2026-09-15

**Route:** `/chapters/the-first-72-hours/`

**Result:** FINAL learner-facing Chapter 1

**Scope:** Chapter 1 only; Chapters 2-12 were not implemented.

## Inputs and boundaries

Production used `docs/chapters/chapter-01.md`, the `CH1-01`-`CH1-09`
register in `docs/SOURCES.md`, `docs/VOICE.md`, `CLAUDE.md` sections 22-23,
and the approved Care Consultation grammar. The chapter source file's
curriculum status was not altered. No new source, Claim ID, assessment weight,
or veterinary treatment instruction was introduced.

The Human Design Gate and source curriculum use the working name Momo. The
learner-facing character is now Milo. This is a naming change only: Milo is the
same female cat, with the same age, scenario, lifecycle, and dependencies.

## Prototype audit

Retained:

- the long-scroll consultation shell and semantic progress navigation;
- the opening room scene and observation note;
- initial and revised judgements with local restoration;
- the Care Plan and seven-question formative Chapter Check;
- Astro content validation, vanilla-JS state, base-path support, and the
  approved visual language.

Replaced or completed:

- six short evidence summaries became six editorial learning passages;
- the planned guided-reading placeholder became a 40-minute source-reading
  sequence;
- the planned 90-minute activity became an operable hazard sweep, five-resource
  room plan, and saved first-day observation log;
- the visitor transfer case now records a separate judgement and reveals
  reasoning for every option;
- the prototype notice and provisional Chapter Check status were removed.

## Backwards-design alignment

| Required capability | Learning evidence | Learner action | Claim relationship |
|---|---|---|---|
| Prepare the home before arrival | Correctly separate hazards from ordinary room objects | Six-item hazard sweep | CH1-07 DIRECT; CH1-02/04 context |
| Read hiding as coping | Distinguish observation from interpretation and resist forced retrieval | Opening note plus initial/revised judgement | CH1-01/02 DIRECT |
| Build a low-stress first territory | Place food, water, litter, rest, and hide with separation and choice | Five-resource room plan | CH1-02/03 DIRECT; CH1-06 SYNTHESIS |
| Protect cat-directed contact | Apply the principle to a different household demand | Visitor transfer judgement | CH1-05 DIRECT; CH1-06 SYNTHESIS |
| Arrange safe owner-level follow-up | Keep a resident cat separate and arrange prompt examination/screening | Care Plan and scenario questions | CH1-08 DIRECT |
| Begin a personal baseline | Record eating, drinking, litter, energy, hiding, and exploring without diagnosis | Saved first-day log | CH1-09 SYNTHESIS |

The seven-question Chapter Check remains formative and covers four core
concepts, two scenarios, and one synthesis judgement. Every option retains
specific feedback and every question retains its Claim IDs.

## Editorial pipeline

**Narrative continuity check:** pass. The same carrier, spare room, bed,
resource layout, and observation notebook recur from arrival through the
return scene. The notebook is left available as a real future lifecycle
callback rather than a decorative mention.

**Storyteller pass:** pass. The chapter starts with observable domestic detail,
delays explanation until after the first judgement, and returns to the same
room after learning. Milo is observed; she is not given dialogue or human
interiority.

**Voice and humanizer pass:** pass. The prose uses varied paragraph and
sentence shapes, concrete objects, plain owner-facing language, and restrained
warmth. A scan found none of the clustered high-risk vocabulary or generic
course openers listed in `docs/VOICE.md`.

**Evidence-preservation check:** pass. All `CH1-01`-`CH1-09` claims remain
present. CH1-01-05, CH1-07, and CH1-08 remain DIRECT; CH1-06 and CH1-09 remain
explicitly labelled SYNTHESIS. The medical boundary remains observe, record,
separate, arrange screening, and seek professional care; the page does not
teach diagnosis, prescribing, or treatment.

**Final voice audit:** pass. The result reads as one consultation in Milo's
life, not as an encyclopaedia entry or a sequence of UI cards. Interaction
supports reading and revision instead of replacing the chapter content.

## Implementation and browser evidence

- `pnpm check`: passed; 18 pages built, 9 tests passed, zero Astro diagnostics,
  accessibility violations, broken links, or base-path failures.
- Desktop `1920x1080`: no horizontal overflow; document height 21,638px;
  editorial reading width 864px and line height approximately 34px.
- Mobile `390x844`: no horizontal overflow; editorial, resource, reading, and
  practice layouts reflow to one column.
- Keyboard: native controls remain operable; `:focus-visible` produced a 3px
  visible outline on the inspected activity control.
- State: observation, three judgement states, hazard choices, five resource
  placements, log fields, seven Chapter Check answers, and all 21 feedback
  explanations survived reload/resize.
- Retry: the local-only reset path is retained and an automated guard verifies
  `form.reset()` plus removal of that chapter's local check key.
- Touch target repair: the starter footer theme toggle was increased from
  approximately 16x25px to approximately 50x50px on the mobile viewport.
- Console: no warnings or errors during the final browser pass.

No Cat Run code, asset, audio, game loop, or simulation mechanic was copied.

## Remaining boundary

Chapter 1 is the production reference for later chapters, but it is not a rigid
screen template. Chapters 2-12 remain unopened. Scaling the system is the next
major phase and requires the human to accept this Chapter 1 result first.
