import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Seo from "./Seo";
import { SERVICES } from "@/data/services";

// Services landing — gallery of every service, each linking to its own page.
export default function Services() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Seo
        title="Services | MotionRx"
        description="Explore MotionRx services: IV nutrient therapy, hormone and peptide therapy, medical weight optimization, lab testing, longevity medicine, and more in Costa Mesa, CA."
        path="/services"
      />

      {/* Header */}
      <section className="px-6 pb-16 pt-36 md:pb-20 md:pt-44 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
              What We Offer
            </p>
            <h1 className="font-serif text-5xl font-medium leading-[1.05] text-ink md:text-7xl">
              Services
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-espresso md:text-base">
              Modern medicine, longevity, and human performance. Each service is
              physician-guided and built around your goals and diagnostics.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-28 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <FadeIn key={s.slug}>
              <Link
                to={`/services/${s.slug}`}
                className="group relative block overflow-hidden rounded-xl bg-mist"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="mb-1.5 text-[10px] uppercase tracking-[0.3em] text-gold">
                    {s.category}
                  </p>
                  <div className="flex items-end justify-between gap-3">
                    <h2 className="font-serif text-xl font-medium leading-tight text-white">
                      {s.name}
                    </h2>
                    <ArrowUpRight className="mb-0.5 h-5 w-5 shrink-0 text-white/80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
