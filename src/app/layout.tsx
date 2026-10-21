import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { CartProvider } from "../context/CartContext";
import { Analytics } from "@vercel/analytics/next";
import MobileStickyBar from "@/components/MobileStickyBar";

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
  const globalSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "MedicalBusiness"],
    name: "Hair Skill Clinic",
    description: "As the premier hair transplant clinic in Lahore, we offer advanced FUE, DHI, and Sapphire hair restoration services.",
    url: "https://www.hairskill.com",
    logo: "https://www.hairskill.com/home/logo.webp",
    image: "https://www.hairskill.com/home/owner1.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hotel MayFair 1st floor 50-52 E-III Commercial Zone Gulberg III",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54660",
      addressCountry: "PK"
    },
    telephone: "+923014923336",
    priceRange: "$$$",
    medicalSpecialty: ["Dermatology", "Hair Transplantation"],
    founder: {
      "@type": "Physician",
      name: "Dr. Mansoor Ahmad",
      identifier: "1535-P",
      medicalSpecialty: "Hair Transplantation"
    },
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "FUE Hair Transplant",
        procedureType: "SurgicalProcedure"
      },
      {
        "@type": "MedicalProcedure",
        name: "DHI Hair Transplant",
        procedureType: "SurgicalProcedure"
      }
    ]
  };

  return (
    <html lang="en-PK">
      <head>
        <meta name="google-site-verification" content="dua9CfBmUhUJTblfDmVuVVupQ8cV1ccHtmVnW4BRWiQ" />
        
        {/* Global MedicalClinic & Physician Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />

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
        <MobileStickyBar />
      </body>
    </html>
  );
}