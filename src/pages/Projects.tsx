import { useState } from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { projects } from '../data/projects'

export default function Projects() {
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null)

  return (
    <section className="blog-layout">
      <aside className="blog-meta">
        <h1>Projects</h1>
        <p className="blog-stat">June 2026</p>
        <p className="blog-byline">by Kameswaran Jayagopal</p>
        <p className="blog-tags">#cybersecurity #ai #tooling</p>
        <p className="blog-reading-now">3 reading now</p>
      </aside>

      <div className="blog-main">
        <h2 className="projects-heading">Open Source</h2>
        <p>Tools and frameworks anyone can use, fork, and build on.</p>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={
                selectedRepo === project.name ? 'project-card selected' : 'project-card'
              }
              onClick={() =>
                setSelectedRepo((current) => (current === project.name ? null : project.name))
              }
            >
              <div className="project-card-icon" aria-hidden="true">
                <span>{project.name.slice(0, 1).toUpperCase()}</span>
              </div>
              <div className="project-card-body">
                <p className="project-card-category">
                  {project.category} <FaArrowUpRightFromSquare aria-hidden="true" />
                </p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
