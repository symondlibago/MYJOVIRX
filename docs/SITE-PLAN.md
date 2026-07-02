# MotionRx — Site Plan

Based on Kenny's "Website Sitemap & Content Guide" (June 30, 2026), the current build, and John's direction (approved; booking platform = **Boulevard**).

Status: planning. Nothing below is built yet except where noted under "Reuse."

---

## 1. The headline (what this project actually is)

This is a **repositioning + rebuild**, not a revision pass. Two things drive the size:

1. **Brand flip.** MotionRx is being positioned as a modern medical / longevity / performance practice, explicitly **not** a med spa. New visual language, new copy voice, new layouts. Much of the current spa/luxury look gets replaced.
2. **Page count jump.** The site is ~4 real pages today. The brief takes it to **~15 to 23 pages**, mostly because each service gets its own page.

Everything else in this plan follows from those two facts.

---

## 2. Design direction (the pivot)

| Lean into | Avoid |
|---|---|
| Clean, clinical, premium, intelligent, tech-driven | Med spa / salon / day-spa cues |
| Physicians, lab science, diagnostics, athletes | Soft, decorative, spa-style visuals |
| Clinical whitespace, data visuals, sharp type | Warm luxury, gold/ornate, "unwind & relax" tone |

- **Tone references:** Apple, WHOOP, Oura, InsideTracker, Fountain Life, Next Health (for feel, not literal copies).
- **Typography:** move from the current serif (Cormorant) to a precise sans-serif system. Reset the Design Studio default to a clinical pairing.
- **Color:** restrained and cool. Near-black / charcoal + white/off-white + a single precise accent (clinical blue or teal). Move away from maroon + gold. (We already have "Cool Blue" and "Onyx & Champagne" palettes to start from; likely a new clinical palette.)
- **Imagery:** physicians, labs, diagnostics, active/athletic bodies, cellular/medical tech, data. No lounge or spa stock.
- **Copy voice:** short, confident, evidence-forward. No em dashes / "AI tells" (client preference). Tagline: **"Optimize Your Health. Elevate Your Performance."**

---

## 3. Information architecture

### Primary navigation
`About` · `Services ▾` · `Memberships` · `Patient Results` · `Contact` + **Book Now** (CTA button → Boulevard)

- `Services ▾` opens a dropdown/mega-menu listing all service pages.
- `FAQ`, `Coming Soon`, and legal pages live in the **footer**.
- Logo → Home.

### URL structure
```
/                                   Home
/about                              About (Why MotionRx + Meet the Medical Team)
/services                           Services landing (gallery)
/services/iv-nutrient-therapy
/services/medical-weight-optimization
/services/hormone-optimization
/services/peptide-therapy
/services/laboratory-testing
/services/sti-std-testing
/services/longevity-medicine
/services/nutrition-lifestyle-medicine
/services/mobile-iv-therapy
/services/mens-health
/services/womens-health
/memberships                        Memberships & subscriptions + pricing ranges
/patient-results                    Testimonials / success stories
/faq                                Frequently asked questions
/coming-soon                        Stem Cell + EBO2 (Fall 2026 teaser)
/contact                            Contact + book + location/map
/privacy                            Privacy Policy            (exists)
/notice-of-privacy-practices        HIPAA NPP                 (new)
/terms                              Terms of Use              (exists)
/blog                               Reserved for later
```

### Scope lever to confirm with client
Some items are listed as both a Home section **and** a standalone page. Consolidating drops the count from ~23 to ~15:
- FAQ: full page or Home section (recommend: both, page + short Home block).
- Patient Results: full page or Home section.
- Coming Soon: one teaser page (not two).
- Physician credentials: fold into About, not a separate page.

---

## 4. Page-by-page

### Home (11 sections, per brief order)
1. Hero banner (new positioning + Book CTA)
2. Why MotionRx
3. Featured Services — **horizontal scroll gallery of clickable images**, each links to its service page
4. Precision Diagnostics
5. Longevity & Biohacking
6. InBody Body Composition Analysis
7. Meet the Medical Team
8. Patient Success Stories
9. FAQ
10. Location & Contact (address, hours, phone, **map embed**)
11. Schedule Your Consultation (Boulevard CTA)

### About
Why MotionRx (mission, brand narrative) + Meet the Medical Team, with visible **board certifications / licensure**.

### Services (landing)
Gallery of the 11 services as clickable image cards, each linking to its page. This is the reshaped version of today's "Featured Treatments" grid.

### Service page template (one reusable component, 11 instances)
- Hero: service name + one-line promise + Book CTA
- Overview (brief copy)
- What's included / formulas / bullets (varies by service)
- Pricing range (where applicable; ranges live on the page, no separate pricing page)
- Who it's for / benefits
- What to expect / how it works
- Compliance qualifiers where needed
- Related services + CTA band

