# Your harness

This is the project harness for **COMP4020/COMP8020 Assignment 2**: design the
university course we wish we could take, and build the website that runs it.
The final result must behave as a real course website for a prospective- or
current-student audience, not merely as an art concept or a set of
themed pages.

The central curriculum requirement, always: **a course is one idea explored
throughout a semester.** Every decision in this project is answerable to two
permanent questions:

1. Does it hold together?
2. Would I want to take it?

---

## 1. Human / agent decision boundary

The agent (me) may: research, inspect sources, identify constraints, propose
alternatives, compare options, draft structures, implement approved decisions,
and test/verify implementation.

The agent must **not** autonomously decide:

- the final course topic
- the central course thesis
- the final learning promise
- the final curriculum architecture
- major assessment philosophy
- major visual direction

These are human judgement calls. When several plausible directions exist,
present the trade-offs rather than silently choosing one.

## 2. Idea gate before curriculum

Do not generate a twelve-week curriculum immediately after receiving a topic
idea. A candidate course must first establish:

- why a student would voluntarily take it
- what meaningful capability or judgement the student gains
- what changes between Week 1 and Week 12
- why the idea requires a semester
- whether one coherent idea holds it together
- whether meaningful progression exists
- whether credible evidence supports it
- whether the capability can be taught and assessed
- whether it is niche enough for SlopU
- whether it is realistically buildable as Assignment 2

Use the project's course-idea evaluation skill/process when available. A
provocative title is not enough.

## 3. Backward design

Once a topic is approved, design the course in this order:

1. Final student capability / transformation
2. Evidence that would prove the student achieved it
3. Final assessment concept
4. Required intermediate capabilities
5. Learning progression
6. Teaching units
7. Readings / examples / material
8. Page content

Do not begin from "what should Week 1 contain?"

## 4. Twelve teaching weeks vs presentation

The submitted course must run across exactly twelve dated teaching weeks. The
starter schema's `week: 1–12` and date fields must remain correct throughout —
that contract does not move.

The visual and editorial presentation, however, does not need to use
repetitive labels like "Week 1 / Week 2 / Week 3". The twelve teaching weeks
may be presented as chapters, stages, modules, movements, steps, or grouped
into larger parts, if that better serves the selected course. For example, the
student-facing title may be "Chapter 4 — …" while the metadata still
identifies it as teaching week 4 with its date.

Do not confuse editorial presentation with the fixed teaching-week contract.
The course must always remain recognisably twelve dated teaching weeks
underneath.

## 5. Curriculum coherence

Every teaching unit must earn its place. For each proposed unit, be able to
answer:

- What new capability, concept or judgement appears here?
- What earlier learning does it use?
- How does it move the student toward the final capability?
- What would the course lose if this unit were removed?

Avoid interchangeable teaching units. If two distant units can be freely
swapped without affecting the learning journey, investigate whether the
progression is too weak.

Progression does not need to resemble mathematics. Valid progression may be:
recognise → name → understand → analyse → compare → practise → integrate →
independently judge/create.

## 6. No content-shaped chunks

Do not build a semester by generating twelve examples that merely share a
topic. Examples, cities, case studies, objects, people or scenarios may
illustrate concepts — they must not automatically become the curriculum
structure.

Reject structures equivalent to: one city per week, one scam per week, one
relationship behaviour per week, one unrelated case per week — unless there is
a clear capability progression that genuinely requires that structure.

## 7. Source / evidence rule

Academic and authoritative sources constrain factual claims. Do not invent
psychological mechanisms, social theories, scientific claims, statistics,
historical claims, or professional practices.

Distinguish two kinds of authority:

- **Source authority** — determines what factual claims are defensible.
- **Creative authority** — belongs to this project, and determines the
  course's argument, voice, framing and provocation.

Do not let textbooks turn an unusual SlopU idea into a generic existing
university course. When research conflicts or is uncertain, surface that
uncertainty rather than smoothing over it.

## 8. Starter contract

Preserve the starter constraints identified during the repo audit. Do not:

- rename or remove the required core collections: `sessions`, `assessments`,
  `lectures`, `people`
- replace the SlopU brand identity
- hand-edit generated `dist/api` output
- redesign the generated course API
- casually modify the build/deployment pipeline
- use root-absolute raw Astro links (`href="/sessions/"`) — they work on
  localhost and 404 on the live GitHub Pages base path

