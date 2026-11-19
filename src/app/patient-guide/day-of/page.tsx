import type { Metadata } from "next";
import dynamic from "next/dynamic";

const DayOfProcedureClient = dynamic(() => import("../../../components/DayOfProcedureClient"));

export const metadata: Metadata = {
  title: "Surgery Day Guide & Itinerary in Lahore | Hair Skill",
  description: "Discover your complete surgery day itinerary for hair transplants in Lahore. Learn about our private shuttles, lunch options, and operation day timeline.",
  keywords: [
    "Operation Day Hair Transplant Lahore",
    "Surgery Day Itinerary Lahore",
    "Hair Clinic Shuttle Lahore",
    "Hair Surgery Steps",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/patient-guide/day-of",
  },
  openGraph: {
    title: "Surgery Day Guide & Itinerary in Lahore | Hair Skill",
    description: "Discover your complete surgery day itinerary for hair transplants in Lahore. Learn about our private shuttles, lunch options, and operation day timeline.",
    url: "https://www.hairskill.com/patient-guide/day-of",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "article",
    images: [
      {
        url: "https://www.hairskill.com/patient-guide/6.webp",
        width: 1200,
        height: 630,
        alt: "Patient completing medical evaluation form on hair transplant operation day at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function DayOfProcedurePage() {
  // Combined MedicalWebPage and Article structured data for surgery day guide
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalWebPage", "Article"],
    "headline": "Surgery Day Guide & Itinerary in Lahore",
    "name": "Surgery Day Guide & Itinerary in Lahore",
    "description": "Discover your complete surgery day itinerary for hair transplants in Lahore. Learn about our private shuttles, lunch options, and operation day timeline.",
    "url": "https://www.hairskill.com/patient-guide/day-of",
    "image": "https://www.hairskill.com/patient-guide/6.webp",
    "datePublished": "2026-01-15",
    "dateModified": "2026-11-19",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.hairskill.com/patient-guide/day-of"
    },
    "author": {
      "@type": "Person",
      "name": "Dr. Mansoor Ahmad",
      "jobTitle": "Lead Hair Transplant Surgeon",
      "url": "https://www.hairskill.com"
    },
    "publisher": {
      "@type": "MedicalClinic",
      "name": "Hair Skill Clinic",
      "url": "https://www.hairskill.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hairskill.com/home/owner1.webp"
      }
    },
    "about": {
      "@type": "MedicalSpecialty",
      "name": "Hair Restoration Surgery"
    },
    "provider": {
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
      <DayOfProcedureClient />
    </>
  );
}