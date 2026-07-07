import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse, Leaf, Plus } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Seo from "./Seo";
import { SERVICES } from "@/data/services";
import { BOOKING_URL, handleBookingClick } from "@/config";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// ── Content mirrors MotionRx_Website_Layout.pdf page 3 (Treatments · "The menu") ──

const experienceFeatures = [
  {
    icon: HeartPulse,
    title: "Health-led",
    desc: "Guided by our medical director.",
  },
  {
    icon: Leaf,
    title: "Tranquil",
    desc: "A calm space to fully unwind.",
  },
  {
    icon: Plus,
    title: "Physician-guided",
    desc: "Every treatment, overseen.",
  },
];

const guestStories = [
  {
    image: "/portrait-white-dress.jpg",
    quote: "Clearer, lighter, and genuinely rested",
    name: "Maya R.",
    treatment: "Immunity Drip",
  },
  {
    image: "/portrait-blue-tee.jpg",
    quote: "Medical, without ever feeling clinical",
    name: "David L.",
    treatment: "NAD+ Infusion",
  },
  {
    image: "/portrait-cap.jpg",
    quote: "Back to training the next morning",
    name: "Chris B.",
    treatment: "Performance Drip",
  },
  {
    image: "/portrait-book.jpg",
    quote: "The easiest hour of my week",
    name: "Marcus W.",
    treatment: "Recovery Drip",
  },
];

const pressCards = [
  {
    source: "Irvine Weekly",
    quote:
      "Reframes the drip bar as something quieter and more considered — you leave genuinely restored.",
  },
  {
    source: "Locale OC",
    quote:
      "Laguna Hills' most refined take on IV wellness — minimal, medical, and unmistakably calm.",
  },
];

