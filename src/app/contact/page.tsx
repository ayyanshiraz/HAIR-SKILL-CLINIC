import type { Metadata } from "next";
import ContactClient from "../../components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Hair Skill Clinic | Book Consultation in Lahore",
  description: "Get in touch with Hair Skill Clinic in Lahore to book your hair transplant consultation. Call or visit us today to start your hair restoration journey.",
  keywords: ["Contact Hair Skill Clinic", "Book Hair Consultation Lahore", "Hair Transplant Clinic Address", "Hair Clinic Phone Number Lahore"],
  alternates: {
    canonical: "https://www.hairskill.com/contact",
  },
  openGraph: {
    title: "Contact Hair Skill Clinic | Book Consultation in Lahore",
    description: "Get in touch with Hair Skill Clinic in Lahore to book your hair transplant consultation. Call or visit us today to start your hair restoration journey.",
    url: "https://www.hairskill.com/contact",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Contact Hair Skill Clinic in Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}