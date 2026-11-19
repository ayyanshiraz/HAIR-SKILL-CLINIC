import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PatientGuideClient = dynamic(() => import("../../components/PatientGuideClient"));

export const metadata: Metadata = {
  title: "Hair Transplant Patient Guide in Lahore | Hair Skill",
  description: "Explore our complete hair transplant patient guide in Lahore. Discover essential pre-op instructions, surgery day steps, and post-op care at Hair Skill.",
  keywords: [
    "Hair Transplant Guide Lahore",
    "Patient Care Instructions",
    "Pre Op Preparation Lahore",
    "Post Op Recovery Steps",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/patient-guide",
  },
  openGraph: {
    title: "Hair Transplant Patient Guide in Lahore | Hair Skill Clinic",
    description: "Explore our complete hair transplant patient guide in Lahore. Discover essential pre-op instructions, surgery day steps, and post-op care at Hair Skill.",
    url: "https://www.hairskill.com/patient-guide",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "article",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Comprehensive hair transplant patient guide and instructions at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function PatientGuidePage() {
  // Combined MedicalWebPage and Article structured data for SEO and E-E-A-T
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalWebPage", "Article"],
    "headline": "Hair Transplant Patient Guide in Lahore",
    "name": "Hair Transplant Patient Guide in Lahore",
    "description": "Explore our complete hair transplant patient guide in Lahore. Discover essential pre-op instructions, surgery day steps, and post-op care at Hair Skill.",
    "url": "https://www.hairskill.com/patient-guide",
    "image": "https://www.hairskill.com/home/owner1.webp",
    "datePublished": "2026-01-15",
    "dateModified": "2026-11-19",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.hairskill.com/patient-guide"
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
      "name": "Hair Restoration"
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
      <PatientGuideClient />
    </>
  );
}