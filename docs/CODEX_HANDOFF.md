# Codex Handoff — COMP4020/COMP8020 Assignment 2

**Read this document in full before touching anything.** It is written for
an agent that has never seen this project before and has no memory of the
prior work session. Everything you need to understand the project's rules,
its current state, and the boundaries you must respect is either in this
file or in the tracked documents it points to. Nothing outside this repo
(no prior chat transcript, no external memory) is authoritative.

If anything in this document appears to conflict with `CLAUDE.md` or with
a tracked planning document (`docs/CURRICULUM.md`, `docs/chapters/`,
`docs/SOURCES.md`), those files win — see §2 below. This handoff is a
summary and orientation aid, not a replacement authority.

---

## 1. Project identity

This repository is a submission for **COMP4020/COMP8020 Assignment 2**: a
fictional but rigorous university course, built as a real course website
(the "SlopU" course-site starter — an Astro build, see `README.md`). The
brief requires the final result to function as a genuine course site for a
prospective- or current-student audience, not an art concept or themed
page set.

**Course title:** *How to Keep One Cat Happy for Twenty Years*

**Working thesis:** A cat is not a pet you acquire. It is a life you agree
to understand as it changes.

**Central question:** How does an owner's relationship with one cat need
to change, again and again, over a whole life?

**Learner transformation** (the thing every chapter must visibly advance):

```
instruction-following owner -> observer -> interpreter -> adaptive lifelong caregiver
```

**Structure:** exactly twelve dated teaching weeks/chapters, grouped into
four Parts of three chapters each, following one fictional cat, **Milo**,
from kitten to end-of-life:

- **Part I — A New Life** (Chapters 1–3)
- **Part II — Learn to Read Her** (Chapters 4–6)
- **Part III — Keep Her Well** (Chapters 7–9)
- **Part IV — Change With Her** (Chapters 10–12)

Full chapter-by-chapter detail (working titles, core questions, Milo's age
at each chapter, dependencies) is in `docs/CURRICULUM.md`'s Twelve-Chapter
Curriculum Table — read that table before proposing any structural work.

The Human Design Gate and earlier curriculum documents used the working name
**Momo**. Chapter 1 production later changed only the learner-facing name to
**Milo**. Both names refer to the same continuing character; historical process
records retain the name used when each decision was made.

**Current development stage.** The presentation/form gate was approved after
this handoff was first written. The current sequence is:

```
CONTENT-FIRST        — twelve chapters drafted, reviewed, whole-course audited  [COMPLETE]
       |
VOICE DESIGN         — voice system + one representative sample + audit        [PARTIALLY COMPLETE]
       |
PRESENTATION FORM    — Interactive Home + Care Consultations approved           [APPROVED]
       |
MVP IMPLEMENTATION  — Astro/vanilla-JS implementation                           [CH1 FINAL]
```

See `docs/process/voice-design-transition.md` for the reasoning behind
this sequencing, and `docs/process/agent-handoff-claude-to-codex.md` for
why this handoff exists. See `docs/process/form-design-decision.md` for the
subsequent Human Design Gate decision.

---

## 2. Current state — complete vs. not started

Verified directly against this repository's files and git history, not
merely asserted.

### Complete

- **Evidence foundation** — `docs/SOURCES.md`'s Source Library (S1–S32,
  authoritative veterinary/behavioural sources) and Claim Register
  (`CH1-01` through `CH12-06`, plus `CH9-08`), covering all twelve
  chapters, each claim tagged DIRECT or SYNTHESIS.
- **Source Supplementation Protocol** — `CLAUDE.md` §21, used and proven
  during Chapter 9's evidence-gap resolution (`S30`, `S32` registered and
  verified 2026-09-05).
- **Twelve-chapter curriculum backbone** — `docs/CURRICULUM.md`, status
  `BACKBONE APPROVED / LOCKED` (2026-09-05). Part membership, chapter
  order, working titles, core questions, and dependencies are
  human-approved and structurally locked.
- **Chapters 1–12 full curriculum content** — `docs/chapters/chapter-01.md`
  through `chapter-12.md`, all `CONTENT DRAFTED`, each individually
  reviewed per-Part (Part I audit sign-off; Parts II/III/IV each
  reviewed+repaired+committed as their own stage).
