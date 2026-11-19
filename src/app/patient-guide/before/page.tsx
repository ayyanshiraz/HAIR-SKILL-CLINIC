import type { Metadata } from "next";
import dynamic from "next/dynamic";

const BeforeProcedureClient = dynamic(() => import("../../../components/BeforeProcedureClient"));

export const metadata: Metadata = {
  title: "Before Hair Transplant & Pre-Op Care Lahore | Hair Skill",
  description: "Prepare for your hair transplant in Lahore with our strict pre-op guide. Learn essential medication rules, breakfast tips, and what to wear on surgery day.",
  keywords: [
    "Before Hair Transplant Lahore",
    "Pre Op Care Lahore",
    "Hair Surgery Preparation",
    "Stop Aspirin Hair Transplant",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/patient-guide/before",
  },
  openGraph: {
    title: "Before Hair Transplant & Pre-Op Care Lahore | Hair Skill",
    description: "Prepare for your hair transplant in Lahore with our strict pre-op guide. Learn essential medication rules, breakfast tips, and what to wear on surgery day.",
    url: "https://www.hairskill.com/patient-guide/before",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "article",
    images: [
      {
        url: "https://www.hairskill.com/home/techniques/4.webp",
        width: 1200,
        height: 630,
        alt: "Surgeon marking patient hairline before a hair transplant procedure at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function BeforeProcedurePage() {
  // Combined MedicalWebPage and Article structured data for pre-op care guide
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalWebPage", "Article"],
    "headline": "Before Hair Transplant & Pre-Op Care in Lahore",
    "name": "Before Hair Transplant & Pre-Op Care Lahore",
    "description": "Prepare for your hair transplant in Lahore with our strict pre-op guide. Learn essential medication rules, breakfast tips, and what to wear on surgery day.",
    "url": "https://www.hairskill.com/patient-guide/before",
    "image": "https://www.hairskill.com/home/techniques/4.webp",
    "datePublished": "2026-01-15",
    "dateModified": "2026-11-19",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.hairskill.com/patient-guide/before"
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
      "name": "Preoperative Care"
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
      <BeforeProcedureClient />
    </>
  );
}