The platform plumbing is not the assignment. The course is.

## 9. Page count

There is no fixed "20-page minimum" rule. The brief describes Assignment 2 as
approximately "twenty-odd pages that have to agree with each other" to
communicate scale, not as a quota. Do not create filler pages merely to reach
a number. The hard structural requirement is twelve dated teaching weeks plus
the other required course/site material. Add pages only when they serve the
course.

## 10. UI / visual design principles

Do not decide the visual style before the course idea is selected. Once
selected, derive the visual system from the course thesis and the student
experience:

```
course idea → information architecture → interaction → visual language
```

not:

```
topic → arbitrary colours and images
```

The UI must not read as a generic LMS reskin with topic-themed decoration.
Every major interaction should have a reason to exist: support learning,
expose a concept, let the student practise a judgement, represent
progression, or strengthen the course's central idea. Avoid decorative
complexity that does not help the course. Preserve the SlopU brand
requirements while making the course itself visually distinctive.

## 11. Responsive / accessible artefact

The final website must work convincingly at both marker viewports: **1920×1080
desktop** and **390×844 mobile**. Do not treat mobile as a late CSS patch —
check major UI decisions at both sizes as they're made. Preserve keyboard
accessibility, sensible focus/navigation behaviour, readable content,
responsive layout, and functional interaction after resizing.

## 12. Assessment alignment

The fictional course's assessments must demonstrate the course's promised
capabilities rather than merely test recall. Assessment weights must total
exactly 100% — the starter does **not** currently enforce this automatically
(confirmed during the audit); treat it as a likely future project-specific
spec. Do not create assessments merely because a university course is
expected to have assignments. Ask: "what evidence would convince us that a
student can now do what the course promised?"

## 13. Spec / backpressure philosophy

Use `spec/` to protect course promises that can be checked mechanically. Do
not attempt to automate inherently human judgements such as whether the
course is genuinely interesting, whether the central idea is surprising,
whether the prose has a strong voice, or whether the whole semester feels
intellectually coherent.

Good future checks may protect things such as: twelve teaching weeks exist,
required dates are valid, assessment weights total 100%, required content
fields exist, approved structural promises are present, at least one real
deck is linked, and topic-specific promises once the topic is chosen.

When a repeated agent failure reveals a missing rule, prefer **diagnose →
improve harness/spec → rerun** over repeating the same prompt with stronger
wording.

## 14. Process evidence

This assignment rewards process heavily. Preserve meaningful development
history: prefer small, consequential stages over one giant final commit. When
an important decision changes the project — record the reasoning, change the
harness when appropriate, implement it, verify it, then commit it as a
meaningful stage. Do not rewrite or squash useful history casually — `PROCESS.md`
will cite real commit hashes. `PROCESS.md` should ultimately explain
consequential decisions and harness evolution, not narrate every CSS fix.

## 15. Verification before acceptance

Never accept agent output solely because the agent says it is complete,
`pnpm check` is green, or the content looks plausible at a glance.
Verification should use the appropriate combination of: source checking,
automated specs, browser testing at both required viewports, and human
curriculum judgement. Green CI is a floor, not evidence that the course is
good.

## 16. Documentation & curriculum authority

**Documentation-authority rule.** The course must be designed from approved
planning documents (`docs/CURRICULUM.md`, `docs/chapters/chapter-XX.md`,
`docs/SOURCES.md`, `docs/ASSETS.md`, `docs/LESSON_SYSTEM.md`) before
implementation. The agent must not silently change an approved curriculum,
learning outcome, chapter purpose, assessment logic, or core narrative. If
the agent discovers a problem or has a better idea, it may propose a change,
but must mark it clearly as `PROPOSED` or `QUESTION FOR HUMAN` and wait for
approval before treating it as authoritative.

**Human authority over curriculum.** The human controls the curriculum
backbone. The agent may: research, improve wording, propose missing
concepts, identify gaps, suggest a stronger scenario, flag weak sequencing,
and identify unsupported claims. The agent may **not** silently: add a
chapter, remove a chapter, move a chapter, redefine the course's final
capability, replace an approved scenario, change assessment philosophy, or
change the course thesis. Suggested changes must be marked `PROPOSED CHANGE`
with a reason, supporting evidence, and the consequence of making it.

