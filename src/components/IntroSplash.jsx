import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Home-only intro — "reveal through the M":
 * A black overlay sits over the Home page with the Motion "M" cut out of it,
 * so you glimpse the site through the M. The overlay then zooms outward and
 * dissolves, landing you on Home.
 *
 * Plays EVERY time Home mounts (refresh + navigating back to Home). Mounted
 * inside Home.jsx, so it never appears on other routes.
 */
export default function IntroSplash() {
  // Skip inside the Design Studio device-preview iframe.
  const framed = typeof window !== "undefined" && window.self !== window.top;
  const [show, setShow] = useState(!framed);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), 2100);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[200]"
      style={{
        background: "#000",
        // Pure black everywhere EXCEPT the M (the M becomes a transparent window).
        WebkitMaskImage: "url(/motion-m.png), linear-gradient(#000, #000)",
        maskImage: "url(/motion-m.png), linear-gradient(#000, #000)",
        WebkitMaskSize: "150px, 100% 100%",
        maskSize: "150px, 100% 100%",
        WebkitMaskPosition: "center, center",
        maskPosition: "center, center",
        WebkitMaskRepeat: "no-repeat, no-repeat",
        maskRepeat: "no-repeat, no-repeat",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        transformOrigin: "50% 50%",
      }}
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: [1, 1.06, 11], opacity: [1, 1, 0] }}
      transition={{ duration: 1.9, times: [0, 0.28, 1], ease: [0.6, 0, 0.32, 1] }}
    />
  );
}
