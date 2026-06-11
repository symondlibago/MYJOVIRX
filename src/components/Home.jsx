import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Marquee from "@/components/ui/Marquee";
import HomeFaq from "./HomeFaq";
import Seo from "./Seo";
import { BOOKING_URL, handleBookingClick } from "@/config";

const heroSlides = [
  {
    image: "/hero-1.jpg",
    tagline: "Modern Wellness Lounge",
    accent: "Unwind, restore,",
    accentItalic: "and recharge.",
  },
  {
    image: "/hero-3.jpg",
    tagline: "Physician-Guided Care",
    accent: "Science-backed wellness,",
    accentItalic: "personalized for you.",
  },
  {
    image: "/iv-therapy.jpg",
    tagline: "IV Therapy & Hydration",
    accent: "Replenish from within,",
    accentItalic: "feel the difference.",
  },
];


const featuredTreatments = [
  {
    id: 1,
    image: "/treatment-2.jpg",
    title: "IV Hydration Therapy",
    category: "Hydration & Recovery",
    desc: "Rapid rehydration with vitamins and electrolytes",
  },
  {
    id: 2,
    image: "/treatment-5.jpg",
    title: "NAD+ Restoration",
    category: "Cellular Energy",
    desc: "Anti-aging and mental clarity at the cellular level",
  },
  {
    id: 3,
    image: "/treatment-4.jpg",
    title: "Vitamin Injections",
    category: "Boosters",
    desc: "B12, glutathione & lipo shots for daily energy",
  },
  {
    id: 4,
    image: "/treatment-6.jpg",
    title: "Hormone Optimization",
    category: "TRT & Balance",
    desc: "Restore energy, focus, and performance",
  },
  {
    id: 5,
    image: "/hero-2.jpg",
    title: "Medical Weight Loss",
    category: "GLP-1 & Peptides",
    desc: "Physician-supervised programs built to last",
  },
  {
    id: 6,
    image: "/clinic-room.jpg",
    title: "Lab Testing & Panels",
    category: "Diagnostics",
    desc: "Comprehensive bloodwork with a clear, actionable plan",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroTextY = useTransform(heroScroll, [0, 1], [0, 130]);
  const heroTextOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrent((c) => (c + 1) % heroSlides.length);
          return 0;
        }
        return p + 1;
      });
    }, 55);

    return () => clearInterval(interval);
  }, [current]);

  const goTo = (i) => {
    setCurrent(i);
    setProgress(0);
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="MyJoviRX — IV Therapy, NAD+ & Medical Weight Loss | Costa Mesa, CA"
        description="Physician-guided IV therapy, NAD+ restoration, hormone optimization, and medical weight loss in Costa Mesa — serving all of Orange County, in-clinic or via telehealth."
        path="/"
      />

      {/* HERO SECTION */}
      <section ref={heroRef} className="h-screen relative flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${heroSlides[current].image}')` }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/45 to-black/75" />
          </motion.div>
        </AnimatePresence>

        <motion.div
          style={{ y: heroTextY, opacity: heroTextOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <p className="text-white/60 text-xs tracking-[0.5em] uppercase mb-8">
            {heroSlides[current].tagline}
          </p>

          <h1 className="font-serif text-7xl md:text-9xl text-white leading-none mb-6">
            MyJoviRX
          </h1>

          <p className="font-serif text-2xl md:text-3xl text-white/80 mb-12">
            {heroSlides[current].accent}{" "}
            <span className="italic text-gold">
              {heroSlides[current].accentItalic}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              onClick={handleBookingClick}
              className="inline-flex items-center gap-3 bg-transparent border border-white text-white px-9 py-4 text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-brand transition-all"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-white/70 text-xs tracking-[0.25em] uppercase hover:text-white border-b border-white/20 pb-0.5 hover:border-white"
            >
              Explore Treatments
            </Link>
          </div>
        </motion.div>

        {/* Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative h-px overflow-hidden"
              style={{ width: i === current ? 48 : 20 }}
            >
              <span className="block w-full h-px bg-white/25" />
              {i === current && (
                <motion.span
                  className="absolute top-0 left-0 h-px bg-white"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <ArrowDown className="w-4 h-4 text-white/40" />
          <span className="text-[9px] tracking-[0.4em] text-white/30 uppercase">
            Scroll
          </span>
        </div>
      </section>

      {/* MOVING MARQUEE */}
      <Marquee
        items={[
          "IV Therapy",
          "NAD+ Restoration",
          "Hormone Optimization",
          "Medical Weight Loss",
          "Vitamin Injections",
          "Lab Testing",
          "Telehealth",
        ]}
      />

      {/* FEATURED TREATMENTS */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-16">
              <p className="text-brand text-xs tracking-[0.4em] uppercase mb-4">
                What We Offer
              </p>
              <h2 className="font-serif text-6xl text-ink">
                Featured Treatments
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredTreatments.map((item) => (
              <FadeIn key={item.id}>
                <Link
                  to="/services"
                  className="group relative block overflow-hidden bg-mist"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/70 to-transparent text-white">
                    <p className="text-[10px] tracking-[0.4em] uppercase text-gold">
                      {item.category}
                    </p>
                    <h3 className="font-serif text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* THE EXPERIENCE — full-width video (text temporarily hidden per client) */}
      <section className="bg-white px-10">
        <FadeIn>
          <div className="relative w-full aspect-video overflow-hidden">
            <video
              className="w-full h-full object-cover block"
              src="/experience.mp4"
              poster="/treatment-1.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="The MyJoviRX wellness experience"
            />
          </div>
        </FadeIn>

        {/* TEXT TEMPORARILY HIDDEN (client request) — restore below the video later:

        <div className="max-w-7xl mx-auto px-3 md:px-6 mt-14">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-5">
              The Experience
            </p>
            <h2 className="font-serif text-5xl text-ink leading-tight mb-6">
              Personalized Care,
              <br />
              <span className="italic text-gold">
                Real Results.
              </span>
            </h2>
            <p className="text-espresso/70 leading-relaxed mb-6 max-w-2xl">
              Every visit begins with a medical consultation and ends with a plan
              built around your goals. From hydration and recovery to hormones and
              weight management, each protocol is guided by a licensed provider.
            </p>
            <p className="text-espresso/70 leading-relaxed mb-10 max-w-2xl">
              No rushed appointments, no surprise fees — just modern, evidence-based
              wellness delivered in a calm, private setting designed to help you feel
              your best.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 border-b-2 border-ink pb-2 text-xs tracking-[0.3em] uppercase hover:border-espresso hover:text-espresso transition-colors"
            >
              Explore Treatments
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </FadeIn>
        </div>

        */}
      </section>

      {/* TELEHEALTH — connect with providers online */}
      <section className="relative px-6 pt-24 md:pt-32 pb-16 lg:pb-0 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-center text-brand text-[11px] tracking-[0.4em] uppercase mb-6">
              Invest in Your Longevity
            </p>
            <h2 className="text-center font-serif text-4xl md:text-6xl text-brand leading-[1.08] mb-16 md:mb-20 max-w-3xl mx-auto">
              Connect with trusted healthcare professionals online.
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="max-w-xl">
                <p className="text-espresso/70 text-sm md:text-[15px] leading-relaxed mb-5">
                  MyJoviRx is a modern telehealth platform that brings trusted
                  healthcare services closer to you. Connect with licensed
                  healthcare providers through secure virtual consultations,
                  receive personalized medical guidance, and manage your
                  healthcare needs from the comfort of your home.
                </p>
                <p className="text-espresso/70 text-sm md:text-[15px] leading-relaxed mb-9">
                  Whether you need routine care, prescription support, or
                  professional medical advice, MyJoviRx offers a fast,
                  convenient, and reliable way to access quality healthcare. Our
                  mission is to make healthcare more accessible, efficient, and
                  centered around your lifestyle.
                </p>
                <a
                  href={BOOKING_URL}
                  onClick={handleBookingClick}
                  className="group inline-flex items-center gap-3 bg-brand-deep text-white px-9 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-brand transition-colors rounded-sm"
                >
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </FadeIn>

            {/* Bottle — layered to sit on top of the FAQ card below */}
            <div className="relative z-20 hidden lg:flex justify-center lg:justify-end lg:translate-y-0">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="h-70 w-70 md:h-100 md:w-100 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgb(var(--gold-rgb) / 0.16), transparent 70%)",
                  }}
                />
              </div>
              <img
                src="/bottle.png"
                alt="MyJoviRx Joi+ Blokes supplement"
                className="relative w-full max-w-70 md:max-w-md object-contain drop-shadow-[0_40px_70px_rgba(44,42,38,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <HomeFaq />
    </div>
  );
}