- **Whole-course content audit** — a cross-Part progression audit was run
  after all twelve chapters existed together, checking claim IDs,
  prerequisite chains, and cross-chapter references; findings were fixed
  and committed (see git log, commit `5877824`).
- **Voice system** — `docs/VOICE.md`, the authoritative editorial voice
  guide ("a warm field notebook following one cat across a lifetime"),
  plus `CLAUDE.md` §22 defining the editorial workflow and its
  human-approval boundary.
- **Anti-slop editorial workflow** — the pipeline `LOCKED CONTENT -> VOICE
  PASS -> NARRATIVE PASS -> HUMANIZATION PASS -> EVIDENCE-PRESERVATION
  CHECK -> VOICE AUDIT -> APPROVED PROSE`, documented in both
  `docs/VOICE.md` and `CLAUDE.md` §22.
- **Chapter 5 voice sample** — `docs/process/voice-sample-chapter-05.md`,
  one representative editorial rewrite (partial — Cluster A/B of Chapter
  5, ~1,050 words) demonstrating the new voice, with its own audit
  recorded inline. This has **not yet been extended to the rest of
  Chapter 5 or to any other chapter** — see "Not yet started" below.
- **Presentation/form direction** — the Human Design Gate approved **Momo's
  Life — Interactive Home + Care Consultations**, including formative Chapter
  Checks. The binding development boundary is in `CLAUDE.md` §23, the reusable
  grammar is in `docs/LESSON_SYSTEM.md`, and the decision record is
  `docs/process/form-design-decision.md`.
- **MVP vertical slice** — the SVG-first Interactive Home, semantic
  `/chapters/` journey, and Chapter 1 Care Consultation are implemented with
  Astro and vanilla JavaScript. The formative Chapter Check is schema-validated
  and restores local progress. See `docs/MVP_IMPLEMENTATION.md` for the stable
  contracts and commits `3f6a435` and `40914bb` for implementation evidence.
- **Chapter 1 production checkpoint: audit and naming** — the production audit
  retained the consultation shell, scenario, observation note, initial/revised
  judgement, Care Plan, and seven-question formative check. It identified the
  six core-learning summaries and 90-minute activity placeholder as the main
  unfinished learner-facing areas. Current learner-facing routes now call the
  cat Milo; existing `momo-*` CSS and local-storage identifiers remain internal
  compatibility keys so the rename does not discard saved learner state.
- **Chapter 1 production checkpoint: final long-form chapter** — the former six-card
  core summary is now a 3,000-word editorial consultation covering every
  `CH1-01`–`CH1-09` claim. The guided-reading sequence and 90-minute applied
  activity are implemented rather than deferred: learners inspect a mixed
  hazard set, place five resources, and save a first observation log. A third
  transfer judgement uses its own local key and reveals option-specific
  reasoning. The narrative, storyteller, voice, humanizer,
  evidence-preservation, and final voice audits passed and are recorded in
  `docs/process/chapter-01-production.md`. Browser inspection passed at
  `1920x1080` and `390x844`, including responsive flow, visible keyboard focus,
  interaction feedback, reload/resize restoration, and console checks.
  `pnpm check` passes 18 built pages and 9 tests. The Chapter Check status is
  `final`.
- **Git/process checkpoints** — a readable commit history from the
  project's initial evidence-foundation stage through the voice-design
  stage (see `git log --oneline`), each meaningful stage committed and
  pushed per `CLAUDE.md` §20.

### Not yet started / not complete

- **Full voice pass across all chapters.** Chapter 1 has passed its learner-facing
  Voice Gate, and Chapter 5 has a partial voice sample. Chapters 2–12's actual
  chapter files (`docs/chapters/chapter-XX.md`) remain in their original
  planning-document style (Concrete Knowledge Map, claim bullets, Slide/
  Beat Plan tables) — this is deliberate; see `CLAUDE.md` §22's process
  boundary and the explicit stop point the prior session was given.
- **Chapters 2–12 presentation scale-out.** Their entrances and lifecycle
  context exist in shared data, but only Chapter 1 has an implemented Care
  Consultation. Do not scale the pattern until the human accepts Chapter 1 as
  the production reference.
- **Cat Run adaptation.** The approved boundary is now documented: borrow the
  room/object/input separation as a reference, but not runner, score, or
  decaying pet-stat mechanics. No third-party code or asset has been copied;
  licence verification is still required before any such reuse.
