import type { Metadata } from "next";

// Exactly 3 levels up: (unshaven-transplant -> treatments -> app -> src) then into components
import UnshavenTransplantClient from "../../../../components/UnshavenTransplantClient";

export const metadata: Metadata = {
  title: "Unshaven Hair Transplant Without Shaving | Hair Skill Clinic Lahore Pakistan",
  description: "Maintain your existing hairstyle and keep your surgery entirely discreet. Explore advanced Unshaven FUE hair transplantation in Lahore Pakistan without shaving your recipient or donor areas.",
  keywords: ["Unshaven Hair Transplant Pakistan", "No Shave Hair Transplant Lahore", "Discreet Hair Transplant", "Unshaven FUE Pakistan", "Hair Skill Clinic Lahore", "Keep Surgery Secret"],
  openGraph: {
    title: "Unshaven Hair Transplant | Hair Skill Clinic",
    description: "Restore density flawlessly without sacrificing your existing long hair.",
    url: "https://www.hairskill.com/hair-transplant/treatments/unshaven-transplant",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/techniques/7.webp",
        width: 1200,
        height: 630,
        alt: "Split comparison of patient in orange shirt showing native forward styling versus un-shaved top recipient bed",
      },
    ],
  },
};

export default function UnshavenTransplantPage() {
  return <UnshavenTransplantClient />;
}