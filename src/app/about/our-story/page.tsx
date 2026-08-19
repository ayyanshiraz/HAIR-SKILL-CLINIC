import type { Metadata } from "next";
import OurStoryClient from "../../../components/OurStoryClient";

export const metadata: Metadata = {
  title: "Clinic Journey & Founders | Hair Skill Clinic Lahore",
  description: "Discover the founding story of Hair Skill Clinic in Lahore. Learn how our visionary doctors built a trusted medical facility for hair restoration in Pakistan.",
  keywords: ["Hair Skill Clinic Story", "Clinic Founders Lahore", "Medical Journey Pakistan", "Hair Restoration History"],
  alternates: {
    canonical: "https://www.hairskill.com/about/our-story",
  },
  openGraph: {
    title: "Clinic Journey & Founders - Hair Skill Clinic",
    description: "Discover the founding story of Hair Skill Clinic in Lahore. Learn how our visionary doctors built a trusted medical facility for hair restoration in Pakistan.",
    url: "https://www.hairskill.com/about/our-story",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "/about/story-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hair Skill Clinic Facility and Founders",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function OurStoryPage() {
  return (
    <main>
      <OurStoryClient />
    </main>
  );
}