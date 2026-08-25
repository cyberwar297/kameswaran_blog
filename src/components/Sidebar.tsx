import { NavLink } from 'react-router-dom'
import { sidebarPages } from '../data/navigation'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="side-nav" aria-label="Primary">
        {sidebarPages.map((page) =>
          page.externalUrl ? (
            <a
              key={page.path}
              className="side-link"
              href={page.externalUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="side-link-inner">
                <page.icon className="side-icon" aria-hidden="true" />
                <span>{page.tab}</span>
              </span>
            </a>
          ) : (
            <NavLink
              key={page.path}
              className={({ isActive }) => (isActive ? 'side-link active' : 'side-link')}
              to={page.path}
            >
              <span className="side-link-inner">
                <page.icon className="side-icon" aria-hidden="true" />
                <span>{page.tab}</span>
              </span>
            </NavLink>
          ),
        )}
      </nav>
    </aside>
  )
}
