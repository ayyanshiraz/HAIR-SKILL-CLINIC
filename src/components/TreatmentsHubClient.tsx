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

export default function TreatmentsHubClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Master Treatments Hub.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- 11 MASTER TREATMENTS CARDS (Exactly matching the dropdown items, deduplicated & build-safe) ---
  const treatmentsList = [
    {
      title: "Manual Fue Hair Transplant",
      desc: "Experience the precision of Manual FUE Hair Transplant for seamless and natural looking hair restoration results...",
      img: "/home/techniques/4.webp",
      href: "/techniques/manual-fue"
    },
    {
      title: "DHI Hair Transplant",
      desc: "Direct Hair Implantation DHI offers advanced placement for maximum density and natural growth without prior shaving...",
      img: "/home/techniques/3.webp",
      href: "/techniques/dhi"
    },
    {
      title: "FUE By Moterize Method",
      desc: "The Motorized FUE method ensures highly efficient and precise extraction for optimal hair transplant outcomes...",
      img: "/home/techniques/1.webp",
      href: "/treatments/fue-by-moterize"
    },
    {
      title: "Chinese Method",
      desc: "Explore the specialized Chinese Method for hair restoration uniquely tailored to specific hair and scalp characteristics...",
      img: "/hair-transplant/35.webp",
      href: "/treatments/chinese"
    },
    {
      title: "Hair Transplant",
      desc: "What is a Hair Transplant and Why Does It Matter? Hair transplantation is a surgical relocation of healthy hair follicles from donor...",
      img: "/hair-transplant/treatments/1.webp",
      href: "/hair-transplant"
    },
    {
      title: "Beard Transplant",
      desc: "If you are searching for a beard transplant Pakistan guide that feels honest calm and grounded in real treatment experience you ar...",
      img: "/hair-transplant/treatments/2.webp",
      href: "/treatments/beard-transplant"
    },
    {
      title: "Moustache Transplant",
      desc: "If you have been thinking about a moustache transplant Pakistan treatment because your upper lip never fills in the way you want you...",
      img: "/hair-transplant/19.webp",
      href: "/treatments/moustache"
    },
    {
      title: "Eyebrow Transplant",
      desc: "Natural brows change everything. They frame your eyes lift your expression and shape how confident you feel when you look in the mirror...",
      img: "/hair-transplant/24.webp",
      href: "/treatments/eyebrow"
    },
    {
      title: "Female Hair Transplant",
      desc: "Losing hair as a woman feels different. It is not just about coverage. It is about how you see yourself in photos how confidently you style...",
      img: "/hair-transplant/21.webp",
      href: "/treatments/female"
    },
    {
      title: "Afro Hair Transplant",
      desc: "If you have been searching for a clinic that truly understands the needs of tightly coiled hair this page gives you the clarity you have been...",
      img: "/hair-transplant/13.webp",
      href: "/treatments/afro-hair"
    },
    {
      title: "Sideburn Transplantation",
      desc: "A sideburn transplant is a focused detail-driven procedure that restores shape density and balance to an area that defines the fram...",
      img: "/hair-transplant/18.webp",
      href: "/treatments/sideburn"
    },
    {
      title: "Mesotherapy",
      desc: "Hair Treatment Mesotherapy in Pakistan is a targeted micro-injection method placing vitamins minerals and growth-supporting...",
      img: "/hair-transplant/26.webp",
      href: "/treatments/mesotherapy"
    },
    {
      title: "Ozone Hair Therapy",
      desc: "Ozone therapy for hair is a targeted scalp treatment that uses controlled medical ozone to support follicles calm inflammation and...",
      img: "/hair-transplant/treatments/4.webp",
      href: "/treatments/ozone-hair-therapy"
    },
    {
      title: "PRP Hair Treatment",
      desc: "PRP hair treatment is a medical procedure that uses your own blood to support weaker follicles. At Hair Skill Clinic PRP hair treatment...",
      img: "/hair-transplant/treatments/8.webp",
      href: "/treatments/prp-hair-treatment"
    },
    {
      title: "Exosome Hair Therapy",
      desc: "Exosome hair therapy represents the latest frontier in cellular regeneration delivering potent growth supportive signals directly to dormant...",
      img: "/hair-transplant/treatments/12.webp",
      href: "/treatments/exosome-hair-therapy"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
      {/* --- ASYMMETRIC HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-white px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          {/* Breadcrumbs strictly pinned to far left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <span className="text-[#772424]">Treatments</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Treatments
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: 2-COLUMN TREATMENTS GRID */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {treatmentsList.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    variants={fadeUp}
                    className="flex flex-col"
                  >
                    <Link 
                      href={item.href} 
                      className="group bg-gray-50 border border-gray-200/80 rounded-3xl overflow-hidden flex flex-col justify-between h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 border-[#772424]/10"
                    >
                      <div>
                        <div className="w-full aspect-[16/10] overflow-hidden bg-gray-200 relative">
                          <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-top" 
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        </div>
                        
                        <div className="p-6">
                          <h2 className="text-xl font-black text-[#772424] mb-3 group-hover:text-black transition-colors leading-snug">
                            {item.title}
                          </h2>
                          <p className="text-black text-sm leading-relaxed font-medium line-clamp-3">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-2">
                        <span className="text-[#772424] font-black text-sm tracking-wider group-hover:translate-x-1.5 inline-block transition-transform flex items-center gap-1">
                          More <span>›</span>
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: STICKY CONSULTATION FORM */}
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
                    <input type="checkbox" id="hubPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="hubPrivacy" className="text-xs text-white/80 cursor-pointer">
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