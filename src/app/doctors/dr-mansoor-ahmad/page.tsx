import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const DoctorsCategoryClient = dynamic(() => import("../../../components/DoctorsCategoryClient"));

export const metadata: Metadata = {
  title: "Dr Mansoor Ahmad | Hair Transplant Surgeon in Lahore",
  description: "Review the verified credentials and 40 years of surgical experience of Dr Mansoor Ahmad, the senior hair transplant surgeon at Hair Skill.",
  alternates: {
    canonical: "https://www.hairskill.com/doctors/dr-mansoor-ahmad",
  },
  openGraph: {
    title: "Dr Mansoor Ahmad | Hair Transplant Surgeon in Lahore",
    description: "Review the verified credentials and 40 years of surgical experience of Dr Mansoor Ahmad, the senior hair transplant surgeon at Hair Skill.",
    url: "https://www.hairskill.com/doctors/dr-mansoor-ahmad",
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
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://www.hairskill.com/doctors/dr-mansoor-ahmad#physician",
    name: "Dr Mansoor Ahmad",
    jobTitle: "Senior Chief Surgeon and Medical Director",
    url: "https://www.hairskill.com/doctors/dr-mansoor-ahmad",
    image: "https://www.hairskill.com/dr-mansoor-ahmad.webp",
    worksFor: {
      "@id": "https://www.hairskill.com/#clinic",
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
    identifier: {
      "@type": "PropertyValue",
      propertyID: "PMDC Registration Number",
      value: "1535-P"
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "MBBS",
        dateCreated: "1979",
        recognizedBy: { "@type": "CollegeOrUniversity", name: "Quaid-e-Azam Medical College, Bahawalpur" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "MCPS (General Surgery)",
        dateCreated: "1983",
        recognizedBy: { "@type": "Organization", name: "College of Physicians and Surgeons Pakistan" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Master of Hospital Management",
        dateCreated: "2014",
        recognizedBy: { "@type": "CollegeOrUniversity", name: "University of Health Sciences, Lahore" }
      }
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema).replace(/</g, "\\u003c") }}
      />
      <DoctorsCategoryClient />
    </>
  );
}