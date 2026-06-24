import type { Metadata } from "next";
import BeforeAfterClient from "../../components/BeforeAfterClient";

export const metadata: Metadata = {
  title: "Before & After Hair Transplant Results | Hair Skill Clinic Pakistan",
  description: "View our gallery of real patient transformations. See the natural, high-density hair transplant results achieved by the expert surgeons at Hair Skill Clinic in Lahore.",
  keywords: ["Hair Transplant Results", "Before and After Hair Transplant", "Hair Skill Clinic Patients", "Hair Transplant Pakistan", "FUE Results Lahore"],
  openGraph: {
    title: "Before & After Hair Transplant Results | Hair Skill Clinic",
    description: "Real patients, real transformations. Explore our hair restoration success stories.",
    url: "https://www.hairskillclinic.com/before-after",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function BeforeAfterPage() {
  return <BeforeAfterClient />;
}