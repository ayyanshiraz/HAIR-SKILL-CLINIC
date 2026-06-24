import type { Metadata } from "next";
import AboutPageClient from "../../components/AboutPageClient";

export const metadata: Metadata = {
  title: `About Us | Hair Skill Clinic Pakistan`,
  description: `Discover the story behind Hair Skill Clinic in Lahore Pakistan. We combine world class surgical precision with aesthetic hairline design.`,
};

export default function AboutPage() {
  return <AboutPageClient />;
}