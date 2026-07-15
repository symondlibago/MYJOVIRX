import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  X,
  Check,
  Monitor,
  Tablet,
  Smartphone,
  RotateCw,
} from "lucide-react";

const STORAGE_KEY = "myjovirx-theme";
const DEFAULTS = {
  palette: "oasis", // Bronze & Porcelain (brand-layout PDF, olive retired)
  font: "zapf", // Zapf Humanist + Hanken Grotesk (brand-layout PDF)
  weight: "medium",
  italic: "off",
  design: "modern",
  txLayout: "stacked", // Treatments page detail-section layout
  customColors: {}, // { paletteId: { roleId: "#hex" } }
};

const PALETTES = [
  {
    id: "oasis",
    name: "Bronze & Porcelain",
    note: "Warm · botanical (default)",
    colors: { primary: "#8A6248", deep: "#3B2E22", accent: "#A77B5E", bg: "#F7EFE6" },
  },
  {
    id: "teal",
    name: "Clinical Teal",
    note: "Clean · clinical",
    colors: { primary: "#0F766E", deep: "#0B3F3B", accent: "#14B8A6", bg: "#FBFDFC" },
  },
  {
    id: "current",
    name: "Oxblood & Cream",
    note: "Warm · luxury",
    colors: { primary: "#6B1F2E", deep: "#3E1119", accent: "#B8A889", bg: "#FBF9F6" },
  },
  {
    id: "blue",
    name: "Cool Blue",
    note: "Clean · clinical",
    colors: { primary: "#3858D6", deep: "#1E2A4A", accent: "#8FB3E8", bg: "#F5F8FD" },
  },
  {
    id: "premium",
    name: "Onyx & Champagne",
    note: "Premium · modern",
    colors: { primary: "#2E2A27", deep: "#1A1714", accent: "#C3A461", bg: "#FAF8F3" },
  },
];


// used by gradients/glows).
const ROLES = [
  { id: "primary", label: "Primary", vars: ["--color-brand"], rgb: "--brand-rgb" },
  { id: "deep", label: "Deep", vars: ["--color-brand-deep"], rgb: "--brand-deep-rgb" },
  { id: "accent", label: "Accent", vars: ["--color-gold"], rgb: "--gold-rgb" },
  { id: "bg", label: "Background", vars: ["--color-ivory", "--color-cream"], rgb: "--cream-rgb" },
];

const FONTS = [
  {
    id: "zapf",
    name: "Zapf Humanist + Hanken",
    note: "Brand layout (default)",
    head: '"Zapf Humanist 601", "Zapf Humanist", Optima, Candara, "Marcellus", serif',
    body: '"Hanken Grotesk", sans-serif',
  },
  {
    id: "cormorant",
    name: "Cormorant + Inter",
    note: "Elegant editorial",
    head: '"Cormorant Garamond", Georgia, serif',
    body: '"Inter", sans-serif',
  },
  {
    id: "garet",
    name: "Garet + DM Sans",
    note: "Modern minimal",
    head: '"Garet", sans-serif',
    body: '"DM Sans", sans-serif',
  },
  {
    id: "fraunces",
    name: "Fraunces + Figtree",
    note: "Calm blue",
    head: '"Fraunces", Georgia, serif',
    body: '"Figtree", sans-serif',
  },
  {
    id: "bodoni",
    name: "Bodoni + Jost",
    note: "Couture · high-contrast",
    head: '"Bodoni Moda", Georgia, serif',
    body: '"Jost", sans-serif',
  },
  {
    id: "newsreader",
    name: "Newsreader + Mulish",
    note: "Refined · editorial",
    head: '"Newsreader", Georgia, serif',
    body: '"Mulish", sans-serif',
  },
  {
    id: "montserrat",
    name: "Montserrat + DM Sans",
    note: "Geometric · clean",
    head: '"Montserrat", sans-serif',
    body: '"DM Sans", sans-serif',
  },
  {
    id: "playfair",
    name: "Playfair + Open Sans",
    note: "motiondripp.com",
    head: '"Playfair Display", Georgia, serif',
    body: '"Open Sans", sans-serif',
  },
];

const WEIGHTS = [
  { id: "light", name: "Light", w: 300 },
  { id: "medium", name: "Medium", w: 500 },
  { id: "bold", name: "Bold", w: 700 },
];

const DESIGNS = [
  { id: "editorial", name: "Editorial", note: "Relaxed spacing" },
  { id: "modern", name: "Modern", note: "Tighter spacing" },
];

// Treatments-page detail section only — picks one of three layouts.
const LAYOUTS = [
  { id: "explorer", name: "Explorer", note: "List + detail panel" },
  { id: "bento", name: "Bento", note: "Grid + slide-in drawer" },
  { id: "stacked", name: "Stacked", note: "Expandable accordion" },
];

