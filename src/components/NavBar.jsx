import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BOOKING_URL, handleBookingClick } from "@/config";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { name: "IV Nutrient Therapy", slug: "iv-nutrient-therapy" },
    { name: "Medical Weight Optimization", slug: "medical-weight-optimization" },
    { name: "Hormone Optimization", slug: "hormone-optimization" },
    { name: "Peptide Therapy", slug: "peptide-therapy" },
    { name: "Laboratory Testing", slug: "laboratory-testing" },
    { name: "Discreet STI / STD Testing", slug: "sti-std-testing" },
    { name: "Longevity Medicine", slug: "longevity-medicine" },
    { name: "Nutrition & Lifestyle Medicine", slug: "nutrition-lifestyle-medicine" },
    { name: "Mobile IV Therapy", slug: "mobile-iv-therapy" },
    { name: "Men's Health", slug: "mens-health" },
    { name: "Women's Health", slug: "womens-health" },
  ];

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", dropdown: serviceLinks },
    { name: "Memberships", path: "/memberships" },
    { name: "Patient Results", path: "/patient-results" },
    { name: "Contact", path: "/contact" },
    { name: "Reserve Now", href: BOOKING_URL, external: true },
  ];

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0%;
          height: 1.5px;
          background-color: #6B1F2E;
          transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .nav-link.active {
          color: #6B1F2E;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-ivory/95 backdrop-blur-md ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        {/* Homepage announcement bar — thin, links to the Coming Soon page */}
        {pathname === "/" && (
          <Link
            to="/coming-soon"
            className="group block bg-ink text-center transition-colors duration-300 hover:bg-ink-warm"
          >
            <p className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-0.5 px-6 py-2 text-[10px] uppercase tracking-[0.18em] text-ivory/85 md:text-[11px]">
              <span>
                Stem Cell Therapy and EBO2 Therapy launching Fall 2026. Join
                the waitlist.
              </span>
              <span className="text-gold underline decoration-gold/40 underline-offset-4 transition-colors group-hover:decoration-gold">
                Learn More
              </span>
            </p>
          </Link>
        )}
        <div
          className={`max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "py-3" : "py-4"
          }`}
        >
          {/* Brand logo */}
          <Link to="/" className="group flex items-center" aria-label="MotionRX home">
            <img
              src="/MotionRX.png"
              alt="MotionRX Wellness & IV Therapy"
              className="h-11 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleBookingClick}
                  className="text-sm tracking-widest uppercase bg-ink border border-ink text-ivory px-6 py-2.5 hover:bg-ink-warm hover:border-ink-warm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ) : link.dropdown ? (
                <div key={link.path} className="relative group">
                  <Link
                    to={link.path}
                    className={`nav-link inline-flex items-center gap-1 text-sm tracking-widest uppercase transition-colors duration-300 hover:text-brand ${
                      pathname === link.path ? "active text-brand" : "text-ink"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>

                  {/* Treatments dropdown */}
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-1 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="min-w-60 border border-ink/5 bg-ivory py-3 shadow-[0_24px_50px_-20px_rgba(44,42,38,0.35)]">
                      {link.dropdown.map((t) => (
                        <Link
                          key={t.slug}
                          to={`/services/${t.slug}`}
                          className="block px-5 py-2.5 text-[13px] tracking-wide text-ink/75 transition-colors hover:bg-sand/60 hover:text-brand"
                        >
                          {t.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-sm tracking-widest uppercase transition-colors duration-300 hover:text-brand ${
                    pathname === link.path ? "active text-brand" : "text-ink"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-ink"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-100 bg-ivory"
          >
            <div className="flex flex-col h-full px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col leading-none">
                  <span className="font-serif text-2xl tracking-wide text-ink">
                    MotionRX
                  </span>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-espresso/70 mt-0.5">
                    Wellness &amp; IV Therapy
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-ink"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div
                data-lenis-prevent
                className="flex-1 flex flex-col justify-center gap-7 overflow-y-auto py-6"
              >
                {navLinks.map((link, i) => {
                  const number = (
                    <span className="text-xs text-espresso/50 font-sans tracking-widest">
                      0{i + 1}
                    </span>
                  );

                  // Reserve Now — filled CTA button that stands apart from the links.
                  if (link.external) {
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, ease: "easeOut" }}
                        className="pt-2"
                      >
                        <a
                          href={link.href}
                          onClick={(e) => {
                            setMobileOpen(false);
                            handleBookingClick(e);
                          }}
                          className="flex items-center justify-center gap-3 bg-ink text-ivory px-8 py-4 text-sm tracking-[0.25em] uppercase hover:bg-ink-warm transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      </motion.div>
                    );
                  }

                  // Treatments — link plus the 6-item sublist.
                  if (link.dropdown) {
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, ease: "easeOut" }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setMobileOpen(false)}
                          className={`group flex items-center gap-4 text-3xl font-serif tracking-wide transition-colors duration-300 ${
                            pathname === link.path ? "text-brand" : "text-ink hover:text-brand"
                          }`}
                        >
                          {number}
                          {link.name}
                        </Link>
                        <div className="mt-4 ml-10 flex flex-col gap-3 border-l border-ink/10 pl-5">
                          {link.dropdown.map((t) => (
                            <Link
                              key={t.slug}
                              to={`/services/${t.slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="text-sm tracking-wide text-espresso/70 hover:text-brand transition-colors duration-300"
                            >
                              {t.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, ease: "easeOut" }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className={`group flex items-center gap-4 text-3xl font-serif tracking-wide transition-colors duration-300 ${
                          pathname === link.path ? "text-brand" : "text-ink hover:text-brand"
                        }`}
                      >
                        {number}
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pb-4 text-xs text-espresso tracking-widest uppercase">
                Orange County, CA · Telehealth &amp; In-Clinic
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
