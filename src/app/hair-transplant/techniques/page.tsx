import type { Metadata } from "next";
import TechniquesClient from "../../../components/TechniquesClient";

export const metadata: Metadata = {
  title: "Advanced Hair Transplant Techniques Lahore | Hair Skill",
  description: "Discover advanced hair transplant techniques in Lahore at Hair Skill Clinic. Compare DHI, Sapphire FUE, and micro-grafting for natural, lasting results.",
  keywords: [
    "Hair Transplant Techniques Lahore",
    "Sapphire FUE Lahore",
    "DHI Method Lahore",
    "Micro Grafting Hair Transplant",
    "Hair Restoration Methods Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/techniques",
  },
  openGraph: {
    title: "Advanced Hair Transplant Techniques Lahore | Hair Skill",
    description: "Discover advanced hair transplant techniques in Lahore at Hair Skill Clinic. Compare DHI, Sapphire FUE, and micro-grafting for natural, lasting results.",
    url: "https://www.hairskill.com/hair-transplant/techniques",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/treatments/13.webp",
        width: 1200,
        height: 630,
        alt: "Advanced FUE and DHI hair transplant techniques at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function TechniquesPage() {
  return <TechniquesClient />;
}