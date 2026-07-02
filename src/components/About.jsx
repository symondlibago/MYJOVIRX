import React from "react";
import { ArrowRight, Microscope, Activity, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Seo from "./Seo";
import { BOOKING_URL, handleBookingClick } from "@/config";

const values = [
  {
    icon: Microscope,
    title: "Precision & Data",
    description:
      "Advanced diagnostics and biomarkers guide every plan, so decisions are based on your numbers.",
  },
  {
    icon: Activity,
    title: "Proactive Care",
    description:
      "We focus on prevention and optimization, not just treating symptoms after they appear.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Based",
    description:
      "Physician-guided protocols grounded in clinical research and delivered by licensed professionals.",
  },
];

const team = [
  { name: "Camron Love", credentials: "MSN, RN, CCRN", image: "/team-camron.jpg" },
  { name: "Laura Le", credentials: "MSN, RN, CEN", image: "/team-laura.jpg" },
  { name: "Tori Cathcart", credentials: "BSN, RN", image: "/team-tori.jpg" },
  { name: "Kathy Pak", credentials: "BSN, RN", image: "/team-kathy.jpg" },
  { name: "Taylor Mortis", credentials: "BSN, RN", image: "/team-taylor.jpg" },
  { name: "Joy-Li Van Pala", credentials: "BSN, RN", image: "/team-joy.jpg" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Seo
        title="About MotionRx | Longevity & Performance Medicine"
        description="MotionRx is a modern medical practice focused on longevity, preventative medicine, regenerative therapies, and human performance. Meet our medical director and team."
        path="/about"
      />

      {/* Hero */}
      <section className="px-6 pb-16 pt-36 md:pb-20 md:pt-44 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
              About MotionRx
            </p>
            <h1 className="font-serif text-4xl font-medium leading-[1.08] text-ink md:text-6xl">
              Where modern medicine meets human performance.
            </h1>
            <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-espresso md:text-lg">
              MotionRx is a modern medical practice focused on longevity,
              preventative medicine, regenerative therapies, and human
              performance optimization. We are not a med spa or a traditional
              primary care office.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission + values */}
      <section className="bg-cream px-6 py-20 md:py-28 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-brand">
                Why MotionRx
              </p>
              <p className="text-lg leading-relaxed text-espresso md:text-xl">
                We combine advanced diagnostics, personalized treatment plans,
                regenerative therapies, and evidence-based medicine to help
                patients move better, feel stronger, think clearer, and live
                longer. Our approach is proactive rather than reactive, focused
                on prevention, optimization, and helping you take control of
                your long-term health.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
            {values.map((v) => (
              <FadeIn key={v.title}>
                <div className="flex h-full flex-col bg-cream p-8 md:p-10">
                  <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <v.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mb-2 font-serif text-lg font-medium text-ink">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-espresso">
                    {v.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Director */}
      <section className="px-6 py-20 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src="/dr-scott.jpg"
                alt="Dr. Courtney S. Scott, Medical Director"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="max-w-xl">
              <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
                Medical Director
              </p>
              <h2 className="mb-6 font-serif text-4xl font-medium leading-tight text-ink md:text-5xl">
                Dr. Courtney S. Scott
              </h2>
              <p className="mb-5 text-[15px] leading-relaxed text-espresso md:text-base">
                Dr. Scott leads MotionRx with a practice focused on prevention,
                precision diagnostics, and longevity medicine.
              </p>
              <p className="text-[15px] leading-relaxed text-espresso md:text-base">
                His approach pairs advanced diagnostics with regenerative and
                performance therapies, building each plan around measurable,
                long-term health.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Medical team */}
      <section className="bg-cream px-6 py-20 md:py-28 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
              <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
                The Team
              </p>
              <h2 className="mb-5 font-serif text-4xl font-medium text-ink md:text-5xl">
                Meet the Medical Team
              </h2>
              <p className="text-[15px] leading-relaxed text-espresso">
                Experienced, licensed clinicians who guide every plan and visit.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:gap-x-10 lg:grid-cols-3">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={(index % 3) * 0.1}>
                <div className="group">
                  <div className="mb-5 aspect-[4/5] overflow-hidden rounded-xl bg-mist">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.credentials}`}
                      className="h-full w-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-2xl text-ink">{member.name}</h3>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.3em] text-brand">
                    {member.credentials}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Standard band */}
      <section className="px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="border-y border-ink/10 py-16">
              <p className="mb-12 text-center text-[10px] uppercase tracking-[0.5em] text-brand">
                Our Standard
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 text-ink/70">
                <span className="font-serif text-2xl uppercase tracking-tight">Licensed</span>
                <span className="font-serif text-2xl uppercase tracking-tight">Evidence-Based</span>
                <span className="font-serif text-2xl uppercase tracking-tight">Personalized</span>
                <span className="font-serif text-2xl uppercase tracking-tight">Confidential</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-deep px-6 py-28 text-center md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 90% at 50% 0%, rgb(var(--brand-rgb) / 0.55), transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
            Get Started
          </p>
          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-white md:text-5xl">
            Take control of your long-term health.
          </h2>
          <div className="mt-10">
            <a
              href={BOOKING_URL}
              onClick={handleBookingClick}
              className="group inline-flex items-center gap-3 bg-white px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-brand-deep transition-colors hover:bg-gold hover:text-white"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
