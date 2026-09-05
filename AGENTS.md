# Agents entrypoint

If you are Codex (or any coding agent) starting fresh on this repository,
read files in this order before doing anything else:

1. **`docs/CODEX_HANDOFF.md`** — full orientation: project identity,
   current state, authority order, harness-rule summary, skills, branch
   strategy, "do not break" list, startup checklist.
2. **`CLAUDE.md`** — the actual project harness. `docs/CODEX_HANDOFF.md`
   summarises it; this file is the authority when the two differ.
3. **`docs/CURRICULUM.md`**, **`docs/SOURCES.md`**, **`docs/VOICE.md`** —
   the locked curriculum architecture, the evidence/claim register, and
   the editorial voice guide, in that order of authority.

## Rules that apply immediately, before you read anything else

- The curriculum (chapter order, Part structure, thesis, claims, learning
  outcomes) is **locked**. Do not restructure it without explicit human
  approval — see `docs/CODEX_HANDOFF.md` §3 and §8.
- Do not start structural changes — to curriculum, assessment philosophy,
  or visual direction — without explicit human approval.
- **Never work directly on `main`** unless a human explicitly tells you
  to. Use a separate Codex working branch (`codex-implementation` or
  wherever you were told to continue from).
- Do not assume `.claude/skills/` will be present or usable — see
  `docs/CODEX_HANDOFF.md` §5 for where each skill's actual rules live in
  tracked, portable form instead.

This file is intentionally short. Everything else is in
`docs/CODEX_HANDOFF.md` and `CLAUDE.md`.
