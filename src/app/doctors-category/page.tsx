import React from "react";
import type { Metadata } from "next";
import DoctorsCategoryClient from "../../components/DoctorsCategoryClient";

export const metadata: Metadata = {
  title: "Dr Mansoor Ahmad | Hair Transplant Surgeon in Lahore",
  description: "Review the verified medical credentials and 40 years of surgical experience of Dr Mansoor Ahmad, the senior hair transplant surgeon at Hair Skill Lahore.",
  keywords: ["Dr Mansoor Ahmad Lahore", "Best Hair Transplant Surgeon Lahore", "Hair Specialist Doctor Lahore", "Chief Surgeon Hair Skill"],
  alternates: {
    canonical: "https://www.hairskill.com/doctors-category",
  },
  openGraph: {
    title: "Dr Mansoor Ahmad | Hair Transplant Surgeon in Lahore",
    description: "Review the verified medical credentials and 40 years of surgical experience of Dr Mansoor Ahmad, the senior hair transplant surgeon at Hair Skill Lahore.",
    url: "https://www.hairskill.com/doctors-category",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/dr-mansoor-ahmad.webp",
        width: 1200,
        height: 630,
        alt: "Dr Mansoor Ahmad - Chief Hair Transplant Surgeon at Hair Skill Clinic Lahore",
      },
    ],
    locale: "en_PK",
    type: "profile",
  },
};

export default function DoctorsCategoryPage() {
  // Define schema as a Person type and include the complete accurate postal address for the clinic
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr Mansoor Ahmad",
    jobTitle: "Senior Chief Surgeon and Medical Director",
    worksFor: {
      "@type": "MedicalClinic",
      name: "Hair Skill Clinic",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hotel MayFair 1st floor, 50-52, E - III, Commercial Zone, Gulberg III",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        postalCode: "54660",
        addressCountry: "PK"
      }
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