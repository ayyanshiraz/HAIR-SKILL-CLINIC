import type { Metadata } from "next";
// Goes up three levels (ethics -> about -> app -> src) to reach the components folder
import CodeOfEthicsClient from "../../../components/CodeOfEthicsClient";

// --- SEO METADATA (SERVER SIDE) ---
export const metadata: Metadata = {
  title: "Code of Ethics | Hair Skill Clinic",
  description: "Learn about the ethical approach at Hair Skill Clinic. We place honesty, transparency, patient safety, and confidentiality at the core of everything we do.",
  keywords: ["Hair Skill Clinic Ethics", "Patient Safety", "Hair Transplant Ethics", "Hair Skill Clinic Pakistan"],
  openGraph: {
    title: "Code of Ethics | Hair Skill Clinic",
    description: "Discover our commitment to transparency, equality, and patient safety at Hair Skill Clinic.",
    url: "https://www.almadinahijamacenter.com/about/ethics",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "/about/ethics-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Hair Skill Clinic Building",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CodeOfEthicsPage() {
  return (
    <main>
      <CodeOfEthicsClient />
    </main>
  );
}