import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Seo from "./Seo";
import { SERVICES, getService } from "@/data/services";
import { BOOKING_URL, handleBookingClick } from "@/config";

// Service page template — the V2 "editorial" layout from
// MotionRx_Service_Pages.pdf: split hero, serif statement, image with
// "How it works" detail specs, detail table, benefits, explore more, CTA.
export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);

  // Unknown slug falls back to the Services landing.
  if (!service) return <Navigate to="/services" replace />;

  // Related pages come from the PDF's per-service "Explore More" picks,
  // falling back to the first three other services.
  const related = (
    service.explore?.map((s) => getService(s)).filter(Boolean) ||
    SERVICES.filter((s) => s.slug !== slug)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Seo
        title={`${service.name} | MotionRx`}
        description={service.promise}
        path={`/services/${service.slug}`}
      />

      {/* ───────── 1. SPLIT HERO ───────── */}
      <section className="grid lg:grid-cols-2">
        <div className="flex items-center bg-ivory px-6 pb-16 pt-36 md:px-14 lg:min-h-[80vh] lg:px-16 lg:pt-32">
          <FadeIn>
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-gold">
              {service.category}
            </p>
            <h1 className="max-w-md font-serif text-4xl font-medium leading-[1.08] text-ink md:text-5xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-espresso">
              {service.promise}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href={BOOKING_URL}
                onClick={handleBookingClick}
                className="inline-flex items-center gap-3 bg-ink px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-ink-warm"
              >
                {service.bookLabel}
              </a>
              <Link
                to="/memberships"
                className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-ink/70 transition-colors hover:text-brand"
              >
                View Pricing
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
          <img
            src={service.image}
            alt={service.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* ───────── 2. IMAGE + HOW IT WORKS SPECS ─────────
          50/50 split so its divider lines up vertically with the hero's.
          On mobile the text comes first (right after the hero photo); the
          photo drops below it. Desktop keeps image-left / text-right. */}
      <section className="grid bg-ivory lg:grid-cols-2">
        {/* Text is FIRST in the DOM, so on mobile it stacks right after the hero
            photo. On desktop it's pinned to the right column via explicit grid
            placement (not `order`, which wasn't reliably reordering). */}
        <div className="px-6 py-16 md:px-14 md:py-24 lg:col-start-2 lg:row-start-1 lg:px-16">
          <FadeIn>
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-espresso/70">
              How it works
            </p>
            <h2 className="max-w-sm font-serif text-2xl font-medium leading-snug text-ink md:text-3xl">
              {service.how.text}
            </h2>
          </FadeIn>
          <div className="mt-10 max-w-sm border-t-2 border-ink">
            {service.how.specs.map((spec) => (
              <FadeIn key={spec.label}>
                <div className="border-b border-ink/10 py-4">
                  <p className="mb-1 text-[11px] font-medium tracking-wide text-ink">
                    {spec.label}
                  </p>
                  <p className="text-sm text-espresso">{spec.value}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        {/* Image SECOND → below the text on mobile; left column on desktop. */}
        <div className="relative min-h-[320px] overflow-hidden lg:col-start-1 lg:row-start-1 lg:min-h-full">
          <img
            src={service.image2 || service.image}
            alt={`${service.name} at MotionRx`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* ───────── 4. DETAIL TABLE (continues the porcelain band) ───────── */}
      <section className="bg-ivory px-6 py-20 md:px-14 md:py-28 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
              {service.details.title}
            </h2>
          </FadeIn>
          <div className="mt-8 border-t-2 border-ink">
            {service.details.rows.map((row) => (
              <FadeIn key={row.term}>
                <div className="grid gap-1 border-b border-ink/10 py-5 sm:grid-cols-[220px_1fr] sm:gap-8">
                  <p className="font-serif text-base text-ink">{row.term}</p>
                  <p className="text-sm leading-relaxed text-espresso">
                    {row.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          {service.details.note && (
            <p className="mt-8 border-l-2 border-gold/50 pl-4 text-[13px] italic leading-relaxed text-espresso/70">
              {service.details.note}
            </p>
          )}
        </div>
      </section>

      {/* ───────── 5. BENEFITS (the warm linen band) ───────── */}
      <section className="bg-linen px-6 py-20 md:px-14 md:py-28 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-gold">
              {service.benefits.label}
            </p>
            <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
              {service.benefits.title}
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.items.map((b) => (
              <FadeIn key={b.title}>
                <div className="border-t border-ink/15 pt-5">
                  <h3 className="mb-2 font-serif text-base font-medium text-ink">
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-espresso">
                    {b.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 6. EXPLORE MORE ───────── */}
      <section className="bg-ivory px-6 py-20 md:px-14 md:py-24 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-10 text-[11px] uppercase tracking-[0.4em] text-espresso/70">
              Explore More
            </p>
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-3">
            {related.map((s) => (
              <FadeIn key={s.slug}>
                <Link to={`/services/${s.slug}`} className="group block">
                  <div className="aspect-4/3 overflow-hidden bg-mist">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="mt-4 flex items-center justify-between gap-3 border-b border-ink/25 pb-3">
                    <span className="font-serif text-base text-ink transition-colors group-hover:text-brand">
                      {s.name}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-ink/50 transition-all group-hover:translate-x-1 group-hover:text-brand" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 7. CTA ───────── */}
      <section className="bg-linen px-6 py-24 text-center md:py-32">
        <FadeIn>
          <h2 className="font-serif text-3xl font-medium leading-[1.2] text-ink md:text-4xl">
            Ready when you are
          </h2>
          <div className="mt-8">
            <a
              href={BOOKING_URL}
              onClick={handleBookingClick}
              className="inline-flex items-center gap-3 bg-ink px-9 py-4 text-[10px] uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-ink-warm"
            >
              Reserve Now
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
