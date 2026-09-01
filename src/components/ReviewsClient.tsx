"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { countries, type Country } from "../data/countries";

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
  // --- WIDGET REFERENCE ---
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject script only once using a unique ID to prevent footer duplication
    const scriptId = "trustindex-script-tag";
    
    if (widgetRef.current && !document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.trustindex.io/loader.js?cdfb11f80722457ffb962d7efeb";
      script.async = true;
      script.defer = true;
      widgetRef.current.appendChild(script);
    }
  }, []);

  // --- FORM STATES ---
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
      
      {/* --- PAGE HEADER --- */}
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
            Top Hair Transplant Patient Reviews in Pakistan
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT SIDE: REVIEWS CONTENT */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-10 flex flex-col justify-between gap-6 border-b border-gray-200 pb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                    Real Success Stories from Lahore Karachi and Islamabad
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
                  Read authentic feedback from our satisfied clients across Pakistan. Discover why thousands trust our expert surgeons for FUE unshaven and manual punch hair restoration procedures.
                </p>
              </motion.div>

              {/* Trustindex Live Google Reviews Widget - LOCKED POSITION */}
              <div ref={widgetRef} className="w-full mt-2 min-h-[500px]"></div>

            </div>

            {/* RIGHT SIDE: STICKY CONSULTATION FORM */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="w-full lg:w-1/3 lg:sticky lg:top-32"
            >
              <div className="bg-[#772424] text-white rounded-3xl p-8 shadow-2xl relative w-full border border-[#8c2a2a]">
                <h3 className="text-white text-xl font-black text-center mb-8 tracking-wide">
                  GET FREE CONSULTATION
                </h3>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      aria-label="Full Name"
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                      required 
                      className="w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium" 
                      style={autofillFixStyle}
                    />
                  </div>
                  
                  <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors">
                    <input 
                      type="email" 
                      placeholder="E-mail" 
                      aria-label="Email Address"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                      className="w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium" 
                      style={autofillFixStyle}
                    />
                  </div>

                  <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors flex items-center relative">
                    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 cursor-pointer text-sm font-bold text-[#C5A059] select-none mr-3 shrink-0">
                      <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={selectedCountry.name} className="w-5 object-contain" />
                      <span>{selectedCountry.dial}</span>
                      <span className="text-[10px]">▼</span>
                    </div>
                    
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 shadow-2xl rounded-xl z-50">
                        {countries.map((country: Country, idx: number) => (
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className="px-4 py-2.5 hover:bg-gray-100 cursor-pointer text-sm flex items-center justify-between text-black transition-colors">
                            <div className="flex items-center gap-2.5 truncate mr-2">
                              <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} className="w-5 object-contain shrink-0" />
                              <span className="font-bold">{country.code}</span>
                              <span className="text-xs text-black truncate">{country.name}</span>
                            </div>
                            <span className="text-[#772424] font-black shrink-0">{country.dial}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      aria-label="Phone Number"
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      required 
                      className="w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium" 
                      style={autofillFixStyle}
                    />
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <input type="checkbox" id="reviewPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="reviewPrivacy" className="text-xs text-white/80 cursor-pointer">
                      I have read and accept the <Link href="/privacy-policy" className="text-[#C5A059] font-black hover:underline">Privacy Policy</Link>
                    </label>
                  </div>

                  <button type="submit" className="w-full py-4 bg-white hover:bg-gray-100 text-[#772424] font-extrabold rounded-xl transition-all tracking-wider text-sm mt-2 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]">
                    Submit <span>›</span>
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}