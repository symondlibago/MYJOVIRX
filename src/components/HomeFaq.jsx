import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is IV therapy?",
    a: "Fluids, vitamins, and antioxidants delivered straight into your bloodstream, for fast hydration, energy, and recovery.",
  },
  {
    q: "Do I need a consultation first?",
    a: "Yes. A quick intake lets a provider confirm the right protocol for you, often done virtually before your visit.",
  },
  {
    q: "How long does a treatment take?",
    a: "Most drips take 30 to 45 minutes. NAD+ and specialty therapies run slower for comfort, about 60 to 90 minutes.",
  },
  {
    q: "Is there anything I should do before my appointment?",
    a: "Arrive hydrated, eat a light meal, and wear something with easy access to your arm. We'll handle the rest.",
  },
  {
    q: "How much do treatments cost?",
    a: "Signature drips start at $149, with memberships and packages available. Transparent pricing, no hidden fees.",
  },
  {
    q: "Where are you located and is there parking?",
    a: "Costa Mesa, with free on-site parking. Telehealth is available statewide.",
  },
];

// FAQPage structured data so the questions are eligible for rich results.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomeFaq() {
  return (
    <section className="px-4 sm:px-6 pt-8 md:pt-10 pb-20 md:pb-28 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-7xl mx-auto">
        {/* Premium oxblood card */}
        <div className="relative overflow-hidden rounded-4xl md:rounded-[44px] bg-brand-deep px-6 py-14 md:px-14 lg:px-16 md:py-20 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.6)]">
          {/* Soft gold glow + hairline for depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(55% 60% at 50% 0%, rgb(var(--gold-rgb) / 0.10), transparent 70%)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-40 bg-gold/40"
          />

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left — heading */}
            <div className="lg:col-span-5">
              <FadeIn direction="left">
                <p className="text-gold text-[11px] tracking-[0.4em] uppercase mb-5">
                  Questions
                </p>
                <h2 className="font-serif text-5xl md:text-6xl text-white leading-[1.04] mb-6">
                  Frequently <br />
                  <span className="italic text-gold">Asked</span>
                </h2>
                <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-xs">
                  Everything you need to know before your first visit. Still have
                  a question? Our team is happy to help.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border-b border-gold/50 pb-2 text-[10px] tracking-[0.3em] uppercase text-gold hover:border-gold transition-colors"
                >
                  Ask Us Anything
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </FadeIn>
            </div>

            {/* Right — accordion */}
            <div className="lg:col-span-7">
              <FadeIn direction="right">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-white/12"
                    >
                      <AccordionTrigger className="font-sans font-normal text-[15px] md:text-base text-white/90 py-5 hover:no-underline hover:text-gold [&>svg]:text-gold/70 transition-colors">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/55 text-sm md:text-[15px] leading-relaxed pb-5 pr-6">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
