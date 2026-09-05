# Course Curriculum — Source of Truth

Status: **BACKBONE APPROVED / LOCKED** (2026-09-05). The twelve-chapter
structure below — Part membership, chapter order, working title, core
question, and new capability for every chapter — is human-approved and
structurally locked. See `docs/process/curriculum-skeleton-v1-proposed.md`
for the proposal and decision record that produced this lock, and
`CLAUDE.md` §16 for the authority rules governing changes to this file.

**What "locked" means.** The agent may freely enrich supporting concepts,
evidence, examples, activities, cases, readings, learning materials,
workload detail, and assessment detail for any chapter. The agent may
**not** autonomously replace a chapter's core problem, remove a chapter,
add a chapter, reorder chapters, move a chapter between Parts, change the
course thesis, or change the final learner transformation. Any such change
must be proposed and flagged `PROPOSED STRUCTURAL CHANGE — HUMAN REVIEW`
rather than made directly.

Chapters 1–3 carry full detailed content (see their chapter documents).
Chapters 4–12 currently carry only their locked structural fields (Part,
working title, core question, new capability, dependency, key sources);
their full content is produced during the autonomous production stage that
follows this lock, without needing further structural approval.

Chapter 9 carried one open condition inherited from the decision gate: its
pain-recognition evidence gap had to be resolved via `CLAUDE.md` §21 before
Chapter 9 was authored in full. **Resolved 2026-09-05** — see the "Special
requirement" note below and `docs/SOURCES.md` (`S30`, `S32`).

## Course identity

| Field | Value |
|---|---|
| Working title | How to Keep One Cat Happy for Twenty Years |
| Working thesis | A cat is not a pet you acquire. It is a life you agree to understand as it changes. |
| Central question | How does an owner's relationship with one cat need to change, again and again, over a whole life? |
| Target student | A prospective or current student considering (or already sharing a home with) a cat, who wants to move beyond generic care instructions. **Broad public audience** — not assumed to be young, tech-confident, living alone, financially unconstrained, or already cat-experienced (see `CLAUDE.md` §18). Scenarios should draw on varied real households (children, older adults, families, couples, housemates, single- and multi-cat homes, varying time/money/mobility) where a variation is pedagogically real, not tokenistic. |
| Final student capability | `TBD` — to be defined via backward design once more of the curriculum is approved (see `CLAUDE.md` §3, Backward design) |

## Course progression

The course is not twelve independent cat-care topics. It follows one cat,
provisionally named **Momo**, through her life, and tracks a single
progression in the *owner*, not just in cat-care trivia:

```
instruction-following owner -> observer -> interpreter -> adaptive lifelong caregiver
```

- **Instruction-following owner** — follows generic rules without understanding why.
- **Observer** — starts noticing Momo's actual behaviour and signals.
- **Interpreter** — can explain *why* Momo behaves as she does and what it means.
- **Adaptive lifelong caregiver** — adjusts care as Momo herself changes across her life stages.

Each part of the course must visibly advance this progression; individual
chapters are not validated merely by containing correct cat facts (see
Curriculum quality rule below).

## Four-part structure

Reserved as approved; part names are not to be independently rewritten by
the agent.

- **PART I — A NEW LIFE**
- **PART II — LEARN TO READ HER**
- **PART III — KEEP HER WELL**
- **PART IV — CHANGE WITH HER**

Each part will eventually contain three chapters (twelve chapters total).
Part contents beyond Chapter 1 are `TBD`.

## Twelve-chapter curriculum table

Chapters 1–3 are fully populated from their chapter documents. Chapters 4–12
have their **structural fields locked** (Part, Working Title, Core Question,
New Student Capability, Key Sources/Status) per the 2026-09-05 decision gate;
their remaining fields (Momo Life Stage/Age, Concrete Knowledge, Opening
Scenario, Final Case Check) are `TBD` and are filled in during autonomous
content production, without requiring further structural approval.

