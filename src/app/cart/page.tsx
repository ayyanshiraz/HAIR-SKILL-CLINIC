import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CartClient = dynamic(() => import("../../components/CartClient"));

export const metadata: Metadata = {
  title: "Treatment Cart & Secure Booking | Hair Skill Clinic Lahore",
  description: "Review your selected hair transplant and scalp treatment bookings at Hair Skill Clinic Lahore. Proceed to a secure checkout for your hair restoration journey.",
  alternates: {
    canonical: "https://www.hairskill.com/cart",
  },
  robots: { 
    index: false, 
    follow: true 
  },
  openGraph: {
    title: "Treatment Cart & Secure Booking - Hair Skill Clinic",
    description: "Review your selected hair transplant and scalp treatment bookings at Hair Skill Clinic Lahore. Proceed to a secure checkout for your hair restoration journey.",
    url: "https://www.hairskill.com/cart",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/cart-og.jpg",
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