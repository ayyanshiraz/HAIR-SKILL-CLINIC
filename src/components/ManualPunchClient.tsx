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

export default function ManualPunchClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Manual Punch Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Defeats Google Chrome forced white Autofill override
  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

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
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center justify-start gap-2">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/techniques" className="hover:text-[#772424] transition-colors">Techniques</Link>
            <span>/</span>
            <span className="text-[#772424]">Manual Punch</span>
          </div>
          {/* Heading aligned center */}
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight text-center">
            Manual Punch Hair Transplant
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-10">
              
              {/* Flagship Visual Block as shown in Screenshot 2/3 */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative shadow-xl group">
                <img 
                  src="/hair-transplant/treatments/13.webp" 
                  alt="Surgeon performing controlled manual punch extraction at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
              </motion.div>

              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Manual punch hair transplant is a technique used during the graft extraction phase of a hair transplant procedure. Instead of relying solely on motorized movement, this method involves the manual handling of a specialized punch tool to extract follicular units from the donor area. The main focus of this approach is controlled extraction, careful donor management, and attention to individual hair characteristics.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  In this context, the manual punch technique stands out as an approach that prioritizes precision and control during graft extraction.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">What Is Manual Punch in Hair Transplant?</h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Manual Punch Hair Transplant is a hair restoration method that removes and places hair grafts by hand.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  This technique uses a manual punch tool to extract individual hair follicles with controlled, precise movements. The collected grafts are then implanted into thinning or bald areas one by one. Manual extraction helps maintain careful handling during the harvesting stage. It also supports detailed placement based on hair direction and natural density. Because each graft is handled individually, the process focuses on accuracy and natural-looking distribution.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Because every patient has a unique donor area and hair pattern, hair transplant planning should always be personalized. For this reason, manual punch may be considered in selected cases where a controlled and detail-oriented extraction process is beneficial. In the field of Pakistan hair transplant, this technique is often associated with customized treatment planning and careful donor area evaluation.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">Key Features of the Manual Punch Technique</h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The manual punch technique is designed to support a more controlled extraction process. Rather than focusing purely on speed, it emphasizes careful graft handling and donor area preservation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-2">
                  Some of the key features of manual punch hair transplant include:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-black text-base md:text-lg font-medium">
                  <li>Greater manual control during graft extraction</li>
                  <li>A more detail-focused approach to donor area management</li>
                  <li>Careful consideration of hair angle and follicle direction</li>
                  <li>Compatibility with personalized hair transplant planning</li>
                  <li>Support for a balanced and natural-looking donor area strategy</li>
                </ul>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">Who May Be Suitable for Manual Punch Hair Transplant?</h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Manual punch is not a one-size-fits-all solution. Suitability depends on several factors, including the patient’s level of hair loss, donor area density, scalp condition, and overall treatment goals. A proper medical assessment is essential before deciding whether this approach is appropriate.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  For patients considering a hair transplant in Pakistan, the decision on which extraction technique to use should always be made after a professional evaluation. The most effective hair transplant approach is the one that best matches the individual characteristics of the patient.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">Why Precision Matters in Hair Transplant Procedures?</h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Successful hair transplant outcomes depend not only on implantation, but also on the quality of graft extraction. The way grafts are harvested can influence donor area management, graft integrity, and overall planning quality. This is why precision plays such an important role in modern hair restoration.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Manual punch may offer advantages in cases where a slower, more controlled extraction process is preferred. When performed by an experienced medical team, it can become part of a carefully planned treatment strategy aimed at achieving natural and consistent results.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">Manual Punch Hair Transplant in Pakistan</h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Manual Punch Hair Transplant in Pakistan is a precise hair restoration method using hand-operated tools for graft extraction and implantation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  This technique involves extracting individual hair follicles with a manual punch and placing them into thinning areas. The process allows controlled handling of each graft during both extraction and implantation stages. Pakistan is widely known for offering advanced hair transplant techniques with structured planning approaches. Manual punch methods focus on accuracy, helping align transplanted hair with natural growth direction. The technique supports balanced density and a more natural appearance in treated areas.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">Personalized Planning for Natural-Looking Results</h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At the heart of every successful hair transplant is a personalized treatment plan. Hairline design, donor area assessment, graft calculation, and extraction technique should all be based on the patient’s unique needs. This method may support this individualized approach in suitable cases by allowing a more controlled graft harvesting process.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Patients researching Pakistan hair transplant options often look for natural-looking results and long-term planning. For this reason, techniques such as manual punch are best evaluated within the context of a full medical consultation rather than as a standalone solution.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  As with all hair transplant procedures, the suitability of manual punch depends on individual medical evaluation. The best treatment approach should always be determined by qualified medical professionals after assessing the patient’s hair loss pattern, donor capacity, and expectations.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4 pt-6 border-t border-gray-100">
                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight">Final Notes:</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Its highlights a more controlled and detail-focused approach to graft extraction within the FUE procedure. For patients who may benefit from a technique that emphasizes precision during the donor harvesting stage, Manual Punch can be a suitable option depending on hair characteristics, donor area structure, and overall treatment goals. At Hair Skill Clinic, every case is evaluated individually to determine the most appropriate technique for natural-looking and long-term results. Contact us to learn whether Manual Punch is the right choice for you.
                </p>
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
                    <input type="checkbox" id="manualPunchPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="manualPunchPrivacy" className="text-xs text-white/80 cursor-pointer">
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