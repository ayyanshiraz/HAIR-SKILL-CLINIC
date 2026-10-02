import type { Metadata } from "next";
import dynamic from "next/dynamic";

const WhyChooseUsClient = dynamic(() => import("../../../components/WhyChooseUsClient"));

export const metadata: Metadata = {
  title: "Why Choose Hair Skill Clinic? | Medical Excellence Lahore",
  description: "Discover why patients choose Hair Skill Clinic Lahore. We combine medical precision with a patient-centered approach for trusted results.",
  keywords: ["Why Choose Hair Skill Clinic", "Medical Precision Lahore", "Patient-Centered Care", "Trusted Hair Restoration"],
  alternates: {
    canonical: "https://www.hairskill.com/about/why-choose-us",
  },
  openGraph: {
    title: "Why Choose Us - Medical Excellence at Hair Skill Clinic",
    description: "Discover why patients choose Hair Skill Clinic Lahore. We combine medical precision with a patient-centered approach for trusted results.",
    url: "https://www.hairskill.com/about/why-choose-us",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "/about/3.webp",
        width: 1200,
        height: 630,
        alt: "Why Choose Hair Skill Clinic Lahore for Hair Restoration",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function WhyChooseUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Why Choose Hair Skill Clinic?",
    "description": "Discover why patients choose Hair Skill Clinic Lahore. We combine medical precision with a patient-centered approach for trusted results.",
    "url": "https://www.hairskill.com/about/why-choose-us",
    "mainEntity": {
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
      <WhyChooseUsClient />
    </>
  );
}