- **Slides.** `docs/LESSON_SYSTEM.md` reserves a slide-type vocabulary and
  a Momo motion language, but no slide has been implemented.
- **Visual assets.** `docs/ASSETS.md` is a reservation/licence-audit
  document only — every row in its asset table is `candidate` or
  `verified (licence only)`. **No image, icon, or illustration file has
  actually been downloaded or created.**
- **Animation.** Reserved conceptually (`docs/LESSON_SYSTEM.md`'s Momo
  motion language table) but not implemented.
- **Final full-site responsive implementation/testing.** The three-route MVP
  has been checked at both marker viewports (1920×1080 and 390×844), but the
  future Chapters 2–12 pages and final course-wide content still require their
  own checks.
- **Final `PROCESS.md`.** The root `PROCESS.md` is still the unfilled
  template shipped by the starter (verify with
  `grep -n TEMPLATE PROCESS.md` — it still contains the template
  instruction comment). Do not fill this in yet; it is written last, once
  the whole project's account is ready to tell.
- **Assessments.** `CLAUDE.md`'s "Current project state" footer records
  this explicitly: `ASSESSMENTS: NOT DESIGNED`.

---

## 3. Source of truth / authority order

When documents disagree, this is the order of authority (identical to
`CLAUDE.md` §16, restated here for a fresh agent):

1. **Official Assignment 2 requirements** — the actual marking brief,
   published on the course website (not stored in this repo). Nothing in
   this repo may override the real assignment requirements.
2. **`CLAUDE.md`** — this project's harness: boundaries, decision gates,
   evidence rules, editorial workflow, commit protocol. Controls *process*
   and *constraints*.
3. **`docs/CURRICULUM.md`** — the approved course architecture: chapter
   order, Part structure, working titles, core questions, dependencies.
   Controls *structure*.
4. **`docs/chapters/chapter-XX.md`** — each chapter's approved teaching
   content: Concrete Knowledge Map, claim IDs, scenarios, beat plan.
   Controls *what each chapter actually teaches*.
5. **`docs/SOURCES.md`** — the factual evidence register: Source Library,
   Claim Register, DIRECT/SYNTHESIS tags. Controls *what is true and what
   may be claimed*.
6. **`docs/VOICE.md`** — the editorial voice guide. Controls *how* a true
   thing is said. Has **no authority over what is true** — see its own
   Status line.
7. **`docs/LESSON_SYSTEM.md`** — reusable slide/presentation grammar.
   Controls *interaction and pedagogical-presentation patterns*, not
   final visual design.
8. **`docs/ASSETS.md`** — visual asset provenance and licence findings.
   Controls *what imagery/icons may legally be used*, not what imagery
   should be chosen.
9. **`docs/process/`** — process evidence: decision records, audit
   reports, editorial samples, this handoff. **Not authoritative over
   curriculum, facts, or voice** — these files explain and justify
   decisions already made elsewhere; they do not make new decisions
   themselves. Do not treat a process file as license to change something
   a higher-numbered-authority file has already locked.
10. **Implementation files** (`src/`, `astro.config.ts`, etc.) — must
    conform to everything above. If implementation ever conflicts with an
    approved planning document, flag the mismatch; do not silently edit
    the planning document to match the code.

**The one rule to internalise from this list:** process artifacts
(`docs/process/*`, including this very handoff) record and explain
decisions — they are evidence, not authority. If you find yourself
justifying a change to the curriculum, facts, or voice by citing a
process document rather than `CURRICULUM.md`/`SOURCES.md`/`VOICE.md`
themselves, stop and re-check.

---

## 4. Harness rules — operational summary

This summarises `CLAUDE.md` (read the full file — it is ~600 lines and
this is a summary, not a substitute). For each rule area: what you **may**
do, what you **must not** do, and when to **escalate** (stop and ask the
human rather than deciding).

### Content-first before form (`CLAUDE.md` §9, §10, §22 "Process boundary")
- **May:** propose or design presentation/UI/visual work once content and
  voice are approved for the relevant material.
