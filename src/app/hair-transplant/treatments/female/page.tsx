import type { Metadata } from "next";
import FemaleClient from "../../../../components/FemaleClient";

export const metadata: Metadata = {
  title: "Female Hair Transplant in Lahore | Hair Skill Clinic",
  description: "Restore soft, natural density with a female hair transplant in Lahore. We specialize in part line restoration and hairline lowering at Hair Skill Clinic.",
  keywords: [
    "Female Hair Transplant Lahore",
    "Part Line Restoration Lahore",
    "Feminine Hairline Lowering",
    "Unshaven Hair Transplant Women",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/female",
  },
  openGraph: {
    title: "Female Hair Transplant in Lahore | Hair Skill Clinic",
    description: "Restore soft, natural density with a female hair transplant in Lahore. We specialize in part line restoration and hairline lowering at Hair Skill Clinic.",
    url: "https://www.hairskill.com/hair-transplant/treatments/female",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/21.webp",
        width: 1200,
        height: 630,
        alt: "Female patient examining pre-surgical hairline markings for natural restoration at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function FemalePage() {
  return <FemaleClient />;
}