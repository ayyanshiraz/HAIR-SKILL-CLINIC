import type { Metadata } from "next";
import GeneralClient from "../../../components/GeneralClient";

export const metadata: Metadata = {
  title: "General Hair Transplant FAQs | Hair Skill Clinic Lahore",
  description: "Have basic questions about hair transplant surgery? Find clear answers regarding clinic procedures, timelines, and hair restoration at Hair Skill Lahore.",
  keywords: ["General Hair Transplant FAQs", "Hair Surgery Questions Lahore", "Hair Restoration Basics", "Hair Clinic Info Lahore", "Hair Skill General Queries"],
  alternates: {
    canonical: "https://www.hairskill.com/faqs/general",
  },
  openGraph: {
    title: "General Hair Transplant FAQs - Hair Skill Clinic Lahore",
    description: "Have basic questions about hair transplant surgery? Find clear answers regarding clinic procedures, timelines, and hair restoration at Hair Skill Lahore.",
    url: "https://www.hairskill.com/faqs/general",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "General Hair Transplant FAQs at Hair Skill Clinic Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function GeneralPage() {
  return <GeneralClient />;
}