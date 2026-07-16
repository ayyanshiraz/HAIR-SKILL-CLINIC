import type { Metadata } from "next";
import ContactClient from "../../components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Hair Skill Clinic Pakistan",
  description: "Get in touch with Hair Skill Clinic. Find our contact details, location in Lahore, Pakistan, and book a free consultation for your hair transplant.",
  keywords: ["Contact Hair Skill Clinic", "Hair Transplant Lahore", "Hair Clinic Pakistan", "Book Consultation", "Hair Skill Contact"],
  openGraph: {
    title: "Contact Us | Hair Skill Clinic",
    description: "Reach out to us to start your hair restoration journey today.",
    url: "https://www.hairskillclinic.com/contact",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/_next/image?url=%2Fhome%2Fowner1.webp&w=1080&q=75",
        width: 1200,
        height: 630,
        alt: "Contact Us | Hair Skill Clinic Pakistan",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}