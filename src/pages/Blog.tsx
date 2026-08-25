import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { LAB_FOUNDED_YEAR, POSTS_PER_PAGE, blogPosts, contentFilters } from '../data/blogPosts'

export default function Blog() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const tagCount = useMemo(() => {
    return new Set(blogPosts.flatMap((post) => post.tags)).size
  }, [])

  const filteredPosts = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return blogPosts
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some((tag) => tag.toLowerCase().includes(term)),
    )
  }, [query])

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const pagedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  )
  const yearsActive = new Date().getFullYear() - LAB_FOUNDED_YEAR

  return (
    <section className="blog-layout">
      <aside className="blog-meta">
        <h1>Blog</h1>
        <p className="blog-stat">
          {blogPosts.length} essays and write-ups spanning ongoing research
        </p>
        <p className="blog-byline">by Kameswaran Jayagopal</p>
        <p className="blog-reading-now">18 reading now</p>
      </aside>

      <div className="blog-main">
        <p>
          This is a running log of research notes, field lessons, and opinions
          from building KameshLabs. You can also browse the full archive.
        </p>

        <div className="search-box">
          <span className="search-label">Search</span>
          <FaMagnifyingGlass aria-hidden="true" className="search-icon" />
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setPage(1)
            }}
            placeholder={`Search all ${blogPosts.length} posts across ${yearsActive} years and ${tagCount} tags...`}
          />
        </div>

        <div className="content-filters-row">
          <h2>Top / Recommended Content</h2>
          <div className="content-filters">
            {contentFilters.map((filter) => (
              <button key={filter.label} type="button" className="filter-pill">
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        <h2 className="latest-heading">Latest Content</h2>
        <div className="post-list">
          {pagedPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="post-row">
              <span className="post-thumb" style={{ background: post.accent }} aria-hidden="true" />
              <div className="post-body">
                <div className="post-row-top">
                  <h3>{post.title}</h3>
                  <span className="post-date">{post.date}</span>
                </div>
                <p>{post.excerpt}</p>
                <p className="post-tags">{post.tags.join(' ')}</p>
              </div>
            </Link>
          ))}
          {pagedPosts.length === 0 && <p>No posts match your search.</p>}
        </div>

        <div className="pagination">
          <button
            type="button"
            className="pagination-btn"
            disabled={currentPage <= 1}
            onClick={() => setPage((value) => Math.max(1, value - 1))}
          >
            ← Previous
          </button>
          <span className="pagination-count">
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            className="pagination-btn"
            disabled={currentPage >= totalPages}
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  )
}
