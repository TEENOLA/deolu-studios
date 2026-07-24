import { useMemo, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects, type ProjectCategory } from '../data/projects'

const categories: Array<ProjectCategory | 'All'> = [
  'All',
  'Business',
  'Landing Pages',
  'E-commerce',
  'Portfolio',
  'Web Apps',
]

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <Navbar />
      <main className="pt-32 sm:pt-36">
        <section className="section-pad relative pt-0">
          <div className="container-page">
            <Reveal>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-mist-400 transition-colors hover:text-white"
              >
                <ArrowLeft size={15} />
                Back to home
              </Link>
            </Reveal>

            <Reveal delay={60} className="mx-auto mt-8 max-w-2xl text-center">
              <p className="eyebrow">The Full Catalog</p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Every project we've shipped
              </h1>
              <p className="mt-4 text-mist-400">
                Browse by category to see how we approach different kinds of
                businesses and goals.
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-10 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'border-transparent bg-brand-gradient text-white shadow-glow'
                      : 'border-white/10 bg-white/[0.02] text-mist-300 hover:border-white/25 hover:text-mist-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, i) => (
                <Reveal key={project.id} delay={(i % 3) * 90}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <p className="mt-16 text-center text-mist-400">
                No projects in this category yet — check back soon.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
