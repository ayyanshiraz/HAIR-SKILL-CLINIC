"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TreatmentsStage() {
  const treatments = [
    {
      title: `Manual Fue`,
      href: `/hair-transplant/treatments/manual-fue`,
      bgColor: `bg-[#4A0E0E]`,
      icon: <img src={`/our%20treatments/1.svg`} alt={`Hair Transplant Icon`} className={`w-full h-full object-contain`} />
    },
    {
      title: `Beard Transplant`,
      href: `/hair-transplant/treatments/beard-transplant`,
      bgColor: `bg-[#5A1212]`,
      icon: <img src={`/our%20treatments/2.svg`} alt={`Beard Transplant Icon`} className={`w-full h-full object-contain`} />
    },
    {
      title: `Female Hair Transplant`,
      href: `/hair-transplant/treatments/female`,
      bgColor: `bg-[#772424]`,
      icon: <img src={`/our%20treatments/4.svg`} alt={`Female Hair Transplant Icon`} className={`w-full h-full object-contain`} />
    },
    {
      title: `Afro Hair Transplant`,
      href: `/hair-transplant/treatments/afro-hair`,
      bgColor: `bg-[#8C2222]`,
      icon: <img src={`/our%20treatments/5.svg`} alt={`Afro Hair Transplant Icon`} className={`w-full h-full object-contain`} />
    },
    {
      title: `Restoration of Sideburns`,
      href: `/hair-transplant/treatments/sideburn`,
      bgColor: `bg-[#A32A2A]`,
      icon: <img src={`/our%20treatments/6.svg`} alt={`Restoration of Sideburns Icon`} className={`w-full h-full object-contain`} />
    },
    {
      title: `Mesotherapy`,
      href: `/hair-transplant/treatments/mesotherapy`,
      bgColor: `bg-[#CF3D3D]`,
      icon: <img src={`/our%20treatments/8.svg`} alt={`Mesotherapy Icon`} className={`w-full h-full object-contain`} />
    },
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
                
                <motion.div 
                  className={`absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg] pointer-events-none z-0`}
                  whileHover={{ left: `200%` }}
                  transition={{ duration: 0.7, ease: `easeInOut` }}
                />

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