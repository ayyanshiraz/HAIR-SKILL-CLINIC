import React from "react";
import type { Metadata } from "next";
import DoctorsCategoryClient from "../../components/DoctorsCategoryClient";

export const metadata: Metadata = {
  title: "Dr Mansoor Ahmad Profile | Hair Skill Clinic",
  description: "Verified surgical degrees international fellowships and permanent medical credentials of Dr Mansoor Ahmad at Hair Skill Clinic Lahore Pakistan."
};

export default function DoctorsCategoryPage() {
  return <DoctorsCategoryClient />;
}