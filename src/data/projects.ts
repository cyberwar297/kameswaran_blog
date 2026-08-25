export type RepoProject = {
  owner: string
  name: string
  category: string
  description: string
  url: string
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

const rawProjectModules = import.meta.glob('../content/projects/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as unknown as Record<string, string>

export const projects: RepoProject[] = Object.values(rawProjectModules)
  .map((raw) => {
    const fields = parseFrontmatter(raw)
    return {
      order: Number(fields.order ?? '0'),
      owner: fields.owner ?? '',
      name: fields.name ?? '',
      category: fields.category ?? 'Open Source',
      description: fields.description ?? '',
      url: fields.url ?? '',
    }
  })
  .sort((a, b) => a.order - b.order)
  .map(({ owner, name, category, description, url }) => ({ owner, name, category, description, url }))
