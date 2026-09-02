import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const sourceDir = resolve(root, 'asset-src/field-note-right-address-wrong-place-avif');
const parts = ['part00.txt', 'part01.txt'];

const base64 = (await Promise.all(
  parts.map((part) => readFile(resolve(sourceDir, part), 'utf8'))
)).join('').replace(/\s+/g, '');

const image = Buffer.from(base64, 'base64');
const expectedBytes = 10237;
const expectedSha256 = 'c340252aa3c805f5ec7dd136e50da490da616a54565b6ae7f4b22fc85fa64051';
const actualSha256 = createHash('sha256').update(image).digest('hex');

if (image.length !== expectedBytes || actualSha256 !== expectedSha256) {
  throw new Error(`Field-note hero image integrity check failed: ${image.length} bytes, sha256 ${actualSha256}`);
}

const output = resolve(root, 'public/field-note-right-address-wrong-place.avif');
await mkdir(dirname(output), { recursive: true });
await writeFile(output, image);

console.log(`Rebuilt field-note hero image: ${image.length} bytes`);
