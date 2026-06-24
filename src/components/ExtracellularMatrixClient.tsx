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

export default function ExtracellularMatrixClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Extracellular Matrix (Acell) Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

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
            <Link href="/hair-transplant" className="hover:text-[#772424] transition-colors">Hair Transplant</Link>
            <span>/</span>
            <span className="text-[#772424]">Extracellular Matrix Products</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Extracellular Matrix Products & Hair Transplant Using ( EMP) Acell in Medicine
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* Main Reference Hero Visual (Orange/Red Cellular Scaffold) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/treatments/ecm-hero.jpg" 
                  alt="3D visual representation of Extracellular Matrix ECM biological scaffold and cellular regeneration network" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Regenerative ECM Scaffold, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Intro Paragraph */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Acell refers to a regenerative medicine technology that uses an extracellular matrix ECM to stimulate tissue healing and regeneration. It is a biological scaffold derived from porcine pig bladder tissue that became the focus of clinical research. It is broadly applied in numerous medical disciplines: wound care plastic and reconstructive surgery orthopaedics and urology to mention a few. Its use is as diverse as helping in the healing of chronic wounds and burns soft tissue repair to aiding in better hair restoration surgery results by increasing graft survival and decreasing scarring.
                </p>
              </motion.div>

              {/* Section: The Healing Power */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-4 tracking-tight border-b pb-3 border-gray-100">
                  The Healing Power of Extracellular Matrix Products
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Extracellular matrix ECM products are natural biomaterials used to support the healing of tissues commonly used in regenerative medicine. ECM serves as a framework that guides cells to the site of damage and encourages them to grow into healthy new tissue. These biologic products resemble the bodys natural material being structured like the human body and thus attracting stem cells and other healing factors to hasten tissue repair with less scarring. Eventually the ECM is absorbed by the body and replaced with new tissue which can lead to improved quicker healing properties.
                </p>
              </motion.div>

              {/* Section: Major Applications */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Major Applications of Acell in Medicine
                </h2>

                <div className="space-y-6">
                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Chronic Wounds</h3>
                    <p className="text-black font-medium text-base leading-relaxed">Acell is frequently utilized in this setting for chronic wounds diabetic ulcerations and pressure sores. Because of its regenerative abilities it assists in the regeneration of new tissue thereby making the wound close up quickly and at the same time minimizing chances for wound infection.</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Plastic Surgery</h3>
                    <p className="text-black font-medium text-base leading-relaxed">In plastic surgery the material can be used to help regenerate tissue and restore body tissue following trauma surgery or burns. It has been shown in some cases to regrow tissue functionally identical to the original skin. It is also designed to improve scar quality and cosmetic appearance.</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Orthopedics</h3>
                    <p className="text-black font-medium text-base leading-relaxed">Acell appears helpful in soft tissue regeneration for musculoskeletal injuries. It aids in the recuperation of tendons bonds and muscles reducing recovery time and making them work more efficiently.</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-[#772424]/5 border-2 border-[#772424]/30 shadow-sm">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Acell + Hair Restoration</h3>
                    <p className="text-black font-bold text-base leading-relaxed">Used in conjunction with hair transplants Acell significantly enhances graft survival and growth while reducing scarring. It is also used in nonsurgical treatments for hair thickening and follicle regeneration.</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Urology</h3>
                    <p className="text-black font-medium text-base leading-relaxed">In Urology Acell is employed to assist in overall tissue repairs often in cases regarding the bladder urethra or other soft tissue conditions.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section: How Acell Works */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-4 tracking-tight border-b pb-3 border-gray-100">
                  How Acell Works
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The extracellular matrix supports the body cells ability to synthesize new healthy tissue. Instead it sends signals to the bodys stem cells to home in on the injured area and promote regeneration not scar formation. The ECM scaffold is absorbed and replaced over time by the patients native tissue.
                </p>
              </motion.div>

              {/* Section: Advantages of Acell Treatment */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="space-y-6 pt-6 border-t border-gray-100">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Advantages of Acell Treatment
                </h2>

                <div className="flex flex-col gap-4 ml-2">
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">
                      <span className="font-extrabold text-[#772424]">Assists in the promotion of natural tissue regeneration:</span> Acell injects help promote the bodys regeneration of healthy tissue and minimize scarring improving patient healing.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">
                      <span className="font-extrabold text-[#772424]">Applicability:</span> Useful in different medical fields including wound healing and the more demanding reconstruction surgeries.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">
                      <span className="font-extrabold text-[#772424]">Minimally invasive:</span> Acell can be applied non-surgically or in conjunction with surgical procedures to enhance healing and recovery.
                    </p>
                  </div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium pt-4">
                  Acell is a revolutionary tool in the regenerative field as it can be used across multiple specialities. It activates the bodys cellular processes for faster recovery better results and less scarring making it a necessary element in advanced medical treatments. Its tissue regenerative properties have made it an important adjunct in treating chronic wounds assisting in reconstructive surgery and enhancing the results of hair restoration in Pakistan.
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
                    <input type="checkbox" id="ecmPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="ecmPrivacy" className="text-xs text-white/80 cursor-pointer">
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