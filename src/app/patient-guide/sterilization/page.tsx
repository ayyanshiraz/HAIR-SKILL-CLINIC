import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SterilizationClient = dynamic(() => import("../../../components/SterilizationClient"));

export const metadata: Metadata = {
  title: "Sterilization & Hygiene Standards Lahore | Hair Skill",
  description: "Explore our strict sterilization and hygiene protocols in Lahore. We ensure complete infection control through advanced autoclaves.",
  keywords: [
    "Sterilization Protocols Lahore",
    "Surgical Hygiene Standards",
    "Autoclave Infection Control",
    "Bowie Dick Testing",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/patient-guide/sterilization",
  },
  openGraph: {
    title: "Sterilization & Hygiene Standards Lahore | Hair Skill",
    description: "Explore our strict sterilization and hygiene protocols in Lahore. We ensure complete infection control through advanced autoclaves.",
    url: "https://www.hairskill.com/patient-guide/sterilization",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/patient-guide/1.webp",
        width: 1200,
        height: 630,
        alt: "Autoclave device measuring barometric steam pressure for strict surgical sterilization at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function SterilizationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Sterilization & Hygiene Standards",
    "description": "Explore our strict sterilization and hygiene protocols in Lahore. We ensure complete infection control through advanced autoclaves.",
    "url": "https://www.hairskill.com/patient-guide/sterilization",
    "about": {
      "@type": "MedicalSpecialty",
      "name": "Infection Control"
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
      <SterilizationClient />
    </>
  );
}