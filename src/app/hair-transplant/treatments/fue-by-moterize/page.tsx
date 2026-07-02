import React from "react";
import type { Metadata } from "next";
import FueMotorizedClient from "@/components/FueMotorizedClient";

export const metadata: Metadata = {
  title: "FUE Motorized Hair Transplant | Hair Skill Clinic",
  description: "Experience modern high-efficiency motorized FUE hair transplantation at Hair Skill Clinic Lahore for maximum density and natural regrowth."
};

export default function FueMotorizedPage() {
  return <FueMotorizedClient />;
}