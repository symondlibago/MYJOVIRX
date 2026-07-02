import React from "react";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Seo from "./Seo";
import { BOOKING_URL, handleBookingClick } from "@/config";

const UPCOMING = [
  {
    name: "Stem Cell Therapy",
    image: "/treatment-5.jpg",
    desc: "Regenerative medicine focused on orthopedic health, tissue repair, recovery, and healthy aging.",
  },
  {
    name: "EBO₂ Therapy",
    image: "/treatment-1.jpg",
    desc: "Extracorporeal blood oxygenation and ozonation, positioned to support circulation, detoxification, immune function, cellular health, recovery, and overall wellness.",
  },
];

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Seo
        title="Coming Soon | MotionRx"
        description="Stem Cell Therapy and EBO2 Therapy are launching Fall 2026 at MotionRx. Join the waitlist."
        path="/coming-soon"
      />

      {/* Header */}
      <section className="px-6 pb-14 pt-36 md:pt-44 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
              Launching Fall 2026
            </p>
            <h1 className="font-serif text-4xl font-medium leading-[1.08] text-ink md:text-6xl">
              Coming soon to MotionRx.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-espresso md:text-lg">
              Two new regenerative therapies are on the way. Join the waitlist to
              be the first to book when they open.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 pb-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {UPCOMING.map((u) => (
            <FadeIn key={u.name}>
              <div className="group overflow-hidden rounded-2xl border border-ink/10 bg-white">
                <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                  <img
                    src={u.image}
                    alt={u.name}
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-ivory/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-brand">
                    Fall 2026
                  </span>
                </div>
                <div className="p-8">
                  <h2 className="mb-3 font-serif text-2xl font-medium text-ink">
                    {u.name}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-espresso">
                    {u.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="relative overflow-hidden bg-brand-deep px-6 py-24 text-center md:py-32">
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
            Be First in Line
          </p>
          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-white md:text-5xl">
            Join the waitlist.
          </h2>
          <div className="mt-10">
            <a
              href={BOOKING_URL}
              onClick={handleBookingClick}
              className="group inline-flex items-center gap-3 bg-white px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-brand-deep transition-colors hover:bg-gold hover:text-white"
            >
              Join the Waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
