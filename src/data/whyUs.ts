import type { LucideIcon } from 'lucide-react'
import {
  Sparkles,
  Smartphone,
  Zap,
  Search,
  Layers,
  LifeBuoy,
} from 'lucide-react'

export interface WhyUsItem {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export const whyUs: WhyUsItem[] = [
  {
    id: 'custom-built',
    icon: Sparkles,
    title: 'Custom-Built, Not Templated',
    description: 'Every site is designed and coded around your business — no drag-and-drop themes, no cookie-cutter layouts.',
  },
  {
    id: 'mobile-first',
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'More than half your visitors are on a phone. We design for that reality first, then scale up.',
  },
  {
    id: 'fast-performance',
    icon: Zap,
    title: 'Built for Speed',
    description: 'Lean code and optimized assets mean pages that load fast — because slow sites lose customers.',
  },
  {
    id: 'seo-friendly',
    icon: Search,
    title: 'SEO-Friendly Foundation',
    description: 'Semantic markup and clean structure help your site get found by the people searching for you.',
  },
  {
    id: 'scalable',
    icon: Layers,
    title: 'Scalable Solutions',
    description: 'Your site grows with your business — new pages, features, and content without a rebuild.',
  },
  {
    id: 'ongoing-support',
    icon: LifeBuoy,
    title: 'Ongoing Support',
    description: "We don't disappear at launch. You get a partner who's there for updates and improvements.",
  },
]
