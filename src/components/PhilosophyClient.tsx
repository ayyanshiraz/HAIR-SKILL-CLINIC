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

export default function PhilosophyClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the True Philosophy Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, `_blank`);
  };

  // Defeats Google Chrome's forced white Autofill override
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
            <span className={`text-[#772424]`}>True Philosophy</span>
          </div>
          <h1 className={`text-4xl md:text-6xl font-black text-gray-900 tracking-tight`}>
            Hair Skill True Philosophy
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className={`py-16 px-6 bg-white`}>
        <div className={`max-w-[1200px] mx-auto`}>
          <div className={`flex flex-col lg:flex-row gap-16 items-start`}>
            
            {/* LEFT SIDE: SCROLL-ANIMATED ARTICLES */}
            <div className={`w-full lg:w-2/3 flex flex-col`}>
              
              {/* Top Banner (Fades in immediately) */}
              <motion.div 
                initial={`hidden`} 
                animate={`visible`} 
                variants={fadeUp}
                className={`w-full aspect-[16/9] rounded-3xl overflow-hidden bg-gray-900 relative mb-12 shadow-2xl border border-gray-100 group`}
              >
                <img 
                  src={`/about-clinic.jpg`} 
                  alt={`Hair Skill Clinic True Philosophy`} 
                  className={`w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000`} 
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`} />
                <div className={`absolute bottom-6 left-6 bg-[#772424] text-white text-xs md:text-sm font-black px-5 py-2.5 rounded-full shadow-lg border border-white/20 tracking-wide`}>
                  C.F., 30, 2400 Grafts @ Hair Skill Clinic
                </div>
              </motion.div>

              {/* Core Introduction (Fades in immediately) */}
              <motion.div initial={`hidden`} animate={`visible`} variants={fadeUp}>
                <h2 className={`text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight`}>
                  True Philosophy
                </h2>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Hair Skill Clinic has disciplined its way of performing hair transplantation around the TRUE Philosophy, which consists of three elements, and these three elements circle around the three main values of the brand. When the founders first established Hair Skill back then, their driving values were Analysis, Accomplishment, and Advancement.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-8 font-medium`}>
                  They believed that those values help them become the regions most recognized hair transplantation clinic. Not long after, in the light of those values, Hair Skill Clinic introduced its way of doing and its philosophy as a hair transplantation standard.
                </p>
                <p className={`text-gray-900 text-lg md:text-xl font-black mb-12 p-6 bg-gray-50 rounded-2xl border-l-4 border-[#772424]`}>
                  True Philosophy consists of four key aspects:
                </p>
              </motion.div>

              {/* Aspect 1: True Planning (Triggers as user scrolls to it) */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-14`}
              >
                <h3 className={`text-2xl md:text-3xl font-black text-[#772424] mb-4 tracking-tight flex items-center gap-3`}>
                  <span className={`w-3 h-3 rounded-full bg-[#C5A059] inline-block`} />
                  True Planning
                </h3>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  At Hair Skill, it always starts with analysis. True Planning technique enlightens the way to achieve natural-looking transplantation results. Examining the data before making a decision is a key step in hair transplantation. So that, Hair Skill recognizes patients inputs and strives to make the maximum. At True Planning step, our doctors detailly examine the donor area.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  Hair Skill believes that defining the most appropriate numbers of grafts for the patients need depends on the doctors capability and gusto in designing hair. After donor area examination, the transplantation area is planned in accordance with the prior examination data. Then the hairline is drawn with the help of special tools which ensure an optimal and natural result.
                </p>
              </motion.div>

              {/* Aspect 2: True Hair Line Design */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-14`}
              >
                <h3 className={`text-2xl md:text-3xl font-black text-[#772424] mb-4 tracking-tight flex items-center gap-3`}>
                  <span className={`w-3 h-3 rounded-full bg-[#C5A059] inline-block`} />
                  True Hair Line Design
                </h3>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  We believe that hairline design is key for a natural-looking hair transplantation result. Our True Hair Line Design procedures prioritize single hair follicular units to be positioned on the front lines to maintain aesthetic proportions and look.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Our aesthetic front-line drawing always considers angles to grow hair in a natural-looking way. We care about sustaining the masculinity of the hairline; therefore, the position of the hairline is determined according to the muscles on the forehead.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  This approach is combined with sensitive calculations of the facial proportions. Designing a hairline with respect to age is another critical factor, aging is a natural process so natural-looking hair transplantation should be in harmony with the patients age.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  Our True Hair Line Design uses micro and macro disorders as an advantage to sustain natural-looking and facilitates the frontal-temporal transition.
                </p>
              </motion.div>

              {/* Aspect 3: True Execution */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-14`}
              >
                <h3 className={`text-2xl md:text-3xl font-black text-[#772424] mb-4 tracking-tight flex items-center gap-3`}>
                  <span className={`w-3 h-3 rounded-full bg-[#C5A059] inline-block`} />
                  True Execution
                </h3>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  The operation day is the key milestone for a successful result in the whole transformation process. Your operation day is like a race day after a long preparation of technical details. Therefore, nothing is allowed to go wrong thanks to Hair Skills highest-grade measures.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Hair Skills main aim is to achieve successful operations and results and puts all efforts and resources to be an achiever and do the best.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  Operational experience of individuals, operational excellence standards, and manual dexterity of experts are the qualifications that are all contained in Hair Skill team DNA.
                </p>
              </motion.div>

              {/* Aspect 4: True Innovation */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
              >
                <h3 className={`text-2xl md:text-3xl font-black text-[#772424] mb-4 tracking-tight flex items-center gap-3`}>
                  <span className={`w-3 h-3 rounded-full bg-[#C5A059] inline-block`} />
                  True Innovation
                </h3>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Hair Skill Clinic founders are strongly connected to the idea of seeing development as the fundamental of medicine. Hair Skill has a perpetual passion for thriving innovation. Hair Skill medical experts and consultants are always searching to find more effective ways to perform the most effective hair transplant operations.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Having the Sapphire Transplantation technique as a must-have for all operations is one of the brightest manifestation of True Innovation. True Innovation motifs are never-ending searches for reaching excellence. All team members at Hair Skill Clinic are trained in accordance to True Philosophy elements and regularly tested by its success criteria.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  Three elements of True Philosophy ensure that all the processes at Hair Skill are controlled and run by higher standards than the industry authorities required.
                </p>
              </motion.div>

            </div>

            {/* RIGHT SIDE: STICKY CONSULTATION FORM (Glides in from the right) */}
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
                    <input type={`checkbox`} id={`philPrivacy`} required defaultChecked className={`w-4 h-4 accent-[#C5A059] rounded cursor-pointer`} />
                    <label htmlFor={`philPrivacy`} className={`text-xs text-white/80 cursor-pointer`}>
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