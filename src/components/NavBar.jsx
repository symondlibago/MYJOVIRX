import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/services" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#FCFAF7]/95 backdrop-blur-md ${
          isScrolled ? "py-4 shadow-md" : "py-6 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Name */}
          <Link to="/" className="flex flex-col leading-tight group">
            <span className="font-serif text-xl md:text-2xl tracking-wide text-[#0F0F0F] duration-300">
              MyJoviRX
            </span>
            <span className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-[#453122]/70 mt-0.5">
              Wellness &amp; IV Therapy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleBookingClick}
                  className="text-sm tracking-widest uppercase bg-[#6B1F2E] border border-[#6B1F2E] text-white px-5 py-2.5 hover:bg-[#3E1119] hover:border-[#3E1119] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-sm tracking-widest uppercase transition-colors duration-300 hover:text-[#6B1F2E] ${
                    pathname === link.path ? "active text-[#6B1F2E]" : "text-[#0F0F0F]"
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
            className="md:hidden p-2 text-[#0F0F0F]"
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
            className="fixed inset-0 z-100 bg-[#FCFAF7]"
          >
            <div className="flex flex-col h-full px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col leading-none">
                  <span className="font-serif text-2xl tracking-wide text-[#0F0F0F]">
                    MyJoviRX
                  </span>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#453122]/70 mt-0.5">
                    Wellness &amp; IV Therapy
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#0F0F0F]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center gap-8">
                {navLinks.map((link, i) => {
                  const number = (
                    <span className="text-xs text-[#453122]/50 font-sans tracking-widest">
                      0{i + 1}
                    </span>
                  );
                  return link.external ? (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, ease: "easeOut" }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => {
                          setMobileOpen(false);
                          handleBookingClick(e);
                        }}
                        className="group flex items-center gap-4 text-3xl font-serif tracking-wide text-[#0F0F0F] hover:text-[#6B1F2E] transition-colors duration-300"
                      >
                        {number}
                        {link.name}
                      </a>
                    </motion.div>
                  ) : (
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
                          pathname === link.path ? "text-[#6B1F2E]" : "text-[#0F0F0F] hover:text-[#6B1F2E]"
                        }`}
                      >
                        {number}
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pb-4 text-xs text-[#453122] tracking-widest uppercase">
                Orange County, CA · Telehealth &amp; In-Clinic
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
