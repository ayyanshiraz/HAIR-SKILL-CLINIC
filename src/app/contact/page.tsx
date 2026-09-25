import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactClient = dynamic(() => import("../../components/ContactClient"));

export const metadata: Metadata = {
  title: "Contact Hair Skill Clinic | Book Consultation in Lahore",
  // Description shortened to 143 characters to avoid truncation
  description: "Get in touch with Hair Skill Clinic in Lahore to book your hair transplant consultation. Call us today to start your hair restoration journey.",
  keywords: ["Contact Hair Skill Clinic", "Book Hair Consultation Lahore", "Hair Transplant Clinic Address", "Hair Clinic Phone Number Lahore"],
  alternates: {
    canonical: "https://www.hairskill.com/contact",
  },
  openGraph: {
    title: "Contact Hair Skill Clinic | Book Consultation in Lahore",
    description: "Get in touch with Hair Skill Clinic in Lahore to book your hair transplant consultation. Call us today to start your hair restoration journey.",
    url: "https://www.hairskill.com/contact",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Contact Hair Skill Clinic in Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function ContactPage() {
  // MedicalClinic Schema JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Hair Skill Clinic",
    "url": "https://www.hairskill.com",
    "logo": "https://www.hairskill.com/logo.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-301-4923336",
      "contactType": "customer service",
      "availableLanguage": ["English", "Urdu"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hotel MayFair 1st floor, 50-52, E - III, Commercial Zone, Gulberg III",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "54660",
      "addressCountry": "PK"
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 10:00-20:00"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}