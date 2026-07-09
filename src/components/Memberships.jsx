import React from "react";
import { BOOKING_URL, handleBookingClick } from "@/config";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

/**
 * Membership & subscription plans, restyled to the editorial brand-layout
 * direction: hairline rules instead of cards, serif pricing, ink buttons.
 * Pricing shown as ranges per the content guide (no separate pricing page).
 * Final tiers/inclusions are pending client confirmation before launch.
 */
const PLANS = [
  {
    name: "IV, Peptide & Injection Subscriptions",
    price: "From $99",
    cadence: "/mo",
    blurb:
      "Recurring IV drips, peptide protocols, and vitamin injections with member pricing.",
  },
  {
    name: "Injectable Shots",
    price: "From $99",
    cadence: "/mo",
    blurb:
      "B12, Vitamin D, NAD, MIC, Glutathione, and BPC 157. Purchase individually or as a monthly package.",
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
    price: "$149 to $999",
    cadence: "",
    blurb: "Advanced lab panels available individually or bundled into your care plan.",
  },
];

export default function Memberships() {
  return (
    <section className="bg-ivory px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
            Memberships &amp; Subscriptions
          </p>
          <h2 className="max-w-2xl font-serif text-3xl font-medium leading-[1.15] text-ink md:text-5xl">
            Ongoing Care, Made Simple
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-espresso md:text-base">
            Membership plans for patients who want consistent care, preferred
            pricing, priority booking, and ongoing support. Pause or change
            anytime.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <FadeIn key={p.name}>
              <div
                className={`flex h-full flex-col pt-6 ${
                  p.featured
                    ? "border-t-2 border-ink"
                    : "border-t border-ink/15"
                }`}
              >
                {p.featured ? (
                  <span className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gold">
                    Most Popular
                  </span>
                ) : (
                  <span className="mb-4 block text-[10px]">&nbsp;</span>
                )}

                <h3 className="font-serif text-lg font-medium leading-snug text-ink">
                  {p.name}
                </h3>

                <div className="mb-5 mt-5 flex items-end gap-1">
                  <span className="font-serif text-3xl leading-none text-ink">
                    {p.price}
                  </span>
                  {p.cadence && (
                    <span className="pb-0.5 text-sm text-espresso/60">
                      {p.cadence}
                    </span>
                  )}
                </div>

                <p className="mb-9 text-sm leading-relaxed text-espresso">
                  {p.blurb}
                </p>

                <a
                  href={BOOKING_URL}
                  onClick={handleBookingClick}
                  className={`group mt-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[10px] uppercase tracking-[0.28em] transition-colors duration-300 ${
                    p.featured
                      ? "bg-ink text-ivory hover:bg-ink-warm"
                      : "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-ivory"
                  }`}
                >
                  Get Started
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-14 border-l-2 border-gold/50 pl-4 text-[13px] italic leading-relaxed text-espresso/70">
          Final pricing and plan details are confirmed during your
          consultation. Memberships can be paused or changed anytime.
        </p>
      </div>
    </section>
  );
}
