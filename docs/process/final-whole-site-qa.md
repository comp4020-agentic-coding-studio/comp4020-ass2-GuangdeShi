# FINAL WHOLE-SITE QA

**QA date:** 18 September 2026

**Branch:** `codex-implementation`

**Audited commit:** `2521d6f51377bc141f7ea571e5da824ea08a2acf`

**Starting state:** local HEAD matched `origin/codex-implementation`; ahead/behind was `0/0`; working tree was clean.
**Verdict:** **CONDITIONALLY ACCEPTABLE — HUMAN REVIEW REQUIRED**. The core course is complete and usable, with no blocker. One student-facing prototype route remains exposed and should be resolved before final submission. Four non-blocking issues are also recorded below. No product code was changed during this pass.

**Issue count:** `0 BLOCKER` · `1 MAJOR` · `4 MINOR`

## Automated Validation

| Check | Result |
| --- | --- |
| `pnpm check` | PASS |
| Astro diagnostics | PASS — 68 files, 0 errors, 0 warnings, 0 hints |
| Production build | PASS — 28 pages generated |
| Vitest | PASS — 2 files, 22 tests |
| Accessibility build audit | PASS — 28 pages, no reported violations |
| Broken links | PASS — 28 HTML pages, none detected |
| GitHub Pages base-path audit | PASS — all internal links respect `/comp4020-ass2-GuangdeShi/` |
| Deck structural audit | PASS — 1 deck, no structural violations |
| `pnpm check:evidence` | PASS — all 6 PROCESS commit citations resolve |
| `git diff --check` | PASS |

This baseline was rerun for this QA pass rather than copied from an earlier report.

## Route Inventory

The build contains 27 student-facing routes plus the generated 404 page. Every listed route rendered; an intentionally invalid URL reached the expected 404. No dead route or broken asset URL was found.

| Area | Route | Status |
| --- | --- | --- |
| Home | `/` | PASS |
| Capture index | `/lectures/` | PASS, but links to the exposed template route below |
| Accessible course journey | `/chapters/` | PASS |
| Chapter 01 | `/chapters/the-first-72-hours/` | PASS with deck-related minor issues |
| Chapter 02 | `/chapters/learning-her-on-her-terms/` | PASS |
| Chapter 03 | `/chapters/reading-the-first-warning-signs/` | PASS |
| Chapter 04 | `/chapters/the-full-vocabulary/` | PASS |
| Chapter 05 | `/chapters/needs-not-naughtiness/` | PASS |
| Chapter 06 | `/chapters/noticing-what-changed/` | PASS |
| Chapter 07 | `/chapters/designing-a-healthy-routine/` | PASS |
| Chapter 08 | `/chapters/the-indoor-outdoor-decision/` | PASS |
| Chapter 09 | `/chapters/the-signs-easy-to-miss/` | PASS |
| Chapter 10 | `/chapters/the-aging-cat/` | PASS |
| Chapter 11 | `/chapters/when-her-mind-changes/` | PASS |
| Chapter 12 | `/chapters/deciding-together/` | PASS |
| Consultation | `/sessions/` | PASS |
| Consultation case | `/sessions/a-quiet-change-at-breakfast/` | PASS |
| Assignments | `/assessments/` | PASS |
| Assessment brief | `/assessments/field-notebook/` | PASS |
| Assessment brief | `/assessments/care-consultation/` | PASS |
| Assessment brief | `/assessments/lifelong-care-dossier/` | PASS |
| People | `/people/` | PASS |
| Convenor profile | `/people/mara-bell/` | PASS |
| Capture field guide | `/lectures/capture-field-guide/` | PASS |
| Capture template | `/lectures/capture-template/` | **MAJOR — exposed development/prototype content** |
| Policies | `/policies/` | PASS |
| Standalone deck | `/decks/capture-01-briefing/` | PASS |
| 404 | invalid course URL | PASS |

`/lectures/capture-template/` is not dead: the Capture index explicitly links to it as “Review the reusable Capture template.” It presents `Capture 00`, “structure only” copy, future-material language and a quiz placeholder. This is the only accidental development/prototype route found.

