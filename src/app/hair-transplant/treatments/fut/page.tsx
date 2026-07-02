import React from "react";
import type { Metadata } from "next";
import FutClient from "@/components/FutClient";

export const metadata: Metadata = {
  title: "FUT Hair Transplant Information | Hair Skill Clinic",
  description: "Learn about Follicular Unit Transplantation FUT and why Hair Skill Clinic Lahore exclusively utilizes advanced minimally invasive FUE and DHI methods."
};

export default function FutPage() {
  return <FutClient />;
}