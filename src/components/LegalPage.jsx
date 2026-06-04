import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { legalDocs } from "@/data/legal";

export default function LegalPage({ slug }) {
  const doc = legalDocs[slug];

  if (!doc) {
    return (
      <div className="min-h-screen bg-[#F9F7F5] pt-40 pb-24 px-6 text-center">
        <h1 className="font-serif text-4xl text-[#1a1a1a] mb-6">Page Not Found</h1>
        <Link to="/" className="text-[#B48A8E] tracking-widest uppercase text-xs">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F7F5] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <p className="text-[#B48A8E] text-[10px] tracking-[0.5em] uppercase mb-6">Legal</p>
          <h1 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] mb-4 leading-tight">
            {doc.title}
          </h1>
          <p className="text-[#1a1a1a]/40 text-xs tracking-widest uppercase mb-10">
            Last updated · {doc.updated}
          </p>
          {doc.intro && (
            <p className="text-[#3D2B1F]/70 text-lg leading-relaxed mb-12">{doc.intro}</p>
          )}
        </FadeIn>

        <div className="space-y-12">
          {doc.sections.map((section, i) => (
            <FadeIn key={i}>
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-5">
                  {section.heading}
                </h2>
                {section.body?.map((p, j) => (
                  <p key={j} className="text-[#3D2B1F]/70 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-3 mt-2">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex gap-3 text-[#3D2B1F]/70 leading-relaxed">
                        <span className="text-[#B48A8E] mt-1 shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-[#1a1a1a]/10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a] hover:text-[#B48A8E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
