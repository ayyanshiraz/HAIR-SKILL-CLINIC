import type { Metadata } from "next";

// Exactly 3 levels up: (ozone-hair-therapy -> treatments -> app -> src) then into components
import OzoneClient from "../../../../components/OzoneClient";

export const metadata: Metadata = {
  title: "Ozone Hair Therapy & High Frequency Scalp Detox | Hair Skill Clinic Lahore",
  description: "Stop stubborn dandruff, calm inflammation, and energize dormant follicles in Lahore Pakistan. Discover advanced medical high-frequency ozone comb treatments inside accessible PKR package tiers.",
  keywords: ["Ozone Hair Therapy Pakistan", "High Frequency Scalp Lahore", "Ozone Therapy Dandruff PKR", "Ozone Comb Treatment", "Hair Skill Clinic Lahore", "Scalp Detoxification PKR"],
  openGraph: {
    title: "Ozone Scalp Therapy | Hair Skill Clinic",
    description: "Medically proven high-frequency activated oxygen to revitalize hair root architecture.",
    url: "https://www.hairskill.com/hair-transplant/treatments/ozone-hair-therapy",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/treatments/4.webp",
        width: 1200,
        height: 630,
        alt: "Medical professional utilizing advanced handheld high frequency medical ozone comb wand to energize scalp follicles at Hair Skill Clinic",
      },
    ],
  },
};

export default function OzoneHairTherapyPage() {
  return <OzoneClient />;
}