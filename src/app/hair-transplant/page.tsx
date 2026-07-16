import type { Metadata } from "next";

// Exactly 2 levels up: (hair-transplant -> app -> src) then into components
import HairTransplantClient from "../../components/HairTransplantClient";

export const metadata: Metadata = {
  title: "Advanced Hair Transplant Treatments & Techniques | Hair Skill Clinic Lahore",
  description: "Explore our comprehensive range of surgical hair restoration options in Lahore Pakistan including DHI Implantation, Sapphire FUE, Unshaven FUE, and Needle Free Anesthesia.",
  keywords: ["Hair Transplant Pakistan", "DHI Implantation Lahore", "Sapphire FUE Pakistan", "Unshaven Hair Transplant", "Female Hair Transplant Lahore", "Manuel FUE Pakistan"],
  openGraph: {
    title: "Hair Transplant Treatments | Hair Skill Clinic",
    description: "World class surgical precision, dense packing, and completely natural hairline designs.",
    url: "https://www.almadinahijamacenter.com/hair-transplant",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function HairTransplantPage() {
  return <HairTransplantClient />;
}