- **Must not:** begin UI, slide, animation, or Cat Run/interface
  implementation while curriculum or voice work is still in progress or
  unapproved. Do not decide visual style before a course idea is settled
  (moot here — the course is settled, but the *derivation order* still
  applies: course idea → information architecture → interaction → visual
  language, never the reverse).
- **Escalate:** if asked to start presentation work before the voice pass
  is finished/approved — flag the ordering rather than proceeding.

### Human decision gates (`CLAUDE.md` §1)
- **May:** research, inspect sources, identify constraints, propose
  alternatives, compare options, draft structures, implement *approved*
  decisions, test/verify implementation.
- **Must not:** autonomously decide the final course topic, central
  thesis, final learning promise, final curriculum architecture, major
  assessment philosophy, or major visual direction.
- **Escalate:** whenever several plausible directions exist for one of the
  above — present trade-offs, don't silently pick one.

### Locked curriculum structure (`CLAUDE.md` §16; `docs/CURRICULUM.md`)
- **May:** enrich supporting concepts, evidence, examples, activities,
  cases, workload detail, and assessment detail for any chapter.
- **Must not:** add, remove, reorder, or move a chapter between Parts;
  redefine the final capability; replace an approved scenario; change
  assessment philosophy; change the course thesis — even if you think
  you've found a better structure.
- **Escalate:** any such idea must be written up as `PROPOSED STRUCTURAL
  CHANGE — HUMAN REVIEW`, not made directly.

### Source-first evidence rule (`CLAUDE.md` §7)
- **May:** cite and teach from sources already registered in
  `docs/SOURCES.md`; identify a source's limitation; surface uncertainty.
- **Must not:** invent psychological mechanisms, social theories,
  scientific claims, statistics, or professional practices not backed by
  a registered source.
- **Escalate:** if a teaching point has no source and can't be filled via
  the Source Supplementation Protocol (below) without inventing a claim.

### DIRECT vs. SYNTHESIS (`CLAUDE.md` §19)
- **May:** tag a claim DIRECT (substantially stated by one source) or
  SYNTHESIS (a course-assembled conclusion from multiple sources), and
  disclose SYNTHESIS reasoning in the reference/evidence note.
- **Must not:** present a synthesis as if a guideline stated it in that
  exact form; clutter learner-facing prose with inline tags (the
  disclosure belongs in the source/reference note, not the teaching copy).
- **Escalate:** n/a — this is a mechanical tagging discipline, not a
  judgement call, but get it right every time a claim is touched.

### Source Supplementation Protocol (`CLAUDE.md` §21)
- **May:** research externally to fill a *specific, identified* evidence
  gap, following the authority hierarchy (FelineVMA/AAFP, AAHA, ISFM,
  WSAVA, CAPC, veterinary schools, peer-reviewed literature — never
  blogs/forums/marketing content), and register a fully-read source with
  the complete field set already used in `docs/SOURCES.md`.
- **Must not:** search for a source to justify a claim the curriculum
  already wants to make; register a source from a title/snippet alone;
  let a new source silently overwrite an existing Claim Register entry.
- **Escalate (source conflict):** if a new source conflicts with an
  existing one and the conflict can't be responsibly resolved, mark the
  claim `SOURCE CONFLICT — HUMAN REVIEW` in `docs/SOURCES.md` — do not
  pick a winner yourself.

### Broad-public audience principle (`CLAUDE.md` §18)
- **May:** vary scenario households (age, income, mobility, experience,
  household composition) where the variation is pedagogically real.
- **Must not:** assume an idealised learner (young, tech-confident, living
  alone, financially unconstrained, cat-experienced); invent demographic
  assumptions not supported by evidence (e.g. a specific age at which
  children can read cat body language).
- **Escalate:** n/a — check every new scenario against this principle
  before finalising it.

### Owner-facing medical scope (`CLAUDE.md` §21.8)
- **May:** teach observe → recognise → record → adjust safe environmental/
  behavioural factors → escalate to a vet.
- **Must not:** teach the owner to diagnose, prescribe, or treat a medical
  condition, even from an authoritative clinician-facing source (register
  such a source for its *concepts* only, never its dosing/diagnostic
  content adapted into owner-facing material).
- **Escalate:** if a proposed teaching point would cross from
  "recognise and escalate" into "diagnose and treat."

### 4+ hour genuine learning depth (`CLAUDE.md` §21.9)
- **May:** back a minor supporting claim with a single well-verified
  source.
