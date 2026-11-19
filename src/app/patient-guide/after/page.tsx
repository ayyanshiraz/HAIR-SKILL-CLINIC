import type { Metadata } from "next";
import dynamic from "next/dynamic";

const AfterProcedureClient = dynamic(() => import("../../../components/AfterProcedureClient"));

export const metadata: Metadata = {
  title: "Hair Transplant Aftercare & Recovery in Lahore | Hair Skill",
  description: "Read our comprehensive hair transplant aftercare guide in Lahore. Learn what to expect during recovery, post-op washing tips, and graft care instructions.",
  keywords: [
    "Hair Transplant Aftercare Lahore",
    "Post Op Hair Transplant Lahore",
    "Hair Surgery Recovery Lahore",
    "Hair Graft Care Instructions",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/patient-guide/after",
  },
  openGraph: {
    title: "Hair Transplant Aftercare & Recovery in Lahore | Hair Skill",
    description: "Read our comprehensive hair transplant aftercare guide in Lahore. Learn what to expect during recovery, post-op washing tips, and graft care instructions.",
    url: "https://www.hairskill.com/patient-guide/after",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "article",
    images: [
      {
        url: "https://www.hairskill.com/patient-guide/7.webp",
        width: 1200,
        height: 630,
        alt: "Patient recovering after a successful hair transplant procedure receiving aftercare at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function AfterProcedurePage() {
  // Combined MedicalWebPage and Article structured data for aftercare and recovery guide
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalWebPage", "Article"],
    "headline": "Hair Transplant Aftercare & Recovery in Lahore",
    "name": "Hair Transplant Aftercare & Recovery in Lahore",
    "description": "Read our comprehensive hair transplant aftercare guide in Lahore. Learn what to expect during recovery, post-op washing tips, and graft care instructions.",
    "url": "https://www.hairskill.com/patient-guide/after",
    "image": "https://www.hairskill.com/patient-guide/7.webp",
    "datePublished": "2026-01-15",
    "dateModified": "2026-11-19",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.hairskill.com/patient-guide/after"
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
      "name": "Postoperative Care"
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
      <AfterProcedureClient />
    </>
  );
}