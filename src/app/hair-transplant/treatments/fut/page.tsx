import type { Metadata } from "next";
import FutClient from "@/components/FutClient";

export const metadata: Metadata = {
  title: "FUT Hair Transplant in Lahore | FUT vs FUE | Hair Skill",
  description: "Learn about the FUT hair transplant strip method in Lahore. Discover why Hair Skill Clinic exclusively uses advanced, scar-free FUE and DHI alternatives.",
  keywords: [
    "FUT Hair Transplant Lahore",
    "Strip Method Hair Transplant",
    "FUT vs FUE Lahore",
    "Follicular Unit Transplantation",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/fut",
  },
  openGraph: {
    title: "FUT Hair Transplant in Lahore | FUT vs FUE | Hair Skill",
    description: "Learn about the FUT hair transplant strip method in Lahore. Discover why Hair Skill Clinic exclusively uses advanced, scar-free FUE and DHI alternatives.",
    url: "https://www.hairskill.com/hair-transplant/treatments/fut",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/treatments/5.webp",
        width: 1200,
        height: 630,
        alt: "Comparing FUT strip method with advanced scar-free FUE alternatives at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function FutPage() {
  return <FutClient />;
}