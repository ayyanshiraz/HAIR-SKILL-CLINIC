import type { Metadata } from "next";
import AfroHairClient from "../../../../components/AfroHairClient";

export const metadata: Metadata = {
  title: "Afro & Coiled Hair Transplant in Lahore | Hair Skill",
  description: "Looking for an expert Afro hair transplant in Lahore? We specialize in restoring coiled hair and repairing traction alopecia safely at Hair Skill Clinic.",
  keywords: [
    "Afro Hair Transplant Lahore",
    "Coiled Hair Restoration Lahore",
    "Traction Alopecia Repair Lahore",
    "Ethnic Hair Transplant Lahore",
    "Afro Hairline Hair Skill"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/afro-hair",
  },
  openGraph: {
    title: "Afro & Coiled Hair Transplant in Lahore | Hair Skill",
    description: "Looking for an expert Afro hair transplant in Lahore? We specialize in restoring coiled hair and repairing traction alopecia safely at Hair Skill Clinic.",
    url: "https://www.hairskill.com/hair-transplant/treatments/afro-hair",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/treatments/afro-hair/13.webp",
        width: 1200,
        height: 630,
        alt: "Specialized Afro and coiled hair transplant extraction at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function AfroHairPage() {
  return <AfroHairClient />;
}