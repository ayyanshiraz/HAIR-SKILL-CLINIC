"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PhilosophyStage() {
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
      content: `The day of the operation is a key milestone for a successful outcome in the entire transformation process. The day of the operation is a marathon after a long technical detail preparation. Therefore, thanks to Hair Skills high-level precautions, nothing is allowed to go wrong. Hair Skills main goal is always to achieve successful operations and results, and it uses all its efforts and resources to succeed and do room best.`
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