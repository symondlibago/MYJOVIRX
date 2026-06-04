import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  CalendarCheck,
  HeartPulse,
  ShieldCheck,
  BadgeDollarSign,
  CalendarClock,
  Video,
  FlaskConical,
  Star,
  Quote,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const steps = [
  {
    num: "01",
    icon: CalendarCheck,
    title: "Book Online",
    desc: "Choose your treatment and reserve a time through our partner booking portal — quick, secure, and available 24/7.",
  },
  {
    num: "02",
    icon: Stethoscope,
    title: "Meet Your Provider",
    desc: "Complete a short medical intake and connect with a licensed provider in-clinic or by secure telehealth visit.",
  },
  {
    num: "03",
    icon: HeartPulse,
    title: "Replenish & Thrive",
    desc: "Receive your personalized treatment in our lounge — or get your plan and prescriptions delivered to your door.",
  },
];

const reasons = [
  {
    icon: Stethoscope,
    title: "Physician-Led Care",
    desc: "Every protocol is reviewed and overseen by a licensed medical provider.",
  },
  {
    icon: ShieldCheck,
    title: "Private & Comfortable",
    desc: "Relax in calm, private treatment suites — never a crowded clinic.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    desc: "No surprise fees or hidden costs. You'll always know the price upfront.",
  },
  {
    icon: CalendarClock,
    title: "24/7 Online Booking",
    desc: "Reserve your visit anytime, in just a few taps — on your schedule.",
  },
  {
    icon: Video,
    title: "Telehealth Visits",
    desc: "Consults, lab reviews, and refills available virtually from anywhere.",
  },
  {
    icon: FlaskConical,
    title: "Pharmacy-Grade Quality",
    desc: "Premium ingredients and rigorous safety standards on every treatment.",
  },
];

