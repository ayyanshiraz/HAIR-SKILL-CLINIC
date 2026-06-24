import type { Metadata } from "next";

// Exactly 3 levels up: (dhi -> techniques -> app -> src) then into components
import DhiClient from "../../../components/DhiClient";

export const metadata: Metadata = {
  title: "DHI Hair Transplant Pakistan & Choi Implanter Pen | Hair Skill Clinic Lahore",
  description: "Achieve flawless hairline micro-angulation without pre-opened channels. Discover advanced Direct Hair Implantation DHI in Lahore Pakistan using Choi implanter pens inside accessible PKR tiers.",
  keywords: ["DHI Hair Transplant Pakistan", "Choi Implanter Pen Lahore", "Direct Hair Implantation PKR", "DHI Hairline vs FUE", "Hair Skill Clinic Lahore", "No Incision Hair Transplant"],
  openGraph: {
    title: "DHI Hair Restoration | Hair Skill Clinic",
    description: "Medically proven Choi implanter precision for natural angle control.",
    url: "https://www.almadinahijamacenter.com/techniques/dhi",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function DhiPage() {
  return <DhiClient />;
}