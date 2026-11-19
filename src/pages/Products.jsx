import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { categories, products } from '../data/products'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'All'
  const category = categories.includes(categoryParam) ? categoryParam : 'All'
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesQuery =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.tagline.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  const selectCategory = (next) => {
    if (next === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: next })
    }
  }

  return (
    <>
      <PageHero
        eyebrow="The collection"
        title="Steel furniture for every room."
        description="Ten purpose-built ranges — all custom-made from high-grade steel, with finishes and layouts to suit your space. Browse a category or search for what you need."
        aside={
          <div className="page-hero-fact">
            <strong>{products.length}</strong>
            <span>product ranges, all made to order</span>
          </div>
        }
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="catalog-toolbar">
              <div className="filter-chips" role="group" aria-label="Filter products by category">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={category === item}
                    className={`chip ${category === item ? 'is-active' : ''}`}
                    onClick={() => selectCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <label className="catalog-search">
                <Search size={17} />
                <input
                  type="search"
                  placeholder="Search furniture…"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-label="Search products"
                />
                {query && (
                  <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
                    <X size={15} />
                  </button>
                )}
              </label>
            </div>

            <div className="catalog-meta">
              <span>
                <SlidersHorizontal size={15} />
                Showing {filtered.length} of {products.length} ranges
              </span>
              {(category !== 'All' || query) && (
                <button
                  type="button"
                  className="catalog-reset"
                  onClick={() => {
                    selectCategory('All')
                    setQuery('')
                  }}
                >
                  Reset filters
                </button>
              )}
            </div>
          </Reveal>

          {filtered.length > 0 ? (
            <div className="product-grid catalog-grid">
              {filtered.map((product, index) => (
                <Reveal key={product.slug} delay={(index % 3) * 70}>
                  <ProductCard product={product} index={index} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No products match that search.</h3>
              <p>Try a different keyword, or reset the filters to see the full collection.</p>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  selectCategory('All')
                  setQuery('')
                }}
              >
                Show everything
              </button>
            </div>
          )}

          <Reveal>
            <div className="catalog-note">
              <strong>Need a size or layout that isn’t listed?</strong>
              <p>
                Everything we make is built to order. Share your measurements and we will quote a
                custom steel unit for your space.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
