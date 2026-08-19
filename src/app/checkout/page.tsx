import type { Metadata } from "next";
import CheckoutClient from "../../components/CheckoutClient";

export const metadata: Metadata = {
  title: "Secure Checkout & Appointment | Hair Skill Clinic Lahore",
  description: "Finalize your hair transplant or PRP therapy booking at Hair Skill Clinic Lahore. Complete our secure checkout process to begin your hair restoration journey.",
  keywords: ["Secure Checkout Hair Skill", "Finalize Hair Transplant Booking", "Book PRP Appointment Lahore", "Hair Clinic Checkout Lahore"],
  alternates: {
    canonical: "https://www.hairskill.com/checkout",
  },
  openGraph: {
    title: "Secure Checkout & Appointment - Hair Skill Clinic Lahore",
    description: "Finalize your hair transplant or PRP therapy booking at Hair Skill Clinic Lahore. Complete our secure checkout process to begin your hair restoration journey.",
    url: "https://www.hairskill.com/checkout",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/checkout.webp",
        width: 1200,
        height: 630,
        alt: "Secure Checkout and Appointment Booking at Hair Skill Clinic Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}