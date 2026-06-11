import React from "react";

// Seamless infinite marquee. The item set is duplicated and the track is
// translated by -50%, so the loop is invisible. Pauses on hover.
export default function Marquee({ items, className = "" }) {
  const loop = [...items, ...items];
  return (
    <div className={`relative overflow-hidden bg-[#3E1119] py-7 border-y border-black/20 ${className}`}>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-serif text-xl md:text-2xl uppercase tracking-[0.15em] text-[#B8A889] mx-10">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8A889]/60 shrink-0" />
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#3E1119] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#3E1119] to-transparent" />
    </div>
  );
}
