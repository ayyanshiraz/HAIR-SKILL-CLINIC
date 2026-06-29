"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function OurStoryClient() {
  // --- FORM STATES ---
  const defaultCountry = countries.find((c: Country) => c.code === `PK`) || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState(``);
  const [email, setEmail] = useState(``);
  const [phone, setPhone] = useState(``);

  // --- LIGHTBOX STATES ---
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
  const isLightboxOpen = lightboxIndex !== -1;

  // --- VIDEO STATE ---
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = `auto`;
    }
    return () => {
      document.body.style.overflow = `auto`;
    };
  }, [isLightboxOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = `923014923336`;
    const textMessage = `Hello! I would like to get a free consultation from the Our Story Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, `_blank`);
  };

  // Defeats Google Chrome forced white Autofill override
  const autofillFixStyle = {
    WebkitBoxShadow: `0 0 0px 1000px #772424 inset`,
    WebkitTextFillColor: `#ffffff`
  };

  // Gallery Images with Captions for the Lightbox (captions kept in array just for alt tags)
  const galleryImages = [
    { src: `/about/gallery-1.jpg`, caption: `Reception, Hair Skill Clinic` },
    { src: `/about/gallery-2.jpg`, caption: `Entrance, Hair Skill Clinic` },
    { src: `/about/gallery-3.jpg`, caption: `Lobby, Hair Skill Clinic` },
    { src: `/about/gallery-4.jpg`, caption: `Waiting Lounge, Hair Skill Clinic` },
    { src: `/about/gallery-5.jpg`, caption: `Operation Theater, Hair Skill Clinic` },
    { src: `/about/gallery-6.jpg`, caption: `Resting Area, Hair Skill Clinic` },
  ];

  // Lightbox Navigation Controls
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
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
            <span className={`text-[#772424]`}>Hair Skill Clinic</span>
          </div>
          <h1 className={`text-4xl md:text-6xl font-black text-gray-900 tracking-tight`}>
            Hair Skill Clinic
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
                  alt={`Hair Skill Clinic Building`} 
                  className={`w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-1000`} 
                />
              </motion.div>

              {/* The Journey Section */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-12`}
              >
                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight`}>
                  A Journey of Growth and Perfection!
                </h2>
                
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  It all started with a profound passion for advancing hair transplantation. By adapting years of experience to <span className={`font-bold text-[#772424] underline decoration-[#C5A059]`}>FUE hair transplantation</span> techniques, we established Hair Skill Clinic and demonstrated a true difference in medical aesthetics and hair restoration.
                </p>

                <p className={`text-black text-base md:text-lg leading-relaxed mb-10 font-medium`}>
                  As a global benchmark for medical <span className={`font-bold text-gray-900 underline decoration-[#C5A059]`}>hair transplant</span> clinics and one of the best in its class in the region, Hair Skill Clinic has been recognized by leading international medical and health tourism authorities for its outstanding contributions to the field.
                </p>

                {/* --- VIDEO COVER PAGE COMPONENT --- */}
                {!isVideoPlaying ? (
                  <div 
                    onClick={() => setIsVideoPlaying(true)}
                    className={`relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border border-gray-100 mb-12`}
                  >
                    <img 
                      src={`/about/8.webp`} 
                      alt={`Hair Transplant Documentary in Pakistan`} 
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`} 
                    />
                    {/* Dark Gradient Overlay */}
                    <div className={`absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500`} />
                    
                    {/* Animated Play Button */}
                    <div className={`absolute inset-0 flex items-center justify-center`}>
                      <div className={`w-20 h-20 md:w-24 md:h-24 bg-[#e52d27] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(229,45,39,0.5)] group-hover:scale-110 group-hover:bg-[#ff3b35] transition-all duration-300`}>
                        <div className={`w-0 h-0 border-t-[14px] border-t-transparent border-l-[22px] border-l-white border-b-[14px] border-b-transparent ml-2`} />
                      </div>
                    </div>

                    {/* Text Overlay */}
                    <div className={`absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent`}>
                      <h3 className={`text-3xl md:text-5xl font-black text-white uppercase tracking-tight`}>
                        Hair Transplant in <span className={`text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C5A059]`}>Pakistan</span>
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div className={`relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 mb-12 bg-black`}>
                    <video 
                      src={`/about/Arif sb documentry (1).mp4`} 
                      controls 
                      autoPlay 
                      playsInline
                      className={`w-full h-full object-cover`}
                    />
                  </div>
                )}

                <p className={`text-black text-base md:text-lg leading-relaxed mb-12 font-medium`}>
                  Relocated to the financial district of Lahore, Hair Skill Clinic now continues its operations in a sophisticated, high-tech, seven-story clinic building where more than 100 well-trained staff members work. At Hair Skill, where quality and excellence are tied to intensive training procedures, every team member involved in hair transplant operations is well trained and tested according to the success criteria of the True Philosophy.
                </p>

                {/* Second Building Image */}
                <div className={`w-full rounded-2xl overflow-hidden bg-[#f8f9fa] relative mb-12 shadow-lg group`}>
                  <img 
                    src={`/about/3.webp`} 
                    alt={`Hair Skill Clinic Building Exterior`} 
                    className={`w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-1000`} 
                  />
                </div>
              </motion.div>

              {/* Guided by Medical Expertise Section */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-12`}
              >
                <h3 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight italic`}>
                  Guided by Medical Expertise, Driven by Perfection!
                </h3>
                
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  The founders top priority consists of three critical components: Aesthetics, a highly natural-looking hair result, is one of the most important goals in operations. The highest level of patient comfort during and after surgery is ensured through numerous precautions; and the patients long-term overall transformation is always closely monitored. Today, Hair Skill Clinic approaches hair transplantation holistically and brings a visionary perspective to the field. For Hair Skill, this is not just a medical procedure but a complete experience that begins with full hospitality, continues through the surgical process, and opens a new chapter in the patients life.
                </p>

                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  The founders top priority consists of three critical components: <span className={`font-black text-gray-900`}>Aesthetics</span>, achieving an extremely natural-looking hair result is one of the most important goals in operations. During and after surgery, <span className={`font-black text-gray-900`}>the patients maximum comfort</span> is ensured through numerous precautions; and the patients long-term <span className={`font-black text-gray-900`}>overall transformation</span> is always closely monitored. Today, Hair Skill Clinic approaches the entire process holistically and brings a visionary perspective to hair transplantation. For Hair Skill, this is not just a medical procedure but a complete experience that begins with full hospitality, continues through the surgical process, and opens a new chapter in the patients life.
                </p>

                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  On this journey where many lives have been profoundly transformed, Hair Skill Clinic has become the meeting point for more than 20,000 gentlemen. For many people, Hair Skill Clinic is not only a medical clinic but also a gathering place for passionate and perfectionist individuals.
                </p>

                <p className={`text-black text-base md:text-lg leading-relaxed mb-12 font-medium`}>
                  At Hair Skill, we believe in ultimate perfection through continuous improvement, progress in research, and always remaining open to innovative technologies. The future stands before us with undiscovered chapters waiting to be experienced.
                </p>
              </motion.div>

              {/* Clinic Gallery Grid */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={staggerContainer}
                className={`grid grid-cols-2 md:grid-cols-3 gap-4 mb-10`}
              >
                {galleryImages.map((img, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={fadeUp}
                    onClick={() => setLightboxIndex(idx)}
                    className={`aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-md group cursor-pointer border border-gray-200 relative`}
                  >
                    <img 
                      src={img.src} 
                      alt={img.caption} 
                      className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700`} 
                    />
                    {/* Hover indicator for opening image */}
                    <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center`}>
                      <span className={`text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 font-bold text-2xl drop-shadow-md`}>⤢</span>
                    </div>
                  </motion.div>
                ))}
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
                    <input type={`checkbox`} id={`storyPrivacy`} required defaultChecked className={`w-4 h-4 accent-[#C5A059] rounded cursor-pointer`} />
                    <label htmlFor={`storyPrivacy`} className={`text-xs text-white/80 cursor-pointer`}>
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

      {/* --- FULLSCREEN IMAGE LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-[999] bg-black/95 backdrop-blur-sm flex items-center justify-center select-none`}
            onClick={() => setLightboxIndex(-1)}
          >
            {/* Top Left Counter */}
            <div className={`absolute top-6 left-6 text-white/80 font-medium tracking-widest text-sm z-50`}>
              {lightboxIndex + 1} / {galleryImages.length}
            </div>

            {/* Top Right Close Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(-1); }}
              className={`absolute top-6 right-6 text-white hover:text-red-500 transition-colors z-50 p-2`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Arrow */}
            <button 
              onClick={prevImage}
              className={`absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50 p-4`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Main Image Wrapper */}
            <div className={`relative w-full max-w-6xl max-h-[85vh] px-4 md:px-16 flex items-center justify-center`} onClick={(e) => e.stopPropagation()}>
              <motion.img 
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: `easeOut` }}
                src={galleryImages[lightboxIndex].src} 
                alt={galleryImages[lightboxIndex].caption}
                className={`max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm`} 
              />
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextImage}
              className={`absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50 p-4`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}