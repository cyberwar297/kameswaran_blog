// Generates public/sitemap.xml from the markdown content directories.
// Runs before the Vite build so the file is picked up as a static asset.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')

const SITE_URL = 'https://www.kameswaranjayagopal.com'

function parseFrontmatterDate(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!match) return undefined
  const dateLine = match[1].split(/\r?\n/).find((line) => line.startsWith('date:'))
  if (!dateLine) return undefined
  const value = dateLine.slice(dateLine.indexOf(':') + 1).trim()
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString().slice(0, 10)
}

function collectSlugs(contentDir) {
  let files
  try {
    files = readdirSync(contentDir).filter((file) => file.endsWith('.md'))
  } catch {
    return []
  }

  return files.map((file) => {
    const raw = readFileSync(join(contentDir, file), 'utf-8')
    return {
      slug: file.replace(/\.md$/, ''),
      lastmod: parseFrontmatterDate(raw),
    }
  })
}

const blogEntries = collectSlugs(join(rootDir, 'src/content/blog')).map((entry) => ({
  loc: `/blog/${entry.slug}`,
  lastmod: entry.lastmod,
}))

const researchEntries = collectSlugs(join(rootDir, 'src/content/research/projects')).map(
  (entry) => ({
    loc: `/research/projects/${entry.slug}`,
    lastmod: entry.lastmod,
  }),
)

const staticEntries = [
  { loc: '/home', priority: '1.0' },
  { loc: '/blog', priority: '0.8' },
  { loc: '/ideas', priority: '0.6' },
  { loc: '/projects', priority: '0.6' },
  { loc: '/research', priority: '0.8' },
  { loc: '/about', priority: '0.6' },
]

const urls = [
  ...staticEntries,
  ...blogEntries.map((entry) => ({ ...entry, priority: '0.7' })),
  ...researchEntries.map((entry) => ({ ...entry, priority: '0.7' })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((entry) => {
    const lastmodTag = entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''
    return `  <url>
    <loc>${SITE_URL}${entry.loc}</loc>${lastmodTag}
    <priority>${entry.priority}</priority>
  </url>`
  })
  .join('\n')}
</urlset>
`

writeFileSync(join(rootDir, 'public/sitemap.xml'), xml)
console.log(`sitemap.xml generated with ${urls.length} URLs`)
