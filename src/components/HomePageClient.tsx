"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";

import { countries, type Country } from "../data/countries"; 

function AnimatedCounter({ from = 0, to, duration = 2.5 }: { from?: number, to: number, duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest: number) => Math.round(latest).toLocaleString());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: `-50px` });

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: duration, ease: [0.16, 1, 0.3, 1] });
    }
  }, [count, isInView, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function InteractiveDoctorsStage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<{name: string, title: string, image: string, bio: string} | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const doctors = [
    {
      name: `Dr. Gokay Bilgin`,
      title: `Co-Founder`,
      image: `/doctors/gokay.png`,
      bio: `Hair Transplant Surgeon, MD. Medical Aesthetic Physician Dr. Gokay Bilgin is a successful hair transplant surgeon sharing his vast experience in hair transplantation and treatment with patients and guiding them globally.`
    },
    {
      name: `Dr. Mehmet Erdogan`,
      title: `Co-Founder`,
      image: `/doctors/mehmet.png`,
      bio: `Hair Transplant Surgeon, MD. Medical Aesthetic Physician Dr. Mehmet Erdogan is a renowned expert in dense follicular framing, bringing years of surgical excellence to Hair Skill Clinic.`
    },
    {
      name: `Dr. Firdavs Ahmedov`,
      title: `Hair Transplant Surgeon`,
      image: `/doctors/firdavs.png`,
      bio: `Hair Transplant Surgeon, MD. Medical Aesthetic Physician Dr. Firdavs Ahmedov works at Hair Skill Clinic, known for his precision and highly successful aesthetic outcomes in restorative surgery.`
    },
    {
      name: `Dr. Ali Osman Soluk`,
      title: `Hair Transplant Surgeon`,
      image: `/doctors/ali.png`,
      bio: `Hair Transplant Surgeon, MD. Medical Aesthetic Physician Dr. Ali Osman SOLUK is a successful hair transplant surgeon who works at Hair Skill Clinic, sharing his experience in hair transplantation and treatment with patients and guiding them. Dr. Ali Osman SOLUK, who graduated from Istanbul Faculty of Medicine, started his medical career in Istanbul Metropolitan Municipality, [...]`
    },
    {
      name: `Dr. M. Resat Arpaci`,
      title: `Hair Transplant Surgeon`,
      image: `/doctors/resat.png`,
      bio: `Hair Transplant Surgeon, MD. Medical Aesthetic Physician Dr. M. Resat Arpaci is dedicated to patient care and natural-looking hair restoration results at Hair Skill Clinic.`
    }
  ];

  useEffect(() => {
    if (isHovered || selectedDoctor) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % doctors.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [isHovered, selectedDoctor, doctors.length]);

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[currentIndex] as HTMLElement;
      if (card) {
        container.scrollTo({
          left: card.offsetLeft - container.offsetLeft,
          behavior: `smooth`
        });
      }
    }
  }, [currentIndex]);

  return (
    <>
      <div className={`w-full bg-white text-gray-900 py-28 relative overflow-hidden z-20`}>
        <div className={`max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10`}>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: `-50px` }}
            transition={{ duration: 0.8 }}
            className={`mb-24 text-center flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto`}
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8, filter: `blur(8px)` }}
                whileInView={{ opacity: 1, scale: 1, filter: `blur(0px)` }}
                transition={{ delay: 0.1, duration: 0.7, ease: `easeOut` }}
                className={`text-[#772424] font-black text-xs md:text-sm tracking-[0.3em] uppercase block mb-4`}
              >
                World Class Operations
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: `easeOut` }}
                className={`text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]`}
              >
                Meet Your Medical <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-[#772424] to-[#C5A059]`}>
                  Master Craftsmen
                </span>
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: `easeOut` }}
              className={`text-gray-600 max-w-2xl font-medium text-base md:text-lg leading-relaxed mt-2`}
            >
              Our hair restoration clinics are directed exclusively by legendary surgeons who execute every single micro-incision with clinical perfection.
            </motion.p>
          </motion.div>

          <div 
            className={`relative w-full`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              ref={scrollRef}
              className={`flex overflow-x-auto gap-8 pb-16 pt-4 snap-x snap-mandatory`} 
              style={{ scrollbarWidth: `none`, WebkitOverflowScrolling: `touch` }}
            >
              {doctors.map((doc, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedDoctor(doc)}
                  className={`group snap-center shrink-0 w-[300px] md:w-[340px] lg:w-[380px] rounded-[2rem] overflow-hidden bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] flex flex-col relative border border-gray-100/60 cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(119,36,36,0.3)]`}
                >
                  <div className={`absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`} />
                  <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-tr from-[#772424]/20 to-[#C5A059]/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`} />

                  <div className={`h-[320px] md:h-[350px] lg:h-[380px] w-full relative flex items-end justify-center pt-8 bg-gradient-to-b from-gray-50 to-gray-200/50 z-10 overflow-visible`}>
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className={`w-[90%] h-[95%] object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.1)] transition-all duration-700 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)] origin-bottom`} 
                    />
                  </div>

                  <div className={`pt-8 pb-8 px-6 relative flex flex-col items-center text-center z-20 bg-[#772424] group-hover:bg-[#f8f9fa] transition-colors duration-700 ease-out overflow-hidden`}>
                    <div className={`absolute top-0 left-0 w-full h-1.5 bg-[#5a1b1b] group-hover:bg-[#C5A059] transition-colors duration-700`} />
                    <div className={`absolute top-0 left-[-150%] w-[100%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-[1.2s] ease-in-out z-0`} />
                    <h3 className={`relative z-10 text-xl md:text-2xl font-bold mb-2 tracking-wide text-white md:group-hover:text-black transition-colors duration-700`}>{doc.name}</h3>
                    <p className={`relative z-10 text-sm md:text-base font-medium text-white/80 md:group-hover:text-black/70 transition-colors duration-700`}>{doc.title}</p>
                    
                    <div className={`relative z-10 h-0 opacity-0 group-hover:h-6 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 ease-out flex items-center justify-center gap-2`}>
                      <span className={`text-[11px] font-black uppercase tracking-[0.2em] text-[#772424]`}>View Profile</span>
                      <svg className={`w-3.5 h-3.5 text-[#772424]`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={3} d={`M14 5l7 7m0 0l-7 7m7-7H3`} /></svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`flex justify-center items-center gap-4 mt-2`}>
              {[0, 1, 2].map((idx) => {
                const activeDotIndex = currentIndex <= 1 ? 0 : currentIndex >= 3 ? 2 : 1;
                const isActive = activeDotIndex === idx;
                return (
                  <div 
                    key={idx}
                    onClick={() => {
                       const newIndex = idx === 0 ? 0 : idx === 1 ? 2 : 4;
                       setCurrentIndex(newIndex);
                    }}
                    className={`h-3 rounded-full cursor-pointer transition-all duration-500 ease-out ${isActive ? `w-12 bg-[#772424] shadow-md` : `w-3 bg-gray-300 hover:bg-gray-400`}`}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedDoctor && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12`}
          >
            <div className={`absolute inset-0 bg-[#0a0a0a]/60 backdrop-blur-xl`} onClick={() => setSelectedDoctor(null)} />
            
            <motion.div 
              initial={{ scale: 0.95, y: 40, opacity: 0, rotateX: 5 }}
              animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: `spring`, damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-6xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-[0_0_80px_rgba(119,36,36,0.25)]`}
            >
              <div className={`w-full md:w-[45%] bg-[#f4f5f7] relative flex items-end justify-center pt-20 px-8 overflow-hidden`}>
                <div className={`absolute top-12 left-8 text-[150px] font-black text-gray-200/60 leading-none tracking-tighter pointer-events-none select-none z-0`}>
                  {selectedDoctor.name.split(` `)[1]?.substring(0,1)}{selectedDoctor.name.split(` `)[2]?.substring(0,1)}
                </div>
                
                <motion.img 
                  initial={{ y: 60, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }} 
                  transition={{ delay: 0.2, type: `spring`, stiffness: 200 }}
                  src={selectedDoctor.image} 
                  alt={selectedDoctor.name} 
                  className={`relative z-10 w-full max-w-[360px] object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.2)]`}
                />
              </div>
              
              <div className={`w-full md:w-[55%] p-10 md:p-16 flex flex-col justify-center relative bg-white`}>
                <button 
                  onClick={() => setSelectedDoctor(null)} 
                  className={`absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#772424] hover:text-white transition-all duration-300 z-20`}
                >
                  <svg className={`w-6 h-6`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M6 18L18 6M6 6l12 12`} /></svg>
                </button>
                
                <div className={`relative z-10`}>
                  <motion.span 
                    initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.25 }} 
                    className={`text-[#772424] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block`}
                  >
                    {selectedDoctor.title}
                  </motion.span>
                  
                  <motion.h3 
                    initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.35 }} 
                    className={`text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-none`}
                  >
                    {selectedDoctor.name}
                  </motion.h3>
                  
                  <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 0.45 }} 
                    className={`w-16 h-1.5 bg-[#C5A059] mb-8 origin-left`} 
                  />
                  
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.55 }} 
                    className={`text-gray-600 text-base md:text-lg leading-relaxed mb-10`}
                  >
                    {selectedDoctor.bio}
                  </motion.p>
                  
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.65 }}>
                    <Link 
                      href={`/doctors-category/${selectedDoctor.name.toLowerCase().replace(/[^a-z0-9]+/g, `-`)}`} 
                      className={`group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white bg-[#772424] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_30px_rgba(119,36,36,0.3)]`}
                    >
                      <span className={`absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black`}></span>
                      <span className={`relative flex items-center gap-3 text-lg tracking-wide`}>
                        Read Full Profile
                        <svg className={`w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2.5} d={`M14 5l7 7m0 0l-7 7m7-7H3`} /></svg>
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function BeforeAfterStage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const cases = [
    { image: `/home/before-after/30.webp`, grafts: `5300` },
    { image: `/home/before-after/2.webp`, grafts: `1800` },
    { image: `/home/before-after/3.webp`, grafts: `4500` },
    { image: `/home/before-after/4.webp`, grafts: `2800` },
    { image: `/home/before-after/6.webp`, grafts: `4800` },
    
  ];

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.children[0].clientWidth;
      const gap = 32;
      const scrollPosition = currentIndex * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: `smooth`
      });
    }
  }, [currentIndex]);

  return (
    <>
      <div className={`w-full bg-white py-20 relative z-20`}>
        <div className={`max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10`}>
          
          <div className={`text-center mb-16 relative z-10`}>
            <span className={`text-[#772424] font-bold text-sm md:text-base tracking-wide block mb-3`}>
              New Hair New You
            </span>
            <h2 className={`text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#772424] tracking-tight`}>
              Before & After
            </h2>
          </div>

          <div className={`relative w-full`}>
            <div 
              ref={scrollRef}
              className={`flex overflow-x-auto gap-6 md:gap-8 pb-8 pt-4 snap-x snap-mandatory`} 
              style={{ scrollbarWidth: `none`, WebkitOverflowScrolling: `touch` }}
            >
              {cases.map((c, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedCaseIndex(idx)}
                  className={`snap-center shrink-0 w-full md:w-[calc(50%-1rem)] bg-[#772424] rounded-3xl overflow-hidden flex flex-col border border-gray-100/10 shadow-lg cursor-pointer group transition-transform duration-300 hover:-translate-y-2`}
                >
                  <div className={`w-full aspect-square md:aspect-[4/3] bg-white relative overflow-hidden flex items-center justify-center`}>
                    <img 
                      src={c.image} 
                      alt={`${c.grafts} Grafts Transformation`} 
                      className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105`} 
                    />
                    <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center`}>
                      <div className={`w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-xl`}>
                        <svg className={`w-6 h-6 text-[#772424]`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7`} /></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`flex-1 py-7 px-8 flex items-center justify-between bg-[#772424]`}>
                    <div className={`flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2`}>
                      <span 
                        className={`text-5xl md:text-[56px] font-black tracking-tighter text-white drop-shadow-sm`}
                        style={{ WebkitTextStroke: `1px rgba(255,255,255,0.05)` }}
                      >
                        {c.grafts}
                      </span>
                      <span className={`text-white/80 text-sm md:text-lg font-bold tracking-widest`}>GRAFTS</span>
                    </div>
                    <span className={`text-white/60 font-bold text-lg md:text-xl tracking-wide uppercase text-right leading-none max-w-[150px]`}>
                      Hair Skill Clinic
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className={`flex justify-center items-center gap-3 mt-4`}>
              {[0, 1, 2, 3, 4].map((idx) => {
                const isActive = currentIndex === idx;
                return (
                  <div 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ease-out ${isActive ? `w-8 bg-[#772424]` : `w-2.5 bg-gray-300 hover:bg-gray-400`}`}
                  />
                )
              })}
            </div>
          </div>
          
          <div className={`flex justify-center mt-12`}>
            <Link 
              href={`/before-after`} 
              className={`inline-flex items-center justify-center px-12 py-4 font-bold text-white bg-[#772424] rounded-full transition-all duration-300 hover:scale-[1.03] hover:bg-[#5a1b1b] shadow-md`}
            >
              <span className={`text-lg tracking-wide`}>Before & After</span>
            </Link>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {selectedCaseIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12`}
          >
            <div className={`absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm`} onClick={() => setSelectedCaseIndex(null)} />
            
            <div className={`absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-center z-20 pointer-events-none`}>
              <span className={`text-gray-400 font-bold tracking-[0.2em] text-sm`}>{selectedCaseIndex + 1} / {cases.length}</span>
              <button 
                onClick={() => setSelectedCaseIndex(null)} 
                className={`text-gray-400 hover:text-white transition-colors pointer-events-auto w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-[#772424] rounded-full backdrop-blur-md`}
              >
                <svg className={`w-6 h-6`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M6 18L18 6M6 6l12 12`} /></svg>
              </button>
            </div>

            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedCaseIndex(prev => prev === 0 ? cases.length - 1 : prev! - 1); 
              }}
              className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-[#772424] backdrop-blur-md rounded-full transition-all z-20`}
            >
              <svg className={`w-6 h-6 md:w-8 md:h-8`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M15 19l-7-7 7-7`} /></svg>
            </button>
            
            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedCaseIndex(prev => prev === cases.length - 1 ? 0 : prev! + 1); 
              }}
              className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-[#772424] backdrop-blur-md rounded-full transition-all z-20`}
            >
              <svg className={`w-6 h-6 md:w-8 md:h-8`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M9 5l7 7-7 7`} /></svg>
            </button>

            <motion.div 
              key={selectedCaseIndex}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: `spring`, damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-4xl bg-[#772424] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10`}
            >
              <div className={`w-full bg-white relative flex justify-center items-center`}>
                <img 
                  src={cases[selectedCaseIndex].image} 
                  alt={`${cases[selectedCaseIndex].grafts} Grafts Transformation`} 
                  className={`w-full h-auto max-h-[60vh] object-contain`} 
                />
              </div>
              
              <div className={`py-6 px-6 md:px-10 flex items-center justify-between bg-[#772424]`}>
                <div className={`flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3`}>
                  <span 
                    className={`text-5xl md:text-[56px] font-black tracking-tighter text-white drop-shadow-sm`}
                    style={{ WebkitTextStroke: `1px rgba(255,255,255,0.05)` }}
                  >
                    {cases[selectedCaseIndex].grafts}
                  </span>
                  <span className={`text-white/80 text-sm md:text-xl font-bold tracking-widest`}>GRAFTS</span>
                </div>
                <span className={`text-white font-bold text-lg md:text-3xl tracking-wide uppercase text-right leading-none max-w-[200px] md:max-w-[300px]`}>
                  Hair Skill Clinic
                </span>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PhilosophyStage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const philosophyData = [
    {
      title: `True Planning`,
      content: `At Hair Skill, the process always begins with analysis. True Planning technique illuminates the way to achieve a natural-looking transplant result. Examining the data before making a decision is an important step in hair transplantation. Thus, Hair Skill recognizes the patients inputs and strives to achieve the maximum. In the True Planning step, our doctors examine the donor area in detail. Hair Skill believes that determining the most appropriate number of grafts for the patients needs depends on the doctors hair design skills and taste.`
    },
    {
      title: `True Hair Line Design`,
      content: `We believe that hairline design is the key to a natural looking hair transplant result. Our True Hairline Designing procedures prioritize the placement of single hair follicular units in the front lines to maintain aesthetic proportions and appearance. Our aesthetic front line drawing always takes angles into account to extend the hair in a natural looking way. Since it is important to maintain the masculinity of the hairline, the position of the hairline is determined by the muscles in the forehead.`
    },
    {
      title: `True Execution`,
      content: `The day of the operation is a key milestone for a successful outcome in the entire transformation process. The day of the operation is a marathon after a long technical detail preparation. Therefore, thanks to Hair Skills high-level precautions, nothing is allowed to go wrong. Hair Skills main goal is always to achieve successful operations and results, and it uses all its efforts and resources to succeed and do its best.`
    },
    {
      title: `True Innovation`,
      content: `The founders of Hair Skill Clinic are strongly committed to the idea of seeing development as the foundation of medicine. Hair Skill has an undying passion for developing innovation. Hair Skill medical specialists and medical consultants are always trying to find more effective ways to perform the most effective hair transplant operations. The Sapphire Transplantation technique is a must in all operations and is one of the brightest manifestations of True Innovation.`
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`w-full bg-white py-24 relative overflow-hidden z-20`}>
      <div className={`max-w-[1400px] mx-auto px-6 sm:px-8 relative`}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: `-50px` }}
          transition={{ duration: 0.8, ease: `easeOut` }}
          className={`mb-12`}
        >
          <span className={`text-[#772424] font-bold text-sm md:text-base tracking-wide block mb-3`}>
            Philosophy
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#772424] tracking-tight mb-6`}>
            Hair Skill True Philosophy
          </h2>
          <p className={`text-black max-w-3xl text-lg leading-relaxed`}>
            Hair Skill Clinic has disciplined the way of performing hair transplantation around the TRUE Philosophy, which consists of four elements, and these four elements revolve around the four main values of the brand.
          </p>
        </motion.div>

        <div className={`flex flex-col lg:flex-row gap-16 items-start`}>
          
          <div className={`w-full lg:w-1/2 flex flex-col relative`}>
            
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: `auto` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: `easeInOut` }}
              className={`absolute left-[13.5px] top-10 bottom-4 w-[1px] bg-[#1a202c] z-0`} 
            />

            {philosophyData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: `-50px` }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: `easeOut` }}
                  key={index} 
                  className={`relative z-10 flex flex-col w-full`}
                >
                  
                  <button 
                    onClick={() => toggleAccordion(index)} 
                    className={`flex items-center justify-between py-6 group w-full`}
                  >
                    <div className={`flex items-center gap-6`}>
                      <div className={`relative z-10 w-7 h-7 rounded-full bg-[#772424] shrink-0 border-4 border-white shadow-sm`} />
                      <h3 className={`text-xl md:text-2xl font-bold text-[#1a202c]`}>{item.title}</h3>
                    </div>
                    <span className={`text-3xl font-light text-[#1a202c] transition-transform duration-300 ${isActive ? `-` : `+`}`}>
                      {isActive ? `-` : `+`}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: `auto`, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className={`overflow-hidden pl-[52px] pr-4`}
                      >
                        <p className={`text-black pb-8 text-base md:text-lg leading-relaxed`}>
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className={`w-[calc(100%-14px)] ml-[14px] h-[1px] bg-[#1a202c] shrink-0`} />

                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: `-50px` }}
            transition={{ duration: 0.8, delay: 0.3, ease: `easeOut` }}
            className={`w-full lg:w-1/2 flex justify-center items-center relative min-h-[400px]`}
          >
            <img 
              src={`/home/sac.webp`} 
              alt={`Hair Skill True Philosophy Hair Anatomy`} 
              className={`w-full max-w-xl object-contain drop-shadow-xl`} 
            />
          </motion.div>

        </div>

      </div>
    </div>
  );
}

function WhyChooseStage() {
  return (
    <div className={`w-full bg-white py-32 relative overflow-hidden z-20 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.02)]`}>
      
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 200, repeat: Infinity, ease: `linear` }}
        className={`absolute top-[-20%] right-[-10%] w-[800px] h-[800px] border-[1px] border-[#772424]/20 rounded-full border-dashed pointer-events-none opacity-50`}
      />
      <motion.div 
        animate={{ rotate: -360 }} 
        transition={{ duration: 250, repeat: Infinity, ease: `linear` }}
        className={`absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] border-[2px] border-[#C5A059]/10 rounded-full border-dotted pointer-events-none opacity-50`}
      />

      <div className={`max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10`}>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: `-100px` }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={`text-center mb-16`}
        >
          <h2 className={`text-4xl md:text-5xl lg:text-7xl font-black text-[#1a202c] tracking-tight relative inline-flex flex-col items-center`}>
            <span>Why Choose <span className={`text-[#772424]`}>Hair Skill Clinic?</span></span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `100%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`h-1.5 md:h-2.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mt-6 rounded-full`}
            />
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: `-50px` }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-black text-center text-base md:text-lg lg:text-xl leading-relaxed max-w-5xl mx-auto`}
        >
          Hair is an important part of our aesthetic perception and self-confidence. Correct applications strengthen not only the appearance but also the persons self-confidence. Hair Skill Clinic offers best-in-class medical procedures with advanced medical techniques and ethical approach. With the experience of our specialist doctors, our patient-oriented service approach and our culture of hospitality, we ensure that you achieve natural and successful hair transplant results.
        </motion.p>

      </div>
    </div>
  );
}

function HighlightsStage() {
  const [activeVideo, setActiveVideo] = useState<{title: string, videoUrl: string, coverUrl: string} | null>(null);

  const videos = [
    {
      title: `Case Studies Compilation`,
      coverUrl: `/videos/case-study-cover.jpg`,
      videoUrl: `/videos/case-study.mp4`
    },
    {
      title: `Hair Transplant FAQs`,
      coverUrl: `/videos/faqs-cover.jpg`,
      videoUrl: `/videos/faqs.mp4`
    }
  ];

  return (
    <>
      <div className={`w-full bg-white py-24 relative z-20`}>
        <div className={`max-w-[1400px] mx-auto px-6 sm:px-8 relative`}>
          
          <div className={`flex items-center justify-center gap-6 mb-16`}>
            <div className={`h-[2px] bg-[#1a202c] w-full max-w-[250px]`} />
            <h2 className={`text-4xl md:text-5xl font-black text-[#1a202c] tracking-tight`}>
              Highlights
            </h2>
            <div className={`h-[2px] bg-[#1a202c] w-full max-w-[250px]`} />
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
            {videos.map((vid, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveVideo(vid)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group shadow-xl bg-gray-100 aspect-video`}
              >
                <img 
                  src={vid.coverUrl} 
                  alt={vid.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`}
                />
                <div className={`absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center`}>
                  <div className={`w-16 h-12 md:w-20 md:h-14 bg-[#772424] rounded-xl flex items-center justify-center shadow-[0_10px_20px_rgba(119,36,36,0.3)] transition-transform duration-300 group-hover:scale-110`}>
                    <svg className={`w-6 h-6 md:w-8 md:h-8 text-white ml-1`} fill={`currentColor`} viewBox={`0 0 24 24`}>
                      <path d={`M8 5v14l11-7z`}/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12`}
          >
            <div 
              className={`absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-sm`} 
              onClick={() => setActiveVideo(null)} 
            />
            
            <div className={`absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-start z-30 pointer-events-none`}>
              <div className={`flex flex-col gap-2`}>
                 <span className={`text-white font-bold text-lg md:text-2xl drop-shadow-md`}>{activeVideo.title}</span>
                 <span className={`text-gray-300 text-sm`}>Hair Skill Clinic</span>
              </div>
              <button 
                onClick={() => setActiveVideo(null)} 
                className={`text-white hover:text-[#772424] transition-colors pointer-events-auto w-12 h-12 flex items-center justify-center`}
              >
                <svg className={`w-8 h-8`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M6 18L18 6M6 6l12 12`} /></svg>
              </button>
            </div>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: `spring`, damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 bg-black`}
            >
              <video 
                src={activeVideo.videoUrl} 
                poster={activeVideo.coverUrl} 
                controls 
                autoPlay 
                preload={`auto`} 
                className={`w-full h-auto max-h-[85vh] object-contain`}
              >
                <source src={activeVideo.videoUrl} type={`video/mp4`} />
                Your browser does not support the video tag.
              </video>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function TreatmentsStage() {
  const treatments = [
    {
      title: `Hair Transplant`,
      href: "/hair-transplant",
      bgColor: `bg-[#4A0E0E]`,
      icon: <img src={`/our%20treatments/1.svg`} alt={`Hair Transplant Icon`} className={`w-full h-full object-contain`} />
    },
    {
      title: `Beard Transplant`,
      href: `/treatments/beard-transplant`,
      bgColor: `bg-[#5A1212]`,
      icon: <img src={`/our%20treatments/2.svg`} alt={`Beard Transplant Icon`} className={`w-full h-full object-contain`} />
    },
    {
      title: `Eyebrow Transplant`,
      href: `/treatments/eyebrow`,
      bgColor: `bg-[#6B1616]`,
      icon: <img src={`/our%20treatments/3.svg`} alt={`Eyebrow Transplant Icon`} className={`w-full h-full object-contain`} />
    },
    {
      title: `Female Hair Transplant`,
      href: `/treatments/female`,
      bgColor: `bg-[#772424]`,
      icon: <img src={`/our%20treatments/4.svg`} alt={`Female Hair Transplant Icon`} className={`w-full h-full object-contain`} />
    },
    {
      title: `Afro Hair Transplant`,
      href: `/treatments/afro-hair`,
      bgColor: `bg-[#8C2222]`,
      icon: <img src={`/our%20treatments/5.svg`} alt={`Afro Hair Transplant Icon`} className={`w-full h-full object-contain`} />
    },
    {
      title: `Restoration of Sideburns`,
      href: `/treatments/sideburn`,
      bgColor: `bg-[#A32A2A]`,
      icon: <img src={`/our%20treatments/6.svg`} alt={`Restoration of Sideburns Icon`} className={`w-full h-full object-contain`} />
    },
    {
      title: `Moustache Transplant`,
      href: `/treatments/moustache`,
      bgColor: `bg-[#B93232]`,
      icon: <img src={`/our%20treatments/7.svg`} alt={`Moustache Transplant Icon`} className={`w-full h-full object-contain`} />
    },
    {
      title: `Mesotherapy`,
      href: `/treatments/mesotherapy`,
      bgColor: `bg-[#CF3D3D]`,
      icon: <img src={`/our%20treatments/8.svg`} alt={`Mesotherapy Icon`} className={`w-full h-full object-contain`} />
    },
    {
      title: `Hair Transplantation And Local Anesthesia`,
      href: `/techniques/needle-free`,
      bgColor: `bg-[#E34949]`,
      icon: <img src={`/our%20treatments/9.svg`} alt={`Hair Transplantation And Local Anesthesia Icon`} className={`w-full h-full object-contain`} />
    }
  ];

  return (
    <div className={`w-full bg-white py-24 relative z-20`}>
      <div className={`max-w-[1200px] mx-auto px-6 sm:px-8 relative`}>
        
        <div className={`text-center mb-16`}>
          <span className={`text-[#772424] font-bold text-sm md:text-base tracking-wide block mb-3`}>
            Real Transformation
          </span>
          <h2 className={`text-4xl md:text-5xl font-black text-[#1a202c] tracking-tight`}>
            Our Treatments
          </h2>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 perspective-[2000px]`}>
          {treatments.map((item, idx) => (
            <Link href={item.href} key={idx} className={`block relative group`}>
              
              <motion.div 
                initial={{ opacity: 0, y: 100, rotateX: 45, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: false, margin: `-50px` }}
                transition={{ duration: 0.8, delay: idx * 0.1, type: `spring`, bounce: 0.4 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateX: 5, 
                  rotateY: -5, 
                  boxShadow: `0px 30px 60px rgba(0,0,0,0.3)`
                }}
                className={`${item.bgColor} rounded-[2.5rem] md:rounded-[3rem] aspect-[4/3] md:aspect-square flex flex-col items-center justify-center p-8 cursor-pointer relative overflow-hidden`}
                style={{ transformStyle: `preserve-3d` }}
              >
                
                {/* Hover Glare Sweep */}
                <motion.div 
                  className={`absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg] pointer-events-none z-0`}
                  whileHover={{ left: `200%` }}
                  transition={{ duration: 0.7, ease: `easeInOut` }}
                />

                {/* 3D Pop-out Icon */}
                <motion.div 
                  className={`w-24 h-24 md:w-36 md:h-36 mb-4 md:mb-6 text-white relative flex items-center justify-center`}
                  whileHover={{ z: 80, y: -10, scale: 1.1 }}
                  transition={{ type: `spring`, stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className={`absolute inset-0 bg-white/20 rounded-full blur-xl`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1.5 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className={`relative z-10 w-full h-full flex items-center justify-center`}>
                    {item.icon}
                  </div>
                </motion.div>

                {/* 3D Pop-out Text */}
                <motion.h3 
                  whileHover={{ z: 40 }}
                  transition={{ type: `spring`, stiffness: 300, damping: 20 }}
                  className={`text-white font-bold text-base md:text-lg lg:text-xl text-center leading-snug px-4 relative z-10`}
                >
                  {item.title}
                </motion.h3>

              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

function GalleryStage() {
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(null);

  const galleryImages = [
    `/clinic/1.jpg`,
    `/clinic/2.jpg`,
    `/clinic/3.jpg`,
    `/clinic/4.jpg`,
    `/clinic/5.jpg`
  ];

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: `-50px` }}
        transition={{ duration: 0.8, ease: `easeOut` }}
        className={`w-full bg-white py-24 relative z-20`}
      >
        <div className={`max-w-[1200px] mx-auto px-6 sm:px-8 relative`}>
          
          <div className={`text-center mb-16`}>
            <span className={`text-[#772424] font-bold text-sm md:text-base tracking-wide block mb-3`}>
              Gallery
            </span>
            <h2 className={`text-4xl md:text-5xl lg:text-[56px] font-black text-[#1a202c] tracking-tight`}>
              Our Clinic
            </h2>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6`}>
            
            {/* Left Large Image */}
            <div 
              className={`cursor-pointer overflow-hidden rounded-3xl h-[300px] md:h-[400px] lg:h-[500px] relative group`} 
              onClick={() => setSelectedGalleryIndex(0)}
            >
              <img 
                src={galleryImages[0]} 
                alt={`Clinic View 1`} 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`} 
              />
              <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300`} />
            </div>

            {/* Right Grid of 4 Small Images */}
            <div className={`grid grid-cols-2 gap-4 md:gap-6 h-[300px] md:h-[400px] lg:h-[500px]`}>
              {galleryImages.slice(1).map((img, idx) => (
                <div 
                  key={idx} 
                  className={`cursor-pointer overflow-hidden rounded-3xl h-full relative group`} 
                  onClick={() => setSelectedGalleryIndex(idx + 1)}
                >
                  <img 
                    src={img} 
                    alt={`Clinic View ${idx + 2}`} 
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`} 
                  />
                  <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300`} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedGalleryIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className={`fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-12`}
          >
            <div className={`absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-sm`} onClick={() => setSelectedGalleryIndex(null)} />
            
            <div className={`absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-center z-30 pointer-events-none`}>
              <span className={`text-gray-400 font-bold tracking-[0.2em] text-sm`}>
                {selectedGalleryIndex + 1} / {galleryImages.length}
              </span>
              <button 
                onClick={() => setSelectedGalleryIndex(null)} 
                className={`text-gray-400 hover:text-white transition-colors pointer-events-auto w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-[#772424] rounded-full backdrop-blur-md`}
              >
                <svg className={`w-6 h-6`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M6 18L18 6M6 6l12 12`} /></svg>
              </button>
            </div>

            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedGalleryIndex(prev => prev === 0 ? galleryImages.length - 1 : prev! - 1); 
              }}
              className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-[#772424] backdrop-blur-md rounded-full transition-all z-30`}
            >
              <svg className={`w-6 h-6 md:w-8 md:h-8`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M15 19l-7-7 7-7`} /></svg>
            </button>
            
            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedGalleryIndex(prev => prev === galleryImages.length - 1 ? 0 : prev! + 1); 
              }}
              className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-[#772424] backdrop-blur-md rounded-full transition-all z-30`}
            >
              <svg className={`w-6 h-6 md:w-8 md:h-8`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M9 5l7 7-7 7`} /></svg>
            </button>

            <motion.div 
              key={selectedGalleryIndex}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: `spring`, damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-5xl rounded-2xl md:rounded-3xl overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20`}
            >
              <div className={`w-full relative flex justify-center items-center`}>
                <img 
                  src={galleryImages[selectedGalleryIndex]} 
                  alt={`Clinic Gallery Image`} 
                  className={`w-full h-auto max-h-[85vh] object-contain`} 
                />
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PatientGuideStage() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: `Before the Process`,
      circleColor: `bg-[#4A0E0E]`,
      ringColor: `border-[#4A0E0E]`,
      icon: `/home/guide/1.webp`,
      position: `bottom`,
      description: `What to consider before having a hair transplant is one of the most important questions in the minds of many hair transplant candidates. For those who have not had this experience before, the unknown may cause anxiety, but this is completely natural. As Hair Skill Clinic, we have prepared a detailed pre-operation guide so that you can feel safe at every stage of the process. Being informed about all processes will allow you to prepare for the day of the operation more comfortably and consciously.`
    },
    {
      id: 2,
      title: `Operation Day`,
      circleColor: `bg-[#772424]`,
      ringColor: `border-[#772424]`,
      icon: `/home/guide/2.webp`,
      position: `top`,
      description: `The day of the operation is one of the most important steps of your hair transplantation process. When you come to our clinic, our team will greet you and make the necessary preparations before the operation. Your comfort is at the forefront during the procedure and our team will guide you. The stages of the operation and all the details to be considered are included in the guide specially presented to you. Our team will continue to support you throughout the process.`
    },
    {
      id: 3,
      title: `After Operation`,
      circleColor: `bg-[#B93232]`,
      ringColor: `border-[#B93232]`,
      icon: `/home/guide/3.webp`,
      position: `bottom`,
      description: `Your post-operative recovery process begins and there are some basic points you need to pay attention to during this process. You can manage the process in the healthiest way by following your doctors recommendations from the first days. Remember that hair transplantation is a natural recovery process and be patient. All the details you need to pay attention to during this period are included in our post-operative guide prepared specifically for you. Our team will continue to support you whenever you need it.`
    }
  ];

  return (
    <div className={`w-full bg-white py-24 relative z-20`}>
      <div className={`max-w-[1200px] mx-auto px-6 sm:px-8 relative`}>

        <div className={`text-center mb-16 md:mb-40`}>
          <span className={`text-[#772424] font-bold text-sm md:text-base tracking-wide block mb-3`}>
            Real Transformation
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-[56px] font-black text-[#772424] tracking-tight`}>
            Patient Guide
          </h2>
        </div>

        {/* Desktop Connected Timeline */}
        <div className={`hidden md:flex items-center w-full max-w-5xl mx-auto relative mb-64`}>
          {/* Start Dot */}
          <div className={`w-3.5 h-3.5 rounded-full bg-[#1a202c] shrink-0`} />

          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <React.Fragment key={step.id}>
                {/* Connecting Line Left */}
                <div className={`flex-1 h-[3px] bg-[#1a202c]`} />

                {/* Circle Container */}
                <div
                  onClick={() => setActiveStep(index)}
                  className={`relative flex flex-col items-center shrink-0 cursor-pointer group`}
                >
                  {/* Top Content (Step 2) */}
                  {step.position === `top` && (
                    <div className={`absolute bottom-[100%] mb-8 flex flex-col items-center w-[250px] transition-transform duration-300 group-hover:-translate-y-2`}>
                      <img src={step.icon} alt={step.title} className={`h-16 lg:h-20 object-contain mb-4`} />
                      <span className={`text-[#772424] font-extrabold text-lg lg:text-xl text-center`}>{step.title}</span>
                    </div>
                  )}

                  {/* Main Circle & Active Ring */}
                  <div className={`relative flex items-center justify-center w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]`}>
                    <div className={`absolute inset-[-8px] rounded-full transition-all duration-300 ${isActive ? `border-[3px] ${step.ringColor} scale-100` : `border-0 opacity-0 scale-90`}`} />
                    <div className={`absolute inset-0 rounded-full flex items-center justify-center text-white text-4xl lg:text-5xl font-black ${step.circleColor} transition-transform duration-300 ${isActive ? `scale-100` : `scale-95 group-hover:scale-90`} z-10`}>
                      {step.id}
                    </div>
                  </div>

                  {/* Bottom Content (Step 1, Step 3) */}
                  {step.position === `bottom` && (
                    <div className={`absolute top-[100%] mt-8 flex flex-col items-center w-[250px] transition-transform duration-300 group-hover:translate-y-2`}>
                      <img src={step.icon} alt={step.title} className={`h-16 lg:h-20 object-contain mb-4`} />
                      <span className={`text-[#772424] font-extrabold text-lg lg:text-xl text-center`}>{step.title}</span>
                    </div>
                  )}
                </div>

                {/* Connecting Line Right */}
                <div className={`flex-1 h-[3px] bg-[#1a202c]`} />

                {/* Dot Between / End Dot */}
                <div className={`w-3.5 h-3.5 rounded-full bg-[#1a202c] shrink-0`} />
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile Vertical Timeline (Fallback for small screens) */}
        <div className={`flex flex-col gap-12 relative z-10 md:hidden mb-16`}>
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div key={step.id} onClick={() => setActiveStep(index)} className={`flex flex-col items-center cursor-pointer group`}>
                <img src={step.icon} alt={step.title} className={`h-16 object-contain mb-4`} />
                <span className={`text-[#772424] font-extrabold text-xl text-center mb-4`}>{step.title}</span>
                <div className={`relative flex items-center justify-center w-[80px] h-[80px]`}>
                  <div className={`absolute inset-[-6px] rounded-full transition-all duration-300 ${isActive ? `border-[3px] ${step.ringColor} scale-100` : `border-0 opacity-0 scale-90`}`} />
                  <div className={`absolute inset-0 rounded-full flex items-center justify-center text-white text-4xl font-black ${step.circleColor} transition-transform duration-300 ${isActive ? `scale-100` : `scale-95 group-hover:scale-90`} z-10`}>
                    {step.id}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Changing Paragraph Text below the timeline */}
        <div className={`max-w-4xl mx-auto min-h-[150px] flex items-center justify-center text-center px-4`}>
          <AnimatePresence mode={`wait`}>
            <motion.p
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: `easeOut` }}
              className={`text-gray-700 text-base md:text-lg leading-relaxed`}
            >
              {steps[activeStep].description}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

function TechniquesStage() {
  const techniques = [
    { 
      title: `Sapphire Hair\nTransplant`, 
      image: `/home/techniques/2.webp`, 
      link: `/techniques/sapphire`, 
      radius: `rounded-tl-[3rem] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl` 
    },
    { 
      title: `DHI Hair\nTransplantation`, 
      image: `/home/techniques/3.webp`, 
      link: `/techniques/dhi`, 
      radius: `rounded-2xl` 
    },
    { 
      title: `Manuel Fue\nHair Transplant`, 
      image: `/home/techniques/4.webp`, 
      link: `/techniques/manuel-fue`, 
      radius: `rounded-tr-[3rem] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl` 
    },
    { 
      title: `Body Hair\nTransplant`, 
      image: `/home/techniques/6.webp`, 
      link: `/techniques/body`, 
      radius: `rounded-bl-[3rem] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl` 
    },
    { 
      title: `Unshaven Hair\nTransplant`, 
      image: `/home/techniques/8.webp`, 
      link: `/treatments/unshaven-transplant`, 
      radius: `rounded-2xl` 
    },
    { 
      title: `Needle-Free\nAnesthesia`, 
      image: `/home/techniques/10.webp`, 
      link: `/techniques/needle-free`, 
      radius: `rounded-br-[3rem] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl` 
    }
  ];

  return (
    <div className={`w-full bg-[#772424] py-24 relative z-20`}>
      <div className={`max-w-[1400px] mx-auto px-6 sm:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20`}>
        
        {/* Left Grid */}
        <div className={`w-full lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6`}>
          {techniques.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: `-50px` }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link href={tech.link} className={`group block relative aspect-[4/5] overflow-hidden ${tech.radius} shadow-lg cursor-pointer`}>
                <img src={tech.image} alt={tech.title.replace(`\n`, ` `)} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`} />
                <div className={`absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300`} />
                <div className={`absolute inset-0 p-4 flex items-center justify-center text-center`}>
                  <h3 className={`text-white font-bold text-lg md:text-xl drop-shadow-md whitespace-pre-line leading-tight`}>
                    {tech.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Text */}
        <div className={`w-full lg:w-2/5 flex flex-col`}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: `-50px` }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-white/70 font-bold text-sm md:text-base tracking-wide block mb-3`}
          >
            Real Transformation
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: `-50px` }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight mb-8`}
          >
            Techniques
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: `-50px` }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`text-white/90 text-base md:text-lg leading-relaxed`}
          >
            Hair Skill Clinic applies the highest standards in hair transplantation operations. For example, ensuring that the Sapphire FUE Transplantation technique is an indispensable standard in all operations is a clear reflection of Hair Skill Clinic, which was founded by medical doctors. Operations at Hair Skill Clinic are performed by medical doctors and a healthcare team.
          </motion.p>
        </div>

      </div>
    </div>
  );
}

function FAQStage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqsLeft = [
    {
      id: 0,
      q: `How long should I wear a hat after a hair transplant?`,
      a: `We recommend that you use the hat we gave you for 10 days after hair transplantation.`
    },
    {
      id: 2,
      q: `When can I do sports after surgery?`,
      a: `You should wait at least 1 month after the operation to start exercising.`
    },
    {
      id: 4,
      q: `Should I wash my hair everyday after a hair transplant?`,
      a: `After hair transplantation, you should wash your hair everyday for 1 month.`
    }
  ];

  const faqsRight = [
    {
      id: 1,
      q: `When can I remove my bandage after hair transplantation?`,
      a: `You need to wash your head on the second day after the operation. The bandage is removed before washing your head and does not need to be used again afterwards.`
    },
    {
      id: 3,
      q: `How long do I need to use special shampoo?`,
      a: `You should use the shampoo we recommend for 1 month. After you are sure of the health of your hair and scalp, you can continue using the shampoo you always use.`
    },
    {
      id: 5,
      q: `How long should I use Panthenol spray?`,
      a: `You need to use it for about 15 days, until the crusts are completely removed from the skin.`
    }
  ];

  const FAQItem = ({ item }: { item: any }) => {
    const isActive = activeIndex === item.id;
    return (
      <div className={`mb-4 md:mb-6 flex flex-col w-full shadow-md ${isActive ? `rounded-[2rem] overflow-hidden` : `rounded-full`}`}>
        <button
          onClick={() => setActiveIndex(isActive ? null : item.id)}
          className={`w-full text-left px-6 py-5 md:px-8 md:py-6 font-bold text-white transition-colors duration-300 ${isActive ? `bg-[#772424] rounded-t-[2rem]` : `bg-[#772424] hover:bg-red rounded-full`}`}
        >
          {item.q}
        </button>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: `auto`, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`bg-[#d1d5db] overflow-hidden`}
            >
              <div className={`px-6 py-5 md:px-8 md:py-6 text-gray-800 font-medium text-sm md:text-base leading-relaxed`}>
                {item.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className={`w-full bg-[#f8f9fa] py-24 relative z-20`}>
      <div className={`max-w-[1200px] mx-auto px-6 sm:px-8 relative`}>
        <div className={`text-center mb-16`}>
          <span className={`text-[#772424] font-bold text-sm md:text-base tracking-wide block mb-3 uppercase`}>
            Hair Transplant Pakistan
          </span>
          <h2 className={`text-4xl md:text-5xl font-black text-black tracking-tight`}>
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className={`flex flex-col lg:flex-row gap-4 md:gap-8`}>
          <div className={`w-full lg:w-1/2 flex flex-col`}>
            {faqsLeft.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>
          <div className={`w-full lg:w-1/2 flex flex-col`}>
            {faqsRight.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const headline = `Hair Skill Clinic`;
  const tagline = `Mastering the Art of Hair Transplants in Pakistan with World Class Expertise and Natural Results`;
  
  const taglineWords = tagline.split(` `);
  const defaultCountry = countries.find((c: Country) => c.code === `PK`) || countries[0];
  
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const [fullName, setFullName] = useState(``);
  const [email, setEmail] = useState(``);
  const [phone, setPhone] = useState(``);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = `923014923336`;
    const textMessage = `Hello! I would like to get a free consultation.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, `_blank`);
  };

  return (
    <div className={`min-h-screen bg-[#772424] font-sans relative overflow-hidden`}>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: `easeInOut` }}
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/10 blur-[120px] rounded-full pointer-events-none`}
      />

      <div className={`w-full max-w-[1400px] mx-auto px-6 sm:px-8 pt-24 lg:pt-36 pb-20 relative z-10`}>
        
        <div className={`text-center mb-16 flex flex-col items-center`}>
          <h1 className={`mb-6 text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-white drop-shadow-2xl text-center`}>
            {headline}
          </h1>

          <p className={`text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto font-bold leading-relaxed flex flex-wrap justify-center gap-x-2 drop-shadow-xl`}>
            {taglineWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: `blur(12px)`, y: 10 }}
                animate={{ opacity: 1, filter: `blur(0px)`, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.04), duration: 0.8, ease: `easeOut` }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-end relative mt-8`}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className={`relative w-full flex flex-col justify-end items-center lg:items-start`}
          >
            <img 
              src={`/doctors-hero.png`} 
              alt={`Dr. Mehmet Erdogan and Dr. Gokay Bilgin`} 
              className={`w-full max-w-xl object-contain drop-shadow-2xl`}
            />
            <div className={`absolute bottom-4 left-0 w-full flex justify-around px-8 opacity-90`}>
               <img src={`/signature-mehmet.png`} alt={`Dr. Mehmet Erdogan Signature`} className={`h-12 object-contain`} />
               <img src={`/signature-gokay.png`} alt={`Dr. Gokay Bilgin Signature`} className={`h-12 object-contain`} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1, ease: `easeOut` }}
            className={`w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 flex flex-col gap-6 relative`}
          >
            <div className={`bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 relative z-10`}>
              <h2 className={`text-[#772424] text-xl font-extrabold text-center mb-8 tracking-wide`}>
                GET FREE CONSULTATION
              </h2>
              
              <form className={`flex flex-col gap-6`} onSubmit={handleSubmit}>
                <div className={`relative flex items-center border-b border-gray-300 pb-2 transition-colors focus-within:border-[#772424]`}>
                  <svg className={`w-5 h-5 text-gray-400 mr-3`} fill={`currentColor`} viewBox={`0 0 20 20`}>
                    <path fillRule={`evenodd`} d={`M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z`} clipRule={`evenodd`} />
                  </svg>
                  <input type={`text`} placeholder={`Full Name`} value={fullName} onChange={(e) => setFullName(e.target.value)} required className={`w-full text-sm outline-none bg-transparent text-gray-800 placeholder-gray-500 font-medium autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]`} />
                </div>

                <div className={`relative flex items-center border-b border-gray-300 pb-2 transition-colors focus-within:border-[#772424]`}>
                  <svg className={`w-5 h-5 text-gray-400 mr-3`} fill={`currentColor`} viewBox={`0 0 20 20`}>
                    <path d={`M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z`} />
                    <path d={`M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z`} />
                  </svg>
                  <input type={`email`} placeholder={`E-mail`} value={email} onChange={(e) => setEmail(e.target.value)} required className={`w-full text-sm outline-none bg-transparent text-gray-800 placeholder-gray-500 font-medium autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]`} />
                </div>

                <div className={`relative flex items-center border-b border-gray-300 pb-2 transition-colors focus-within:border-[#772424]`}>
                  <div className={`relative mr-4`}>
                    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`flex items-center gap-2 cursor-pointer text-sm font-bold text-[#772424] select-none whitespace-nowrap`}>
                      <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={selectedCountry.name} className={`w-5 object-contain`} />
                      {selectedCountry.dial}
                      <span className={`text-[10px] ml-1`}>▼</span>
                    </div>
                    {isDropdownOpen && (
                      <div className={`absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 shadow-xl rounded-lg z-50`}>
                        {countries.map((country: Country, idx: number) => (
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex items-center justify-between text-gray-800`}>
                            <div className={`flex items-center gap-2`}>
                              <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} className={`w-5 object-contain`} />
                              <span className={`font-bold`}>{country.code}</span>
                              <span className={`text-xs text-gray-400 hidden sm:inline truncate max-w-[80px]`}>{country.name}</span>
                            </div>
                            <span className={`text-gray-500 font-medium`}>{country.dial}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <input type={`tel`} placeholder={`Phone Number`} value={phone} onChange={(e) => setPhone(e.target.value)} required className={`w-full text-sm outline-none bg-transparent text-gray-800 font-medium`} />
                </div>

                <div className={`flex items-center gap-2 mt-2`}>
                  <input type={`checkbox`} id={`privacy`} className={`w-4 h-4 accent-[#772424] rounded cursor-pointer`} required defaultChecked />
                  <label htmlFor={`privacy`} className={`text-[13px] text-gray-600 cursor-pointer`}>
                    I have read and accept the <Link href={`/privacy-policy`} className={`text-[#772424] font-bold hover:underline`}>Privacy Policy.</Link>
                  </label>
                </div>

                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type={`submit`} className={`w-full bg-[#772424] text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 shadow-lg hover:bg-[#5a1b1b] transition-all mt-2`}>
                  Submit
                  <span className={`text-xl font-light`}>›</span>
                </motion.button>
              </form>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className={`flex justify-center w-full z-20`}
            >
              <motion.a 
                href={`https://www.google.com/search?sca_esv=b631901597e26bf7&sxsrf=APpeQntdMcTxbDVXHiSS_qNKDRIkwsn1fA:1782032822741&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-__wSd6NV-ZVxJuhvs5cLT_bSl9pMvKjj6iPC54pNuHuI4OpBZpeJk4pMlLlMA0BrMLtjnt7ATd5NRCqE3kOIE8ERS5LkYl7MiiOzWRDbK-WnGy-v8OirwYOoX_FKE_OMN3C24tIuOo8vbo6-0nXhNh80SS_8p7ziPhAvLqiD_hIkA7Kk2rXjPnwDZ8qu6q9nyxwv5PFRSWDNh2SuwaIfqu8N2gibt6FwlTCpge5xBl16mrfiPBwJmamRFEhRnjc27J8vXtcl80ybaW-FzvfsQm0mc8XFdjdoIkGnN4V3wd1W9QlnL9N2z1d6zUJcC32UsY9Anjh8PodWFbZKefK6JSli-_S9&q=%F0%9D%97%9B%F0%9D%97%AE%F0%9D%97%B6%F0%9D%97%BF+%F0%9D%97%A6%F0%9D%97%B8%F0%9D%97%B6%F0%9D%97%B9%F0%9D%97%B9+-+%F0%9D%97%99%F0%9D%97%A8%F0%9D%97%98+%F0%9D%90%83%F0%9D%90%87%F0%9D%90%88+%F0%9D%97%9B%F0%9D%97%AE%F0%9D%97%B6%F0%9D%97%BF+%F0%9D%97%A7%F0%9D%97%BF%F0%9D%97%AE%F0%9D%97%BB%F0%9D%98%80%F0%9D%97%BD%F0%9D%97%B9%F0%9D%97%AE%F0%9D%97%BB%F0%9D%98%81+%F0%9D%97%96%F0%9D%97%B9%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B6%F0%9D%97%B0+%F0%9D%97%9F%F0%9D%97%AE%F0%9D%97%B5%F0%9D%97%BC%F0%9D%97%BF%F0%9D%97%B2+%F0%9D%97%A3%F0%9D%97%AE%F0%9D%97%B8%F0%9D%97%B6%F0%9D%98%80%F0%9D%98%81%F0%9D%97%AE%F0%9D%97%BB+Reviews&sa=X&ved=2ahUKEwj3j4LL_ZeVAxX36skDHRiVAyQQ0bkNegQIPBAF&biw=1536&bih=703&dpr=1.25`}
                target={`_blank`}
                rel={`noopener noreferrer`}
                whileHover={{ y: -3, scale: 1.02 }} 
                className={`relative overflow-hidden flex items-center gap-4 bg-[#111] backdrop-blur-xl border border-gray-700/60 shadow-[0_15px_40px_rgba(0,0,0,0.4)] rounded-full px-7 py-3.5 cursor-pointer group block`}
              >
                <motion.div animate={{ x: [`-200%`, `200%`] }} transition={{ repeat: Infinity, duration: 2.5, ease: `linear`, repeatDelay: 1 }} className={`absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg] z-0 pointer-events-none`} />
                <div className={`relative z-10 bg-white p-1.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]`}>
                  <svg className={`w-5 h-5`} viewBox={`0 0 24 24`} xmlns={`http://www.w3.org/2000/svg`}>
                    <path d={`M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`} fill={`#4285F4`}/>
                    <path d={`M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`} fill={`#34A853`}/>
                    <path d={`M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z`} fill={`#FBBC05`}/>
                    <path d={`M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z`} fill={`#EA4335`}/>
                  </svg>
                </div>
                <div className={`relative z-10 flex flex-col`}>
                  <div className={`flex items-center gap-2`}>
                    <span className={`text-white font-black text-lg leading-none tracking-tight`}>4.9</span>
                    <div className={`flex gap-0.5`}>
                      {[1, 2, 3, 4, 5].map((star, i) => (
                        <motion.svg key={star} initial={{ opacity: 0, rotate: -30, scale: 0 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} transition={{ delay: 2.5 + (i * 0.1), type: `spring`, stiffness: 200 }} className={`w-[15px] h-[15px] text-[#FBBC05] drop-shadow-[0_0_3px_rgba(251,188,5,0.6)]`} fill={`currentColor`} viewBox={`0 0 20 20`}>
                          <path d={`M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z`} />
                        </motion.svg>
                      ))}
                    </div>
                  </div>
                  <span className={`text-gray-400 text-[10px] font-bold tracking-[0.1em] uppercase mt-0.5`}>5,000+ Google Reviews</span>
                </div>
              </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </div>

      <div className={`w-full bg-white py-20 relative z-20 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.05)]`}>
        <div className={`max-w-[1400px] mx-auto px-6 sm:px-8 relative`}>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative`}>
            
            <motion.div 
              initial={`hidden`} whileInView={`visible`} viewport={{ once: true, margin: `-50px` }}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: `easeOut` } } }}
              className={`flex flex-col items-center justify-center py-8 relative group`}
            >
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <h3 className={`text-6xl lg:text-[80px] font-black text-[#1a202c] tracking-tighter mb-2 relative z-10 flex items-center`}>
                <AnimatedCounter to={20} duration={2} />
                <span className={`text-[#772424]`}>+</span>
              </h3>
              <div className={`flex flex-col items-center`}>
                <span className={`text-xl lg:text-2xl font-bold text-[#4a5568]`}>Years of</span>
                <span className={`text-base lg:text-lg font-medium text-gray-500 tracking-wide`}>Experience</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ height: 0, opacity: 0 }} whileInView={{ height: `100%`, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
              className={`hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 w-[1px] h-[80%] bg-gradient-to-b from-transparent via-[#C5A059]/50 to-transparent`} 
            />

            <motion.div 
              initial={`hidden`} whileInView={`visible`} viewport={{ once: true, margin: `-50px` }}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: `easeOut` } } }}
              className={`flex flex-col items-center justify-center py-8 relative group`}
            >
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              <h3 className={`text-6xl lg:text-[80px] font-black text-[#1a202c] tracking-tighter mb-2 relative z-10 flex items-center`}>
                <AnimatedCounter to={5} duration={1.5} />
                <span className={`text-[#772424]`}>+</span>
              </h3>
              <div className={`flex flex-col items-center`}>
                <span className={`text-xl lg:text-2xl font-bold text-[#4a5568]`}>Hair Transplant</span>
                <span className={`text-base lg:text-lg font-medium text-gray-500 tracking-wide`}>Doctor</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ height: 0, opacity: 0 }} whileInView={{ height: `100%`, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.7 }}
              className={`hidden md:block absolute left-2/3 top-1/2 -translate-y-1/2 w-[1px] h-[80%] bg-gradient-to-b from-transparent via-[#C5A059]/50 to-transparent`} 
            />

            <motion.div 
              initial={`hidden`} whileInView={`visible`} viewport={{ once: true, margin: `-50px` }}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: `easeOut` } } }}
              className={`flex flex-col items-center justify-center py-8 relative group`}
            >
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              <h3 className={`text-6xl lg:text-[80px] font-black text-[#1a202c] tracking-tighter mb-2 relative z-10 flex items-center`}>
                <AnimatedCounter to={20000} duration={3} />
                <span className={`text-[#772424]`}>+</span>
              </h3>
              <div className={`flex flex-col items-center`}>
                <span className={`text-xl lg:text-2xl font-bold text-[#4a5568]`}>Happy</span>
                <span className={`text-base lg:text-lg font-medium text-gray-500 tracking-wide`}>Patient</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <InteractiveDoctorsStage />
      <BeforeAfterStage />
      <PhilosophyStage />
      <WhyChooseStage />
      <HighlightsStage />
      <TreatmentsStage />
      <GalleryStage />
      <PatientGuideStage />
      <TechniquesStage />
      <FAQStage />

    </div>
  );
}