- **Must not:** write a major chapter (representing 4+ hours of teaching
  time, real factual weight) on a thin evidence base — it needs a primary
  guideline plus at least one corroborating/complementary source; don't
  pad with marginal sources merely to look rigorous.
- **Escalate:** n/a — this is a pre-condition to check before writing a
  chapter in full, already satisfied for all twelve existing chapters.

### Realistic, ambiguous cases / no cat-encyclopedia structure (`CLAUDE.md` §6, §18)
- **May:** use concrete household scenarios and transfer cases to teach a
  principle.
- **Must not:** build the curriculum as "one topic per week" filler
  (one behaviour, one life-stage fact, one unrelated case per chapter)
  merely because it's easy to generate — every unit must earn its place
  via the Curriculum quality rule (`docs/CURRICULUM.md`).
- **Escalate:** if a proposed new chapter/unit can't answer "what would
  the course lose if this were removed?"

### Meaningful progression/dependency (`CLAUDE.md` §5)
- **May:** design progression as recognise → name → understand → analyse
  → compare → practise → integrate → independently judge/create (not
  necessarily linear/mathematical).
- **Must not:** create interchangeable units that could be freely swapped
  without affecting the learning journey.
- **Escalate:** if two distant units seem swappable — that's a sign the
  progression is too weak, not something to quietly ignore.

### Voice / anti-slop rules; factual immutability (`CLAUDE.md` §22; `docs/VOICE.md`)
- **May:** change sentence structure, paragraph structure, rhythm,
  examples, scene framing, transitions, explanatory analogies, and
  narrative sequence — as long as factual meaning survives.
- **Must not:** silently change claim meaning, Source IDs, Claim IDs,
  DIRECT/SYNTHESIS classification, numerical thresholds, medical
  escalation guidance, risk distinctions, sex-specific nuance, source
  limitations, learning outcomes, prerequisite relationships, or the
  approved curriculum backbone, in the name of "better prose." **Voice
  never outranks evidence** — this is the single most load-bearing rule
  in the editorial stage.
- **Escalate:** only if an editorial change would materially affect
  curriculum meaning, factual interpretation, course thesis, chapter
  capability, medical advice, or source interpretation. Ordinary
  prose-level improvement (once an approach is approved) may proceed
  autonomously.

### Incremental execution & meaningful-stage commits (`CLAUDE.md` §14, §20)
- **May:** commit and push after completing one meaningful, approved
  stage — inspecting `git status --short` and the diff first, confirming
  only intended files are staged, running whatever validation fits the
  stage (`pnpm check` for implementation; careful diff review for
  docs-only stages).
- **Must not:** commit for every tiny edit (no commit-per-file-save log);
  use `git add -A`/`git add .` blindly; commit anything under
  `~/.claude/skills/` or `.claude/` (this repo's `.gitignore` deliberately
  excludes it — see §5 below); rewrite or squash existing history
  casually; commit a stage that was explicitly marked as needing human
  approval, before that approval arrives.
- **Escalate:** n/a for the mechanics, but never push to `main` for
  implementation work without being explicitly told to — see §6's branch
  strategy.

### When you may act autonomously vs. when a human decision is mandatory
Collecting the pattern that repeats across every rule above, so it's
visible in one place:

- **Autonomous is fine for:** research, drafting, enrichment, wording
  improvement, evidence registration for an identified gap, ordinary
  prose editing once an approach is approved, routine commits for
  completed/approved stages.
- **A human decision is mandatory for:** anything touching the course
  topic/thesis/final capability/curriculum architecture/assessment
  philosophy/visual direction (§1); any structural curriculum change
  (§16); any unresolvable source conflict (§21); any editorial change
  that would alter factual/medical/curriculum meaning (§22); beginning a
  new major phase (e.g. presentation design) before the current phase is
  approved.

---

## 5. Skills & methods

Six skills/methods are relevant to this project's history. **Read this
section carefully — it explains why most of them will not simply "be
there" for you, and where their substance actually lives instead.**

