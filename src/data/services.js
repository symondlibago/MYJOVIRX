// Service catalog for the repositioning. One entry per service page.
// Copy is drawn from Kenny's "Website Sitemap & Content Guide" (June 30, 2026).
// NOTE: Medical Weight Optimization copy is intentionally kept generic pending
// clinical sign-off on protocol naming (GLP-2/GLP-3 flagged for review).

export const SERVICES = [
  {
    slug: "iv-nutrient-therapy",
    name: "IV Nutrient Therapy",
    category: "Hydration & Recovery",
    image: "/treatment-2.jpg",
    promise:
      "Pharmaceutical-grade IV infusions for energy, immunity, and recovery.",
    overview: [
      "Personalized IV infusions formulated with pharmaceutical-grade vitamins, minerals, amino acids, antioxidants, and hydration to support recovery, energy, immunity, cognitive performance, and athletic recovery.",
      "Available in 500ml and 1000ml bags, administered by professional medical staff.",
    ],
    included: {
      title: "Signature Bags",
      items: [
        "Immunity: Vitamin B12, B Complex, Vitamin C, Magnesium, Zinc, plus a Glutathione push.",
        "Beauty: Vitamin B12, B Complex, higher-dose Vitamin C, Biotin, plus Glutathione.",
        "Recovery: the Immunity base plus an amino acid and mineral blend.",
        "Hangover and Wellness: base hydration and nutrient formula.",
      ],
    },
    note: "Zofran and Toradol are available as physician-directed additions only.",
    pricing: null,
    bookLabel: "Book IV Therapy",
  },
  {
    slug: "medical-weight-optimization",
    name: "Medical Weight Optimization",
    category: "Weight & Metabolic",
    image: "/hero-2.jpg",
    promise:
      "Physician-supervised, personalized weight optimization programs.",
    overview: [
      "Customized weight-management protocols tailored to each patient, paired with body composition analysis, nutrition coaching, lifestyle optimization, and ongoing medical supervision.",
    ],
    bullets: [
      "Body Composition Analysis",
      "Nutrition Coaching",
      "Lifestyle Optimization",
      "Ongoing Medical Supervision",
    ],
    note: "Specific medication protocols are confirmed during your medical consultation.",
    pricing: null,
    bookLabel: "Book Weight Loss Consultation",
  },
  {
    slug: "hormone-optimization",
    name: "Hormone Optimization",
    category: "TRT / HRT",
    image: "/treatment-6.jpg",
    promise:
      "Individualized hormone programs for energy, clarity, and performance.",
    overview: [
      "Individualized hormone replacement and optimization programs designed to improve energy, body composition, mental clarity, recovery, and overall performance.",
    ],
    pricing: "From $199/mo",
    bookLabel: "Book Hormone Consultation",
  },
  {
    slug: "peptide-therapy",
    name: "Peptide Therapy",
    category: "Recovery & Longevity",
    image: "/treatment-5.jpg",
    promise:
      "Physician-guided peptide protocols for recovery and longevity.",
    overview: [
      "Physician-guided peptide therapies supporting recovery, longevity, brain performance, metabolic health, gut health, immune function, muscle development, healthy aging, and sexual wellness.",
      "With over 8 years of experience administering and stacking peptide protocols, our team brings a depth of clinical expertise that is uncommon in this space. All products are U.S.-based and third-party tested for purity and potency.",
    ],
    pricing: null,
    bookLabel: "Book Peptide Consultation",
  },
  {
    slug: "laboratory-testing",
    name: "Laboratory Testing",
    category: "Advanced Diagnostics",
    image: "/clinic-room.jpg",
    promise:
      "Advanced diagnostics that find risk before it becomes disease.",
    overview: [
      "Advanced testing designed to detect deficiencies, optimize performance, and identify health risks before disease develops.",
    ],
    included: {
      title: "Panels",
      items: [
        "Wellness and Hormone Panels",
        "Cardiovascular and Metabolic Risk",
        "Thyroid Function",
        "Vitamin Analysis",
        "Longevity Biomarkers",
      ],
    },
    pricing: "$149 to $999",
    bookLabel: "Book Lab Testing",
  },
  {
    slug: "sti-std-testing",
    name: "Discreet STI / STD Testing",
    category: "Confidential Care",
    image: "/clinic-office.jpg",
    promise:
      "Confidential testing in a private, judgment-free space.",
    overview: [
      "Confidential testing in a private, non-judgmental space. Every visit is handled discreetly, from check-in through results.",
      "You can expect privacy and respect at every step.",
    ],
    pricing: null,
    bookLabel: "Book a Consultation",
  },
  {
    slug: "longevity-medicine",
    name: "Longevity Medicine",
    category: "Healthy Aging",
    image: "/treatment-1.jpg",
    promise:
      "A comprehensive approach to long-term health and quality of life.",
    overview: [
      "A comprehensive approach combining diagnostics, laboratory analysis, hormones, peptides, IV nutrient therapy, nutrition, and lifestyle interventions to improve long-term health and quality of life.",
    ],
    pricing: null,
    bookLabel: "Book a Consultation",
  },
  {
    slug: "nutrition-lifestyle-medicine",
    name: "Nutrition & Lifestyle Medicine",
    category: "Metabolic Health",
    image: "/treatment-3.jpg",
    promise:
      "Evidence-based coaching for sustainable, lasting health.",
    overview: [
      "Evidence-based coaching focused on sustainable nutrition, movement, sleep, stress management, and metabolic health.",
    ],
    pricing: null,
    bookLabel: "Book a Consultation",
  },
  {
    slug: "mobile-iv-therapy",
    name: "Mobile IV Therapy",
    category: "Concierge",
    image: "/iv-therapy.jpg",
    promise: "Concierge IV therapy delivered wherever you are.",
    overview: [
      "Concierge IV nutrient therapy delivered to homes, offices, hotels, athletic events, and corporate wellness programs.",
    ],
    pricing: null,
    bookLabel: "Book Mobile IV",
  },
  {
    slug: "mens-health",
    name: "Men's Health",
    category: "Performance",
    image: "/hero-1.jpg",
    promise: "Programs built around energy, performance, and recovery.",
    overview: [
      "Programs focused on hormones, performance, recovery, sexual health, energy, and metabolic health.",
    ],
    pricing: null,
    bookLabel: "Book a Consultation",
  },
  {
    slug: "womens-health",
    name: "Women's Health",
    category: "Balance & Vitality",
    image: "/treatment-4.jpg",
    promise: "Programs for hormone balance, energy, and healthy aging.",
    overview: [
      "Programs focused on hormone balance, metabolism, perimenopause and menopause support, healthy aging, energy, and weight optimization.",
    ],
    pricing: null,
    bookLabel: "Book a Consultation",
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
