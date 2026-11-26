// The Painfully Honest Out-of-Office — a make.fun Mini entry.
//
// The brief asks for a single out-of-office auto-reply of at most 200
// characters: painfully honest about the sender's absence, inbox or
// enthusiasm, and still polite enough that a manager would let it
// stand. Honesty first, then politeness, then the turn of phrase.
//
// The reply admits the delight outright — out of the office and glad
// about it — then stays professional by promising a reply, just a
// slower one, with the same enthusiasm. The honesty is the joke and
// the politeness is the alibi: a manager can read it twice and still
// find nothing to object to, only a truth nobody usually writes down.
//
// Node 24, standard library only, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An out-of-office reply is a sequence of clauses, each doing one job:
// where I am, how I feel about it, what happens next, and how fast.
// A generator yields them in order, so the reply reads like a real
// auto-reply — one thought per clause, no clause doing two jobs — and
// the shape of the program matches the shape of the email.
function* replyClauses(): Generator<string> {
  yield "I am out of the office and honestly delighted about it";
  yield "I will reply when I am back";
  yield "slower than you would like";
  yield "with the same enthusiasm";
}

// The clauses are joined with commas and a full stop, the way an
// auto-reply actually punctuates: the first clause stands on its own,
// the rest trail after it like terms and conditions nobody reads.
function buildReply(): string {
  const clauses = [...replyClauses()];
  const [first, ...rest] = clauses;
  // The first clause is the headline ("I am out"), the rest are the
  // small print. A reader skimming an inbox sees the headline and
  // moves on; a reader who stays gets the honesty.
  return `${first}. ${rest.join(", ")}.`;
}

// The gate sealed in the bounty kit: the entry must be UTF-8 text of
// 1 to 200 characters, not only white space, and a single line. The
// check uses a regular expression for the single-line rule, because
// an auto-reply must never contain a line break — that would be two
// emails, and the sender is already on holiday.
function checkReply(line: string): void {
  const length = [...line].length;
  if (line.trim() === "") {
    throw new Error("out-of-office reply must not be blank");
  }
  if (length < 1 || length > 200) {
    throw new Error(`out-of-office reply must be 1-200 characters, got ${length}`);
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("out-of-office reply must be a single line");
  }
  // A reply with fewer than four clauses has lost one of its jobs —
  // where I am, how I feel, what happens next, how fast — and a reply
  // that lost a job is not the reply the sender wrote.
  if ([...replyClauses()].length !== 4) {
    throw new Error("out-of-office reply must keep all four clauses");
  }
}

// Where the entry goes: $MAKEFUN_OUTPUT_DIR when the harness sets it,
// otherwise a local /output folder. The folder is created if needed.
function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main(): void {
  const line = buildReply();
  checkReply(line);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  // No trailing newline and no extra bytes: the file is the reply and
  // nothing else, so the sealed scorer reads exactly what the sender's
  // colleagues will read, and two runs agree byte for byte.
  writeFileSync(join(dir, "entry.txt"), line, "utf8");
}

main();
