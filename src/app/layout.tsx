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
import MotionProvider from "../components/MotionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Hair Skill Clinic | Best Hair Transplant in Lahore",
    template: "%s | Hair Skill Clinic"
  },
  description: "Looking for the best hair transplant in Lahore? Hair Skill Clinic offers advanced FUE, DHI, and hair restoration surgery. Book your free consultation!",
  metadataBase: new URL("https://www.hairskill.com"),
  openGraph: {
    title: "Hair Skill Clinic | Best Hair Transplant & Restoration in Lahore",
    description: "Welcome to Hair Skill, Lahore's premier medical clinic for advanced hair transplants, FUE, DHI, and non-surgical hair systems.",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Hair Skill Clinic Lahore",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.5074", 
      longitude: "74.3490"
    },
    hasMap: "https://maps.google.com/?q=Hair+Skill+Clinic+Lahore",
    sameAs: [
      "https://www.facebook.com/share/1H7FzSj5Uf/",
      "https://www.instagram.com/hairskillclinic",
      "https://youtube.com/@Hairskillclinic",
      "https://www.tiktok.com/@hair_skill"
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "11:00",
        closes: "20:00"
      }
    ],
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
        {/* Changed <main> to <div> to fix semantic HTML nested main error */}
        <div className="w-full flex-grow">
          <CartProvider>
            <MotionProvider>
              {children}
            </MotionProvider>
          </CartProvider>
        </div>
        <Footer />
        <CookieBanner />
        <Analytics />
        <MobileStickyBar />
      </body>
    </html>
  );
}