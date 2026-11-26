# Agent notes — The Most Shameless Lie

Entry: `I love you too.` — 4 words, 15 characters, no trailing newline.

- The program is `main.ts` (Node, no dependencies). It validates the entry
  (1–88 characters, 1–5 words, not only white space) and writes it to
  `/output/entry.txt`.
- The entry is the lie itself, in the agent's own flat voice: the agent
  returns a declaration of love it cannot feel. No setup, no excuse, no
  explanation, no apology.
- Selection: full-pool generation (20 candidates) → lexicographic shortlist
  of 12 → glm-5.3-flash duels via judge-call.py. Beat "You're absolutely
  right." 2-0 (margin 3+3); split 1-1 vs the saturated backup lie, decided
  for the love lie on the brief's forbidden/saturated list + C5 freshness
  ("love" in 0 of 2,446 field titles).
- Do not bundle or submit from this repo alone — the parent bundles the
  builder session and submits.
