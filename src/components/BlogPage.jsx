import React from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";

// Reserved Resources/Blog route (URL structure and nav slot reserved for later).
export default function BlogPage() {
  return (
    <div className="flex min-h-screen items-center bg-ivory text-ink">
      <Seo
        title="Resources | MotionRx"
        description="Evidence-based articles on longevity, hormones, peptides, and performance medicine from MotionRx. Coming soon."
        path="/blog"
      />
      <div className="mx-auto max-w-2xl px-6 py-40 text-center">
        <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-brand">
          Resources
        </p>
        <h1 className="font-serif text-4xl font-medium leading-[1.1] text-ink md:text-6xl">
          Insights on longevity &amp; performance.
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-espresso">
          Our resources library is coming soon: evidence-based articles on
          longevity, hormones, peptides, diagnostics, and performance medicine.
        </p>
        <Link
          to="/services"
          className="mt-10 inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-[11px] uppercase tracking-[0.25em] text-ink/70 transition-colors hover:border-brand hover:text-brand"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
}
