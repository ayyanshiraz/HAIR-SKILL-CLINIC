"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Path points to '../data/countries' because this component sits inside /src/components
import { countries, type Country } from "../data/countries";

// --- STRICT ANIMATION TYPES ---
// Explicitly typing as a 4-element tuple permanently fixes the TypeScript Variant error
const customEase: [number, number, number, number] = [0.2, 0.65, 0.3, 0.9];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: customEase 
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// --- LIVE COUNTER COMPONENT ---
function AnimatedStat({ from = 0, to, duration = 2.5 }: { from?: number, to: number, duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest: number) => Math.round(latest).toLocaleString());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: duration, ease: [0.16, 1, 0.3, 1] });
    }
  }, [count, isInView, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function AboutPageClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the About Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, `_blank`);
  };

  // --- GRID DATA ---
  const aboutArticles = [
    {
      title: `Code of Ethics`,
      image: `/about/1.webp`,
      summary: `Our Ethical Approach at Hair Skill Clinic. At Hair Skill Clinic, we place honesty, transparency, patient safety, and confidentiality at the core of our operations.`,
      link: `/about/ethics`
    },
    {
      title: `Hair Skill Reference Program`,
      image: `/about/2.webp`,
      summary: `Hair Skill Gentle Club. For all these years, our patients and we have formed a great family, and our relationship has been the most valuable asset we possess.`,
      link: `/about/reference-program`
    },
    {
      title: `Why To Choose Hair Skill Clinic?`,
      image: `/about/3.webp`,
      summary: `Excellence in Hair Transplantation in Lahore, Pakistan. Hair Skill Clinic is a leading hair transplant clinic in Pakistan, providing advanced micro-surgical procedures.`,
      link: `/about/why-choose-us`
    },
    {
      title: `Hair Skill Gentle Care`,
      image: `/about/4.webp`,
      summary: `Hair Skill Clinic is passionate about patients ultimate comfort in all stages of your visit. Hair Skill Gentle Care manifests how a patients well-being is prioritized.`,
      link: `/about/gentle-care`
    },
    {
      title: `Hair Skill True Philosophy`,
      image: `/about/6.webp`,
      summary: `True Philosophy. Hair Skill Clinic has disciplined its way of performing hair transplantation around the TRUE Philosophy, establishing a higher medical benchmark.`,
      link: `/about/philosophy`
    },
    {
      title: `Hair Skill Clinic`,
      image: `/about/7.webp`,
      summary: `The Journey of Growth of Two Perfectionists! It all started with passion for advancing hair transplantation.`,
      link: `/about/our-story`
    }
  ];

  // Defeats Google Chrome forced white Autofill background override
  const autofillFixStyle = {
    WebkitBoxShadow: `0 0 0px 1000px #772424 inset`,
    WebkitTextFillColor: `#ffffff`
  };

  return (
    <div className={`min-h-screen bg-white text-gray-900 font-sans selection:bg-[#772424] selection:text-white pb-24`}>
      
      {/* --- HERO SECTION (#772424 BURGUNDY + LIVE PULSING BADGE) --- */}
      <section className={`relative pt-28 lg:pt-36 pb-20 px-6 overflow-hidden bg-[#772424] shadow-inner`}>
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/10 blur-[100px] rounded-full pointer-events-none`} />

        <div className={`max-w-[1200px] mx-auto text-center relative z-10`}>
          
          {/* Live pulsing indicator badge */}
          <motion.div 
            animate={{ 
              scale: [1, 1.04, 1],
              opacity: [0.85, 1, 0.85],
              boxShadow: [
                `0 0 0px rgba(255,255,255,0)`, 
                `0 0 15px rgba(255,255,255,0.25)`, 
                `0 0 0px rgba(255,255,255,0)`
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: `easeInOut` }}
            className={`inline-flex items-center gap-2.5 py-1.5 px-5 rounded-full bg-white/10 border border-white/20 text-xs font-black tracking-[0.2em] uppercase mb-6 text-white`}
          >
            <span className={`w-2 h-2 rounded-full bg-[#C5A059] animate-pulse`} />
            The Art of Restoration
          </motion.div>
          
          <motion.h1 
            initial={`hidden`} animate={`visible`} variants={fadeUp}
            className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-white leading-[1.15]`}
          >
            Redefining <br className={`hidden md:block`} />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C5A059] to-amber-100 drop-shadow-md`}>
              Confidence.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={`hidden`} animate={`visible`} variants={fadeUp} transition={{ delay: 0.2 }}
            className={`text-base md:text-xl text-white/95 max-w-2xl mx-auto font-medium leading-relaxed`}
          >
            We dont just restore hair; we restore the spirit. Our clinic combines world-class surgical precision with an unparalleled aesthetic vision to deliver results that are indistinguishable from nature.
          </motion.p>
        </div>
      </section>

      {/* --- OUR STORY (ANIMATED SPLIT LAYOUT + LIVE STATS) --- */}
      <section className={`py-20 px-6 overflow-hidden bg-white`}>
        <div className={`max-w-[1200px] mx-auto`}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
            
            {/* Animated Image Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: customEase }}
              className={`relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none`} />
              <img 
                src={`/about-clinic.jpg`} 
                alt={`State of the art clinic facilities`} 
                className={`w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-105`}
              />
            </motion.div>

            {/* Animated Text Side */}
            <motion.div 
              initial={`hidden`} whileInView={`visible`} viewport={{ once: true }} variants={staggerContainer}
              className={`flex flex-col gap-8`}
            >
              <div>
                <motion.h2 variants={fadeUp} className={`text-3xl md:text-5xl font-black mb-6 tracking-tight text-gray-900 leading-[1.1]`}>
                  Born from a Vision of <br />
                  <span className={`italic font-light text-[#772424]`}>Excellence</span>
                </motion.h2>
                <motion.p variants={fadeUp} className={`text-gray-600 text-lg leading-relaxed mb-6 font-medium`}>
                  Founded by pioneering surgeons, our clinic was built on a simple premise: hair transplantation should not be an industrial process. It is a highly personalized medical art form. 
                </motion.p>
                <motion.p variants={fadeUp} className={`text-gray-600 text-lg leading-relaxed font-medium`}>
                  Every follicular unit is extracted with care, preserved with advanced cellular solutions, and implanted at the exact angle, depth, and direction required to recreate your natural growth pattern. We treat every patient as our masterpiece.
                </motion.p>
              </div>

              {/* Live Animated Stats Grid */}
              <motion.div variants={fadeUp} className={`grid grid-cols-2 gap-6 pt-6 border-t border-gray-200`}>
                <div>
                  <h4 className={`text-4xl md:text-5xl font-black text-gray-900 mb-2 flex items-center`}>
                    <AnimatedStat to={15} duration={2} />
                    <span className={`text-[#772424]`}>+</span>
                  </h4>
                  <p className={`text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider`}>Years of Mastery</p>
                </div>
                <div>
                  <h4 className={`text-4xl md:text-5xl font-black text-gray-900 mb-2 flex items-center`}>
                    <AnimatedStat to={50} duration={2.5} />
                    <span className={`text-[#772424]`}>k+</span>
                  </h4>
                  <p className={`text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider`}>Grafts Placed Daily</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- TOPICS GRID (FULLY CLICKABLE CARDS) & STICKY #772424 CONSULTATION FORM --- */}
      <section className={`py-20 px-6 relative z-20 bg-gray-50/60 border-t border-gray-100`}>
        <div className={`max-w-[1300px] mx-auto`}>
          <div className={`flex flex-col lg:flex-row gap-12 items-start`}>
            
            {/* Left Column: 6 Cards Grid */}
            <div className={`w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8`}>
              {aboutArticles.map((art, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white rounded-3xl overflow-hidden border border-gray-200/80 flex flex-col h-full group md:hover:border-[#772424] active:border-[#772424] md:hover:shadow-[0_20px_40px_-15px_rgba(119,36,36,0.15)] active:shadow-[0_20px_40px_-15px_rgba(119,36,36,0.15)] transition-all duration-300 shadow-lg`}
                >
                  <Link href={art.link} className={`flex flex-col flex-1 h-full cursor-pointer`}>
                    <div className={`w-full aspect-[16/10] overflow-hidden relative bg-gray-100 shrink-0`}>
                      <img src={art.image} alt={art.title} className={`w-full h-full object-cover md:group-hover:scale-105 group-active:scale-105 transition-transform duration-700`} />
                    </div>
                    <div className={`p-8 flex flex-col flex-1 justify-between bg-white`}>
                      <div>
                        <h3 className={`text-xl font-extrabold text-gray-900 mb-3 md:group-hover:text-[#772424] group-active:text-[#772424] transition-colors`}>{art.title}</h3>
                        <p className={`text-gray-600 text-sm leading-relaxed mb-6 font-medium`}>{art.summary}</p>
                      </div>
                      <div className={`text-[#772424] font-black text-sm tracking-wider uppercase flex items-center gap-2 md:group-hover:translate-x-1 group-active:translate-x-1 transition-transform w-fit`}>
                        More <span>→</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Sticky Consultation Form */}
            <div className={`w-full lg:w-1/3 lg:sticky lg:top-32`}>
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
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className={`px-4 py-2.5 md:hover:bg-gray-100 active:bg-gray-100 cursor-pointer text-sm flex items-center justify-between text-gray-900 transition-colors`}>
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
                    <input type={`checkbox`} id={`aboutPrivacy`} required defaultChecked className={`w-4 h-4 accent-[#C5A059] rounded cursor-pointer`} />
                    <label htmlFor={`aboutPrivacy`} className={`text-xs text-white/80 cursor-pointer`}>
                      I have read and accept the <Link href={`/privacy-policy`} className={`text-[#C5A059] font-black md:hover:underline active:underline`}>Privacy Policy.</Link>
                    </label>
                  </div>

                  <button type={`submit`} className={`w-full py-4 bg-white md:hover:bg-gray-100 active:bg-gray-100 text-[#772424] font-extrabold rounded-xl transition-all tracking-wider text-sm mt-2 flex items-center justify-center gap-2 shadow-lg md:hover:scale-[1.02] active:scale-[0.99]`}>
                    Submit <span>›</span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}