const faqs = [
  {
    q: "What is IV therapy?",
    a: "Fluids, vitamins, and antioxidants delivered straight into your bloodstream, for fast hydration, energy, and recovery.",
  },
  {
    q: "Do I need a consultation first?",
    a: "Yes. A quick intake lets a provider confirm the right protocol for you, often done virtually before your visit.",
  },
  {
    q: "How long does a treatment take?",
    a: "Most drips take 30–45 minutes. NAD+ and specialty therapies run slower for comfort, about 60–90 minutes.",
  },
  {
    q: "Is there anything I should do before my appointment?",
    a: "Arrive hydrated, eat a light meal, and wear something with easy access to your arm. We'll handle the rest.",
  },
  {
    q: "How much do treatments cost?",
    a: "Signature drips start at $149, with memberships and packages available. Transparent pricing, no hidden fees.",
  },
  {
    q: "Where are you located and is there parking?",
    a: "Costa Mesa, with free on-site parking, serving all of Orange County. Telehealth is available statewide.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Services() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Seo
        title="Treatments | MotionRx"
        description="The MotionRx menu: a full spectrum of infusions, injections, and physician-guided therapies — IV nutrient therapy, peptides, NAD+, hormone optimization, lab testing, and more."
        path="/services"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ───────── 1. HEADER ───────── */}
      <section className="px-6 pb-16 pt-36 md:pb-20 md:pt-44 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-gold">
              Treatments
            </p>
            <h1 className="font-serif text-5xl font-medium leading-[1.05] text-ink md:text-7xl">
              The menu
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-espresso md:text-base">
              A full spectrum of infusions, injections, and physician-guided
              therapies, each built around how you want to feel. Every
              treatment follows a short intake and is overseen by our medical
              team.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ───────── 2. THE EXPERIENCE (full-bleed band) ───────── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/lounge-wide.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/40" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-12">
          <FadeIn>
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-white/70">
              The Experience
            </p>
            <h2 className="max-w-xl font-serif text-3xl font-medium leading-[1.12] text-white md:text-5xl">
              Calm care. Clear results
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75">
              A botanical, light-filled lounge where every infusion is overseen
              by our medical team.
            </p>
          </FadeIn>
          <div className="mt-14 grid max-w-3xl gap-8 sm:grid-cols-3">
            {experienceFeatures.map((f) => (
              <FadeIn key={f.title}>
                <div className="border-t border-white/20 pt-5">
                  <f.icon className="mb-3 h-5 w-5 text-white/80" strokeWidth={1.6} />
                  <h3 className="mb-1 font-serif text-base font-medium text-white">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/65">
                    {f.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 3. FEATURED SERVICES (numbered list) ───────── */}
      <section className="bg-ivory px-6 py-24 md:py-32 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-gold">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl font-medium leading-[1.15] text-ink md:text-5xl">
              Featured Services
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-espresso">
              A full spectrum of physician-guided care — from a single drip to
              ongoing optimization.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-x-16 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex items-baseline gap-6 border-b border-ink/10 py-5"
                >
                  <span className="text-[11px] tabular-nums tracking-[0.2em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-1 items-center justify-between gap-4">
                    <span className="font-serif text-lg text-ink transition-colors group-hover:text-brand md:text-xl">
                      {s.name}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-brand" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 4. GUEST STORIES ───────── */}
      <section className="bg-ivory px-6 py-24 md:py-32 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-gold">
              In Their Words
            </p>
            <h2 className="font-serif text-3xl font-medium leading-[1.15] text-ink md:text-5xl">
              Guest stories
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guestStories.map((g) => (
              <FadeIn key={g.name}>
                <figure className="group relative overflow-hidden bg-mist">
                  <div className="aspect-[3/4]">
                    <img
                      src={g.image}
                      alt={`${g.name} — ${g.treatment}`}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <span className="mb-2 block font-serif text-2xl leading-none text-gold">
                      &ldquo;
                    </span>
                    <blockquote className="font-serif text-lg leading-snug text-white">
                      {g.quote}
                    </blockquote>
                    <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/65">
                      {g.name} · {g.treatment}
                    </p>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 5. PRESS · FEATURED IN ───────── */}
      <section className="bg-ivory px-6 py-24 md:py-32 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-8 text-[11px] uppercase tracking-[0.4em] text-gold">
              Press
            </p>
            <h2 className="font-serif text-3xl font-medium leading-[1.15] text-ink md:text-5xl">
              Featured in
            </h2>
          </FadeIn>

          <FadeIn>
            <figure className="mt-12 border-t border-ink/10 pt-10">
              <blockquote className="max-w-3xl font-serif text-2xl leading-snug text-ink md:text-4xl">
                &ldquo;A calm, clinical sanctuary where evidence-based care
                meets the simple art of feeling well.&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-[10px] uppercase tracking-[0.35em] text-espresso/70">
                The Cali Post
              </figcaption>
              <span className="mt-5 inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-[11px] uppercase tracking-[0.25em] text-ink/70">
                Read the Feature
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </figure>
          </FadeIn>

          <div className="mt-14 grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-2">
            {pressCards.map((p) => (
              <FadeIn key={p.source}>
                <div>
                  <h3 className="mb-3 font-serif text-xl text-ink">
                    {p.source}
                  </h3>
                  <p className="text-sm leading-relaxed text-espresso">
                    &ldquo;{p.quote}&rdquo;
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-[11px] uppercase tracking-[0.25em] text-ink/70">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 6. FREQUENTLY ASKED ───────── */}
      <section className="bg-ivory px-6 py-24 md:py-32 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeIn direction="left">
              <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-gold">
                Questions
              </p>
              <h2 className="font-serif text-4xl leading-[1.08] text-ink md:text-5xl">
                Frequently
                <br />
                <span className="text-gold">Asked</span>
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-espresso">
                Everything you need to know before your first visit. Still have
                a question? Our team is happy to help.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 border-b border-ink/25 pb-2 text-[10px] uppercase tracking-[0.3em] text-ink/70 transition-colors hover:border-brand hover:text-brand"
              >
                Ask Us Anything
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <FadeIn direction="right">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-ink/10"
                  >
                    <AccordionTrigger className="py-5 font-sans text-[15px] font-normal text-ink transition-colors hover:text-brand hover:no-underline md:text-base [&>svg]:text-gold">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pr-6 text-sm leading-relaxed text-espresso md:text-[15px]">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ───────── 7. BEGIN (CTA) ───────── */}
      <section className="bg-ivory px-6 py-28 text-center md:py-36">
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
              Begin
            </p>
            <h2 className="font-serif text-3xl font-medium leading-[1.2] text-ink md:text-5xl">
              Not sure where to start?
            </h2>
            <div className="mt-10">
              <a
                href={BOOKING_URL}
                onClick={handleBookingClick}
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-ink-warm"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
