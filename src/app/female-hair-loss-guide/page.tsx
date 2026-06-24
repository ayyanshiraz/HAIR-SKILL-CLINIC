import type { Metadata } from "next";

// Exactly 3 levels up: (female-hair-loss-guide -> blog -> app -> src) then into components
import FemaleHairLossGuideClient from "../../components/FemaleHairLossGuideClient";

export const metadata: Metadata = {
  title: "The Causes, Diagnosis and Treatments of Female Hair Loss | Hair Skill Clinic",
  description: "Explore comprehensive medical diagnostic methods for female hair shedding in Lahore Pakistan. Discover Ludwig staging, mesotherapy infusions, and precise Sapphire FUE inside accessible PKR tiers.",
  keywords: ["Female Hair Loss Causes Pakistan", "Ludwig Staging Lahore", "Androgenetic Alopecia Women", "Traction Alopecia Care Pakistan", "Hair Skill Clinic Lahore", "Female Hair Restoration PKR"],
  openGraph: {
    title: "Female Hair Loss Guide | Hair Skill Clinic",
    description: "Medically proven diagnostic staging for authentic feminine density restoration.",
    url: "https://www.almadinahijamacenter.com/hair-transplant/female-hair-loss-guide",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "article",
  },
};

export default function FemaleHairLossGuidePage() {
  return <FemaleHairLossGuideClient />;
}