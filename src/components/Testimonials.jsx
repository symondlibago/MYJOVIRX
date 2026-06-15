import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Image-based testimonials for the Home page. Renders ONE of four layouts
 * chosen in the Design Studio (Testimonials Layout):
 *   • cluster   — scattered photo circles (designer's layout 1)
 *   • coverflow — 3D center-focus carousel
 *   • arch      — arched "cathedral window" portrait gallery
 *   • collage   — editorial overlapping framed composition
 *
 * NOTE: these reuse existing photos as PLACEHOLDERS — swap in real patient /
 * outcome photos in PEOPLE below.
 */

const PEOPLE = [
  "/team-laura.jpg",
  "/team-camron.jpg",
  "/team-tori.jpg",
  "/team-kathy.jpg",
  "/team-taylor.jpg",
  "/team-joy.jpg",
  "/dr-scott.jpg",
];

const EASE = [0.22, 1, 0.36, 1];

/* ── Layout 1 · Cluster (scattered circles) ────────────────────── */

// Centre coordinates (%) + responsive sizes for the desktop scatter.
const CLUSTER = [
  { img: PEOPLE[0], left: "42%", top: "30%", size: "h-44 w-44 md:h-56 md:w-56" },
  { img: PEOPLE[1], left: "20%", top: "24%", size: "h-28 w-28 md:h-32 md:w-32" },
  { viewMore: true, left: "13%", top: "54%", size: "h-24 w-24 md:h-28 md:w-28" },
  { img: PEOPLE[2], left: "28%", top: "66%", size: "h-24 w-24 md:h-28 md:w-28" },
  { img: PEOPLE[3], left: "45%", top: "74%", size: "h-28 w-28 md:h-36 md:w-36" },
  { img: PEOPLE[4], left: "63%", top: "62%", size: "h-32 w-32 md:h-40 md:w-40" },
  { img: PEOPLE[5], left: "67%", top: "28%", size: "h-32 w-32 md:h-40 md:w-40" },
  { img: PEOPLE[6], left: "82%", top: "48%", size: "h-24 w-24 md:h-28 md:w-28" },
];

function Cluster() {
  return (
    <>
      {/* Tablet / desktop — organic scatter */}
      <div className="relative mx-auto hidden h-[460px] max-w-4xl sm:block md:h-[540px]">
        {CLUSTER.map((c, i) =>
          c.viewMore ? (
            <Link
              key="vm"
              to="/contact"
              style={{ left: c.left, top: c.top }}
              className={`absolute grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand text-center text-white transition-transform duration-500 hover:scale-105 ${c.size}`}
            >
              <span className="text-[10px] uppercase tracking-[0.25em]">View More</span>
            </Link>
          ) : (
            <span
              key={i}
              style={{ left: c.left, top: c.top }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-1 ring-black/5 shadow-[0_24px_50px_-28px_rgba(44,42,38,0.55)] transition-transform duration-500 hover:scale-105 ${c.size}`}
            >
              <img
                src={c.img}
                alt="Patient testimonial"
                className="h-full w-full object-cover"
              />
            </span>
          )
        )}
      </div>

      {/* Mobile — simple centered wrap */}
      <div className="flex flex-wrap justify-center gap-4 sm:hidden">
        {PEOPLE.slice(0, 6).map((img, i) => (
          <span
            key={i}
            className="h-24 w-24 overflow-hidden rounded-full ring-1 ring-black/5"
          >
            <img src={img} alt="Patient testimonial" className="h-full w-full object-cover" />
          </span>
        ))}
        <Link
          to="/contact"
          className="grid h-24 w-24 place-items-center rounded-full bg-brand text-center text-[10px] uppercase tracking-[0.25em] text-white"
        >
          View More
        </Link>
      </div>
    </>
  );
}

/* ── Layout 2 · Coverflow (3D center carousel) ─────────────────── */

function useViewportWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const f = () => setW(window.innerWidth);
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);
  return w;
}

function Coverflow() {
  const N = PEOPLE.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const w = useViewportWidth();

  const small = w < 640;
  const cardW = small ? 188 : 260;
  const cardH = small ? 250 : 344;
  const offset = small ? 150 : 250;

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % N), 3600);
    return () => clearTimeout(id);
  }, [active, paused, N]);

  const slotOf = (i) => {
    let d = ((i - active) % N + N) % N;
    if (d > N / 2) d -= N;
    return d;
  };

  return (
    <div>
      <div
        className="relative mx-auto overflow-hidden"
        style={{ height: cardH + 60 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {PEOPLE.map((img, i) => {
          const slot = slotOf(i);
          const abs = Math.abs(slot);
          const visible = abs <= 2;
          return (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className="absolute left-1/2 top-1/2 overflow-hidden rounded-3xl ring-1 ring-gold/40 shadow-[0_40px_80px_-40px_rgba(44,42,38,0.65)]"
              style={{ width: cardW, height: cardH }}
              animate={{
                x: slot * offset - cardW / 2,
                y: -cardH / 2,
                scale: slot === 0 ? 1 : 0.82,
                opacity: visible ? (slot === 0 ? 1 : 0.45) : 0,
                zIndex: 30 - abs,
                filter: slot === 0 ? "grayscale(0)" : "grayscale(0.4)",
              }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <img src={img} alt="Patient testimonial" className="h-full w-full object-cover" />
            </motion.button>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {PEOPLE.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-7 bg-brand" : "w-1.5 bg-ink-warm/20 hover:bg-ink-warm/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Layout switch (synced with Design Studio) ─────────────────── */

function readLayout() {
  if (typeof document === "undefined") return "cluster";
  return document.documentElement.getAttribute("data-tm-layout") || "cluster";
}

function useTmLayout() {
  const [layout, setLayout] = useState(readLayout);
  useEffect(() => {
    setLayout(readLayout());
    const onChange = (e) => setLayout(e.detail || readLayout());
    window.addEventListener("myjovirx-tm-layout", onChange);
    return () => window.removeEventListener("myjovirx-tm-layout", onChange);
  }, []);
  return layout;
}

export default function Testimonials() {
  const layout = useTmLayout();
  return (
    <section className="bg-white px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center md:mb-16">
          <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
            Testimonials
          </p>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-light leading-[1.1] text-brand md:text-5xl">
            Treatment Outcomes You Can Trust
          </h2>
        </div>

        {layout === "coverflow" ? <Coverflow /> : <Cluster />}
      </div>
    </section>
  );
}
