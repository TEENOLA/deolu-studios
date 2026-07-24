import type { LucideIcon } from 'lucide-react'
import { Search, PenTool, Code2, Rocket } from 'lucide-react'

export interface ProcessStep {
  step: string
  icon: LucideIcon
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    icon: Search,
    title: 'Discovery',
    description:
      'We learn your business, your goals, and your audience — so every decision that follows is grounded in something real.',
  },
  {
    step: '02',
    icon: PenTool,
    title: 'Design',
    description:
      'We craft a visual direction and layout tailored to your brand, refined with you until it feels exactly right.',
  },
  {
    step: '03',
    icon: Code2,
    title: 'Development',
    description:
      'We build it clean and fast — responsive across every device, accessible, and ready to scale as you grow.',
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Launch & Support',
    description:
      'We launch with care, then stay on as your partner for updates, improvements, and whatever comes next.',
  },
]
