import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const groups = [
  {
    label: 'The idea',
    links: [
      ['/problem', 'The problem'],
      ['/solution', 'Our solution'],
      ['/demo', 'Demo'],
    ],
  },
  {
    label: 'Who it helps',
    links: [
      ['/customers', 'For customers'],
      ['/ikea', 'For IKEA'],
      ['/sustainability-goals', '2030 goals'],
    ],
  },
  {
    label: 'The project',
    links: [
      ['/circularity', 'Circularity'],
      ['/development', 'Development'],
      ['/team', 'Team'],
      ['/references', 'References'],
    ],
  },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" to="/" onClick={closeMenu} aria-label="Return and Earn home">
          <span className="wordmark-icon" aria-hidden="true">R<span>&</span>E</span>
          <span className="wordmark-copy">return<span>&</span>earn</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="primary-navigation" className={`primary-nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
          <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => `nav-home${isActive ? ' active' : ''}`}>
            Overview
          </NavLink>
          {groups.map((group) => (
            <details className="nav-group" key={group.label}>
              <summary>{group.label}<ChevronDown size={14} aria-hidden="true" /></summary>
              <div className="nav-menu">
                {group.links.map(([path, label]) => (
                  <NavLink key={path} to={path} onClick={closeMenu}>{label}</NavLink>
                ))}
              </div>
            </details>
          ))}
        </nav>
      </div>
    </header>
  )
}
