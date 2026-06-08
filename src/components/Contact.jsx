import React, { useState } from "react";
import { BOOKING_URL, handleBookingClick } from "@/config";
import { MapPin, Phone, Mail, Clock, Instagram, Check, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const details = [
    {
      icon: MapPin,
      label: "Visit",
      lines: ["250 Fischer Ave", "Costa Mesa, CA 92626", "United States"],
    },
    {
      icon: Phone,
      label: "Call or Text",
      lines: ["(949) 281-1440"],
      href: "tel:+19492811440",
    },
    {
      icon: Mail,
      label: "Email",
      lines: ["hello@myjovirx.com"],
      href: "mailto:hello@myjovirx.com",
    },
    {
      icon: Clock,
      label: "Hours",
      lines: ["Mon – Fri · 9:00 AM – 6:00 PM", "Saturday · 10:00 AM – 4:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 md:mb-24">
        <FadeIn>
          <p className="text-[#B8A889] text-[10px] tracking-[0.5em] uppercase mb-6">Get In Touch</p>
          <h1 className="font-serif text-6xl md:text-8xl text-[#0F0F0F] leading-[0.9] mb-8">
            Contact <span className="italic font-light">Us.</span>
          </h1>
          <p className="text-[#453122]/60 text-lg max-w-2xl leading-relaxed border-l border-[#0F0F0F]/10 pl-8">
            Questions about a treatment, membership, or telehealth visit? Send us a
            note and our team will get back to you. Ready to book? You'll be guided
            to our partner scheduling portal.
          </p>
        </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left — Details */}
        <FadeIn direction="left">
          <div>
            <div className="grid sm:grid-cols-2 gap-10">
              {details.map((d) => (
                <div key={d.label}>
                  <d.icon className="w-6 h-6 text-[#453122] mb-4" />
                  <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#0F0F0F]/40 mb-3">
                    {d.label}
                  </h3>
                  {d.lines.map((line, i) =>
                    d.href && i === 0 ? (
                      <a
                        key={i}
                        href={d.href}
                        className="block text-[#0F0F0F] leading-relaxed hover:text-[#453122] transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="text-[#453122]/70 leading-relaxed">
                        {line}
                      </p>
                    )
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-[#0F0F0F]/10">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[#0F0F0F] hover:text-[#453122] transition-colors text-sm tracking-wide"
              >
                <Instagram className="w-4 h-4" />
                @myjovirx
              </a>
            </div>

            {/* Map */}
            <div className="mt-10 aspect-video overflow-hidden border border-[#0F0F0F]/10">
              <iframe
                title="MyJoviRX location map"
                src="https://maps.google.com/maps?q=250%20Fischer%20Ave%20Costa%20Mesa%20CA%2092626&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </FadeIn>

        {/* Right — Form */}
        <FadeIn direction="right">
          {submitted ? (
            <div className="bg-white p-12 shadow-sm text-center">
              <div className="w-16 h-16 bg-[#0F0F0F] rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-serif text-4xl text-[#0F0F0F] mb-4 italic">Message Sent</h2>
              <p className="text-[#453122]/60 leading-relaxed mb-8">
                Thank you for reaching out. A member of our team will respond within
                one business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[10px] tracking-[0.4em] uppercase border-b border-[#0F0F0F] pb-2 hover:text-[#453122] hover:border-[#453122] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-sm space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase text-[#0F0F0F]/40">Full Name</label>
                  <Input
                    required
                    className="border-0 border-b border-[#0F0F0F]/10 bg-transparent rounded-none px-0 focus-visible:ring-0 focus:border-[#0F0F0F] transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase text-[#0F0F0F]/40">Email Address</label>
                  <Input
                    type="email"
                    required
                    className="border-0 border-b border-[#0F0F0F]/10 bg-transparent rounded-none px-0 focus-visible:ring-0 focus:border-[#0F0F0F] transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-[#0F0F0F]/40">Subject</label>
                <Input
                  className="border-0 border-b border-[#0F0F0F]/10 bg-transparent rounded-none px-0 focus-visible:ring-0 focus:border-[#0F0F0F] transition-colors"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-[#0F0F0F]/40">Message</label>
                <Textarea
                  required
                  placeholder="How can we help?"
                  className="border-0 border-b border-[#0F0F0F]/10 bg-transparent rounded-none px-0 focus-visible:ring-0 focus:border-[#0F0F0F] min-h-32 resize-none shadow-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0F0F0F] text-white py-7 rounded-none text-[10px] tracking-[0.5em] uppercase hover:bg-[#453122] transition-all group"
              >
                Send Message
                <ArrowRight className="w-4 h-4 ml-4 transition-transform group-hover:translate-x-2" />
              </Button>

              <p className="text-center text-[#453122]/50 text-xs leading-relaxed">
                Looking to schedule a visit?{" "}
                <a href={BOOKING_URL} onClick={handleBookingClick} className="text-[#453122] hover:underline">
                  Book a consultation
                </a>{" "}
                through our partner portal.
              </p>
            </form>
          )}
        </FadeIn>
      </div>
    </div>
  );
}
