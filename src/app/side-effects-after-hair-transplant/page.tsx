import type { Metadata } from "next";

// Exactly 3 levels up: (side-effects-after-hair-transplant -> blog -> app -> src) then into components
import SideEffectsClient from "../../components/SideEffectsClient";

export const metadata: Metadata = {
  title: "Side Effects After Hair Transplant & How to Reduce Them | Hair Skill Clinic",
  description: "Learn about common short-term hair transplant side effects in Lahore Pakistan including temporary swelling, scalp itching, and shock loss. Discover how our cleanroom hygiene minimizes risks.",
  keywords: ["Hair Transplant Side Effects", "Scalp Swelling Pakistan", "Shock Loss Lahore", "Folliculitis Care Pakistan", "Hair Skill Clinic Hygiene", "Reduce Surgical Hazards"],
  openGraph: {
    title: "Side Effects After Hair Transplant | Hair Skill Clinic",
    description: "Medically proven post-operative instructions for a comfortable, risk-free recovery.",
    url: "https://www.almadinahijamacenter.com/hair-transplant/side-effects-after-hair-transplant",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function SideEffectsPage() {
  return <SideEffectsClient />;
}