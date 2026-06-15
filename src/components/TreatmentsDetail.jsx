import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  Zap,
  Syringe,
  Dna,
  Activity,
  Scale,
  Apple,
  FlaskConical,
  ArrowUpRight,
  ChevronDown,
  X,
} from "lucide-react";
import { BOOKING_URL, handleBookingClick } from "@/config";

const EASE = [0.22, 1, 0.36, 1];
const TX = [
  {
    id: "iv",
    short: "IV Therapy",
    name: "Signature IV Drips",
    cat: "Hydration / Recharge",
    eyebrow: "IV Therapy · Hydration / Recharge",
    tag: "Hydration & Recovery",
    icon: Droplets,
    tone: "a",
    price: "From $149",
    metaLabel: "Duration",
    metaValue: "30–45 min",
    cta: "Reserve IV drip",
    featLead:
      "A bespoke blend of fluids, electrolytes, vitamins, and antioxidants for rapid hydration and recovery.",
    lead: "A custom blend of fluids, electrolytes, vitamins, and antioxidants for rapid hydration and recovery. Pick an energy, immunity, beauty, or recovery formula, or build your own.",
    includedTitle: "What's included",
    included: [
      "Pre-drip wellness check with a provider",
      "Electrolyte + B-complex hydration base",
      "Energy, Immunity, Beauty or Recovery blend",
      "Add-ons: glutathione, B12, vitamin C, NAD+",
    ],
    bestFor: ["Dehydration", "Jet lag", "Post-workout", "Immune support", "Recovery"],
  },
  {
    id: "nad",
    short: "NAD+",
    name: "NAD+ Restoration",
    cat: "Cellular Energy",
    eyebrow: "NAD+ Restoration",
    tag: "Cellular Energy",
    icon: Zap,
    tone: "b",
    price: "From $399",
    metaLabel: "Duration",
    metaValue: "1–3 hrs",
    cta: "Reserve NAD+",
    lead: "NAD+ is the coenzyme your cells use for energy. Guided infusions support clarity, focus, and healthy aging, dosed gradually for comfort.",
    includedTitle: "What's included",
    included: [
      "Graded NAD+ dosing tailored to tolerance",
      "Comfort-paced infusion with monitoring",
      "Optional B-complex and amino add-ons",
      "Single sessions or multi-visit programs",
    ],
    bestFor: ["Brain fog", "Fatigue", "Focus", "Longevity", "Burnout recovery"],
  },
  {
    id: "inject",
    short: "Injections",
    name: "Vitamin Injections",
    cat: "Boosters",
    eyebrow: "Injections & Boosters",
    tag: "Boosters",
    icon: Syringe,
    tone: "a",
    price: "From $35",
    metaLabel: "Duration",
    metaValue: "10–15 min",
    cta: "Book an injection",
    lead: "Quick shots of B12, glutathione, or lipo (MIC) for energy, metabolism, and skin. In and out in minutes.",
    includedTitle: "The shot menu",
    included: [
      "B12 / B-complex for energy and focus",
      "Glutathione for skin and antioxidant support",
      "Lipo / MIC for metabolism",
      "Vitamin D, single shots or bundles",
    ],
    bestFor: ["Low energy", "Dull skin", "Metabolism", "On-the-go"],
  },
  {
    id: "peptide",
    short: "Peptides",
    name: "Peptide Consultations",
    cat: "GLP-1 & Peptides",
    eyebrow: "Peptide Consultations",
    tag: "GLP-1 & Peptides",
    icon: Dna,
    tone: "b",
    price: "From $99",
    metaLabel: "Consult",
    metaValue: "30 min",
    cta: "Book a consult",
    lead: "Physician-guided peptide protocols for recovery, metabolic, and wellness goals, built around your labs and history.",
    includedTitle: "What's included",
    included: [
      "Medical review of goals, history, and labs",
      "Personalized, physician-approved protocol",
      "Clear instructions and supply guidance",
      "Ongoing monitoring and adjustments",
    ],
    bestFor: ["Recovery", "Body composition", "Metabolic health", "Longevity"],
  },
  {
    id: "hormone",
    short: "Hormones",
    name: "Hormone Optimization",
    cat: "TRT & Balance",
    eyebrow: "Hormone Optimization",
    tag: "TRT & Balance",
    icon: Activity,
    tone: "a",
    price: "From $199",
    metaLabel: "Consult",
    metaValue: "45 min",
    cta: "Start with a consult",
    lead: "A full hormone evaluation and optimization plan to restore energy, focus, and performance. We test first, explain the numbers, then build your plan.",
    includedTitle: "What's included",
    included: [
      "Comprehensive hormone panel",
      "One-on-one results consultation",
      "Personalized TRT / HRT plan where appropriate",
      "Scheduled follow-up and monitoring",
    ],
    bestFor: ["Low energy", "Libido", "Mood", "Sleep", "Performance"],
  },
  {
    id: "weight",
    short: "Weight Loss",
    name: "Medical Weight Loss",
    cat: "Medical Weight Mgmt",
    eyebrow: "Weight Loss & Support",
    tag: "Medical Weight Mgmt",
    icon: Scale,
    tone: "b",
    price: "From $249/mo",
    metaLabel: "Program",
    metaValue: "Ongoing",
    cta: "Apply for the program",
    lead: "Physician-supervised programs combining GLP-1 options, nutrition, and labs, with real support at every check-in.",
    includedTitle: "What's included",
    included: [
      "Intake, labs, and eligibility review",
      "Medication management where appropriate",
      "Nutrition and lifestyle coaching",
      "Monthly check-ins and dose adjustments",
    ],
    bestFor: ["Sustainable weight loss", "Metabolic health", "Plateaus"],
  },
  {
    id: "nutrition",
    short: "Nutrition",
    name: "Nutrition Coaching",
    cat: "Fuel & Performance",
    eyebrow: "Nutrition",
    tag: "Fuel & Performance",
    icon: Apple,
    tone: "a",
    price: "From $129",
    metaLabel: "Session",
    metaValue: "45–60 min",
    cta: "Book a session",
    lead: "One-on-one nutrition guidance built around your labs and goals. No fad diets, just a plan you can keep.",
    includedTitle: "What's included",
    included: [
      "Lifestyle and dietary assessment",
      "Personalized plan with macro / micro targets",
      "Lab-informed recommendations",
      "Check-ins for accountability and tweaks",
    ],
    bestFor: ["Energy", "Body composition", "Gut health", "Performance"],
  },
  {
    id: "labs",
    short: "Labs",
    name: "Lab Testing & Panels",
    cat: "Diagnostics",
    eyebrow: "Comprehensive Lab Testing",
    tag: "Diagnostics",
    icon: FlaskConical,
    tone: "b",
    price: "From $179",
    metaLabel: "Results",
    metaValue: "2–5 days",
    cta: "Order a panel",
    lead: "In-depth bloodwork with a clear, physician-reviewed action plan. The foundation everything else is built on.",
    includedTitle: "Panels cover",
    included: [
      "Metabolic, thyroid, and inflammation markers",
      "Hormones and vitamin / nutrient levels",
      "Physician review of every result",
      "Written, prioritized action plan",
    ],
    bestFor: ["Baseline health", "Optimization", "Troubleshooting"],
  },
];

