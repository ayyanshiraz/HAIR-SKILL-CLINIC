import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { CartProvider } from "../context/CartContext";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hair Skill Clinic | Best Hair Transplant & Restoration in Lahore",
  description: "Welcome to Hair Skill, Lahore's premier medical clinic for advanced hair transplants, FUE, DHI, and non-surgical hair systems. Book your free consultation today.",
  keywords: [
    "Hair Skill",
    "Hair Skill Clinic Lahore",
    "Best Hair Transplant Lahore",
    "Hair Restoration Clinic Pakistan",
    "FUE & DHI Transplant Lahore",
    "Non-Surgical Hair Systems"
  ],
  metadataBase: new URL("https://www.hairskill.com"),
  openGraph: {
    title: "Hair Skill Clinic | Best Hair Transplant & Restoration in Lahore",
    description: "Welcome to Hair Skill, Lahore's premier medical clinic for advanced hair transplants, FUE, DHI, and non-surgical hair systems.",
    url: "https://www.hairskill.com",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-PK">
      <head>
        <meta name="google-site-verification" content="dua9CfBmUhUJTblfDmVuVVupQ8cV1ccHtmVnW4BRWiQ" />
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ERNEPZWKMR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-ERNEPZWKMR");
          `}
        </Script>
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