import { Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-violet opacity-[0.06] blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Client Results</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Trusted by growing businesses
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.id} delay={i * 90}>
              <figure className="card-surface flex h-full flex-col p-7">
                <Quote size={26} className="text-brand-violet/50" strokeWidth={1.5} />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-mist-200">
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading="lazy"
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient-soft font-display text-sm text-brand-blueLight">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-mist-50">{testimonial.name}</p>
                    <p className="text-xs text-mist-400">{testimonial.business}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