## Functional QA

**Homepage:** PASS. The MP4 loaded and played muted, looped and inline; its poster and base-prefixed source resolved. A new visit began at Kitten. Selecting Senior changed the active timeline node, room stage, visible hotspots and consultation context. Chapter 10’s hotspot selected “The Aging Cat” and produced the correct base-prefixed chapter link.

**Chapter 01:** PASS with minor deck observations. The embedded deck began at slide 1; parent Previous/Next controls moved between slides; left/right keyboard navigation inside the deck worked; the full-deck link resolved correctly; “Continue the Capture” reached `#scenario`; and the page remained scrollable. The observation note saved locally. Initial judgement feedback appeared. The Care Plan rendered six evidence-linked actions. All seven Chapter Check questions accepted responses and revealed 21 option explanations.

**Representative chapters:** Chapters 05, 08, 10 and 12 each exposed nine phase links from Scene to Chapter Check, three judgement forms, a chapter-specific Care Plan, seven Chapter Check questions and 21 option explanations. Judgement and Chapter Check feedback worked on all four. Internal course links were base-prefixed and valid.

**Consultation:** PASS. “A Quiet Change at Breakfast” rendered six learning phases. The representative judgement accepted a choice, saved it and exposed explanations for all three plausible options. The return link reached the Consultation index.

**Assignments:** PASS. Exactly three formal assessments rendered: Field Notebook `20%`, Care Consultation `30%`, and Lifelong Care Dossier `50%`, totalling `100%`. Each card linked to a complete brief with deliverable and due date.

**People:** PASS. The route contains course-specific teaching/contact information, clearly labels Mara Bell and the course world as fictional, and contains no placeholder identity.

## Responsive QA

Every route above was inspected programmatically at `1920×1080` and `390×844`. For all twelve Chapter pages, `documentElement.scrollWidth` equalled the viewport width at both markers. No page-level horizontal overflow, broken image, clipped teaching text or SVG spill was detected. Desktop screenshots of Home, Chapters 01/05/10/12, Assignments, Consultation and People showed coherent hierarchy and spacing. Mobile screenshots showed clean wrapping and stable content width.

The homepage timeline and Capture phase rails deliberately extend inside their own keyboard-focusable horizontal scroll containers; they do not enlarge the page. On mobile, the next phase is partly visible at the right edge, signalling more content. The embedded deck retained a 16:9 frame, 49.5px controls and a 390px page width. The standalone deck uses astromotion’s fixed 16:9 slide viewport and scales as a deck rather than reflowing as an article.

## Keyboard QA

**PASS WITH ONE MINOR ORDERING ISSUE.** The homepage timeline responded to ArrowRight by moving focus and state from Kitten to Young/adult, with a visible 3px outline and 4px focus ring. Embedded deck left/right navigation worked. Tab from the deck exited to “Open full deck,” so there was no forward keyboard trap. Shift+Tab also exited the iframe, but landed on the first Scenario phase link rather than the immediately preceding logical control (MINOR-03).

Navigation, judgements and Chapter Checks use native links, buttons and radio inputs; the accessibility build audit passed. The in-app browser runner did not synthesise native default Enter/Space activation reliably for ordinary controls, so those defaults were verified through semantic markup and the automated accessibility audit rather than claimed as a complete physical-key traversal. Custom keyboard handlers were exercised directly.

## Resize / State QA

PASS. Two stateful flows were tested `1920×1080 → 390×844 → 1920×1080`:

- Homepage remained on Senior with “The Aging Cat” selected through both resizes; page width tracked `1920 → 390 → 1920` without overflow.
- Chapter 05 retained the selected judgement and its saved feedback through both resizes; controls remained operable and page width remained correct.

## Reduced Motion

**PASS BY IMPLEMENTATION EVIDENCE; RUNTIME EMULATION UNAVAILABLE.** The homepage script checks `prefers-reduced-motion: reduce`, pauses the video and removes `autoplay`. The matching CSS hides the video, leaves the independently rendered poster visible and removes non-essential hotspot/timeline/action transitions. Navigation and course content do not depend on motion. The available in-app browser exposes viewport and visibility controls but no media-feature emulation, so a live toggled reduced-motion session could not be captured in this pass.

