import type { Metadata } from "next";
import OzoneClient from "../../../../components/OzoneClient";

export const metadata: Metadata = {
  title: "Ozone Hair Therapy & Scalp Detox in Lahore | Hair Skill",
  description: "Stop stubborn dandruff and calm scalp inflammation with Ozone Hair Therapy in Lahore. Experience high-frequency scalp detox to energize dormant follicles.",
  keywords: [
    "Ozone Hair Therapy Lahore",
    "High Frequency Scalp Detox",
    "Dandruff Treatment Lahore",
    "Ozone Comb Treatment",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/ozone-hair-therapy",
  },
  openGraph: {
    title: "Ozone Hair Therapy & Scalp Detox in Lahore | Hair Skill",
    description: "Stop stubborn dandruff and calm scalp inflammation with Ozone Hair Therapy in Lahore. Experience high-frequency scalp detox to energize dormant follicles.",
    url: "https://www.hairskill.com/hair-transplant/treatments/ozone-hair-therapy",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/treatments/4.webp",
        width: 1200,
        height: 630,
        alt: "Medical professional using advanced high-frequency ozone comb for scalp detox at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function OzoneHairTherapyPage() {
  return <OzoneClient />;
}