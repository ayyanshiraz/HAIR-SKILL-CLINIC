import type { Metadata } from "next";
// Goes up three levels (mission -> about -> app -> src) to reach the components folder
import MissionClient from "../../../components/MissionClient";

// --- SEO METADATA (SERVER SIDE) ---
export const metadata: Metadata = {
  title: "Mission & Vision | Hair Skill Clinic Pakistan",
  description: "Read about the mission and vision of Hair Skill Clinic. We provide reliable, innovative, and high-quality hair transplant solutions in Pakistan.",
  keywords: ["Hair Skill Clinic Mission", "Hair Clinic Vision", "Hair Transplant Pakistan", "High Quality Hair Transplant"],
  openGraph: {
    title: "Mission & Vision | Hair Skill Clinic",
    description: "Our goal is to improve our patients quality of life and earn their trust through our world-class hair transplant services.",
    url: "https://www.almadinahijamacenter.com/about/mission",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "/about/mission-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Hair Skill Clinic Mission and Vision",
      },
    ],
    locale: "en_US",
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