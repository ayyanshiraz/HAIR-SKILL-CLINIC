import type { Metadata } from "next";
import DhiClient from "../../../../components/DhiClient";

export const metadata: Metadata = {
  title: "DHI Hair Transplant in Lahore | Choi Pen | Hair Skill",
  description: "Achieve a flawless hairline with an advanced DHI hair transplant in Lahore. We use Choi Implanter Pens for direct implantation and natural angle control.",
  keywords: [
    "DHI Hair Transplant Lahore",
    "Direct Hair Implantation Lahore",
    "Choi Implanter Pen Lahore",
    "No Incision Hair Transplant",
    "DHI Hairline Hair Skill"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/dhi",
  },
  openGraph: {
    title: "DHI Hair Transplant in Lahore | Choi Pen | Hair Skill",
    description: "Achieve a flawless hairline with an advanced DHI hair transplant in Lahore. We use Choi Implanter Pens for direct implantation and natural angle control.",
    url: "https://www.hairskill.com/hair-transplant/treatments/dhi",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/techniques/3.webp",
        width: 1200,
        height: 630,
        alt: "Surgeon holding specialized Choi implanter pen for Direct Hair Implantation DHI at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function DhiPage() {
  return <DhiClient />;
}