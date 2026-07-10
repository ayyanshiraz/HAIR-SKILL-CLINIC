import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { CartProvider } from "../context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Smile Hair Clinic`,
  description: `Professional clinical services`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={`en`}>
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
      </body>
    </html>
  );
}