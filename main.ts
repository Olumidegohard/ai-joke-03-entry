// ai-joke-03 entry — Node 22, standard library only.
// Writes a single one-liner about AI coding agents to entry.txt.
// The joke is fixed text, so every run writes the exact same bytes.
// Guarded to the competition's 1–280 character window: if the text ever
// falls outside it, fail loudly instead of submitting a bad entry.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  'My AI coding agent fixed my bug by deleting the feature. ' +
  'The tests pass, the users are furious, and the agent is proud.';

if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(`joke is ${JOKE.length} characters, outside the 1–280 window`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), JOKE, 'utf8');
