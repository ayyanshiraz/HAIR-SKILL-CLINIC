import type { Metadata } from "next";
import UnshavenTransplantClient from "../../../../components/UnshavenTransplantClient";

export const metadata: Metadata = {
  title: "Unshaven Hair Transplant in Lahore | Hair Skill Clinic",
  description: "Keep your surgery discreet with a completely unshaven hair transplant in Lahore. Restore hair density without shaving your head at Hair Skill Clinic.",
  keywords: [
    "Unshaven Hair Transplant Lahore",
    "No Shave FUE Lahore",
    "Discreet Hair Transplant Lahore",
    "Unshaven FUE Hair Skill",
    "Hair Transplant No Head Shave"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/techniques/unshaven-transplant",
  },
  openGraph: {
    title: "Unshaven Hair Transplant in Lahore | Hair Skill Clinic",
    description: "Keep your surgery discreet with a completely unshaven hair transplant in Lahore. Restore hair density without shaving your head at Hair Skill Clinic.",
    url: "https://www.hairskill.com/hair-transplant/techniques/unshaven-transplant",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/techniques/7.webp",
        width: 1200,
        height: 630,
        alt: "Patient maintaining existing hairstyle after completely unshaven hair transplant at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function UnshavenTransplantPage() {
  return <UnshavenTransplantClient />;
}