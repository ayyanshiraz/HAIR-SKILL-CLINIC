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
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
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
            <Link href="/hair-transplant/treatments" className="hover:text-[#772424] active:text-[#772424] transition-colors">Treatments</Link>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Advanced Density and Rapid Healing at Hair Skill Clinic
                </div>
              </motion.div>

              {/* OVERVIEW SECTION */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  What is the Chinese Hair Transplant Method?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The Chinese hair transplant method is a highly specialized hair restoration approach designed to improve hair density and complete scalp coverage while supporting healthy and rapid hair growth. This innovative procedure is performed by experienced medical professionals using advanced rapid implantation techniques. The primary focus of the Chinese method of hair transplant is to minimize the time hair follicles spend outside the scalp. By doing so the biological integrity of each graft is preserved leading to natural looking results and an incredibly high survival rate for the transplanted hair.
                </p>
              </motion.div>

              {/* SCIENCE SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  The Science Behind Chinese Hair Restoration
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Unlike older manual techniques the Chinese hair transplant relies on speed and precision. The surgical team utilizes calibrated extraction punches and specialized implanter pens. This allows continuous fluid movement during surgery. When you reduce graft handling and friction you protect the delicate root structures. For patients suffering from severe androgenetic alopecia this means achieving maximum density in a single session without causing unnecessary trauma to the donor area.
                </p>
              </motion.div>

              {/* BENEFITS SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12">
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">Benefits of the Chinese Hair Transplant Method</h3>
                <div className="space-y-3 ml-1 sm:ml-2">
                  {[
                    "Improved hair density and extensive coverage for advanced baldness",
                    "Natural looking hair growth that blends flawlessly with your existing hair",
                    "Advanced implantation techniques that speed up the entire surgical process",
                    "Enhanced graft support through reduced out of body time",
                    "Comprehensive treatment approach ensuring long term scalp health",
                    "Faster initial healing phase with minimal dot scarring in the donor zone"
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
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">The Critical Role of PRP Therapy in the Chinese Method</h3>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424] flex flex-col gap-4">
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    A major pillar of Chinese hair transplantation in Pakistan is its mandatory integration with platelet rich plasma therapy. PRP acts as a biological fertilizer for your scalp. It uses your own blood cells to stimulate tissue healing and encourages the newly implanted follicles to anchor securely.
                  </p>
                  <p className="text-black text-base md:text-lg font-black text-[#772424] mt-2">
                    To ensure optimal results and maximum growth a total of six PRP sessions are highly recommended as part of your comprehensive treatment plan.
                  </p>
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-start gap-3">
                      <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                      <p className="text-black text-base md:text-lg font-bold">Two PRP sessions are included entirely free of cost with your primary hair transplant procedure.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                      <p className="text-black text-base md:text-lg font-medium">The remaining four PRP sessions are chargeable and can be scheduled according to the precise treatment plan recommended by our clinical specialists.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* VS TRADITIONAL SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight">
                  Chinese Method vs Traditional FUE
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  When researching the best options patients frequently compare the Chinese method vs traditional FUE. While standard FUE extracts and places follicles one by one it can sometimes be a slower process. The Chinese technique accelerates the implantation phase significantly. The faster the grafts are secured back into the scalp the higher the chance they will thrive. Furthermore traditional FUE does not strictly mandate extensive PRP support whereas the Chinese hair restoration protocol considers biological support essential for high density outcomes.
                </p>
              </motion.div>

              {/* COST SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight">
                  Chinese Hair Transplant Cost in Pakistan and Lahore
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If you are looking for a transparent Chinese hair transplant cost in Lahore the Hair Skill Clinic offers exceptional value. Global standards of clinical excellence are maintained while keeping the packages within accessible local PKR tiers. Because the first two PRP sessions and your initial post op medications are bundled into the primary cost patients can plan their financial commitment without worrying about hidden clinical fees. If you are searching for the best hair transplant clinic near me you will find our pricing structure both competitive and medically driven.
                </p>
              </motion.div>

              {/* TIMELINE SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight mb-6 border-b pb-3 border-gray-100">
                  Recovery and Aftercare Timeline
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Patients undergo a very predictable and comfortable recovery process. Following the procedure you will receive highly personalized aftercare instructions detailed medication guidance and your customized PRP schedule to help maximize the success of your surgery.
                </p>
                
                <div className="space-y-4 ml-1 sm:ml-2">
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                    <p className="text-black text-base md:text-lg font-medium"><strong className="font-black">First Week:</strong> Minor redness and tiny scabs form. Sleeping upright helps reduce early swelling.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                    <p className="text-black text-base md:text-lg font-medium"><strong className="font-black">Weeks Two to Four:</strong> The transplanted hairs will naturally shed. This phase makes way for new root development.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                    <p className="text-black text-base md:text-lg font-medium"><strong className="font-black">Months Three to Six:</strong> Early continuous growth becomes visible. The hair starts thin and gradually thickens.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                    <p className="text-black text-base md:text-lg font-medium"><strong className="font-black">Months Twelve to Fifteen:</strong> You will experience the full mature density and the final natural result of your Chinese method hair transplant.</p>
                  </div>
                </div>
              </motion.div>

              {/* START JOURNEY SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight">
                  Start Your Hair Restoration Journey
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Achieving a full head of hair requires the right technique and an experienced medical team. At Hair Skill Clinic we ensure every step of your procedure is safe comfortable and designed for maximum growth. Get your free consultation today and discover how this advanced technique can restore your confidence.
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