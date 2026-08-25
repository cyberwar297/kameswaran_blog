import { Link, NavLink } from 'react-router-dom'
import { FaEllipsis, FaMagnifyingGlass } from 'react-icons/fa6'
import logo from '../assets/kouvet_transparent.png'
import { headerTabs } from '../data/navigation'

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/home">
        <img className="brand-logo" src={logo} alt="" />
        <span>Kameswaran Jayagopal</span>
      </Link>
      <nav className="header-tabs" aria-label="Top navigation">
        {headerTabs.map((tab) => (
          <NavLink
            key={tab.path}
            className={({ isActive }) => (isActive ? 'header-tab active' : 'header-tab')}
            to={tab.path}
          >
            {tab.title}
          </NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <button type="button" className="header-icon-btn" aria-label="Search">
          <FaMagnifyingGlass aria-hidden="true" />
        </button>
        <button type="button" className="header-icon-btn" aria-label="More">
          <FaEllipsis aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
