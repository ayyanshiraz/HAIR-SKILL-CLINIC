"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
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

export default function DoctorsCategoryClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to book a consultation with Dr Mansoor Ahmad.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- COMPREHENSIVE TEXT-ONLY CREDENTIALS MAPPING ---
  const officialDegrees = [
    {
      title: "Bachelor of Medicine and Bachelor of Surgery MBBS",
      institute: "University of the Punjab Lahore",
      year: "1979",
      details: "Foundational medical qualification authorizing comprehensive clinical practice in medicine surgery and obstetrics."
    },
    {
      title: "Member of the College of Physicians and Surgeons MCPS",
      institute: "College of Physicians and Surgeons Pakistan",
      year: "1983",
      details: "Admitted as an official member of the college in the specialized postgraduate subject of General Surgery."
    },
    {
      title: "Foreign Medical Practitioner Registration",
      institute: "Libyan Medical Professional Congress Socialist Peoples Libyan Arab Jamahiriya Benghazi Libya",
      year: "March 1985",
      details: "Official international Ministry of Health registration qualifying Dr Mansoor Ahmad for full operative surgical practice abroad."
    },
    {
      title: "Primary FRCS Basic Sciences Postgraduate Medical Education",
      institute: "University of Glasgow West of Scotland Committee for Postgraduate Medical Education",
      year: "December 1988",
      details: "Completed an intensive 12-week surgical instruction curriculum covering Anatomy Physiology Pathology Bacteriology Virology Biochemistry and Pharmacology."
    },
    {
      title: "Fellow in General Surgery FICS",
      institute: "International College of Surgeons Geneva Washington DC",
      year: "October 1991",
      details: "Elected as a dedicated surgical fellow attesting full compliance with rigorous international operative standards."
    },
    {
      title: "Master of Hospital Management",
      institute: "University of Health Sciences Lahore",
      year: "2014",
      details: "Postgraduate administrative degree mastering healthcare systems executive leadership and clinical facility management."
    },
    {
      title: "Permanent Medical Specialist Registration",
      institute: "Pakistan Medical and Dental Council PMDC",
      year: "Valid Upto 2030",
      details: "Permanent medical license holder formally registered as an executive chief surgeon and restorative specialist."
    }
  ];

  const clinicalConferences = [
    {
      title: "Total Nutritional Therapy TNT KOL Symposium",
      institute: "Abbott Laboratories Educational Program",
      year: "November 2008",
      details: "Active participation in specialized clinical nutrition integration designed to accelerate cellular surgical recovery."
    },
    {
      title: "21st Annual International Conference on Family Medicine",
      institute: "FAMILYCON Pakistan Academy of Family Physicians Lahore",
      year: "January 2011",
      details: "Delegate participation focusing on modern medical prevention strategies and primary healthcare solutions."
    },
    {
      title: "SAARC Surgical International Conference",
      institute: "Society of Surgeons Pakistan Lahore Chapter",
      year: "November 2011",
      details: "Attended regional surgical symposia investigating cross-border operative innovations and patient safety protocols."
    },
    {
      title: "Transforming Health Care through Education Training and Research",
      institute: "University of Health Sciences Lahore Department of Family Medicine",
      year: "March 2015",
      details: "International symposium participation awarded four accredited continuing medical education credit hours."
    },
    {
      title: "77th Annual Surgical Update",
      institute: "International College of Surgeons United States Section Annapolis Maryland USA",
      year: "June 2015",
      details: "Continuing medical education assembly dedicated to global surgical advancements and operative refinement."
    },
    {
      title: "CME Workshop on Major Comorbid Psychiatric Disorders",
      institute: "Pakistan Society of Family Physicians Glitz Pharma",
      year: "December 2025",
      details: "Completed specialized primary care workshop governing comorbid clinical management and patient mental well-being."
    },
    {
      title: "Gold Medal Award in Family Medicine",
      institute: "35th Annual International Conference on Family Medicine FAMILYCON PC Hotel Lahore",
      year: "November 2025",
      details: "Awarded prestigious Gold Medal of appreciation recognizing supreme clinical competency as an MCPS successful candidate."
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
        <div className="max-w-[1300px] mx-auto relative">
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] active:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/doctors" className="hover:text-[#772424] active:text-[#772424] transition-colors">Doctors</Link>
            <span>/</span>
            <span className="text-[#772424]">Dr Mansoor Ahmad Profile</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Dr Mansoor Ahmad
          </h1>
          <p className="text-center font-extrabold text-[#772424] text-lg sm:text-xl md:text-2xl mt-2 tracking-wide uppercase">
            Senior Chief Surgeon and Medical Director
          </p>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: BIOGRAPHY & TEXT-ONLY CERTIFICATES SHOWCASE */}
            <div className="w-full lg:w-2/3 block">
              
              {/* Lead Biography & Doctor Profile Picture */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
                <div className="w-full aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden bg-gray-900 relative shadow-md shrink-0">
                  <img src="/home/doctor.webp" alt="Dr Mansoor Ahmad Senior Chief Surgeon and Medical Director at Hair Skill Clinic" className="w-full h-full object-cover object-top" />
                </div>
                
                <div className="md:col-span-2 flex flex-col gap-4">
                  <span className="text-xs font-black text-[#772424] tracking-widest uppercase">Verified Medical Leadership</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">40+ Years of Surgical Craftsmanship</h2>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Dr Mansoor Ahmad is a highly distinguished surgical specialist with over four decades of operative practice and clinical leadership. Registered permanently with the Pakistan Medical and Dental Council his career represents a lifelong commitment to surgical precision patient safety and advanced medical administration.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Combining foundational surgical training with a Master of Hospital Management Dr Ahmad brings a comprehensive perspective to restorative clinical operations. He ensures that every procedure performed adheres to international cleanroom protocols patient education standards and ethical medical care.
                  </p>
                </div>
              </motion.div>

              {/* Degrees Section */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  Official Degrees Fellowships and Registrations
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {officialDegrees.map((deg, i) => (
                    <div key={i} className="rounded-3xl bg-gray-50 border border-gray-200/80 flex flex-col justify-between shadow-sm hover:border-[#772424] transition-colors p-6 sm:p-8">
                      <div>
                        <span className="text-xs font-black text-[#772424] tracking-wider uppercase block mb-2">{deg.year}</span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-snug mb-2">{deg.title}</h3>
                        <p className="text-sm font-bold text-gray-700 mb-3">{deg.institute}</p>
                        <p className="text-xs sm:text-sm font-medium text-gray-600 leading-relaxed border-t border-gray-200/60 pt-3 mt-2">{deg.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Conferences Section */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  International Symposia Honors and Clinical Updates
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {clinicalConferences.map((conf, i) => (
                    <div key={i} className="rounded-3xl bg-gray-50 border border-gray-200/80 flex flex-col justify-between shadow-sm hover:border-[#772424] transition-colors p-6 sm:p-8">
                      <div>
                        <span className="text-xs font-black text-[#772424] tracking-wider uppercase block mb-2">{conf.year}</span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-snug mb-2">{conf.title}</h3>
                        <p className="text-sm font-bold text-gray-700 mb-3">{conf.institute}</p>
                        <p className="text-xs sm:text-sm font-medium text-gray-600 leading-relaxed border-t border-gray-200/60 pt-3 mt-2">{conf.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                    <input type="checkbox" id="docPrivacy" required defaultChecked className="w-4 h-4 mt-0.5 sm:mt-0 accent-[#C5A059] rounded cursor-pointer shrink-0" />
                    <label htmlFor="docPrivacy" className="text-xs text-white/80 cursor-pointer leading-relaxed">
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