import type { Metadata } from "next";
import AboutPageClient from "../../components/AboutPageClient";

export const metadata: Metadata = {
  title: "About Hair Skill Clinic | Trusted Surgeons in Lahore",
  description: "Discover the story of Hair Skill Clinic in Gulberg, Lahore. Our expert team combines surgical precision with aesthetic design for natural hair restoration.",
  alternates: {
    canonical: "https://www.hairskill.com/about",
  },
  openGraph: {
    title: "About Hair Skill Clinic - Hair Restoration Experts",
    description: "Discover the story of Hair Skill Clinic in Gulberg, Lahore. Our expert team combines surgical precision with aesthetic design for natural hair restoration.",
    url: "https://www.hairskill.com/about", 
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "/images/about-us-og.jpg", // Apni image ka actual path yahan lazmi check kar lena
        width: 1200,
        height: 630,
        alt: "Hair Skill Clinic Team in Gulberg Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}