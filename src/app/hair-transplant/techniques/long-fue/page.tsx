import type { Metadata } from "next";
import LongFueClient from "../../../../components/LongFueClient";

export const metadata: Metadata = {
  title: "Unshaven Long FUE Hair Transplant Lahore | Hair Skill",
  description: "Want a discreet hair transplant without shaving your head? Experience the advanced Long FUE technique at Hair Skill Clinic Lahore. Keep your existing style.",
  keywords: [
    "Unshaven Hair Transplant Lahore",
    "Long FUE Lahore",
    "No Shave Hair Transplant",
    "Discreet Hair Transplant Lahore",
    "Hair Skill Clinic Techniques"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/techniques/long-fue",
  },
  openGraph: {
    title: "Unshaven Long FUE Hair Transplant Lahore | Hair Skill",
    description: "Want a discreet hair transplant without shaving your head? Experience the advanced Long FUE technique at Hair Skill Clinic Lahore. Keep your existing style.",
    url: "https://www.hairskill.com/hair-transplant/techniques/long-fue",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/1.webp",
        width: 1200,
        height: 630,
        alt: "Unshaven Long FUE Hair Transplant at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function LongFuePage() {
  return <LongFueClient />;
}