import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ProductIcon from './ProductIcon'

export default function ProductCard({ product, index = 0 }) {
  const cardRef = useRef(null)
  const frameRef = useRef(0)

  useEffect(() => {
    const card = cardRef.current
    return () => {
      cancelAnimationFrame(frameRef.current)
      card?.style.removeProperty('--spot-x')
    }
  }, [])

  const handleMove = (event) => {
    const card = cardRef.current
    if (!card || frameRef.current) return
    const { clientX, clientY } = event
    frameRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--spot-x', `${clientX - rect.left}px`)
      card.style.setProperty('--spot-y', `${clientY - rect.top}px`)
      frameRef.current = 0
    })
  }

  return (
    <Link
      ref={cardRef}
      className="product-card"
      to={`/products/${product.slug}`}
      onMouseMove={handleMove}
    >
      <div className="product-card-art">
        <span className="product-card-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="product-card-tag">{product.category}</span>
        <span className="card-shine" aria-hidden="true" />
        <ProductIcon name={product.icon} size={54} />
      </div>
      <div className="product-card-body">
        <div className="product-card-title">
          <h3>{product.name}</h3>
          <span className="product-card-arrow">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <p>{product.tagline}</p>
        <ul className="product-card-specs">
          {product.features.slice(0, 2).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </Link>
  )
}
