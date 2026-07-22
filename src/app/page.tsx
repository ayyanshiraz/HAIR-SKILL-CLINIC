import type { Metadata } from "next";
import HomePageClient from "../components/HomePageClient";

export const metadata: Metadata = {
  title: `Best Hair Transplant Clinic in Lahore | Hair Skill`,
  description: `Experience the best hair transplant in Lahore and Karachi. Hair Skill Clinic offers advanced hair restoration procedures with completely natural results.`,
};

export default function Page() {
  const schemaData = {
    "@context": `https://schema.org`,
    "@type": `MedicalClinic`,
    name: `Hair Skill Clinic`,
    description: `As the premier hair transplant clinic in Lahore we offer advanced restoration services and completely natural results`,
    url: `https://hairskill.com`,
    logo: `https://www.hairskill.com/home/logo.webp`,
    address: {
      "@type": `PostalAddress`,
      streetAddress: `Hotel MayFair 1st floor 50-52 E-III Commercial Zone Gulberg III`,
      addressLocality: `Lahore`,
      addressRegion: `Punjab`,
      postalCode: `54660`,
      addressCountry: `PK`
    },
    telephone: `+923014923336`,
    priceRange: `$$$`,
    medicalSpecialty: `Hair restoration and transplantation`
  };

  return (
    <>
      <script
        type={`application/ld+json`}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <HomePageClient />
    </>
  );
}