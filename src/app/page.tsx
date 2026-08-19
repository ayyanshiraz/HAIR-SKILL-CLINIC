import type { Metadata } from "next";
import HomePageClient from "../components/HomePageClient";

export const metadata: Metadata = {
  title: "Best Hair Transplant Clinic in Lahore | Hair Skill",
  description: "Experience the best hair transplant in Lahore at Hair Skill Clinic. We offer advanced FUE procedures, natural hairline restoration, and premium patient care.",
  keywords: [
    "Best Hair Transplant Lahore",
    "Hair Transplant Clinic Lahore",
    "Advanced Hair Restoration",
    "Natural Hairline Lahore",
    "Hair Skill Clinic"
  ],
  alternates: {
    canonical: "https://www.hairskill.com",
  },
  openGraph: {
    title: "Best Hair Transplant Clinic in Lahore | Hair Skill",
    description: "Experience the best hair transplant in Lahore at Hair Skill Clinic. We offer advanced FUE procedures, natural hairline restoration, and premium patient care.",
    url: "https://www.hairskill.com",
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

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Hair Skill Clinic",
    description: "As the premier hair transplant clinic in Lahore, we offer advanced restoration services and completely natural results.",
    url: "https://www.hairskill.com",
    logo: "https://www.hairskill.com/home/logo.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hotel MayFair 1st floor 50-52 E-III Commercial Zone Gulberg III",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54660",
      addressCountry: "PK"
    },
    telephone: "+923014923336",
    priceRange: "$$$",
    medicalSpecialty: "Hair restoration and transplantation"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <HomePageClient />
    </>
  );
}