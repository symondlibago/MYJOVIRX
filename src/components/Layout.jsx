import React from "react";
import NavBar from "./NavBar";
import ScrollToTop from "../components/ui/ScrollToTop";
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin, Clock, ArrowUpRight, Heart } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Book", path: "/booking" },
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
    <div className="min-h-screen bg-[#F5F3EF]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap');

        :root {
          --color-ivory: #F5F3EF;
          --color-charcoal: #1a1a1a;
          --color-stone: #9C8B7A;
          --color-blush: #D4A5A5;
          --color-espresso: #3D2B1F;
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
          background-color: #D4A5A5;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .footer-link:hover::after {
          width: 100%;
        }
        .footer-link:hover {
          color: #D4A5A5;
        }
      `}</style>
      <ScrollToTop />
      <NavBar currentPage={currentPageName} />
      <main>{children}</main>

      {/* ───── FOOTER ───── */}
      <footer className="bg-[#111111] text-white">

        {/* Top Banner */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40">
              Modern Wellness · Orange County, CA
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#D4A5A5] border border-[#D4A5A5]/40 px-5 py-2.5 hover:bg-[#D4A5A5]/10 transition-colors duration-300"
            >
              Book a Consultation
              <ArrowUpRight className="w-3 h-3" />
            </Link>
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
                <span className="text-[9px] tracking-[0.35em] uppercase text-[#9C8B7A] mt-1 block">
                  Wellness &amp; IV Therapy
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
                Replenish, recover, and thrive. Physician-guided IV therapy, peptides, hormone optimization, and telehealth — delivered in a calm, modern setting designed around you.
              </p>
              {/* Social */}
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-[#D4A5A5] hover:text-[#D4A5A5] transition-all duration-300 group"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hello@myjovirx.com"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-[#D4A5A5] hover:text-[#D4A5A5] transition-all duration-300"
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
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`footer-link text-sm ${
                        currentPageName === link.name
                          ? "text-[#D4A5A5]"
                          : "text-white/70"
                      }`}
                    >
                      {link.name}
                    </Link>
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
                  <MapPin className="w-4 h-4 text-[#9C8B7A] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    23382 Mill Creek Dr, Ste 130<br />
                    Laguna Hills, CA 92653
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-4 h-4 text-[#9C8B7A] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Mon – Fri · 9:00 AM – 6:00 PM<br />
                    Saturday · 10:00 AM – 4:00 PM
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-4 h-4 text-[#9C8B7A] shrink-0 mt-0.5" />
                  <a href="tel:+19492811440" className="footer-link">
                    (949) 281-1440
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-4 h-4 text-[#9C8B7A] shrink-0 mt-0.5" />
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
                  className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-[#D4A5A5] transition-colors duration-300 tracking-wider"
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/25">
            <p>© 2026 MyJoviRX. All rights reserved.</p>
            <p className="text-[#D4A5A5]/60 tracking-widest uppercase">
              Telehealth &amp; In-Clinic
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