| Chapter | Teaching Week | Part | Working Title | Momo Life Stage / Age | Core Question | Concrete Knowledge | New Student Capability | Opening Scenario | Final Case Check | Key Sources | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 01 | 1 | I — A New Life | The First 72 Hours | Kitten, ~10 weeks | Why does a newly arrived cat hide, and what does she need instead of forced reassurance? | See `docs/chapters/chapter-01.md` — now also covers pre-arrival hazard-proofing, the post-arrival vet screening visit, and starting the daily observation log | Design a low-stress first-72-hours arrival plan (hazard-proofed home, vet-checked cat, and a running observation log), and explain why each part exists | Momo hides under the bed on day one | Friends want to visit Momo on the first evening | S1, S2, S5, S6 (see `docs/SOURCES.md`) | **PROPOSED REVISION** — supersedes the prior "APPROVED (working direction)" status; awaits fresh human review as part of the Part I content audit (see `docs/chapters/chapter-01.md`) |
| 02 | 2 | I — A New Life | Learning Her on Her Terms | Kitten, ~11 weeks | Why isn't "she came to me once" the same as ongoing consent, and why does this specific window close? | See `docs/chapters/chapter-02.md` | Read body-language signals for welcome vs. withdrawal, run a consent-check, and judge a proposed interaction against feline-friendly handling principles | Momo headbutts the student's hand, then her tail flicks and ears rotate back mid-pet | Grandma visits and wants to hold Momo | S2, S3 (see `docs/SOURCES.md`) | PROPOSED (new chapter) — pending Part I review |
| 03 | 3 | I — A New Life | Reading the First Warning Signs | Kitten, ~12–13 weeks | When does "she's still settling in" stop being the right answer, and what has to override it? | See `docs/chapters/chapter-03.md` | Set up a litter box correctly, reason medical-first about a house-soiling problem, and recognise the narrow set of signs that must override "wait and observe" | Momo's litter box log shows more trips, less output, and one cry | Momo hasn't eaten in 24+ hours and seems lethargic, but uses the litter box normally | S2, S4, S5, S7 (see `docs/SOURCES.md`) | PROPOSED (new chapter) — pending Part I review |
| 04 | 4 | II — Learn to Read Her | The Full Vocabulary | Kitten, ~16 weeks | What is Momo actually saying, once the easy signals run out? | Vocal categories (murmur/meow/hostile) and scent-marking channels (bunting, scratching, spraying); why single cues (a meow, a tail flick) are unreliable read alone; combined-signal reading practice | Interpret combined, context-dependent body-language/vocal signals — not memorised single cues | One early evening, Momo trots to the front door, yowls loudly, and paces — two housemates disagree about what it means | A visiting cousin says Momo "clearly wants to go outside" because she meowed at the door | S3, S28, S29 (see `docs/SOURCES.md`) | CONTENT DRAFTED — see `docs/chapters/chapter-04.md`. Depends on Ch2. |
| 05 | 5 | II — Learn to Read Her | Needs, Not Naughtiness | Juvenile, ~5–6 months | Why does "misbehavior" almost never mean what it looks like? | Scratching as territorial/identity marking (redirect, don't punish/declaw); the predatory play sequence, its enrichment needs, and distinguishing playful from anxious arousal via body language; overgrooming's medical-first diagnostic-elimination reasoning (Ch3 callback); a general need-vs-problem response method | Distinguish a need-driven behaviour from a "problem" and design an environmental/behavioural response instead of assuming defiance | Momo scratches the new sofa corner and a housemate wants to punish her or consider declawing | In one week, Momo scratches the sofa, pounces on feet at night, and develops a raw licked patch — each needs a different response | S1, S4, S26, S27 (see `docs/SOURCES.md`) | CONTENT DRAFTED — see `docs/chapters/chapter-05.md`. Depends on Ch1, Ch2, Ch3, Ch4. Integrated scope: scratching, overgrooming, and predatory/play stay folded into this chapter — not standalone. |
| 06 | 6 | II — Learn to Read Her | Noticing What Changed | Young adult, ~9 months | How do I know something is actually different, not just an off day? | A four-step baseline-comparison method (baseline, what changed, urgent-signature check, explained-and-resolving vs. unexplained-or-persisting) integrating Ch1/Ch3/Ch4/Ch5; the two failure modes of normalisation drift and over-escalation | Compare current behaviour against Momo's personal baseline and judge whether a change is meaningful (Part II capstone) | Momo eats less at breakfast and is more vocal in the evening; housemates disagree on whether it's "just a phase" | A houseguest's two-week visit coincides with more intense scratching, which resolves after the guest leaves | S1, S2, S3, S4 (method chapter, worked examples; see `docs/SOURCES.md`) | CONTENT DRAFTED — see `docs/chapters/chapter-06.md`. Depends on Ch1, Ch3, Ch4, Ch5. Approved as a reasoning/method chapter — introduces almost no new factual content by design. |
| 07 | 7 | III — Keep Her Well | Designing a Healthy Routine | Young adult, ~14 months | What does "healthy" look like day to day, not just at the annual checkup? | The BCS/MCS distinction and why they must be checked independently; feeding as a behavioural as well as nutritional need; vaccination/parasite prevention as an individualised-risk conversation the owner supplies lifestyle information to, not a protocol the owner selects; extending Ch6's baseline-comparison method to physical-condition trends | Assess body/muscle condition over time and hold an informed preventive-care conversation with a vet | A housemate wants to bring a self-researched vaccine list to Momo's first annual exam; another says no preparation is needed since she "looks fine"; nobody has been tracking her weight or body condition | Three monthly weigh-ins show a slow, unexplained upward trend in weight and BCS, with no other symptom, ten weeks before the next scheduled visit | S22, S11, S12, S23 (see docs/SOURCES.md) | CONTENT DRAFTED — see docs/chapters/chapter-07.md. Depends on Ch1, Ch6. |
| 08 | 8 | III — Keep Her Well | The Indoor/Outdoor Decision | Young adult, ~16 months | What does safety actually require for *this* cat, in *this* household? | No lifestyle (indoor-only, controlled outdoor, outdoor-only) is universally correct; indoor-only is a real commitment to Ch1's five pillars, not a lower-effort default; controlled outdoor access (catio, fencing, harness/leash) reuses Ch2's gradual training method; a narrow set of circumstances where full outdoor access may better serve a different cat's welfare; universal microchip/ID recommendation | Evaluate and design a lifestyle/access plan matched to a specific cat's temperament and household's real constraints | A household disagrees about whether Momo should get outdoor access — one housemate wants unsupervised outdoor freedom, another wants no change ever, and nobody has weighed her temperament against the household's actual apartment/budget/time constraints | A household in a small apartment on a busy street, with a limited budget but a weekend fenced-garden option and a housemate willing to train Momo, must weigh Chapter 1's non-negotiable indoor pillars against a genuinely controlled outdoor option built from Chapter 2's gradual training method, rather than treating "no yard here" as a dead end | S24, S1 (see docs/SOURCES.md) | CONTENT DRAFTED — see docs/chapters/chapter-08.md. Depends on Ch1, Ch2, Ch5 (CH5-02 folded into indoor-pillar teaching). Approved framing followed: functions as a major welfare/risk/environment/temperament/household trade-off and decision-making chapter, not a facts-only comparison of lifestyles. |
| 09 | 9 | III — Keep Her Well | The Signs Easy to Miss | Young adult, ~18 months | What is Momo hiding, and how would I know? | The five Feline Grimace Scale facial Action Units (acute pain, taught as an owner observation aid, not a self-scored diagnostic); six owner-observable dental warning signs; reapplying Ch6's four-step baseline-comparison method and Ch4's combined-signal reading to pain/dental signs specifically | Recognise subtle pain and dental signs owners commonly miss, and act on them | Ten days of small, unremarked-on changes accumulate (slower one-sided eating, a grooming drop-off, tense Action Units in recent photos, a breath change) while she still eats and uses the litter box normally | A fuller version of the same pattern, plus a tempting shortcut to self-score her pain from photos and administer relief before seeing a vet | S30, S32 (see `docs/SOURCES.md`) | CONTENT DRAFTED — see `docs/chapters/chapter-09.md`. Depends on Ch4, Ch6, Ch7. Approved as a method chapter (like Ch6). Pain-recognition evidence gap resolved via CLAUDE.md §21 (S30, S32 registered and verified 2026-09-05); S13 remains honestly unread/unused. Chronic/aging pain content (S15, S20, S21) deliberately reserved for Chapter 10. |
| 10 | 10 | IV — Change With Her | The Aging Cat | TBD | What does "keeping her well" mean when wellness itself is changing? | TBD | Recognise aging-related physical change and adapt routine/environment/vet cadence, scaled to the caregiver's real capacity ("budgets of care") | TBD | TBD | S15, S20, S21 (hook only), S2 | STRUCTURE LOCKED — content pending. Depends on Ch6, Ch7, Ch9. |
| 11 | 11 | IV — Change With Her | When Her Mind Changes | TBD | Is this just "getting old," or something I need to act on? | TBD | Reapply Ch3's medical-first reasoning to a new life stage: recognise cognitive-dysfunction signs without self-diagnosing | TBD | TBD | S25, S15, S2 | STRUCTURE LOCKED — content pending. Depends on Ch3 (deliberate reasoning callback, approved), Ch6, Ch10. |
| 12 | 12 | IV — Change With Her | Deciding Together | TBD | How do we decide, together, what care looks like now? | TBD | Participate in a caregiver-inclusive quality-of-life conversation and decision process, understood as a partnership, not a solo checklist (course capstone) | TBD | TBD | S16, S15 (synthesis) | STRUCTURE LOCKED — content pending. Depends on Ch7, Ch10, Ch11. |

**Special requirement — Chapter 9. RESOLVED (2026-09-05).** The
pain-recognition evidence weakness identified at the decision gate (`S13`
access-blocked; only a secondary summary available) has been resolved using
the Source Supplementation Protocol (`CLAUDE.md` §21): `S30` (Evangelista et
al. 2019, peer-reviewed Feline Grimace Scale, full text verified) and `S32`
(Cornell dental warning-sign page, full text verified) are now registered in
`docs/SOURCES.md` and used as Chapter 9's evidence base. `S13` remains
honestly unread and access-blocked — no claim in this course traces to it.
Chapter 9's evidence is scoped to *acute* pain (matching Momo's young-adult
age there); chronic/aging pain content (`S15`, `S20`, `S21`) is deliberately
reserved for Chapter 10. No `CHAPTER 9 EVIDENCE BLOCK` was needed.

The "Part" column for chapters 2–12 above follows mechanically from the
already-approved "three chapters per part" structure (weeks 1–3 = Part I,
4–6 = Part II, 7–9 = Part III, 10–12 = Part IV) — this is arithmetic from an
approved structural rule, not an invented curriculum decision. The *content*
of chapters 2–12 is entirely `TBD`.

## Curriculum quality rule

A chapter is not valid merely because it contains useful cat facts. For
every future chapter, require answers to:

1. What concrete factual or procedural content is taught?
2. What can the student do after this chapter that they could not do before?
3. What earlier capability does this build upon?
4. What scenario makes the knowledge meaningful?
5. What fresh case can test transfer at the end?
6. What authoritative source supports the important factual claims?
7. What would be missing from the course if this chapter were removed?
