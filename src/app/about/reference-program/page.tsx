import type { Metadata } from "next";
// Goes up three levels (reference-program -> about -> app -> src) to reach the components folder
import ReferenceProgramClient from "../../../components/ReferenceProgramClient";

// --- SEO METADATA (SERVER SIDE) ---
export const metadata: Metadata = {
  title: "Hair Skill Reference Program | Hair Skill Clinic",
  description: "Join the Hair Skill Gentle Club. Refer a friend for a hair transplant in Pakistan and you both receive a 20% discount reward.",
  keywords: ["Hair Skill Reference Program", "Hair Transplant Discount", "Hair Skill Gentle Club", "Referral Program Pakistan"],
  openGraph: {
    title: "Hair Skill Reference Program",
    description: "Invite your friends to experience the best hair transplant in Pakistan. You and your friend both benefit from our 20% loyalty reward.",
    url: "https://www.almadinahijamacenter.com/about/reference-program",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "/about/reference-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Hair Skill Reference Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ReferenceProgramPage() {
  return (
    <main>
      <ReferenceProgramClient />
    </main>
  );
}