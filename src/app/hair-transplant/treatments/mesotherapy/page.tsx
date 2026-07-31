import type { Metadata } from "next";
import MesotherapyClient from "../../../../components/MesotherapyClient";

export const metadata: Metadata = {
  title: "Hair Mesotherapy & Scalp Nutrition in Lahore | Hair Skill",
  description: "Stop active hair shedding with advanced hair mesotherapy in Lahore. We use custom micro-injections of scalp vitamins to strengthen weak follicles naturally.",
  keywords: [
    "Hair Mesotherapy Lahore",
    "Scalp Micro Injections Lahore",
    "Stop Hair Shedding Lahore",
    "Hair Loss Treatment Lahore",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/mesotherapy",
  },
  openGraph: {
    title: "Hair Mesotherapy & Scalp Nutrition in Lahore | Hair Skill",
    description: "Stop active hair shedding with advanced hair mesotherapy in Lahore. We use custom micro-injections of scalp vitamins to strengthen weak follicles naturally.",
    url: "https://www.hairskill.com/hair-transplant/treatments/mesotherapy",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hair-transplant/26.webp",
        width: 1200,
        height: 630,
        alt: "Doctor performing nutrient-rich hair mesotherapy micro-injections at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function MesotherapyPage() {
  return <MesotherapyClient />;
}