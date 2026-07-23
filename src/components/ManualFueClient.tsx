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

export default function ManuelFueClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Manual FUE Technique Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
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
            <span className="text-[#772424]">Manual FUE Extraction</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Manual FUE Extraction | Hair Skill Clinic
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & MAPPED HERO */}
            <div className="w-full lg:w-2/3 block">
              
              {/* IMAGE 1: Flagship Hero Visual */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/home/techniques/4.webp" 
                  alt="Surgeon performing manual punch follicular unit extraction one by one at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] group-active:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Manual Extraction Precision, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* --- TOP ADDITION 1: FUE MANUAL OVERVIEW --- */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  FUE Manual Hair Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The FUE (Follicular Unit Extraction) manual is recognized as a highly trusted technique for restoring natural density. If you are searching for the best FUE hair transplant, this method ensures maximum graft survival because each hair follicle is extracted manually with extreme precision.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At the Hair Skill Clinic, our manual extraction process minimizes trauma to the scalp and preserves the quality of every graft. We are proud to be a leading FUE hair transplant clinic where patients receive personalized care for long-lasting and natural-looking results.
                </p>
              </motion.div>

              {/* --- TOP ADDITION 2: BENEFITS OF MANUAL FUE --- */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12">
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">Benefits of Manual FUE</h3>
                <div className="space-y-3 ml-1 sm:ml-2">
                  {[
                    "Precise manual graft extraction",
                    "High graft survival rate",
                    "Natural-looking results",
                    "Minimal scarring",
                    "Faster healing process",
                    "Suitable for most hair loss patterns"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                      <p className="text-black text-base md:text-lg font-bold">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* --- TOP ADDITION 3: RECOVERY --- */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-3">Recovery</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  The procedure requires minimal downtime, allowing you to return to your normal routine within a few days. Our specialists will provide all necessary post-procedure guidance and medications to support a smooth recovery.
                </p>
              </motion.div>

              {/* --- EXISTING DEEP DIVE: HISTORICAL & CLINICAL CONTEXT --- */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight">
                  The Heritage and Precision of Manual Extraction
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Manual FUE hair transplant is the first technique applied in hair transplantation where the grafts are removed one by one. It can be seen as the ancestor of all currently used FUE hair transplantation techniques.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  It has been developed as an alternative to the older methods in which a procedure is made by removing some of the skin from the donor area and leaving visible stitch marks that cut the donor area horizontally. The skin around the hair is carefully cut, and grafts are obtained by rotating the punches with the help of fingers. In the technique performed using large biopsy punches in the early stages, the punches have also been modernized over time and have become specialized for this job.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The biggest advantage of manual FUE hair transplantation is that it is the best technique when it comes to removing the grafts with the least damage. When patients look for a reliable FUE hair transplant near me, they want assurance that the hair transplant surgeon controls the whole process. The surgeon makes a careful and gentle plan for each graft and takes follicular units with extreme care. It can be stated for manual FUE hair transplantation that the only disadvantage is that it takes a long time, so the number of grafts cannot be exceeded in a single session.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  After repeated sessions with low graft numbers, the results obtained in hair transplantation using a micromotor are achieved. Performing repeated sessions for large areas directly impacts the FUE hair transplant cost and shifts into upper investment tiers for patients evaluating the overall FUE hair transplant price in Pakistan.
                </p>
              </motion.div>

              {/* Section: Micro FUE Hair Transplantation */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Micro FUE Hair Transplantation
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Micro FUE hair transplantation is a technique performed using specialized motors. In this technique, punches are placed on the end of the handpiece connected to the micromotor. Rotation speed and direction can be adjusted on the motor. It is the most common technique used in the world.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Clinics that perform FUE hair transplantation will transplant your grafts with this technique unless you choose another method. The procedure performed using punches of 0.6 to 1 millimeter diameter is minimally invasive. After sapphire hair transplantation, the recovery of the donor area is completed in about seven days.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Its biggest advantage is that it is fast and can reach high graft numbers. In this way, more intense results can be obtained in a larger surface area in one session. It significantly reduces the number of sessions required for patients, making it a highly accessible choice for anyone looking for a reliable FUE hair transplant in Lahore with flexible local package ranges.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  In micro motor hair transplantation, the extraction process is not as controlled and gentle as manual FUE hair transplantation. If the surgeon performing the removal procedure is not experienced, the fracture percentage of follicular units increases.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Therefore, in the Hair Skill Clinic, the quality of the grafts and the fracture percentage are meticulously observed during the removal process to ensure superior results.
                </p>
              </motion.div>

              {/* Section: Manual FUE vs Micro FUE */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Manual FUE vs Micro FUE
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Since the introduction of micromotors in FUE hair transplantation, there have been debates on which method is superior. Hair Skill Clinic embraces the classic medical statement that there is no universal patient; there is only the individual condition. Therefore, surgeons who successfully apply many techniques make special plans tailored to the needs of each patient.
                </p>

                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-3">When we compare these two methods</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  When we compare these two methods, we see that the two techniques are basically the same at their core. Manual FUE is slower and more controlled, whereas micro FUE is faster. Although the grafts taken in the manual FUE technique are indeed less damaged, it is also a fact that the rapid implantation of grafts in micro-FUE positively affects the overall experience and convenience for the patient.
                </p>

                <div className="space-y-3 ml-1 sm:ml-2 mb-6">
                  {[
                    "Manual FUE is superior in terms of less damage to the grafts and donor area",
                    "Micro FUE is superior because the number of grafts transplanted in a single session can be three times more than manual FUE.",
                    "Micro FUE hair transplants sit inside far more competitive local PKR investment tiers",
                    "Since fewer grafts are transplanted, recovery in the donor area is faster in the manual FUE method",
                    "It is easy to find a clinic that uses the micro-FUE technique, while the number of surgeons mastering the manual FUE method is much less."
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><span className="text-[#772424] font-black text-lg shrink-0">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                  ))}
                </div>
              </motion.div>

              {/* Section: The Best Hair Transplantation */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  The Best Hair Transplantation
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  The best hair transplantation method is carefully selected by your FUE hair transplant surgeon to prevent any disappointment. This is done by explaining all possible results to you and making a detailed plan in that specific direction.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  FUE hair transplantation is a procedure you undergo to feel happy when you look in the mirror. The absolute best hair transplant operation is simply the one that achieves your personal goals. Thus, Hair Skill Clinic surgeons will help you choose the most suitable method for your unique hair loss pattern. Many advanced methods are successfully applied in our clinic. The best possible result is always targeted for our patients.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  People who want to have a hair transplant operation and do research on this matter often encounter many complex medical terms. These terms can create confusion and keep people away from the path that is actually right for them. Ultimately, the best hair transplant for you is the one you receive in the right clinic with an experienced medical team.
                </p>
              </motion.div>

              {/* Section: Manual FUE Hair Transplantation in Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Manual FUE Hair Transplantation in Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  If you prefer the skilled surgeons at Hair Skill Clinic and a specific number of grafts meets your needs, we can expertly perform your hair transplantation using manual FUE. Our dedicated case managers, in consultation with our leading physicians, will support you in making the right choice and eliminating any confusion.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Special planning for the pre-operation phase is tailored to each person who wants to have a hair transplant at our clinic. The data obtained during the entire operation is processed carefully in the patient file. This ensures that the operation proceeds smoothly and exactly in the planned course.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Your vital signs are monitored periodically by our medical team, who have received advanced life support training to ensure you are completely safe. In the Hair Skill Clinic, all operation rooms are sterilized every single day so the risk of infection is minimized to zero.
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
                    <input type="checkbox" id="mfuePrivacy" required defaultChecked className="w-4 h-4 mt-0.5 sm:mt-0 accent-[#C5A059] rounded cursor-pointer shrink-0" />
                    <label htmlFor="mfuePrivacy" className="text-xs text-white/80 cursor-pointer leading-relaxed">
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