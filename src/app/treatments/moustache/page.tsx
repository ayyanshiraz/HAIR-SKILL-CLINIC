import type { Metadata } from "next";

// Exactly 3 levels up: (moustache -> treatments -> app -> src) then into components
import MoustacheClient from "../../../components/MoustacheClient";

export const metadata: Metadata = {
  title: "Moustache Transplant & Upper Lip Restoration | Hair Skill Clinic Lahore",
  description: "Restore dense, natural moustache growth in Lahore Pakistan. Repair cleft lip scars, fill patchy gaps, and achieve perfect micro-geometry angulation inside accessible PKR package tiers.",
  keywords: ["Moustache Transplant Pakistan", "Mustache Surgery Lahore", "DHI Upper Lip Pakistan", "Cleft Lip Hair Repair", "Hair Skill Clinic Lahore", "Facial Hair Restoration PKR"],
  openGraph: {
    title: "Moustache Restoration | Hair Skill Clinic",
    description: "Medically proven Choi implanter precision for natural upper lip symmetry.",
    url: "https://www.almadinahijamacenter.com/treatments/moustache",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function MoustachePage() {
  return <MoustacheClient />;
}