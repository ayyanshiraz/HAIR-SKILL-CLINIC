"use client";

import React, { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Script from "next/script";

import dynamic from "next/dynamic";
const ConsultationForm = dynamic(() => import("./ConsultationForm"), { ssr: false });


// --- STRICT ANIMATION TUPLE ---
const customEase: [number, number, number, number] = [0.2, 0.65, 0.3, 0.9];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: customEase 
    } 
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      delay: 0.2,
      ease: customEase 
    } 
  }
};

export default function ReviewsClient() {
  // --- FORM STATES ---
  
  const [isMounted, setIsMounted] = useState(false);

  // Defer third party widget rendering to fix page size and LCP issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Reviews Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  const googleReviewsUrl = "https://www.google.com/search?sca_esv=bf5b70d178609590&rlz=1C1GCEA_enPK1195PK1195&sxsrf=APpeQnvA9GXi7iUd3-Yz6IMWIUwKJbuU4Q:1782145604401&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-__wSd6NV-ZVxJuhvs5cLT_bSl9pMvKjj6iPC54pNuHuI4OpBZpeJk4pMlLlMA0BrMLtjnt7ATd5NRCqE3kOIE8ERS5LkYl7MiiOzWRDbK-WnGy-v8OirwYOoX_FKE_OMN3C24tIuOo8vbo6-0nXhNh80SS_8p7ziPhAvLqiD_hIkA7Kk2rXjPnwDZ8qu6q9nyxwv5PFRSWDNh2SuwaIfqu8N2gibt6FwlTCpge5xBl16mrfiPBwJmamRFEhRnjc27J8vXtcl80ybaW-FzvfsQm0mc8XFdjdoIkGnN4V3wd1W9QlnL9N2z1d6zUJcC32UsY9Anjh8PodWFbZKefK6JSli-_S9&q=%F0%9D%97%9B%F0%9D%97%AE%F0%9D%97%B6%F0%9D%97%BF+%F0%9D%97%A6%F0%9D%97%B8%F0%9D%97%B6%F0%9D%97%B9%F0%9D%97%B9+-+%F0%9D%97%99%F0%9D%97%A8%F0%9D%97%98+%F0%9D%90%83%F0%9D%90%87%F0%9D%90%88+%F0%9D%97%9B%F0%9D%97%AE%F0%9D%97%B6%F0%9D%97%BF+%F0%9D%97%A7%F0%9D%97%BF%F0%9D%97%AE%F0%9D%97%BB%F0%9D%98%80%F0%9D%97%BD%F0%9D%97%B9%F0%9D%97%AE%F0%9D%97%BB%F0%9D%98%81+%F0%9D%97%96%F0%9D%97%B9%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B6%F0%9D%97%B0+%F0%9D%97%9F%F0%9D%97%AE%F0%9D%97%B5%F0%9D%97%BC%F0%9D%97%BF%F0%9D%97%B2+%F0%9D%97%A3%F0%9D%97%AE%F0%9D%97%B8%F0%9D%97%B6%F0%9D%98%80%F0%9D%98%81%F0%9D%97%AE%F0%9D%97%BB+Reviews&sa=X&ved=2ahUKEwjCrsDdoZuVAxVEuUwKHZO7HDwQ0bkNegQIQBAF&biw=1536&bih=703&dpr=1.25";

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-gray-50 border-b border-gray-200 px-6"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <span className="text-[#772424]">Reviews</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Top Patient Reviews and Success Stories in Pakistan
          </h1>
        </div>
      </motion.section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <div className="w-full lg:w-2/3 flex flex-col">
              
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-10 flex flex-col justify-between gap-6 border-b border-gray-200 pb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                    Real Feedback from Lahore Karachi and Islamabad
                  </h2>
                  
                  <a 
                    href={googleReviewsUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-[#772424] text-[#772424] font-black rounded-xl hover:bg-[#772424] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
                    </svg>
                    Read All Google Reviews <span>→</span>
                  </a>
                </div>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
                  Read authentic feedback from our satisfied clients across Pakistan. Discover why thousands trust our expert surgeons for FUE unshaven and manual punch follicular restoration procedures.
                </p>
              </motion.div>

              {isMounted && (
                <div className="w-full mt-2 min-h-[500px]">
                  <div className="elfsight-app-95daa7bb-153e-44ba-a166-46c5244ebf09" data-elfsight-app-lazy></div>
                </div>
              )}

            </div>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="w-full lg:w-1/3 lg:sticky lg:top-32"
            >
              <ConsultationForm />
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}