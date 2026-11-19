import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { site } from '../data/site'

function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, search])

  return null
}

function useIdlePrefetch() {
  useEffect(() => {
    const load = () => {
      Promise.all([
        import('../pages/Products'),
        import('../pages/ProductDetail'),
        import('../pages/Services'),
        import('../pages/About'),
        import('../pages/Contact'),
        import('../pages/NotFound'),
      ]).catch(() => {})
    }

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(load, { timeout: 2500 })
      return () => window.cancelIdleCallback(id)
    }

    const timer = setTimeout(load, 1800)
    return () => clearTimeout(timer)
  }, [])
}

export default function Layout() {
  const { pathname } = useLocation()
  useIdlePrefetch()

  return (
    <div className="site">
      <ScrollToTop />
      <div className="scroll-progress" aria-hidden="true">
        <span />
      </div>
      <Navbar />
      <main key={pathname} className="page">
        <Suspense
          fallback={
            <div className="route-loading" role="status" aria-label="Loading page">
              <span />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <a
        className="whatsapp-fab"
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Sankari Enterprise on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.17-.47-.29Z" />
        </svg>
      </a>
    </div>
  )
}
