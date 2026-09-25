import type { Metadata } from "next";
import FutClient from "@/components/FutClient";

export const metadata: Metadata = {
  title: "FUT Hair Transplant in Lahore | FUT vs FUE | Hair Skill",
  // AEO & GEO Optimized Meta Description (133 characters)
  description: "What is a FUT hair transplant? Learn about the strip method and why Hair Skill Lahore recommends scar-free FUE and DHI alternatives.",
  keywords: [
    "FUT Hair Transplant Lahore",
    "Strip Method Hair Transplant",
    "FUT vs FUE Lahore",
    "Follicular Unit Transplantation",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/fut",
  },
  openGraph: {
    title: "FUT Hair Transplant in Lahore | FUT vs FUE | Hair Skill",
    description: "What is a FUT hair transplant? Learn about the strip method and why Hair Skill Lahore recommends scar-free FUE and DHI alternatives.",
    url: "https://www.hairskill.com/hair-transplant/treatments/fut",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/treatments/5.webp",
        width: 1200,
        height: 630,
        alt: "Comparing FUT strip method with advanced scar-free FUE alternatives at Hair Skill Clinic Lahore",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Hair Transplant in Lahore | FUT vs FUE | Hair Skill",
    description: "What is a FUT hair transplant? Learn about the strip method and why Hair Skill Lahore recommends scar-free FUE and DHI alternatives.",
    images: ["https://www.hairskill.com/hair-transplant/treatments/5.webp"],
  },
};

export default function FutPage() {
  // GEO & Local SEO Medical Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "FUT Hair Transplant in Lahore | FUT vs FUE",
    "description": "Detailed medical information regarding the FUT strip method and modern FUE/DHI alternatives provided by Hair Skill Clinic.",
    "url": "https://www.hairskill.com/hair-transplant/treatments/fut",
    "about": {
      "@type": "MedicalProcedure",
      "name": "Follicular Unit Transplantation (FUT)",
      "alternateName": "Strip Method Hair Transplant",
      "bodyLocation": "Scalp"
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
      <FutClient />
    </>
  );
}