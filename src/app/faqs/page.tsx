import type { Metadata } from "next";
import FAQClient from "../../components/FAQSClient";

export const metadata: Metadata = {
  title: "Hair Transplant FAQs & Aftercare Info | Hair Skill Lahore",
  description: "Got questions about hair transplant procedures or PRP aftercare? Find comprehensive answers and recovery guidelines at Hair Skill Clinic Lahore's FAQ page.",
  keywords: ["Hair Transplant FAQs Lahore", "PRP Treatment Questions", "Hair Surgery Aftercare FAQs", "Hair Clinic Queries Lahore", "Hair Skill FAQs"],
  alternates: {
    canonical: "https://www.hairskill.com/faqs",
  },
  openGraph: {
    title: "Hair Transplant FAQs & Aftercare Info - Hair Skill Lahore",
    description: "Got questions about hair transplant procedures or PRP aftercare? Find comprehensive answers and recovery guidelines at Hair Skill Clinic Lahore's FAQ page.",
    url: "https://www.hairskill.com/faqs",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Hair Transplant Frequently Asked Questions at Hair Skill Clinic Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}