// One line, one laugh: a roast of the fridge.
// This program writes the entry's single line to entry.txt in the output
// directory (MAKEFUN_OUTPUT_DIR, or /output where the grader runs it).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your crisper drawer calls itself a freshness keeper \u2014 it's a hospice with a humidity dial.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(LINE);
