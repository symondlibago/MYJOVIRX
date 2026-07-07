import React, { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Check,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import Seo from "./Seo";

const DETAILS = [
  { icon: MapPin, label: "Visit", lines: ["Costa Mesa, Orange County, CA", "By appointment"] },
  { icon: Phone, label: "Call or Text", lines: ["(949) 281-1440"] },
  { icon: Mail, label: "Email", lines: ["hello@motionrx.co"] },
  { icon: Clock, label: "Hours", lines: ["Mon – Fri · 9am – 6pm  |  Sat · by request"] },
];

const PILLS = ["Longevity", "Hormones", "Peptides", "IV Therapy", "Diagnostics", "Telehealth"];

const INTERESTS = [
  "IV Nutrient Therapy",
  "Medical Weight Optimization",
  "Hormone Optimization",
  "Peptide Therapy",
  "Laboratory Testing",
  "Longevity Medicine",
  "Nutrition & Lifestyle",
  "Men's Health",
  "Women's Health",
  "Something else",
];

/* Custom dropdown that matches the underline form fields. */
function Dropdown({ value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between border-b border-ink/15 py-2 text-left text-ink transition-colors hover:border-ink/40 focus:border-brand focus:outline-none"
      >
        <span>{value}</span>
        <ChevronDown
          className={`h-4 w-4 text-ink/40 transition-transform duration-300 ${
            open ? "rotate-180 text-brand" : ""
          }`}
        />
      </button>

      {open && (
        <div
          data-lenis-prevent
          className="absolute z-30 mt-2 max-h-64 w-full overflow-auto overscroll-contain rounded-xl border border-ink/10 bg-white py-1.5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)]"
        >
          {options.map((opt) => {
            const selected = opt === value;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-sand ${
                  selected ? "text-brand" : "text-ink/75"
                }`}
              >
                {opt}
                {selected && <Check className="h-3.5 w-3.5 text-brand" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Contact() {
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
    "w-full border-0 border-b border-ink/15 bg-transparent rounded-none px-0 py-2 text-ink focus-visible:ring-0 focus:border-brand transition-colors shadow-none outline-none";

  return (
    <>
      <Seo
        title="Contact Us | IV Therapy in Costa Mesa, Orange County"
        description="Contact MotionRX at (949) 281-1440 or hello@motionrx.co. Visit us at 250 Fischer Ave, Costa Mesa, CA 92626, or book a telehealth consultation across California."
        path="/contact"
      />

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
                  Get in Touch
                </p>
                <h1 className="mb-6 font-serif text-5xl font-light leading-[1.02] md:text-6xl">
                  Start your
                  <br />
                  <span className="italic text-gold">optimization.</span>
                </h1>
                <p className="max-w-md text-sm leading-relaxed text-white/70 md:text-[15px]">
                  Longevity, hormone, peptide, and performance medicine, in our
                  Costa Mesa clinic or by telehealth across Orange County. Tell us
                  where you'd like to begin.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-5 border-t border-white/15 pt-10 sm:grid-cols-2">
                {DETAILS.map((d) => (
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
                {PILLS.map((p) => (
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
                  How can we help?
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
                    <Dropdown
                      value={formData.interest}
                      onChange={(v) => setFormData({ ...formData, interest: v })}
                      options={INTERESTS}
                    />
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
                    className="group flex w-full items-center justify-center gap-3 rounded-sm bg-ink py-5 text-[11px] uppercase tracking-[0.35em] text-ivory transition-colors duration-500 hover:bg-ink-warm"
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
    </>
  );
}
