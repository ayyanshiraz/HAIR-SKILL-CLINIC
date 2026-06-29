import type { Metadata } from "next";

// Exactly 3 levels up: (hair-transplant -> blogs -> app -> src) then into components
import BlogsHairTransplantClient from "../../../components/BlogsHairTransplantClient";

export const metadata: Metadata = {
  title: "Hair Transplant Articles & Guidance | Hair Skill Clinic Lahore",
  description: "Read clinical articles on nutrition, post-op diet, and essential vitamin supplements to protect your newly implanted grafts at Hair Skill Clinic Pakistan.",
  keywords: ["Hair Transplant Nutrition", "Vitamins After Hair Transplant", "Hair Skill Clinic Diet", "Follicular Survival Lahore", "Post Op Supplements"],
  openGraph: {
    title: "Hair Transplant Articles | Hair Skill Clinic",
    description: "Medically proven dietary and cellular advice for post-surgery recovery.",
    url: "https://www.hairskillclinic.com/blogs/hair-transplant",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogsHairTransplantPage() {
  return <BlogsHairTransplantClient />;
}