import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function SectionHeader({ eyebrow, title, description, action, align = 'left' }) {
  return (
    <div className={`section-header ${align === 'center' ? 'is-center' : ''}`}>
      <div className="section-header-copy">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {description && <p className="section-desc">{description}</p>}
      </div>
      {action && (
        <Link className="text-link" to={action.to}>
          {action.label}
          <ArrowUpRight size={18} />
        </Link>
      )}
    </div>
  )
}
