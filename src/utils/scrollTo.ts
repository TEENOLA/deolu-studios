export function scrollToSection(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/**
 * Navigates to a section that lives on the home page, whether we're
 * already there or on a different route (e.g. /projects).
 * Following the team pattern: navigate() + setTimeout + scrollIntoView,
 * since the target element doesn't exist until the home page has mounted.
 */
export function goToHomeSection(
  href: string,
  currentPathname: string,
  navigate: (path: string) => void
) {
  if (currentPathname === '/') {
    scrollToSection(href)
    return
  }
  navigate('/' + href)
  setTimeout(() => scrollToSection(href), 100)
}
