import type { Metadata } from "next";
import PreOpClient from "../../../components/PreOpClient";

export const metadata: Metadata = {
  title: "Pre-Op Hair Transplant FAQs | Hair Skill Clinic Lahore",
  description: "Find expert answers to pre-op hair transplant questions in Lahore. Learn about candidacy, preparations, and what to expect before surgery at Hair Skill.",
  keywords: ["Pre-Op Hair Transplant Lahore", "Hair Surgery Preparation FAQs", "Hair Transplant Candidacy", "Hair Skill Clinic Pre-Op", "Before Hair Transplant Guide"],
  alternates: {
    canonical: "https://www.hairskill.com/faqs/pre-op",
  },
  openGraph: {
    title: "Pre-Op Hair Transplant FAQs - Hair Skill Clinic Lahore",
    description: "Find expert answers to pre-op hair transplant questions in Lahore. Learn about candidacy, preparations, and what to expect before surgery at Hair Skill.",
    url: "https://www.hairskill.com/faqs/pre-op",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Pre-Op Hair Transplant FAQs at Hair Skill Clinic Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function PreOpPage() {
  return <PreOpClient />;
}