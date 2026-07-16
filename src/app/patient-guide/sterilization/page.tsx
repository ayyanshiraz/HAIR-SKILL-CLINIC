import type { Metadata } from "next";
import SterilizationClient from "../../../components/SterilizationClient";

export const metadata: Metadata = {
  title: "Sterilization & Hygiene Standards | Hair Skill Clinic Pakistan",
  description: "Read about our A-Rated sterilization protocols, daily vacuum leak tests, Bowie-Dick testing, and ultrasonic biological instrument tracking in Lahore, Pakistan.",
  keywords: ["Hair Skill Clinic Sterilization", "Autoclave Hygiene Pakistan", "Surgical Instrument Safety", "TEMOS Accreditation Pakistan", "Bowie Dick Test"],
  openGraph: {
    title: "Sterilization & Hygiene Standards | Hair Skill Clinic",
    description: "Discover our zero-compromise approach to sterile processing, instrument separation, and infection control.",
    url: "https://www.almadinahijamacenter.com/guide/sterilization",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function SterilizationPage() {
  return <SterilizationClient />;
}