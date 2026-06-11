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
    a: "IV (intravenous) therapy delivers fluids, vitamins, minerals, and antioxidants directly into your bloodstream for fast, efficient absorption — supporting hydration, energy, immunity, and recovery.",
  },
  {
    q: "Do I need a consultation first?",
    a: "Yes. Every new patient completes a quick medical intake so a licensed provider can confirm the right protocol for you. Many consultations can be completed virtually before your visit.",
  },
  {
    q: "How long does a treatment take?",
    a: "Most IV drips take 30–45 minutes. NAD+ and specialty therapies are administered more slowly for comfort and may take 60–90 minutes.",
  },
  {
    q: "Is there anything I should do before my appointment?",
    a: "We recommend arriving well-hydrated and having eaten a light meal beforehand. Wear comfortable clothing with easy access to your arm. Our team will walk you through everything else when you arrive.",
  },
  {
    q: "How much do treatments cost?",
    a: "Signature drips start at $149, with memberships and packages available. We practice transparent pricing — no surprise fees or hidden costs.",
  },
  {
    q: "Where are you located and is there parking?",
    a: "We're in Costa Mesa, serving all of Orange County, with free on-site parking. Telehealth visits are available statewide.",
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
    <section className="px-4 sm:px-6 pt-12 lg:pt-0 pb-20 md:pb-28 bg-white">
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
                  <span className="italic text-gold">Asked.</span>
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
