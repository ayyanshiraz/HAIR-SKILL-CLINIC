import CostClient from "../../../components/CostClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair Transplant Cost in Lahore (2026) | Transparent FUE & DHI Prices",
  description: "Find the exact hair transplant cost in Lahore at Hair Skill Clinic. Motorized FUE with DHI starts from 60,000 PKR. No hidden charges, PMC verified surgeons.",
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/cost",
  },
  openGraph: {
    title: "Hair Transplant Cost in Lahore (2026)",
    description: "Understand what drives hair transplant pricing in Lahore. Motorized FUE with DHI starts from 60,000 PKR.",
    url: "https://www.hairskill.com/hair-transplant/cost",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Hair transplant cost consultation at Hair Skill Clinic Lahore",
      }
    ],
  },
};

export default function CostPage() {
  return <CostClient />;
}