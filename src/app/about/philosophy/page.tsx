import type { Metadata } from "next";
import dynamic from "next/dynamic";

const TruePhilosophyClient = dynamic(() => import("../../../components/PhilosophyClient"));

export const metadata: Metadata = {
  title: "TRUE Philosophy & Hairline Design | Hair Skill Clinic",
  description: "Explore the TRUE Philosophy at Hair Skill Clinic Lahore: True Planning, True Hairline Design, Execution, and Innovation for natural results.",
  keywords: ["TRUE Philosophy", "True Hairline Design", "Hair Skill Clinic Philosophy", "Surgical Execution"],
  alternates: {
    canonical: "https://www.hairskill.com/about/philosophy",
  },
  openGraph: {
    title: "TRUE Philosophy & Hairline Design - Hair Skill Clinic",
    description: "Explore the TRUE Philosophy at Hair Skill Clinic Lahore: True Planning, True Hairline Design, Execution, and Innovation for natural results.",
    url: "https://www.hairskill.com/about/philosophy",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/about/philosophy-og.jpg",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "TRUE Philosophy & Hairline Design",
    "description": "Explore the TRUE Philosophy at Hair Skill Clinic Lahore: True Planning, True Hairline Design, Execution, and Innovation for natural results.",
    "url": "https://www.hairskill.com/about/philosophy",
    "mainEntity": {
      "@type": "MedicalClinic",
      "name": "Hair Skill Clinic",
      "url": "https://www.hairskill.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TruePhilosophyClient />
    </>
  );
}