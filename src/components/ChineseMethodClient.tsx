"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

// Safely mapped to your root app data folder
import { countries, type Country } from "../data/countries";

const customEase: [number, number, number, number] = [0.2, 0.65, 0.3, 0.9];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: customEase } 
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, delay: 0.2, ease: customEase } 
  }
};

export default function ChineseMethodClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Chinese Hair Transplant Method Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24 overflow-x-hidden">
      
      {/* --- ASYMMETRIC HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-8 md:pb-12 bg-white px-4 sm:px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          {/* Breadcrumbs strictly pinned to far left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] active:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/hair-transplant" className="hover:text-[#772424] active:text-[#772424] transition-colors">Hair Transplant</Link>
            <span>/</span>
            <span className="text-[#772424]">Chinese Hair Transplant Method</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Chinese Hair Transplant Method
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & HERO */}
            <div className="w-full lg:w-2/3 block">
              
              {/* Flagship Hero Visual */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/home/techniques/2.webp" 
                  alt="Surgeon performing specialized Chinese Hair Transplant Method at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] group-active:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
                
              </motion.div>

              {/* OVERVIEW SECTION */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  Chinese Hair Transplant Method
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The Chinese Hair Transplant Method is a specialized hair restoration approach designed to improve hair density and coverage while supporting healthy hair growth. The procedure is performed by experienced professionals using advanced techniques to achieve natural-looking results.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  To enhance the overall outcome, PRP (Platelet-Rich Plasma) therapy is recommended as part of the treatment plan.
                </p>
              </motion.div>

              {/* BENEFITS SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12">
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">Benefits of the Chinese Hair Transplant Method</h3>
                <div className="space-y-3 ml-1 sm:ml-2">
                  {[
                    "Improved hair density and coverage",
                    "Natural-looking hair growth",
                    "Advanced implantation techniques",
                    "Enhanced graft support",
                    "Comprehensive treatment approach"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                      <p className="text-black text-base md:text-lg font-bold">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* PRP RECOMMENDATION SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">PRP Therapy Recommendation</h3>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424] flex flex-col gap-4">
                  <p className="text-black text-base md:text-lg font-black text-[#772424]">
                    For optimal results, a total of 6 PRP sessions are recommended.
                  </p>
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-start gap-3">
                      <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                      <p className="text-black text-base md:text-lg font-bold">2 PRP sessions are included free of cost with the hair transplant procedure.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                      <p className="text-black text-base md:text-lg font-medium">The remaining 4 PRP sessions are chargeable and can be scheduled according to the treatment plan recommended by our specialists.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RECOVERY & AFTERCARE SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-4 pt-6 border-t border-gray-200">
                <h3 className="text-xl sm:text-2xl font-black text-[#772424]">Recovery & Aftercare</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Patients receive personalized aftercare instructions, medication guidance, and a PRP schedule to help maximize the success of their hair transplant and support long-term hair growth.
                </p>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: STICKY CONSULTATION FORM */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="w-full lg:w-1/3 lg:sticky lg:top-32"
            >
              <div className="bg-[#772424] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative w-full border border-[#8c2a2a]">
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
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className="px-4 py-2.5 hover:bg-gray-100 active:bg-gray-200 cursor-pointer text-sm flex items-center justify-between text-black transition-colors">
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

                  <div className="flex items-start sm:items-center gap-2 mt-2">
                    <input type="checkbox" id="chinesePrivacy" required defaultChecked className="w-4 h-4 mt-0.5 sm:mt-0 accent-[#C5A059] rounded cursor-pointer shrink-0" />
                    <label htmlFor="chinesePrivacy" className="text-xs text-white/80 cursor-pointer leading-relaxed">
                      I have read and accept the <Link href="/privacy-policy" className="text-[#C5A059] font-black hover:underline active:underline">Privacy Policy.</Link>
                    </label>
                  </div>

                  <button type="submit" className="w-full py-4 bg-white hover:bg-gray-100 active:bg-gray-200 text-[#772424] font-extrabold rounded-xl transition-all tracking-wider text-sm mt-2 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98]">
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