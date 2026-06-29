"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

// Safely mapped to your app data folder
import { countries, type Country } from "../data/countries";

// --- STRICT ANIMATION TUPLE ---
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

interface TransplantArticle {
  title: string;
  image: string;
  summary: string;
  link: string;
}

export default function HairTransplantClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Hair Transplant Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- COMPREHENSIVE GRID DATA (Verbatim from your 9 uploaded screenshot references) ---
  const transplantArticles: TransplantArticle[] = [
    {
      title: "Long FUE",
      image: "/hair-transplant/1.webp",
      summary: "Long FUE hair transplant in Pakistan is an advanced technique that allows hair transplantation without fully shaving the donor area.",
      link: "/treatments/long-fue"
    },
    {
      title: "Widows Peak Hair Transplant Create or Remove a V-Shaped Hairline",
      image: "/hair-transplant/2.webp",
      summary: "A widows peak hair transplant is one of the most precise hairline design procedures. Some people want to create a sharp V-shaped hairline while others want it removed.",
      link: "/treatments/widows-peak"
    },
    {
      title: "Best Hair Doctor Pakistan Top Surgeons for Hair Transplant in Lahore 2026",
      image: "/about/3.webp",
      summary: "Introduction What Makes a Hair Doctor the Best in Pakistan and Why It Matters. The best hair doctor in Pakistan combines world class surgical precision with artistry.",
      link: "/doctors"
    },
    {
      title: "Side Effects After Hair Transplant",
      image: "/hair-transplant/11.webp",
      summary: "Hair transplantation is considered one of the most dependable and successful treatments for hair loss. However as with any medical procedure there are temporary effects.",
      link: "/side-effects-after-hair-transplant"
    },
    {
      title: "Extracellular Matrix Products & Hair Transplant Using EMP Acell in Medicine",
      image: "/hair-transplant/12.webp",
      summary: "Acell refers to a regenerative medicine technology that uses an extracellular matrix ECM to stimulate tissue healing and protect newly transplanted follicular units.",
      link: "/treatments/extracellular-matrix"
    },
    {
      title: "Unshaven Transplant",
      image: "/home/techniques/7.webp",
      summary: "Unshaven Hair Transplant A Secret Between You and Your Doctor. The unshaven hair transplant has become a fantastic source of permanent happiness for working professionals.",
      link: "/treatments/unshaven-transplant"
    },
    {
      title: "Afro Hair Transplant",
      image: "/hair-transplant/13.webp",
      summary: "If you have been searching for a clinic that truly understands the unique needs of tightly coiled hair this page gives you the complete clarity you have been looking for.",
      link: "/treatments/afro-hair"
    },
    {
      title: "Sideburn Transplantation",
      image: "/hair-transplant/18.webp",
      summary: "A sideburn transplant is a focused detail driven procedure that restores shape density and balance to an area that defines the framing of your facial symmetry.",
      link: "/treatments/sideburn"
    },
    {
      title: "Moustache Transplant",
      image: "/hair-transplant/19.webp",
      summary: "If you have been thinking about a moustache transplant Pakistan treatment because your upper lip never fills in the way you want you have come to the right place.",
      link: "/treatments/moustache"
    },
    {
      title: "Female Hair Transplant",
      image: "/hair-transplant/21.webp",
      summary: "Losing hair as a woman feels different. It is not just about coverage. It is about how you see yourself in photos and how confidently you style your native hair.",
      link: "/treatments/female"
    },
    {
      title: "Needle-Free Anesthesia",
      image: "/hair-transplant/25.webp",
      summary: "Needle-Free Anesthesia Patients primary concern during surgical operations is the fear of feeling pain. Our advanced jet injection systems eliminate standard needles.",
      link: "/techniques/needle-free"
    },
    {
      title: "Hair Treatment Mesotherapy",
      image: "/hair-transplant/26.webp",
      summary: "Hair Treatment Mesotherapy in Pakistan is a targeted micro-injection method placing essential vitamins minerals and growth-supporting amino acids directly into the scalp.",
      link: "/treatments/mesotherapy"
    },
    {
      title: "Body Hair Transplant",
      image: "/home/techniques/5.webp",
      summary: "If you are reading about body hair transplant Pakistan you have probably already heard that the back of the head is the primary donor area. Here is how we utilize body reserves.",
      link: "/techniques/body"
    },
    {
      title: "Manuel Fue Hair Transplant",
      image: "/home/techniques/4.webp",
      summary: "Manuel Fue Hair Transplant is the flagship technique applied in hair transplantation where the grafts are extracted strictly one by one using manual precision tools.",
      link: "/techniques/manuel-fue"
    },
    {
      title: "Eyebrow Transplant",
      image: "/hair-transplant/24.webp",
      summary: "Natural brows change everything. They frame your eyes lift your expression and shape how confident you feel when you look in the mirror every morning.",
      link: "/treatments/eyebrow"
    },
    {
      title: "DHI Hair Transplant Pakistan",
      image: "/home/techniques/3.webp",
      summary: "Many people discover DHI hair transplant Pakistan when they start searching for a method that feels gentler more controlled and completely protects existing hairs.",
      link: "/techniques/dhi"
    },
    {
      title: "Sapphire Hair Transplant",
      image: "/home/techniques/2.webp",
      summary: "People often search sapphire hair transplant Pakistan hoping to understand whether this method truly delivers better micro-incision density and softer faster healing.",
      link: "/techniques/sapphire"
    },
    {
      title: "The Causes Diagnosis and Treatments of Female Hair Loss",
      image: "/hair-transplant/21.webp",
      summary: "Hair loss is a common issue that many women experience at some point in their lives. Understand the underlying hormonal and cellular factors driving female shedding.",
      link: "/female-hair-loss-guide"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24 overflow-x-hidden">
      
      {/* --- ASYMMETRIC HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-8 md:pb-12 bg-white px-4 sm:px-6"
      >
        <div className="max-w-[1400px] mx-auto relative">
          {/* Breadcrumbs pinned strictly to the left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <span className="text-[#772424]">Hair Transplant</span>
          </div>
          
          {/* Main Title centered independently */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Hair Transplant
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* LEFT COLUMN: 2-COLUMN RESPONSIVE ARTICLE CARDS GRID */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {transplantArticles.map((art, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.15 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 flex flex-col h-full group hover:border-[#772424] active:border-[#772424] hover:shadow-[0_20px_40px_-15px_rgba(119,36,36,0.15)] active:shadow-[0_20px_40px_-15px_rgba(119,36,36,0.15)] transition-all duration-300 shadow-lg"
                >
                  <Link href={art.link} className="flex flex-col flex-1 h-full block cursor-pointer select-none">
                    
                    <div className="w-full aspect-[16/10] overflow-hidden relative bg-gray-100 shrink-0">
                      <img 
                        src={art.image} 
                        alt={art.title} 
                        className="w-full h-full object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700 object-top" 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 group-active:bg-black/5 transition-colors duration-300" />
                    </div>
                    
                    <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-white">
                      <div>
                        <h2 className="text-lg sm:text-xl font-extrabold text-[#772424] mb-3 leading-snug group-hover:translate-x-0.5 group-active:translate-x-0.5 transition-transform">
                          {art.title}
                        </h2>
                        <p className="text-black text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                          {art.summary}
                        </p>
                      </div>
                      
                      <div className="text-[#772424] font-black text-sm tracking-wider uppercase flex items-center gap-2 group-hover:translate-x-1 group-active:translate-x-1 transition-transform w-fit">
                        More <span>→</span>
                      </div>
                    </div>

                  </Link>
                </motion.div>
              ))}
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

                  <div className="flex items-start sm:items-center gap-2 mt-2">
                    <input type="checkbox" id="mainTransplantPrivacy" required defaultChecked className="w-4 h-4 mt-0.5 sm:mt-0 accent-[#C5A059] rounded cursor-pointer shrink-0" />
                    <label htmlFor="mainTransplantPrivacy" className="text-xs text-white/80 cursor-pointer leading-relaxed">
                      I have read and accept the <Link href="/privacy-policy" className="text-[#C5A059] font-black hover:underline">Privacy Policy.</Link>
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