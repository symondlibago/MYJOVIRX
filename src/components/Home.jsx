import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Microscope,
  Dna,
  Activity,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Marquee from "@/components/ui/Marquee";
import HomeFaq from "./HomeFaq";
import Testimonials from "./Testimonials";
import IntroSplash from "./IntroSplash";
import Seo from "./Seo";
import { BOOKING_URL, handleBookingClick } from "@/config";

// Featured services grid — original layout kept per client request.
const featuredServices = [
  { id: 1, image: "/treatment-2.jpg", title: "IV Hydration Therapy", category: "Hydration & Recovery", desc: "Rapid rehydration with vitamins and electrolytes" },
  { id: 2, image: "/treatment-5.jpg", title: "NAD+ Restoration", category: "Cellular Energy", desc: "Anti-aging and mental clarity at the cellular level" },
  { id: 3, image: "/treatment-4.jpg", title: "Vitamin Injections", category: "Boosters", desc: "B12, glutathione & lipo shots for daily energy" },
  { id: 4, image: "/treatment-6.jpg", title: "Hormone Optimization", category: "TRT & Balance", desc: "Restore energy, focus, and performance" },
  { id: 5, image: "/hero-2.jpg", title: "Medical Weight Loss", category: "GLP-1 & Peptides", desc: "Physician-supervised programs built to last" },
  { id: 6, image: "/clinic-room.jpg", title: "Lab Testing & Panels", category: "Diagnostics", desc: "Comprehensive bloodwork with a clear, actionable plan" },
  { id: 7, image: "/treatment-3.jpg", title: "Nutrition & Weight Support", category: "Nutrition & Weight", desc: "Personalized plans for weight management and metabolic health" },
  { id: 8, image: "/treatment-1.jpg", title: "Peptide Consultation", category: "Peptide Therapy", desc: "Expert guidance on peptide protocols for performance and recovery" },
];

const pillars = [
  {
    icon: Microscope,
    title: "Precision Diagnostics",
    desc: "Advanced labs and biomarkers that find risk before it becomes disease.",
  },
  {
    icon: Dna,
    title: "Regenerative Therapies",
    desc: "Peptides, hormones, and IV protocols that help the body repair and perform.",
  },
  {
    icon: Activity,
    title: "Longevity & Performance",
    desc: "Data-driven plans to move better, think clearer, and live longer.",
  },
];

