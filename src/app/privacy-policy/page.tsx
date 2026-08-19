import type { Metadata } from "next";
import PrivacyPolicyClient from "../../components/PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection in Lahore | Hair Skill",
  description: "Read the official privacy policy and data protection guidelines of Hair Skill Clinic in Lahore. Learn how we securely manage your medical data and records.",
  keywords: [
    "Privacy Policy Lahore",
    "Medical Data Protection",
    "Patient Privacy Hair Clinic",
    "Clinic GDPR Compliance",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy & Data Protection in Lahore | Hair Skill",
    description: "Read the official privacy policy and data protection guidelines of Hair Skill Clinic in Lahore. Learn how we securely manage your medical data and records.",
    url: "https://www.hairskill.com/privacy-policy",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Lead Hair Transplant Surgeon ensuring patient data privacy at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}