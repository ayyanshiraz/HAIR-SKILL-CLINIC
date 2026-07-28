import type { Metadata } from "next";

// Exactly 3 levels up: (manuel-fue -> techniques -> app -> src) then into components
import ManuelFueClient from "../../../../components/ManualFueClient";

export const metadata: Metadata = {
  title: "Manual FUE Hair Transplant & Manual Graft Extraction | Hair Skill Clinic",
  description: "Experience ancestral, highly controlled manual FUE hair transplantation in Lahore Pakistan. Safeguard native follicular units with one-by-one punch extractions inside accessible PKR package tiers.",
  keywords: ["Manual FUE Pakistan", "Manual Extraction Lahore", "Micro FUE Hair Transplant", "One by One Follicle Pakistan", "Hair Skill Clinic Lahore", "Pristine Graft Quality PKR"],
  openGraph: {
    title: "Manual FUE Extraction | Hair Skill Clinic",
    description: "Medically proven manual punch extractions for pristine follicular survival.",
    url: "https://www.hairskill.com/hair-transplant/techniques/manual-fue",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/techniques/4.webp",
        width: 1200,
        height: 630,
        alt: "Manual FUE Extraction | Hair Skill Clinic",
      },
    ],
  },
};

export default function ManuelFuePage() {
  return <ManuelFueClient />;
}