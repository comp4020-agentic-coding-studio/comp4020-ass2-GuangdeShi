# Visual Asset Register

No assets have been downloaded or created in this step — this file only
reserves categories and registers licence findings from the initial audit.
See `CLAUDE.md` §16 for change-authority rules.

## Momo character system

**Lifecycle states** (reserved; only "kitten" is needed for the Chapter 1
prototype):

- kitten
- young adult
- mature adult
- senior

**Emotional/behavioural states** (reserved; not all required yet):

- neutral / curious
- hiding
- relaxed
- playing
- eating
- alert
- stressed / uncomfortable
- sleeping

For the Chapter 1 prototype, only **kitten × {neutral/curious, hiding,
relaxed}** are currently needed (see `docs/chapters/chapter-01.md` beat
plan). No asset has been produced for any of these yet.

## Reusable environment/object assets

Reserved categories: carrier, litter box, food bowl, water, bed, hiding
place, scratching post, toy, door, room, sofa, shelf, window.

Only carrier, litter box, food bowl, water bowl, bed, hiding place and door
are needed for Chapter 1.

## Asset register

Status key: `candidate` (identified, not yet acquired), `verified` (licence
confirmed, not yet downloaded), `downloaded`, `original` (to be hand-made),
`rejected`.

| Asset ID | Description | Type | Source / Creator | Licence | Attribution | Local File | Used In | Status |
|---|---|---|---|---|---|---|---|---|
| LIC-PEXELS | Pexels stock photography — platform licence | Policy | pexels.com/license | Pexels License — free, commercial + non-commercial use | No (manual download); yes if fetched via API | — | Candidate for kitten photography, carrier photography | verified (licence only; no image chosen yet) |
| LIC-TABLER | Tabler Icons — icon library licence | Policy | github.com/tabler/tabler-icons | MIT | No | — | Candidate for door, bed icons | verified (licence only) |
| LIC-LUCIDE | Lucide — icon library licence | Policy | github.com/lucide-icons/lucide | ISC (+ MIT subset) | No visible on-screen credit; keep LICENSE file in repo | — | Candidate for door, bed icons | verified (licence only) |
| LIC-LOTTIEFILES | LottieFiles public library — platform licence | Policy | lottiefiles.com/page/license | "Lottie Simple License" — free incl. commercial use, per platform terms | Not required per platform terms, but per-file badge (Free vs Marketplace/Premium) could not be automatically verified | — | Deferred for Chapter 1 prototype | candidate — requires manual per-file browser verification before use |
| MOMO-KITTEN-NEUTRAL | Momo, kitten, neutral/curious pose | Illustration or photo (undecided) | TBD | TBD | TBD | — | Ch.1 beats 1, 5 | candidate |
| MOMO-KITTEN-HIDING | Momo, kitten, hiding | Illustration or photo (undecided) | TBD | TBD | TBD | — | Ch.1 beats 2, 3, 4 | candidate |
| MOMO-KITTEN-RELAXED | Momo, kitten, relaxed | Illustration or photo (undecided) | TBD | TBD | TBD | — | Ch.1 beats 6, 7, 9 | candidate |
| OBJ-CARRIER | Cat carrier illustration | Original SVG (likely) | TBD | TBD | TBD | — | Ch.1 beats 1, 7 | candidate — no open-licence icon match found for a purpose-built carrier shape; original SVG likely needed |
| OBJ-LITTERBOX | Litter box illustration | Original SVG (required) | TBD | Original | N/A | — | Ch.1 beat 6 | candidate — confirmed no open-licence icon exists for this object in any library checked |
| OBJ-FOODBOWL | Food bowl icon/illustration | Icon or original SVG | game-icons.net "Dog-bowl" (Delapouite) as one option | CC BY 3.0 if game-icons.net used | Yes, if game-icons.net used | — | Ch.1 beat 6 | candidate — only confirmed matching icon requires attribution; original SVG is the no-attribution alternative |
| OBJ-WATERBOWL | Water bowl icon/illustration | Original SVG (likely) | TBD | TBD | TBD | — | Ch.1 beat 6 | candidate — no library distinguishes food vs. water bowl |
| OBJ-BED | Resting/bed icon | Icon | Lucide or Tabler "bed" icon | MIT / ISC | No | — | Ch.1 beat 6 | candidate — direct library match confirmed |
| OBJ-HIDINGBOX | Hiding box/den illustration | Original SVG (likely) | TBD | TBD | TBD | — | Ch.1 beat 6 | candidate — no purpose-built den icon found |
| OBJ-DOOR | Door icon | Icon | Tabler / Lucide / Phosphor "door" icon | MIT / ISC | No | — | Ch.1 beats 7, 8 | candidate — direct library match confirmed |

## Policy notes

- Pexels is acceptable for properly verified photography (see LIC-PEXELS).
- Open icon libraries may be used where the licence permits (Tabler, Lucide confirmed MIT/ISC, no attribution).
- Simple original SVGs are preferred for cat-specific objects with no open-licence match (litter box, carrier, hiding box, and likely one of the two bowls).
- Lottie remains optional and deferred until a specific file's licence badge has been manually verified in-browser; none is currently relied upon for the Chapter 1 plan.
- No asset in this table may be treated as production-ready until its Status is `verified`, `downloaded`, or `original` with a recorded licence/creator.
