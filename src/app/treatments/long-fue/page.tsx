import type { Metadata } from "next";

// Exactly 3 levels up: (long-fue -> treatments -> app -> src) then into components
import LongFueClient from "../../../components/LongFueClient";

export const metadata: Metadata = {
  title: "Long FUE Hair Transplant Without Shaving | Hair Skill Clinic Lahore",
  description: "Experience advanced Long FUE hair transplantation in Lahore Pakistan. Restore density and recreate your native hairline without fully shaving your donor area.",
  keywords: ["Long FUE Pakistan", "Hair Transplant Without Shaving Lahore", "Discreet Hair Transplant", "Follicular Unit Excision Pakistan", "Hair Skill Clinic Lahore"],
  openGraph: {
    title: "Long FUE Hair Transplant | Hair Skill Clinic",
    description: "Maintain your existing hairstyle while undergoing surgical hair restoration.",
    url: "https://www.almadinahijamacenter.com/treatments/long-fue",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function LongFuePage() {
  return <LongFueClient />;
}