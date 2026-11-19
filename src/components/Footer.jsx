import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { navLinks, site } from '../data/site'
import { products } from '../data/products'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand brand-light">
            <span className="brand-mark">SE</span>
            <span className="brand-text">
              <strong>Sankari</strong>
              <small>Enterprise</small>
            </span>
          </Link>
          <p>
            Custom-crafted steel furniture from {site.founder} — built with {site.experience} years of
            trusted experience for homes, clinics, hostels and businesses.
          </p>
          <div className="footer-badge">
            <strong>{site.experience}</strong>
            <span>Years of steel craftsmanship</span>
          </div>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Products</h3>
          <ul>
            {products.slice(0, 5).map((product) => (
              <li key={product.slug}>
                <Link to={`/products?category=${encodeURIComponent(product.category)}`}>
                  {product.name}
                </Link>
              </li>
            ))}
            <li>
              <Link className="footer-more" to="/products">
                View all products <ArrowUpRight size={15} />
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Visit &amp; call</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={16} />
              <span>{site.address}</span>
            </li>
            <li>
              <Phone size={16} />
              <a href={site.phoneHref}>{site.phone}, {site.secondaryPhone}</a>
            </li>
            <li>
              <Mail size={16} />
              <a href={`mailto:${site.email}`}>{site.email}, {site.seccondaryEmail}</a>
            </li>
            <li>
              <Clock3 size={16} />
              <span>Mon – Sat, 9:00 AM – 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-wordmark" aria-hidden="true">
        SANKARI
      </div>

      <div className="container footer-bottom">
        <p>© {currentYear} {site.name}. All rights reserved.</p>
        <p>Steel. Strength. Service.</p>
      </div>
    </footer>
  )
}
