import type { Metadata } from "next";
import dynamic from "next/dynamic";

const OurStoryClient = dynamic(() => import("../../../components/OurStoryClient"));

export const metadata: Metadata = {
  title: "Clinic Journey & Founders | Hair Skill Clinic Lahore",
  description: "Discover the founding story of Hair Skill Clinic in Lahore. Learn how our doctors built a trusted hair restoration facility.",
  keywords: ["Hair Skill Clinic Story", "Clinic Founders Lahore", "Medical Journey Pakistan", "Hair Restoration History"],
  alternates: {
    canonical: "https://www.hairskill.com/about/our-story",
  },
  openGraph: {
    title: "Clinic Journey & Founders - Hair Skill Clinic",
    description: "Discover the founding story of Hair Skill Clinic in Lahore. Learn how our doctors built a trusted hair restoration facility.",
    url: "https://www.hairskill.com/about/our-story",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "/about/story-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hair Skill Clinic Facility and Founders",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function OurStoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "MedicalClinic",
      "name": "Hair Skill Clinic",
      "url": "https://www.hairskill.com",
      "image": "https://www.hairskill.com/about/story-hero.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      }
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OurStoryClient />
    </main>
  );
}