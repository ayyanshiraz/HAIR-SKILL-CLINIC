"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";

// --- STRICT ANIMATION TUPLE ---
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function BeforeAfterClient() {
  // --- LIGHTBOX STATE ---
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number | null>(null);

  // --- REAL PATIENT CASES ---
const cases = [
  { image: "home/before-after/30.webp" },
  { image: "home/before-after/2.webp"  },
  { image: "home/before-after/3.webp" },
  { image: "home/before-after/4.webp" },
  { image: "home/before-after/5.webp" },
  { image: "home/before-after/6.webp" },
  { image: "home/before-after/7.webp" },
  { image: "home/before-after/8.webp" },
  { image: "home/before-after/9.webp" },
  { image: "home/before-after/10.webp" },
  { image: "home/before-after/11.webp" },
  { image: "home/before-after/12.webp" },
  { image: "home/before-after/13.webp" },
  { image: "home/before-after/14.webp"},
  { image: "home/before-after/15.webp" },
  { image: "home/before-after/16.webp" },
  { image: "home/before-after/17.webp" },
  { image: "home/before-after/18.webp" },
  { image: "home/before-after/19.webp" },
  { image: "home/before-after/20.webp" },
  { image: "home/before-after/21.webp" },
  { image: "home/before-after/22.webp" },
  { image: "home/before-after/23.webp" },
  { image: "home/before-after/24.webp" },
  { image: "home/before-after/25.webp" },
  { image: "home/before-after/26.webp" },
  { image: "home/before-after/27.webp" },
  { image: "home/before-after/28.webp" },
  { image: "home/before-after/29.webp" },
  { image: "home/before-after/1.webp" },
  // ... continue adding a new line for every single image you put in the folder
];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
      {/* --- PAGE HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-gray-50 border-b border-gray-200 px-6"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumbs aligned left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center justify-start gap-2">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <span className="text-[#772424]">Before & After</span>
          </div>
          {/* Heading aligned left */}
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Before & After
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & FULL-WIDTH GALLERY --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-12">
            
            {/* Intro Text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-6 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                Real Patients, Life-Changing Transformations
              </h2>
              <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                At Hair Skill Clinic, we believe that the ultimate proof of our medical expertise lies in the results we deliver. A successful hair transplant is not just about moving hair follicles; it is an art form that requires precision, a deep understanding of facial geometry, and meticulous execution. 
              </p>
              <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                Our patients travel to Lahore, Pakistan from all over the world to achieve natural, dense, and permanent results. By utilizing advanced techniques such as Sapphire FUE and DHI, our surgeons ensure that every implanted graft aligns perfectly with your natural hair growth pattern. Browse our gallery below to see the authentic, unedited transformations of men who trusted Hair Skill Clinic to restore their confidence.
              </p>
            </motion.div>

            {/* 30-Card Gallery Grid (Set to 3 Columns Max) */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              variants={staggerContainer} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {cases.map((c, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeUp}
                  onClick={() => setSelectedCaseIndex(idx)}
                  className="bg-[#772424] rounded-3xl p-3 flex flex-col shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2 select-none"
                >
                  {/* Image Wrapper */}
                  <div className="w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden relative">
                    <img 
                      src={c.image} 
                      alt={`${c} Grafts Transformation`} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                  
                  {/* Bottom Text Bar */}
                  <div className="flex justify-between items-end pt-3.5 px-1 pb-1">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-white font-black text-4xl leading-none">
                        
                      </span>
                      
                    </div>
                    <div className="text-right leading-none">
                      <span className="text-white/90 font-black text-xs uppercase tracking-widest">
                        HAIR SKILL CLINIC
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Concluding Text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4 mt-8 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">The Timeline of Your New Hair</h2>
              <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                It is important to understand that hair transplantation is a journey requiring patience. The images you see above reflect fully matured results, typically taken 12 to 18 months post-surgery. 
              </p>
              <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                After your procedure, the transplanted hairs will naturally shed within the first 2 to 4 weeks (a completely normal phase known as shock loss). By month 3 or 4, new, permanent growth will begin. The density and texture will continuously improve until the final, seamless result is achieved. Our medical team is with you every step of the way to ensure your recovery is smooth and successful.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- LIGHTBOX FOR IMAGES --- */}
      <AnimatePresence>
        {selectedCaseIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12"
          >
            <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm" onClick={() => setSelectedCaseIndex(null)} />
            
            <div className="absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-center z-20 pointer-events-none">
              <span className="text-gray-400 font-bold tracking-[0.2em] text-sm">{selectedCaseIndex + 1} / {cases.length}</span>
              <button 
                onClick={() => setSelectedCaseIndex(null)} 
                className="text-gray-400 hover:text-white transition-colors pointer-events-auto w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-[#772424] rounded-full backdrop-blur-md"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedCaseIndex(prev => prev === 0 ? cases.length - 1 : prev! - 1); 
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-[#772424] backdrop-blur-md rounded-full transition-all z-20"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedCaseIndex(prev => prev === cases.length - 1 ? 0 : prev! + 1); 
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-[#772424] backdrop-blur-md rounded-full transition-all z-20"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            <motion.div 
              key={selectedCaseIndex}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-fit max-w-[95vw] md:max-w-4xl bg-[#772424] rounded-3xl p-3 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 select-none"
            >
              <div className="w-fit mx-auto bg-white rounded-2xl relative flex justify-center items-center overflow-hidden">
                <img 
                  src={cases[selectedCaseIndex].image} 
                  alt={`${cases[selectedCaseIndex]} Grafts Transformation`} 
                  className="block max-h-[70vh] w-auto h-auto max-w-full object-contain" 
                />
              </div>
              
              <div className="pt-5 px-3 pb-2 flex items-end justify-between bg-[#772424]">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-black text-white leading-none">
          
                  </span>
                  
                </div>
                <div className="text-right leading-none">
                  <span className="text-white/90 font-black text-xs md:text-sm uppercase tracking-widest">
                    HAIR SKILL CLINIC
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}