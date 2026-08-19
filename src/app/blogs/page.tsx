import type { Metadata } from "next";
import BlogsClient from "../../components/BlogsClient";

export const metadata: Metadata = {
  title: "Hair Transplant Blogs & Guides Lahore | Hair Skill Clinic",
  description: "Looking for the best hair transplant advice in Lahore? Read expert blogs on FUE, DHI, Minoxidil, and hair fall treatments by Hair Skill Clinic Gulberg.",
  keywords: ["Hair Transplant Blogs Lahore", "FUE Hair Transplant Guides Lahore", "Hair Loss Treatment Gulberg", "Best Hair Specialist in Lahore", "Hair Skill Clinic Blogs"],
  alternates: {
    canonical: "https://www.hairskill.com/blogs",
  },
  openGraph: {
    title: "Hair Transplant Blogs & Guides Lahore - Hair Skill Clinic",
    description: "Looking for the best hair transplant advice in Lahore? Read expert blogs on FUE, DHI, Minoxidil, and hair fall treatments by Hair Skill Clinic Gulberg.",
    url: "https://www.hairskill.com/blogs",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/blogs/1.webp",
        width: 1200,
        height: 630,
        alt: "Hair Transplant Guides and Expert Blogs at Hair Skill Clinic Gulberg Lahore",
      },
    ],
  },
};

export default function BlogsPage() {
  return <BlogsClient />;
}