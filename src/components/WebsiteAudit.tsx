import { auditCriteria } from "../data/auditCriteria";
import Reveal from "./Reveal";

export default function WebsiteAudit() {
  return (
    <section id="audit" className="section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-[0.04] blur-[130px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Before We Build Anything</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Your Website Might Be{" "}
            <span className="text-gradient">Costing You Opportunities</span>
          </h2>
          <p className="mt-5 text-mist-400">
            Getting someone to your website is only half the job. If visitors
            can't quickly understand what you do, why they should trust you, or
            what they should do next, there's a good chance they'll leave
            without taking action.
          </p>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-14 max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-mist-300">
            We look at the things that matter:
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {auditCriteria.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} delay={100 + i * 80}>
                <div className="card-surface flex h-full items-start gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft">
                    <Icon
                      size={20}
                      className="text-brand-blueLight"
                      strokeWidth={1.75}
                    />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-mist-50">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist-400">
                      {item.question}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={450} className="mx-auto mt-16 max-w-xl text-center">
          <p className="font-display text-xl font-semibold leading-snug text-mist-50 sm:text-2xl">
            Your website doesn't need to do everything.{" "}
            <span className="text-gradient">
              It needs to do the right things well.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
