import type { Metadata } from "next";

// Exactly 3 levels up: (needle-free -> techniques -> app -> src) then into components
import NeedleFreeClient from "../../../../components/NeedleFreeClient";

export const metadata: Metadata = {
  title: "Needle-Free Anesthesia in FUE Hair Transplant | Hair Skill Clinic Lahore",
  description: "Overcome needle phobia during your hair restoration. Experience high-pressure jet injection local anesthesia for FUE and Sapphire hair transplantation in Lahore Pakistan.",
  keywords: ["Needle Free Anesthesia Pakistan", "FUE Hair Transplant Lahore", "Jet Injection Anesthesia", "Sapphire Hair Transplant Pakistan", "Hair Skill Clinic Lahore", "Painless Hair Transplant"],
  openGraph: {
    title: "Needle-Free Anesthesia | Hair Skill Clinic",
    description: "Medically proven high-pressure jet diffusion to minimize surgical anxiety.",
    url: "https://www.hairskill.com/hair-transplant/techniques/needle-free",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/techniques/8.webp",
        width: 1200,
        height: 630,
        alt: "Medical professional administering needle free jet injection anesthesia for hair transplant at Hair Skill Clinic",
      },
    ],
  },
};

export default function NeedleFreePage() {
  return <NeedleFreeClient />;
}