import type { Metadata } from "next";
import ReviewsClient from "../../components/ReviewsClient";

export const metadata: Metadata = {
  title: "Best Hair Transplant Reviews in Lahore | Hair Skill",
  description: "Read real 5-star hair transplant reviews and patient success stories in Lahore. Discover why thousands trust Hair Skill Clinic for their FUE procedures.",
  keywords: [
    "Hair Transplant Reviews Lahore",
    "Best FUE Results Lahore",
    "Patient Success Stories",
    "Hair Clinic Reviews",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/reviews",
  },
  openGraph: {
    title: "Best Hair Transplant Reviews in Lahore | Hair Skill",
    description: "Read real 5-star hair transplant reviews and patient success stories in Lahore. Discover why thousands trust Hair Skill Clinic for their FUE procedures.",
    url: "https://www.hairskill.com/reviews",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Lead Hair Transplant Surgeon featuring 5-star patient reviews at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function ReviewsPage() {
  // Aggregate Rating Schema for Google Search 5-Star Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Hair Skill Clinic",
    "image": "https://www.hairskill.com/home/owner1.webp",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Renders the main UI components */}
      <ReviewsClient />
    </>
  );
}