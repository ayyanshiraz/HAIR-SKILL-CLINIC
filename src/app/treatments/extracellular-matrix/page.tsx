import type { Metadata } from "next";

// Exactly 3 levels up: (extracellular-matrix -> treatments -> app -> src) then into components
import ExtracellularMatrixClient from "../../../components/ExtracellularMatrixClient";

export const metadata: Metadata = {
  title: "Extracellular Matrix (EMP) Acell in Hair Restoration | Hair Skill Clinic",
  description: "Discover how Extracellular Matrix ECM Acell biological scaffolds enhance hair transplant graft survival, regenerate dormant follicles, and minimize donor scarring in Lahore Pakistan.",
  keywords: ["Acell Hair Transplant Pakistan", "Extracellular Matrix Lahore", "EMP Hair Restoration", "Porcine Scaffold Hair Transplant", "Hair Skill Clinic Lahore", "Follicle Regeneration"],
  openGraph: {
    title: "Extracellular Matrix (Acell) Hair Care | Hair Skill Clinic",
    description: "Advanced cellular regeneration scaffolds to maximize follicular survival.",
    url: "https://www.almadinahijamacenter.com/treatments/extracellular-matrix",
    siteName: "Hair Skill Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function ExtracellularMatrixPage() {
  return <ExtracellularMatrixClient />;
}