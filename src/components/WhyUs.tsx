// src/components/WhyDeoluStudio.tsx
import { whyPillars } from "../data/whyUs";
import Reveal from "./Reveal";

export default function WhyDeoluStudio() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why deolustudio</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Why deolustudio?
          </h2>
          <p className="mt-4 text-mist-400">
            Because your website should be built around what your business needs
            — not what looks impressive in a portfolio.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {whyPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.id} delay={i * 100}>
                <div className="card-surface h-full p-8">
                  <div className="inline-flex rounded-xl bg-brand-gradient-soft p-3">
                    <Icon
                      size={22}
                      className="text-brand-blueLight"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-mist-50">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-400">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
