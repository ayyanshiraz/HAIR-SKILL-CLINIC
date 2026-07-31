import type { Metadata } from "next";
import HairTransplantClient from "../../components/HairTransplantClient";

export const metadata: Metadata = {
  title: "Best Hair Transplant in Lahore | FUE & DHI | Hair Skill",
  description: "Looking for the best hair transplant in Lahore? We offer seamless FUE, DHI, and Unshaven techniques with natural hairlines and maximum graft survival.",
  keywords: [
    "Best Hair Transplant Lahore",
    "FUE Hair Transplant Lahore",
    "DHI Implantation Lahore",
    "Hair Restoration Clinic Lahore",
    "Unshaven Hair Transplant"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant",
  },
  openGraph: {
    title: "Best Hair Transplant in Lahore | FUE & DHI | Hair Skill",
    description: "Looking for the best hair transplant in Lahore? We offer seamless FUE, DHI, and Unshaven techniques with natural hairlines and maximum graft survival.",
    url: "https://www.hairskill.com/hair-transplant",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/treatments/13.webp",
        width: 1200,
        height: 630,
        alt: "Surgeon performing FUE hair transplant extraction at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function HairTransplantPage() {
  return <HairTransplantClient />;
}