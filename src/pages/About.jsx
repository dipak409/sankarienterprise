import { Link } from 'react-router-dom'
import { ArrowRight, Check, Hammer, PencilRuler, Ruler, ShieldCheck, Wrench } from 'lucide-react'
import { site } from '../data/site'
import { products } from '../data/products'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import CtaBand from '../components/CtaBand'

const milestones = [
  {
    step: 'Then',
    title: 'The beginning',
    text: 'A small workshop, a few hand tools and one simple promise: build steel furniture that does not need replacing.',
  },
  {
    step: 'Growing',
    title: 'Earning trust',
    text: 'Word travelled. Homes, shops and institutions came back — and brought their neighbours. Every job had to be good enough to sign your name to.',
  },
  {
    step: 'Today',
    title: 'Built on referrals',
    text: 'Three and a half decades later, most work still comes from people who already own a Sankari unit — or know someone who does.',
  },
]

const principles = [
  {
    icon: ShieldCheck,
    title: 'Honest materials',
    text: 'High-grade steel, proper gauges and rust-resistant finishes. No hidden compromises in the parts you cannot see.',
  },
  {
    icon: Ruler,
    title: 'Measure twice',
    text: 'Every unit starts with real measurements, not a catalogue size. If the room is awkward, the furniture adapts.',
  },
  {
    icon: Hammer,
    title: 'Finish matters',
    text: 'Strong is not enough. Edges are clean, doors align, hardware moves smoothly and the coating lasts.',
  },
  {
    icon: Wrench,
    title: 'Service is part of it',
    text: 'We stand behind what we build — with repairs, maintenance and practical advice for as long as you own it.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Three and a half decades of steel."
        description="Sankari Enterprise is the workshop of Tapan Mondal — a steel furniture specialist who has spent 35+ years turning high-grade steel into furniture that families, clinics and institutions rely on."
        aside={
          <div className="page-hero-fact">
            <strong>35+</strong>
            <span>years of trusted experience</span>
          </div>
        }
      />

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <Reveal variant="left">
              <div className="founder-card">
                <div className="founder-monogram">TM</div>
                <div className="founder-meta">
                  <strong>{site.founder}</strong>
                  <span>Founder &amp; steel furniture specialist</span>
                </div>
                <blockquote>
                  “I do not sell furniture. I make something you will still be using in twenty
                  years.”
                </blockquote>
                <div className="founder-stats">
                  <div>
                    <strong>35+</strong>
                    <span>years in the trade</span>
                  </div>
                  <div>
                    <strong>10</strong>
                    <span>product ranges</span>
                  </div>
                  <div>
                    <strong>100%</strong>
                    <span>steel construction</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} variant="right">
              <div className="about-copy">
                <p className="eyebrow">Meet the maker</p>
                <h2>Experience you can lean on — literally.</h2>
                <p>
                  For more than three decades, Tapan Mondal has worked with one material: steel. Not
                  as a shortcut or a trend, but because it holds its shape, resists pests and
                  moisture, and can be repaired instead of thrown away.
                </p>
                <p>
                  That focus shows in the range. Sleek steel almirahs and wardrobes. Durable steel
                  modular kitchens. Wall doors, study tables, showcases, dressing tables, medical and
                  hostel beds, and racks. Different pieces, one standard: built strong, built clean,
                  built to fit.
                </p>
                <p>
                  Sankari Enterprise is not a showroom that outsources the work. The person who
                  advises you is the person who knows how it will be fabricated, finished and
                  installed — and who will still pick up the phone if it ever needs a repair.
                </p>
                <div className="about-checks">
                  <span>
                    <Check size={16} /> Custom-crafted, never mass-produced
                  </span>
                  <span>
                    <Check size={16} /> Direct access to the workshop
                  </span>
                  <span>
                    <Check size={16} /> Repair &amp; maintenance support
                  </span>
                </div>
                <Link className="btn btn-dark btn-lg" to="/contact">
                  Talk to Tapan <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="The journey"
              title="Thirty-five years, one standard."
              description="No shortcuts, no rented reputation — just consistent work and customers who came back."
            />
          </Reveal>
          <div className="milestone-grid">
            {milestones.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="milestone-card">
                  <span className="milestone-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="What we believe"
              title="The workshop principles."
              description="These are the things we refuse to compromise on, whatever the size of the order."
            />
          </Reveal>
          <div className="value-grid">
            {principles.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 70}>
                  <div className="value-card">
                    <span className="value-icon">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <Reveal>
            <div className="capability-panel">
              <div>
                <p className="eyebrow">Capabilities</p>
                <h2>One workshop. Every steel need.</h2>
                <p>
                  Custom-crafted modern furniture built entirely from high-grade steel — for homes,
                  clinics, hostels, shops and offices.
                </p>
                <div className="capability-note">
                  <PencilRuler size={20} />
                  <span>
                    Have a design in mind? Bring a sketch or a photo. We will work out how to build
                    it in steel.
                  </span>
                </div>
              </div>
              <ul className="capability-list">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Check size={16} /> {product.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Visit the workshop"
        title="See the work before you commit."
        description="Come in, look at the joins, feel the weight of the steel and talk through your requirement in person."
      />
    </>
  )
}
