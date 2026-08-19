import type { Metadata } from "next";
import CookiePolicyClient from "../../components/CookiePolicyClient";

export const metadata: Metadata = {
  title: "Cookie Policy & Tracking Info | Hair Skill Clinic Lahore",
  description: "Read the Cookie Policy of Hair Skill Clinic Lahore. Learn how we use cookies and tracking technologies to enhance your browsing experience and protect privacy.",
  keywords: ["Cookie Policy Hair Skill", "Website Tracking Policy", "Privacy and Cookies Lahore", "Clinic Website Data Usage"],
  alternates: {
    canonical: "https://www.hairskill.com/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy & Tracking Info - Hair Skill Clinic Lahore",
    description: "Read the Cookie Policy of Hair Skill Clinic Lahore. Learn how we use cookies and tracking technologies to enhance your browsing experience and protect privacy.",
    url: "https://www.hairskill.com/cookie-policy",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/cookie-policy.webp",
        width: 1200,
        height: 630,
        alt: "Cookie Policy of Hair Skill Clinic Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function CookiePolicyPage() {
  return <CookiePolicyClient />;
}