import type { Metadata } from "next";
import dynamic from "next/dynamic";

const DataProtectionClient = dynamic(() => import("../../../components/DataProtectionClient"));

export const metadata: Metadata = {
  title: "Data Protection Policy | Hair Skill Clinic Lahore",
  description: "Review our Data Protection Policy. We are strictly committed to securing your personal and medical information under the laws of Pakistan.",
  keywords: ["Data Protection Pakistan", "Hair Skill Clinic Privacy", "PDPB Compliance", "Patient Privacy"],
  alternates: {
    canonical: "https://www.hairskill.com/about/data-protection",
  },
  openGraph: {
    title: "Data Protection Policy - Hair Skill Clinic Pakistan",
    description: "Review our Data Protection Policy. We are strictly committed to securing your personal and medical information under the laws of Pakistan.",
    url: "https://www.hairskill.com/about/data-protection",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Lead Hair Transplant Surgeon and Owner of Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function DataProtectionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Data Protection Policy",
    "description": "Review our Data Protection Policy. We are strictly committed to securing your personal and medical information under the laws of Pakistan.",
    "url": "https://www.hairskill.com/about/data-protection",
    "publisher": {
      "@type": "MedicalClinic",
      "name": "Hair Skill Clinic",
      "url": "https://www.hairskill.com"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DataProtectionClient />
    </main>
  );
}