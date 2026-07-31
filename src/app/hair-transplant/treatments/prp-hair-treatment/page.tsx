import type { Metadata } from "next";
import PrpClient from "../../../../components/PrpClient";

export const metadata: Metadata = {
  title: "PRP Hair Treatment & Therapy in Lahore | Hair Skill",
  description: "Stop active hair shedding with advanced PRP hair treatment in Lahore. We use high-concentration Platelet-Rich Plasma injections to nourish weak follicles.",
  keywords: [
    "PRP Hair Treatment Lahore",
    "Platelet Rich Plasma Lahore",
    "PRP Injections for Hair Loss",
    "Stop Hair Shedding Lahore",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/prp-hair-treatment",
  },
  openGraph: {
    title: "PRP Hair Treatment & Therapy in Lahore | Hair Skill",
    description: "Stop active hair shedding with advanced PRP hair treatment in Lahore. We use high-concentration Platelet-Rich Plasma injections to nourish weak follicles.",
    url: "https://www.hairskill.com/hair-transplant/treatments/prp-hair-treatment",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/treatments/8.webp",
        width: 1200,
        height: 630,
        alt: "Medical professional administering precise Platelet-Rich Plasma (PRP) injections at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function PrpHairTreatmentPage() {
  return <PrpClient />;
}