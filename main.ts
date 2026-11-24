// One Word for Your Wi-Fi — entry program.
// Writes the single winning word to /output/entry.txt.
// Entry word is exactly 11 characters, one word, no trailing newline.
// "Cliffhanger": home Wi-Fi always freezes right at the climax —
// the film, the match, the plot twist — and leaves you hanging.
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(root, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "Cliffhanger", "utf8");
