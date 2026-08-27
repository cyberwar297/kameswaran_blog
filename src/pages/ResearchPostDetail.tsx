import { Link, useParams } from 'react-router-dom'
import { researchPosts } from '../data/researchPosts'
import Seo from '../components/Seo'

export default function ResearchPostDetail() {
  const { slug } = useParams()
  const post = researchPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <section className="content-panel">
        <Seo title="Project not found" path={`/research/projects/${slug ?? ''}`} noindex />
        <h1>Project not found</h1>
        <p>
          <Link to="/research">Back to Research</Link>
        </p>
      </section>
    )
  }

  return (
    <section className="content-panel post-detail">
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/research/projects/${post.slug}`}
        type="article"
      />
      <p className="post-detail-meta">
        {post.date} <span aria-hidden="true">/</span> {post.tags.join(' ')}
      </p>
      <h1>{post.title}</h1>
      {post.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p>
        <Link to="/research">Back to Research</Link>
      </p>
    </section>
  )
}
