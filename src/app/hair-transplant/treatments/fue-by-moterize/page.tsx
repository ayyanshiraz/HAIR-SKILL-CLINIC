import type { Metadata } from "next";
import FueMotorizedClient from "@/components/FueMotorizedClient";

export const metadata: Metadata = {
  title: "Motorized FUE Hair Transplant in Lahore | Hair Skill",
  description: "Get a high-density Motorized FUE hair transplant in Lahore. We perform safe, high-speed graft extraction for mega-sessions and maximum natural regrowth.",
  keywords: [
    "Motorized FUE Hair Transplant Lahore",
    "Mega Session FUE Lahore",
    "High Density Hair Transplant",
    "Motorized Extraction Lahore",
    "Hair Skill Clinic FUE"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/fue-by-moterize",
  },
  openGraph: {
    title: "Motorized FUE Hair Transplant in Lahore | Hair Skill",
    description: "Get a high-density Motorized FUE hair transplant in Lahore. We perform safe, high-speed graft extraction for mega-sessions and maximum natural regrowth.",
    url: "https://www.hairskill.com/hair-transplant/treatments/fue-by-moterize",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/treatments/4.webp",
        width: 1200,
        height: 630,
        alt: "High-density motorized FUE hair transplant extraction process at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function FueMotorizedPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Motorized FUE Hair Transplant in Lahore",
    "description": "Get a high-density Motorized FUE hair transplant in Lahore. We perform safe, high-speed graft extraction for mega-sessions and maximum natural regrowth.",
    "url": "https://www.hairskill.com/hair-transplant/treatments/fue-by-moterize",
    "provider": {
      "@type": "MedicalClinic",
      "name": "Hair Skill Clinic",
      "address": "Lahore, Pakistan"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <FueMotorizedClient />
    </>
  );
}