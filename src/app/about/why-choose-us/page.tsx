import type { Metadata } from "next";
// Three ../ steps climb out of /app/why-choose-us to reach /components
import WhyChooseUsClient from "../../../components/WhyChooseUsClient";

export const metadata: Metadata = {
  title: `Why Choose Us | Hair Skill Clinic Pakistan`,
  description: `Find out why Hair Skill Clinic is the trusted destination for hair transplants in Pakistan. We offer patient-centered approaches, advanced medical precision, and globally recognized excellence.`,
};

export default function WhyChooseUsPage() {
  return <WhyChooseUsClient />;
}