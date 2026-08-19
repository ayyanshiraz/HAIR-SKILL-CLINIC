import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { CartProvider } from "../context/CartContext";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advanced Hair Transplant Clinic in Lahore | Hair Skill",
  description: "Hair Skill Clinic is Lahore's leading center for advanced hair transplant and non-surgical hair restoration. Experience natural results and expert care.",
  keywords: [
    "Hair Transplant Lahore",
    "Hair Restoration Clinic",
    "FUE Hair Transplant Lahore",
    "Hair Systems Lahore",
    "Hair Skill Clinic"
  ],
  metadataBase: new URL("https://www.hairskill.com"),
  openGraph: {
    title: "Advanced Hair Transplant Clinic in Lahore | Hair Skill",
    description: "Hair Skill Clinic is Lahore's leading center for advanced hair transplant and non-surgical hair restoration. Experience natural results and expert care.",
    url: "https://www.hairskill.com",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-PK">
      <head>
        <meta name="google-site-verification" content="dua9CfBmUhUJTblfDmVuVVupQ8cV1ccHtmVnW4BRWiQ" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>
          <CartProvider>
            {children}
          </CartProvider>
        </main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}