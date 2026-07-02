import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Seo from "./Seo";
import { SERVICES, getService } from "@/data/services";
import { BOOKING_URL, handleBookingClick } from "@/config";

// Reusable template rendering a single service by its URL slug.
export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);

  // Unknown slug falls back to the Services landing.
  if (!service) return <Navigate to="/services" replace />;

  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Seo
        title={`${service.name} | MotionRx`}
        description={service.promise}
        path={`/services/${service.slug}`}
      />

      {/* Hero */}
      <section className="relative flex min-h-[56vh] items-end overflow-hidden pb-14 pt-32 md:min-h-[62vh] md:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/45" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 lg:px-12">
          <FadeIn>
            <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">
              {service.category}
            </p>
            <h1 className="font-serif text-4xl font-medium leading-tight text-white md:text-6xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/80 md:text-base">
              {service.promise}
            </p>
            <a
              href={BOOKING_URL}
              onClick={handleBookingClick}
              className="group mt-8 inline-flex items-center gap-3 bg-brand px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-white transition-colors hover:bg-brand-deep"
            >
              {service.bookLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 py-20 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Main column */}
          <div className="lg:col-span-2">
            <FadeIn>
              <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-brand">
                Overview
              </p>
              {service.overview.map((p, i) => (
                <p
                  key={i}
                  className="mb-5 text-[15px] leading-relaxed text-espresso md:text-base"
                >
                  {p}
                </p>
              ))}
            </FadeIn>

            {service.included && (
              <FadeIn>
                <h2 className="mb-6 mt-12 font-serif text-2xl font-medium text-ink md:text-3xl">
                  {service.included.title}
                </h2>
                <ul className="space-y-3">
                  {service.included.items.map((it) => (
                    <li
                      key={it}
                      className="flex gap-3 text-[15px] leading-relaxed text-espresso"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}

            {service.bullets && (
              <FadeIn>
                <h2 className="mb-6 mt-12 font-serif text-2xl font-medium text-ink md:text-3xl">
                  Paired with
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((it) => (
                    <li key={it} className="flex gap-3 text-[15px] text-espresso">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}

            {service.note && (
              <p className="mt-10 border-l-2 border-gold/50 pl-4 text-[13px] italic leading-relaxed text-espresso/70">
                {service.note}
              </p>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-8">
              {service.pricing && (
                <>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-ink/40">
                    Investment
                  </p>
                  <p className="mb-6 font-serif text-2xl text-ink">
                    {service.pricing}
                  </p>
                </>
              )}
              <p className="mb-6 text-sm leading-relaxed text-espresso">
                Every plan starts with a consultation to map your goals and build
                a protocol around them.
              </p>
              <a
                href={BOOKING_URL}
                onClick={handleBookingClick}
                className="group flex items-center justify-center gap-3 bg-brand px-6 py-4 text-[11px] uppercase tracking-[0.25em] text-white transition-colors hover:bg-brand-deep"
              >
                {service.bookLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-cream px-6 py-20 md:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-[11px] uppercase tracking-[0.4em] text-brand">
            Explore more
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group relative block overflow-hidden rounded-xl bg-mist"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-gold">
                      {s.category}
                    </p>
                    <h3 className="font-serif text-lg font-medium text-white">
                      {s.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="mb-1 h-5 w-5 shrink-0 text-white/80 transition-transform group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
