import type { Metadata } from "next";
import dynamic from "next/dynamic";

const LongFueClient = dynamic(() => import("../../../../components/LongFueClient"));

export const metadata: Metadata = {
  title: "Unshaven Long FUE Hair Transplant Lahore | Hair Skill",
  description: "Get a discreet Long FUE hair transplant at Hair Skill Clinic Lahore. Restore density without shaving your head and keep your style.",
  keywords: [
    "Unshaven Hair Transplant Lahore",
    "Long FUE Lahore",
    "No Shave Hair Transplant",
    "Discreet Hair Transplant Lahore",
    "Hair Skill Clinic Techniques"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/techniques/long-fue",
  },
  openGraph: {
    title: "Unshaven Long FUE Hair Transplant Lahore | Hair Skill",
    description: "Get a discreet Long FUE hair transplant at Hair Skill Clinic Lahore. Restore density without shaving your head and keep your style.",
    url: "https://www.hairskill.com/hair-transplant/techniques/long-fue",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/1.webp",
        width: 1200,
        height: 630,
        alt: "Unshaven Long FUE Hair Transplant at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function LongFuePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Unshaven Long FUE Hair Transplant Lahore | Hair Skill",
    "description": "Get a discreet Long FUE hair transplant at Hair Skill Clinic Lahore. Restore density without shaving your head and keep your style.",
    "url": "https://www.hairskill.com/hair-transplant/techniques/long-fue",
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
      <LongFueClient />
    </main>
  );
}