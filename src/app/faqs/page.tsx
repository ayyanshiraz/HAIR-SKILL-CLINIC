import type { Metadata } from "next";
import FAQClient from "../../components/FAQSClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Hair Skill Clinic Pakistan",
  description: "Find answers to the most frequently asked questions about hair transplant procedures, aftercare, and recovery at Hair Skill Clinic.",
  keywords: ["Hair Transplant FAQ", "Hair Skill Clinic Questions", "Hair Transplant Pakistan", "Post Op Questions", "Hair Graft Care"],
  openGraph: {
    title: "Frequently Asked Questions | Hair Skill Clinic",
    description: "Get all the answers you need regarding your hair transplant journey.",
    url: "https://www.hairskillclinic.com/faqs",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/_next/image?url=%2Fhome%2Fowner1.webp&w=1080&q=75",
        width: 1200,
        height: 630,
        alt: "Frequently Asked Questions | Hair Skill Clinic Pakistan",
      },
    ],
  },
};

export default function FAQPage() {
  return <FAQClient />;
}