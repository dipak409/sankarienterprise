export default function PageHero({ eyebrow, title, description, aside }) {
  return (
    <section className="page-hero">
      <div className="page-hero-glow" aria-hidden="true" />
      <div className="container page-hero-inner">
        <div className="page-hero-copy">
          <p className="eyebrow is-light">{eyebrow}</p>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
        {aside && <div className="page-hero-aside">{aside}</div>}
      </div>
    </section>
  )
}