const pad = (i) => String(i + 1).padStart(2, "0");

/* ── Shared pieces ─────────────────────────────────────────────── */

function Medallion({ t, size = "md" }) {
  const Icon = t.icon;
  const dark = t.tone === "a";
  const dims = size === "sm" ? "h-40 w-40 md:h-44 md:w-44" : "h-44 w-44 md:h-52 md:w-52";
  return (
    <div className="flex justify-center md:block">
      <div
        className={`relative grid ${dims} place-items-center rounded-full ring-1 ring-black/5 ${
          dark ? "bg-brand-deep text-white" : "bg-gold text-brand-deep"
        }`}
      >
        <span className="absolute inset-3 rounded-full border border-white/15" />
        <Icon className="h-12 w-12" strokeWidth={1.2} />
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-ink-warm/70 ring-1 ring-ink-warm/10">
          {t.tag}
        </span>
      </div>
    </div>
  );
}

function Details({ t }) {
  return (
    <div className="mb-8 grid gap-6 sm:grid-cols-2 sm:gap-8">
      <div>
        <h4 className="mb-4 text-[10px] uppercase tracking-[0.22em] text-brand">
          {t.includedTitle}
        </h4>
        <ul className="space-y-2.5">
          {t.included.map((li) => (
            <li key={li} className="relative pl-5 text-sm leading-snug text-ink-warm/70">
              <span className="absolute left-0 top-[0.6em] h-px w-2.5 bg-gold" />
              {li}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="mb-4 text-[10px] uppercase tracking-[0.22em] text-brand">Best for</h4>
        <div className="flex flex-wrap gap-2">
          {t.bestFor.map((b) => (
            <span
              key={b}
              className="rounded-full border border-ink-warm/15 px-3 py-1.5 text-xs text-ink-warm/70 transition-colors hover:border-brand/50 hover:text-ink-warm"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stats({ t }) {
  return (
    <div className="mb-8 flex border-y border-ink-warm/10">
      <div className="py-4 pr-8">
        <p className="mb-1.5 text-[10px] uppercase tracking-[0.2em] text-ink-warm/40">Investment</p>
        <span className="font-serif text-xl text-ink-warm">{t.price}</span>
      </div>
      <div className="border-l border-ink-warm/10 px-8 py-4">
        <p className="mb-1.5 text-[10px] uppercase tracking-[0.2em] text-ink-warm/40">{t.metaLabel}</p>
        <span className="font-serif text-xl text-ink-warm">{t.metaValue}</span>
      </div>
    </div>
  );
}

function Cta({ label }) {
  return (
    <a
      href={BOOKING_URL}
      onClick={handleBookingClick}
      className="group inline-flex items-center justify-center gap-3 rounded-sm bg-brand-deep px-8 py-3.5 text-[10px] uppercase tracking-[0.3em] text-white transition-colors duration-500 hover:bg-brand"
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function PanelBody({ t, showHead = true }) {
  return (
    <div>
      <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-brand">{t.eyebrow}</p>
      {showHead && (
        <h3 className="mb-4 font-serif text-2xl font-light leading-[1.1] text-ink-warm md:text-3xl">
          {t.name}
        </h3>
      )}
      <p className="mb-7 max-w-[48ch] text-sm leading-relaxed text-ink-warm/65 md:text-[15px]">
        {t.lead}
      </p>
      <Details t={t} />
      <Stats t={t} />
      <Cta label={t.cta} />
    </div>
  );
}

/* ── Layout A · Explorer (list + panel) ────────────────────────── */

function Explorer() {
  const [active, setActive] = useState(0);
  const cur = TX[active];
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[330px_1fr] lg:gap-14">
      {/* Selector */}
      <div className="-mx-6 flex overflow-x-auto border-t border-ink-warm/10 px-6 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:sticky lg:top-24">
        {TX.map((t, i) => {
          const on = i === active;
          return (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`group flex shrink-0 items-center gap-4 py-4 text-left transition-colors lg:w-full lg:border-b lg:border-ink-warm/10 lg:py-5 ${
                on ? "text-ink-warm" : "text-ink-warm/60 hover:text-ink-warm"
              }`}
            >
              <span
                className={`text-[11px] tracking-wide transition-colors ${
                  on ? "text-brand" : "text-ink-warm/40 group-hover:text-brand"
                }`}
              >
                {pad(i)}
              </span>
              <span className="min-w-0 pr-6 lg:pr-0">
                <span className="block whitespace-nowrap font-serif text-lg leading-tight lg:whitespace-normal">
                  {t.short}
                </span>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-ink-warm/40">
                  {t.cat}
                </span>
              </span>
              <ArrowUpRight
                className={`ml-auto hidden h-4 w-4 text-brand transition-all lg:block ${
                  on ? "opacity-100" : "-translate-x-1 opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={cur.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="rounded-3xl border border-ink-warm/10 bg-cream/60 p-7 shadow-[0_40px_90px_-60px_rgba(62,17,25,0.5)] md:p-10 lg:p-12"
        >
          <div className="grid items-start gap-9 md:grid-cols-[210px_1fr] md:gap-10">
            <Medallion t={cur} />
            <PanelBody t={cur} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ── Layout B · Bento (grid + drawer) ──────────────────────────── */

function Bento() {
  const [openId, setOpenId] = useState(null);
  const cur = TX.find((t) => t.id === openId);

  useEffect(() => {
    document.body.style.overflow = openId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openId]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpenId(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="grid auto-rows-[168px] grid-cols-2 gap-3 md:auto-rows-[190px] md:gap-4 lg:grid-cols-4">
        {TX.map((t, i) => {
          const Icon = t.icon;
          const feature = i === 0;
          const wide = t.id === "peptide";
          return (
            <button
              key={t.id}
              onClick={() => setOpenId(t.id)}
              className={`group relative flex flex-col justify-between overflow-hidden border p-5 text-left transition-all duration-500 hover:-translate-y-1 ${
                feature
                  ? "col-span-2 row-span-2 border-transparent bg-brand-deep text-white"
                  : "border-ink-warm/10 bg-cream/60 hover:border-brand/40 hover:bg-white"
              } ${wide ? "col-span-2" : ""}`}
            >
              <span
                className={`grid h-11 w-11 place-items-center rounded-full ${
                  t.tone === "a" ? "bg-brand-deep text-white" : "bg-gold text-brand-deep"
                } ${feature ? "ring-1 ring-white/25" : ""}`}
              >
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>

              <div>
                <p
                  className={`text-[10px] uppercase tracking-[0.2em] ${
                    feature ? "text-gold" : "text-ink-warm/45"
                  }`}
                >
                  {t.cat}
                </p>
                <p
                  className={`font-serif leading-tight ${
                    feature ? "text-2xl text-white" : "text-lg text-ink-warm"
                  }`}
                >
                  {feature ? t.name : t.short}
                </p>
                {feature && (
                  <p className="mt-2 hidden max-w-[34ch] text-sm leading-relaxed text-white/70 md:block">
                    {t.featLead}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className={`font-serif ${feature ? "text-white" : "text-brand"}`}>
                  {t.price}
                </span>
                <span
                  className={`grid h-8 w-8 place-items-center rounded-full border transition-colors ${
                    feature
                      ? "border-white/30 text-white group-hover:bg-gold group-hover:text-brand-deep group-hover:border-gold"
                      : "border-ink-warm/15 text-brand group-hover:border-brand group-hover:bg-brand group-hover:text-white"
                  }`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {cur && (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setOpenId(null)}
              className="fixed inset-0 z-[100] bg-ink-warm/50 backdrop-blur-sm"
            />
            <motion.aside
              key="drawer"
              data-lenis-prevent
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="fixed right-0 top-0 z-[101] h-full w-full max-w-lg overflow-y-auto overscroll-contain bg-ivory shadow-[-50px_0_90px_-50px_rgba(44,42,38,0.5)]"
              role="dialog"
              aria-modal="true"
              aria-label={`${cur.name} details`}
            >
              <button
                onClick={() => setOpenId(null)}
                aria-label="Close"
                className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/80 text-ink-warm ring-1 ring-ink-warm/10 backdrop-blur transition-colors hover:bg-ink-warm hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div
                className={`relative grid h-52 place-items-center ${
                  cur.tone === "a" ? "bg-brand-deep text-white" : "bg-gold text-brand-deep"
                }`}
              >
                <cur.icon className="h-20 w-20" strokeWidth={1} />
                <span className="absolute bottom-5 left-6 rounded-full bg-black/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] backdrop-blur">
                  {cur.tag}
                </span>
              </div>

              <div className="px-7 py-9 md:px-10">
                <PanelBody t={cur} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Layout C · Stacked (accordion) ────────────────────────────── */

function Stacked() {
  const [open, setOpen] = useState(-1); // all collapsed by default
  return (
    <div className="mx-auto max-w-3xl border-t border-ink-warm/10">
      {TX.map((t, i) => {
        const on = i === open;
        return (
          <div key={t.id} className="border-b border-ink-warm/10">
            <button
              onClick={() => setOpen(on ? -1 : i)}
              className="group flex w-full items-center gap-5 py-6 text-left"
            >
              <span className="text-[11px] tracking-wide text-brand">{pad(i)}</span>
              <span className="min-w-0 flex-1">
                <span className="block font-serif text-xl leading-tight text-ink-warm md:text-2xl">
                  {t.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-ink-warm/40">
                  {t.cat}
                </span>
              </span>
              <span className="hidden font-serif text-brand sm:block">{t.price}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${
                  on ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {on && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="grid items-start gap-8 pb-9 md:grid-cols-[200px_1fr]">
                    <Medallion t={t} size="sm" />
                    <PanelBody t={t} showHead={false} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ── Layout switch (synced with Design Studio) ─────────────────── */

function readLayout() {
  if (typeof document === "undefined") return "explorer";
  return document.documentElement.getAttribute("data-tx-layout") || "explorer";
}

function useTxLayout() {
  const [layout, setLayout] = useState(readLayout);
  useEffect(() => {
    setLayout(readLayout());
    const onChange = (e) => setLayout(e.detail || readLayout());
    window.addEventListener("myjovirx-tx-layout", onChange);
    return () => window.removeEventListener("myjovirx-tx-layout", onChange);
  }, []);
  return layout;
}

export default function TreatmentsDetail() {
  const layout = useTxLayout();
  return (
    <section className="relative bg-ivory px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <span className="mb-6 block text-[9px] uppercase tracking-[0.5em] text-brand">
            The Full Menu
          </span>
          <h2 className="mb-6 font-serif text-3xl font-light leading-[1.1] text-ink-warm md:text-5xl">
            Explore our treatments
          </h2>
          <p className="text-sm font-light leading-relaxed text-ink-warm/60 md:text-base">
            Every protocol starts with an evaluation and ends with a clear plan.{" "}
            {layout === "bento"
              ? "Tap a tile for the full details."
              : "Pick a service for details and pricing."}
          </p>
        </div>

        {layout === "bento" ? <Bento /> : layout === "stacked" ? <Stacked /> : <Explorer />}
      </div>
    </section>
  );
}
