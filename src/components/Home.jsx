import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Smile,
  Leaf,
  CalendarCheck,
  Droplet,
  Zap,
  Brain,
  Moon,
  Shield,
  Flame,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import IntroSplash from "./IntroSplash";
import Seo from "./Seo";
import { BOOKING_URL, handleBookingClick } from "@/config";
import { SERVICES } from "@/data/services";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// ── Content mirrors MotionRx_Website_Layout.pdf (homepage direction) ──

// Hero eyebrow cycles through the service menu (client request).
const rotatingServices = [
  "IV Therapy",
  "Injections & Shots",
  "Peptides & NAD+",
  "Hormone Optimization",
  "Weight Optimization",
  "Lab Testing",
  "Mobile IV Therapy",
];

const oasisFeatures = [
  {
    icon: HeartPulse,
    title: "Health led",
    desc: "Treatments guided by licensed medical professionals.",
  },
  {
    icon: Smile,
    title: "Genuine staff",
    desc: "Warm, attentive care without feeling rushed.",
  },
  {
    icon: Leaf,
    title: "Tranquil space",
    desc: "A calm, relaxing environment designed to help you unwind.",
  },
  {
    icon: CalendarCheck,
    title: "Easy booking",
    desc: "Simple scheduling for a smooth, stress free visit.",
  },
];

const benefits = [
  {
    icon: Droplet,
    title: "Hydration",
    desc: "Replenish vital fluids and support hydration from the inside out.",
  },
  {
    icon: Zap,
    title: "Energy & Endurance",
    desc: "Support energy levels and fuel an active lifestyle.",
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    desc: "Support focus, clarity, and daily cognitive performance.",
  },
  {
    icon: Moon,
    title: "Recovery",
    desc: "Support faster recovery and improved physical performance.",
  },
  {
    icon: Shield,
    title: "Immunity",
    desc: "Support vitamin balance and overall wellness.",
  },
  {
    icon: Flame,
    title: "Metabolism",
    desc: "Support your body's natural balance and healthy weight.",
  },
];

const ritualSteps = [
  {
    num: "01",
    title: "Assess",
    desc: "A short intake to understand your goals and match you with the right treatment.",
  },
  {
    num: "02",
    title: "Restore",
    desc: "Settle into the lounge as your treatment works at your own pace.",
  },
  {
    num: "03",
    title: "Sustain",
    desc: "Leave feeling replenished, with guidance to help keep the benefits going.",
  },
];

const pressQuotes = [
  {
    quote: "A breath of fresh air, a bohemian rejuvenation.",
    source: "Irvine Weekly",
  },
  {
    quote: "Where bio-hacking meets the concept of age reversal.",
    source: "Cali Post",
  },
  {
    quote: "Not just revived, but genuinely transformed.",
    source: "Irvine Weekly",
  },
];

// ── PDF page 3 (continuation of the homepage direction) ──

const guestStories = [
  {
    image: "/portrait-white-dress.avif",
    quote: "Clearer, lighter, and genuinely rested",
    name: "Maya R.",
    treatment: "Immunity Drip",
  },
  {
    image: "/portrait-blue-tee.avif",
    quote: "Medical, without ever feeling clinical",
    name: "David L.",
    treatment: "NAD+ Infusion",
  },
  {
    image: "/portrait-cap.avif",
    quote: "Back to training the next morning",
    name: "Chris B.",
    treatment: "Performance Drip",
  },
  {
    image: "/portrait-book.avif",
    quote: "The easiest hour of my week",
    name: "Marcus W.",
    treatment: "Recovery Drip",
  },
];

