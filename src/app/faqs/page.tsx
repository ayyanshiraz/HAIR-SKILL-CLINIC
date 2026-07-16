import type { Metadata } from "next";
import FAQClient from "../../components/FAQSClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Hair Skill Clinic Pakistan",
  description: "Find answers to the most frequently asked questions about hair transplant procedures, aftercare, and recovery at Hair Skill Clinic.",
  keywords: ["Hair Transplant FAQ", "Hair Skill Clinic Questions", "Hair Transplant Pakistan", "Post Op Questions", "Hair Graft Care"],
  openGraph: {
    title: "Frequently Asked Questions | Hair Skill Clinic",
    description: "Get all the answers you need regarding your hair transplant journey.",
    url: "https://www.hairskillclinic.com/faq",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}