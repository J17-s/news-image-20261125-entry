// Entry for the news-image-20261125 competition.
// This small program copies the finished one-page picture
// into the output folder chosen by the runner.
// Run it with: node main.ts
// Set MAKEFUN_OUTPUT_DIR if a different destination is needed.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

const sourceSize = statSync(source).size;
const targetSize = statSync(target).size;
if (sourceSize !== targetSize) {
  throw new Error(
    `Copy verification failed: source is ${sourceSize} bytes but the copy is ${targetSize} bytes`,
  );
}