const pressCards = [
  {
    source: "Irvine Weekly",
    logo: "/irvine.png",
    url: "#", // TODO: replace with the real press-article URL
    quote:
      "Reframes the drip bar as something quieter and more considered — you leave genuinely restored.",
  },
  {
    source: "Locale OC",
    logo: "/calipost.png",
    url: "#", // TODO: replace with the real press-article URL
    quote:
      "Costa Mesa' most refined take on IV wellness — minimal, medical, and unmistakably calm.",
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
    a: "Most drips take 30 to 45 minutes. NAD+ and specialty therapies run slower for comfort, about 60 to 90 minutes.",
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
    a: "Costa Mesa, with free on-site parking. Telehealth is available statewide.",
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
// One patient story card — shared by the mobile carousel and the sm+ grid so
// the two layouts can't drift apart.
function StoryCard({ story }) {
  return (
    <figure className="group relative overflow-hidden bg-mist">
      <div className="aspect-3/4">
        <img
          src={story.image}
          alt={`${story.name}, ${story.treatment}`}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-5">
        <span className="mb-2 block font-serif text-2xl leading-none text-gold">
          &ldquo;
        </span>
        <blockquote className="font-serif text-lg leading-snug text-white">
          {story.quote}
        </blockquote>
        <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/65">
          {story.name} · {story.treatment}
        </p>
      </figcaption>
    </figure>
  );
}

// Patient Stories carousel — mobile only; hidden from sm up where the grid
// takes over. Shows one full-width slide at a time, moved by swipe or arrows.
// Embla clips inside its own viewport, so no page-level horizontal scroll.
function StoriesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 35, // embla speed factor (not ms) — a touch slower for a smooth glide
    breakpoints: { "(min-width: 640px)": { active: false } },
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const arrowCls =
    "absolute top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-ivory/90 text-ink shadow-[0_10px_30px_-12px_rgba(44,42,38,0.7)] ring-1 ring-ink/10 backdrop-blur transition-colors hover:bg-ivory";

  return (
    <div className="relative mt-14 sm:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {guestStories.map((g) => (
            <div key={g.name} className="min-w-0 shrink-0 basis-full">
              <StoryCard story={g} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous story"
        className={`${arrowCls} left-3`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next story"
        className={`${arrowCls} right-3`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgScale = useTransform(heroScroll, [0, 1], [1, 1.12]);
  const heroTextY = useTransform(heroScroll, [0, 1], [0, 90]);
  const heroTextOpacity = useTransform(heroScroll, [0, 0.75], [1, 0]);

  const [serviceIndex, setServiceIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setServiceIndex((i) => (i + 1) % rotatingServices.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <IntroSplash />
      <Seo
        title="MotionRx: IV Therapy, Hydration & Recovery Lounge"
        description="A laidback, non-clinical oasis for IV vitamin infusions, injections, peptides, and NAD+. Replenish your body, revitalise your energy, and restore your balance at MotionRx."
        path="/"
      />

      {/* ───────── 1. HERO ───────── */}
      <section
        ref={heroRef}
        className="relative flex h-svh min-h-[600px] items-end overflow-hidden"
      >
        <motion.div
          style={{ scale: heroImgScale }}
          className="absolute inset-0 bg-cover bg-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-lounge.avif')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/30 to-ink/25" />
        </motion.div>

        <motion.div
          style={{ y: heroTextY, opacity: heroTextOpacity }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 md:pb-24 lg:px-12"
        >
          <p className="mb-6 text-[11px] uppercase tracking-[0.45em] text-white/75">
            <AnimatePresence mode="wait">
              <motion.span
                key={serviceIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="inline-block"
              >
                {rotatingServices[serviceIndex]}
              </motion.span>
            </AnimatePresence>
            <span> · Costa Mesa</span>
          </p>
          <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-white md:text-7xl">
            Unwind.
            <br />
            Replenish. Thrive
          </h1>
          <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/80 md:text-base">
            A laidback oasis designed to replenish your body, revitalise your
            energy, and restore your balance.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={BOOKING_URL}
              onClick={handleBookingClick}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-ivory px-9 py-4 text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:bg-cream"
            >
              Book Your Visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-9 py-4 text-[11px] uppercase tracking-[0.25em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Explore Treatments
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ───────── 2. FEATURED SERVICES (full list — moved directly below the hero per client request, Jul 2026) ───────── */}
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
              A full spectrum of physician guided care, from a single drip to
              ongoing optimization.
            </p>
          </FadeIn>

          {/* Mobile: the original numbered list (untouched) */}
          <div className="mt-14 grid gap-x-16 md:hidden">
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
                    <span className="font-serif text-lg text-ink transition-colors group-hover:text-brand">
                      {s.name}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-brand" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* md and up: photo cards */}
          <div className="mt-14 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <FadeIn key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group relative block overflow-hidden bg-mist"
                >
                  <div className="aspect-square">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-gold">
                        {s.category}
                      </p>
                      <h3 className="font-serif text-xl text-white lg:text-2xl">
                        {s.name}
                      </h3>
                    </div>
                    <ArrowRight className="mb-1 h-5 w-5 shrink-0 text-white/70 transition-all group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 3. THE EXPERIENCE (full-bleed video — moved directly below Featured Services per client request) ───────── */}
      <section className="relative h-[70svh] min-h-[440px] overflow-hidden md:h-[85svh]">
        <video
          src="/experience.mp4"
          poster="/lounge-wide.avif"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="The MotionRx experience"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </section>

      {/* ───────── 4. A HOLISTIC OASIS (follows the experience video) ─────────
          Hidden on mobile per client request; shown at md+ (tablet/desktop). */}
      <section className="hidden bg-ivory px-6 py-24 md:block md:py-32 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
              A Holistic Oasis
            </p>
            <h2 className="max-w-3xl font-serif text-3xl font-medium leading-[1.15] text-ink md:text-5xl">
              Wellness reimagined in a calming space for hydration, recovery,
              and balance
            </h2>
            <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-espresso md:text-base">
              At MotionRx, IV vitamin infusions are designed to support
              hydration, nutrition, recovery, and overall wellness. No clinical
              rush, just a calm, personalized experience built around how you
              want to feel.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-10 border-t border-ink/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {oasisFeatures.map((f) => (
              <FadeIn key={f.title}>
                <div>
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <f.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mb-2 font-serif text-lg font-medium text-ink">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-espresso">
                    {f.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 6. BENEFITS (the only white band, per PDF) ─────────
          Hidden on mobile per client request; shown at md+ (tablet/desktop). */}
      <section className="hidden bg-cream px-6 py-24 md:block md:py-32 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
              Benefits
            </p>
            <h2 className="font-serif text-3xl font-medium leading-[1.15] text-ink md:text-5xl">
              Look, feel, and function at your best
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <FadeIn key={b.title}>
                <div className="border-t border-ink/10 pt-6">
                  <b.icon className="mb-4 h-7 w-7 text-gold" strokeWidth={1.6} aria-hidden />
                  <h3 className="mb-2 font-serif text-lg font-medium text-ink">
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

      {/* ───────── 7. THE CONSIDERED RITUAL ───────── */}
      <section className="bg-ivory">
        <div className="grid lg:grid-cols-2">
          {/* Image hidden on mobile per client request; shown at md+ (tablet/desktop). */}
          <div className="relative hidden min-h-80 overflow-hidden md:block lg:min-h-full">
            <img
              src="/ritual-lounge.avif"
              alt="The MotionRx lounge"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="px-6 py-20 md:px-14 md:py-28 lg:px-16">
            <FadeIn>
              <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
                The Considered Ritual
              </p>
              <h2 className="max-w-md font-serif text-3xl font-medium leading-[1.15] text-ink md:text-4xl">
                Care that feels personal, not rushed
              </h2>
            </FadeIn>
            <div className="mt-12 space-y-0">
              {ritualSteps.map((s) => (
                <FadeIn key={s.num}>
                  <div className="flex gap-6 border-t border-ink/10 py-7">
                    <span className="font-serif text-sm text-gold">
                      {s.num}
                    </span>
                    <div>
                      <h3 className="mb-1.5 font-serif text-lg font-medium text-ink">
                        {s.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-espresso">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 8. OUR MEDICAL DIRECTOR (no top padding while stacked — the ritual column above provides the gap) ───────── */}
      <section className="bg-ivory px-6 pb-24 pt-0 md:pb-32 lg:pt-32 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <div className="aspect-[4/5] overflow-hidden bg-mist">
              <img
                src="/dr-scott.avif"
                alt="Dr. Courtney S. Scott, Medical Director"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div>
              <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
                Our Medical Director
              </p>
              <h2 className="font-serif text-3xl font-medium leading-[1.15] text-ink md:text-5xl">
                Dr. Courtney S. Scott
              </h2>
              <p className="mt-7 max-w-md text-[15px] leading-relaxed text-espresso md:text-base">
                Recognizing the importance of holistic health in anti aging and
                longevity, Dr. Scott is committed to comprehensive care focused
                on prevention, evaluation, diagnosis, and treatment.
              </p>
              <Link
                to="/about"
                className="group mt-9 inline-flex items-center gap-3 rounded-full border border-ink/25 px-9 py-4 text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
              >
                Meet the Team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────── 9. PRESS (compact band — hairline divider carries the separation) ─────────
          Hidden on mobile per client request; shown at md+ (tablet/desktop). */}
      <section className="hidden border-t border-ink/10 bg-ivory px-6 py-14 md:block md:py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          {pressQuotes.map((q, i) => (
            <FadeIn key={i}>
              <figure>
                <blockquote className="font-serif text-xl leading-snug text-ink md:text-2xl">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-5 text-[10px] uppercase tracking-[0.35em] text-espresso/70">
                  {q.source}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ───────── 10. PATIENT STORIES (follows the compact press band) ───────── */}
      <section className="bg-ivory px-6 pt-10 pb-24 md:pt-16 md:pb-32 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-gold">
              In Their Words
            </p>
            <h2 className="font-serif text-3xl font-medium leading-[1.15] text-ink md:text-5xl">
              Patient Stories
            </h2>
          </FadeIn>

          {/* Mobile: one-at-a-time carousel */}
          <StoriesCarousel />

          {/* sm and up: the original grid, unchanged */}
          <div className="mt-14 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {guestStories.map((g) => (
              <FadeIn key={g.name}>
                <StoryCard story={g} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 11. PRESS · FEATURED IN (bottom padding only — the section above provides the gap) ───────── */}
      <section className="bg-ivory px-6 pb-24 md:pb-32 lg:px-12">
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
            <figure className="mt-8 border-t border-ink/10 pt-8">
              <blockquote className="max-w-3xl font-serif text-2xl leading-snug text-ink md:text-4xl">
                &ldquo;A calm, clinical sanctuary where evidence-based care
                meets the simple art of feeling well.&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-[10px] uppercase tracking-[0.35em] text-espresso/70">
                The Cali Post
              </figcaption>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-[11px] uppercase tracking-[0.25em] text-ink/70 transition-colors hover:border-brand hover:text-brand"
              >
                Read the Feature
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </figure>
          </FadeIn>

          <div className="mt-8 grid gap-x-10 gap-y-8 border-t border-ink/10 pt-8 md:grid-cols-2">
            {pressCards.map((p) => (
              <FadeIn key={p.source}>
                <div>
                  <img
                    src={p.logo}
                    alt={`${p.source} logo`}
                    className="h-30 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                  <h3 className="mt-3 mb-2 font-serif text-xl text-ink">
                    {p.source}
                  </h3>
                  <p className="text-sm leading-relaxed text-espresso">
                    &ldquo;{p.quote}&rdquo;
                  </p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-[11px] uppercase tracking-[0.25em] text-ink/70 transition-colors hover:border-brand hover:text-brand"
                  >
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 12. FREQUENTLY ASKED (bottom padding only) ───────── */}
      <section className="bg-ivory px-6 pb-24 md:pb-32 lg:px-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
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

      {/* ───────── 13. BEGIN (CTA, bottom padding only) ───────── */}
      <section className="bg-ivory px-6 pb-28 text-center md:pb-36">
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
              Begin
            </p>
            <h2 className="font-serif text-3xl font-medium leading-[1.2] text-ink md:text-5xl">
              Replenish your body.
              <br />
              Restore your balance
            </h2>
            <div className="mt-10">
              <a
                href={BOOKING_URL}
                onClick={handleBookingClick}
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-ink-warm"
              >
                Schedule Today
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