| Skill / method | Location | Scope | Git-tracked? | Codex can use directly? | Where its methodology is actually captured (tracked, portable) |
|---|---|---|---|---|---|
| **Backwards Design Unit Planner** | `.claude/skills/backwards-design-unit-planner/` (project-local) | Project-local | **No** — `.claude/` is gitignored (see below) | No — the skill file itself won't be on disk unless you're working from the exact same local checkout that installed it | `CLAUDE.md` §3 ("Backward design") already encodes this project's own version of the method: final capability → evidence → assessment → intermediate capabilities → progression → teaching units → readings → page content. Use §3 directly. |
| **Humanizer** | `.claude/skills/humanizer/` (project-local) | Project-local | **No** | No, same reason | `docs/VOICE.md`'s "Anti-slop rules" section and `CLAUDE.md` §22 contain the operative rules (banned-vocabulary smell test, structural tells, the factual-immutability constraint). Use those directly. |
| **Storyteller** | `.claude/skills/storyteller/` (project-local, originally authored — see its `NOTE.md`) | Project-local | **No** | No, same reason | `docs/VOICE.md`'s "Chapter voice grammar" and "Momo must create continuity" sections capture its rules (scene/notice/question/evidence/return/transfer; the specific real cross-chapter callback objects: the carrier, the observation log, the Ch8→Ch10 lifestyle decision, the Ch3→Ch11 medical-first reasoning). Use those directly. |
| **Curriculum Developer** | `~/.claude/skills/curriculum-developer/` (**user-level**, this machine/account only) | User-level | No, and never could be — it lives outside this repository entirely | No — not part of this project at all | Its general remit (course/module structuring from learning goals) overlaps with `CLAUDE.md` §2 (idea gate), §3 (backward design), §5 (curriculum coherence) — all already reflected in this project's own locked structure. |
| **Learning Path Designer** | `~/.claude/skills/learning-path-designer/` (**user-level**) | User-level | No | No | Overlaps with `CLAUDE.md` §5's progression model (recognise → name → understand → analyse → compare → practise → integrate → independently judge/create), already applied throughout `docs/CURRICULUM.md`. |
| **Educational Content Reviewer** | `~/.claude/skills/educational-content-reviewer/` (**user-level**) | User-level | No | No | Overlaps with the whole-course audit already performed (see git log, commit `5877824`) and `docs/CURRICULUM.md`'s Curriculum quality rule. |

**Why `.claude/` isn't in git.** This repo's `.gitignore` excludes
`.claude/` entirely, with an explicit comment explaining why: the repo
goes public, `.claude/` can hold machine-local settings (and potentially
an API key), and the *tracked* harness is `CLAUDE.md` — not this
directory. This was a deliberate, pre-existing repo convention (it already
governed the `backwards-design-unit-planner` skill before Humanizer or
Storyteller were added), not something invented for this handoff.

**What this means for you, concretely.**

- **Do not assume `.claude/skills/` will work natively in Codex**, whether
  because Codex's tooling doesn't read that directory the way Claude Code
  does, or because a fresh clone of this repo (from GitHub, not from this
  exact local working copy) will not contain it at all — it was never
  committed.
- If you are working from a clone that genuinely lacks `.claude/skills/`,
  do not try to reinstall or recreate the Humanizer/Storyteller skill
  files as a prerequisite to doing editorial or curriculum work. Their
  operative rules are already fully captured in tracked, portable
  documents (`docs/VOICE.md`, `CLAUDE.md` §22, `CLAUDE.md` §3/§5) —
  **use those documents directly** rather than the skill wrapper.
  Anything the wrapper adds beyond that is presentational for a Claude
  Code session (frontmatter fields like `disable-model-invocation`,
  `effort`), not new methodology you need to reconstruct.
  A skill's `ATTRIBUTION.md`/`NOTE.md` (where present) records licensing
  provenance — worth knowing about, not something that changes how you
  should work.
- If a future stage of this project genuinely needs Codex-native
  equivalents of these skills (e.g. a Codex-specific instruction file
  that plays the same role as a Claude Code skill), that translation is
  new work for a human to approve and for an agent to build later — it
  is **not** part of this handoff, and should not be improvised silently.

---

## 6. Branch strategy & recovery

`main` is the stable, human-reviewed baseline containing all curriculum,
source, and voice-design work completed so far. **Codex must not develop
directly on `main`.**

