import React from "react";
import { BOOKING_URL, handleBookingClick } from "@/config";
import { ArrowUpRight } from "lucide-react";

/**
 * Membership tiers for the Treatments page. Themeable via site tokens
 * (brand / brand-deep / gold / ivory). The middle tier is the featured one.
 */
const TIERS = [
  {
    name: "Recharge",
    price: "$99",
    cadence: "/mo",
    blurb: "The easy entry point for regulars.",
    perks: [
      "One vitamin injection each month",
      "10% off all IV drips",
      "Member pricing on add-ons",
    ],
    muted: ["NAD+ & premium drips", "Quarterly lab review"],
  },
  {
    name: "Performance",
    price: "$249",
    cadence: "/mo",
    blurb: "For those optimizing on a schedule.",
    flag: "Most chosen",
    featured: true,
    perks: [
      "Two IV drips or one drip + NAD+ add-on",
      "One vitamin injection each month",
      "Quarterly lab check-in",
      "15% off everything else",
      "Priority booking",
    ],
  },
  {
    name: "Concierge",
    price: "$499",
    cadence: "/mo",
    blurb: "Full-service optimization, handled.",
    perks: [
      "Unlimited vitamin injections",
      "Two premium drips each month",
      "Biannual full lab panels",
      "Hormone & peptide monitoring",
      "20% off & first-priority booking",
    ],
  },
];

export default function Memberships() {
  return (
    <section className="bg-sand/60 px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
            Memberships
          </p>
          <h2 className="mb-5 font-serif text-3xl font-light leading-[1.1] text-ink-warm md:text-5xl">
            Stay consistent. Save every visit.
          </h2>
          <p className="text-sm leading-relaxed text-ink-warm/60 md:text-base">
            Members get priority booking, standing discounts, and treatments
            bundled at a lower monthly rate. Pause or change tiers anytime.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-0 md:divide-x md:divide-ink-warm/10 md:rounded-3xl md:border md:border-ink-warm/10 md:bg-white/40">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl p-8 md:rounded-none md:p-10 ${
                t.featured
                  ? "bg-brand-deep text-white shadow-[0_40px_90px_-50px_rgba(0,0,0,0.6)] md:rounded-3xl"
                  : "border border-ink-warm/10 bg-white md:border-0"
              }`}
            >
              {t.flag && (
                <span className="absolute right-6 top-6 text-[10px] uppercase tracking-[0.22em] text-gold">
                  ● {t.flag}
                </span>
              )}

              <h3
                className={`font-serif text-2xl ${
                  t.featured ? "text-white" : "text-ink-warm"
                }`}
              >
                {t.name}
              </h3>

              <div className="mb-2 mt-4 flex items-end gap-1">
                <span
                  className={`font-serif text-5xl leading-none ${
                    t.featured ? "text-white" : "text-ink-warm"
                  }`}
                >
                  {t.price}
                </span>
                <span
                  className={`pb-1 text-sm ${
                    t.featured ? "text-white/55" : "text-ink-warm/45"
                  }`}
                >
                  {t.cadence}
                </span>
              </div>

              <p
                className={`mb-7 text-sm ${
                  t.featured ? "text-white/65" : "text-ink-warm/55"
                }`}
              >
                {t.blurb}
              </p>

              <ul
                className={`mb-9 space-y-3 border-t pt-7 ${
                  t.featured ? "border-white/15" : "border-ink-warm/10"
                }`}
              >
                {t.perks.map((p) => (
                  <li
                    key={p}
                    className={`relative pl-5 text-sm leading-snug ${
                      t.featured ? "text-white/80" : "text-ink-warm/70"
                    }`}
                  >
                    <span className="absolute left-0 top-[0.6em] h-px w-2.5 bg-gold" />
                    {p}
                  </li>
                ))}
                {t.muted?.map((p) => (
                  <li
                    key={p}
                    className="relative pl-5 text-sm leading-snug text-ink-warm/30 line-through"
                  >
                    <span className="absolute left-0 top-[0.6em] h-px w-2.5 bg-ink-warm/20" />
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href={BOOKING_URL}
                onClick={handleBookingClick}
                className={`group mt-auto inline-flex items-center justify-center gap-3 rounded-sm px-7 py-3.5 text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 ${
                  t.featured
                    ? "bg-gold text-brand-deep hover:bg-white"
                    : "bg-brand-deep text-white hover:bg-brand"
                }`}
              >
                Choose {t.name}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
