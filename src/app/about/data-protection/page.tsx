import type { Metadata } from "next";
import DataProtectionClient from "../../../components/DataProtectionClient";

export const metadata: Metadata = {
  title: "Personal Data Protection Policy | Hair Skill Clinic",
  description: "Read the Hair Skill Clinic Personal Data Protection Policy. We are committed to securing your personal and medical data under the laws of Pakistan.",
  keywords: ["Data Protection Pakistan", "Hair Skill Clinic Privacy", "PDPB Compliance", "Patient Privacy"],
  openGraph: {
    title: "Personal Data Protection Policy",
    description: "Learn how Hair Skill Clinic protects your data and privacy.",
    url: "https://www.almadinahijamacenter.com/about/data-protection",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function DataProtectionPage() {
  return (
    <main>
      <DataProtectionClient />
    </main>
  );
}