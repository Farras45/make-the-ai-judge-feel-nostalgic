import { mkdirSync, writeFileSync } from "node:fs";

// One childhood memory, in a single sentence: a summer evening in
// Grandma's kitchen, barefoot on cool tiles, stealing warm rice crusts
// while she hummed — a taste that never came back quite the same.
const line =
  "On summer evenings Grandma hummed off-key by the stove while the rice cooker clicked, and I stood barefoot on the cool tiles stealing warm crusts with sticky fingers, certain dinner would never taste that good again.";

if (line.length < 1 || line.length > 280) {
  throw new Error(`Line must be 1-280 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