const teamPreview = [
  "/dr-scott.jpg",
  "/team-camron.jpg",
  "/team-laura.jpg",
  "/team-tori.jpg",
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgScale = useTransform(heroScroll, [0, 1], [1, 1.12]);
  const heroTextY = useTransform(heroScroll, [0, 1], [0, 90]);
  const heroTextOpacity = useTransform(heroScroll, [0, 0.75], [1, 0]);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <IntroSplash />
      <Seo
        title="MotionRx: Longevity, Performance & Regenerative Medicine | Costa Mesa, CA"
        description="MotionRx is where modern medicine meets human performance. Advanced diagnostics, hormone and peptide therapy, IV nutrition, and medical weight optimization in Costa Mesa, CA."
        path="/"
      />

      {/* ───────── 1. HERO ───────── */}
      <section
        ref={heroRef}
        className="relative flex h-[92vh] min-h-[600px] items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ scale: heroImgScale }}
          className="absolute inset-0 bg-cover bg-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-3.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/75" />
        </motion.div>

        <motion.div
          style={{ y: heroTextY, opacity: heroTextOpacity }}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >
          <p className="mb-7 text-[11px] uppercase tracking-[0.45em] text-white/70">
            Modern Medicine · Human Performance
          </p>
          <h1 className="font-serif text-5xl font-medium leading-[1.05] text-white md:text-7xl">
            Optimize your health.
            <br />
            <span className="text-gold">Elevate your performance.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-white/80 md:text-base">
            Advanced diagnostics, regenerative therapies, and evidence-based
            care to help you move better, feel stronger, and live longer.
          </p>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BOOKING_URL}
              onClick={handleBookingClick}
              className="group inline-flex items-center gap-3 bg-brand px-9 py-4 text-[11px] uppercase tracking-[0.25em] text-white transition-colors hover:bg-brand-deep"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-[11px] uppercase tracking-[0.25em] text-white/85 transition-colors hover:border-white hover:text-white"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Thin trust band */}
      <Marquee
        items={[
          "Precision Diagnostics",
          "Hormone Optimization",
          "Peptide Therapy",
          "IV Nutrient Therapy",
          "Medical Weight Optimization",
          "Longevity Medicine",
          "Human Performance",
        ]}
      />

      {/* ───────── 2. WHY MOTIONRX ───────── */}
      <section className="bg-ivory px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
                Why MotionRx
              </p>
              <h2 className="font-serif text-3xl font-medium leading-[1.15] text-ink md:text-5xl">
                Where modern medicine meets human performance.
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-relaxed text-espresso md:text-base">
                We combine advanced diagnostics, personalized treatment plans,
                regenerative therapies, and evidence-based medicine. Our approach
                is proactive rather than reactive, focused on prevention,
                optimization, and helping you take control of your long-term
                health.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
            {pillars.map((p) => (
              <FadeIn key={p.title}>
                <div className="flex h-full flex-col bg-ivory p-8 md:p-10">
                  <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <p.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mb-2 font-serif text-lg font-medium text-ink">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-espresso">
                    {p.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 3. FEATURED SERVICES (original grid) ───────── */}
      <section className="bg-white px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-16">
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-brand">
                What We Offer
              </p>
              <h2 className="font-serif text-6xl text-ink">Featured Services</h2>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredServices.map((item) => (
              <FadeIn key={item.id}>
                <Link
                  to="/services"
                  className="group relative block overflow-hidden bg-mist"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6 text-white">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-gold">
                      {item.category}
                    </p>
                    <h3 className="font-serif text-2xl">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.desc}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The experience — full-width video (below Featured Services) */}
      <section className="bg-ivory px-0 md:px-10">
        <FadeIn>
          <div className="relative aspect-video w-full overflow-hidden md:rounded-2xl">
            <video
              className="block h-full w-full object-cover"
              src="/experience.mp4"
              poster="/treatment-1.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="The MotionRx experience"
            />
          </div>
        </FadeIn>
      </section>

      {/* ───────── 4. PRECISION DIAGNOSTICS ───────── */}
      <section className="bg-ivory px-6 py-24 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <div>
              <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
                Precision Diagnostics
              </p>
              <h2 className="font-serif text-3xl font-medium leading-[1.12] text-ink md:text-5xl">
                Decisions driven by your data.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-espresso md:text-base">
                Advanced labs, biomarkers, and body composition give us a
                complete picture of your health, so every recommendation is based
                on evidence, not guesswork.
              </p>
              <Link
                to="/services/laboratory-testing"
                className="mt-8 inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-[11px] uppercase tracking-[0.25em] text-ink/70 transition-colors hover:border-brand hover:text-brand"
              >
                Explore Lab Testing
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-mist">
              <img
                src="/clinic-room.jpg"
                alt="Advanced diagnostics at MotionRx"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────── 5. LONGEVITY & BIOHACKING ───────── */}
      <section className="bg-cream px-6 py-24 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-mist">
              <img
                src="/treatment-5.jpg"
                alt="Longevity and biohacking therapies"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div>
              <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
                Longevity &amp; Biohacking
              </p>
              <h2 className="font-serif text-3xl font-medium leading-[1.12] text-ink md:text-5xl">
                Optimize for the long game.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-espresso md:text-base">
                Regenerative therapies, hormone and peptide protocols, and
                lifestyle medicine work together to slow aging, sharpen
                performance, and extend your healthspan.
              </p>
              <Link
                to="/services/longevity-medicine"
                className="mt-8 inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-[11px] uppercase tracking-[0.25em] text-ink/70 transition-colors hover:border-brand hover:text-brand"
              >
                Explore Longevity Medicine
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────── 6. INBODY BODY COMPOSITION ───────── */}
      <section className="bg-white px-6 py-24 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
              InBody Analysis
            </p>
            <h2 className="font-serif text-3xl font-medium leading-[1.12] text-ink md:text-5xl">
              Measure what matters.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-espresso md:text-base">
              Precision body composition scans track muscle, fat, and hydration,
              so you can see progress in real numbers and adjust your plan with
              data.
            </p>
            <a
              href={BOOKING_URL}
              onClick={handleBookingClick}
              className="group mt-9 inline-flex items-center gap-3 bg-brand px-9 py-4 text-[11px] uppercase tracking-[0.25em] text-white transition-colors hover:bg-brand-deep"
            >
              Schedule InBody Scan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ───────── 7. MEET THE MEDICAL TEAM (teaser) ───────── */}
      <section className="bg-cream px-6 py-24 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <div>
              <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
                The Team
              </p>
              <h2 className="font-serif text-3xl font-medium leading-[1.12] text-ink md:text-5xl">
                Physician-led, expert-guided.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-espresso md:text-base">
                Every plan is guided by our medical director and a team of
                licensed clinicians, with the diagnostics and follow-through to
                back it up.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-[11px] uppercase tracking-[0.25em] text-ink/70 transition-colors hover:border-brand hover:text-brand"
              >
                Meet the Team
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="grid grid-cols-2 gap-4">
              {teamPreview.map((img) => (
                <div
                  key={img}
                  className="aspect-[4/5] overflow-hidden rounded-xl bg-mist"
                >
                  <img
                    src={img}
                    alt="MotionRx clinician"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────── 8. PATIENT SUCCESS STORIES (carousel) ───────── */}
      <Testimonials />

      {/* ───────── 9. FAQ ───────── */}
      <HomeFaq />

      {/* ───────── 10. LOCATION & CONTACT ───────── */}
      <section className="bg-white px-6 py-24 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <div>
              <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
                Visit Us
              </p>
              <h2 className="font-serif text-3xl font-medium leading-[1.12] text-ink md:text-5xl">
                Costa Mesa, California.
              </h2>
              <ul className="mt-8 space-y-5 text-[15px] text-espresso">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="leading-relaxed">
                    250 Fischer Ave
                    <br />
                    Costa Mesa, CA 92626
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="leading-relaxed">
                    Mon to Fri · 9:00 AM to 6:00 PM
                    <br />
                    Saturday · 10:00 AM to 4:00 PM
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <a
                    href="tel:+19492811440"
                    className="leading-relaxed transition-colors hover:text-brand"
                  >
                    (949) 281-1440
                  </a>
                </li>
              </ul>
              <a
                href={BOOKING_URL}
                onClick={handleBookingClick}
                className="group mt-9 inline-flex items-center gap-3 bg-brand px-9 py-4 text-[11px] uppercase tracking-[0.25em] text-white transition-colors hover:bg-brand-deep"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 bg-mist">
              <iframe
                title="MotionRx location map"
                src="https://www.google.com/maps?q=250+Fischer+Ave,+Costa+Mesa,+CA+92626&output=embed"
                className="h-full w-full border-0"
                style={{ pointerEvents: "auto" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────── 11. SCHEDULE YOUR CONSULTATION ───────── */}
      <section className="relative overflow-hidden bg-brand-deep px-6 py-28 text-center md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 90% at 50% 0%, rgb(var(--brand-rgb) / 0.55), transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
            Get Started
          </p>
          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-white md:text-5xl">
            Schedule your consultation.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-white/70">
            A 15-minute consult to map your diagnostics, goals, and a plan built
            around your long-term health.
          </p>
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
