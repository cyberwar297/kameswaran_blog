import { blogPosts } from './blogPosts'

export type IdeaRow = {
  idea: string
  reason: string
  referenceSlug: string
  referenceTitle: string
}

function parseFrontmatter(raw: string): Record<string, string> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}

  const fields: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) continue
    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()
    fields[key] = value
  }
  return fields
}

const rawIdeaModules = import.meta.glob('../content/ideas/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as unknown as Record<string, string>

export const ideaRows: IdeaRow[] = Object.values(rawIdeaModules)
  .map((raw) => {
    const fields = parseFrontmatter(raw)
    const referenceSlug = fields.referenceSlug ?? ''
    const referencedPost = blogPosts.find((post) => post.slug === referenceSlug)

    return {
      order: Number(fields.order ?? '0'),
      idea: fields.idea ?? '',
      reason: fields.reason ?? '',
      referenceSlug,
      referenceTitle: referencedPost?.title ?? referenceSlug,
    }
  })
  .sort((a, b) => a.order - b.order)
  .map(({ idea, reason, referenceSlug, referenceTitle }) => ({
    idea,
    reason,
    referenceSlug,
    referenceTitle,
  }))
