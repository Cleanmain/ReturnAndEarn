import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`eyebrow${light ? ' eyebrow-light' : ''}`}>{children}</span>
}

export function PageIntro({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string
  title: string
  description: string
  compact?: boolean
}) {
  return (
    <section className={`page-intro${compact ? ' page-intro-compact' : ''}`}>
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}) {
  return (
    <div className={`section-heading${centered ? ' text-center' : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export function InfoCard({
  icon: Icon,
  title,
  children,
  className = '',
}: {
  icon?: LucideIcon
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <article className={`info-card ${className}`}>
      {Icon && <span className="card-icon"><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>}
      <h3>{title}</h3>
      <div className="card-copy">{children}</div>
    </article>
  )
}

export function Notice({ children, tone = 'blue' }: { children: ReactNode; tone?: 'blue' | 'yellow' }) {
  return <aside className={`notice notice-${tone}`}>{children}</aside>
}

export function FlowList({ items, numbered = false }: { items: string[]; numbered?: boolean }) {
  return (
    <div className={`flow-list${numbered ? ' flow-numbered' : ''}`}>
      {items.map((item, index) => (
        <div className="flow-item" key={item}>
          {numbered && <span className="flow-index">{String(index + 1).padStart(2, '0')}</span>}
          <span>{item}</span>
          {index < items.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
        </div>
      ))}
    </div>
  )
}
