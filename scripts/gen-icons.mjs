// Generates PWA PNG icons from public/favicon.svg using sharp.
// Run once after install (and whenever the source SVG changes): npm run gen-icons
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, '..')
const src = resolve(root, 'public/favicon.svg')
const outDir = resolve(root, 'public/icons')

await mkdir(outDir, { recursive: true })

for (const size of [192, 512]) {
  await sharp(src)
    .resize(size, size)
    .png()
    .toFile(resolve(outDir, `icon-${size}.png`))
}

// Maskable icon: shrink into the safe zone over a dark background.
const pad = 512
const inner = Math.round(pad * 0.8)
const margin = Math.round((pad - inner) / 2)
await sharp(src)
  .resize(inner, inner)
  .extend({
    top: margin,
    bottom: margin,
    left: margin,
    right: margin,
    background: '#0B0B0C',
  })
  .png()
  .toFile(resolve(outDir, 'icon-maskable-512.png'))

console.log('PWA icons generated in', outDir)
