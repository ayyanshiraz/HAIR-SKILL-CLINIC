import type { Metadata } from "next";
import DayOfProcedureClient from "../../../components/DayOfProcedureClient";

export const metadata: Metadata = {
  title: "Surgery Day Guide & Itinerary in Lahore | Hair Skill",
  description: "Discover your complete surgery day itinerary for hair transplants in Lahore. Learn about our private shuttles, lunch options, and operation day timeline.",
  keywords: [
    "Operation Day Hair Transplant Lahore",
    "Surgery Day Itinerary Lahore",
    "Hair Clinic Shuttle Lahore",
    "Hair Surgery Steps",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/patient-guide/day-of",
  },
  openGraph: {
    title: "Surgery Day Guide & Itinerary in Lahore | Hair Skill",
    description: "Discover your complete surgery day itinerary for hair transplants in Lahore. Learn about our private shuttles, lunch options, and operation day timeline.",
    url: "https://www.hairskill.com/patient-guide/day-of",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/patient-guide/6.webp",
        width: 1200,
        height: 630,
        alt: "Patient completing medical evaluation form on hair transplant operation day at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function DayOfProcedurePage() {
  return <DayOfProcedureClient />;
}