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

export default function NeedleFreeClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Needle Free Anesthesia Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24 overflow-x-clip">
      
      {/* --- ASYMMETRIC HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-white px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          {/* Breadcrumbs pinned to far left with flex-wrap for mobile safety */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/hair-transplant" className="hover:text-[#772424] transition-colors">Hair Transplant</Link>
            <span>/</span>
            <span className="text-[#772424]">Needle-Free Anesthesia</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Needle-Free Anesthesia in FUE Hair Transplantation
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* IMAGE 1: Flagship Hero Visual */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/hair-transplant/25.webp" 
                  alt="Surgeon holding advanced high pressure jet injection device used for Needle Free Anesthesia in Lahore" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Advanced Jet Injection, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction Section */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  FUE Hair Transplantation; The primary concern of patients during surgical operations is the fear of feeling pain and soreness during the anesthesia.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Most of our patients researching FUE hair transplantation ask questions about feeling pain and how many injections will be given. Sapphire hair transplantation is performed with local anesthesia which means that a particular area is numbed with medications given under the skin.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  This method ensures that the patient does not feel any pain during the hair transplant. However patients who have a needle phobia or are worried about the pain will feel at this stage. The most worrying part of the operation is local anesthesia.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  In recent years local anesthesia has been applied with various methods to reduce this fear and anxiety and some of these methods are offered to patients with the promise of no pain.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Sapphire hair transplant operations take approximately 6 to 8 hours local anesthesia takes about 15 minutes and patients do not feel any pain after anesthesia. Local anesthesia is applied to the patient twice for FUE hair transplantation. The first is applied to the neck area before the intake phase and the second to the forehead before the canals are opened.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The needle free anesthesia method used in many developed countries worldwide is one of the local anesthesia methods used to reduce patients anxiety.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  It minimizes the patients anxiety and facilitates the physicians working process during FUE hair transplantation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Needle free anesthesia in sapphire hair transplantation is performed with advanced technology devices. Anesthetic medications are injected into the tissue by spraying them onto the skin through the high air pressure applied by the device placed on the head area.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Later the medication spreads to the tissue through the diffusion logic and the pain transmitted to nerves are blocked. The most important point that patients who prefer needle free anesthesia in FUE hair transplantation should know is that after some numbness is given through the device the needles will still be used for tumescent anesthesia.
                </p>
              </motion.div>

              
            

              {/* Section: Needle-free Anesthesia Is Not a Pain-free Anesthesia */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Needle-free Anesthesia Is Not a Pain-free Anesthesia
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  It should not be forgotten that the reason for feeling pain in local anesthesia in FUE hair transplantation is the medicine itself rather than the technique applied. For this reason even if needle free anesthesia reduces pain it is not completely pain free.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  In scientific studies patients who underwent anesthesia with needles and non-needle anesthesia were examined and no difference was detected between the two methods.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  While conducting research patients should keep in mind that needle free anesthesia is definitely not pain free. Needle free anesthesia in FUE hair transplantation is beneficial for patients with needle phobia.
                </p>
              </motion.div>

              {/* Section: Hair Skill and Needle-free Anesthesia */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-6 border-t border-gray-100">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Hair Skill and Needle-free Anesthesia
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Unfortunately in FUE hair transplantation it is a fact that some pain will be felt while applying local anesthesia. The important point is to make a special application not in a standard way but by taking into account the reactions and needs of the individual while application is made on the patient.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  At Hair Skill Clinic we consider the psychological state of the patients in all the treatments we administer by using the latest technological devices accompanied by our specialist physicians.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  We carry out all operations in a safe way with the technological devices necessary for the patients to feel comfortable at the maximum level and we follow the latest developments in this field in the world.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  We aim to minimize the pain that patients will feel while achieving positive results in hair transplantation and we make the process much faster and easier with help of the needle free anesthesia we apply during sapphire hair transplantation in our clinic.
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
                    <input type="checkbox" id="nfaPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="nfaPrivacy" className="text-xs text-white/80 cursor-pointer">
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