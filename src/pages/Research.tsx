import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { RESEARCH_POSTS_PER_PAGE, researchPosts } from '../data/researchPosts'

export default function Research() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const filteredPosts = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return researchPosts
    return researchPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some((tag) => tag.toLowerCase().includes(term)),
    )
  }, [query])

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / RESEARCH_POSTS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const pagedPosts = filteredPosts.slice(
    (currentPage - 1) * RESEARCH_POSTS_PER_PAGE,
    currentPage * RESEARCH_POSTS_PER_PAGE,
  )

  return (
    <section className="blog-layout">
      <aside className="blog-meta">
        <h1>Research</h1>
        <p className="blog-stat">
          {researchPosts.length} write-ups from ongoing research
        </p>
        <p className="blog-byline">by Kameswaran Jayagopal</p>
        <p className="blog-reading-now">2 reading now</p>
      </aside>

      <div className="blog-main">
        <p>
          My research spans security and AI, and this is where the longer write-ups
          from that work live.
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
            placeholder={`Search all ${researchPosts.length} research posts...`}
          />
        </div>

        <h2 className="latest-heading">Latest Research</h2>
        <div className="post-list">
          {pagedPosts.map((post) => (
            <Link key={post.slug} to={`/research/projects/${post.slug}`} className="post-row">
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