// Responsive preview — real CSS-px widths so the site's actual breakpoints fire.
const DEVICES = [
  { id: "desktop", name: "Desktop", icon: Monitor, w: null, h: null },
  { id: "tablet", name: "Tablet", icon: Tablet, w: 834, h: 1112 },
  { id: "phone", name: "Phone", icon: Smartphone, w: 390, h: 844 },
];

function hexToTriplet(hex) {
  let h = String(hex).replace("#", "");
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  const n = parseInt(h, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}

export default function DesignStudio() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(DEFAULTS);
  const [device, setDevice] = useState("desktop"); // transient preview, not saved
  const [landscape, setLandscape] = useState(false);
  const iframeRef = useRef(null);

  // When rendered inside the preview iframe, hide the studio entirely (no nested
  // panel / infinite frames). Hooks above run unconditionally; bail before JSX.
  const framed =
    typeof window !== "undefined" && window.self !== window.top;

  // Load any saved selection once on mount.
  useEffect(() => {
    if (framed) return; // inside the preview iframe: anti-flash script handles it
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      setTheme((t) => ({
        ...t,
        ...saved,
        customColors: { ...(saved.customColors || {}) },
      }));
    } catch {
      /* ignore bad/blocked storage */
    }
  }, []);

  // Apply to <html> + persist whenever the selection changes.
  useEffect(() => { 
    if (framed) return;
    const root = document.documentElement;
    root.setAttribute("data-palette", theme.palette);
    root.setAttribute("data-font", theme.font);
    root.setAttribute("data-weight", theme.weight);
    root.setAttribute("data-italic", theme.italic);
    root.setAttribute("data-design", theme.design);
    root.setAttribute("data-tx-layout", theme.txLayout);
    // The Treatments detail section is a React component, not pure CSS — let it
    // know to swap layouts.
    window.dispatchEvent(
      new CustomEvent("myjovirx-tx-layout", { detail: theme.txLayout })
    );

    // Per-palette color overrides — inline vars beat the stylesheet. We clear
    // every role var first so edits never bleed across palettes.
    const edits = theme.customColors?.[theme.palette] || {};
    ROLES.forEach((role) => {
      const val = edits[role.id];
      role.vars.forEach((v) => {
        if (val) root.style.setProperty(v, val);
        else root.style.removeProperty(v);
      });
      if (role.rgb) {
        if (val) root.style.setProperty(role.rgb, hexToTriplet(val));
        else root.style.removeProperty(role.rgb);
      }
    });

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
    } catch {
      /* ignore */
    }

    // Push the live theme into the device-preview iframe so edits reflect
    // instantly without a reload.
    const frame = iframeRef.current;
    if (frame && frame.contentWindow) {
      frame.contentWindow.postMessage({ __myjovirxTheme: theme }, "*");
    }
  }, [theme]);

  const set = (key, value) => setTheme((t) => ({ ...t, [key]: value }));

  const activePalette = PALETTES.find((p) => p.id === theme.palette) || PALETTES[0];
  const paletteEdits = theme.customColors?.[theme.palette] || {};
  const paletteEdited = Object.keys(paletteEdits).length > 0;
  const colorFor = (roleId) =>
    (paletteEdits[roleId] || activePalette.colors[roleId]).toLowerCase();

  const setColor = (roleId, hex) =>
    setTheme((t) => ({
      ...t,
      customColors: {
        ...t.customColors,
        [t.palette]: { ...(t.customColors?.[t.palette] || {}), [roleId]: hex },
      },
    }));

  const resetPaletteColors = () =>
    setTheme((t) => {
      const next = { ...(t.customColors || {}) };
      delete next[t.palette];
      return { ...t, customColors: next };
    });

  const anyCustom = Object.values(theme.customColors || {}).some(
    (o) => o && Object.keys(o).length > 0
  );
  const isDefault =
    theme.palette === DEFAULTS.palette &&
    theme.font === DEFAULTS.font &&
    theme.weight === DEFAULTS.weight &&
    theme.italic === DEFAULTS.italic &&
    theme.design === DEFAULTS.design &&
    theme.txLayout === DEFAULTS.txLayout &&
    !anyCustom;

  const cardBase =
    "rounded-xl border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-black/70";
  const activeRing = "border-transparent ring-2 ring-black/80";
  const idleRing = "border-black/10 hover:border-black/30";

  if (framed) return null;

  const dev = DEVICES.find((d) => d.id === device) || DEVICES[0];
  const previewW = landscape ? dev.h : dev.w;
  const previewH = landscape ? dev.w : dev.h;
  const previewSrc =
    typeof window !== "undefined"
      ? window.location.pathname + window.location.search
      : "/";

  return (
    <div className="fixed bottom-6 right-6 z-[120] font-sans print:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-16 right-0 w-80 max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl border border-black/10 bg-white text-[#1a1a1a] shadow-[0_30px_70px_-25px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
              <div>
                <p className="text-[13px] font-semibold tracking-tight">Design Studio</p>
                <p className="text-[11px] text-black/45">Preview &amp; edit palettes live</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close Design Studio"
                className="rounded-full p-1.5 text-black/40 transition-colors hover:bg-black/5 hover:text-black/70"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div
              data-lenis-prevent
              className="max-h-[68vh] space-y-6 overflow-y-auto overscroll-contain px-5 py-5"
            >
              {/* Device preview */}
              <section>
                <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                  Device Preview
                </h4>
                <p className="mb-3 text-[10px] text-black/40">
                  See this page at real phone / tablet widths
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {DEVICES.map((d) => {
                    const active = device === d.id;
                    return (
                      <button
                        key={d.id}
                        onClick={() => {
                          setLandscape(false);
                          setDevice(d.id);
                        }}
                        className={`flex flex-col items-center gap-1.5 px-2 py-3 ${cardBase} ${
                          active ? activeRing : idleRing
                        }`}
                      >
                        <d.icon className="h-4 w-4" strokeWidth={1.6} />
                        <span className="text-[11px] font-medium">{d.name}</span>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Palette */}
              <section>
                <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                  Color Palette
                </h4>
                <div className="space-y-2">
                  {PALETTES.map((p) => {
                    const active = theme.palette === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => set("palette", p.id)}
                        className={`flex w-full items-center gap-3 px-2.5 py-2 ${cardBase} ${
                          active ? activeRing : idleRing
                        }`}
                      >
                        <span className="flex h-8 w-16 shrink-0 overflow-hidden rounded-md ring-1 ring-black/5">
                          {Object.values(p.colors).map((c, i) => (
                            <span key={i} className="flex-1" style={{ backgroundColor: c }} />
                          ))}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[12px] font-medium leading-tight">{p.name}</span>
                          <span className="block text-[10px] text-black/45">{p.note}</span>
                        </span>
                        {active && <Check className="h-4 w-4 shrink-0 text-black" />}
                      </button>
                    );
                  })}
                </div>

                {/* Live color editor for the active palette */}
                <div className="mt-3 rounded-xl border border-black/10 bg-black/[0.015] p-3">
                  <div className="mb-2.5 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/45">
                      Edit · {activePalette.name}
                    </span>
                    <button
                      onClick={resetPaletteColors}
                      disabled={!paletteEdited}
                      className="text-[10px] font-medium text-black/55 underline-offset-2 transition hover:underline disabled:opacity-30"
                    >
                      Reset
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {ROLES.map((role) => {
                      const value = colorFor(role.id);
                      return (
                        <label
                          key={role.id}
                          className="flex cursor-pointer items-center gap-2 rounded-lg border border-black/10 bg-white px-2 py-1.5 transition-colors hover:border-black/25"
                        >
                          <span
                            className="relative h-6 w-6 shrink-0 overflow-hidden rounded-md ring-1 ring-black/10"
                            style={{ backgroundColor: value }}
                          >
                            <input
                              type="color"
                              value={value}
                              onChange={(e) => setColor(role.id, e.target.value)}
                              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                              aria-label={`${role.label} color`}
                            />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[11px] font-medium leading-none">{role.label}</span>
                            <span className="block text-[9px] uppercase tracking-wide text-black/40">
                              {value.toUpperCase()}
                            </span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Typography */}
              <section>
                <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                  Typography
                </h4>
                <div className="space-y-2">
                  {FONTS.map((f) => {
                    const active = theme.font === f.id;
                    return (
                      <button
                        key={f.id}
                        onClick={() => set("font", f.id)}
                        className={`flex w-full items-center justify-between px-3.5 py-2.5 ${cardBase} ${
                          active ? activeRing : idleRing
                        }`}
                      >
                        <span className="min-w-0">
                          <span className="flex items-baseline gap-2">
                            <span className="text-[22px] leading-none" style={{ fontFamily: f.head }}>
                              Aa
                            </span>
                            <span className="truncate text-[12px] font-medium" style={{ fontFamily: f.body }}>
                              {f.name}
                            </span>
                          </span>
                          <span className="mt-1 block text-[10px] text-black/45">{f.note}</span>
                        </span>
                        {active && <Check className="ml-2 h-4 w-4 shrink-0 text-black" />}
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Heading weight */}
              <section>
                <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                  Heading Weight
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {WEIGHTS.map((wt) => {
                    const active = theme.weight === wt.id;
                    return (
                      <button
                        key={wt.id}
                        onClick={() => set("weight", wt.id)}
                        className={`px-2 py-2.5 text-center ${cardBase} ${active ? activeRing : idleRing}`}
                      >
                        <span className="text-[14px]" style={{ fontWeight: wt.w }}>
                          {wt.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-2.5 flex items-center justify-between rounded-xl border border-black/10 px-3.5 py-2.5">
                  <span className="text-[12px] font-medium" style={{ fontStyle: "italic" }}>
                    Italic headings
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={theme.italic === "on"}
                    aria-label="Toggle italic headings"
                    onClick={() => set("italic", theme.italic === "on" ? "off" : "on")}
                    className={`relative h-5 w-9 rounded-full transition-colors ${
                      theme.italic === "on" ? "bg-black" : "bg-black/15"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${
                        theme.italic === "on" ? "left-4.5" : "left-0.5"
                      }`}
                    />
                  </button>
                </div>
              </section>

              {/* Design */}
              <section>
                <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                  Design
                </h4>
                <div className="grid grid-cols-2 gap-2.5">
                  {DESIGNS.map((d) => {
                    const active = theme.design === d.id;
                    return (
                      <button
                        key={d.id}
                        onClick={() => set("design", d.id)}
                        className={`px-3 py-3 ${cardBase} ${active ? activeRing : idleRing}`}
                      >
                        <p className="text-[13px] font-medium">{d.name}</p>
                        <p className="text-[10px] text-black/45">{d.note}</p>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Treatments layout */}
              <section>
                <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                  Treatments Layout
                </h4>
                <p className="mb-3 text-[10px] text-black/40">
                  Detail section on the Treatments page
                </p>
                <div className="space-y-2">
                  {LAYOUTS.map((l) => {
                    const active = theme.txLayout === l.id;
                    return (
                      <button
                        key={l.id}
                        onClick={() => set("txLayout", l.id)}
                        className={`flex w-full items-center justify-between px-3.5 py-2.5 ${cardBase} ${
                          active ? activeRing : idleRing
                        }`}
                      >
                        <span className="min-w-0 text-left">
                          <span className="block text-[13px] font-medium leading-tight">
                            {l.name}
                          </span>
                          <span className="block text-[10px] text-black/45">{l.note}</span>
                        </span>
                        {active && <Check className="ml-2 h-4 w-4 shrink-0 text-black" />}
                      </button>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-black/5 px-5 py-3">
              <span className="text-[10px] text-black/40">Saved on this device</span>
              <button
                onClick={() => setTheme({ ...DEFAULTS, customColors: {} })}
                disabled={isDefault}
                className="text-[11px] font-medium text-black/60 underline-offset-2 transition hover:underline disabled:cursor-default disabled:opacity-30"
              >
                Reset all
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Device preview overlay */}
      <AnimatePresence>
        {device !== "desktop" && (
          <motion.div
            key="device-preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[130] flex flex-col bg-black/75 backdrop-blur-sm"
          >
            {/* Toolbar */}
            <div className="flex items-center justify-center gap-2 px-4 py-3 text-white">
              {DEVICES.map((d) => {
                const active = device === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => {
                      setLandscape(false);
                      setDevice(d.id);
                    }}
                    className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-medium transition-colors ${
                      active ? "bg-white text-black" : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    <d.icon className="h-3.5 w-3.5" strokeWidth={1.6} />
                    {d.name}
                  </button>
                );
              })}
              <button
                onClick={() => setLandscape((l) => !l)}
                aria-label="Rotate"
                className="ml-1 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium transition-colors hover:bg-white/20"
              >
                <RotateCw className="h-3.5 w-3.5" strokeWidth={1.6} />
                <span className="tabular-nums">
                  {previewW} × {previewH}
                </span>
              </button>
              <button
                onClick={() => {
                  setDevice("desktop");
                  setLandscape(false);
                }}
                aria-label="Close preview"
                className="ml-1 rounded-full bg-white/10 p-1.5 transition-colors hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Device frame */}
            <div className="flex flex-1 items-center justify-center overflow-auto p-4">
              <div className="overflow-hidden rounded-[2.2rem] border-[12px] border-black bg-black shadow-[0_40px_90px_-20px_rgba(0,0,0,0.7)]">
                <iframe
                  ref={iframeRef}
                  src={previewSrc}
                  title="Responsive device preview"
                  style={{
                    width: previewW,
                    height: `min(${previewH}px, 80vh)`,
                    // Lenis sets `pointer-events:none` on all iframes during smooth
                    // scroll — override so the preview stays scrollable/interactive.
                    pointerEvents: "auto",
                  }}
                  className="block bg-white"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close Design Studio" : "Open Design Studio"}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-[0_12px_30px_-8px_rgba(0,0,0,0.55)] transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <X className="h-5 w-5" /> : <Palette className="h-5 w-5" />}
      </button>
    </div>
  );
}
