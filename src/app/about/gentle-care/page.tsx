import type { Metadata } from "next";
// Three ../ steps climb out of /app/about/gentle-care to reach /components
import GentleCareClient from "../../../components/GentleCareClient";

export const metadata: Metadata = {
  title: `Gentle Care Program | Hair Skill Clinic Pakistan`,
  description: `Hair Skill Clinic is passionate about patients ultimate comfort in all stages of your visit. Experience seamless hospitality, dedicated case managers, and 18 months of post-operative observation.`,
};

export default function GentleCarePage() {
  return <GentleCareClient />;
}