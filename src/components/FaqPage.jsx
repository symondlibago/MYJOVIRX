import React from "react";
import Seo from "./Seo";
import HomeFaq from "./HomeFaq";

// Standalone FAQ page. Reuses the Home FAQ block.
export default function FaqPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Seo
        title="FAQ | MotionRx"
        description="Answers to common questions about MotionRx services, consultations, pricing, and telehealth."
        path="/faq"
      />
      <div className="pt-24 md:pt-28">
        <HomeFaq />
      </div>
    </div>
  );
}
