import type { Metadata } from "next";
import dynamic from "next/dynamic";

const BeardTransplantClient = dynamic(() => import("../../../../components/BeardTransplantClient"));

export const metadata: Metadata = {
  title: "Beard & Facial Hair Transplant in Lahore | Hair Skill",
  // AEO & GEO Optimized Meta Description (127 characters)
  description: "Fix patchy facial hair with a natural beard transplant in Lahore. Restore goatees and cover scars safely at Hair Skill Clinic.",
  keywords: [
    "Beard Transplant Lahore",
    "Facial Hair Restoration Lahore",
    "Patchy Beard Fix Lahore",
    "Goatee Transplant Lahore",
    "Hair Skill Clinic Beard"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/beard-transplant",
  },
  openGraph: {
    title: "Beard & Facial Hair Transplant in Lahore | Hair Skill",
    description: "Fix patchy facial hair with a natural beard transplant in Lahore. Restore goatees and cover scars safely at Hair Skill Clinic.",
    url: "https://www.hairskill.com/hair-transplant/treatments/beard-transplant",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/treatments/2.webp",
        width: 1200,
        height: 630,
        alt: "Patient showing natural facial hair results after a beard transplant at Hair Skill Clinic Lahore",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beard & Facial Hair Transplant in Lahore | Hair Skill",
    description: "Fix patchy facial hair with a natural beard transplant in Lahore. Restore goatees and cover scars safely at Hair Skill Clinic.",
    images: ["https://www.hairskill.com/hair-transplant/treatments/2.webp"],
  },
};

export default function BeardTransplantPage() {
  // Advanced Medical Schema for Beard Transplant
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Beard & Facial Hair Transplant in Lahore",
    "description": "Professional beard and facial hair transplant services using advanced FUE and DHI methods at Hair Skill Clinic.",
    "url": "https://www.hairskill.com/hair-transplant/treatments/beard-transplant",
    "about": {
      "@type": "MedicalProcedure",
      "name": "Beard Transplant",
      "alternateName": "Facial Hair Restoration",
      "bodyLocation": "Face and Jawline"
    },
    "provider": {
      "@type": "MedicalClinic",
      "name": "Hair Skill Clinic",
      "@id": "https://www.hairskill.com/#organization",
      "url": "https://www.hairskill.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <BeardTransplantClient />
    </>
  );
}