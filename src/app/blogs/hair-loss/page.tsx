import type { Metadata } from "next";
import BlogsHairLossClient from "../../../components/BlogsHairLossClient";

export const metadata: Metadata = {
  title: "Hair Loss Treatment & PRP Therapy Lahore | Hair Skill",
  description: "Struggling with hair loss? Discover clinically proven solutions like PRP and Ozone Scalp Therapy at Hair Skill Clinic Lahore to effectively stop hair fall.",
  keywords: ["Hair Loss Treatment Lahore", "PRP Hair Therapy Lahore", "Ozone Scalp Treatment Lahore", "Stop Hair Fall", "Best Hair Clinic in Lahore"],
  alternates: {
    canonical: "https://www.hairskill.com/blogs/hair-loss",
  },
  openGraph: {
    title: "Hair Loss Treatment & PRP Therapy Lahore - Hair Skill",
    description: "Struggling with hair loss? Discover clinically proven solutions like PRP and Ozone Scalp Therapy at Hair Skill Clinic Lahore to effectively stop hair fall.",
    url: "https://www.hairskill.com/blogs/hair-loss",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/blogs/hair-loss.webp",
        width: 1200,
        height: 630,
        alt: "Hair Loss Treatment and PRP Therapy at Hair Skill Clinic Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function BlogsHairLossPage() {
  return <BlogsHairLossClient />;
}