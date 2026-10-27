import { useEffect, useRef, useState } from 'react'
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
] as const

type DropdownLabel = (typeof groups)[number]['label']

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownLabel | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const groupRefs = useRef<Array<HTMLDivElement | null>>([])
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([])

  const closeMenus = () => {
    setActiveDropdown(null)
    setMobileMenuOpen(false)
  }

  const toggleDropdown = (label: DropdownLabel) => {
    setActiveDropdown((current) => current === label ? null : label)
  }

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target
      const activeIndex = groups.findIndex((group) => group.label === activeDropdown)
      const activeGroup = activeIndex === -1 ? null : groupRefs.current[activeIndex]
      if (activeGroup && target instanceof Node && !activeGroup.contains(target)) {
        setActiveDropdown(null)
      }
      const outsideNav = target instanceof Node && !navRef.current?.contains(target)
      const onMenuToggle = target instanceof Node && menuToggleRef.current?.contains(target)
      if (outsideNav && !onMenuToggle) {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || (!activeDropdown && !mobileMenuOpen)) return
      event.preventDefault()
      const activeIndex = groups.findIndex((group) => group.label === activeDropdown)
      setActiveDropdown(null)
      setMobileMenuOpen(false)
      if (mobileMenuOpen) {
        menuToggleRef.current?.focus()
      } else if (activeIndex !== -1) {
        triggerRefs.current[activeIndex]?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeDropdown, mobileMenuOpen])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" to="/" onClick={closeMenus} aria-label="Return and Earn home">
          <img className="wordmark-icon" src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" aria-hidden="true" />
          <span className="wordmark-copy">return<span>&</span>earn</span>
        </Link>
        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="primary-navigation"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => {
            setMobileMenuOpen((current) => !current)
            setActiveDropdown(null)
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          ref={navRef}
          id="primary-navigation"
          className={`primary-nav${mobileMenuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
          onBlur={(event) => {
            const nextTarget = event.relatedTarget
            if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
              setActiveDropdown(null)
            }
          }}
        >
          <NavLink to="/" end onClick={closeMenus} className={({ isActive }) => `nav-home${isActive ? ' active' : ''}`}>
            Overview
          </NavLink>
          {groups.map((group, index) => {
            const isOpen = activeDropdown === group.label
            const menuId = `nav-menu-${index}`
            return (
              <div
                className={`nav-group${isOpen ? ' is-open' : ''}`}
                key={group.label}
                ref={(element) => { groupRefs.current[index] = element }}
              >
                <button
                  ref={(element) => { triggerRefs.current[index] = element }}
                  className="nav-dropdown-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={menuId}
                  onClick={() => toggleDropdown(group.label)}
                >
                  {group.label}<ChevronDown size={14} aria-hidden="true" />
                </button>
                <div className="nav-menu" id={menuId} hidden={!isOpen}>
                  {group.links.map(([path, label]) => (
                    <NavLink key={path} to={path} onClick={closeMenus}>{label}</NavLink>
                  ))}
                </div>
              </div>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
