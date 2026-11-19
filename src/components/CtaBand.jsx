import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { site } from '../data/site'

export default function CtaBand({
  eyebrow = 'Let’s build something lasting',
  title = 'Ready to replace flimsy with forever?',
  description = 'Tell us what you need. We’ll help you plan the size, finish and fittings — then build it in steel to fit your space exactly.',
}) {
  return (
    <section className="cta-band">
      <div className="cta-glow" aria-hidden="true" />
      <div className="container cta-inner">
        <div>
          <p className="eyebrow is-light">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="cta-desc">{description}</p>
        </div>
        <div className="cta-actions">
          <Link className="btn btn-primary btn-lg" to="/contact">
            Get a free quote <ArrowRight size={18} />
          </Link>
          <a className="btn btn-outline-light btn-lg" href={site.phoneHref}>
            <Phone size={17} /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
