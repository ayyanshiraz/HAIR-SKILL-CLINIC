"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

import { countries, type Country } from "../data/countries";
import { blogsDatabase } from "../data/blogs";

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

export default function BlogsHairTransplantClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Hair Transplant Blog Category.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // Automatically pulls ONLY the hair transplant articles from your master database
  const categoryPosts = blogsDatabase.filter((post) => post.category === "hair-transplant");

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
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2 justify-start">
            <Link href="/" className="md:hover:text-[#772424] active:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/blogs" className="md:hover:text-[#772424] active:text-[#772424] transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-[#772424]">Hair Transplant</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Hair Transplant
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* LEFT COLUMN: FILTERED DATABASE CARDS GRID */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {categoryPosts.map((post, idx) => (
                <motion.div 
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 flex flex-col h-full group md:hover:border-[#772424] active:border-[#772424] md:hover:shadow-[0_20px_40px_-15px_rgba(119,36,36,0.15)] active:shadow-[0_20px_40px_-15px_rgba(119,36,36,0.15)] transition-all duration-300 shadow-lg"
                >
                  <Link href={`/blogs/${post.slug}`} className="flex flex-col flex-1 h-full block cursor-pointer">
                    
                    <div className="w-full aspect-[16/10] overflow-hidden relative bg-gray-100 shrink-0">
                      <img 
                        src={post.previewImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover md:group-hover:scale-105 group-active:scale-105 transition-transform duration-700 object-top" 
                      />
                      <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/5 group-active:bg-black/5 transition-colors duration-300" />
                    </div>
                    
                    <div className="p-8 flex flex-col flex-1 justify-between bg-white">
                      <div>
                        <h2 className="text-xl font-extrabold text-[#772424] mb-3 leading-snug md:group-hover:translate-x-0.5 group-active:translate-x-0.5 transition-transform">
                          {post.title}
                        </h2>
                        <p className="text-black text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                          {post.summary}
                        </p>
                      </div>
                      
                      <div className="text-[#772424] font-black text-sm tracking-wider uppercase flex items-center gap-2 md:group-hover:translate-x-1 group-active:translate-x-1 transition-transform w-fit">
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
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className="px-4 py-2.5 md:hover:bg-gray-100 active:bg-gray-100 cursor-pointer text-sm flex items-center justify-between text-black transition-colors">
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
                    <input type="checkbox" id="catPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="catPrivacy" className="text-xs text-white/80 cursor-pointer">
                      I have read and accept the <Link href="/privacy-policy" className="text-[#C5A059] font-black md:hover:underline active:underline">Privacy Policy.</Link>
                    </label>
                  </div>

                  <button type="submit" className="w-full py-4 bg-white md:hover:bg-gray-100 active:bg-gray-100 text-[#772424] font-extrabold rounded-xl transition-all tracking-wider text-sm mt-2 flex items-center justify-center gap-2 shadow-lg md:hover:scale-[1.02] active:scale-[0.99]">
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