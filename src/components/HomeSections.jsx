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
    q: "Do you offer telehealth?",
    a: "Absolutely. Many consultations, lab reviews, hormone follow-ups, and prescription refills are available virtually from anywhere in the state.",
  },
  {
    q: "How much do treatments cost?",
    a: "Signature drips start at $149, with memberships and packages available. We practice transparent pricing — no surprise fees or hidden costs.",
  },
  {
    q: "Where are you located and is there parking?",
    a: "We're in Laguna Hills, serving all of Orange County, with free on-site parking. Telehealth visits are available statewide.",
  },
];

export default function HomeSections() {
  return (
    <section className="py-28 px-6 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        {/* Left — heading */}
        <div className="lg:col-span-4">
          <FadeIn direction="left">
            <p className="text-[#B8A889] text-xs tracking-[0.4em] uppercase mb-4">
              Questions
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#0F0F0F] leading-tight mb-8">
              Frequently <br />
              <span className="italic text-[#B8A889]">Asked.</span>
            </h2>
            <p className="text-[#453122]/60 text-sm leading-relaxed mb-8 max-w-xs">
              Everything you need to know before your first visit. Still have a
              question? Our team is happy to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border-b-2 border-[#0F0F0F] pb-2 text-[10px] tracking-[0.3em] uppercase hover:border-[#453122] hover:text-[#453122] transition-colors"
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
                  className="border-b border-[#0F0F0F]/10"
                >
                  <AccordionTrigger className="font-serif text-xl md:text-2xl text-[#0F0F0F] py-6 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#453122]/60 text-base leading-relaxed pb-6 pr-8">
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
