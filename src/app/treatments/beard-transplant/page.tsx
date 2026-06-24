import type { Metadata } from "next";

// Exactly 3 levels up: (beard-transplant -> treatments -> app -> src) then into components
import BeardTransplantClient from "../../../components/BeardTransplantClient";

export const metadata: Metadata = {
  title: "Beard Transplant Pakistan & Goatee Restoration | Hair Skill Clinic Lahore",
  description: "Restore dense, sharp facial hair in Lahore Pakistan. Camouflage acne scars, fill patchy cheek gaps, or construct a full masculine jawline inside accessible local PKR package tiers.",
  keywords: ["Beard Transplant Pakistan", "Goatee Restoration Lahore", "DHI Facial Hair Pakistan", "Patchy Beard Care Lahore", "Hair Skill Clinic Pakistan", "Facial Hair Surgery PKR"],
  openGraph: {
    title: "Beard Restoration | Hair Skill Clinic",
    description: "Medically proven Choi implanter micro-geometry for authentic facial flow.",
    url: "https://www.almadinahijamacenter.com/treatments/beard-transplant",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function BeardTransplantPage() {
  return <BeardTransplantClient />;
}