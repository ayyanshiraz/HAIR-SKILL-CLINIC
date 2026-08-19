"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

// Path points to ../data/countries because this file sits inside /src/components
import { countries, type Country } from "../data/countries";

// --- STRICT ANIMATION Bezier Tuple ---
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

export default function GentleCareClient() {
  // --- FORM STATES ---
  const defaultCountry = countries.find((c: Country) => c.code === `PK`) || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState(``);
  const [email, setEmail] = useState(``);
  const [phone, setPhone] = useState(``);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = `923014923336`;
    const textMessage = `Hello! I would like to get a free consultation from the Gentle Care Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, `_blank`);
  };

  // Defeats Google Chrome forced white Autofill override
  const autofillFixStyle = {
    WebkitBoxShadow: `0 0 0px 1000px #772424 inset`,
    WebkitTextFillColor: `#ffffff`
  };

  return (
    <div className={`min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24`}>
      
      {/* --- PAGE HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className={`pt-28 lg:pt-36 pb-12 bg-gray-50 border-b border-gray-200 px-6`}
      >
        <div className={`max-w-[1200px] mx-auto`}>
          <div className={`text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2`}>
            <Link href={`/`} className={`hover:text-[#772424] transition-colors`}>Homepage</Link>
            <span>/</span>
            <Link href={`/about`} className={`hover:text-[#772424] transition-colors`}>About</Link>
            <span>/</span>
            <span className={`text-[#772424]`}>Gentle Care</span>
          </div>
          <h1 className={`text-4xl md:text-6xl font-black text-gray-900 tracking-tight`}>
            Hair Skill Gentle Care
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className={`py-16 px-6 bg-white`}>
        <div className={`max-w-[1200px] mx-auto`}>
          <div className={`flex flex-col lg:flex-row gap-16 items-start`}>
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className={`w-full lg:w-2/3 flex flex-col`}>
              
              {/* Top Banner (Fades in immediately) */}
              <motion.div 
                initial={`hidden`} 
                animate={`visible`} 
                variants={fadeUp}
                className={`w-full aspect-[16/9] rounded-3xl overflow-hidden bg-gray-900 relative mb-12 shadow-2xl border border-gray-100 group`}
              >
                <img 
                  src={`/about/4.webp`} 
                  alt={`Hair Skill Clinic Gentle Care Program`} 
                  className={`w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000`} 
                />
              </motion.div>

              {/* Core Introduction */}
              <motion.div initial={`hidden`} animate={`visible`} variants={fadeUp} className={`mb-12`}>
                <h2 className={`text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight`}>
                  Gentle Care Experience
                </h2>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Hair Skill Clinic is deeply passionate about the ultimate comfort of our patients in all stages of their visit. Hair-skill-gentle-care beautifully manifests how the ultimate comfort of a patient is considered a complete and premium hospitality experience.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-8 font-medium`}>
                  When you first contact us to discover the best hair transplant in Lahore, your specialized assistants are assigned to you immediately. This means there is always someone with you to fully support you during the entire process.
                </p>
                <p className={`text-black text-lg md:text-xl font-black p-6 bg-gray-50 rounded-2xl border-l-4 border-[#772424]`}>
                  Let us have a look at how the touchpoints are carefully designed for your seamless hospitality and operation experience.
                </p>
              </motion.div>

              {/* Pre-Operation Steps */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-14 flex flex-col gap-4`}
              >
                <h3 className={`text-2xl md:text-3xl font-black text-[#772424] mb-4 tracking-tight`}>
                  Pre-Operation Journey
                </h3>
                <div className={`flex items-start gap-3`}>
                  <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0`} />
                  <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                    Every hair transplant application is assigned to a dedicated case manager. The whole process is flawlessly executed under the control of the case manager.
                  </p>
                </div>
                <div className={`flex items-start gap-3`}>
                  <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0`} />
                  <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                    Your case manager sends a medical evaluation survey and collects vital information about your needs and expectations, including photos of the patient.
                  </p>
                </div>
                <div className={`flex items-start gap-3`}>
                  <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0`} />
                  <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                    Your case manager and surgeon review your needs and expectations, execute pre-planning, and prepare a detailed evaluation report to ensure you get the best hair transplant procedure.
                  </p>
                </div>
                <div className={`flex items-start gap-3`}>
                  <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0`} />
                  <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                    Your case manager submits the detailed treatment plan to the patient.
                  </p>
                </div>
                <div className={`flex items-start gap-3`}>
                  <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0`} />
                  <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                    Your case manager assists you warmly through every step you take.
                  </p>
                </div>
              </motion.div>

              {/* Bold Stage Paragraphs */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-14 flex flex-col gap-6`}
              >
                <h3 className={`text-2xl md:text-3xl font-black text-[#772424] mb-2 tracking-tight`}>
                  The Operation Day
                </h3>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-black`}>Arrival and Welcome:</span> You will be warmly welcomed by your bilingual guest relations specialists, and she will be your personal guide throughout the day as you complete each phase of your operation. Whether you travelled for the best hair transplant in Karachi or the best hair transplant in Multan, we make sure you feel right at home.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-black`}>Pre-Operation Briefing:</span> Your doctor will be briefing you early in the morning about the hair transplant procedure step-by-step and answering common questions like how long a hair transplant procedure takes.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-black`}>True Planning:</span> Your Hairline Planning is expertly conducted before the operation by our best-in-class Hair Transplant Surgeons.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-black`}>The Operation:</span> All operations are strictly performed by highly qualified medical doctors and our elite medical team, addressing any concerns regarding whether a hair transplant is safe. Yes, it is safe, and we ensure the utmost hygiene.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-black`}>Post-Operation Controls:</span> Final checks are granted by the strict checkout procedures of our doctor before you leave.
                </p>
              </motion.div>

              {/* Post-Operation & Aftercare */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-14 flex flex-col gap-6`}
              >
                <h3 className={`text-2xl md:text-3xl font-black text-[#772424] mb-2 tracking-tight`}>
                  Post-Operation & Aftercare
                </h3>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  After you have your hair transplant operation and check out, you will be assigned to and introduced to our highly experienced patient experience specialist. They will be responsible for closely monitoring your hair growth in the coming eighteen months. Patient experience specialists are leading experts on hair growth observation; they work closely with our doctors to ensure healthy growth. This includes comprehensive guidance on after-fee-fee hair transplant care and FUE hair transplant after-care.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  The Hair Skill Gentle Care Program is efficiently managed by the Patient Experience Department under the corporate management hierarchy of Hair Skill Clinic. The satisfaction of our patients is completely guaranteed by the patient-first attitude of Hair Skill Clinic.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  At Hair Skill Clinic, we firmly believe that taking a holistic approach to the entire process leads to actual long-term success, which is exactly why we do not only concentrate on the operation day. This holistic point of view, fully supported by applying the postoperative guidelines, secures operation success at a very high rate.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  Taking proper care of newly transplanted hair is our mutual responsibility with the patient. From explaining the proper hair transplant washing techniques to demonstrating exactly how to wash hair after transplant, Hair Skill Clinic is always there to support you no matter what in the long run. We make sure everyone knows that hair transplant is safe and permanent.
                </p>
              </motion.div>

              {/* Second Banner Placeholder */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`w-full aspect-[16/9] rounded-3xl overflow-hidden bg-gray-900 relative mb-12 shadow-2xl border border-gray-100 group`}
              >
                <img 
                  src={`/about/5.webp`} 
                  alt={`Hair Skill Clinic Checkup`} 
                  className={`w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000`} 
                />
              </motion.div>

              {/* Program People Roster */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`flex flex-col gap-6`}
              >
                <h3 className={`text-2xl md:text-3xl font-black text-[#772424] mb-2 tracking-tight`}>
                  Get to Know Hair Skill Gentle Care Program People
                </h3>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-[#772424]`}>Case Manager:</span> Your first-in-contact assistant who accurately plans your treatment and resolves every issue about your hospitality arrangements.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-[#772424]`}>Guest Relations Specialist:</span> Your operation day guide who will be constantly supporting you on the ground at the clinic.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-[#772424]`}>Hair Transplant Surgeon:</span> Your brilliant hairline designer, operation planner, and medical performer.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-[#772424]`}>Surgical Assistant:</span> Your dedicated operation performer assisting the surgeon.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-[#772424]`}>Patient Experience Specialist:</span> Your main point of contact for post-operation procedures, continuous follow-up, and securing your absolute satisfaction.
                </p>
              </motion.div>

            </div>

            {/* RIGHT SIDE: STICKY CONSULTATION FORM */}
            <motion.div 
              initial={`hidden`}
              animate={`visible`}
              variants={slideInRight}
              className={`w-full lg:w-1/3 lg:sticky lg:top-32`}
            >
              <div className={`bg-[#772424] text-white rounded-3xl p-8 shadow-2xl relative w-full border border-[#8c2a2a]`}>
                <h3 className={`text-white text-xl font-black text-center mb-8 tracking-wide`}>
                  GET FREE CONSULTATION
                </h3>
                
                <form onSubmit={handleSubmit} className={`flex flex-col gap-6`}>
                  <div className={`border-b border-white/30 pb-2 focus-within:border-white transition-colors`}>
                    <input 
                      type={`text`} 
                      placeholder={`Full Name`} 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                      required 
                      className={`w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium`} 
                      style={autofillFixStyle}
                    />
                  </div>
                  
                  <div className={`border-b border-white/30 pb-2 focus-within:border-white transition-colors`}>
                    <input 
                      type={`email`} 
                      placeholder={`E-mail`} 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                      className={`w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium`} 
                      style={autofillFixStyle}
                    />
                  </div>

                  <div className={`border-b border-white/30 pb-2 focus-within:border-white transition-colors flex items-center relative`}>
                    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`flex items-center gap-2 cursor-pointer text-sm font-bold text-[#C5A059] select-none mr-3 shrink-0`}>
                      <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={selectedCountry.name} className={`w-5 object-contain`} />
                      <span>{selectedCountry.dial}</span>
                      <span className={`text-[10px]`}>▼</span>
                    </div>
                    
                    {isDropdownOpen && (
                      <div className={`absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 shadow-2xl rounded-xl z-50`}>
                        {countries.map((country: Country, idx: number) => (
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className={`px-4 py-2.5 hover:bg-gray-100 cursor-pointer text-sm flex items-center justify-between text-black transition-colors`}>
                            <div className={`flex items-center gap-2.5 truncate mr-2`}>
                              <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} className={`w-5 object-contain shrink-0`} />
                              <span className={`font-bold`}>{country.code}</span>
                              <span className={`text-xs text-black truncate`}>{country.name}</span>
                            </div>
                            <span className={`text-[#772424] font-black shrink-0`}>{country.dial}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <input 
                      type={`tel`} 
                      placeholder={`Phone Number`} 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      required 
                      className={`w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium`} 
                      style={autofillFixStyle}
                    />
                  </div>

                  <div className={`flex items-center gap-2 mt-2`}>
                    <input type={`checkbox`} id={`gcPrivacy`} required defaultChecked className={`w-4 h-4 accent-[#C5A059] rounded cursor-pointer`} />
                    <label htmlFor={`gcPrivacy`} className={`text-xs text-white/80 cursor-pointer`}>
                      I have read and accept the <Link href={`/privacy-policy`} className={`text-[#C5A059] font-black hover:underline`}>Privacy Policy.</Link>
                    </label>
                  </div>

                  <button type={`submit`} className={`w-full py-4 bg-white hover:bg-gray-100 text-[#772424] font-extrabold rounded-xl transition-all tracking-wider text-sm mt-2 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]`}>
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