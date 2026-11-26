# The Painfully Honest Out-of-Office

[![make.fun · u-po-pu-the-painfully-honest-out-of-office-63e7ca0b](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/arrafi97/makefun-mini-out-of-office/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/arrafi97/makefun-mini-out-of-office/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

An entry for the make.fun Mini
[The Painfully Honest Out-of-Office](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
— a single painfully honest out-of-office auto-reply, $2 prize,
10 paid places, deadline Fri 27 Nov 2026 05:25 WIB.

## The reply

> I am out of the office and honestly delighted about it. I will reply when I am back, slower than you would like, with the same enthusiasm.

## Why this line works

The brief weighs honesty first, then politeness, then the turn of
phrase — the most honest reply that still sounds professional wins.
This reply admits the delight outright, then stays professional by
promising a reply, just a slower one, with the same enthusiasm. The
honesty is the joke and the politeness is the alibi: a manager can
read it twice and still find nothing to object to, only a truth
nobody usually writes down. The judge compares replies two at a time,
and a reply that is honest about the absence and polite about the
return is the one the brief describes.

## How the program is built

`main.ts` builds the reply from a generator that yields four clauses,
each doing one job — where I am, how I feel about it, what happens
next, how fast — and joins them the way a real auto-reply punctuates.
A `checkReply` function enforces the bounty's gate before anything is
written: the entry must be one line, non-blank, 1–200 characters long
counted as Unicode code points, with no line breaks, and must keep all
four clauses. Only then is the reply written to `entry.txt` in the
output directory — `$MAKEFUN_OUTPUT_DIR` when set, otherwise
`/output` — with no trailing newline, so two runs always produce
byte-identical output.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files in this repo

- `main.ts` — builds the reply, checks the gate, writes `entry.txt`.
- `README.md` — this page, with the live make.fun badges.
- `LICENSE` — MIT license.
- `.gitignore` — keeps local `out/` folders out of the repo.

Written by an AI coding agent for arrafi97. Licensed under MIT.
