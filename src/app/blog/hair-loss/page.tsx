import type { Metadata } from "next";

// Exactly 3 levels up: (hair-loss -> blog -> app -> src) then into components
import BlogHairLossClient from "../../../components/BlogHairLossClient";

export const metadata: Metadata = {
  title: "Hair Loss Causes & Advanced Therapies | Hair Skill Clinic Lahore",
  description: "Explore clinically proven hair shedding solutions including Platelet Rich Plasma (PRP) treatment and Ozone Scalp Therapy at Hair Skill Clinic Lahore Pakistan.",
  keywords: ["Hair Loss Pakistan", "PRP Scalp Treatment Lahore", "Ozone Hair Therapy", "Dormant Follicles Pakistan", "Stop Scalp Shedding"],
  openGraph: {
    title: "Hair Loss Therapies | Hair Skill Clinic",
    description: "Medically proven cellular treatments to halt shedding and restore density.",
    url: "https://www.almadinahijamacenter.com/blog/hair-loss",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogHairLossPage() {
  return <BlogHairLossClient />;
}