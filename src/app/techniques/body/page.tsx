import type { Metadata } from "next";

// Exactly 3 levels up: (body -> techniques -> app -> src) then into components
import BodyClient from "../../../components/BodyClient";

export const metadata: Metadata = {
  title: "Body Hair Transplant (BHT) & Extra Donor Supply | Hair Skill Clinic Lahore",
  description: "Expand your safe donor pool when scalp reserves are exhausted. Discover advanced Body Hair Transplantation BHT in Lahore Pakistan using beard and chest follicles inside accessible PKR package tiers.",
  keywords: ["Body Hair Transplant Pakistan", "BHT Surgery Lahore", "Beard Grafts Norwood 6", "Depleted Donor Repair", "Hair Skill Clinic Lahore", "Expand Donor Supply PKR"],
  openGraph: {
    title: "Body Hair Restoration | Hair Skill Clinic",
    description: "Medically proven non-scalp follicular extractions for total background density.",
    url: "https://www.almadinahijamacenter.com/techniques/body",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function BodyPage() {
  return <BodyClient />;
}