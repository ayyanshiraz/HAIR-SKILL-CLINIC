import type { Metadata } from "next";
import ManualPunchClient from "../../../../components/ManualPunchClient";

export const metadata: Metadata = {
  title: "Manual Punch FUE Hair Transplant Lahore | Hair Skill",
  description: "Looking for highly precise manual punch FUE in Lahore? We ensure maximum graft survival and controlled extraction with zero motor damage at Hair Skill.",
  keywords: [
    "Manual Punch FUE Lahore",
    "Manual Extraction Hair Transplant",
    "High Graft Survival Lahore",
    "Precision FUE Hair Clinic",
    "Zero Damage Hair Transplant"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/techniques/manual-punch",
  },
  openGraph: {
    title: "Manual Punch FUE Hair Transplant Lahore | Hair Skill",
    description: "Looking for highly precise manual punch FUE in Lahore? We ensure maximum graft survival and controlled extraction with zero motor damage at Hair Skill.",
    url: "https://www.hairskill.com/hair-transplant/techniques/manual-punch",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/treatments/13.webp",
        width: 1200,
        height: 630,
        alt: "Surgeon performing highly precise manual punch FUE extraction at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function ManualPunchPage() {
  return <ManualPunchClient />;
}