import type { Metadata } from "next";
import BlogsHairTransplantClient from "../../../components/BlogsHairTransplantClient";

export const metadata: Metadata = {
  title: "Hair Transplant Diet & Care Blogs Lahore | Hair Skill",
  description: "Read expert guides on post-op diet, essential vitamins, and nutrition for hair transplant recovery. Ensure perfect graft survival in Lahore with Hair Skill.",
  keywords: ["Hair Transplant Diet Lahore", "Post-Op Hair Transplant Care", "Vitamins After Hair Transplant", "Graft Survival Tips", "Hair Clinic Blogs Lahore"],
  alternates: {
    canonical: "https://www.hairskill.com/blogs/hair-transplant",
  },
  openGraph: {
    title: "Hair Transplant Diet & Care Blogs Lahore - Hair Skill",
    description: "Read expert guides on post-op diet, essential vitamins, and nutrition for hair transplant recovery. Ensure perfect graft survival in Lahore with Hair Skill.",
    url: "https://www.hairskill.com/blogs/hair-transplant",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/blogs/hair-transplant.webp",
        width: 1200,
        height: 630,
        alt: "Hair Transplant Post-Op Diet and Care Guides at Hair Skill Clinic Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function BlogsHairTransplantPage() {
  return <BlogsHairTransplantClient />;
}