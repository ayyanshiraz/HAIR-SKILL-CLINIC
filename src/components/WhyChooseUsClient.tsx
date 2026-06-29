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

export default function WhyChooseUsClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Why Choose Us Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
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
            <span className={`text-[#772424]`}>Why To Choose Hair Skill Clinic?</span>
          </div>
          {/* Explicitly excepted heading: Changed to text-black */}
          <h1 className={`text-4xl md:text-6xl font-black text-gray-900 tracking-tight`}>
            Why To Choose Hair Skill Clinic?
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className={`py-16 px-6 bg-white`}>
        <div className={`max-w-[1200px] mx-auto`}>
          <div className={`flex flex-col lg:flex-row gap-16 items-start`}>
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className={`w-full lg:w-2/3 flex flex-col`}>
              
              {/* Top Banner - Image size adapted to match screenshot exactly */}
              <motion.div 
                initial={`hidden`} 
                animate={`visible`} 
                variants={fadeUp}
                className={`w-full rounded-2xl overflow-hidden bg-[#0A1A2F] relative mb-10 shadow-lg group`}
              >
                <img 
                  src={`/about/3.webp`} 
                  alt={`Hair Skill Clinic Doctors and Before After Showcase`} 
                  className={`w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-1000`} 
                />
              </motion.div>

              {/* Excellence Section */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-14`}
              >
                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight`}>
                  Excellence in Hair Transplantation in Pakistan
                </h2>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Hair Skill Clinic is a leading hair transplant clinic in Pakistan, providing advanced medical care to patients from all around the world. Our clinic operates under internationally recognized standards, focusing on safety, medical precision, and long-term results.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Comprehensive evaluations are conducted across all departments, including medical services, nursing care, international patient management, infection control, sustainability policies, and facility safety. These assessments ensure that every stage of the patient journey meets globally accepted healthcare standards.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  As a result of these extensive evaluations, Hair Skill Clinic has been awarded the A-Rated Certification, becoming the first and only hair transplant clinic in the world to receive this level of recognition.
                </p>
              </motion.div>

              {/* Patient-Centered Approach Section */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-14`}
              >
                <h3 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight`}>
                  Patient-Centered Hair Transplant Approach
                </h3>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Every hair transplant procedure at Hair Skill Clinic is planned individually. Each patients hair structure, facial anatomy, donor capacity, and expectations are carefully assessed before treatment.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-4 font-medium`}>
                  Key principles of the planning process include:
                </p>

                <div className={`flex flex-col gap-3 mb-6 ml-2`}>
                  {[
                    `Accurate donor area evaluation`,
                    `Long-term donor area preservation`,
                    `Natural hairline design`,
                    `Balanced and realistic density planning`
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-start gap-3`}>
                      <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0`} />
                      <p className={`text-black text-base md:text-lg font-bold`}>{item}</p>
                    </div>
                  ))}
                </div>

                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  This personalized approach ensures natural-looking results that remain sustainable over time.
                </p>
              </motion.div>

              {/* Medical Precision Section */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-14`}
              >
                <h3 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight`}>
                  Medical Precision and Advanced Techniques
                </h3>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Hair transplantation is both a medical and artistic discipline. At Hair Skill Clinic, procedures are performed using scientifically proven techniques and evidence-based planning.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-4 font-medium`}>
                  Rather than focusing solely on the number of grafts, the clinic prioritizes:
                </p>

                <div className={`flex flex-col gap-3 mb-6 ml-2`}>
                  {[
                    `Proper graft selection`,
                    `Correct angle, direction, and depth of implantation`,
                    `Preservation of donor area health`
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-start gap-3`}>
                      <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0`} />
                      <p className={`text-black text-base md:text-lg font-bold`}>{item}</p>
                    </div>
                  ))}
                </div>

                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  This method supports natural hair growth patterns and long-lasting aesthetic results.
                </p>
              </motion.div>

              {/* Safety and Ethics Section */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-14`}
              >
                <h3 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight`}>
                  Commitment to Safety, Ethics, and Sustainability
                </h3>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Patient safety is a core principle at Hair Skill Clinic. All medical procedures follow international healthcare protocols, and medical teams undergo continuous training in emergency response and patient safety.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  The clinic avoids unrealistic promises and focuses on transparent communication, ethical practice, and medically sound decision-making. This approach builds long-term trust and ensures responsible, patient-centered care.
                </p>
              </motion.div>

              {/* Trusted Destination Section */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
              >
                <h3 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight`}>
                  A Trusted Destination for Hair Transplant in Pakistan
                </h3>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  Located in Pakistan, one of the worlds leading medical tourism destinations, Hair Skill Clinic welcomes patients from Europe, the Middle East, and beyond. With international accreditations, experienced medical professionals, and a patient-focused philosophy, the clinic continues to be a trusted name in modern hair transplantation.
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
                    <input type={`checkbox`} id={`whyChoosePrivacy`} required defaultChecked className={`w-4 h-4 accent-[#C5A059] rounded cursor-pointer`} />
                    <label htmlFor={`whyChoosePrivacy`} className={`text-xs text-white/80 cursor-pointer`}>
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