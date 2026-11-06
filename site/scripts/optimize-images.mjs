// One-off: converts client article covers (downloaded from the blog) into WebP sizes in public/img.
// Usage: node scripts/optimize-images.mjs <source-dir>
import sharp from "sharp";
import { readdirSync, mkdirSync } from "node:fs";
import { join, parse } from "node:path";
const src = process.argv[2];
const out = "public/img";
mkdirSync(out, { recursive: true });
for (const f of readdirSync(src)) {
  const { name } = parse(f);
  const meta = await sharp(join(src, f)).metadata();
  for (const w of [480, 800, 1200]) {
    if (w > meta.width) continue;
    await sharp(join(src, f)).resize({ width: w }).webp({ quality: 72 }).toFile(join(out, `${name}-${w}.webp`));
  }
  console.log(name, meta.width, meta.height);
}
const logo = await sharp(join(src, "..", "dl", "logo.png")).metadata();
console.log("logo", logo.width, logo.height);

