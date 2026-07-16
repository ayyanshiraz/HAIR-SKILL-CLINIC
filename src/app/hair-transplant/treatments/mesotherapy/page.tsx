import type { Metadata } from "next";

// Exactly 3 levels up: (mesotherapy -> treatments -> app -> src) then into components
import MesotherapyClient from "../../../../components/MesotherapyClient";

export const metadata: Metadata = {
  title: "Hair Treatment Mesotherapy & Scalp Nutrition | Hair Skill Clinic Lahore",
  description: "Stop active hair shedding and strengthen weak follicles in Lahore Pakistan. Discover custom micro-injection mesotherapy vitamin cocktails inside accessible local PKR package tiers.",
  keywords: ["Hair Mesotherapy Pakistan", "Scalp Micro Injections Lahore", "Androgenetic Alopecia Care", "PRP and Mesotherapy Lahore", "Hair Skill Clinic Pakistan", "Stop Hair Shedding PKR"],
  openGraph: {
    title: "Hair Mesotherapy | Hair Skill Clinic",
    description: "Medically proven mesoderm vitamin infusions for authentic root density.",
    url: "https://www.hairskill.com/hair-transplant/treatments/mesotherapy",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/26.webp",
        width: 1200,
        height: 630,
        alt: "Doctor placing nutrient rich mesotherapy micro injections directly into patient scalp at Hair Skill Clinic",
      },
    ],
  },
};

export default function MesotherapyPage() {
  return <MesotherapyClient />;
}