import type { Metadata } from "next";
import ChineseMethodClient from "@/components/ChineseMethodClient";

export const metadata: Metadata = {
  title: "Chinese Hair Transplant Method in Lahore | Hair Skill",
  description: "Discover the high-density Chinese hair transplant method in Lahore. Combined with strategic PRP therapy, we ensure optimal regrowth at Hair Skill Clinic.",
  keywords: [
    "Chinese Hair Transplant Lahore",
    "High Density Hair Transplant",
    "Chinese FUE Method",
    "Hair Transplant with PRP Lahore",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/chinese-hair-transplant",
  },
  openGraph: {
    title: "Chinese Hair Transplant Method in Lahore | Hair Skill",
    description: "Discover the high-density Chinese hair transplant method in Lahore. Combined with strategic PRP therapy, we ensure optimal regrowth at Hair Skill Clinic.",
    url: "https://www.hairskill.com/hair-transplant/treatments/chinese-hair-transplant",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/treatments/1.webp",
        width: 1200,
        height: 630,
        alt: "High density Chinese hair transplant method combined with PRP at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function ChineseMethodPage() {
  return <ChineseMethodClient />;
}