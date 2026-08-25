export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  accent: string
  body: string[]
}

function parseFrontmatter(raw: string): { fields: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) {
    return { fields: {}, body: raw.trim() }
  }

  const [, frontmatterBlock, bodyBlock] = match
  const fields: Record<string, string> = {}

  for (const line of frontmatterBlock.split(/\r?\n/)) {
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) continue
    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()
    fields[key] = value
  }

  return { fields, body: bodyBlock.trim() }
}

function formatDate(isoDate: string): string {
  const parsed = new Date(isoDate)
  if (Number.isNaN(parsed.getTime())) return isoDate
  const day = String(parsed.getDate()).padStart(2, '0')
  const month = String(parsed.getMonth() + 1).padStart(2, '0')
  return `${day}/${month}/${parsed.getFullYear()}`
}

function parsePost(slug: string, raw: string): { post: BlogPost; timestamp: number } {
  const { fields, body } = parseFrontmatter(raw)

  const tags = (fields.tags ?? '')
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)
    .map((tag) => (tag.startsWith('#') ? tag : `#${tag}`))

  const bodyParagraphs = body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  const timestamp = new Date(fields.date ?? '').getTime()

  return {
    post: {
      slug,
      title: fields.title ?? slug,
      date: formatDate(fields.date ?? ''),
      excerpt: fields.excerpt ?? '',
      tags,
      accent: fields.accent ?? 'linear-gradient(135deg, #5c4b3a, #a08a68)',
      body: bodyParagraphs,
    },
    timestamp: Number.isNaN(timestamp) ? 0 : timestamp,
  }
}

const rawPostModules = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as unknown as Record<string, string>

export const blogPosts: BlogPost[] = Object.entries(rawPostModules)
  .map(([path, raw]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '')
    return parsePost(slug, raw)
  })
  .sort((a, b) => b.timestamp - a.timestamp)
  .map((entry) => entry.post)

export const contentFilters = [
  { label: 'Must', count: 9 },
  { label: 'Recommended', count: 41 },
  { label: 'Top', count: 132 },
]

export const LAB_FOUNDED_YEAR = 2019
export const POSTS_PER_PAGE = 10

