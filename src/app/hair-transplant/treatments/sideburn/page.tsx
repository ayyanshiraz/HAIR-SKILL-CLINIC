import type { Metadata } from "next";
import SideburnClient from "../../../../components/SideburnClient";

export const metadata: Metadata = {
  title: "Sideburn Transplant & Restoration in Lahore | Hair Skill",
  description: "Restore even, natural sideburns in Lahore. We repair post-facelift distortion and fill asymmetrical gaps with precise micro-angle graft placement.",
  keywords: [
    "Sideburn Transplant Lahore",
    "Facial Hair Restoration Lahore",
    "Post Facelift Sideburn Repair",
    "Temporal Framing Restoration",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/sideburn",
  },
  openGraph: {
    title: "Sideburn Transplant & Restoration in Lahore | Hair Skill",
    description: "Restore even, natural sideburns in Lahore. We repair post-facelift distortion and fill asymmetrical gaps with precise micro-angle graft placement.",
    url: "https://www.hairskill.com/hair-transplant/treatments/sideburn",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/18.webp",
        width: 1200,
        height: 630,
        alt: "Doctor drawing precise sideburn restoration outline for natural facial framing at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function SideburnPage() {
  return <SideburnClient />;
}