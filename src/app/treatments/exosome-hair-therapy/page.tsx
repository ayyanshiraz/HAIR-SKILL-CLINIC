import type { Metadata } from "next";

// Exactly 3 levels up: (exosome-hair-therapy -> treatments -> app -> src) then into components
import ExosomeClient from "../../../components/ExosomeClient";

export const metadata: Metadata = {
  title: "Exosome Hair Therapy Pakistan & Stem Cell Vesicles | Hair Skill Clinic",
  description: "Revitalize dormant follicles at a cellular level in Lahore Pakistan. Discover high-purity stem cell derived Exosome Hair Therapy inside accessible local PKR package tiers.",
  keywords: ["Exosome Hair Therapy Pakistan", "Stem Cell Hair Lahore", "Extracellular Vesicles PKR", "Post Transplant Exosomes", "Hair Skill Clinic Lahore", "Cellular Hair Regeneration"],
  openGraph: {
    title: "Exosome Cellular Therapy | Hair Skill Clinic",
    description: "Medically proven nano-sized extracellular vesicles to promote absolute tissue regeneration.",
    url: "https://www.almadinahijamacenter.com/treatments/exosome-hair-therapy",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function ExosomeHairTherapyPage() {
  return <ExosomeClient />;
}