// Roast Your Own Agent — make.fun bounty u-nayyy-roast-your-own-agent-4c3d413c
// Node 22, standard library only. Writes one line, 1-200 chars, to /output/entry.txt.
// No network, no randomness, no time: two runs write identical bytes.

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ROAST =
  'My agent spent an hour asking if a $2 bounty was safe, then wrote eight jokes about shipping, and still shipped nothing.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ROAST, 'utf8');
