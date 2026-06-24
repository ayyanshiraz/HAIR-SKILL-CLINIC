import type { Metadata } from "next";
import PreOpClient from "../../../components/PreOpClient";

export const metadata: Metadata = {
  title: "Pre Operation F.A.Q. | Hair Skill Clinic Pakistan",
  description: "Find answers to your pre-operation questions regarding hair transplant surgery at Hair Skill Clinic. Learn about candidacy, preparations, and what to expect.",
  keywords: ["Pre Operation Hair Transplant", "Hair Transplant FAQ", "Hair Skill Clinic Pre-op", "Hair Transplant Pakistan", "Hair Surgery Preparation"],
  openGraph: {
    title: "Pre Operation F.A.Q. | Hair Skill Clinic",
    description: "Learn everything you need to know before your hair transplant procedure.",
    url: "https://www.hairskillclinic.com/faq/pre-op",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function PreOpPage() {
  return <PreOpClient />;
}