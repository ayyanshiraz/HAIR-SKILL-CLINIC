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

export default function SideEffectsClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Side Effects Treatment Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
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
        className="pt-28 lg:pt-36 pb-12 bg-white px-4 sm:px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          {/* Breadcrumbs strictly pinned to far left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/hair-transplant" className="hover:text-[#772424] transition-colors">Hair Transplant</Link>
            <span>/</span>
            <span className="text-[#772424]">Side Effects After Hair Transplant</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Side Effects After Hair Transplant
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch lg:items-start w-full">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* Main Scalp Hero Visual */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/hair-transplant/11.webp" 
                  alt="Close up of patient scalp during early post operative healing phase showing newly placed follicular units" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-top" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 sm:left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-3 sm:px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Post Operative Healing, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Hair transplantation is considered one of the most dependable and successful treatments for hair loss. However as with any medical procedure side effects can occur. Being well-informed about these side effects and how they can be minimized is crucial for patients considering this treatment.
                </p>
              </motion.div>

              {/* Section: Most Seen Side Effects */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  Most Seen Hair Transplant Side Effects
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Swelling</h3>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-3">
                      Swelling is a common side effect after hair transplantation especially around the eyes and forehead. Additionally people may get bruises around their eyes. Closely adhering to post-operative care instructions can considerably decrease swelling and typically vanishes in a few days.
                    </p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-5 rounded-2xl border-l-4 border-[#772424]">
                      You do not need to seek medical attention because swelling is merely a cosmetic inconvenience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Itching</h3>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      Itching is a common reaction during the healing process. It may be uncomfortable but it usually goes away in a week. Relief is frequently achieved with gentle washing and prescribed drugs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Pain and Unease</h3>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-3">
                      Its common to experience some minor pain or discomfort following the procedure. Painkillers prescribed by the doctor can easily stop the pain.
                    </p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium bg-gray-50 p-5 rounded-2xl border-l-4 border-[#772424]">
                      If you start to experience pain in the donor zone after one week from the hair transplant a cream that has hydrocortisone in it will reduce the pain significantly.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Contamination</h3>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      Although infections are uncommon they can happen if proper hygiene practices are not followed. Choosing a trustworthy clinic lowers this risk considerably.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Hemorrhage</h3>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      Following surgery there may be some minor bleeding or spotting right away. Gently pressing on the problem usually fixes it quickly.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Short-Term Hair Loss</h3>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      Following hair transplantation temporary thinning also referred to as shock loss is typical. As new hair growth starts it usually goes away in a few months.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Uncommon Side Effects */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Uncommon Side Effects
                </h2>

                <div className="space-y-5 ml-2">
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">
                      <span className="font-extrabold text-[#772424]">Scarring:</span> Inadequate procedure practices may result in visible scarring which is uncommon with contemporary techniques.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">
                      <span className="font-extrabold text-[#772424]">Folliculitis:</span> This disorder which is an inflammation of the hair follicles can happen but is typically treated with topical medications.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Why Pick Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-6 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Why Pick Hair Skill Clinic to Reduce Hazards?
                </h2>
                
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  With careful procedure protocols highly skilled physicians and medical teams Hair Skill Clinic in Lahore considerably lowers the risk of side effects. The clinic uses cutting-edge hair transplantation techniques like motorized Follicular Unit Extraction FUE which significantly reduces the possibility of visible scarring and speeds up healing.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Their meticulous post-operative care instructions hair transplant design planning and emphasis on hygiene guarantee a quicker recovery with fewer side effects and discomfort. The medical staff at Hair Skill Clinics vast experience and specialized training greatly benefit patients by improving their procedures safety and success rates.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  It is crucial to comprehend possible adverse effects when contemplating a hair transplant procedure. Selecting a trustworthy facility such as Hair Skill Clinic lowers risks considerably and guarantees that patients get the best results comfortably and safely.
                </p>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: STICKY CONSULTATION FORM */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="w-full lg:w-1/3 lg:sticky lg:top-32 mt-4 lg:mt-0"
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
                    <input type="checkbox" id="sePrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer mt-0.5 sm:mt-0 shrink-0" />
                    <label htmlFor="sePrivacy" className="text-xs text-white/80 cursor-pointer leading-tight">
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