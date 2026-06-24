import type { Metadata } from "next";

// Exactly 3 levels up: (sapphire -> techniques -> app -> src) then into components
import SapphireClient from "../../../components/SapphireClient";

export const metadata: Metadata = {
  title: "Sapphire Hair Transplant Pakistan & Micro Channel FUE | Hair Skill Clinic",
  description: "Achieve refined V-shaped micro channel density. Discover advanced Sapphire FUE hair transplantation in Lahore Pakistan using synthetic sapphire scalpel blades inside accessible local PKR package tiers.",
  keywords: ["Sapphire Hair Transplant Pakistan", "Sapphire FUE Lahore", "Micro Channel FUE PKR", "Sapphire vs Classic FUE", "Hair Skill Clinic Lahore", "Refined Channel Incision"],
  openGraph: {
    title: "Sapphire Hair Restoration | Hair Skill Clinic",
    description: "Medically proven synthetic sapphire blade precision for refined density control.",
    url: "https://www.almadinahijamacenter.com/techniques/sapphire",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function SapphirePage() {
  return <SapphireClient />;
}