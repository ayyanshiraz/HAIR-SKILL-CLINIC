"use client";

import React, { useState } from "react";
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function ReviewsClient() {
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

  // Defeats Google Chrome forced white Autofill override
  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- REVIEWS DATA ---
  const reviews = [
    {
      author: "Talal Ahmed",
      text: "I traveled from the UK to Lahore for my hair transplant at Hair Skill Clinic. The doctors are true artists. The DHI method gave me incredible density, and the hairline design is absolutely perfect. It has been 8 months and the results are life-changing. Highly recommended!"
    },
    {
      author: "Ali Raza",
      text: "Amazing experience! From the consultation to the post-op care, the team at Hair Skill Clinic in Pakistan was phenomenal. I had 4000 grafts using the Sapphire FUE technique. The recovery was smooth, and the staff was available 24/7 on WhatsApp to answer all my questions."
    },
    {
      author: "Omar Shafique",
      text: "I was extremely nervous about getting a hair transplant, but the staff put me at ease immediately. The clinic is spotless, and the professionalism is unmatched in Lahore. My new hairline looks 100% natural, and no one can tell I had surgery."
    },
    {
      author: "Fahad Mazhar",
      text: "Best hair transplant clinic in Pakistan! The attention to detail during the planning phase was impressive. The entire procedure was virtually painless. Thank you, Hair Skill Clinic, for restoring my confidence."
    },
    {
      author: "Musa Ali",
      text: "Excellent service from start to finish. The transportation, hotel arrangements, and clinic facilities were world-class. The surgical team made sure I was comfortable the entire time. Very happy with my early results at month 4."
    },
    {
      author: "Salman Shehzad",
      text: "A truly 5-star experience. The post-operative support is fantastic. They check in on my progress regularly to ensure healthy hair growth. If you are considering a transplant in Pakistan, Hair Skill Clinic is the only place you should go."
    }
  ];

  // The Google Reviews URL provided by you
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
          {/* Breadcrumbs aligned left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <span className="text-[#772424]">Reviews</span>
          </div>
          {/* Heading aligned left */}
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Patient Reviews
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT SIDE: REVIEWS CONTENT */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-gray-200 pb-8">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  What Our Patients Say
                </h2>
                
                {/* Direct Google Reviews Link */}
                <a 
                  href={googleReviewsUrl}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-[#772424] text-[#772424] font-black rounded-xl hover:bg-[#772424] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
                  </svg>
                  Read All Google Reviews <span>→</span>
                </a>
              </motion.div>

              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={staggerContainer} 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {reviews.map((review, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={fadeUp} 
                    className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <div>
                      {/* 5 Stars */}
                      <div className="flex gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                        "{review.text}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200">
                      <div className="w-10 h-10 rounded-full bg-[#772424] text-white flex items-center justify-center font-black text-lg">
                        {review.author.charAt(0)}
                      </div>
                      <span className="text-[#772424] font-black text-lg">{review.author}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

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
                      I have read and accept the <Link href="/privacy-policy" className="text-[#C5A059] font-black hover:underline">Privacy Policy.</Link>
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