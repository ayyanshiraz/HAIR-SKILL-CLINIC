import type { Metadata } from "next";
import GeneralClient from "../../../components/GeneralClient";

export const metadata: Metadata = {
  title: "General F.A.Q. | Hair Skill Clinic Pakistan",
  description: "Find answers to general questions about hair transplant surgery, our clinic, and the procedures we offer at Hair Skill Clinic.",
  keywords: ["General Hair Transplant FAQ", "Hair Skill Clinic Questions", "Hair Transplant Pakistan", "Hair Surgery General", "Hair Restoration FAQ"],
  openGraph: {
    title: "General F.A.Q. | Hair Skill Clinic",
    description: "Get answers to the most common general questions about your hair transplant journey.",
    url: "https://www.hairskillclinic.com/faq/general",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function GeneralPage() {
  return <GeneralClient />;
}