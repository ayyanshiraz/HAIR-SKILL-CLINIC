import type { Metadata } from "next";
import BeardTransplantClient from "../../../../components/BeardTransplantClient";

export const metadata: Metadata = {
  title: "Beard & Facial Hair Transplant in Lahore | Hair Skill",
  description: "Struggling with a patchy beard? Get a natural-looking beard transplant in Lahore. Restore facial hair, fix goatees, and cover scars at Hair Skill Clinic.",
  keywords: [
    "Beard Transplant Lahore",
    "Facial Hair Restoration Lahore",
    "Patchy Beard Fix Lahore",
    "Goatee Transplant Lahore",
    "Hair Skill Clinic Beard"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/beard-transplant",
  },
  openGraph: {
    title: "Beard & Facial Hair Transplant in Lahore | Hair Skill",
    description: "Struggling with a patchy beard? Get a natural-looking beard transplant in Lahore. Restore facial hair, fix goatees, and cover scars at Hair Skill Clinic.",
    url: "https://www.hairskill.com/hair-transplant/treatments/beard-transplant",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/treatments/2.webp",
        width: 1200,
        height: 630,
        alt: "Patient showing natural facial hair results after a beard transplant at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function BeardTransplantPage() {
  return <BeardTransplantClient />;
}