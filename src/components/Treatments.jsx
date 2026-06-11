import React, { useState, useEffect } from "react";
import { BOOKING_URL, handleBookingClick } from "@/config";
import Seo from "./Seo";
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
              "radial-gradient(circle, rgba(107,31,46,0.10), transparent 58%), radial-gradient(circle, rgba(212,207,196,0.5), transparent 68%)",
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
                className="group absolute left-1/2 top-1/2 overflow-hidden rounded-full shadow-[0_30px_60px_-28px_rgba(44,42,38,0.5)] ring-1 ring-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C8273]"
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
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-[#FBF9F6]/70" />
                ) : (
                  <>
                    <span className="pointer-events-none absolute inset-0 bg-[#2C2A26]/35 transition-colors duration-300 group-hover:bg-[#2C2A26]/15" />
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
              <span className="mb-4 inline-block text-[9px] uppercase tracking-[0.35em] text-[#6B1F2E]">
                Highly Requested
              </span>
            )}

            <h3 className="mb-4 font-serif text-3xl font-light leading-[1.1] text-[#2C2A26] md:text-5xl">
              {current.name}
            </h3>

            <p className="mx-auto mb-8 max-w-lg text-sm font-light leading-relaxed text-[#2C2A26]/65 md:text-base">
              {current.description}
            </p>

            <div className="mb-9 flex items-center justify-center gap-8">
              <div>
                <p className="mb-1.5 text-[10px] uppercase tracking-[0.2em] text-[#2C2A26]/40">
                  Investment
                </p>
                <span className="font-serif text-xl">{current.price}</span>
              </div>
              <span className="h-9 w-px bg-[#2C2A26]/15" />
              <div>
                <p className="mb-1.5 text-[10px] uppercase tracking-[0.2em] text-[#2C2A26]/40">
                  Duration
                </p>
                <span className="font-serif text-xl">{current.duration}</span>
              </div>
            </div>

            <a
              href={BOOKING_URL}
              onClick={handleBookingClick}
              className="group inline-flex items-center justify-center gap-3 rounded-sm bg-[#3E1119] px-9 py-4 text-[10px] uppercase tracking-[0.3em] text-white transition-colors duration-500 hover:bg-[#6B1F2E]"
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
                ? "w-7 bg-[#6B1F2E]"
                : "w-1.5 bg-[#2C2A26]/20 hover:bg-[#2C2A26]/40"
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
    <div className="min-h-screen bg-white text-[#2C2A26] font-sans selection:bg-[#6B1F2E] selection:text-[#FBF9F6] overflow-clip">
      <Seo
        title="IV Therapy, NAD+ & Weight Loss Treatments in Costa Mesa, CA"
        description="Explore MyJoviRX treatments: Signature IV drips from $149, NAD+ restoration, hormone optimization, and GLP-1 medical weight loss — all physician-guided in Costa Mesa, CA."
        path="/services"
      />

      {/* ───────── Hero ───────── */}
      <section
        ref={heroRef}
        className="relative pt-44 md:pt-56 pb-28 px-6 lg:px-12 max-w-5xl mx-auto text-center"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={fadeUp}
            className="block text-[9px] tracking-[0.5em] uppercase text-[#6B1F2E] mb-9"
          >
            Treatment Menu
          </motion.span>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.08] font-light text-[#2C2A26] mb-9">
            <MaskLine>Curated protocols for</MaskLine>
            <MaskLine className="italic text-[#6B1F2E]">
              optimal well-being.
            </MaskLine>
          </h1>

          <motion.p
            variants={fadeUp}
            className="text-[#2C2A26]/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light"
          >
            Every treatment begins with an unrushed medical consultation. Our
            protocols are evidence-based, overseen by licensed providers, and
            utilize premium, pharmacy-grade ingredients.
          </motion.p>

          {/* Scroll cue */}
          <motion.div
            variants={fadeUp}
            className="mt-16 flex flex-col items-center gap-3"
          >
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#2C2A26]/35">
              Explore
            </span>
            <span className="relative block h-12 w-px overflow-hidden bg-[#2C2A26]/15">
              <motion.span
                className="absolute inset-x-0 top-0 h-4 bg-[#6B1F2E]"
                animate={{ y: ["-100%", "300%"] }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.2,
                }}
              />
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ───────── Values band ───────── */}
      <section className="border-y border-[#2C2A26]/10 bg-[#F4F1EB]/70">
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
                i !== 0 ? "md:border-l md:border-[#2C2A26]/10" : ""
              }`}
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#6B1F2E]/10 text-[#6B1F2E] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:bg-[#6B1F2E] group-hover:text-white">
                <p.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="font-serif text-lg md:text-xl text-[#2C2A26] mb-1.5">
                {p.title}
              </h3>
              <p className="text-[12px] leading-relaxed font-light text-[#2C2A26]/55 max-w-[18ch]">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ───────── Treatments (circular coverflow) ───────── */}
      <section className="relative overflow-hidden">
        {/* Static gradient wash — premium, but zero per-frame cost */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(55% 45% at 50% 24%, rgba(212,207,196,0.45), transparent 70%),
              radial-gradient(40% 40% at 12% 86%, rgba(107,31,46,0.08), transparent 72%),
              radial-gradient(40% 40% at 90% 88%, rgba(184,168,137,0.12), transparent 72%),
              linear-gradient(180deg, #FFFFFF 0%, #F3EFE8 50%, #FFFFFF 100%)
            `,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-28 md:py-36">
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
              className="block text-[9px] tracking-[0.5em] uppercase text-[#6B1F2E] mb-6"
            >
              Signature Protocols
            </motion.span>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-[1.1] mb-6">
              <MaskLine>The Treatments</MaskLine>
            </h2>
            <motion.p
              variants={fadeUp}
              className="text-[#2C2A26]/60 text-sm md:text-base leading-relaxed font-light"
            >
              Tap any circle to explore — each protocol is tailored to your
              biology and guided by a licensed provider.
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
              className="block text-[9px] tracking-[0.5em] uppercase text-[#6B1F2E] mb-6"
            >
              Enhancements
            </motion.span>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">
              <MaskLine>Targeted Boosters</MaskLine>
            </h2>
            <motion.p
              variants={fadeUp}
              className="text-[#2C2A26]/60 text-sm md:text-base leading-relaxed font-light max-w-xl mx-auto"
            >
              Add a focused boost to any treatment — quick, potent, and chosen
              around exactly how you want to feel.
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
                <div className="group relative flex h-full flex-col border border-[#2C2A26]/10 bg-[#FBF9F6]/70 p-7 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#6B1F2E]/35 hover:bg-white hover:shadow-[0_28px_55px_-32px_rgba(62,17,25,0.45)]">
                  {/* hover top accent */}
                  <span className="pointer-events-none absolute top-0 left-0 h-px w-full bg-[#6B1F2E] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />

                  <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#6B1F2E]/10 text-[#6B1F2E] transition-colors duration-500 group-hover:bg-[#6B1F2E] group-hover:text-white">
                    <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>

                  <h4 className="text-[15px] font-medium leading-snug text-[#2C2A26] mb-1.5">
                    {item.name}
                  </h4>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#2C2A26]/45">
                    {item.duration}
                  </p>

                  <span className="mt-auto pt-8 font-serif text-2xl text-[#6B1F2E]">
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
            className="mt-12 text-center text-[11px] tracking-[0.25em] uppercase text-[#2C2A26]/40"
          >
            Boosters can be added to any visit — just ask your provider.
          </motion.p>
        </div>
      </section>

      {/* ───────── Call to action — oxblood finale ───────── */}
      <section className="relative overflow-hidden bg-[#3E1119] py-36 md:py-44 px-6 text-center">
        {/* Maroon glow rising from the top */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 90% at 50% 0%, rgba(107,31,46,0.55), transparent 70%)",
          }}
        />
        {/* Hairline gold rule */}
        <span className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-40 bg-[#B8A889]/50" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="block text-[9px] tracking-[0.5em] uppercase text-[#B8A889] mb-8"
          >
            Reserve Your Visit
          </motion.span>

          <h2 className="font-serif text-4xl md:text-6xl font-light mb-8 leading-[1.12] text-[#FBF9F6]">
            <MaskLine>Ready to elevate</MaskLine>
            <MaskLine className="italic text-[#B8A889]">your baseline?</MaskLine>
          </h2>
          <motion.p
            variants={fadeUp}
            className="text-[#FBF9F6]/60 text-sm md:text-base leading-relaxed mb-12 font-light max-w-lg mx-auto"
          >
            Schedule a consultation with our medical team to design a protocol
            tailored precisely to your biology.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href={BOOKING_URL}
              onClick={handleBookingClick}
              className="group inline-flex items-center justify-center gap-3 bg-[#FBF9F6] text-[#3E1119] px-11 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-[#B8A889] transition-colors duration-500 rounded-sm"
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
