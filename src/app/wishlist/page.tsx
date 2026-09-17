import type { Metadata } from "next";
import dynamic from "next/dynamic";

const WishlistClient = dynamic(() => import("../../components/WishlistClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Saved Hair Systems & Products Wishlist | Hair Skill",
  description: "View your saved non-surgical hair systems, wigs, and maintenance products at Hair Skill Clinic Lahore. Compare your favorite items and plan your visit.",
  keywords: [
    "Saved Hair Systems Lahore",
    "Hair Wig Wishlist",
    "Hair Product Wishlist Lahore",
    "Hair Skill Wishlist",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/wishlist",
  },
  openGraph: {
    title: "Saved Hair Systems & Products Wishlist | Hair Skill",
    description: "View your saved non-surgical hair systems, wigs, and maintenance products at Hair Skill Clinic Lahore. Compare your favorite items and plan your visit.",
    url: "https://www.hairskill.com/wishlist",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Saved non-surgical hair systems and product wishlist at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function WishlistPage() {
  return <WishlistClient />;
}