import type { Metadata } from "next";
import HomePageClient from "../components/HomePageClient";

export const metadata: Metadata = {
  title: `Hair Skill Clinic | Hair Transplant in Pakistan`,
  description: `Mastering the Art of Hair Transplants in Pakistan with World Class Expertise and Natural Results.`,
};

export default function Page() {
  return <HomePageClient />;
}