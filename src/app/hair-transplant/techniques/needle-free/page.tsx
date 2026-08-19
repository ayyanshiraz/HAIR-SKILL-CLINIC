import type { Metadata } from "next";
import NeedleFreeClient from "../../../../components/NeedleFreeClient";

export const metadata: Metadata = {
  title: "Painless Needle-Free Hair Transplant Lahore | Hair Skill",
  description: "Overcome needle phobia with a painless hair transplant in Lahore. We use advanced needle-free jet injection anesthesia for maximum comfort at Hair Skill.",
  keywords: [
    "Painless Hair Transplant Lahore",
    "Needle Free Anesthesia Lahore",
    "Jet Injection Hair Transplant",
    "Hair Transplant Without Pain",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/techniques/needle-free",
  },
  openGraph: {
    title: "Painless Needle-Free Hair Transplant Lahore | Hair Skill",
    description: "Overcome needle phobia with a painless hair transplant in Lahore. We use advanced needle-free jet injection anesthesia for maximum comfort at Hair Skill.",
    url: "https://www.hairskill.com/hair-transplant/techniques/needle-free",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/25.webp",
        width: 1200,
        height: 630,
        alt: "Advanced needle-free jet injection anesthesia device at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function NeedleFreePage() {
  return <NeedleFreeClient />;
}