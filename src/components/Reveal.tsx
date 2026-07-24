import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li'
}

/**
 * Wraps any content in a fade-up-on-scroll animation.
 * Usage: <Reveal delay={100}><Card /></Reveal>
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const Tag = as

  return (
    <Tag
      ref={ref as never}
      className={`${isVisible ? 'animate-fadeUp' : 'opacity-0'} ${className}`}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  )
}
