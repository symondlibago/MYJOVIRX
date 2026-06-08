import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import NavBar from "./NavBar";
import ScrollToTop from "../components/ui/ScrollToTop";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { BOOKING_URL, handleBookingClick } from "@/config";
import { initLenis } from "@/lib/lenis";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    initLenis();
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/services" },
    { name: "Our Team", path: "/our-team" },
    { name: "Contact", path: "/contact" },
    { name: "Book", href: BOOKING_URL, external: true },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "HIPAA Notice", path: "/hipaa" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Telehealth Consent", path: "/telehealth-consent" },
    { name: "Medical Disclaimer", path: "/disclaimer" },
  ];

  const services = [
    "Signature IV Drip",
    "NAD+ Restoration",
    "Hormone Optimization",
    "Medical Weight Loss",
    "Vitamin Injections",
    "Lab Testing & Panels",
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap');

        :root {
          --color-ivory: #FFFFFF;
          --color-charcoal: #0F0F0F;
          --color-stone: #B8A889;
          --color-blush: #B8A889;
          --color-espresso: #453122;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--color-ivory);
          color: var(--color-charcoal);
        }

        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }

        .footer-link {
          position: relative;
          display: inline-block;
          transition: color 0.3s ease;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: #B8A889;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .footer-link:hover::after {
          width: 100%;
        }
        .footer-link:hover {
          color: #B8A889;
        }
      `}</style>
      <ScrollToTop />
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-0.75 bg-[#B8A889] origin-left z-60"
      />
      <NavBar />
      <main>{children}</main>

      {/* ───── FOOTER ───── */}
      <footer className="bg-[#0F0F0F] text-white">

        {/* Top Banner */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40">
              Modern Wellness · Orange County, CA
            </p>
            <a
              href={BOOKING_URL}
              onClick={handleBookingClick}
              className="group inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#B8A889] border border-[#B8A889]/40 px-6 py-3 hover:bg-[#B8A889] hover:text-[#0F0F0F] transition-all duration-300"
            >
              Book a Consultation
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Main Footer Body */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

            {/* Col 1 — Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <span className="font-serif text-4xl tracking-wide block text-white">
                  MyJoviRX
                </span>
                <span className="text-[9px] tracking-[0.35em] uppercase text-[#B8A889] mt-1 block">
                  Wellness &amp; IV Therapy
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
                Personalized wellness solutions including IV therapy, peptides, hormone therapy, and lab testing. All designed to help you look, feel, and perform your best.
              </p>
              {/* Social */}
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-[#B8A889] hover:text-[#B8A889] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-[#B8A889] hover:text-[#B8A889] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hello@myjovirx.com"
                  aria-label="Email"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-[#B8A889] hover:text-[#B8A889] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2 — Navigation */}
            <div>
              <h4 className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-6">
                Navigate
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a href={link.href} onClick={handleBookingClick} className="footer-link text-sm text-white/70">
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className={`footer-link text-sm ${
                          pathname === link.path
                            ? "text-[#B8A889]"
                            : "text-white/70"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div>
              <h4 className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-6">
                Treatments
              </h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s}>
                    <Link
                      to="/services"
                      className="footer-link text-sm text-white/70"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact & Hours */}
            <div>
              <h4 className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-6">
                Visit Us
              </h4>
              <ul className="space-y-5 text-sm text-white/60">
                <li className="flex gap-3">
                  <MapPin className="w-4 h-4 text-[#B8A889] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    250 Fischer Ave<br />
                    Costa Mesa, CA 92626<br />
                    United States
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-4 h-4 text-[#B8A889] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Mon – Fri · 9:00 AM – 6:00 PM<br />
                    Saturday · 10:00 AM – 4:00 PM
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-4 h-4 text-[#B8A889] shrink-0 mt-0.5" />
                  <a href="tel:+19492811440" className="footer-link">
                    (949) 281-1440
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-4 h-4 text-[#B8A889] shrink-0 mt-0.5" />
                  <a href="mailto:hello@myjovirx.com" className="footer-link">
                    hello@myjovirx.com
                  </a>
                </li>
              </ul>

              {/* Instagram Handle */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-[#B8A889] transition-colors duration-300 tracking-wider"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  @myjovirx
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal / Compliance Links */}
        <div className="border-y border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {legalLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="footer-link text-[11px] tracking-wide text-white/40"
                >
                  {l.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/25">
            <p>© 2026 MyJoviRX. All rights reserved.</p>
            <p className="text-[#B8A889]/60 tracking-widest uppercase">
              Telehealth &amp; In-Clinic
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
