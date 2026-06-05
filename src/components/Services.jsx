import React from "react";
import { BOOKING_URL, handleBookingClick } from "@/config";
import { ArrowRight, Clock, Sparkles, ShieldCheck, Video, BadgeDollarSign } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Services() {
  const mainServices = [
    {
      name: "Signature IV Drip",
      description: "A custom blend of fluids, electrolytes, vitamins, and antioxidants delivered intravenously for rapid hydration, immune support, and recovery. Choose from energy, immunity, beauty, and recovery formulas.",
      duration: "30–45 min",
      price: "From $149",
      image: "/hero-2.jpg"
    },
    {
      name: "NAD+ Restoration",
      description: "A premium cellular therapy that supports energy production, mental clarity, and healthy aging. Administered slowly and comfortably by our medical team in a private suite.",
      duration: "60–90 min",
      price: "From $399",
      image: "/treatment-5.jpg",
      popular: true
    },
    {
      name: "Hormone Optimization",
      description: "Testosterone replacement and hormone balancing for men and women, with routine lab monitoring to address fatigue, low libido, brain fog, and athletic performance.",
      duration: "Monthly",
      price: "From $199/mo",
      image: "/treatment-6.jpg",
      popular: true
    },
    {
      name: "Medical Weight Loss",
      description: "Physician-supervised GLP-1 and peptide programs (semaglutide / tirzepatide) paired with nutrition guidance and check-ins for sustainable, healthy results.",
      duration: "Monthly",
      price: "From $299/mo",
      image: "/treatment-4.jpg"
    }
  ];

  const maintenance = [
    { name: "Vitamin B12 / Lipo-MIC Shot", price: "+$35", duration: "10 min" },
    { name: "Glutathione Push", price: "+$45", duration: "15 min" },
    { name: "NAD+ Add-On Boost", price: "+$99", duration: "30 min" },
    { name: "Myers' Cocktail Upgrade", price: "+$50", duration: "15 min" }
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F5] pt-32 pb-24">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-[#B48A8E] text-[10px] tracking-[0.5em] uppercase mb-6">
              The Menu
            </p>
            <h1 className="font-serif text-6xl md:text-8xl text-[#1a1a1a] mb-10 leading-[0.9]">
              Tailored <br />
              <span className="italic font-light">Protocols.</span>
            </h1>
            <p className="text-[#3D2B1F]/60 text-lg md:text-xl leading-relaxed border-l border-[#1a1a1a]/10 pl-8">
              At MyJoviRX, every treatment begins with a medical consultation.
              Our protocols are unrushed, evidence-based, and overseen by licensed
              providers using premium, pharmacy-grade ingredients.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Main Services - Alternating Layout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-40">
        <div className="space-y-32">
          {mainServices.map((service, index) => (
            <FadeIn key={service.name} direction={index % 2 === 0 ? "left" : "right"}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                {/* Image Container */}
                <div className="w-full md:w-1/2 aspect-4/5 overflow-hidden bg-[#ECE6E1]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>

                {/* Content Container */}
                <div className="w-full md:w-1/2">
                  {service.popular && (
                    <div className="flex items-center gap-2 text-[#B48A8E] mb-4">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-[9px] tracking-[0.3em] uppercase font-bold">Most Requested</span>
                    </div>
                  )}
                  <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6 italic">
                    {service.name}
                  </h2>
                  <p className="text-[#3D2B1F]/70 text-lg leading-relaxed mb-10">
                    {service.description}
                  </p>

                  <div className="flex items-end justify-between border-b border-[#1a1a1a]/10 pb-6">
                    <div className="flex items-center gap-3 text-[#1a1a1a]/40 uppercase text-[10px] tracking-[0.2em]">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>
                    <span className="font-serif text-3xl text-[#1a1a1a]">{service.price}</span>
                  </div>

                  <a
                    href={BOOKING_URL}
                    onClick={handleBookingClick}
                    className="inline-flex items-center gap-4 mt-10 text-[10px] tracking-[0.3em] uppercase group"
                  >
                    Book This Treatment
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Add-Ons & Boosters */}
      <section className="bg-[#1a1a1a] py-32 text-white mb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <FadeIn>
              <p className="text-[#E8B4B8] text-[10px] tracking-[0.5em] uppercase mb-6">
                Enhancements
              </p>
              <h2 className="font-serif text-5xl mb-8">Add-Ons &amp; <br/>Boosters</h2>
              <p className="text-white/40 max-w-md leading-relaxed">
                Targeted boosters to amplify any drip — or quick, in-and-out
                injections you can add on their own to support energy, immunity,
                and recovery.
              </p>
            </FadeIn>

            <div className="space-y-2">
              {maintenance.map((item, idx) => (
                <FadeIn key={item.name} delay={idx * 0.1}>
                  <div className="flex items-center justify-between py-8 border-b border-white/10 group hover:bg-white/2 px-4 transition-colors">
                    <div>
                      <h4 className="text-lg mb-1">{item.name}</h4>
                      <p className="text-white/30 text-[10px] tracking-widest uppercase">{item.duration}</p>
                    </div>
                    <span className="font-serif text-2xl text-[#E8B4B8]">{item.price}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Policies - Clean Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-40">
        <div className="grid md:grid-cols-3 gap-12 border-t border-[#1a1a1a]/10 pt-20">
          <FadeIn delay={0.1}>
            <ShieldCheck className="w-8 h-8 text-[#B48A8E] mb-6" />
            <h4 className="font-serif text-xl text-[#1a1a1a] mb-4">Medical Oversight</h4>
            <p className="text-[#3D2B1F]/60 text-sm leading-relaxed">
              Every protocol is reviewed and overseen by a licensed medical provider, with safety screening before treatment.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Video className="w-8 h-8 text-[#B48A8E] mb-6" />
            <h4 className="font-serif text-xl text-[#1a1a1a] mb-4">Telehealth Visits</h4>
            <p className="text-[#3D2B1F]/60 text-sm leading-relaxed">
              Many consultations, lab reviews, and prescription refills are available virtually — from anywhere, on your schedule.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <BadgeDollarSign className="w-8 h-8 text-[#B48A8E] mb-6" />
            <h4 className="font-serif text-xl text-[#1a1a1a] mb-4">Transparent Pricing</h4>
            <p className="text-[#3D2B1F]/60 text-sm leading-relaxed">
              No surprise fees, hidden costs, or billing confusion — just clear pricing before you ever begin.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="bg-[#EFE6E2] py-24 px-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-serif text-5xl text-[#1a1a1a] mb-8">
                Ready to <span className="italic">Feel Your Best?</span>
              </h2>
              <a
                href={BOOKING_URL}
                onClick={handleBookingClick}
                className="inline-flex items-center gap-4 bg-[#1a1a1a] text-white px-12 py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-[#3D2B1F] transition-all"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