const testimonials = [
  {
    quote:
      "I felt completely taken care of from the moment I walked in. The team explained everything, and I left with more energy than I've had in months.",
    name: "Jessica M.",
    location: "Irvine, CA",
  },
  {
    quote:
      "Finally a wellness clinic that feels personal. My provider actually listened, reviewed my labs with me, and built a plan around my goals.",
    name: "Daniel R.",
    location: "Laguna Niguel, CA",
  },
  {
    quote:
      "The IV lounge is gorgeous and the nurses are amazing. Booking online was effortless and there were zero surprise charges.",
    name: "Priya S.",
    location: "Newport Beach, CA",
  },
  {
    quote:
      "Booking a virtual consult saved me so much time. My labs were reviewed, my questions answered, and my plan was ready before I ever came in.",
    name: "Megan T.",
    location: "Tustin, CA",
  },
  {
    quote:
      "I've tried other IV bars, but the level of medical attention here is on another level. I actually trust the people treating me.",
    name: "Andre B.",
    location: "Costa Mesa, CA",
  },
  {
    quote:
      "From the calming space to the friendly nurses, every detail feels intentional. I leave feeling recharged every single time.",
    name: "Sofia L.",
    location: "Mission Viejo, CA",
  },
];

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
  const [api, setApi] = useState(null);
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);
  const pausedRef = useRef(false);

  // Sync active dot with the carousel position
  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  // Gentle autoplay that pauses on hover
  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      if (!pausedRef.current) api.scrollNext();
    }, 5500);
    return () => clearInterval(id);
  }, [api]);

  return (
    <>
      {/* HOW IT WORKS */}
      <section className="py-28 px-6 bg-[#F7F2EF]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <p className="text-[#B48A8E] text-xs tracking-[0.4em] uppercase mb-4">
                Getting Started
              </p>
              <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] leading-tight">
                How It <span className="italic text-[#B48A8E]">Works</span>
              </h2>
              <p className="text-[#3D2B1F]/60 leading-relaxed mt-6">
                Modern wellness without the hassle — from first booking to feeling
                your best, in three simple steps.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-14 md:gap-8">
            {steps.map((step, index) => (
              <FadeIn key={step.num} delay={index * 0.12}>
                <div className="text-center">
                  <p className="text-[#B48A8E] text-[10px] tracking-[0.4em] uppercase mb-6">
                    Step {step.num}
                  </p>
                  <div className="w-16 h-16 rounded-full bg-white border border-[#1a1a1a]/10 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <step.icon className="w-7 h-7 text-[#B48A8E] stroke-[1.25px]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1a1a1a] mb-3">{step.title}</h3>
                  <p className="text-[#3D2B1F]/60 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="text-center mt-20">
              <Link
                to="/booking"
                className="inline-flex items-center gap-4 bg-[#1a1a1a] text-white px-12 py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-[#B48A8E] transition-all group"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── WHY PATIENTS CHOOSE US ───── */}
      <section className="py-28 px-6 bg-[#F9F7F5]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <p className="text-[#B48A8E] text-xs tracking-[0.4em] uppercase mb-4">
                Why MyJoviRX
              </p>
              <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] leading-tight">
                Why Patients <span className="italic text-[#B48A8E]">Choose Us</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {reasons.map((item, index) => (
              <FadeIn key={item.title} delay={(index % 3) * 0.1}>
                <div className="border-t border-[#1a1a1a]/10 pt-8">
                  <item.icon className="w-8 h-8 text-[#B48A8E] stroke-[1.25px] mb-6" />
                  <h3 className="font-serif text-2xl text-[#1a1a1a] mb-3">{item.title}</h3>
                  <p className="text-[#3D2B1F]/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="py-28 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#E8B4B8] text-xs tracking-[0.4em] uppercase mb-4">
                Kind Words
              </p>
              <h2 className="font-serif text-5xl md:text-6xl leading-tight">
                What Our Patients Say
              </h2>
            </div>
          </FadeIn>

          <FadeIn>
            <div
              className="relative"
              onMouseEnter={() => (pausedRef.current = true)}
              onMouseLeave={() => (pausedRef.current = false)}
            >
              <Carousel
                setApi={setApi}
                opts={{ loop: true, align: "center", duration: 30 }}
                className="w-full"
              >
                <CarouselContent>
                  {testimonials.map((t, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="h-full flex flex-col justify-between border border-white/10 p-8 lg:p-10 hover:border-[#D4A5A5]/40 transition-colors duration-500">
                        <div>
                          <Quote className="w-8 h-8 text-[#D4A5A5] mb-6" />
                          <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 text-[#E8B4B8] fill-[#E8B4B8]" />
                            ))}
                          </div>
                          <p className="text-white/70 leading-relaxed font-serif text-lg italic">
                            “{t.quote}”
                          </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/10">
                          <p className="text-white text-sm tracking-wide">{t.name}</p>
                          <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mt-1">
                            {t.location}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6 mt-14">
                <button
                  onClick={() => api?.scrollPrev()}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white/70 hover:border-[#D4A5A5] hover:text-[#D4A5A5] transition-colors duration-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: count }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => api?.scrollTo(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        selected === i ? "w-8 bg-[#D4A5A5]" : "w-1.5 bg-white/25 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => api?.scrollNext()}
                  aria-label="Next testimonial"
                  className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white/70 hover:border-[#D4A5A5] hover:text-[#D4A5A5] transition-colors duration-300"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="py-28 px-6 bg-[#F7F2EF]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          {/* Left — heading */}
          <div className="lg:col-span-4">
            <FadeIn direction="left">
              <p className="text-[#B48A8E] text-xs tracking-[0.4em] uppercase mb-4">
                Questions
              </p>
              <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] leading-tight mb-8">
                Frequently <br />
                <span className="italic text-[#B48A8E]">Asked.</span>
              </h2>
              <p className="text-[#3D2B1F]/60 text-sm leading-relaxed mb-8 max-w-xs">
                Everything you need to know before your first visit. Still have a
                question? Our team is happy to help.
              </p>
              <Link
                to="/booking"
                className="inline-flex items-center gap-3 border-b-2 border-[#1a1a1a] pb-2 text-[10px] tracking-[0.3em] uppercase hover:border-[#B48A8E] hover:text-[#B48A8E] transition-colors"
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
                    className="border-b border-[#1a1a1a]/10"
                  >
                    <AccordionTrigger className="font-serif text-xl md:text-2xl text-[#1a1a1a] py-6 hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#3D2B1F]/60 text-base leading-relaxed pb-6 pr-8">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
