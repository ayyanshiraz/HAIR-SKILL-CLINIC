import CostClient from "../../../components/CostClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair Transplant Cost in Lahore (2026) | Transparent FUE & DHI Prices",
  description: "Find the exact hair transplant cost in Lahore at Hair Skill Clinic. Motorized FUE with DHI starts from 60,000 PKR. No hidden charges, PMC verified surgeons.",
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/cost",
  },
};

export default function CostPage() {
  return <CostClient />;
}