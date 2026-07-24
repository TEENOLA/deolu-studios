import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/services'
import { scrollToSection } from '../utils/scrollTo'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="section-pad relative bg-ink-900/40">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Services built around your growth
          </h2>
          <p className="mt-4 text-mist-400">
            From a first website to an ongoing partnership, here's how we help
            businesses show up online with confidence.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id} delay={i * 70}>
                <div className="card-surface group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/30">
                  <div className="inline-flex w-fit rounded-xl bg-brand-gradient-soft p-3">
                    <Icon size={22} className="text-brand-blueLight" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-mist-50">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-400">
                    {service.description}
                  </p>
                  <button
                    onClick={() => scrollToSection(service.learnMoreHref)}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blueLight transition-colors hover:text-brand-violet"
                  >
                    Learn more
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
