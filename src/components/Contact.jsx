import React, { useEffect, useState } from "react";
import { BOOKING_URL, handleBookingClick } from "@/config";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Check,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/FadeIn";
import Seo from "./Seo";

const DETAILS = [
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

const INTERESTS = [
  "IV Therapy",
  "NAD+ Restoration",
  "Hormone Optimization",
  "Medical Weight Loss",
  "Peptide Consultations",
  "Nutrition",
  "Lab Testing",
  "Telehealth",
];

/* ── Layout switch (synced with Design Studio) ─────────────────── */

function readLayout() {
  if (typeof document === "undefined") return "classic";
  return document.documentElement.getAttribute("data-cl-layout") || "classic";
}

function useContactLayout() {
  const [layout, setLayout] = useState(readLayout);
  useEffect(() => {
    setLayout(readLayout());
    const onChange = (e) => setLayout(e.detail || readLayout());
    window.addEventListener("myjovirx-cl-layout", onChange);
    return () => window.removeEventListener("myjovirx-cl-layout", onChange);
  }, []);
  return layout;
}

/* ── Layout 1 · Classic (header + details/map + form) ──────────── */

function ClassicContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 md:mb-24">
        <FadeIn>
          <p className="text-brand text-[10px] tracking-[0.5em] uppercase mb-6">Get In Touch</p>
          <h1 className="font-serif text-6xl md:text-8xl text-ink leading-[0.9] mb-8">
            Contact <span className="italic font-light">Us.</span>
          </h1>
          <p className="text-espresso/60 text-lg max-w-2xl leading-relaxed border-l border-ink/10 pl-8">
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
              {DETAILS.map((d) => (
                <div key={d.label}>
                  <d.icon className="w-6 h-6 text-brand mb-4" />
                  <h3 className="text-[10px] tracking-[0.3em] uppercase text-ink/40 mb-3">
                    {d.label}
                  </h3>
                  {d.lines.map((line, i) =>
                    d.href && i === 0 ? (
                      <a
                        key={i}
                        href={d.href}
                        className="block text-ink leading-relaxed hover:text-brand transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="text-espresso/70 leading-relaxed">
                        {line}
                      </p>
                    )
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-ink/10">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-ink hover:text-brand transition-colors text-sm tracking-wide"
              >
                <Instagram className="w-4 h-4" />
                @myjovirx
              </a>
            </div>

            {/* Map */}
            <div className="mt-10 aspect-video overflow-hidden border border-ink/10">
              <iframe
                title="MotionRX location map"
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
              <div className="w-16 h-16 bg-brand-deep rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-serif text-4xl text-ink mb-4 italic">Message Sent</h2>
              <p className="text-espresso/60 leading-relaxed mb-8">
                Thank you for reaching out. A member of our team will respond within
                one business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[10px] tracking-[0.4em] uppercase border-b border-ink pb-2 hover:text-brand hover:border-brand transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-sm space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase text-ink/40">Full Name</label>
                  <Input
                    required
                    className="border-0 border-b border-ink/10 bg-transparent rounded-none px-0 focus-visible:ring-0 focus:border-ink transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase text-ink/40">Email Address</label>
                  <Input
                    type="email"
                    required
                    className="border-0 border-b border-ink/10 bg-transparent rounded-none px-0 focus-visible:ring-0 focus:border-ink transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-ink/40">Subject</label>
                <Input
                  className="border-0 border-b border-ink/10 bg-transparent rounded-none px-0 focus-visible:ring-0 focus:border-ink transition-colors"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-ink/40">Message</label>
                <Textarea
                  required
                  placeholder="How can we help?"
                  className="border-0 border-b border-ink/10 bg-transparent rounded-none px-0 focus-visible:ring-0 focus:border-ink min-h-32 resize-none shadow-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-deep text-white py-7 rounded-none text-[10px] tracking-[0.5em] uppercase hover:bg-brand transition-all group"
              >
                Send Message
                <ArrowRight className="w-4 h-4 ml-4 transition-transform group-hover:translate-x-2" />
              </Button>

              <p className="text-center text-espresso/50 text-xs leading-relaxed">
                Looking to schedule a visit?{" "}
                <a href={BOOKING_URL} onClick={handleBookingClick} className="text-brand hover:underline">
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

/* ── Layout 2 · Split (maroon image panel + form) ──────────────── */

const SPLIT_DETAILS = [
  { icon: MapPin, label: "Visit", lines: ["Costa Mesa, Orange County, CA", "By appointment"] },
  { icon: Phone, label: "Call or Text", lines: ["(949) 281-1440"] },
  { icon: Mail, label: "Email", lines: ["hello@myjovirx.com"] },
  { icon: Clock, label: "Hours", lines: ["Mon – Fri · 9am – 6pm  |  Sat · by request"] },
];

const SPLIT_PILLS = ["IV Therapy", "NAD+", "Hormone Optimization", "Medical Weight Loss", "Telehealth"];

function SplitContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: INTERESTS[0],
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const labelCls = "block text-[10px] tracking-[0.25em] uppercase text-ink/40 mb-2";
  const fieldCls =
    "w-full border-0 border-b border-ink/15 bg-transparent rounded-none px-0 py-2 text-ink focus-visible:ring-0 focus:border-brand transition-colors shadow-none";

  return (
    <div className="min-h-screen bg-ivory px-4 pt-28 pb-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl shadow-[0_50px_110px_-60px_rgba(0,0,0,0.6)] lg:grid-cols-2">
        {/* Left — maroon image panel */}
        <div className="relative min-h-[480px] overflow-hidden bg-brand-deep p-10 text-white md:p-14">
          <div aria-hidden className="absolute inset-0">
            <img src="/hero-3.jpg" alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/95 via-brand-deep/88 to-brand/80" />
          </div>

          <div className="relative z-10 flex h-full flex-col">
            <span className="font-serif text-xl tracking-[0.15em]">
              MOTION<span className="text-gold">RX</span>
            </span>

            <div className="mt-12 md:mt-16">
              <p className="mb-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.34em] text-gold">
                <span className="h-px w-7 bg-gold/70" />
                Concierge Wellness
              </p>
              <h1 className="mb-6 font-serif text-5xl font-light leading-[1.02] md:text-6xl">
                Begin your
                <br />
                <span className="italic text-gold">restoration.</span>
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-white/70 md:text-[15px]">
                Physician-guided IV therapy, NAD+ restoration, hormone
                optimization, and medical weight loss, in our Costa Mesa clinic or
                by telehealth across Orange County. Tell us where you'd like to
                begin.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 border-t border-white/15 pt-10 sm:grid-cols-2">
              {SPLIT_DETAILS.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-gold ring-1 ring-white/25">
                    <d.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-gold/80">
                      {d.label}
                    </p>
                    {d.lines.map((l) => (
                      <p key={l} className="text-sm leading-snug text-white/85">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {SPLIT_PILLS.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-white/25 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/80"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-cream p-10 md:p-14">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-7 grid h-16 w-16 place-items-center rounded-full bg-brand-deep">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-3 font-serif text-3xl italic text-ink">Message Sent</h2>
              <p className="mb-8 max-w-xs text-sm leading-relaxed text-espresso/60">
                Thank you for reaching out. Our team will respond within one
                business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="border-b border-ink pb-1.5 text-[10px] uppercase tracking-[0.35em] transition-colors hover:border-brand hover:text-brand"
              >
                Send Another
              </button>
            </div>
          ) : (
            <>
              <p className="mb-4 text-[10px] uppercase tracking-[0.34em] text-brand">
                Send a Message
              </p>
              <h2 className="mb-3 font-serif text-4xl font-light leading-[1.05] text-ink md:text-5xl">
                How can we care for you?
              </h2>
              <p className="mb-9 text-sm text-espresso/60">
                Share a few details and our team will be in touch personally.
              </p>

              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label className={labelCls}>Full Name</label>
                  <input
                    required
                    className={fieldCls}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label className={labelCls}>Email</label>
                    <input
                      type="email"
                      required
                      className={fieldCls}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Phone</label>
                    <input
                      type="tel"
                      className={fieldCls}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Area of Interest</label>
                  <select
                    className={`${fieldCls} cursor-pointer`}
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  >
                    {INTERESTS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelCls}>How Can We Help</label>
                  <textarea
                    rows={3}
                    className={`${fieldCls} resize-none`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-sm bg-gold py-5 text-[11px] uppercase tracking-[0.35em] text-brand-deep transition-colors duration-500 hover:bg-brand hover:text-white"
                >
                  Request Your Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </button>

                <p className="flex items-center justify-center gap-2 text-center text-xs text-espresso/55">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand" />
                  Physician-reviewed &amp; private. We reply within one business day.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const layout = useContactLayout();
  return (
    <>
      <Seo
        title="Contact Us — IV Therapy in Costa Mesa, Orange County"
        description="Contact MotionRX at (949) 281-1440 or hello@myjovirx.com. Visit us at 250 Fischer Ave, Costa Mesa, CA 92626, or book a telehealth consultation across California."
        path="/contact"
      />
      {layout === "split" ? <SplitContact /> : <ClassicContact />}
    </>
  );
}
