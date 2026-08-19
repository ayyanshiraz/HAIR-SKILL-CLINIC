import type { Metadata } from "next";
import CartClient from "../../components/CartClient";

export const metadata: Metadata = {
  title: "Treatment Cart & Secure Booking | Hair Skill Clinic Lahore",
  description: "Review your selected hair transplant and scalp treatment bookings at Hair Skill Clinic Lahore. Proceed to a secure checkout for your hair restoration journey.",
  keywords: ["Hair Skill Clinic Cart", "Hair Transplant Booking Lahore", "Secure Checkout Hair Treatment", "Book Hair Consultation Lahore"],
  alternates: {
    canonical: "https://www.hairskill.com/cart",
  },
  openGraph: {
    title: "Treatment Cart & Secure Booking - Hair Skill Clinic",
    description: "Review your selected hair transplant and scalp treatment bookings at Hair Skill Clinic Lahore. Proceed to a secure checkout for your hair restoration journey.",
    url: "https://www.hairskill.com/cart",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "/cart-og.jpg",
        width: 1200,
        height: 630,
        alt: "Secure Booking and Cart at Hair Skill Clinic Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function CartPage() {
  return <CartClient />;
}