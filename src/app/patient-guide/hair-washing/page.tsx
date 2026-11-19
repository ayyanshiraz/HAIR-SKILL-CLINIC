import type { Metadata } from "next";
import dynamic from "next/dynamic";

const HairWashingClient = dynamic(() => import("../../../components/HairWashingClient"));

export const metadata: Metadata = {
  title: "Post-Op Hair Washing Guidelines Lahore | Hair Skill",
  description: "Master your post-op scalp wash in Lahore. Learn how to safely apply panthenol foam, rinse grafts, and remove scabs at Hair Skill.",
  keywords: [
    "Post Op Hair Wash Lahore",
    "Scab Removal Hair Transplant",
    "Panthenol Foam Application",
    "Graft Safe Washing",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/patient-guide/hair-washing",
  },
  openGraph: {
    title: "Post-Op Hair Washing Guidelines Lahore | Hair Skill Clinic",
    description: "Master your post-op scalp wash in Lahore. Learn how to safely apply panthenol foam, rinse grafts, and remove scabs at Hair Skill.",
    url: "https://www.hairskill.com/patient-guide/hair-washing",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "article",
    images: [
      {
        url: "https://www.hairskill.com/patient-guide/5.webp",
        width: 1200,
        height: 630,
        alt: "Medical assistant performing a gentle post-op hair wash and scab removal on a patient at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function HairWashingPage() {
  // Combined MedicalWebPage and Article structured data for post-op washing guide
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalWebPage", "Article"],
    "headline": "Post-Op Hair Washing Guidelines in Lahore",
    "name": "Post-Op Hair Washing Guidelines",
    "description": "Master your post-op scalp wash in Lahore. Learn how to safely apply panthenol foam, rinse grafts, and remove scabs at Hair Skill.",
    "url": "https://www.hairskill.com/patient-guide/hair-washing",
    "image": "https://www.hairskill.com/patient-guide/5.webp",
    "datePublished": "2026-01-15",
    "dateModified": "2026-11-19",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.hairskill.com/patient-guide/hair-washing"
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
      <HairWashingClient />
    </>
  );
}