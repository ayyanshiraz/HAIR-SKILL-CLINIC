import type { Metadata } from "next";
import ReviewsClient from "../../components/ReviewsClient";

export const metadata: Metadata = {
  title: "Patient Reviews | Hair Skill Clinic Pakistan",
  description: "Read verified reviews from our patients. See why Hair Skill Clinic is the most trusted destination for hair transplant surgery in Pakistan.",
  keywords: ["Hair Skill Clinic Reviews", "Hair Transplant Reviews Pakistan", "Patient Testimonials", "FUE Transplant Reviews", "Best Hair Clinic Lahore"],
  openGraph: {
    title: "Patient Reviews | Hair Skill Clinic",
    description: "Read real stories and experiences from our hair transplant patients.",
    url: "https://www.hairskillclinic.com/reviews",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}