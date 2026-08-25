import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export default function BlogPostDetail() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <section className="content-panel">
        <h1>Post not found</h1>
        <p>
          <Link to="/blog">Back to Blog</Link>
        </p>
      </section>
    )
  }

  return (
    <section className="content-panel post-detail">
      <p className="post-detail-meta">
        {post.date} <span aria-hidden="true">/</span> {post.tags.join(' ')}
      </p>
      <h1>{post.title}</h1>
      {post.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p>
        <Link to="/blog">Back to Blog</Link>
      </p>
    </section>
  )
}
