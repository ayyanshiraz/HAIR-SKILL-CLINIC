import type { Metadata } from "next";
import ManuelFueClient from "../../../../components/ManualFueClient";

export const metadata: Metadata = {
  title: "Manual FUE Hair Transplant in Lahore | Hair Skill",
  description: "Get a highly controlled Manual FUE hair transplant in Lahore. We use one-by-one manual punch extraction to ensure maximum graft survival and pristine quality.",
  keywords: [
    "Manual FUE Transplant Lahore",
    "Manual Graft Extraction Lahore",
    "Micro FUE Hair Transplant",
    "One by One Follicle Extraction",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-transplant/treatments/manual-fue",
  },
  openGraph: {
    title: "Manual FUE Hair Transplant in Lahore | Hair Skill",
    description: "Get a highly controlled Manual FUE hair transplant in Lahore. We use one-by-one manual punch extraction to ensure maximum graft survival and pristine quality.",
    url: "https://www.hairskill.com/hair-transplant/treatments/manual-fue",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/techniques/4.webp",
        width: 1200,
        height: 630,
        alt: "Doctor performing precise manual FUE one-by-one graft extraction at Hair Skill Clinic Lahore",
      },
    ],
  },
};

export default function ManuelFuePage() {
  return <ManuelFueClient />;
}