**Documentation authority order.** When documents disagree, this is the
order of authority for future agent sessions:

1. Official Assignment 2 requirements
2. `CLAUDE.md` — project harness and boundaries
3. `docs/CURRICULUM.md` — approved course architecture
4. `docs/chapters/chapter-XX.md` — approved chapter teaching/script plan
5. `docs/SOURCES.md` — factual evidence
6. `docs/ASSETS.md` — visual provenance
7. `docs/LESSON_SYSTEM.md` — reusable presentation/interaction grammar
8. Implementation files

If implementation ever conflicts with an approved planning document, do not
silently change the planning document to match the code. Flag the mismatch.

## 17. Third-party curriculum-design skills

Project-local Agent Skills under `.claude/skills/` (e.g. a backwards-design
unit planner) provide general-purpose curriculum-design *methods*. They do
**not** override this project's human-approved course constraints. In
particular, no third-party skill may silently change or imply a change to:

- exactly twelve dated teaching chapters/weeks;
- content-first design before UI/presentation design;
- Momo as the lifelong narrative anchor;
- human approval controlling the curriculum backbone;
- any conventional lab/hour structure, merely because a third-party skill
  assumes one — this course has no lab/hour structure requirement;
- authoritative veterinary sources (`docs/SOURCES.md`) as the determinant of
  factual content;

A skill may propose structure, wording, sequencing, or assessment ideas —
any such proposal is subject to the same `PROPOSED` / `QUESTION FOR HUMAN`
marking convention as any other agent suggestion (see §16) and does not
become authoritative merely because a skill produced it.

## 18. Audience: broad public, not an idealised owner

**Approved human decision, incorporated during the Part I review.** The
intended learner is not assumed to be a young university student,
technologically confident, living alone, financially unconstrained, or
already experienced with cats. The course must be useful to ordinary people
across society — different ages, household compositions, income levels,
mobility, prior cat experience, and available time.

Scenarios, transfer cases, and applied activities should therefore draw on
varied real households where pedagogically useful — children, older
adults/grandparents, families, couples, housemates, first-time caregivers,
experienced caregivers, single- and multi-cat households, people with
different amounts of time, money, mobility, and caregiving capacity.

This is **not** demographic tokenism: a household variation earns its place
in a scenario only when it changes something pedagogically real (movement
speed, noise, expectations, physical handling, supervision, ability to read
feline signals, predictability of interaction — not a stereotype). The
purpose is that the course teaches principles that transfer to real life,
not principles that silently assume one idealised type of owner. Do not
invent demographic or age-related behavioural assumptions that aren't
supported by evidence or plain observation (e.g. do not assert a specific
age at which children can or cannot read cat body language — describe the
concrete supervisory/behavioural difference instead).

Every future chapter should be checked against this principle before its
scenarios and transfer cases are finalised.

## 19. Evidence transparency: DIRECT vs SYNTHESIS

**Approved human decision, incorporated during the Part I review.** This
project's evidence register (`docs/SOURCES.md`) distinguishes two kinds of
support for a teaching claim:

- **DIRECT** — a claim substantially stated by the source itself.
- **SYNTHESIS** — a teaching conclusion reasonably assembled from multiple
  source claims or evidence, but not stated in exactly that form by any one
  source.

Students should be able to tell the two apart where it matters. In
practice:

- Preserve DIRECT/SYNTHESIS tracking internally in `docs/SOURCES.md` for
  every claim.
- Where a meaningful learner-facing teaching claim is a synthesis, disclose
  that transparently in the source/reference note for that material, with
  a brief explanation of what evidence was combined and why.
- Do not clutter learner-facing material with labels on every sentence —
  the disclosure belongs in the reference/evidence note, not inline in the
  teaching copy itself.
- Never present a synthesis as though a veterinary guideline explicitly
  stated it in that form.

This rule is standing for all future chapters, not just Chapters 1–3.

---

## 20. Meaningful stage commit & push protocol

**Git history is part of the process evidence for this project** (see §14).
`PROCESS.md` will eventually cite real commit hashes to show how the
workflow evolved — that only works if commits actually happen at meaningful
boundaries, not just at the very end.

