import type { Metadata } from "next";
// Three ../ steps climb out of /app/about/gentle-care to reach /components
import GentleCareClient from "../../../components/GentleCareClient";

export const metadata: Metadata = {
  title: "Gentle Care Program | Hair Skill Clinic Lahore",
  description: "Experience ultimate patient comfort at Hair Skill Clinic Lahore. Enjoy seamless hospitality, dedicated case managers, and 18 months of post-op observation.",
  alternates: {
    canonical: "https://www.hairskill.com/about/gentle-care",
  },
  openGraph: {
    title: "Patient Comfort & Gentle Care - Hair Skill Clinic",
    description: "Experience ultimate patient comfort at Hair Skill Clinic Lahore. Enjoy seamless hospitality, dedicated case managers, and 18 months of post-op observation.",
    url: "https://www.hairskill.com/about/gentle-care",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/gentle-care-og.jpg", // Yahan is page ke hisaab se koi soft/caring image ka path daal dena
        width: 1200,
        height: 630,
        alt: "Patient Comfort and Gentle Care at Hair Skill Clinic",
      },
    ],
  },
};

export default function GentleCarePage() {
  return <GentleCareClient />;
}