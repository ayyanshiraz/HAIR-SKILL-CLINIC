import type { Metadata } from "next";
import PostOpClient from "../../../components/PostOpClient";

export const metadata: Metadata = {
  title: "Post-Op Hair Transplant FAQs | Hair Skill Clinic Lahore",
  description: "Find expert answers to post-op hair transplant questions in Lahore. Learn essential guidelines about washing, diet, and fast recovery at Hair Skill Clinic.",
  keywords: ["Post-Op Hair Transplant Lahore", "Hair Surgery Recovery FAQs", "Hair Transplant Aftercare", "Hair Skill Clinic Post-Op", "Washing After Hair Transplant"],
  alternates: {
    canonical: "https://www.hairskill.com/faqs/post-op",
  },
  openGraph: {
    title: "Post-Op Hair Transplant FAQs - Hair Skill Clinic Lahore",
    description: "Find expert answers to post-op hair transplant questions in Lahore. Learn essential guidelines about washing, diet, and fast recovery at Hair Skill Clinic.",
    url: "https://www.hairskill.com/faqs/post-op",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Post-Op Hair Transplant FAQs at Hair Skill Clinic Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function PostOpPage() {
  return <PostOpClient />;
}