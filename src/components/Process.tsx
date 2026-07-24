import { processSteps } from '../data/process'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section id="process" className="section-pad relative bg-ink-900/40">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How We Work</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A clear process, start to finish
          </h2>
          <p className="mt-4 text-mist-400">
            No surprises, no guesswork — just a straightforward path from first
            conversation to a website that works for you.
          </p>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Connecting line for desktop */}
          <div
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
            aria-hidden="true"
          />

          {processSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal key={step.step} delay={i * 100}>
                <div className="relative flex flex-col items-start">
                  <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-white/10 bg-ink-800 shadow-card">
                    <Icon size={26} className="text-brand-blueLight" strokeWidth={1.75} />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-gradient font-mono text-[11px] font-semibold text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-mist-50">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">{step.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
