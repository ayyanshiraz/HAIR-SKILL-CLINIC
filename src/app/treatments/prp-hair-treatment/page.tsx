import type { Metadata } from "next";

// Exactly 3 levels up: (prp-hair-treatment -> treatments -> app -> src) then into components
import PrpClient from "../../../components/PrpClient";

export const metadata: Metadata = {
  title: "PRP Hair Treatment Pakistan & Platelet Plasma Infusion | Hair Skill Clinic",
  description: "Stop active hair shedding and nourish miniaturized follicles in Lahore Pakistan. Discover high-concentration Platelet Rich Plasma PRP injections inside accessible local PKR package tiers.",
  keywords: ["PRP Hair Treatment Pakistan", "Platelet Rich Plasma Lahore", "PRP Injections PKR", "Stop Hair Shedding Lahore", "Hair Skill Clinic Pakistan", "Androgenetic Alopecia PRP"],
  openGraph: {
    title: "PRP Scalp Therapy | Hair Skill Clinic",
    description: "Medically proven autologous platelet infusions to revitalize dormant follicles.",
    url: "https://www.almadinahijamacenter.com/treatments/prp-hair-treatment",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function PrpHairTreatmentPage() {
  return <PrpClient />;
}