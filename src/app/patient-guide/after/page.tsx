import type { Metadata } from "next";
import AfterProcedureClient from "../../../components/AfterProcedureClient";

export const metadata: Metadata = {
  title: "Hair Transplant Aftercare & Recovery in Lahore | Hair Skill",
  description: "Read our comprehensive hair transplant aftercare guide in Lahore. Learn what to expect during recovery, post-op washing tips, and graft care instructions.",
  keywords: [
    "Hair Transplant Aftercare Lahore",
    "Post Op Hair Transplant Lahore",
    "Hair Surgery Recovery Lahore",
    "Hair Graft Care Instructions",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/patient-guide/after",
  },
  openGraph: {
    title: "Hair Transplant Aftercare & Recovery in Lahore | Hair Skill",
    description: "Read our comprehensive hair transplant aftercare guide in Lahore. Learn what to expect during recovery, post-op washing tips, and graft care instructions.",
    url: "https://www.hairskill.com/patient-guide/after",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/patient-guide/7.webp",
        width: 1200,
        height: 630,
        alt: "Patient recovering after a successful hair transplant procedure receiving aftercare at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function AfterProcedurePage() {
  return <AfterProcedureClient />;
}