import type { Metadata } from "next";
// Goes up three levels (our-story -> about -> app -> src) to reach the components folder
import OurStoryClient from "../../../components/OurStoryClient";

// --- SEO METADATA (SERVER SIDE) ---
export const metadata: Metadata = {
  title: "Our Story | Hair Skill Clinic Pakistan",
  description: "The journey of growth of two perfectionists. Discover how Hair Skill Clinic became a global benchmark for medical hair transplant clinics in Pakistan.",
  keywords: ["Hair Skill Clinic Story", "Hair Transplant Pakistan", "FUE hair transplantation", "Best Hair Clinic Lahore"],
  openGraph: {
    title: "Hair Skill Clinic | Our Story",
    description: "Founded by doctors, managed by doctors. Learn about our visionary perspective on hair transplantation.",
    url: "https://www.almadinahijamacenter.com/about/our-story",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "/about/story-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hair Skill Clinic Facility",
      },
    ],
    locale: "en_US",
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