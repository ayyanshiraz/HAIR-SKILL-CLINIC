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
                  src={`/about/6.webp`} 
                  alt={`Hair Skill Clinic True Philosophy`} 
                  className={`w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000`} 
                />
                
              </motion.div>

              {/* Core Introduction (Fades in immediately) */}
              <motion.div initial={`hidden`} animate={`visible`} variants={fadeUp}>
                <h2 className={`text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight`}>
                  True Philosophy
                </h2>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Hair Skill Clinic has strictly disciplined its unique approach to hair transplantation around the TRUE Philosophy, which primarily consists of three core elements that deeply center on the main values of our brand. When our founders first established Hair Skill, their guiding values were analysis, accomplishment, and advancement.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-8 font-medium`}>
                  They firmly believed that those specific values would help them become the most recognized hair transplantation clinic in the region. Not long after, in the bright light of those values, Hair Skill Clinic confidently introduced its dedicated way of doing things and established its philosophy as a golden hair transplantation standard.
                </p>
                <p className={`text-gray-900 text-lg md:text-xl font-black mb-12 p-6 bg-gray-50 rounded-2xl border-l-4 border-[#772424]`}>
                  True philosophy consists of four key aspects:
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
                  At Hair Skill, everything always starts with detailed analysis. The True Planning technique enlightens the perfect way to achieve the most natural looking hair transplant results. Examining the medical data before making a final decision is a key step to ensure the best hair transplant procedure. By doing this, Hair Skill carefully recognizes patient inputs and strives to achieve maximum satisfaction. At the True Planning step, our doctors examine the donor area with extreme detail.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  Hair Skill believes that defining the most appropriate number of grafts for patient needs depends entirely on the capability and gusto of the doctor in designing hair. After a thorough donor area examination, the transplantation area is carefully planned in strict accordance with the prior examination data. Then the hairline is precisely drawn with the help of special tools, which guarantee an optimal and highly natural result.
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
                  We strongly believe that a proper hair transplant hairline design is key for a natural looking hair transplantation result. Our True Hair Line Design procedures prioritize single hair follicular units to be delicately positioned on the front lines to perfectly maintain aesthetic proportions and a natural look.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Our aesthetic front line drawing always considers precise angles to grow hair in a completely natural looking way. We care deeply about sustaining the masculinity of the hairline; therefore, the exact position of the hairline is determined according to the natural muscles on the forehead.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  This careful approach is then combined with highly sensitive calculations of facial proportions. Designing a hairline with respect to age is another critical factor, as aging is a natural process, so a natural looking hair transplantation should always be in perfect harmony with the age of the patient.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  Our True Hairline Design uses micro and macro disorders as an advantage to sustain a natural look and beautifully facilitates the frontal temporal transition.
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
                  The operation day is the key milestone for a successful result in the whole transformation process. Your operation day is just like a race day after a long preparation of complex technical details. Therefore, absolutely nothing is allowed to go wrong thanks to the highest grade measures taken by Hair Skill.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  The main aim of Hair Skill is to achieve highly successful operations and results, putting all our combined efforts and resources to be a true achiever and provide the best hair transplant in Lahore.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  The deep operational experience of our individuals, strict operational excellence standards, and the manual dexterity of our experts are the core qualifications that are completely contained in the DNA of the Hair Skill team.
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
                  The founders of Hair Skill Clinic are strongly connected to the idea of seeing continuous development as the fundamental core of modern medicine. Hair Skill has a perpetual passion for thriving innovation. Our medical experts and consultants are always searching to find more effective ways to perform the most successful hair transplant operations.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Having the advanced Sapphire Transplantation technique as an absolute must have for all operations is one of the brightest manifestations of true innovation. True innovation motifs are a never ending search for reaching absolute excellence. All team members at Hair Skill Clinic are rigorously trained in accordance with True Philosophy elements and regularly tested by its high success criteria.
                </p>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  The core elements of True Philosophy strictly ensure that all the processes at Hair Skill are properly controlled and run by much higher standards than the industry authorities require.
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