## Degraded Media

**DEGRADED BUT USABLE.** The hero has a separate 1600×899 poster image behind the video, the video also declares the same poster, and the hero has a fixed minimum height plus a solid background. Therefore delayed or failed video loading preserves the title, thesis, CTA and layout. The interactive SVG home is separate from the video; its failure would not remove chapter list access because the page also provides an accessible twelve-chapter fallback. No network-throttling/interception capability was available, so this result is based on the rendered fallback structure and verified asset paths rather than a synthetic offline trace.

## GitHub Pages Readiness

PASS. Astro derives `site` and `base` through the existing deployment helper. The production build emitted base-prefixed fonts, CSS, video, poster, chapter links, callback links, iframe source and full-deck URL. The automated base audit and broken-link checker passed all 28 pages. Direct chapter routes, the embedded deck, standalone deck and all core navigation worked locally under `/comp4020-ass2-GuangdeShi/`. This branch has not been merged to `main`; this is readiness evidence, not a claim that commit `2521d6f` is live.

## Marker Walkthrough

The ten-minute path Home → Chapter 01 → Chapter 05 → Chapter 10 → Chapter 12 → Assignments → Deck → Consultation communicates the course thesis quickly: care improves when an owner observes before explaining and revises decisions across one cat’s lifetime. Non-adjacent weeks show real progression: arrival-room observation becomes needs-based behaviour interpretation, then age-aware environmental adaptation, then a shared quality-of-life conversation. The repeated nine-phase Capture grammar is visible, but the scenario, reasoning task, evidence and Care Plan change enough that it reads as a course method rather than twelve duplicated articles.

The assessments feel native to this course because they ask for an observation record, an unfamiliar-case consultation and a longitudinal care dossier rather than generic recall. The ten-slide Chapter 01 deck is real teaching material, visually aligned with the site and secondary to the fuller Capture. People and Policies contain course-specific material rather than starter copy. The main unfinished signal is the publicly linked Capture template; a marker can reach it directly from the primary Capture index.

## Issues

### MAJOR-01 — Student-facing Capture template exposes unfinished prototype content

`/lectures/capture-template/` is linked from the primary Capture index and presents `Capture 00`, “structure only” instructions, future-chapter copy, placeholder prompts and a quiz placeholder. This conflicts with the otherwise finished twelve-week course and is likely to read as starter/development residue. Human Review should decide whether the route is removed from student navigation, hidden while preserving architecture, or converted into a legitimate student guide. No change was made in this QA pass.

### MINOR-01 — Chapter 01 logs an uncaught MutationObserver error

A fresh load of `/chapters/the-first-72-hours/` consistently logged: `Failed to execute 'observe' on 'MutationObserver': parameter 1 is not of type 'Node'`. Isolated fresh-tab checks found no equivalent error on the homepage, other representative chapters, Consultation, template, Policies or standalone deck. The embedded deck and all tested controls still worked, so this is non-blocking, but the core page is not console-clean.

### MINOR-02 — First embedded-deck visit can obscure and skip slide 1

In a fresh mobile tab, astromotion’s introductory help panel covered much of slide 1. Activating the parent Next control dismissed the help and moved directly to slide 2. A learner who treats the parent arrow as “dismiss” can therefore miss the opening slide. The panel disappears after interaction and the deck remains usable.

### MINOR-03 — Reverse iframe focus exit has an unexpected destination

Tab exits the deck forward to “Open full deck,” but Shift+Tab exits to `01 Scenario`. The implementation intends to select the last phase link, yet `.capture-progress a:last-child` matches the first anchor that is the last child of its own list item. This is not a keyboard trap, but it breaks the expected reverse order.

### MINOR-04 — Footer theme toggle is narrower than the 24px target minimum on three routes

At `390×844`, the isolated theme button measured `16×25px` on `/people/mara-bell/`, `/lectures/capture-field-guide/` and `/policies/`. Other radio controls are wrapped by larger clickable labels and inline text links qualify for spacing exceptions; this isolated icon button does not have the same protection.
