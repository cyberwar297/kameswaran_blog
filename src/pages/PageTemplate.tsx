import Seo from '../components/Seo'

export default function PageTemplate({ title, path }: { title: string; path?: string }) {
  return (
    <section className="content-panel">
      <Seo title={title} path={path} noindex />
      <h1>{title}</h1>
      <p>
        This page is prepared as a framework placeholder. Share the exact visual
        design for this section and I will build it next.
      </p>
    </section>
  )
}
