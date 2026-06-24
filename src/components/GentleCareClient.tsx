"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

// Path points to '../data/countries' because this file sits inside /src/components
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

  // Defeats Google Chrome's forced white Autofill override
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
          {/* Explicitly excepted heading: Changed to text-black */}
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
                  src={`/gentle-care-banner.jpg`} 
                  alt={`Hair Skill Clinic Gentle Care Program`} 
                  className={`w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000`} 
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`} />
                <div className={`absolute bottom-6 left-6 bg-[#772424] text-white text-xs md:text-sm font-black px-5 py-2.5 rounded-full shadow-lg border border-white/20 tracking-wide`}>
                  S.H., 30, 3725 Grafts @ Hair Skill Clinic
                </div>
              </motion.div>

              {/* Core Introduction */}
              <motion.div initial={`hidden`} animate={`visible`} variants={fadeUp} className={`mb-12`}>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Hair Skill Hair Clinic is passionate about patient's ultimate comfort in all stages of your visit. Hair Skill Gentle Care manifests how a patient's ultimate comfort is considered a total hospitality experience.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-8 font-medium`}>
                  Your specialized assistants are assigned to you when you first contact Hair Skill Hair Clinic, which means there's always someone with you to support you during the entire process.
                </p>
                <p className={`text-black text-lg md:text-xl font-black p-6 bg-gray-50 rounded-2xl border-l-4 border-[#772424]`}>
                  Let's have a look at how the touchpoints are carefully designed for your seamless hospitality and operation experience.
                </p>
              </motion.div>

              {/* Bulleted Touchpoints List */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-12 flex flex-col gap-4`}
              >
                <div className={`flex items-start gap-3`}>
                  <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0`} />
                  <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                    Every <span className={`font-bold text-black underline decoration-[#C5A059]`}>hair transplant</span> application is assigned to a case manager; the whole process is executed under the control of the case manager.
                  </p>
                </div>
                <div className={`flex items-start gap-3`}>
                  <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0`} />
                  <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                    Your case manager sends Medical Evaluation Survey and collects your information about your needs and expectations, including photos of the patient.
                  </p>
                </div>
                <div className={`flex items-start gap-3`}>
                  <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0`} />
                  <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                    Your case manager and surgeon overviews needs and expectations; executes pre-planning and prepares an Evaluation Report.
                  </p>
                </div>
                <div className={`flex items-start gap-3`}>
                  <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0`} />
                  <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                    Your case manager submits the treatment plan to the patient.
                  </p>
                </div>
                <div className={`flex items-start gap-3`}>
                  <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0`} />
                  <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                    Your case manager assists you through every step you take.
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
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-black`}>Operation Day:</span> You will be welcomed by your bi-lingual Guest Relations Specialists and she will be your guide throughout the day as you complete each phase of your operation.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-black`}>Pre Operation Briefing:</span> Your doctor will be briefing you early in the morning about the procedures you will go through.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-black`}>True Planning before the operation:</span> Your Hair Line Planning is conducted by our best-in-class Hair Transplant Surgeons.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-black`}>Operation:</span> All operations are performed by medical doctors and medical team.
                </p>
              </motion.div>

              {/* Post Operation Bulleted Points */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-14 flex flex-col gap-4`}
              >
                <div className={`flex items-start gap-3`}>
                  <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0`} />
                  <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                    Post Operation controls are granted by our Doctor's final check-out procedures.
                  </p>
                </div>
                <div className={`flex items-start gap-3`}>
                  <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0`} />
                  <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                    After you have your hair transplant operation and check out, you will be assigned to and introduced to our experienced patient experience specialist who will be responsible for your hair growth in the coming 18 months. Patient experience specialists are experts on hair growth observation; work closely with our doctors to ensure a healthy growth
                  </p>
                </div>
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
                  src={`/doctors-checkup.jpg`} 
                  alt={`Dr. Mehmet Erdogan Checkup`} 
                  className={`w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000`} 
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`} />
                <div className={`absolute bottom-6 left-6 bg-[#772424] text-white text-xs md:text-sm font-black px-5 py-2.5 rounded-full shadow-lg border border-white/20 tracking-wide`}>
                  F.B., 39, 3400 Grafts @ Hair Skill Clinic
                </div>
              </motion.div>

              {/* Holistic Approach Paragraphs */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-14 flex flex-col gap-6`}
              >
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  Hair Skill Gentle Care Program is managed by the Patient Experience Department under Hair Skill Hair Clinic Corporate management hierarchy. Our Patient's Satisfaction is guaranteed by Hair Skill Hair Clinic's patient-first attitude.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  At Hair Skill Hair Clinic, we believe in taking a holistic approach to the entire process leads to actual long-term success, which is why we do not only concentrate on the operation day. This holistic point of view, supported by applying the post-operative guidelines, secures operation success at a very top rate.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  Taking care of newly transplanted hair is our mutual responsibility with the patient, however, Hair Skill Hair Clinic is there to support you no matter what in the long run.
                </p>
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
                  <span className={`font-black text-[#772424]`}>Case Manager:</span> Your first-in contact assistant who plans your treatment and solves every issue about your hospitality arrangements.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-[#772424]`}>Guest Relations Specialist:</span> Your operation day guide who will be supporting you on the ground at the clinic.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-[#772424]`}>Hair Transplant Surgeon:</span> Your hairline designer, operation planner, and performer. (M.D. Doctor)
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-[#772424]`}>Hair Transplant Surgical Assistant:</span> Your operation performer.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  <span className={`font-black text-[#772424]`}>Patient Experience Specialist:</span> Your main point of contact for post-operation procedures, follow-up, and secure your satisfaction.
                </p>
              </motion.div>

            </div>

            {/* RIGHT SIDE: STICKY CONSULTATION FORM (Glides in from right) */}
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