import type { Metadata } from "next";
import TechniquesClient from "../../components/TechniquesClient";

export const metadata: Metadata = {
  title: "Clinical Hair Transplant Techniques | Hair Skill Clinic Pakistan",
  description: "Explore the advanced micro grafting restoration methodologies available at Hair Skill Clinic in Pakistan including Sapphire FUE and DHI protocols.",
  keywords: ["Hair Transplant Techniques Pakistan", "Sapphire FUE Lahore", "DHI Treatment Pakistan", "Hair Skill Clinic Methods"],
  openGraph: {
    title: "Hair Transplant Techniques Hub | Hair Skill Clinic",
    description: "Explore advanced micro grafting restoration methodologies available in Pakistan.",
    url: "https://www.almadinahijamacenter.com/techniques",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function TechniquesPage() {
  return <TechniquesClient />;
}