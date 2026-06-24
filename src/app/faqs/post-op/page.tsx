import type { Metadata } from "next";
import PostOpClient from "../../../components/PostOpClient";

export const metadata: Metadata = {
  title: "Post Operation F.A.Q. | Hair Skill Clinic Pakistan",
  description: "Find answers to your post-operation questions regarding hair transplant surgery at Hair Skill Clinic. Learn about washing, dietary restrictions, and recovery.",
  keywords: ["Post Operation Hair Transplant", "Hair Transplant FAQ", "Hair Skill Clinic Post-op", "Hair Transplant Pakistan", "Hair Surgery Recovery"],
  openGraph: {
    title: "Post Operation F.A.Q. | Hair Skill Clinic",
    description: "Learn everything you need to know for a successful recovery after your hair transplant.",
    url: "https://www.hairskillclinic.com/faq/post-op",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function PostOpPage() {
  return <PostOpClient />;
}