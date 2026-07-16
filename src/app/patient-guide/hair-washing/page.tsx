import type { Metadata } from "next";
import HairWashingClient from "../../../components/HairWashingClient";

export const metadata: Metadata = {
  title: "Post-Op Hair Washing Guidelines | Hair Skill Clinic Pakistan",
  description: "Learn how to properly wash, apply lotion foam, rinse, and dry your hair 48 hours after a hair transplant surgery at Hair Skill Clinic Pakistan.",
  keywords: ["Hair Wash Post Op", "Hair Transplant Care Pakistan", "Panthenol Spray", "Scab Removal Hair Transplant", "Hair Skill Clinic Lahore"],
  openGraph: {
    title: "Post-Op Hair Washing Guidelines",
    description: "Essential step-by-step instructions for your 48-hour post-transplant hair wash.",
    url: "https://www.almadinahijamacenter.com/guide/hair-washing",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function HairWashingPage() {
  return <HairWashingClient />;
}