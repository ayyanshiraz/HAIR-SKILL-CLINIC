import type { Metadata } from "next";
import CodeOfEthicsClient from "../../../components/CodeOfEthicsClient";

export const metadata: Metadata = {
  title: "Code of Ethics & Patient Safety | Hair Skill Clinic Lahore",
  description: "Review the Code of Ethics at Hair Skill Clinic Lahore. We prioritize honesty, transparency, patient safety, and strict medical confidentiality in Pakistan.",
  keywords: ["Hair Skill Clinic Ethics", "Patient Safety Lahore", "Medical Honesty Pakistan", "Clinic Transparency"],
  alternates: {
    canonical: "https://www.hairskill.com/about/ethics",
  },
  openGraph: {
    title: "Code of Ethics & Patient Safety - Hair Skill Clinic",
    description: "Review the Code of Ethics at Hair Skill Clinic Lahore. We prioritize honesty, transparency, patient safety, and strict medical confidentiality in Pakistan.",
    url: "https://www.hairskill.com/about/ethics",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "/about/ethics-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Hair Skill Clinic Building Ethics Banner",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function CodeOfEthicsPage() {
  return (
    <main>
      <CodeOfEthicsClient />
    </main>
  );
}