import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, ChevronRight, Phone } from 'lucide-react'
import { products } from '../data/products'
import { site } from '../data/site'
import ProductIcon from '../components/ProductIcon'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return (
      <section className="section">
        <div className="container empty-state">
          <h2>That product could not be found.</h2>
          <p>It may have moved. Browse the full steel furniture collection instead.</p>
          <Link className="btn btn-dark" to="/products">
            <ArrowLeft size={17} /> Back to products
          </Link>
        </div>
      </section>
    )
  }

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3)

  return (
    <>
      <section className="product-detail">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products">Products</Link>
            <ChevronRight size={14} />
            <span>{product.name}</span>
          </nav>

          <div className="detail-grid">
            <Reveal className="detail-visual-wrap" variant="left">
              <div className="detail-visual">
                <span className="detail-visual-tag">{product.category}</span>
                <ProductIcon name={product.icon} size={140} strokeWidth={1.1} />
                <div className="detail-visual-foot">
                  <span>High-grade steel</span>
                  <span>Built to order</span>
                  <span>Powder-coated</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="detail-copy" variant="right">
              <p className="eyebrow">{product.tagline}</p>
              <h1>{product.name}</h1>
              <p className="detail-lede">{product.description}</p>

              <ul className="detail-features">
                {product.features.map((feature) => (
                  <li key={feature}>
                    <span>
                      <Check size={15} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <dl className="detail-specs">
                <div>
                  <dt>Material</dt>
                  <dd>High-grade steel</dd>
                </div>
                <div>
                  <dt>Finish</dt>
                  <dd>Rust-resistant powder coat</dd>
                </div>
                <div>
                  <dt>Sizing</dt>
                  <dd>Custom, measured on site</dd>
                </div>
                <div>
                  <dt>Support</dt>
                  <dd>Repair &amp; maintenance available</dd>
                </div>
              </dl>

              <div className="detail-actions">
                <Link className="btn btn-primary btn-lg" to={`/contact?product=${product.slug}`}>
                  Request a quote <ArrowRight size={18} />
                </Link>
                <a className="btn btn-ghost btn-lg" href={site.phoneHref}>
                  <Phone size={17} /> Call us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-header">
            <div className="section-header-copy">
              <p className="eyebrow">Also consider</p>
              <h2>More from the collection</h2>
            </div>
            <Link className="text-link" to="/products">
              All products <ArrowRight size={18} />
            </Link>
          </div>
          <div className="product-grid">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 70}>
                <ProductCard product={item} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Need a ${product.name.toLowerCase().replace(/s$/, '')} built to your size?`}
        description="Share your measurements and finish preference. We will come back with a clear, no-obligation quote."
      />
    </>
  )
}
