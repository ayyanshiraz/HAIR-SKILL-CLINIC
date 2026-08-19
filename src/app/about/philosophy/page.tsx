import type { Metadata } from "next";
import TruePhilosophyClient from "../../../components/PhilosophyClient";

export const metadata: Metadata = {
  title: "TRUE Philosophy & Hairline Design | Hair Skill Clinic",
  description: "Discover the TRUE Philosophy at Hair Skill Clinic Lahore. We focus on True Planning, True Hairline Design, Execution, and Innovation for natural results.",
  keywords: ["TRUE Philosophy", "True Hairline Design", "Hair Skill Clinic Philosophy", "Surgical Execution"],
  alternates: {
    canonical: "https://www.hairskill.com/about/philosophy",
  },
  openGraph: {
    title: "TRUE Philosophy & Hairline Design - Hair Skill Clinic",
    description: "Discover the TRUE Philosophy at Hair Skill Clinic Lahore. We focus on True Planning, True Hairline Design, Execution, and Innovation for natural results.",
    url: "https://www.hairskill.com/about/philosophy",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "/about/philosophy-og.jpg",
        width: 1200,
        height: 630,
        alt: "TRUE Philosophy at Hair Skill Clinic",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function TruePhilosophyPage() {
  return <TruePhilosophyClient />;
}