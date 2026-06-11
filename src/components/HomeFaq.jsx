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
    <section className="py-28 px-6 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        {/* Left — heading */}
        <div className="lg:col-span-4">
          <FadeIn direction="left">
            <p className="text-brand text-xs tracking-[0.4em] uppercase mb-4">
              Questions
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-ink leading-tight mb-8">
              Frequently <br />
              <span className="italic text-brand">Asked.</span>
            </h2>
            <p className="text-espresso/60 text-sm leading-relaxed mb-8 max-w-xs">
              Everything you need to know before your first visit. Still have a
              question? Our team is happy to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border-b-2 border-ink pb-2 text-[10px] tracking-[0.3em] uppercase hover:border-brand hover:text-brand transition-colors"
            >
              Ask Us Anything
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </FadeIn>
        </div>

        {/* Right — accordion */}
        <div className="lg:col-span-8">
          <FadeIn direction="right">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-ink/10"
                >
                  <AccordionTrigger className="font-serif text-xl md:text-2xl text-ink py-6 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-espresso/60 text-base leading-relaxed pb-6 pr-8">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
