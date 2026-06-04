import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import HomeSections from "./HomeSections";

const heroSlides = [
  {
    image: "/iv-therapy.jpg",
    tagline: "IV Therapy & Hydration",
    accent: "Replenish from within,",
    accentItalic: "feel the difference.",
  },
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

      {/* HERO SECTION */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
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
            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/70" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-white/60 text-xs tracking-[0.5em] uppercase mb-8">
            {heroSlides[current].tagline}
          </p>

          <h1 className="font-serif text-7xl md:text-9xl text-white leading-none mb-6">
            MyJoviRX
          </h1>

          <p className="font-serif text-2xl md:text-3xl text-white/80 mb-12">
            {heroSlides[current].accent}{" "}
            <span className="italic text-[#E8B4B8]">
              {heroSlides[current].accentItalic}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center gap-3 bg-white/10 border border-white/30 text-white px-9 py-4 text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-white/70 text-xs tracking-[0.25em] uppercase hover:text-white border-b border-white/20 pb-0.5 hover:border-white"
            >
              Explore Treatments
            </Link>
          </div>
        </div>

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

      {/* FEATURED TREATMENTS */}
      <section className="py-28 px-6 bg-[#F7F2EF]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-16">
              <p className="text-[#B48A8E] text-xs tracking-[0.4em] uppercase mb-4">
                What We Offer
              </p>
              <h2 className="font-serif text-6xl text-[#1a1a1a]">
                Featured Treatments
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredTreatments.map((item) => (
              <FadeIn key={item.id}>
                <Link
                  to="/services"
                  className="group relative block overflow-hidden bg-[#ece6e1]"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/70 to-transparent text-white">
                    <p className="text-[10px] tracking-[0.4em] uppercase text-[#E8B4B8]">
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

      {/* THE EXPERIENCE */}
      <section className="py-28 px-6 bg-[#F7F2EF]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left">
            <div className="aspect-3/4 overflow-hidden">
            <img
                src="/treatment-1.jpg"
                alt="Relaxed wellness experience"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>
              <p className="text-[#B48A8E] text-xs tracking-[0.4em] uppercase mb-5">
                The Experience
              </p>
              <h2 className="font-serif text-5xl text-[#1a1a1a] mb-8 leading-tight">
                Personalized Care,
                <br />
                <span className="italic text-[#B48A8E]">
                  Real Results.
                </span>
              </h2>
              <p className="text-[#3D2B1F]/70 leading-relaxed mb-6">
                Every visit begins with a medical consultation and ends with a plan
                built around your goals. From hydration and recovery to hormones and
                weight management, each protocol is guided by a licensed provider.
              </p>
              <p className="text-[#3D2B1F]/70 leading-relaxed mb-12">
                No rushed appointments, no surprise fees — just modern, evidence-based
                wellness delivered in a calm, private setting designed to help you feel
                your best.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 border-b-2 border-[#1a1a1a] pb-2 text-xs tracking-[0.3em] uppercase hover:border-[#B48A8E] hover:text-[#B48A8E] transition-colors"
              >
                Explore Treatments
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHY CHOOSE US · TESTIMONIALS · FAQ */}
      <HomeSections />
    </div>
  );
}
