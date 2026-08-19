import type { Metadata } from "next";
import BeforeProcedureClient from "../../../components/BeforeProcedureClient";

export const metadata: Metadata = {
  title: "Before Hair Transplant & Pre-Op Care Lahore | Hair Skill",
  description: "Prepare for your hair transplant in Lahore with our strict pre-op guide. Learn essential medication rules, breakfast tips, and what to wear on surgery day.",
  keywords: [
    "Before Hair Transplant Lahore",
    "Pre Op Care Lahore",
    "Hair Surgery Preparation",
    "Stop Aspirin Hair Transplant",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/patient-guide/before",
  },
  openGraph: {
    title: "Before Hair Transplant & Pre-Op Care Lahore | Hair Skill",
    description: "Prepare for your hair transplant in Lahore with our strict pre-op guide. Learn essential medication rules, breakfast tips, and what to wear on surgery day.",
    url: "https://www.hairskill.com/patient-guide/before",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/techniques/4.webp",
        width: 1200,
        height: 630,
        alt: "Surgeon marking patient's hairline before a hair transplant procedure at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function BeforeProcedurePage() {
  return <BeforeProcedureClient />;
}