import type { Metadata } from "next";
import BeforeProcedureClient from "../../../components/BeforeProcedureClient";

export const metadata: Metadata = {
  title: "What Should I Do Before Hair Transplant | Hair Skill Clinic Pakistan",
  description: "Comprehensive pre-operative instructions for your upcoming hair transplant surgery in Lahore Pakistan. Learn about medication restrictions, breakfast rules, and clothing advice.",
  keywords: ["Before Hair Transplant", "Pre Op Care Pakistan", "Hair Skill Clinic Lahore", "Stop Aspirin Hair Transplant", "Hair Clinic Pakistan"],
  openGraph: {
    title: "What Should I Do Before Hair Transplant?",
    description: "Read our 13 essential preparation steps before your surgery day.",
    url: "https://www.almadinahijamacenter.com/guide/before",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function BeforeProcedurePage() {
  return <BeforeProcedureClient />;
}