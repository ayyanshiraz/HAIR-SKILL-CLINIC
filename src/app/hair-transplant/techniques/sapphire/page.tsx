import type { Metadata } from "next";
import SapphireClient from "../../../../components/SapphireClient";

export const metadata: Metadata = {
  title: "Advanced Sapphire FUE Hair Transplant Lahore | Hair Skill",
  description: "Get maximum density and faster healing with an advanced Sapphire FUE hair transplant in Lahore. Experience precision micro-channel incisions at Hair Skill.",
  keywords: [
    "Sapphire FUE Lahore",
    "Micro Channel Hair Transplant",
    "Sapphire Hair Transplant Lahore",
    "High Density Hair Transplant",
    "Hair Skill Clinic Sapphire FUE"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/techniques/sapphire",
  },
  openGraph: {
    title: "Advanced Sapphire FUE Hair Transplant Lahore | Hair Skill",
    description: "Get maximum density and faster healing with an advanced Sapphire FUE hair transplant in Lahore. Experience precision micro-channel incisions at Hair Skill.",
    url: "https://www.hairskill.com/hair-transplant/techniques/sapphire",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/techniques/1.webp",
        width: 1200,
        height: 630,
        alt: "Macro close up of Sapphire blade for micro channel FUE hair transplant in Lahore",
      },
    ],
  },
};

export default function SapphirePage() {
  return <SapphireClient />;
}