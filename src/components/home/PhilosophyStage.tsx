"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PhilosophyStage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const philosophyData = [
    {
      title: `True Planning`,
      content: `At Hair Skill, the medical process always begins with a detailed analysis. True Planning illuminates the precise path to achieving completely natural results. Examining patient data before making a clinical decision is a crucial step in any hair transplant procedure in Pakistan. Thus, our doctors meticulously examine the donor area in detail and carefully listen to patient inputs to achieve maximum patient satisfaction. We firmly believe that determining the exact number of grafts depends entirely on the doctors clinical expertise and highly refined aesthetic taste.`
    },
    {
      title: `True Hair Line Design`,
      content: `We believe that proper hairline design is the ultimate secret to a truly flawless and natural look. Our True Hairline Design procedures prioritize the meticulous placement of single follicular units in the frontal region to perfectly maintain ideal aesthetic proportions and overall appearance. By calculating precise angles and following facial anatomy, we guarantee the hair grows naturally, which is a hallmark of the most successful hair transplant procedure. Since maintaining masculinity is crucial, the exact position is determined by forehead muscles.`
    },
    {
      title: `True Execution`,
      content: `The day of the operation is a major milestone for a successful outcome in your entire transformation process. It is a marathon after extensive technical and medical preparation. By implementing high level clinical safety precautions, our professional team ensures a smooth experience where absolutely nothing is allowed to go wrong. Our primary goal is always to deliver safe operations and outstanding results for every single patient walking through our clinic doors.`
    },
    {
      title: `True Innovation`,
      content: `The visionary founders of Hair Skill Clinic strongly view continuous development as the absolute foundation of modern medicine. Our dedicated medical specialists and consultants have an undying passion for advancing hair restoration techniques. They are constantly trying to find more effective ways to perform safe operations. Utilizing highly advanced methods like the Sapphire technique is an absolute must in all operations and it represents one of the brightest manifestations of True Innovation.`
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`w-full bg-white py-12 md:py-24 relative overflow-hidden z-20`}>
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
            As a leading hair transplant clinic in Lahore, Hair Skill Clinic has highly disciplined the way of performing hair transplantation around a TRUE Philosophy to deliver the best hair transplant procedure for everyone.
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
            <Image 
              src={`/home/sac.webp`} 
              alt={`Hair Skill True Philosophy Hair Anatomy`}
              width={600}
              height={600} 
              className={`w-full max-w-xl h-auto object-contain drop-shadow-xl`} 
            />
          </motion.div>

        </div>

      </div>
    </div>
  );
}