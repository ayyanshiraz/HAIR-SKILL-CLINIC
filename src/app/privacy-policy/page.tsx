import type { Metadata } from "next";
import PrivacyPolicyClient from "../../components/PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Personal Data Protection & Privacy Policy | Hair Skill Clinic",
  description: "Read our comprehensive data policy regarding the collection, processing, and protection of personal data in compliance with Pakistani regulations and GDPR.",
  keywords: ["Privacy Policy", "Personal Data Policy", "Hair Skill Clinic Privacy", "Data Protection Pakistan"],
  openGraph: {
    title: "Personal Data Protection & Privacy Policy | Hair Skill Clinic",
    description: "Our organizational principles and compliance standards for personal data protection.",
    url: "https://www.hairskillclinic.com/privacy-policy",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}