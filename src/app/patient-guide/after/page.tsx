import type { Metadata } from "next";
import AfterProcedureClient from "../../../components/AfterProcedureClient";

export const metadata: Metadata = {
  title: "After Hair Transplant Procedure | Hair Skill Clinic Pakistan",
  description: "Learn what to expect and what to pay attention to after your hair transplant procedure at Hair Skill Clinic. Read our comprehensive aftercare guide.",
  keywords: ["Hair Transplant Aftercare", "Hair Skill Clinic Recovery", "Post Op Hair Transplant Pakistan", "Hair Surgery Recovery", "Hair Graft Care"],
  openGraph: {
    title: "After Hair Transplant Procedure | Hair Skill Clinic",
    description: "Your complete guide to post-operative care, washing, and recovery after a hair transplant.",
    url: "https://www.hairskill.com/patient-guide/after",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/patient-guide/7.webp",
        width: 1200,
        height: 630,
        alt: "Patient recovering after hair transplant procedure at Hair Skill Clinic",
      },
    ],
  },
};

export default function AfterProcedurePage() {
  return <AfterProcedureClient />;
}