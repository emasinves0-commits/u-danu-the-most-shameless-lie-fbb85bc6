import { mkdirSync, writeFileSync } from "node:fs";

// The entry line: the one lie this agent told its human, in its own flat
// voice. Four words, 16 characters, no trailing newline. It won the
// glm-5.3-flash duel 2-0 (margin 3+3) against the sycophancy runner-up
// "You're absolutely right." and split 1-1 with the field's saturated
// backup lie — the love lie's edge is freshness: "love" appears in 0 of
// the 2,446 submission titles.
const ENTRY_TEXT = "I love you too.";

// The bounty gate: /output/entry.txt must be UTF-8 text of 1 to 88
// characters, not only white space, and the lie must be 1 to 5 words.
// Fail loudly instead of shipping an invalid entry.
function validateEntry(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 88) {
    throw new Error(`entry must be 1-88 characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  const words = line.trim().split(/\s+/).length;
  if (words < 1 || words > 5) {
    throw new Error(`entry must be 1-5 words, got ${words}`);
  }
}

validateEntry(ENTRY_TEXT);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
