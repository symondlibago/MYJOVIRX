import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Heart, Leaf } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  const values = [
    {
      icon: Stethoscope,
      title: "Clinical Expertise",
      description: "Every protocol is grounded in evidence and delivered by licensed medical professionals you can trust."
    },
    {
      icon: Heart,
      title: "Personal Attention",
      description: "We take time to understand your goals, labs, and lifestyle—no rushed, one-size-fits-all care."
    },
    {
      icon: Leaf,
      title: "Whole-Body Wellness",
      description: "From hydration to hormones, we treat the root cause to help you feel and perform your best long term."
    }
  ];

  const team = [
    { name: "Camron Love", credentials: "MSN, RN, CCRN", image: "/team-camron.jpg" },
    { name: "Laura Le", credentials: "MSN, RN, CEN", image: "/team-laura.jpg" },
    { name: "Tori Cathcart", credentials: "BSN, RN", image: "/team-tori.jpg" },
    { name: "Kathy Pak", credentials: "BSN, RN", image: "/team-kathy.jpg" },
    { name: "Taylor Mortis", credentials: "BSN, RN", image: "/team-taylor.jpg" },
    { name: "Joy-Li Van Pala", credentials: "BSN, RN", image: "/team-joy.jpg" }
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F5] pt-32 pb-24">
      {/* Hero Section - Split Layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative aspect-3/4 overflow-hidden group">
              <img
                src="/dr-scott.jpg"
                alt="Dr. Courtney S. Scott, Medical Director"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-20px border-white/10 m-4 pointer-events-none" />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="max-w-xl">
              <p className="text-[#B48A8E] text-[10px] tracking-[0.5em] uppercase mb-6">The Medical Director</p>
              <h1 className="font-serif text-6xl md:text-7xl text-[#1a1a1a] mb-8 leading-tight">
                Wellness, <br />
                <span className="italic">Reimagined.</span>
              </h1>
              <p className="text-[#3D2B1F]/70 text-lg leading-relaxed mb-8">
                MyJoviRX is led by Medical Director Dr. Courtney S. Scott, whose practice
                centers on comprehensive care—prevention, evaluation, diagnosis, and
                treatment—with a focus on anti-aging and longevity.
              </p>
              <p className="text-[#3D2B1F]/70 text-lg leading-relaxed mb-10">
                He built MyJoviRX to be a non-clinical, rejuvenating oasis: a place where
                modern medicine meets genuine hospitality, and where every plan is
                tailored to how you actually want to feel.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Our Wellness Team */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#B48A8E] text-[10px] tracking-[0.5em] uppercase mb-6">The Team</p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] mb-6">Our Wellness Team</h2>
            <p className="text-[#3D2B1F]/60 leading-relaxed">
              Meet the heart of MyJoviRX—a team of experienced, licensed registered nurses
              whose passion, expertise, and genuine care guide every visit.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-10">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={(index % 3) * 0.1}>
              <div className="group">
                <div className="aspect-4/5 overflow-hidden bg-[#ECE6E1] mb-5">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.credentials}`}
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-2xl text-[#1a1a1a]">{member.name}</h3>
                <p className="text-[#B48A8E] text-[10px] tracking-[0.3em] uppercase mt-1.5">
                  {member.credentials}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Philosophy / Values Section - Dark Mode Break */}
      <div className="bg-[#1a1a1a] py-32 mb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-16">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="flex justify-center mb-8">
                    <value.icon className="w-10 h-10 text-[#E8B4B8] stroke-[1px]" />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-6 italic">{value.title}</h3>
                  <p className="text-white/40 leading-relaxed text-sm tracking-wide">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* The Space - Visual Journey */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="aspect-video overflow-hidden">
                <img src="/hero-1.jpg" alt="The MyJoviRX wellness lounge" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center bg-white p-12 md:p-20 shadow-sm">
            <FadeIn>
              <p className="text-[#B48A8E] text-[10px] tracking-[0.5em] uppercase mb-6">The Space</p>
              <h2 className="font-serif text-4xl text-[#1a1a1a] mb-6">A Non-Clinical Oasis</h2>
              <p className="text-[#3D2B1F]/60 leading-relaxed text-sm">
                Designed to feel nothing like a hospital, our private lounge and
                treatment suites offer a serene environment where you can recline,
                relax, and let your therapy do its work.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Featured Press / Badges */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <FadeIn>
          <div className="border-y border-[#1a1a1a]/10 py-16">
            <p className="text-center text-[#B48A8E] text-[10px] tracking-[0.5em] uppercase mb-12">
              Our Standard
            </p>
            <div className="flex flex-wrap justify-center items-center gap-16 text-[#1a1a1a]/20">
              <span className="font-serif text-2xl tracking-tighter uppercase">Licensed</span>
              <span className="font-serif text-2xl tracking-tighter uppercase">Medical-Grade</span>
              <span className="font-serif text-2xl tracking-tighter uppercase">Personalized</span>
              <span className="font-serif text-2xl tracking-tighter uppercase">Confidential</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Final CTA */}
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="font-serif text-5xl text-[#1a1a1a] mb-8 italic">
            Begin Your Journey
          </h2>
          <p className="text-[#3D2B1F]/60 mb-12 max-w-md mx-auto leading-relaxed">
            Ready to feel more like yourself? Book a consultation and we'll build a plan around your goals.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-4 bg-[#1a1a1a] text-white px-12 py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-[#B48A8E] transition-all group"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
