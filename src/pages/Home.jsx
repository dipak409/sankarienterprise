import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  Hammer,
  HeartPulse,
  Home as HomeIcon,
  Phone,
  Ruler,
  ShieldCheck,
  Store,
  Wrench,
} from 'lucide-react'
import { site } from '../data/site'
import { products } from '../data/products'
import Blueprint from '../components/Blueprint'
import ProductCard from '../components/ProductCard'
import CountUp from '../components/CountUp'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import CtaBand from '../components/CtaBand'

const marqueeItems = [
  'Steel Almirahs',
  'Wardrobes',
  'Modular Kitchens',
  'Wall Doors',
  'Study Tables',
  'Showcases',
  'Dressing Tables',
  'Medical Beds',
  'Hostel Beds',
  'Storage Racks',
  'Service Lockers',
]

const stats = [
  { end: 35, suffix: '+', label: 'Years of trusted experience' },
  { end: 10, suffix: '', label: 'Product ranges in steel' },
  { end: 100, suffix: '%', label: 'High-grade steel build' },
  { text: '1:1', label: 'Made to order for your space' },
]

const values = [
  {
    icon: Hammer,
    title: '35+ years of hands-on craft',
    text: 'Tapan Mondal has spent three and a half decades on the workshop floor — welding, finishing and fitting furniture that is expected to last a lifetime.',
  },
  {
    icon: ShieldCheck,
    title: 'High-grade steel, no shortcuts',
    text: 'Every unit is built entirely from high-grade steel with rust-resistant powder coating, so it stays strong in real, everyday conditions.',
  },
  {
    icon: Ruler,
    title: 'Custom-built to your space',
    text: 'Awkward corner, tall ceiling, tight clinic corridor — we measure, plan and build to the millimetre instead of forcing a standard size.',
  },
  {
    icon: Wrench,
    title: 'Service after the sale',
    text: 'Repairs, maintenance and secure service lockers are part of what we do. One call keeps your furniture working like it should.',
  },
]

const process = [
  {
    step: '01',
    title: 'Consult',
    text: 'Share your requirement, room size and budget. We suggest the right steel, finish and layout.',
  },
  {
    step: '02',
    title: 'Measure & design',
    text: 'We take exact on-site measurements and plan the unit around your space and daily use.',
  },
  {
    step: '03',
    title: 'Fabricate',
    text: 'Cutting, welding, finishing and powder coating happen in-house with close quality checks.',
  },
  {
    step: '04',
    title: 'Install',
    text: 'Delivery and fitting with clean edges, aligned doors and hardware tested on the spot.',
  },
  {
    step: '05',
    title: 'Maintain',
    text: 'Repairs, adjustments and servicing whenever you need — so the investment keeps paying off.',
  },
]

