import type { Metadata } from "next";
import TreatmentsHubClient from "../../../components/TreatmentsHubClient";

export const metadata: Metadata = {
  title: "Hair Loss & Restoration Treatments Lahore | Hair Skill",
  description: "Explore advanced hair restoration treatments in Lahore. From FUE and DHI to PRP therapy, discover the best medical solutions for hair loss at Hair Skill.",
  keywords: [
    "Hair Loss Treatments Lahore",
    "Hair Restoration Lahore",
    "FUE Hair Transplant Lahore",
    "PRP Therapy Lahore",
    "Hair Skill Clinic Treatments"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments",
  },
  openGraph: {
    title: "Hair Loss & Restoration Treatments Lahore | Hair Skill",
    description: "Explore advanced hair restoration treatments in Lahore. From FUE and DHI to PRP therapy, discover the best medical solutions for hair loss at Hair Skill.",
    url: "https://www.hairskill.com/hair-transplant/treatments",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
  },
};

export default function TreatmentsRootPage() {
  return <TreatmentsHubClient />;
}