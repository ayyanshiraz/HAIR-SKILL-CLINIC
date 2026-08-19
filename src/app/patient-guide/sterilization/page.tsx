import type { Metadata } from "next";
import SterilizationClient from "../../../components/SterilizationClient";

export const metadata: Metadata = {
  title: "Sterilization & Hygiene Standards Lahore | Hair Skill",
  description: "Explore our strict sterilization and hygiene protocols in Lahore. We ensure complete infection control through advanced autoclaves and Bowie-Dick testing.",
  keywords: [
    "Sterilization Protocols Lahore",
    "Surgical Hygiene Standards",
    "Autoclave Infection Control",
    "Bowie Dick Testing",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/patient-guide/sterilization",
  },
  openGraph: {
    title: "Sterilization & Hygiene Standards Lahore | Hair Skill",
    description: "Explore our strict sterilization and hygiene protocols in Lahore. We ensure complete infection control through advanced autoclaves and Bowie-Dick testing.",
    url: "https://www.hairskill.com/patient-guide/sterilization",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/patient-guide/1.webp",
        width: 1200,
        height: 630,
        alt: "Autoclave device measuring barometric steam pressure for strict surgical sterilization at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function SterilizationPage() {
  return <SterilizationClient />;
}