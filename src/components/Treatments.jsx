import React, { useState, useEffect } from "react";
import { BOOKING_URL, handleBookingClick } from "@/config";
import Seo from "./Seo";
import TreatmentsDetail from "./TreatmentsDetail";
import Memberships from "./Memberships";
import {
  ArrowUpRight,
  Syringe,
  Droplets,
  Zap,
  FlaskConical,
  Stethoscope,
  ShieldCheck,
  Clock,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Container that staggers its direct motion children into view.
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

const maskChild = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.95, ease: EASE } },
};

// A single line of type that wipes up from behind a mask.
function MaskLine({ children, className = "" }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span variants={maskChild} className={`block ${className}`}>
        {children}
      </motion.span>
    </span>
  );
}

function TreatmentArc({ services }) {
  const N = services.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Responsive geometry (circle diameter, side diameter, x-offset, arc lift).
  const [dims, setDims] = useState({
    center: 384,
    side: 250,
    offset: 322,
    arc: 50,
  });

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setDims({ center: 196, side: 128, offset: 126, arc: 26 });
      else if (w < 1024)
        setDims({ center: 300, side: 196, offset: 248, arc: 40 });
      else setDims({ center: 384, side: 250, offset: 322, arc: 50 });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // Auto-advance, pausing while the user is hovering / interacting.
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % N), 5200);
    return () => clearTimeout(id);
  }, [active, paused, N]);

  // Shortest signed distance from the active index (…, -1, 0, 1, …).
  const slotOf = (i) => {
    let d = ((i - active) % N + N) % N;
    if (d > N / 2) d -= N;
    return d;
  };

  // Target transform for a given slot.
  const transformFor = (slot) => {
    if (slot === 0) {
      return { x: 0, y: -dims.arc, scale: 1, zIndex: 30 };
    }
    const dir = slot > 0 ? 1 : -1;
    return {
      x: dir * dims.offset,
      y: dims.arc * 0.85,
      scale: dims.side / dims.center,
      zIndex: 20,
    };
  };

  const select = (i) => setActive(i);

  const current = services[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Stage */}
      <div
        className="relative mx-auto w-full max-w-5xl"
        style={{ height: dims.center + 120 }}
      >
        {/* Soft glow behind the centre circle */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: dims.center * 1.5,
            height: dims.center * 1.5,
            background:
              "radial-gradient(circle, rgb(var(--brand-rgb) / 0.10), transparent 58%), radial-gradient(circle, rgb(var(--stone-rgb) / 0.5), transparent 68%)",
          }}
        />

        {/* Circles */}
        <AnimatePresence>
          {services.map((s, i) => {
            const slot = slotOf(i);
            if (Math.abs(slot) > 1) return null; // only 3 visible
            const target = transformFor(slot);
            const isActive = slot === 0;
            const sideScale = dims.side / dims.center;

            return (
              <motion.button
                key={s.name}
                type="button"
                onClick={(e) =>
                  isActive ? handleBookingClick(e) : select(i)
                }
                aria-label={
                  isActive ? `Reserve ${s.name}` : `View ${s.name}`
                }
                className="group absolute left-1/2 top-1/2 overflow-hidden rounded-full shadow-[0_30px_60px_-28px_rgba(44,42,38,0.5)] ring-1 ring-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-taupe"
                style={{
                  width: dims.center,
                  height: dims.center,
                  marginLeft: -dims.center / 2,
                  marginTop: -dims.center / 2,
                }}
                initial={{ ...target, opacity: 0 }}
                animate={{ ...target, opacity: 1 }}
                exit={{
                  opacity: 0,
                  scale: sideScale * 0.85,
                  transition: { duration: 0.4, ease: EASE },
                }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 23,
                  mass: 0.7,
                }}
                whileHover={!isActive ? { scale: sideScale * 1.05 } : undefined}
              >
                <img
                  src={s.image}
                  alt=""
                  draggable={false}
                  className="h-full w-full object-cover"
                />

                {isActive ? (
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-cream/70" />
                ) : (
                  <>
                    <span className="pointer-events-none absolute inset-0 bg-ink-warm/35 transition-colors duration-300 group-hover:bg-ink-warm/15" />
                    <span className="pointer-events-none absolute bottom-[15%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[16px] font-medium uppercase tracking-[0.16em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                      {s.short}
                    </span>
                  </>
                )}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Active treatment details */}
      <div className="relative z-10 mx-auto mt-4 max-w-xl px-6 text-center min-h-[260px] md:min-h-[240px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {current.popular && (
              <span className="mb-4 inline-block text-[9px] uppercase tracking-[0.35em] text-brand">
                Highly Requested
              </span>
            )}

            <h3 className="mb-4 font-serif text-3xl font-light leading-[1.1] text-ink-warm md:text-5xl">
              {current.name}
            </h3>

            <p className="mx-auto mb-8 max-w-lg text-sm font-light leading-relaxed text-ink-warm/65 md:text-base">
              {current.description}
            </p>

            <div className="mb-9 flex items-center justify-center gap-8">
              <div>
                <p className="mb-1.5 text-[10px] uppercase tracking-[0.2em] text-ink-warm/40">
                  Investment
                </p>
                <span className="font-serif text-xl">{current.price}</span>
              </div>
              <span className="h-9 w-px bg-ink-warm/15" />
              <div>
                <p className="mb-1.5 text-[10px] uppercase tracking-[0.2em] text-ink-warm/40">
                  Duration
                </p>
                <span className="font-serif text-xl">{current.duration}</span>
              </div>
            </div>

            <a
              href={BOOKING_URL}
              onClick={handleBookingClick}
              className="group inline-flex items-center justify-center gap-3 rounded-sm bg-brand-deep px-9 py-4 text-[10px] uppercase tracking-[0.3em] text-white transition-colors duration-500 hover:bg-brand"
            >
              Reserve {current.short}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2.5">
        {services.map((s, i) => (
          <button
            key={s.name}
            type="button"
            onClick={() => select(i)}
            aria-label={`Show ${s.name}`}
            className={`h-1.5 rounded-full transition-all duration-400 ${
              i === active
                ? "w-7 bg-brand"
                : "w-1.5 bg-ink-warm/20 hover:bg-ink-warm/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Treatments() {
  const mainServices = [
    {
      name: "Signature IV Drip",
      short: "IV Drip",
      description:
        "A custom blend of fluids, electrolytes, vitamins, and antioxidants delivered intravenously for rapid hydration, immune support, and recovery. Choose from energy, immunity, beauty, and recovery formulas.",
      duration: "30–45 min",
      price: "From $149",
      image: "/hero-2.jpg",
    },
    {
      name: "NAD+ Restoration",
      short: "NAD+",
      description:
        "A premium cellular therapy that supports energy production, mental clarity, and healthy aging. Administered slowly and comfortably by our medical team in a private suite.",
      duration: "60–90 min",
      price: "From $399",
      image: "/treatment-5.jpg",
      popular: true,
    },
    {
      name: "Hormone Optimization",
      short: "Hormone",
      description:
        "Testosterone replacement and hormone balancing for men and women, with routine lab monitoring to address fatigue, low libido, brain fog, and athletic performance.",
      duration: "Monthly",
      price: "From $199/mo",
      image: "/treatment-6.jpg",
      popular: true,
    },
    {
      name: "Medical Weight Loss",
      short: "Weight Loss",
      description:
        "Physician-supervised GLP-1 and peptide programs (semaglutide / tirzepatide) paired with nutrition guidance and check-ins for sustainable, healthy results.",
      duration: "Monthly",
      price: "From $299/mo",
      image: "/treatment-4.jpg",
    },
  ];

  const maintenance = [
    { name: "Vitamin B12 / Lipo-MIC Shot", price: "+$35", duration: "10 min", icon: Syringe },
    { name: "Glutathione Push", price: "+$45", duration: "15 min", icon: Droplets },
    { name: "NAD+ Add-On Boost", price: "+$99", duration: "30 min", icon: Zap },
    { name: "Myers' Cocktail Upgrade", price: "+$50", duration: "15 min", icon: FlaskConical },
  ];

  const pillars = [
    {
      icon: Stethoscope,
      title: "Physician-Guided",
      desc: "Every protocol overseen by a licensed provider.",
    },
    {
      icon: ShieldCheck,
      title: "Pharmacy-Grade",
      desc: "Premium, lab-tested ingredients, every time.",
    },
    {
      icon: FlaskConical,
      title: "Evidence-Based",
      desc: "Protocols grounded in clinical research.",
    },
    {
      icon: Clock,
      title: "Unrushed Care",
      desc: "Private suites, with time to do it right.",
    },
  ];

  // Hero parallax — the intro lifts and dissolves as the page advances.
  const heroRef = React.useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 140]);
  const heroOpacity = useTransform(heroScroll, [0, 0.85], [1, 0]);

  return (
    <div className="min-h-screen bg-white text-ink-warm font-sans selection:bg-brand selection:text-cream overflow-clip">
      <Seo
        title="IV Therapy, NAD+ & Weight Loss Treatments in Costa Mesa, CA"
        description="Explore MotionRX treatments: Signature IV drips from $149, NAD+ restoration, hormone optimization, and GLP-1 medical weight loss — all physician-guided in Costa Mesa, CA."
        path="/services"
      />

      {/* ───────── Treatments (circular coverflow) ───────── */}
      <section className="relative overflow-hidden">
        {/* Static gradient wash — premium, but zero per-frame cost */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(55% 45% at 50% 24%, rgb(var(--stone-rgb) / 0.45), transparent 70%),
              radial-gradient(40% 40% at 12% 86%, rgb(var(--brand-rgb) / 0.08), transparent 72%),
              radial-gradient(40% 40% at 90% 88%, rgb(var(--gold-rgb) / 0.12), transparent 72%),
              linear-gradient(180deg, #FFFFFF 0%, var(--color-sand2) 50%, #FFFFFF 100%)
            `,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-40 pb-28 md:pt-48 md:pb-36">
          {/* Section heading */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-2xl mx-auto text-center mb-14 md:mb-20"
          >
            <motion.span
              variants={fadeUp}
              className="block text-[9px] tracking-[0.5em] uppercase text-brand mb-6"
            >
              Signature Protocols
            </motion.span>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-[1.1] mb-6">
              <MaskLine>The Treatments</MaskLine>
            </h2>
            <motion.p
              variants={fadeUp}
              className="text-ink-warm/60 text-sm md:text-base leading-relaxed font-light"
            >
              Tap any circle to explore. Each protocol is tailored to you and
              provider-guided.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <TreatmentArc services={mainServices} />
          </motion.div>
        </div>
      </section>

      {/* ───────── Values band ───────── */}
      <section className="border-y border-ink-warm/10 bg-sand/70">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-6xl mx-auto px-6 lg:px-12 py-14 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className={`group flex flex-col items-center text-center px-2 md:px-6 ${
                i !== 0 ? "md:border-l md:border-ink-warm/10" : ""
              }`}
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand transition-all duration-500 group-hover:-translate-y-0.5 group-hover:bg-brand group-hover:text-white">
                <p.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="font-serif text-lg md:text-xl text-ink-warm mb-1.5">
                {p.title}
              </h3>
              <p className="text-[12px] leading-relaxed font-light text-ink-warm/55 max-w-[18ch]">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ───────── Treatment Menu banner (cover photo) ───────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden px-6 py-6"
      >
        {/* Full-bleed background photo */}
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/treatments.jpg')" }}
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: EASE }}
        />
        {/* Wash so the text stays legible over the photo */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-ink-warm/55 via-ink-warm/40 to-ink-warm/65"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 w-full px-8 py-20 text-center md:px-16 md:py-28"
        >
          <motion.span
            variants={fadeUp}
            className="block text-[9px] tracking-[0.5em] uppercase text-gold mb-9"
          >
            Treatment Menu
          </motion.span>

          <h2 className="font-serif text-5xl md:text-7xl leading-[1.08] font-light text-cream mb-9">
            <MaskLine>Curated protocols for</MaskLine>
            <MaskLine className="italic text-gold">
              optimal well-being.
            </MaskLine>
          </h2>

          <motion.p
            variants={fadeUp}
            className="text-cream/85 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-md"
          >
            Every treatment starts with a real consultation: evidence-based
            protocols, licensed providers, pharmacy-grade ingredients.
          </motion.p>
        </motion.div>
      </section>

      {/* ───────── Detailed treatments menu (layout via Design Studio) ───────── */}
      <TreatmentsDetail />

      {/* ───────── Enhancements / Boosters ───────── */}
      <section className="relative overflow-hidden bg-white py-28 md:py-32">
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14 md:mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="block text-[9px] tracking-[0.5em] uppercase text-brand mb-6"
            >
              Enhancements
            </motion.span>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">
              <MaskLine>Targeted Boosters</MaskLine>
            </h2>
            <motion.p
              variants={fadeUp}
              className="text-ink-warm/60 text-sm md:text-base leading-relaxed font-light max-w-xl mx-auto"
            >
              Add a quick, focused boost to any treatment.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {maintenance.map((item) => (
              <motion.div key={item.name} variants={fadeUp} className="h-full">
                <div className="group relative flex h-full flex-col border border-ink-warm/10 bg-cream/70 p-7 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-brand/35 hover:bg-white hover:shadow-[0_28px_55px_-32px_rgba(62,17,25,0.45)]">
                  {/* hover top accent */}
                  <span className="pointer-events-none absolute top-0 left-0 h-px w-full bg-brand origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />

                  <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                    <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>

                  <h4 className="text-[15px] font-medium leading-snug text-ink-warm mb-1.5">
                    {item.name}
                  </h4>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-ink-warm/45">
                    {item.duration}
                  </p>

                  <span className="mt-auto pt-8 font-serif text-2xl text-brand">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Closing note */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mt-12 text-center text-[11px] tracking-[0.25em] uppercase text-ink-warm/40"
          >
            Boosters can be added to any visit — just ask your provider.
          </motion.p>
        </div>
      </section>

      {/* ───────── Memberships ───────── */}
      <Memberships />

      {/* ───────── Call to action — oxblood finale ───────── */}
      <section className="relative overflow-hidden bg-brand-deep py-36 md:py-44 px-6 text-center">
        {/* Maroon glow rising from the top */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 90% at 50% 0%, rgb(var(--brand-rgb) / 0.55), transparent 70%)",
          }}
        />
        {/* Hairline gold rule */}
        <span className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-40 bg-gold/50" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="block text-[9px] tracking-[0.5em] uppercase text-gold mb-8"
          >
            Reserve Your Visit
          </motion.span>

          <h2 className="font-serif text-4xl md:text-6xl font-light mb-8 leading-[1.12] text-cream">
            <MaskLine>Ready to elevate</MaskLine>
            <MaskLine className="italic text-gold">your baseline?</MaskLine>
          </h2>
          <motion.p
            variants={fadeUp}
            className="text-cream/60 text-sm md:text-base leading-relaxed mb-12 font-light max-w-lg mx-auto"
          >
            Book a consult and we'll build a protocol around your goals.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href={BOOKING_URL}
              onClick={handleBookingClick}
              className="group inline-flex items-center justify-center gap-3 bg-transparent border border-white text-white px-11 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-brand transition-colors duration-500 rounded-sm"
            >
              Book a Consultation
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
