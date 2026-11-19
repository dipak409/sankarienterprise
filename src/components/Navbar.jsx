import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { navLinks, site } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Sankari Enterprise home" onClick={() => setOpen(false)}>
          <span className="brand-mark">SE</span>
          <span className="brand-text">
            <strong>Sankari</strong>
            <small>Enterprise</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-phone" href={site.phoneHref}>
            <Phone size={16} />
            <span>{site.phone}</span>
          </a>
          <Link className="btn btn-sm btn-dark" to="/contact">
            Get a quote
          </Link>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
            >
              <span className="mobile-index">{String(index + 1).padStart(2, '0')}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <a href={site.phoneHref} className="btn btn-primary">
            <Phone size={17} /> Call {site.phone}
          </a>
          <p>{site.address}</p>
        </div>
      </div>
    </header>
  )
}
