export interface NavLink {
  label: string
  href: string
  /** 'anchor' scrolls to a section on the home page; 'route' navigates to its own page. */
  type: 'anchor' | 'route'
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home', type: 'anchor' },
  { label: 'Services', href: '#services', type: 'anchor' },
  { label: 'Projects', href: '/projects', type: 'route' },
  { label: 'Process', href: '#process', type: 'anchor' },
  { label: 'About', href: '#about', type: 'anchor' },
  { label: 'Contact', href: '#contact', type: 'anchor' },
]

export interface SocialLink {
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'GitHub', href: '#' },
]
