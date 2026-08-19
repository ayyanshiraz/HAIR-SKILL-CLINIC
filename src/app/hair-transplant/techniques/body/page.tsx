import type { Metadata } from "next";
import BodyClient from "../../../../components/BodyClient";

export const metadata: Metadata = {
  title: "Body Hair Transplant in Lahore | BHT | Hair Skill",
  description: "Depleted scalp donor? Get the best Body Hair Transplant (BHT) in Lahore. We extract beard and chest follicles for maximum density at Hair Skill Clinic.",
  keywords: [
    "Body Hair Transplant Lahore",
    "BHT Surgery Lahore",
    "Beard to Scalp Transplant",
    "Chest Hair Transplant Lahore",
    "Depleted Donor Repair"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/techniques/body",
  },
  openGraph: {
    title: "Body Hair Transplant in Lahore | BHT | Hair Skill",
    description: "Depleted scalp donor? Get the best Body Hair Transplant (BHT) in Lahore. We extract beard and chest follicles for maximum density at Hair Skill Clinic.",
    url: "https://www.hairskill.com/hair-transplant/techniques/body",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/techniques/5.webp",
        width: 1200,
        height: 630,
        alt: "Body Hair Transplant and Extraction at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function BodyPage() {
  return <BodyClient />;
}