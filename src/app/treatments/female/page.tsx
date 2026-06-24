import type { Metadata } from "next";

// Exactly 3 levels up: (female -> treatments -> app -> src) then into components
import FemaleClient from "../../../components/FemaleClient";

export const metadata: Metadata = {
  title: "Female Hair Transplant & Part Line Restoration | Hair Skill Clinic Lahore",
  description: "Restore soft, natural density in Lahore Pakistan. Repair widening part lines, rebuild delicate temporal points, or execute feminine hairline lowering inside accessible PKR package tiers.",
  keywords: ["Female Hair Transplant Pakistan", "Part Line Restoration Lahore", "DHI Female Hairline Pakistan", "Traction Alopecia Women", "Hair Skill Clinic Lahore", "Unshaven Hair Transplant Women"],
  openGraph: {
    title: "Female Hair Restoration | Hair Skill Clinic",
    description: "Medically proven partial-shave discretion for authentic feminine softness.",
    url: "https://www.almadinahijamacenter.com/treatments/female",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function FemalePage() {
  return <FemaleClient />;
}