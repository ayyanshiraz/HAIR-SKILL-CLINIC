import type { Metadata } from "next";
import WhyChooseUsClient from "../../../components/WhyChooseUsClient";

export const metadata: Metadata = {
  title: "Why Choose Hair Skill Clinic? | Medical Excellence Lahore",
  description: "Discover why patients choose Hair Skill Clinic Lahore. We combine advanced medical precision with a patient-centered approach for globally trusted results.",
  keywords: ["Why Choose Hair Skill Clinic", "Medical Precision Lahore", "Patient-Centered Care", "Trusted Hair Restoration"],
  alternates: {
    canonical: "https://www.hairskill.com/about/why-choose-us",
  },
  openGraph: {
    title: "Why Choose Us - Medical Excellence at Hair Skill Clinic",
    description: "Discover why patients choose Hair Skill Clinic Lahore. We combine advanced medical precision with a patient-centered approach for globally trusted results.",
    url: "https://www.hairskill.com/about/why-choose-us",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "/about/why-choose-us-og.jpg",
        width: 1200,
        height: 630,
        alt: "Why Choose Hair Skill Clinic Lahore for Hair Restoration",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function WhyChooseUsPage() {
  return <WhyChooseUsClient />;
}