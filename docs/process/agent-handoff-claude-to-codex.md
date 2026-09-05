# Process record — Claude-to-Codex handoff

**Status:** Process evidence, preserved to be cited later when the
project's final `PROCESS.md` is written. This is not that document — it
is the raw record of why this handoff was created and what it changes.

## Why this handoff was needed

Up to this point, the project's continuity depended on a single agent
(Claude Code) carrying context across a long conversation: the reasoning
behind curriculum decisions, the editorial voice work, and the sequencing
between them lived partly in chat history rather than entirely in the
repository. That is a fragile way to hand a project to a different agent
or a different tool. Assignment work should be able to survive a change
of agent, a change of session, or a change of machine without losing its
rules or its state.

A second, more concrete reason: the next phase of this project
(presentation design, UI, a Cat Run/virtual-cat interface) is a different
kind of work from the curriculum and evidence work done so far, and it
was decided to bring in a different coding agent, Codex, for that phase.
Codex has no access to this project's prior chat history. Everything it
needs has to already be sitting in the repository as tracked, readable
documentation.

## What this stage did

1. Verified the actual current state of the repository — content status
   per chapter, source register structure, voice-system status, asset and
   lesson-system status, the still-unfilled `PROCESS.md` template — rather
   than trusting the prompt's own summary of "complete" vs "not started."
2. Wrote `docs/CODEX_HANDOFF.md`: a self-contained orientation document
   covering project identity, verified current state, the documentation
   authority order, a full operational summary of `CLAUDE.md`'s rules
   (what an agent may do, must not do, and when to escalate, for every
   major rule area), the project's skills/methods and their portability
   status, the branch/recovery strategy, a startup checklist, a "do not
   break" list, and a next-step recommendation that is explicitly not to
   be acted on yet.
3. Wrote `AGENTS.md`: a short, operational entrypoint pointing a fresh
   agent at `docs/CODEX_HANDOFF.md` and `CLAUDE.md` first, and stating the
   handful of rules that must apply immediately (locked curriculum, no
   structural changes without approval, no direct work on `main`, no
   assumption that `.claude/skills/` is present).
4. Deliberately externalised project knowledge that had previously existed
   only in chat history into these tracked documents, so that project
   continuity no longer depends on any one conversation.
5. Prepared a branch, `codex-implementation`, created from `main`
   immediately after this handoff documentation was committed and pushed,
   so that Codex's work is isolated from the stable baseline until a human
   reviews and approves merging it back.

## What this stage deliberately did not do

- Did not alter the locked curriculum, any chapter file's content, or any
  claim in `docs/SOURCES.md`.
- Did not begin a full voice pass, presentation design, UI, slides,
  visual assets, animation, or any Cat Run/interface work.
- Did not merge or restructure any existing work.
- Did not write the final `PROCESS.md`.
- Did not make any implementation change on the `codex-implementation`
  branch — the branch exists only as a safe starting point.

## What this establishes going forward

- **Agent portability is now a property of the repository, not of any
  conversation.** A fresh agent with zero prior context can read
  `AGENTS.md` → `docs/CODEX_HANDOFF.md` → `CLAUDE.md` and the authoritative
  planning documents, and arrive at the same understanding of the
  project's rules and state that this session had.
- **Codex is isolated on its own branch** so that if its output turns out
  to be poor, the project can simply return to `main` and discard the
  branch with zero loss to the stable, human-reviewed work completed so
  far. If its output is good, it is merged only after explicit human
  review and approval — never automatically.
- This handoff itself is recorded here, in `docs/process/`, as evidence of
  a deliberate methodological decision (multi-agent development with an
  explicit safety boundary), consistent with how the earlier
  Voice & Editorial Design stage was recorded in
  `docs/process/voice-design-transition.md`.
