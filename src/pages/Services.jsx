import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Hammer,
  LockKeyhole,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { site } from '../data/site'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import CtaBand from '../components/CtaBand'

const services = [
  {
    icon: Hammer,
    title: 'Custom Steel Fabrication',
    text: 'Anything in steel, built to your measurements — from a single study table to full wardrobes, kitchen runs and institutional furniture. You choose the size, layout and finish.',
    points: ['Made-to-measure units', 'Choice of finish & fittings', 'On-site measurement', 'Clean, tested installation'],
  },
  {
    icon: Wrench,
    title: 'Repair & Restoration',
    text: 'Doors that stick, broken locks, sagging shelves or rusted panels — we diagnose the problem and restore the unit instead of pushing you to replace it.',
    points: ['Door & hinge alignment', 'Lock repair or replacement', 'Shelf and frame repairs', 'Rust treatment & recoating'],
  },
  {
    icon: ClipboardCheck,
    title: 'Maintenance Services',
    text: 'Scheduled checks keep steel furniture safe, smooth and looking new. Ideal for homes, clinics, hostels and shops with furniture in constant use.',
    points: ['Periodic inspections', 'Hardware servicing', 'Touch-up coatings', 'Priority repair support'],
  },
  {
    icon: LockKeyhole,
    title: 'Secure Service Lockers',
    text: 'Individual-lock steel lockers for shops, offices, gyms and institutions. Supplied and installed with compartment layouts planned around how your space actually works.',
    points: ['Individual locking units', 'Custom compartment sizes', 'Rugged steel construction', 'Supply & installation'],
  },
]

const covered = [
  {
    icon: ShieldCheck,
    title: 'Structural checks',
    text: 'We inspect welds, frames and load-bearing points so nothing fails quietly.',
  },
  {
    icon: Wrench,
    title: 'Hardware servicing',
    text: 'Hinges, channels, locks and handles adjusted or replaced for smooth daily use.',
  },
  {
    icon: Hammer,
    title: 'Finish restoration',
    text: 'Rust removal and touch-up powder coating that brings tired steel back to life.',
  },
]

const faqs = [
  {
    q: 'Can you build furniture to my exact measurements?',
    a: 'Yes. Almost everything we make is built to order. Share your room dimensions or ask for an on-site measurement, and we will plan the unit around your space.',
  },
  {
    q: 'Will steel furniture rust?',
    a: 'We use high-grade steel with a rust-resistant powder-coated finish, which holds up well in everyday indoor use. For very humid or coastal conditions, tell us upfront and we will recommend the right finish and care routine.',
  },
  {
    q: 'Do you repair furniture that was not bought from you?',
    a: 'In most cases, yes. We assess the unit first and tell you honestly whether a repair is practical or whether a replacement makes more sense.',
  },
  {
    q: 'Do you deliver and install?',
    a: 'Yes — delivery and installation are discussed as part of your quote, so you know exactly what is included before work begins.',
  },
  {
    q: 'Do you supply lockers for shops and offices?',
    a: 'Yes. We build secure service lockers with individual locking compartments and can customise the layout, size and number of units for your premises.',
  },
  {
    q: 'How do I get a quote?',
    a: `Call ${site.phone}, message us on WhatsApp, or use the contact form. Share what you need, approximate sizes and your location, and we will get back to you.`,
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Built to last. Serviced to stay that way."
        description="New steel furniture is only half the story. We also repair, maintain and fit out existing units — plus supply secure service lockers for businesses and institutions."
        aside={
          <div className="page-hero-fact">
            <strong>35+</strong>
            <span>years of workshop experience behind every job</span>
          </div>
        }
      />

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Reveal key={service.title} delay={index * 70}>
                  <article className="service-card">
                    <span className="service-icon">
                      <Icon size={26} strokeWidth={1.5} />
                    </span>
                    <h2>{service.title}</h2>
                    <p>{service.text}</p>
                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>
                          <Check size={15} /> {point}
                        </li>
                      ))}
                    </ul>
                    <Link className="text-link" to="/contact">
                      Enquire about this service <ArrowRight size={17} />
                    </Link>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <Reveal>
            <div className="maintenance-panel">
              <div>
                <p className="eyebrow is-light">Maintenance that pays for itself</p>
                <h2>Small fixes now. No costly failures later.</h2>
                <p>
                  Steel is tough, but hinges, locks and coatings still need attention. A periodic
                  check keeps doors closing properly, shelves safe and surfaces protected — especially
                  in clinics, hostels and busy shops.
                </p>
                <Link className="btn btn-primary btn-lg" to="/contact">
                  Book a maintenance visit <ArrowRight size={18} />
                </Link>
              </div>
              <div className="maintenance-list">
                {covered.map((item) => {
                  const Icon = item.icon
                  return (
                    <div className="maintenance-item" key={item.title}>
                      <span>
                        <Icon size={20} strokeWidth={1.6} />
                      </span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container faq-container">
          <Reveal>
            <SectionHeader
              eyebrow="Questions"
              title="Good to know."
              description="A few things people ask before they visit the workshop."
            />
          </Reveal>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <Reveal key={faq.q} delay={index * 40}>
                <details className="faq-item">
                  <summary>
                    {faq.q}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Service enquiry"
        title="Need a repair, a service visit or a locker fit-out?"
        description="Describe the job and we will advise on the best route — repair, restore or build new."
      />
    </>
  )
}