const audiences = [
  { icon: HomeIcon, title: 'Homes', text: 'Almirahs, wardrobes, kitchens, dressing tables and study tables built for family life.' },
  { icon: HeartPulse, title: 'Clinics & hospitals', text: 'Medical beds, medicine showcases, lockers and easy-clean steel storage.' },
  { icon: Building2, title: 'Hostels & institutions', text: 'Hostel beds, racks and storage engineered for heavy, shared daily use.' },
  { icon: Store, title: 'Shops & offices', text: 'Showcases, service lockers, counters and racks that hold up to constant traffic.' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow is-light hero-fade" style={{ '--d': '0.05s' }}>
              Sankari Enterprise <span className="eyebrow-sep" /> {site.experience} years
              <span className="eyebrow-tail"> of steel craft</span>
            </p>
            <h1 className="hero-title">
              <span className="hero-line">
                <span>Steel, shaped</span>
              </span>
              <span className="hero-line">
                <span>
                  to <em className="accent-word">outlast.</em>
                </span>
              </span>
            </h1>
            <p className="hero-lede hero-fade" style={{ '--d': '0.38s' }}>
              Modern furniture built entirely from high-grade steel — almirahs, wardrobes, modular
              kitchens, doors, beds and more. Custom-crafted by Tapan Mondal with {site.experience}{' '}
              years of trusted experience.
            </p>
            <div className="hero-actions hero-fade" style={{ '--d': '0.5s' }}>
              <Link className="btn btn-primary btn-lg" to="/products">
                Explore the collection <ArrowRight size={18} />
              </Link>
              <Link className="btn btn-outline-light btn-lg" to="/contact">
                Book a consultation
              </Link>
            </div>
            <div className="hero-meta hero-fade" style={{ '--d': '0.62s' }}>
              <span>
                <Check size={15} /> Built to order
              </span>
              <span>
                <Check size={15} /> Rust-resistant finish
              </span>
              <span>
                <Check size={15} /> Repair &amp; maintenance
              </span>
            </div>
          </div>

          <Reveal delay={150} className="hero-art-wrap" variant="scale">
            <Blueprint />
          </Reveal>
        </div>

        <div className="container">
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 70}>
                <div className="hero-stat">
                  <strong>
                    {stat.text ?? <CountUp end={stat.end} suffix={stat.suffix} />}
                  </strong>
                  <span>{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, index) => (
              <span key={`${item}-${index}`}>
                {item} <i />
              </span>
            ),
          )}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="What we make"
              title="One material. Every room."
              description="From sleek steel almirahs to durable modular kitchens and institutional beds, every piece is fabricated to the same standard: strong, clean and built to stay."
              action={{ label: 'View all products', to: '/products' }}
            />
          </Reveal>

          <div className="product-grid">
            {products
              .filter((product) => product.featured)
              .map((product, index) => (
                <Reveal key={product.slug} delay={(index % 3) * 80}>
                  <ProductCard product={product} index={index} />
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="Why Sankari"
              title="Strength is only the starting point."
              description="Anyone can sell steel furniture. We build it to fit your life — with the experience, materials and follow-through that make it last."
            />
          </Reveal>

          <div className="value-grid">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Reveal key={value.title} delay={index * 70}>
                  <div className="value-card">
                    <span className="value-icon">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={120}>
            <div className="difference">
              <div className="difference-visual">
                <p className="eyebrow is-light">The workshop standard</p>
                <strong className="difference-number">
                  <CountUp end={35} suffix="+" />
                </strong>
                <span className="difference-caption">years of trusted experience</span>
                <ul>
                  <li>
                    <Check size={16} /> Built from high-grade steel
                  </li>
                  <li>
                    <Check size={16} /> Custom sizes &amp; layouts
                  </li>
                  <li>
                    <Check size={16} /> Powder-coated, rust-resistant
                  </li>
                  <li>
                    <Check size={16} /> Repair &amp; maintenance support
                  </li>
                </ul>
              </div>
              <div className="difference-copy">
                <p className="eyebrow">The Sankari difference</p>
                <h2>Made to measure. Made to last.</h2>
                <p>
                  Standard furniture rarely fits well — and rarely survives. We design around your
                  actual room, then fabricate each unit in steel so it stays square, strong and
                  aligned for years.
                </p>
                <p>
                  Whether it is a single study table or a full run of modular kitchen cabinets, you
                  work directly with the people building it. That is how 35 years of experience
                  turns into furniture you can rely on.
                </p>
                <Link className="text-link" to="/about">
                  Meet Tapan Mondal <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="How we work"
              title="From first call to final fit."
              description="A clear, hands-on process — no middlemen, no guesswork."
            />
          </Reveal>

          <div className="process-grid">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 60}>
                <div className="process-card">
                  <span className="process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="Built for"
              title="Who we build for."
              description="Homes, clinics, hostels, shops and offices across the region rely on our steel furniture."
            />
          </Reveal>

          <div className="audience-grid">
            {audiences.map((audience, index) => {
              const Icon = audience.icon
              return (
                <Reveal key={audience.title} delay={index * 70}>
                  <div className="audience-card">
                    <span className="audience-icon">
                      <Icon size={24} strokeWidth={1.6} />
                    </span>
                    <h3>{audience.title}</h3>
                    <p>{audience.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="service-strip">
              <div>
                <p className="eyebrow">Repair, maintenance &amp; lockers</p>
                <h2>Already have steel furniture? We keep it working.</h2>
                <p>
                  Sticking doors, broken locks, rusted panels or a unit that needs re-fitting — our
                  service team handles repairs and maintenance, and supplies secure service lockers
                  for shops and institutions.
                </p>
              </div>
              <div className="service-strip-actions">
                <Link className="btn btn-dark btn-lg" to="/services">
                  Explore services <ArrowUpRight size={18} />
                </Link>
                <a className="text-link" href={site.phoneHref}>
                  <Phone size={17} /> Call {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
