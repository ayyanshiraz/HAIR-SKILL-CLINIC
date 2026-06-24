import type { Metadata } from "next";

// Exactly 3 levels up: (afro-hair -> treatments -> app -> src) then into components
import AfroHairClient from "../../../components/AfroHairClient";

export const metadata: Metadata = {
  title: "Afro Hair Transplant & Coiled Hair Restoration | Hair Skill Clinic Lahore Pakistan",
  description: "Explore elite doctor-led Afro hair transplantation in Lahore Pakistan. Rebuild density, restore traction alopecia edges, and safeguard native corkscrew curl biology inside accessible PKR tiers.",
  keywords: ["Afro Hair Transplant Pakistan", "Traction Alopecia Repair Lahore", "Coiled Hair Restoration", "DHI Afro Hairline Pakistan", "Hair Skill Clinic Lahore", "Ethnic Hair Transplant PKR"],
  openGraph: {
    title: "Afro Hair Restoration | Hair Skill Clinic",
    description: "Medically proven corkscrew follicle preservation for authentic natural density.",
    url: "https://www.almadinahijamacenter.com/treatments/afro-hair",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function AfroHairPage() {
  return <AfroHairClient />;
}