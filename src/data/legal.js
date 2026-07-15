const EMAIL = "hello@motionrx.co";
const UPDATED = "June 4, 2026";

export const legalDocs = {
  privacy: {
    title: "Privacy Policy",
    updated: UPDATED,
    intro:
      "MotionRX (“we,” “us,” or “our”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what we collect, how we use it, and the choices you have. Protected health information is also governed by our HIPAA Notice of Privacy Practices.",
    sections: [
      {
        heading: "Information We Collect",
        body: ["We collect information in the following ways:"],
        list: [
          "Information you provide directly, such as your name, email, phone number, and the contents of messages or intake forms you submit.",
          "Information collected automatically, such as your IP address, device and browser type, and pages visited, gathered through cookies and analytics tools.",
          "Information from partners, such as appointment details from our third-party scheduling and CRM partner when you book a visit.",
        ],
      },
      {
        heading: "How We Use Your Information",
        list: [
          "Respond to your inquiries and provide customer support.",
          "Schedule, coordinate, and follow up on your care.",
          "Operate, maintain, and improve our website.",
          "Send you updates or marketing you have requested.",
          "Comply with legal obligations and protect our rights.",
        ],
      },
      {
        heading: "How We Share Information",
        body: [
          "We share personal information only as needed with trusted service providers (such as hosting, analytics, and our scheduling/CRM partner), with healthcare providers involved in your care, and when required by law or to protect safety. We do not sell your personal information.",
        ],
      },
      {
        heading: "Cookies & Analytics",
        body: [
          "We use cookies and similar technologies to operate the site and understand how it is used. You can control cookies through your browser settings; disabling them may affect some features.",
        ],
      },
      {
        heading: "Data Security",
        body: [
          "We use administrative, technical, and physical safeguards designed to protect your information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
        ],
      },
      {
        heading: "Your Choices & Rights",
        body: [
          "You may request access to, correction of, or deletion of your personal information, and you may opt out of marketing communications at any time. California residents may have additional rights under the CCPA/CPRA. To exercise any of these rights, contact us at " +
            EMAIL +
            ".",
        ],
      },
      {
        heading: "Children's Privacy",
        body: [
          "Our website and services are not directed to children, and we do not knowingly collect personal information from anyone under 18 without parental consent.",
        ],
      },
      {
        heading: "Changes to This Policy",
        body: [
          "We may update this Privacy Policy from time to time. Material changes will be reflected by the “Last updated” date above.",
        ],
      },
      {
        heading: "Contact Us",
        body: ["Questions about this policy? Email us at " + EMAIL + "."],
      },
    ],
  },

  hipaa: {
    title: "HIPAA Notice of Privacy Practices",
    updated: UPDATED,
    intro:
      "This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.",
    sections: [
      {
        heading: "Our Commitment to Your Privacy",
        body: [
          "We are required by law to maintain the privacy of your protected health information (PHI), to provide you with this notice of our legal duties and privacy practices, and to follow the terms of the notice currently in effect.",
        ],
      },
      {
        heading: "How We May Use and Disclose Your Health Information",
        body: ["We may use and disclose your PHI for the following purposes:"],
        list: [
          "Treatment: to provide, coordinate, and manage your care among the providers involved in your treatment.",
          "Payment: to bill and obtain payment for the services you receive.",
          "Health Care Operations: for quality improvement, training, and the general business operations of the practice.",
        ],
      },
      {
        heading: "Uses and Disclosures Requiring Your Authorization",
        body: [
          "Most uses and disclosures of PHI for marketing purposes, the sale of PHI, and other uses not described in this notice will be made only with your written authorization, which you may revoke at any time in writing.",
        ],
      },
      {
        heading: "Your Health Information Rights",
        list: [
          "Inspect and obtain a copy of your health record.",
          "Request an amendment to your health information.",
          "Request an accounting of certain disclosures.",
          "Request restrictions on certain uses and disclosures.",
          "Request confidential communications by alternative means or location.",
          "Receive a paper copy of this notice and be notified of a breach of your PHI.",
        ],
      },
      {
        heading: "Our Responsibilities",
        list: [
          "Maintain the privacy and security of your protected health information.",
          "Notify you promptly if a breach occurs that may have compromised your information.",
          "Follow the duties and privacy practices described in this notice.",
        ],
      },
      {
        heading: "Complaints",
        body: [
          "If you believe your privacy rights have been violated, you may file a complaint with us or with the U.S. Department of Health and Human Services, Office for Civil Rights. You will not be retaliated against for filing a complaint.",
        ],
      },
      {
        heading: "Contact",
        body: ["To exercise your rights or ask questions, contact our Privacy Officer at " + EMAIL + "."],
      },
    ],
  },

  terms: {
    title: "Terms of Service",
    updated: UPDATED,
    intro:
      "These Terms of Service govern your use of the MotionRX website. By accessing or using the site, you agree to be bound by these Terms.",
    sections: [
      {
        heading: "Use of the Site",
        body: [
          "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, or restrict the use of, the site by others.",
        ],
      },
      {
        heading: "Not Medical Advice",
        body: [
          "Content on this site is provided for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Using the site does not create a provider-patient relationship. See our Medical Disclaimer for details.",
        ],
      },
      {
        heading: "Booking & Third-Party Services",
        body: [
          "Appointment scheduling is handled through a third-party partner platform. Your use of that platform is governed by its own terms and privacy policy. We are not responsible for the content, security, or practices of third-party services.",
        ],
      },
      {
        heading: "Intellectual Property",
        body: [
          "All content on this site, including text, graphics, logos, and images, is the property of MotionRX or its licensors and is protected by applicable intellectual property laws. You may not reproduce it without permission.",
        ],
      },
      {
        heading: "Disclaimers",
        body: [
          "The site is provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied, to the fullest extent permitted by law.",
        ],
      },
      {
        heading: "Limitation of Liability",
        body: [
          "To the fullest extent permitted by law, MotionRX will not be liable for any indirect, incidental, or consequential damages arising out of your use of, or inability to use, the site.",
        ],
      },
      {
        heading: "Governing Law",
        body: ["These Terms are governed by the laws of the State of California, without regard to its conflict-of-laws principles."],
      },
      {
        heading: "Changes to These Terms",
        body: ["We may update these Terms from time to time. Continued use of the site after changes constitutes acceptance of the revised Terms."],
      },
      {
        heading: "Contact",
        body: ["Questions about these Terms? Email us at " + EMAIL + "."],
      },
    ],
  },

  disclaimer: {
    title: "Medical Disclaimer",
    updated: UPDATED,
    intro:
      "The information provided by MotionRX on this website is for general informational purposes only.",
    sections: [
      {
        heading: "No Medical Advice",
        body: [
          "Nothing on this site constitutes medical advice or is intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions about a medical condition.",
        ],
      },
      {
        heading: "No Provider-Patient Relationship",
        body: [
          "Viewing or using this website does not create a provider-patient relationship. Such a relationship is established only after you complete a consultation and medical intake with a licensed provider.",
        ],
      },
      {
        heading: "Individual Results Vary",
        body: [
          "Wellness, IV, vitamin, and peptide therapies are not appropriate for everyone, and individual results vary. These statements have not been evaluated by the Food and Drug Administration, and our services are not intended to diagnose, treat, cure, or prevent any disease.",
        ],
      },
      {
        heading: "Consult a Professional",
        body: [
          "Never disregard professional medical advice or delay seeking it because of something you have read on this website.",
        ],
      },
      {
        heading: "Emergencies",
        body: ["If you think you may have a medical emergency, call 911 immediately."],
      },
      {
        heading: "Contact",
        body: ["Questions? Email us at " + EMAIL + "."],
      },
    ],
  },
};
