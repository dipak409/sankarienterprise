import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow is-light">404</p>
        <h1>This page isn’t in the workshop.</h1>
        <p>The link may be old or mistyped. The steel collection is still right where you left it.</p>
        <Link className="btn btn-primary btn-lg" to="/">
          <ArrowLeft size={17} /> Back home
        </Link>
      </div>
    </section>
  )
}
