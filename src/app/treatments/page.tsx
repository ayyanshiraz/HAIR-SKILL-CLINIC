import type { Metadata } from "next";

// Exactly 2 levels up from treatments/page.tsx -> (app -> src) then into components
import TreatmentsHubClient from "../../components/TreatmentsHubClient";

export const metadata: Metadata = {
  title: "Advanced Hair Restoration Treatments & Procedures | Hair Skill Clinic Lahore",
  description: "Explore our complete medical directory of hair restoration procedures in Lahore Pakistan. Discover FUE, DHI, Mesotherapy, PRP infusions, and specialized temporal framing.",
  keywords: ["Hair Transplant Lahore", "PRP Scalp Therapy Pakistan", "DHI Direct Implantation", "Afro Hair Restoration Pakistan", "Hair Skill Clinic Lahore"],
  openGraph: {
    title: "Treatments & Surgical Procedures | Hair Skill Clinic",
    description: "Medically proven cellular therapies and surgical extractions for lifelong density.",
    url: "https://www.almadinahijamacenter.com/treatments",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function TreatmentsRootPage() {
  return <TreatmentsHubClient />;
}