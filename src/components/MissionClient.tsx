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

export default function MissionClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Mission & Vision Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, `_blank`);
  };

  // Defeats Google Chrome forced white Autofill override
  const autofillFixStyle = {
    WebkitBoxShadow: `0 0 0px 1000px #772424 inset`,
    WebkitTextFillColor: `#ffffff`
  };

  return (
    <div className={`min-h-screen bg-white text-gray-900 font-sans selection:bg-[#772424] selection:text-white pb-24`}>
      
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
            <span className={`text-[#772424]`}>Mission & Vision</span>
          </div>
          <h1 className={`text-4xl md:text-6xl font-black text-gray-900 tracking-tight`}>
            Mission & Vision
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className={`py-16 px-6 bg-white`}>
        <div className={`max-w-[1200px] mx-auto`}>
          <div className={`flex flex-col lg:flex-row gap-16 items-start`}>
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className={`w-full lg:w-2/3 flex flex-col`}>
              
              {/* Top Banner Image */}
              <motion.div 
                initial={`hidden`} 
                animate={`visible`} 
                variants={fadeUp}
                className={`w-full rounded-2xl overflow-hidden bg-[#f8f9fa] relative mb-12 shadow-lg group`}
              >
                <img 
                  src={`/about/7.webp`} 
                  alt={`Hair Skill Clinic Mission`} 
                  className={`w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-1000`} 
                />
              </motion.div>

              {/* Mission Section */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-14`}
              >
                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight`}>
                  Mission
                </h2>
                
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  At Hair Skill Clinic, our mission is to provide our patients with reliable, innovative, and high-quality <span className={`font-bold text-gray-900 underline decoration-[#C5A059]`}>hair transplant</span> solutions. We aim to exceed our patients expectations through personalized approaches, adhering to ethical and professional values. By closely following technological advancements, we apply the most effective treatment methods and continually enhance our teams expertise through ongoing education. Our priority is to offer a safe, comfortable, and transparent service experience with a focus on quality and patient satisfaction. Our goal is to improve our patients quality of life and earn their trust through our services.
                </p>
              </motion.div>

              {/* Vision Section */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-12`}
              >
                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight`}>
                  Vision
                </h2>
                
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  At Hair Skill Clinic, our vision is to become the worlds leading hair transplant clinic. To achieve this, we offer innovative, high-quality healthcare services, guided by the True Philosophy, which places human health and happiness at the core of everything we do.
                </p>

                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  We carefully select experienced, skilled professionals and support their continuous development and motivation. By leveraging the latest technology and innovative methods, we aim to maintain our leadership in the industry. We prioritize the safety of both patients and employees, ensuring a secure and comfortable treatment process. With a commitment to social responsibility, we strive to make a positive impact on society and the environment. Our ultimate goal is to grow globally and be recognized as a trusted health institution worldwide.
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
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className={`px-4 py-2.5 hover:bg-gray-100 cursor-pointer text-sm flex items-center justify-between text-gray-900 transition-colors`}>
                            <div className={`flex items-center gap-2.5 truncate mr-2`}>
                              <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} className={`w-5 object-contain shrink-0`} />
                              <span className={`font-bold`}>{country.code}</span>
                              <span className={`text-xs text-gray-500 truncate`}>{country.name}</span>
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
                    <input type={`checkbox`} id={`missionPrivacy`} required defaultChecked className={`w-4 h-4 accent-[#C5A059] rounded cursor-pointer`} />
                    <label htmlFor={`missionPrivacy`} className={`text-xs text-white/80 cursor-pointer`}>
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