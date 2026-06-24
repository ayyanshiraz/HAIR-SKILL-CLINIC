import type { Metadata } from "next";

// Exactly 3 levels up: (eyebrow -> treatments -> app -> src) then into components
import EyebrowClient from "../../../components/EyebrowClient";

export const metadata: Metadata = {
  title: "Eyebrow Transplant & Natural Brow Restoration | Hair Skill Clinic Lahore",
  description: "Restore expressive, natural brows in Lahore Pakistan. Construct permanent arches, fill over-plucked gaps, or execute symmetry corrections inside accessible local PKR package tiers.",
  keywords: ["Eyebrow Transplant Pakistan", "Permanent Brow Restoration Lahore", "DHI Eyebrow Pakistan", "Micro FUE Brows", "Hair Skill Clinic Lahore", "Facial Hair Restoration PKR"],
  openGraph: {
    title: "Eyebrow Restoration | Hair Skill Clinic",
    description: "Medically proven single-hair graft precision for authentic facial harmony.",
    url: "https://www.almadinahijamacenter.com/treatments/eyebrow",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function EyebrowPage() {
  return <EyebrowClient />;
}