import type { Metadata } from "next";
import ManualPunchClient from "../../../components/ManualPunchClient";

export const metadata: Metadata = {
  title: "Manual Punch Hair Transplant Pakistan | Hair Skill Clinic Lahore",
  description: "Experience controlled graft extraction and extreme precision with the manual punch hair transplant technique at Hair Skill Clinic Pakistan.",
  keywords: ["Manual Punch Hair Transplant", "FUE Manual Extraction Pakistan", "Hair Skill Clinic Lahore", "Precise Hair Graft Harvesting", "Hair Transplant Pakistan"],
  openGraph: {
    title: "Manual Punch Hair Transplant Pakistan | Hair Skill Clinic",
    description: "A detail-focused approach to donor area harvesting that prioritizes graft survival and extreme precision.",
    url: "https://www.hairskillclinic.com/techniques/manual-punch",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function ManualPunchPage() {
  return <ManualPunchClient />;
}