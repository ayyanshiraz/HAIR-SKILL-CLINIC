import type { Metadata } from "next";
// Updated the very end of the path to target "PhilosophyClient" exactly as it is written in your sidebar
import TruePhilosophyClient from "../../../components/PhilosophyClient";

export const metadata: Metadata = {
  title: `True Philosophy | Hair Skill Clinic Pakistan`,
  description: `Hair Skill Clinic has disciplined its way of performing hair transplantation around the TRUE Philosophy: True Planning, True Hairline Design, True Execution, and True Innovation.`,
};

export default function TruePhilosophyPage() {
  return <TruePhilosophyClient />;
}