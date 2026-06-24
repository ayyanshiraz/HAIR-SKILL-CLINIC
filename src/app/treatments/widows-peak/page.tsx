import type { Metadata } from "next";

// Exactly 3 levels up: (widows-peak -> treatments -> app -> src) then into components
import WidowsPeakClient from "../../../components/WidowsPeakClient";

export const metadata: Metadata = {
  title: "Widows Peak Hair Transplant Create or Remove V-Shaped Hairline | Hair Skill Clinic",
  description: "Redesign your hairline with absolute precision in Lahore Pakistan. Construct a sharp masculine V contour, fill temporal recessions, or level out an existing peak using DHI and Sapphire FUE.",
  keywords: ["Widows Peak Hair Transplant", "V Shaped Hairline Pakistan", "Create Widows Peak Lahore", "Remove Widows Peak", "Hairline Design Pakistan", "DHI Hairline Lahore"],
  openGraph: {
    title: "Widows Peak Hairline Redesign | Hair Skill Clinic",
    description: "Masterclass architectural hairline design for permanent facial symmetry.",
    url: "https://www.almadinahijamacenter.com/treatments/widows-peak",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function WidowsPeakPage() {
  return <WidowsPeakClient />;
}