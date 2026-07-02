import React from "react";
import { ArrowRight } from "lucide-react";
import Seo from "./Seo";
import Testimonials from "./Testimonials";
import FadeIn from "@/components/ui/FadeIn";
import { BOOKING_URL, handleBookingClick } from "@/config";

// Patient Results page. Reuses the testimonial carousel.
export default function PatientResults() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Seo
        title="Patient Results | MotionRx"
        description="Real stories and results from MotionRx patients across longevity, performance, and recovery."
        path="/patient-results"
      />

      <section className="px-6 pb-10 pt-36 md:pt-44 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
              Patient Results
            </p>
            <h1 className="font-serif text-5xl font-medium leading-[1.05] text-ink md:text-7xl">
              Real people. Real results.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-espresso md:text-base">
              Stories from patients optimizing their energy, performance, and
              long-term health with MotionRx.
            </p>
          </FadeIn>
        </div>
      </section>

      <Testimonials />

      <section className="px-6 pb-24 lg:px-12">
        <p className="mx-auto max-w-6xl text-[12px] leading-relaxed text-espresso/50">
          Images shown are placeholders. Real patient photos and stories will be
          added with written consent.
        </p>
      </section>

      {/* CTA */}
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
          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-white md:text-5xl">
            Your results start with a consult.
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
