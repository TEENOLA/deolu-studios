import { whyUs } from "../data/whyUs";
import Reveal from "./Reveal";

export default function WhyUs() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why deolustudio</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Websites built with intention, not templates
          </h2>
          <p className="mt-4 text-mist-400">
            We're a small studio that treats every project like it's the only
            one — collaborative, detail-obsessed, and focused on results you can
            measure.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} delay={i * 80}>
                <div className="card-surface group h-full p-7 transition-all duration-300 hover:border-brand-blue/30 hover:bg-white/[0.035]">
                  <div className="inline-flex rounded-xl bg-brand-gradient-soft p-3">
                    <Icon
                      size={22}
                      className="text-brand-blueLight"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-mist-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">
                    {item.description}
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
