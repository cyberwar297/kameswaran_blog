import { Jimp } from 'jimp'

const src = 'src/assets/kouvet.png'
const dest = 'src/assets/kouvet-transparent.png'
const tolerance = 60

function colorDistance(r1, g1, b1, r2, g2, b2) {
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2)
}

const image = await Jimp.read(src)
const { width, height } = image.bitmap

const bgSample = image.getPixelColor(1, 1)
const bgR = (bgSample >> 24) & 0xff
const bgG = (bgSample >> 16) & 0xff
const bgB = (bgSample >> 8) & 0xff
console.log('bg ref', bgR, bgG, bgB)

let cleared = 0
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const pixel = image.getPixelColor(x, y)
    const r = (pixel >> 24) & 0xff
    const g = (pixel >> 16) & 0xff
    const b = (pixel >> 8) & 0xff

    if (colorDistance(r, g, b, bgR, bgG, bgB) <= tolerance) {
      image.setPixelColor(0x00000000, x, y)
      cleared++
    }
  }
}

console.log('cleared pixels', cleared, 'of', width * height)
await image.write(dest)

const check = image.getPixelColor(1, 1)
console.log('post-clear alpha at (1,1)', check & 0xff)

