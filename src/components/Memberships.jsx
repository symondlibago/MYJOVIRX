import React from "react";
import { BOOKING_URL, handleBookingClick } from "@/config";
import { ArrowUpRight } from "lucide-react";

/**
 * Membership & subscription plans. Pricing shown as ranges per the content
 * guide (no separate pricing page). Final tiers/inclusions are pending client
 * confirmation before launch.
 */
const PLANS = [
  {
    name: "IV, Peptide & Injection Subscriptions",
    price: "From $99",
    cadence: "/mo",
    blurb:
      "Recurring IV drips, peptide protocols, and vitamin injections at member pricing.",
  },
  {
    name: "Injectable Shots",
    price: "From $99",
    cadence: "/mo",
    blurb:
      "B12, Vitamin D, NAD, MIC, Glutathione, and BPC-157. Buy individually with no commitment, or as a monthly package.",
  },
  {
    name: "TRT / HRT Membership",
    price: "From $199",
    cadence: "/mo",
    blurb:
      "Ongoing hormone optimization with lab monitoring and dose adjustments.",
    featured: true,
  },
  {
    name: "Laboratory Testing",
    price: "$149–$999",
    cadence: "",
    blurb: "Advanced panels a la carte, or bundled into any plan.",
  },
];

export default function Memberships() {
  return (
    <section className="bg-cream px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
            Memberships &amp; Subscriptions
          </p>
          <h2 className="mb-5 font-serif text-3xl font-medium leading-[1.12] text-ink md:text-5xl">
            Ongoing care, without the one-off booking.
          </h2>
          <p className="text-[15px] leading-relaxed text-espresso md:text-base">
            Recurring plans for patients who want continuous optimization.
            Member pricing, priority booking, and monitoring built in. Pause or
            change anytime.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                p.featured
                  ? "bg-brand-deep text-white shadow-[0_40px_90px_-50px_rgba(0,0,0,0.6)]"
                  : "border border-ink/10 bg-white"
              }`}
            >
              {p.featured && (
                <span className="absolute right-6 top-6 text-[10px] uppercase tracking-[0.22em] text-gold">
                  ● Popular
                </span>
              )}

              <h3
                className={`font-serif text-lg font-medium leading-snug ${
                  p.featured ? "text-white" : "text-ink"
                }`}
              >
                {p.name}
              </h3>

              <div className="mb-5 mt-4 flex items-end gap-1">
                <span
                  className={`font-serif text-3xl leading-none ${
                    p.featured ? "text-white" : "text-ink"
                  }`}
                >
                  {p.price}
                </span>
                {p.cadence && (
                  <span
                    className={`pb-1 text-sm ${
                      p.featured ? "text-white/55" : "text-ink/45"
                    }`}
                  >
                    {p.cadence}
                  </span>
                )}
              </div>

              <p
                className={`mb-8 text-sm leading-relaxed ${
                  p.featured ? "text-white/70" : "text-espresso"
                }`}
              >
                {p.blurb}
              </p>

              <a
                href={BOOKING_URL}
                onClick={handleBookingClick}
                className={`group mt-auto inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[10px] uppercase tracking-[0.28em] transition-colors duration-500 ${
                  p.featured
                    ? "bg-gold text-brand-deep hover:bg-white"
                    : "bg-brand-deep text-white hover:bg-brand"
                }`}
              >
                Get Started
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
