import type { Metadata } from "next";
import PatientGuideClient from "../../components/PatientGuideClient";

export const metadata: Metadata = {
  title: "Patient Guide | Hair Skill Clinic Pakistan",
  description: "Comprehensive step-by-step patient instructions for hair transplant procedures at Hair Skill Clinic. Read our guidelines on pre-op preparation, operation day, and post-op care.",
  keywords: ["Hair Transplant Guide", "Patient Care Pakistan", "Hair Wash Post Op", "Hair Skill Clinic Lahore", "Sterilization Standards"],
  openGraph: {
    title: "Patient Guide | Hair Skill Clinic",
    description: "Everything you need to know before, during, and after your hair restoration journey in Lahore Pakistan.",
    url: "https://www.almadinahijamacenter.com/patient-guide",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function PatientGuidePage() {
  return <PatientGuideClient />;
}