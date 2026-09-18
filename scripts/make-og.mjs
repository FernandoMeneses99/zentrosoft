// Genera public/img/og-cover.png (1200x630) desde og-cover.svg.
// Uso: node scripts/make-og.mjs (requiere sharp como devDependency)
import sharp from 'sharp';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
await sharp(join(root, 'public', 'img', 'og-cover.svg'))
  .png()
  .toFile(join(root, 'public', 'img', 'og-cover.png'));
console.log('og-cover.png generado OK');