Service-specific notes:
- **IV Nutrient Therapy:** 500ml / 1000ml; bag formulas table (Immunity, Beauty, Recovery, Hangover/Wellness). Keep the **Zofran® / Toradol® "physician-directed additions only"** qualifier.
- **Medical Weight Optimization:** injections / capsules / nasal sprays; GLP-1/2/3 protocols. **HOLD copy pending clinical sign-off** (see risks). Paired with body comp, nutrition, lifestyle, supervision.
- **Hormone Optimization**, **Peptide Therapy** (8+ yrs experience, US-based, third-party tested), **Laboratory Testing** (panels list), **Longevity Medicine**, **Nutrition & Lifestyle Medicine**, **Mobile IV Therapy** (concierge), **Men's / Women's Health**: straight from brief copy.
- **Discreet STI / STD Testing:** privacy-first tone, must not feel clinical/cold or stigmatizing. Same visual treatment as the rest of the site.

### Memberships & Subscriptions
Pricing as ranges on this page (no separate pricing page):
- IV / Peptide / Vitamin Injection subscriptions — from $99/mo
- Injectable shots (B12, Vit D, NAD, MIC, Glutathione, BPC-157) — individual or package from $99/mo
- TRT / HRT membership — from $199/mo
- Labs — $149 to $999

### Coming Soon (Fall 2026)
Stem Cell Therapy, EBO2 Therapy. Teaser + waitlist.

### Patient Results / FAQ / Contact / Book
- Patient Results: testimonials/success stories (needs consent + real results).
- FAQ: accordion (reuse existing).
- Contact / Book: location, map, and CTAs grouped by intent (see booking).

---

## 5. Booking — Boulevard

All "Book" actions route to **Boulevard** (their existing system). CTAs from the brief, grouped by intent:

- **Book a Service:** Book Consultation ($79 / 15 min), Book Lab Testing, Book IV Therapy, Book Mobile IV
- **Book a Program Consultation:** Weight Loss, Hormone, Peptide
- **Other:** Schedule InBody Scan, Join the Waitlist

Plan: replace the current placeholder booking link with Boulevard's booking URL(s) / embed. Map each CTA above to its Boulevard service link where deep-linking is supported; otherwise a single booking entry point.

**Need from client:** Boulevard account access or the booking URLs / embed snippet, and confirmation of whether payments (e.g., $79 consult, memberships) run through Boulevard.

---

## 6. What we reuse vs rebuild

**Reuse (with reskin):** React/Vite/Tailwind foundation, routing, Design Studio theming, SEO component, legal-page system (Privacy/Terms already built), FAQ accordion, Memberships component, Our Team → Meet the Medical Team, Contact, motion utilities.

**Rebuild / replace:** Home hero + copy voice, Treatments coverflow → Services gallery + service pages, default palette + fonts (clinical direction), all imagery, nav/IA.

**Net:** the engine stays; the skin, structure, and content change.

---

## 7. Compliance / legal (client-owned, gates launch)

These are not design problems. They must be confirmed by the medical director / attorney before publish:

- [ ] **GLP-2 / "GLP-3" naming** — GLP-2 (teduglutide) is FDA-approved for short bowel syndrome, not weight loss; "GLP-3" isn't a standard term. Confirm exact protocol names. (FDA-advertising / liability risk.)
- [ ] **Nasal sprays** — 503A vs 503B compounding category (pharmacist call). Affects Weight Optimization copy.
- [ ] **HIPAA Notice of Privacy Practices** provided + Privacy Policy / Terms approved.
- [ ] **State licensing / telehealth** disclosure (which states).
- [ ] **Physician credentials / licensure** for the About page.
- [ ] **Zofran® / Toradol®** qualifier wording approved.
- [ ] **Testimonial consent** + real results (medical testimonials have ad rules).
- [ ] **Final pricing** tiers + inclusions.

---

## 8. Phased roadmap

**Phase 0 — Direction lock**
Brand/design system, nav + IA, page templates, Boulevard connection, new palette/fonts default.

**Phase 1 — Core launch set**
Home, About, Services landing + top 4 services (IV, Weight, Hormone, Peptide), Contact/Book, legal (Privacy, NPP, Terms), booking wired.

**Phase 2 — Depth**
Remaining services (Labs, STI/STD, Longevity, Nutrition, Mobile IV, Men's, Women's), Memberships, Patient Results, FAQ.

**Phase 3 — Later**
Blog/Resources, Coming Soon teasers (Stem Cell, EBO2 for Fall 2026), credentials/licensing polish, SEO articles.

---

## 9. Content & asset checklist (assign owners + dates)

| Item | Owner | Status |
|---|---|---|
| Final copy per service page | | |
| Non-spa photography (clinical/athlete/lab/data) | | |
| Logo + brand color/font files | | |
| Medical team bios + headshots + credentials | | |
| Patient testimonials + consent | | |
| Final pricing tiers + inclusions | | |
| Boulevard booking URLs / embed / payments answer | | |
| HIPAA NPP + legal copy approval | | |
| GLP protocol naming (clinical sign-off) | | |
| State licensing list | | |
| Map / address / hours confirmation | | |

---

## 10. Open questions for John / Kenny

1. Confirm the spa/luxury look is being replaced by the clinical direction (design decision-maker?).
2. **One page per service, or grouped pages?** (biggest scope lever)
3. FAQ / Patient Results: full pages, Home sections, or both?
4. Boulevard: account access + do payments run through it?
5. Launch deadline + must-have set for v1 vs later?
6. OK with the phased rollout above?
