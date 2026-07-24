import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '../utils/scrollTo'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-16 text-center sm:px-16 sm:py-20">
            <div
              className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-black/10 blur-3xl"
              aria-hidden="true"
            />
            <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to Build a Website That Works for Your Business?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/85">
              Let's talk about your goals and put together a plan to get your
              business online with a site you're proud of.
            </p>
            <button
              onClick={() => scrollToSection('#contact')}
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-[1.03]"
            >
              Let's Talk
              <ArrowRight size={16} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
