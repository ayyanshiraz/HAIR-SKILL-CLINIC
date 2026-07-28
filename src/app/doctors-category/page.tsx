import React from "react";
import type { Metadata } from "next";
import DoctorsCategoryClient from "../../components/DoctorsCategoryClient";

export const metadata: Metadata = {
  title: "Dr Mansoor Ahmad Profile | Hair Skill Clinic",
  description: "Verified surgical degrees international fellowships and permanent medical credentials of Dr Mansoor Ahmad at Hair Skill Clinic Lahore Pakistan."
};

export default function DoctorsCategoryPage() {
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr Mansoor Ahmad",
    jobTitle: "Senior Chief Surgeon and Medical Director",
    worksFor: {
      "@type": "MedicalClinic",
      name: "Hair Skill Clinic"
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Quaid-e-Azam Medical College, Bahawalpur"
      },
      {
        "@type": "CollegeOrUniversity",
        name: "University of Health Sciences Lahore"
      }
    ],
    description: "Senior Chief Surgeon with over 40 years of surgical craftsmanship and permanently registered with the Pakistan Medical and Dental Council."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />
      <DoctorsCategoryClient />
    </>
  );
}