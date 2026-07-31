import type { Metadata } from "next";
import HairWashingClient from "../../../components/HairWashingClient";

export const metadata: Metadata = {
  title: "Post-Op Hair Washing Guidelines Lahore | Hair Skill",
  description: "Master your 48-hour post-op hair wash in Lahore. Learn how to safely apply panthenol foam, rinse grafts, and ensure proper scab removal at Hair Skill.",
  keywords: [
    "Post Op Hair Wash Lahore",
    "Scab Removal Hair Transplant",
    "Panthenol Foam Application",
    "Graft Safe Washing",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/patient-guide/hair-washing",
  },
  openGraph: {
    title: "Post-Op Hair Washing Guidelines Lahore | Hair Skill",
    description: "Master your 48-hour post-op hair wash in Lahore. Learn how to safely apply panthenol foam, rinse grafts, and ensure proper scab removal at Hair Skill.",
    url: "https://www.hairskill.com/patient-guide/hair-washing",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/patient-guide/5.webp",
        width: 1200,
        height: 630,
        alt: "Medical assistant performing a gentle post-op hair wash and scab removal on a patient at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function HairWashingPage() {
  return <HairWashingClient />;
}