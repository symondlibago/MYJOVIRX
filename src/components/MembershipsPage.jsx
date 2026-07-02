import React from "react";
import Seo from "./Seo";
import Memberships from "./Memberships";

// Standalone Memberships page. Reuses the Memberships tiers component.
export default function MembershipsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Seo
        title="Memberships | MotionRx"
        description="MotionRx memberships and subscriptions: IV, peptide, and injection plans, TRT and HRT membership, and lab packages."
        path="/memberships"
      />
      <div className="pt-16 md:pt-20">
        <Memberships />
      </div>
    </div>
  );
}
