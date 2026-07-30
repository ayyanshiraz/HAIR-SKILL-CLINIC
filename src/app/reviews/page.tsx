import type { Metadata } from "next";
import ReviewsClient from "../../components/ReviewsClient";

export const metadata: Metadata = {
  title: "Top Hair Transplant Reviews in Pakistan | Hair Skill Clinic",
  description: "Read real patient success stories for FUE unshaven and manual punch hair transplants in Lahore Karachi and Islamabad. Rated 5 stars by thousands.",
  keywords: ["Top hair transplant reviews Pakistan", "best FUE results Lahore", "Karachi clinic reviews", "Islamabad hair restoration", "patient success stories", "Hair Skill Clinic Reviews"],
  openGraph: {
    title: "Top Hair Transplant Reviews in Pakistan | Hair Skill Clinic",
    description: "Read real stories and experiences from our hair transplant patients across Pakistan.",
    url: "https://www.hairskill.com/reviews",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
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
      <ReviewsClient />
    </>
  );
}