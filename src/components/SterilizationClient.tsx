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

export default function SterilizationClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Sterilization Standards Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Defeats Google Chrome forced white Autofill override
  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // Structured Process Data for the Step-Cards (SEO Optimized)
  const processSteps = [
    { title: "Receiving Contaminated Instruments", desc: "Used instruments are transported in closed containers to the designated dirty area immediately after surgical extraction." },
    { title: "Initial Inspection and Pre-Cleaning", desc: "Instruments are counted, inspected for wear, and undergo preliminary rinsing under controlled conditions." },
    { title: "Removal of Organic Contaminants", desc: "Blood, protein, and other organic materials are dissolved using appropriate multi-enzymatic cleaners." },
    { title: "Documentation and Transfer", desc: "Instrument sets are recorded and transferred to the secondary cleaning and disinfection stage." },
    { title: "Detailed Ultrasonic Cleaning", desc: "High-frequency ultrasonic waves ensure complete removal of protein, fat, and microscopic particulate residues from fine FUE punches." },
    { title: "High Level Disinfection (HLD)", desc: "All surgical tools are disinfected before final autoclaving in accordance with WHO and AAMI guidelines." },
    { title: "Infection Control and Use of PPE", desc: "All staff members wear full protective gear while executing decontamination routines." }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24 overflow-x-clip">
      
      {/* --- PAGE HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-gray-50 border-b border-gray-200 px-4 sm:px-6"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/patient-guide" className="hover:text-[#772424] transition-colors">Patient Guide</Link>
            <span>/</span>
            <span className="text-[#772424]">Sterilization at Hair Skill Clinic</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Sterilization and Hygiene Standards at Hair Skill Clinic
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch lg:items-start w-full">
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* Main Autoclave Hero Image */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeUp}
                className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-10 shadow-lg group"
              >
                <img 
                  src="/patient-guide/1.webp" 
                  alt="Autoclave device measuring barometric steam pressure" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000" 
                />
              </motion.div>

              {/* Lead Paragraphs (SEO Updated) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At Hair Skill Clinic, patient safety and clinical excellence remain our topmost priorities. Providing a safe hair transplant near me for patients across Lahore, Karachi, Multan, Rawalpindi, and all of Pakistan requires rigid adherence to surgical hygiene. Our sterilization protocols are executed in full alignment with the Ministry of Health DAS Guidelines, WHO Sterilization Guidelines, and AAMI ST79 Steam Sterilization and Sterile Processing Standards.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  When patients evaluate hair transplant cost in Pakistan or seek the best price for FUE procedures, surgical safety must never be compromised. Every surgical instrument used in our facilities undergoes international healthcare quality protocols, accredited under TEMOS International criteria to guarantee zero risk of cross-contamination.
                </p>
              </motion.div>

              {/* Section: Daily and Periodic Testing Procedures */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-8 tracking-tight">
                  Daily and Periodic Testing Procedures
                </h2>

                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img 
                    src="/patient-guide/2.webp" 
                    alt="Medical technician running testing procedures on autoclave" 
                    className="w-full h-full object-cover" 
                  />
                </div>

                <div className="flex flex-col gap-6 mb-10">
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    To maintain strict safety for patients seeking hair restoration near me in Lahore and major cities of Pakistan, our staff conducts daily testing on all surgical equipment. These routine checks verify that every micro-punch, sapphire blade, and forceps is completely sterile before touching human tissue.
                  </p>
                </div>

                {/* Sub-Tests Breakdown (SEO Updated) */}
                <div className="flex flex-col gap-8 ml-2 border-l-2 border-gray-100 pl-4 sm:pl-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424] mb-3">Vacuum Leak Test</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">
                      This test is performed daily to assess the airtightness and vacuum capacity of our sterilization devices. It ensures total reliability of the autoclaving environment and is conducted in accordance with international quality standards.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424] mb-3">Bowie-Dick Test</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">
                      This critical test verifies steam penetration and confirms the effective sterilization capacity of our autoclaves daily. Conducted in line with rigorous quality standards, it ensures device reliability and patient safety during every procedure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424] mb-3">Ultrasonic Cleaning Test</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">
                      Instruments are cleaned in ultrasonic washers to remove even the smallest microscopic residues. This process eliminates protein, fat, and particulate residues, minimizing the risk of infection to the lowest possible level.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424] mb-3">Biological Indicator Test (Every 15 Days)</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">
                      We perform biological indicator tests periodically to measure the effectiveness of our sterilization process against resistant microorganisms. These tests confirm biological sterilization efficacy and are fully compliant with DAS, WHO, and TEMOS quality standards.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Delivery and Traceability */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-4 tracking-tight">
                  Delivery and Traceability of Sterile Instruments
                </h2>
                
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  Proper segregation of clean and dirty instruments prevents hospital-acquired infections. Whether you undergo an unshaven transplant, long FUE, or manual punch procedure at Hair Skill Clinic, every instrument is handled through a strictly controlled pipeline.
                </p>

                <h3 className="text-lg md:text-xl font-extrabold text-[#772424] mb-8">
                  Separation and Management of Contaminated and Sterile Instruments
                </h3>

                <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img 
                    src="/patient-guide/3.webp" 
                    alt="Surgical stainless steel instrument trays organized" 
                    className="w-full h-full object-cover" 
                  />
                </div>

                <div className="flex flex-col gap-6 mb-10">
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Contaminated and sterile instruments are strictly separated. Contaminated instruments are transported in sealed containers and delivered to the designated dirty utility area. Upon acceptance, instruments are counted and logged.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Instruments that have completed cleaning, disinfection, and sterilization processes are delivered to the surgical rooms against signed documentation. This practice ensures safe circulation of instruments while supporting institutional traceability, quality control, and patient safety.
                  </p>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] mb-4">
                  Traceability and Safety Monitoring
                </h3>

                <div className="flex flex-col gap-6">
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Each sterile instrument set is recorded with its autoclave number, sterilization date, expiration date, and responsible staff member ID.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    These records are stored within patient files and sterilization tracking systems. In the event of a potential infection query, all equipment and sterilization processes can be retrospectively reviewed in detail, ensuring rapid traceability. This system is a fundamental component of infection control management across all our clinics in Pakistan.
                  </p>
                </div>
              </motion.div>

              {/* Section: Process List */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="mb-16">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-8 tracking-tight">
                  Our Complete Sterilization Pipeline
                </h2>

                <div className="grid grid-cols-1 gap-4 mb-12">
                  {processSteps.map((step, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={fadeUp}
                      className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424] shadow-xs flex flex-col justify-center"
                    >
                      <h4 className="text-lg md:text-xl font-black text-[#772424] mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-black font-medium text-base">
                        {step.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] mb-6">
                  Preparation and Packaging
                </h3>

                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-6 shadow-md">
                  <img 
                    src="/patient-guide/4.webp" 
                    alt="Nurse sealing sterile pouches inside sterilization cleanroom" 
                    className="w-full h-full object-cover" 
                  />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-10">
                  Cleaned instruments are packaged using medical-grade sterilization pouches, with chemical and biological indicators included.
                </p>

                <div className="flex flex-col gap-8 ml-2 border-l-2 border-gray-100 pl-4 sm:pl-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424] mb-3">Steam Autoclave Sterilization</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">
                      Packaged instruments are placed into high-pressure autoclaves. Air is evacuated, and high-temperature saturated steam eliminates all microbial life.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424] mb-3">Sterile Distribution</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">
                      Pouches are dried, inspected, and delivered directly to the operating rooms against signed documentation.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Priority Conclusion (Affordable Hair Restoration) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-6 pt-8 border-t border-gray-200">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-2 tracking-tight">
                  Affordable Hair Restoration Without Compromising Safety
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Many patients search for the lowest price or affordable hair transplant cost in Lahore, Karachi, Multan, or Rawalpindi. At Hair Skill Clinic, competitive pricing never comes at the expense of patient hygiene. By maintaining hospital-grade sterilization protocols, we deliver international-quality hair restoration at fair costs while prioritizing human health above all else.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Every patient at Hair Skill Clinic receives treatment with total confidence, knowing that our sterilization protocols meet international TEMOS quality standards and provide a clean, traceable, and secure clinical environment.
                </p>
              </motion.div>

            </div>

            {/* RIGHT SIDE: STICKY CONSULTATION FORM */}
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
                    <input type="checkbox" id="sterPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer mt-0.5 sm:mt-0 shrink-0" />
                    <label htmlFor="sterPrivacy" className="text-xs text-white/80 cursor-pointer leading-tight">
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