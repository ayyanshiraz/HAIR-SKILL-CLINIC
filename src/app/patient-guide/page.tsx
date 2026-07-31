import type { Metadata } from "next";
import PatientGuideClient from "../../components/PatientGuideClient";

export const metadata: Metadata = {
  title: "Hair Transplant Patient Guide in Lahore | Hair Skill",
  description: "Explore our complete hair transplant patient guide in Lahore. Discover essential pre-op instructions, surgery day steps, and post-op care at Hair Skill.",
  keywords: [
    "Hair Transplant Guide Lahore",
    "Patient Care Instructions",
    "Pre Op Preparation Lahore",
    "Post Op Recovery Steps",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/patient-guide",
  },
  openGraph: {
    title: "Hair Transplant Patient Guide in Lahore | Hair Skill",
    description: "Explore our complete hair transplant patient guide in Lahore. Discover essential pre-op instructions, surgery day steps, and post-op care at Hair Skill.",
    url: "https://www.hairskill.com/patient-guide",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Comprehensive hair transplant patient guide and instructions at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function PatientGuidePage() {
  return <PatientGuideClient />;
}