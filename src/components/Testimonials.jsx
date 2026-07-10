import React from "react";
const PEOPLE = [
  "/team-laura.avif",
  "/team-camron.avif",
  "/team-tori.avif",
  "/team-kathy.avif",
  "/team-taylor.avif",
  "/team-joy.avif",
  "/dr-scott.avif",
];

export default function Testimonials() {
  // Duplicate the set so the -50% translate loops seamlessly.
  const loop = [...PEOPLE, ...PEOPLE];

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* soft tonal wash for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 50%, rgb(var(--stone-rgb) / 0.18), transparent 75%)",
        }}
      />

      <div className="group relative">
        <div
          className="flex w-max gap-5 animate-marquee will-change-transform group-hover:[animation-play-state:paused] md:gap-7"
          style={{ animationDuration: "60s" }}
        >
          {loop.map((img, i) => (
            <figure
              key={i}
              className="relative h-[380px] w-[280px] shrink-0 overflow-hidden rounded-[2rem] ring-1 ring-black/5 shadow-[0_45px_90px_-50px_rgba(44,42,38,0.6)] transition-transform duration-500 hover:scale-[1.015] md:h-[540px] md:w-[400px]"
            >
              <img
                src={img}
                alt="Patient testimonial"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* subtle inner sheen */}
              <span className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
