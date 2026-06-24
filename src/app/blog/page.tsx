import type { Metadata } from "next";
import BlogClient from "../../components/BlogClient";

export const metadata: Metadata = {
  title: "Medical Blog & Hair Transplant Articles | Hair Skill Clinic Lahore",
  description: "Explore world class clinical articles written by Dr Mehmet Erdogan and Dr Gokay Bilgin. Read comprehensive guides on Minoxidil, Seborrheic Dermatitis, shock loss, and post op recovery.",
  keywords: ["Hair Transplant Blog Pakistan", "Minoxidil Guide Lahore", "Seborrheic Dermatitis Hair Transplant", "Dr Mehmet Erdogan Articles", "Hair Restoration Lahore"],
  openGraph: {
    title: "Clinical Blog | Hair Skill Clinic Pakistan",
    description: "Expert medical insights, surgical comparisons, and post-operative recovery guidelines.",
    url: "https://www.almadinahijamacenter.com/blog",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}