**After completing a meaningful, approved workflow stage**, the agent
should:

1. Inspect `git status --short` and the relevant diff.
2. Confirm that only intended project files are included.
3. Ensure no personal/user-level skills (`.claude/`, `~/.claude/skills/`),
   secrets, credentials, temporary files, or unrelated files are staged.
4. Run whatever validation is relevant to that stage (e.g. `pnpm check` for
   implementation stages; for a docs/evidence-only stage, careful diff
   review stands in for automated validation, since there is no build to
   run).
5. Create one clear, descriptive commit representing the completed stage.
6. Push the current branch to the existing remote.
7. Report: commit message, commit hash, branch, push result, and any
   remaining working-tree changes.

**What counts as a "meaningful stage"** (examples, not an exhaustive list):
evidence/source foundation completed; a curriculum skeleton approved; one
major curriculum production phase completed; a whole-curriculum review
completed; the lesson/presentation system established; a major UI
implementation milestone; a testing/validation milestone.

Do **not** create commits for every tiny edit. The goal is a readable
development history that shows important decisions and how the harness/
workflow evolved — not a commit-per-file-save log.

**Human approval rule.** If a stage was explicitly marked as requiring
human approval (per §16's `PROPOSED` / `QUESTION FOR HUMAN` convention), do
**not** commit it before that approval. Once approved, commit and push it
before moving into the next major stage.

**Safety boundaries.** Never commit or push: `~/.claude/skills/` or other
user-level personal skill files; credentials; tokens; `.env` secrets;
private files; unrelated local files; temporary downloaded research files
unless explicitly approved for the repository. Respect `.gitignore`. Do not
use `git add .` blindly — prefer staging the specific intended project
files, or carefully verify the staged diff before committing.

**Commit quality.** Commit messages should describe the project decision
or completed capability, not generic messages like "update files",
"changes", "progress", or "work". Prefer messages such as `Establish
evidence-backed curriculum foundation for Parts I-IV` or `Lock
twelve-chapter curriculum backbone after human review` — the commit
history should tell the story of how the project and harness developed.

---

## 21. Source Supplementation Protocol

**Purpose.** This project's evidence base grows over time as new chapters
are planned. This protocol lets a future agent session perform *controlled*
supplementary research to fill a genuine, specific evidence gap without
requiring repeated human permission for each search — while keeping every
new claim as rigorously sourced as Chapters 1–3.

**1. Existing sources come first.** `docs/SOURCES.md` is always the first
evidence base consulted for a teaching claim. Do not search externally for
something the register may already support — re-read the Source Library,
Claim Register, whole-course source pack, and coverage map before deciding
a gap is real.

**2. Search by gap, not by desired answer.** External research is
permitted only to fill a genuine, specific gap identified in the coverage
map or gap analysis (e.g. "no source yet supports body-condition
scoring") — never to go looking for a source that will say what the
curriculum already wants to claim. If a chapter's argument depends on
finding a specific fact, the fact must be found and verified first; the
teaching claim follows the evidence, not the reverse.

**3. Authority hierarchy.** When filling a gap, prefer sources in this
order: FelineVMA (formerly AAFP)/AAFP, AAHA, ISFM/International Cat Care,
WSAVA, CAPC, university veterinary schools (e.g. Cornell, UC Davis,
Illinois), and peer-reviewed literature. Blogs, forums, SEO content,
pet-influencer material, and manufacturer/marketing content are never
acceptable sources for a factual teaching claim, regardless of how
well-written or how well they fit the argument.

**4. Verify before registering.** Do not register a source from a title,
a search snippet, or a secondary summary alone. Open and actually read
(directly or via WebFetch/a research agent) enough of the source to
honestly complete the full field set used elsewhere in `docs/SOURCES.md`:
full title, year, organisation/authors, type, canonical URL, access status
(what was actually read vs. only glimpsed), main content coverage,
important limitations, owner- vs. clinician-facing, potential future
Parts/chapter themes, DIRECT claims available, possible SYNTHESIS
opportunities, and notes/conflicts. If full access fails (paywall,
blocked domain, metadata-only), register that honestly as a
partial/TOC-only entry rather than pretending full verification occurred.

**5. New sources supplement — they never silently replace.** A newly
registered source may corroborate, extend, or add nuance to an existing
claim. It must never silently overwrite or contradict an existing
Claim Register entry. If a new source appears to conflict with an
existing one and the conflict cannot be responsibly resolved by this
project's own judgement, do not pick a winner — mark the claim
`SOURCE CONFLICT — HUMAN REVIEW` in `docs/SOURCES.md` and flag it in the
next report rather than quietly choosing the newer or more convenient
source.

**6. Newer is not automatically better.** A more recent guideline
supersedes an older one only when it actually addresses the same
question with equal or greater rigor (e.g. a peer-reviewed consensus
guideline update). A newer blog-tier or client-education page does not
outrank an older peer-reviewed guideline merely by publication date — see
`S9`/`S10`'s explicit "default to the more current one only where they
actually overlap" handling as the model for this judgement.

**7. DIRECT vs SYNTHESIS remains mandatory.** Every claim drawn from a
newly registered source must be tagged `DIRECT` or `SYNTHESIS` exactly as
described in §19. A synthesis assembled across multiple new or existing
sources must disclose what was combined and why, in the source/reference
note, not inline in learner-facing teaching copy.

**8. Medical scope boundary holds.** Newly sourced content must stay
within this course's established owner-facing scope: observe → recognise
→ record → adjust safe environmental/behavioural factors → escalate to a
veterinary professional. This course never teaches the owner to diagnose,
prescribe, or treat a medical condition, no matter how authoritative the
new source is. A source that is itself clinician-facing (dosing tables,
diagnostic algorithms, prescribing guidance) may still be registered for
its *concepts*, but its prescribing/diagnostic content must not be
adapted into owner-facing teaching material.

**9. Source depth matches teaching importance.** Not every teaching point
needs a cluster of sources. A single well-verified authoritative source is
sufficient to support a supporting idea or a minor supporting claim. A
major chapter representing 4+ hours of teaching time and carrying real
factual weight should be backed by a stronger cluster — a primary
guideline plus at least one corroborating or complementary source — before
that chapter is written in full. Do not manufacture a cluster by
registering marginal sources merely to pad the appearance of rigor.

This protocol applies to all future chapters (Parts II–IV and beyond), not
just the sources already registered as of this section's creation.

---

## Current project state

```
COURSE TOPIC:            How to Keep One Cat Happy for Twenty Years
                          (approved working direction — see docs/CURRICULUM.md)
WORKING THESIS:           A cat is not a pet you acquire. It is a life you
                          agree to understand as it changes.
STUDENT TRANSFORMATION:   instruction-following owner -> observer ->
                          interpreter -> adaptive lifelong caregiver
AUDIENCE:                 Broad public, not an idealised owner — see §18
EVIDENCE TRANSPARENCY:    DIRECT vs SYNTHESIS disclosure rule — see §19
CURRICULUM:               Structure in docs/CURRICULUM.md; all twelve
                          chapters CONTENT DRAFTED (Parts I-IV). Each Part
                          has been individually reviewed and repaired
                          (Part I content-audit sign-off; Parts II, III, IV
                          each reviewed+repaired+committed as their own
                          stage), and a whole-course cross-Part progression
                          audit has also been completed and repaired.
CHAPTERS 1-12:            Scripted in docs/chapters/chapter-01.md through
                          chapter-12.md. All twelve chapters drafted and
                          reviewed; no chapter remains PROPOSED/pending.
SOURCE REGISTER:          docs/SOURCES.md — full Claim Register (CH1-01
                          through CH12-06 plus CH9-08) covering all twelve
                          chapters, backed by the Part I sources (S1-S7)
                          and the whole-course source pack (S8 onward),
                          verified per `CLAUDE.md` §21
ASSESSMENTS:              NOT DESIGNED
VISUAL DIRECTION:         Slide grammar reserved in docs/LESSON_SYSTEM.md;
                          final CSS NOT designed
```

Topic, thesis and transformation are approved as a *working* direction only.
The twelve-chapter curriculum backbone has been approved by the human (see
the HUMAN DECISION record in project history) and all twelve chapters have
been drafted, reviewed, and repaired per-Part and whole-course. Visual
language and final thesis presentation remain undesigned. Do not fill in
ASSESSMENTS or VISUAL DIRECTION beyond what is reserved above without
explicit human approval — content remains first, form second.
