import type { Metadata } from "next";
import DoctorsClient from "../../components/DoctorsClient";

export const metadata: Metadata = {
  title: "Best Hair Doctor Pakistan: Top Surgeons for Hair Transplant | Hair Skill Clinic",
  description: "Discover what makes a hair doctor the best in Pakistan. Learn about top surgeons, techniques, success rates, and how to choose the right clinic in Lahore.",
  keywords: ["Best Hair Doctor Pakistan", "Top Surgeons Hair Transplant", "Hair Skill Clinic Doctors", "Hair Transplant Lahore", "Best Hair Clinic Pakistan"],
  openGraph: {
    title: "Best Hair Doctor Pakistan: Top Surgeons for Hair Transplant",
    description: "Learn about world-class expertise, advanced surgical techniques, and top hair transplant surgeons in Pakistan.",
    url: "https://www.hairskillclinic.com/doctors",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "article",
  },
};

export default function DoctorsPage() {
  return <DoctorsClient />;
}