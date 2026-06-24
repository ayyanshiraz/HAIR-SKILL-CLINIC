import type { Metadata } from "next";

// Exactly 3 levels up: (sideburn -> treatments -> app -> src) then into components
import SideburnClient from "../../../components/SideburnClient";

export const metadata: Metadata = {
  title: "Sideburn Transplantation & Facial Framing Restoration | Hair Skill Clinic Lahore",
  description: "Restore even, natural sideburns in Lahore Pakistan. Repair post-facelift sideburn distortion, fill asymmetrical gaps, or construct full masculine temporal framing inside accessible PKR tiers.",
  keywords: ["Sideburn Transplant Pakistan", "Post Facelift Hair Loss Lahore", "Temporal Framing Repair", "DHI Sideburn Pakistan", "Hair Skill Clinic Lahore", "Facial Hair Restoration PKR"],
  openGraph: {
    title: "Sideburn Restoration | Hair Skill Clinic",
    description: "Medically proven micro-angle graft control for absolute facial balance.",
    url: "https://www.almadinahijamacenter.com/treatments/sideburn",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function SideburnPage() {
  return <SideburnClient />;
}