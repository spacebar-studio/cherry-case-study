import sharp from 'sharp';

const INPUT = './public/fonts/wireframes.png';
const OUTPUT = './public/fonts/wireframes.png';
const THRESHOLD = 240; // pixels with R,G,B all above this become transparent

const img = sharp(INPUT);
const { width, height, channels } = await img.metadata();
const { data } = await img.raw().toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += channels) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  if (r >= THRESHOLD && g >= THRESHOLD && b >= THRESHOLD) {
    data[i + 3] = 0; // set alpha to 0
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(OUTPUT + '.tmp');

// Replace original
import { renameSync } from 'fs';
renameSync(OUTPUT + '.tmp', OUTPUT);
console.log(`Done — removed white background (threshold ${THRESHOLD}) from ${OUTPUT}`);
