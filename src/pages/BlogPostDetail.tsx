import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import Seo from '../components/Seo'

export default function BlogPostDetail() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <section className="content-panel">
        <Seo title="Post not found" path={`/blog/${slug ?? ''}`} noindex />
        <h1>Post not found</h1>
        <p>
          <Link to="/blog">Back to Blog</Link>
        </p>
      </section>
    )
  }

  return (
    <section className="content-panel post-detail">
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
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
        <Link to="/blog">Back to Blog</Link>
      </p>
    </section>
  )
}
