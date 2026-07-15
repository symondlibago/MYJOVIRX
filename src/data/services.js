// Service catalog — one entry per service page.
// Copy and structure follow MotionRx_Service_Pages.pdf (V2 · Jul 2026):
// the Aesop-inspired editorial template — split hero, serif statement,
// image + "How it works" specs, detail table, benefits, explore more.
// Images are existing placeholders until the final Drive assets land.

export const SERVICES = [
  {
    slug: "iv-nutrient-therapy",
    name: "IV Nutrient Therapy",
    category: "Hydration & Recovery",
    image: "/lounge-wide.avif",
    image2: "/vials-marble.avif",
    promise:
      "Pharmaceutical-grade IV infusions for energy, immunity, and recovery.",
    bookLabel: "Book IV Therapy",
    statement:
      "Personalized infusions that replenish, restore, and revitalize, from the inside out",
    overview: [
      "Personalized IV infusions formulated with pharmaceutical-grade vitamins, minerals, amino acids, antioxidants, and hydration to support recovery, energy, immunity, cognitive performance, and athletic recovery.",
      "Available in 500ml and 1000ml bags, administered by professional medical staff.",
    ],
    how: {
      text: "Settle into the lounge as a tailored infusion is administered by our medical team, then leave replenished",
      specs: [
        { label: "Duration", value: "30 to 45 minutes" },
        { label: "Format", value: "500ml or 1000ml" },
        { label: "Administered by", value: "Licensed medical staff" },
        { label: "Best for", value: "Recovery, immunity, energy" },
      ],
    },
    details: {
      title: "Signature Bags",
      rows: [
        {
          term: "Immunity",
          desc: "Vitamin B12, B Complex, Vitamin C, Magnesium, Zinc, plus a Glutathione push.",
        },
        {
          term: "Beauty",
          desc: "Vitamin B12, B Complex, higher-dose Vitamin C, Biotin, plus Glutathione.",
        },
        {
          term: "Recovery",
          desc: "The Immunity base plus an amino acid and mineral blend.",
        },
        {
          term: "Hangover & Wellness",
          desc: "Base hydration and nutrient formula.",
        },
      ],
      note: "Zofran and Toradol are available as physician-directed additions only.",
    },
    benefits: {
      label: "Benefits",
      title: "Feel the difference",
      items: [
        { title: "Hydration", desc: "Replenish fluids and electrolytes fast." },
        { title: "Energy", desc: "Restore endurance and daily drive." },
        { title: "Immunity", desc: "Support your body's natural defenses." },
        { title: "Recovery", desc: "Bounce back after training or travel." },
      ],
    },
    explore: ["peptide-therapy", "mobile-iv-therapy", "longevity-medicine"],
  },
  {
    slug: "medical-weight-optimization",
    name: "Medical Weight Optimization",
    category: "Metabolic Health",
    image: "/medical-weight-optimization.avif",
    image2: "/ritual-lounge.avif",
    promise:
      "Physician guided weight management built around your metabolism.",
    bookLabel: "Book a Consult",
    statement:
      "Physician guided weight care, built around your metabolism, not a template",
    overview: [
      "A medically supervised program that combines evaluation, lab work, and a personalized protocol to support sustainable, healthy weight management.",
      "Plans may include nutrition guidance, lifestyle coaching, and medications where clinically appropriate, with ongoing monitoring by your provider.",
    ],
    how: {
      text: "We assess, build a personalized protocol, and support you with monitoring and adjustments over time",
      specs: [
        { label: "Includes", value: "Labs, plan, monitoring" },
        { label: "Directed by", value: "Medical provider" },
        { label: "Cadence", value: "Ongoing check-ins" },
        { label: "Best for", value: "Sustainable weight goals" },
      ],
    },
    details: {
      title: "What's included",
      rows: [
        {
          term: "Comprehensive intake",
          desc: "History, goals, and baseline lab work to inform your plan.",
        },
        {
          term: "Personalized protocol",
          desc: "A plan tailored to your metabolism and lifestyle.",
        },
        {
          term: "Prescription support",
          desc: "Medications where clinically appropriate, provider directed.",
        },
        {
          term: "Ongoing check-ins",
          desc: "Regular reviews to adjust and sustain progress.",
        },
      ],
      note: "Eligibility and any medications are determined by your provider following evaluation.",
    },
    benefits: {
      label: "Outcomes",
      title: "Built to last",
      items: [
        {
          title: "Sustainable",
          desc: "Habits and support designed for the long term.",
        },
        { title: "Guided", desc: "Provider led every step." },
        { title: "Data informed", desc: "Decisions grounded in your labs." },
        { title: "Personal", desc: "No one-size-fits-all plans." },
      ],
    },
    explore: [
      "hormone-optimization",
      "nutrition-lifestyle-medicine",
      "laboratory-testing",
    ],
  },
  {
    slug: "hormone-optimization",
    name: "Hormone Optimization",
    category: "Balance & Vitality",
    image: "/ritual-lounge.avif",
    image2: "/vials-marble.avif",
    promise: "Restore balance with physician guided hormone care.",
    bookLabel: "Book a Consult",
    statement:
      "Restore balance with individualized, provider guided hormone optimization",
    overview: [
      "Comprehensive hormone evaluation and individualized optimization to support energy, mood, sleep, libido, and overall vitality.",
      "Includes lab testing, provider review, and a tailored plan that is monitored and adjusted over time.",
    ],
    how: {
      text: "A baseline panel and consultation inform a tailored plan, monitored and adjusted as you progress",
      specs: [
        { label: "Includes", value: "Panel, consult, plan" },
        { label: "Directed by", value: "Licensed provider" },
        { label: "Cadence", value: "Ongoing monitoring" },
        { label: "Best for", value: "Energy, sleep, vitality" },
      ],
    },
    details: {
      title: "What's included",
      rows: [
        {
          term: "Baseline hormone panel",
          desc: "Comprehensive testing to establish your starting point.",
        },
        {
          term: "Provider consultation",
          desc: "A detailed review of your labs, symptoms, and goals.",
        },
        {
          term: "Personalized plan",
          desc: "An individualized optimization plan built for you.",
        },
        {
          term: "Ongoing monitoring",
          desc: "Regular follow-up to fine-tune and sustain results.",
        },
      ],
      note: "All hormone therapy is prescribed and monitored by a licensed provider.",
    },
    benefits: {
      label: "Benefits",
      title: "Feel like yourself again",
      items: [
        { title: "Energy", desc: "Steadier, more consistent daily energy." },
        { title: "Sleep", desc: "Support for restorative rest." },
        { title: "Mood", desc: "A more balanced, resilient baseline." },
        { title: "Vitality", desc: "Renewed drive and wellbeing." },
      ],
    },
    explore: ["mens-health", "womens-health", "peptide-therapy"],
  },
  {
    slug: "peptide-therapy",
    name: "Peptide Therapy",
    category: "Recovery & Longevity",
    image: "/vials-marble.avif",
    image2: "/iv-stand.avif",
    promise:
      "Targeted peptide protocols for recovery, performance, and healthy aging.",
    bookLabel: "Book a Consult",
    statement:
      "Targeted peptide protocols for recovery, performance, and healthy aging",
    overview: [
      "Peptide protocols selected and monitored by our medical team to support recovery, tissue repair, metabolic health, and longevity goals.",
      "Every protocol follows a consultation and evaluation, and is individualized to your needs.",
    ],
    how: {
      text: "Following evaluation, your provider selects and oversees a protocol tailored to your goals",
      specs: [
        { label: "Format", value: "Provider selected protocol" },
        { label: "Oversight", value: "Medical team" },
        { label: "Cadence", value: "Individualized" },
        { label: "Best for", value: "Recovery, longevity" },
      ],
    },
    details: {
      title: "What's included",
      rows: [
        {
          term: "Goal-based consultation",
          desc: "We start with what you want to achieve.",
        },
        {
          term: "Provider selected protocol",
          desc: "A plan chosen and overseen by our medical team.",
        },
        {
          term: "Guidance & education",
          desc: "Clear direction on how your protocol works.",
        },
        {
          term: "Ongoing monitoring",
          desc: "Follow-up to review progress and adjust.",
        },
      ],
      note: "Peptide protocols are individualized and provider directed following evaluation.",
    },
    benefits: {
      label: "Focus Areas",
      title: "Support where it counts",
      items: [
        { title: "Recovery", desc: "Support tissue repair and rest." },
        { title: "Performance", desc: "Optimize training and output." },
        { title: "Metabolism", desc: "Support healthy metabolic function." },
        { title: "Longevity", desc: "Care aimed at healthy aging." },
      ],
    },
    explore: [
      "iv-nutrient-therapy",
      "longevity-medicine",
      "hormone-optimization",
    ],
  },
  {
    slug: "laboratory-testing",
    name: "Laboratory Testing",
    category: "Insight & Prevention",
    image: "/laboratory-testing.avif",
    image2: "/vials-marble.avif",
    promise: "Comprehensive lab panels for a clear picture of your health.",
    bookLabel: "Book a Panel",
    statement:
      "A clear, comprehensive picture of your health, translated into action",
    overview: [
      "Advanced diagnostic testing to establish baselines and guide your care, from metabolic and hormone panels to micronutrient and inflammatory markers.",
      "Convenient draws and provider reviewed results, translated into clear, actionable next steps.",
    ],
    how: {
      text: "Comprehensive panels are drawn on site, then reviewed with a provider and turned into next steps",
      specs: [
        { label: "Scope", value: "Comprehensive panels" },
        { label: "Draws", value: "Fast, on site" },
        { label: "Review", value: "With a provider" },
        { label: "Best for", value: "Baselines, prevention" },
      ],
    },
    details: {
      title: "What's included",
      rows: [
        {
          term: "Comprehensive panels",
          desc: "Metabolic, hormone, micronutrient, and more.",
        },
        {
          term: "Convenient draws",
          desc: "Fast, comfortable collection on site.",
        },
        {
          term: "Provider review",
          desc: "Your results explained, not just reported.",
        },
        {
          term: "Actionable next steps",
          desc: "A clear plan based on what we find.",
        },
      ],
    },
    benefits: {
      label: "Why It Matters",
      title: "Clarity you can act on",
      items: [
        { title: "Baseline", desc: "Know where you truly stand." },
        { title: "Prevention", desc: "Catch what matters early." },
        { title: "Personalized", desc: "Care built on your data." },
        { title: "Progress", desc: "Measure what's working." },
      ],
    },
    explore: [
      "longevity-medicine",
      "hormone-optimization",
      "nutrition-lifestyle-medicine",
    ],
  },
  {
    slug: "sti-std-testing",
    name: "Discreet STI / STD Testing",
    category: "Private & Confidential",
    image: "/sti-std-testing.avif",
    image2: "/injection-green.avif",
    promise: "Confidential testing with discreet, judgment-free care.",
    bookLabel: "Book Testing",
    statement:
      "Confidential, judgment-free testing, handled with discretion and care",
    overview: [
      "Private, comprehensive STI and STD screening with discreet scheduling, professional collection, and confidential, provider reviewed results.",
      "Judgment-free care from a team focused on your privacy and peace of mind, with treatment guidance available where appropriate.",
    ],
    how: {
      text: "Discreet scheduling and professional collection, with private results and provider follow-up where needed",
      specs: [
        { label: "Privacy", value: "Fully confidential" },
        { label: "Scope", value: "Comprehensive screening" },
        { label: "Results", value: "Secure and private" },
        { label: "Best for", value: "Peace of mind" },
      ],
    },
    details: {
      title: "What's included",
      rows: [
        {
          term: "Confidential intake",
          desc: "Discreet scheduling and private consultation.",
        },
        {
          term: "Comprehensive screening",
          desc: "A thorough panel appropriate to your needs.",
        },
        {
          term: "Private results",
          desc: "Results delivered securely and confidentially.",
        },
        {
          term: "Provider follow-up",
          desc: "Guidance and next steps where appropriate.",
        },
      ],
      note: "Care is confidential and provided by licensed professionals.",
    },
    benefits: {
      label: "Our Promise",
      title: "Private, professional, kind",
      items: [
        { title: "Confidential", desc: "Your privacy comes first." },
        { title: "Comfortable", desc: "Judgment-free from start to finish." },
        { title: "Thorough", desc: "Comprehensive, appropriate screening." },
        { title: "Supported", desc: "Clear guidance if you need it." },
      ],
    },
    explore: ["laboratory-testing", "mens-health", "womens-health"],
  },
  {
    slug: "longevity-medicine",
    name: "Longevity Medicine",
    category: "Healthspan",
    image: "/longevity-medicine.avif",
    image2: "/hero-lounge.avif",
    promise: "A proactive, data driven approach to how you age.",
    bookLabel: "Book a Consult",
    statement:
      "A proactive, data driven approach to how you age and how you feel",
    overview: [
      "A comprehensive, preventive approach that combines advanced diagnostics, lifestyle medicine, and personalized protocols to support healthspan and long-term vitality.",
      "We look beyond symptoms to optimize how you feel and function for years to come.",
    ],
    how: {
      text: "Advanced diagnostics establish your baseline, guiding a personalized plan refined over time",
      specs: [
        { label: "Includes", value: "Diagnostics, plan" },
        { label: "Approach", value: "Preventive" },
        { label: "Cadence", value: "Ongoing optimization" },
        { label: "Best for", value: "Healthspan" },
      ],
    },
    details: {
      title: "What's included",
      rows: [
        {
          term: "Advanced diagnostics",
          desc: "A deep baseline of your health markers.",
        },
        {
          term: "Personalized plan",
          desc: "A longevity protocol built around your goals.",
        },
        {
          term: "Lifestyle medicine",
          desc: "Nutrition, movement, and recovery guidance.",
        },
        {
          term: "Ongoing optimization",
          desc: "Continual refinement as your data evolves.",
        },
      ],
    },
    benefits: {
      label: "The Focus",
      title: "More good years",
      items: [
        {
          title: "Prevention",
          desc: "Address risk before it becomes a problem.",
        },
        { title: "Performance", desc: "Function at your best." },
        { title: "Resilience", desc: "Support long-term health." },
        { title: "Clarity", desc: "Sharper energy and focus." },
      ],
    },
    explore: [
      "laboratory-testing",
      "peptide-therapy",
      "hormone-optimization",
    ],
  },
  {
    slug: "nutrition-lifestyle-medicine",
    name: "Nutrition & Lifestyle Medicine",
    category: "Foundations",
    image: "/nutrition-lifestyle-medicine.avif",
    image2: "/ritual-lounge.avif",
    promise: "Sustainable nutrition and lifestyle guidance that lasts.",
    bookLabel: "Book a Consult",
    statement:
      "Sustainable nutrition and lifestyle guidance, built on habits you can keep",
    overview: [
      "Practical, evidence informed nutrition and lifestyle coaching tailored to your goals, from energy and body composition to long-term metabolic health.",
      "Real change built on habits you can keep, with support from a team that meets you where you are.",
    ],
    how: {
      text: "We assess your goals, build a practical plan, and support you with coaching and accountability",
      specs: [
        { label: "Format", value: "Assessment and coaching" },
        { label: "Approach", value: "Evidence informed" },
        { label: "Cadence", value: "Ongoing support" },
        { label: "Best for", value: "Lasting habits" },
      ],
    },
    details: {
      title: "What's included",
      rows: [
        {
          term: "Personalized assessment",
          desc: "A clear read on your goals and starting point.",
        },
        {
          term: "Nutrition plan",
          desc: "Guidance built around your life, not a fad.",
        },
        {
          term: "Habit & lifestyle coaching",
          desc: "Sustainable change, step by step.",
        },
        {
          term: "Ongoing support",
          desc: "Accountability and adjustments over time.",
        },
      ],
    },
    benefits: {
      label: "Outcomes",
      title: "Habits that hold",
      items: [
        { title: "Energy", desc: "Fuel your day the right way." },
        { title: "Composition", desc: "Support healthy body composition." },
        {
          title: "Metabolic health",
          desc: "Care for your long-term baseline.",
        },
        { title: "Sustainable", desc: "Built to keep, not to quit." },
      ],
    },
    explore: [
      "medical-weight-optimization",
      "longevity-medicine",
      "laboratory-testing",
    ],
  },
  {
    slug: "mobile-iv-therapy",
    name: "Mobile IV Therapy",
    category: "Care, Delivered",
    image: "/mobile-iv-therapy.avif",
    image2: "/injection-green.avif",
    promise: "Our IV lounge, brought to your door.",
    bookLabel: "Book Mobile IV",
    statement: "The MotionRx lounge, brought to your door",
    overview: [
      "The MotionRx experience at home, at the office, or on location. The same pharmaceutical-grade infusions and professional medical staff, delivered to you.",
      "Ideal for recovery days, events, or anytime you'd rather we come to you.",
    ],
    how: {
      text: "Choose a time and place; our medical team arrives fully equipped to administer your infusion",
      specs: [
        { label: "Location", value: "Home, office, event" },
        { label: "Format", value: "Full drip menu" },
        { label: "Staff", value: "Medical team" },
        { label: "Best for", value: "Convenience, recovery" },
      ],
    },
    details: {
      title: "How mobile works",
      rows: [
        {
          term: "Book your window",
          desc: "Choose a time and place that suits you.",
        },
        {
          term: "We come to you",
          desc: "Our medical team arrives fully equipped.",
        },
        {
          term: "Professional administration",
          desc: "The same standard of care as our lounge.",
        },
        {
          term: "Same signature menu",
          desc: "Every drip and add-on, on location.",
        },
      ],
      note: "Service area and scheduling minimums may apply.",
    },
    benefits: {
      label: "Why Mobile",
      title: "Wellness, wherever",
      items: [
        { title: "Convenient", desc: "No travel, no waiting room." },
        { title: "Flexible", desc: "Home, office, or event." },
        { title: "Professional", desc: "Administered by medical staff." },
        { title: "Complete", desc: "The full menu, delivered." },
      ],
    },
    explore: ["iv-nutrient-therapy", "peptide-therapy", "longevity-medicine"],
  },
  {
    slug: "mens-health",
    name: "Men's Health",
    category: "Performance & Vitality",
    image: "/mens-health.avif",
    image2: "/vials-marble.avif",
    promise: "Comprehensive care built around men's health goals.",
    bookLabel: "Book a Consult",
    statement:
      "Comprehensive care built around men's performance, vitality, and longevity",
    overview: [
      "A tailored approach spanning hormone optimization, metabolic health, recovery, and longevity, guided by lab work and a provider led plan.",
      "Care designed to help you perform, recover, and feel your best at every stage.",
    ],
    how: {
      text: "Comprehensive labs and a provider review shape a plan for how you want to perform and feel",
      specs: [
        { label: "Includes", value: "Labs, hormone review, plan" },
        { label: "Directed by", value: "Medical provider" },
        { label: "Cadence", value: "Ongoing care" },
        { label: "Best for", value: "Performance, vitality" },
      ],
    },
    details: {
      title: "What's included",
      rows: [
        {
          term: "Comprehensive labs",
          desc: "A full baseline of your health markers.",
        },
        {
          term: "Hormone & metabolic review",
          desc: "A detailed look at what drives how you feel.",
        },
        {
          term: "Personalized plan",
          desc: "Optimization built around your goals.",
        },
        { term: "Ongoing care", desc: "Follow-up to sustain your results." },
      ],
    },
    benefits: {
      label: "Focus Areas",
      title: "Optimized, not average",
      items: [
        { title: "Energy", desc: "Restore drive and endurance." },
        { title: "Performance", desc: "Train and recover better." },
        { title: "Vitality", desc: "Support libido and wellbeing." },
        { title: "Longevity", desc: "Care for the long game." },
      ],
    },
    explore: [
      "hormone-optimization",
      "peptide-therapy",
      "laboratory-testing",
    ],
  },
  {
    slug: "womens-health",
    name: "Women's Health",
    category: "Balance & Wellbeing",
    image: "/womens-health.avif",
    image2: "/vials-marble.avif",
    promise: "Personalized care for every stage.",
    bookLabel: "Book a Consult",
    statement:
      "Personalized, attentive care for every stage of a woman's health",
    overview: [
      "Individualized care addressing hormones, energy, metabolic health, and wellbeing, supported by comprehensive testing and a provider led plan.",
      "Attentive, personalized care that adapts with you through every stage of life.",
    ],
    how: {
      text: "Comprehensive testing and a thoughtful review shape care that adapts with you over time",
      specs: [
        { label: "Includes", value: "Labs, wellness review, plan" },
        { label: "Directed by", value: "Medical provider" },
        { label: "Cadence", value: "Ongoing support" },
        { label: "Best for", value: "Balance, wellbeing" },
      ],
    },
    details: {
      title: "What's included",
      rows: [
        {
          term: "Comprehensive labs",
          desc: "A clear picture of your health markers.",
        },
        {
          term: "Hormone & wellness review",
          desc: "A thoughtful look at how you feel and function.",
        },
        {
          term: "Personalized plan",
          desc: "Care shaped around your goals and stage.",
        },
        { term: "Ongoing support", desc: "Follow-up that adapts with you." },
      ],
    },
    benefits: {
      label: "Focus Areas",
      title: "Care that adapts with you",
      items: [
        { title: "Balance", desc: "Support steadier hormones." },
        { title: "Energy", desc: "Restore daily vitality." },
        { title: "Wellbeing", desc: "Feel supported and heard." },
        { title: "Longevity", desc: "Care for your future self." },
      ],
    },
    explore: [
      "hormone-optimization",
      "laboratory-testing",
      "nutrition-lifestyle-medicine",
    ],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
