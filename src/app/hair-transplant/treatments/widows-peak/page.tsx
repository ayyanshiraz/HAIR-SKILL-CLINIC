import type { Metadata } from "next";
import WidowsPeakClient from "../../../../components/WidowsPeakClient";

export const metadata: Metadata = {
  title: "Widows Peak Hair Transplant in Lahore | Hair Skill",
  description: "Redesign your hairline with precision in Lahore. Construct a sharp masculine V-contour, fill temporal recessions, or level out an existing widow's peak.",
  keywords: [
    "Widows Peak Transplant Lahore",
    "V Shaped Hairline Lahore",
    "Create Widows Peak Lahore",
    "Remove Widows Peak Lahore",
    "Hairline Design Lahore",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/widows-peak",
  },
  openGraph: {
    title: "Widows Peak Hair Transplant in Lahore | Hair Skill",
    description: "Redesign your hairline with precision in Lahore. Construct a sharp masculine V-contour, fill temporal recessions, or level out an existing widow's peak.",
    url: "https://www.hairskill.com/hair-transplant/treatments/widows-peak",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/2.webp",
        width: 1200,
        height: 630,
        alt: "Patient before and after Widow's Peak Hair Transplant and frontal hairline redesign at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function WidowsPeakPage() {
  return <WidowsPeakClient />;
}