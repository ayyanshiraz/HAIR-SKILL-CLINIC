import type { Metadata } from "next";
import MissionClient from "../../../components/MissionClient";

export const metadata: Metadata = {
  title: "Clinic Mission & Vision | Hair Skill Clinic Lahore",
  description: "Discover the mission and vision of Hair Skill Clinic in Lahore. Our goal is to improve patient confidence through innovative hair restoration solutions.",
  keywords: ["Hair Skill Clinic Mission", "Hair Restoration Vision", "Patient Trust Lahore", "Innovative Solutions"],
  alternates: {
    canonical: "https://www.hairskill.com/about/mission",
  },
  openGraph: {
    title: "Clinic Mission & Vision - Hair Skill Clinic",
    description: "Discover the mission and vision of Hair Skill Clinic in Lahore. Our goal is to improve patient confidence through innovative hair restoration solutions.",
    url: "https://www.hairskill.com/about/mission",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "/about/mission-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Hair Skill Clinic Mission and Vision",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function MissionPage() {
  return (
    <main>
      <MissionClient />
    </main>
  );
}