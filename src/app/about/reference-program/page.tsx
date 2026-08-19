import type { Metadata } from "next";
import ReferenceProgramClient from "../../../components/ReferenceProgramClient";

export const metadata: Metadata = {
  title: "Reference Program & Rewards | Hair Skill Clinic Lahore",
  description: "Join the Hair Skill Gentle Club Reference Program. Refer a friend for their hair restoration journey in Lahore and both of you earn a 20% discount reward.",
  keywords: ["Clinic Reference Program", "Patient Referral Discount", "Hair Skill Gentle Club", "Loyalty Rewards Lahore"],
  alternates: {
    canonical: "https://www.hairskill.com/about/reference-program",
  },
  openGraph: {
    title: "Reference Program & Rewards - Hair Skill Clinic",
    description: "Join the Hair Skill Gentle Club Reference Program. Refer a friend for their hair restoration journey in Lahore and both of you earn a 20% discount reward.",
    url: "https://www.hairskill.com/about/reference-program",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "/about/reference-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Hair Skill Clinic Reference Program and Rewards",
      },
    ],
    locale: "en_PK",
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