A dedicated branch, **`codex-implementation`**, was created from `main`
immediately after this handoff documentation was committed and pushed —
so Codex's starting point already includes the handoff itself. See the
commit hash and branch name recorded in the process record
(`docs/process/agent-handoff-claude-to-codex.md`) and in the session
report that accompanied this handoff.

**Recovery strategy:**

- **If Codex's work on `codex-implementation` turns out poorly:** simply
  return to `main` and discard the branch. No stable work is lost, because
  no implementation work was ever made on `main` itself.
- **If Codex's work is good:** review the diff, run whatever validation
  applies (`pnpm check` for implementation work), and merge into `main`
  **only after explicit human approval.** Do not merge automatically,
  regardless of how confident the validation looks — green CI is a floor,
  not evidence the course is good (`CLAUDE.md` §15).
- **Never force-push, rewrite, or delete `main`'s history** to "clean up"
  after a rejected branch. Discarding a branch means exactly that —
  deleting the branch, not touching `main`.

---

## 7. Codex startup checklist

Run through this before making any change:

1. Confirm current branch (`git branch --show-current`).
2. Confirm you are **not** on `main` (implementation work belongs on
   `codex-implementation` or a further branch from it, unless a human has
   explicitly told you otherwise).
3. Read `AGENTS.md` (repo root) — the short entrypoint.
4. Read this file, `docs/CODEX_HANDOFF.md`, in full.
5. Read `CLAUDE.md` in full (not just this handoff's summary of it).
6. Inspect `docs/CURRICULUM.md` — the approved course architecture.
7. Inspect `docs/SOURCES.md` — the Source Library and Claim Register
   (it is large — ~140KB; read its headers/structure first, then the
   specific claims relevant to whatever you're about to touch).
8. Inspect `docs/VOICE.md` — the editorial voice guide.
9. Inspect the existing chapter files (`docs/chapters/chapter-01.md`
   through `chapter-12.md`) relevant to your task, plus the Chapter 5
   voice sample (`docs/process/voice-sample-chapter-05.md`) as a worked
   example of what a "good" voice pass looks like.
10. Inspect git history (`git log --oneline`) to understand how the
    project actually got here — the commit messages tell the real story
    of what was decided and when.
11. Summarise your understanding of the current project state **before**
    changing anything, and check it against §2 of this document.
12. Propose your next implementation plan (what you'd do, in what order,
    and why) rather than starting to write code or prose immediately.
13. **Wait for explicit human approval before any structural change** —
    to the curriculum, to chapter capabilities, to the course thesis, to
    assessment philosophy, or to visual direction. Ordinary, clearly
    in-scope enrichment (more evidence, better wording, a voice pass
    following the already-approved `docs/VOICE.md`) may proceed once its
    approach is approved for that piece of work, per §4 above.

---

## 8. Do not break

The following are stable and must not be silently altered. You may
improve *how* they are implemented later, but not *what they say* without
going through the escalation path in §4:

- The twelve-chapter order and the four-Part structure.
- The course thesis and the learner transformation
  (instruction-following owner → observer → interpreter → adaptive
  lifelong caregiver).
- Every Source ID (`S1`–`S32`) and Claim ID (`CH1-01` … `CH12-06`,
  `CH9-08`) in `docs/SOURCES.md`.
- DIRECT/SYNTHESIS classification on every claim.
- The approved owner-facing medical scope (observe → recognise → record
  → adjust → escalate; never diagnose/prescribe/treat).
- Each chapter's stated learning outcome / new student capability.
- The dependency chain between chapters (e.g. Chapter 5 depends on
  Chapters 1–4; Chapter 10 reopens Chapter 8's lifestyle decision;
  Chapter 11 reapplies Chapter 3's medical-first reasoning).
- The process/history files in `docs/process/` and the existing git
  history — these are the project's process evidence for the assignment
  and must not be rewritten, squashed, or deleted to "tidy up."
- `docs/VOICE.md` — the approved editorial voice guide.

---

## 9. Next-step recommendation (after Chapter 1 production)

The Human Design Gate has approved the form, and Chapter 1 is now the final
learner-facing implementation. The next action is:

1. Wait for the human to inspect and accept Chapter 1 as the production
   reference.
2. Do not implement Chapters 2-12 before that acceptance.
3. After acceptance, plan the next narrow scale-out stage from Chapter 1's
   semantic consultation grammar, not by cloning its exact section count or
   prose rhythm.
