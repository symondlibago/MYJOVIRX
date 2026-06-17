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

  const treatmentLinks = [
    "IV Hydration Therapy",
    "NAD+ Restoration",
    "Hormone Optimization",
    "Medical Weight Loss",
    "Nutrition & Weight Support",
    "Peptide Consultation",
  ];

  const navLinks = [
    { name: "Treatments", path: "/services", dropdown: treatmentLinks },
    { name: "Our Team", path: "/our-team" },
    { name: "Contact", path: "/contact" },
    { name: "Reserve Now", href: BOOKING_URL, external: true },
  ];

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
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
          isScrolled ? "py-3 shadow-md" : "py-4 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand logo */}
          <Link to="/" className="group flex items-center" aria-label="MotionRX home">
            <img
              src="/MotionRX.png"
              alt="MotionRX Wellness & IV Therapy"
              className="h-11 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleBookingClick}
                  className="text-sm tracking-widest uppercase bg-brand border border-brand text-white px-6 py-2.5 hover:bg-brand-deep hover:border-brand-deep transition-colors duration-300"
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
                          key={t}
                          to={link.path}
                          className="block px-5 py-2.5 text-[13px] tracking-wide text-ink/75 transition-colors hover:bg-sand/60 hover:text-brand"
                        >
                          {t}
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
            className="md:hidden p-2 text-ink"
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
                          className="flex items-center justify-center gap-3 bg-brand text-white px-8 py-4 text-sm tracking-[0.25em] uppercase hover:bg-brand-deep transition-colors duration-300"
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
                              key={t}
                              to={link.path}
                              onClick={() => setMobileOpen(false)}
                              className="text-sm tracking-wide text-espresso/70 hover:text-brand transition-colors duration-300"
                            >
                              {t}
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
