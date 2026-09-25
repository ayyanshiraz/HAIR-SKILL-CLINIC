import type { Metadata } from "next";
import dynamic from "next/dynamic";

const FemaleClient = dynamic(() => import("../../../../components/FemaleClient"));

export const metadata: Metadata = {
  title: "Female Hair Transplant in Lahore | Hair Skill Clinic",
  // AEO & GEO Optimized Meta Description (131 characters)
  description: "Restore soft, natural density with a female hair transplant in Lahore. We specialize in part line restoration and gentle hairlines.",
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
    description: "Restore soft, natural density with a female hair transplant in Lahore. We specialize in part line restoration and gentle hairlines.",
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
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Female Hair Transplant in Lahore | Hair Skill Clinic",
    description: "Restore soft, natural density with a female hair transplant in Lahore. We specialize in part line restoration and gentle hairlines.",
    images: ["https://www.hairskill.com/hair-transplant/21.webp"],
  },
};

export default function FemalePage() {
  // Advanced Medical Schema for Female Hair Transplant
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Female Hair Transplant in Lahore",
    "description": "Professional female hair transplant services using advanced partial-shave FUE and DHI methods at Hair Skill Clinic.",
    "url": "https://www.hairskill.com/hair-transplant/treatments/female",
    "about": {
      "@type": "MedicalProcedure",
      "name": "Female Hair Transplant",
      "alternateName": "Hair Restoration for Women",
      "bodyLocation": "Scalp and Hairline"
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
      <FemaleClient />
    </>
  );
}