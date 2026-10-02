import type { Metadata } from "next";
import dynamic from "next/dynamic";

const GentleCareClient = dynamic(() => import("../../../components/GentleCareClient"));

export const metadata: Metadata = {
  title: "Gentle Care Program & Patient Comfort | Hair Skill",
  description: "Experience premium patient comfort at Hair Skill Lahore. Enjoy seamless hospitality, case managers, and 18 months of post-op observation.",
  alternates: {
    canonical: "https://www.hairskill.com/about/gentle-care",
  },
  openGraph: {
    title: "Patient Comfort & Gentle Care - Hair Skill Clinic",
    description: "Experience premium patient comfort at Hair Skill Lahore. Enjoy seamless hospitality, case managers, and 18 months of post-op observation.",
    url: "https://www.hairskill.com/about/gentle-care",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/about/4.webp",
        width: 1200,
        height: 630,
        alt: "Patient Comfort and Gentle Care at Hair Skill Clinic",
      },
    ],
  },
};

export default function GentleCarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Gentle Care Program & Patient Comfort",
    "description": "Experience premium patient comfort at Hair Skill Lahore. Enjoy seamless hospitality, case managers, and 18 months of post-op observation.",
    "url": "https://www.hairskill.com/about/gentle-care",
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
      <GentleCareClient />
    </>
  );
}