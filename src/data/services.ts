import type { LucideIcon } from 'lucide-react'
import {
  LayoutTemplate,
  Rocket,
  RefreshCcw,
  Smartphone,
  Wrench,
  Gauge,
} from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  description: string
  learnMoreHref: string
}

export const services: Service[] = [
  {
    id: 'custom-business-websites',
    icon: LayoutTemplate,
    title: 'Custom Business Websites',
    description:
      "Professional websites tailored to each client's unique goals, brand, and audience — built from scratch, never a template.",
    learnMoreHref: '#contact',
  },
  {
    id: 'landing-pages',
    icon: Rocket,
    title: 'Landing Pages',
    description:
      'High-converting landing pages for campaigns, product launches, or lead generation, designed to turn visits into action.',
    learnMoreHref: '#contact',
  },
  {
    id: 'website-redesign',
    icon: RefreshCcw,
    title: 'Website Redesign',
    description:
      'Transform outdated or underperforming websites into modern, fast, high-performing experiences your customers trust.',
    learnMoreHref: '#contact',
  },
  {
    id: 'responsive-web-design',
    icon: Smartphone,
    title: 'Responsive Web Design',
    description:
      'Every site is built mobile-first, so it looks and performs beautifully on desktop, tablet, and phone alike.',
    learnMoreHref: '#contact',
  },
  {
    id: 'website-maintenance',
    icon: Wrench,
    title: 'Website Maintenance',
    description:
      'Ongoing updates, content changes, and technical support so your site stays secure, current, and dependable.',
    learnMoreHref: '#contact',
  },
  {
    id: 'performance-optimization',
    icon: Gauge,
    title: 'Performance Optimization',
    description:
      'Speed, accessibility, and Core Web Vitals improvements that make your site faster and easier for everyone to use.',
    learnMoreHref: '#contact',
  },
]
