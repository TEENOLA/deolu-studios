import { ArrowRight, PlayCircle } from "lucide-react";
import { scrollToSection } from "../utils/scrollTo";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48 lg:pt-52"
    >
      {/* Ambient glow — kept subtle so it never washes out the text above it */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-gradient opacity-[0.05] blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-ink-950 via-ink-950/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center animate-fadeUp">
          <p className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/60 px-4 py-1.5 backdrop-blur-sm">
            For Businesses Ready to Grow Online
          </p>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turn Your Website Into a{" "}
            <span className="text-gradient">better business tool</span> for Your
            Business
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg">
            Your website should do more than look good. It should help potential
            customers understand what you offer, trust your business, and know
            exactly what to do next.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-primary w-full sm:w-auto"
            >
              Get a free website opportunity audit
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToSection("#portfolio")}
              className="btn-secondary w-full sm:w-auto"
            >
              <PlayCircle size={16} />
              View Our Work
            </button>
          </div>
        </div>

        {/* Signature: floating device stack showing responsive design in action */}
        <div className="relative mx-auto mt-24 h-[340px] max-w-4xl sm:h-[420px] lg:h-[480px]">
          {/* Desktop browser window */}
          <div className="absolute left-1/2 top-0 w-[88%] -translate-x-1/2 animate-float">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-800 shadow-card">
              <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-ink-700 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <div className="aspect-[16/9] bg-brand-gradient-soft p-6 sm:p-10">
                <div className="h-3 w-1/3 rounded-full bg-white/10" />
                <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="col-span-2 space-y-3 rounded-lg bg-white/[0.04] p-4">
                    <div className="h-2.5 w-3/4 rounded-full bg-white/15" />
                    <div className="h-2.5 w-1/2 rounded-full bg-white/10" />
                    <div className="mt-4 h-8 w-28 rounded-full bg-brand-gradient" />
                  </div>
                  <div className="rounded-lg bg-white/[0.04]" />
                </div>
              </div>
            </div>
          </div>

          {/* Tablet mockup */}
          <div className="absolute -left-2 bottom-2 w-[30%] rotate-[-8deg] animate-floatSlow sm:-left-4 sm:bottom-0">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-2 shadow-card">
              <div className="space-y-2.5 rounded-lg bg-brand-gradient-soft p-4">
                <div className="h-2 w-2/3 rounded-full bg-white/15" />
                <div className="h-14 rounded-md bg-white/[0.06]" />
                <div className="h-2 w-1/2 rounded-full bg-white/10" />
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="absolute -right-1 bottom-6 w-[18%] rotate-[9deg] animate-float sm:right-2 sm:bottom-2">
            <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-ink-800 p-1.5 shadow-card">
              <div className="space-y-2 rounded-xl bg-brand-gradient-soft p-3">
                <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
                <div className="h-16 rounded-md bg-white/[0.06]" />
                <div className="h-6 rounded-full bg-brand-gradient" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
