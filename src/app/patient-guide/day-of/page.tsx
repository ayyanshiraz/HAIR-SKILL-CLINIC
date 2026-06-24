import type { Metadata } from "next";
import DayOfProcedureClient from "../../../components/DayOfProcedureClient";

export const metadata: Metadata = {
  title: "Operation Day Guide | Hair Skill Clinic Pakistan",
  description: "Read our comprehensive operation day itinerary for hair transplant surgeries in Lahore Pakistan. Find out about hotel stays, private shuttles, halal lunch options, and smart TV entertainment.",
  keywords: ["Operation Day Hair Transplant", "Hair Skill Clinic Care", "Hair Transplant Shuttle Pakistan", "Hair Surgery Steps", "Halal Food Hair Transplant"],
  openGraph: {
    title: "Operation Day Guide | Hair Skill Clinic",
    description: "Learn how we prepare you, extract follicles, and ensure your ultimate comfort during surgery.",
    url: "https://www.almadinahijamacenter.com/guide/day-of",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function DayOfProcedurePage() {
  return <DayOfProcedureClient />;
}