"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TechniquesStage() {
  const techniques = [
    { 
      title: `Sapphire Hair\nTransplant`, 
      image: `/home/techniques/2.webp`, 
      link: `/hair-transplant/techniques/sapphire`, 
      radius: `rounded-tl-[3rem] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl` 
    },
    { 
      title: `DHI Hair\nTransplantation`, 
      image: `/home/techniques/3.webp`, 
      link: `/hair-transplant/treatments/dhi`, 
      radius: `rounded-2xl` 
    },
    { 
      title: `Manual Fue\nHair Transplant`, 
      image: `/home/techniques/4.webp`, 
      link: `/hair-transplant/treatments/manual-fue`, 
      radius: `rounded-tr-[3rem] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl` 
    },
    { 
      title: `Body Hair\nTransplant`, 
      image: `/home/techniques/6.webp`, 
      link: `/hair-transplant/techniques/body`, 
      radius: `rounded-bl-[3rem] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl` 
    },
    { 
      title: `Unshaven Hair\nTransplant`, 
      image: `/home/techniques/8.webp`, 
      link: `/hair-transplant/techniques/unshaven-transplant`, 
      radius: `rounded-2xl` 
    },
    { 
      title: `Needle-Free\nAnesthesia`, 
      image: `/home/techniques/10.webp`, 
      link: `/hair-transplant/techniques/needle-free`, 
      radius: `rounded-br-[3rem] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl` 
    }
  ];

  return (
    <div className={`w-full bg-[#772424] py-12 md:py-24 relative z-20`}>
      <div className={`max-w-[1400px] mx-auto px-6 sm:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20`}>
        
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
                <Image 
                  src={tech.image} 
                  alt={tech.title.replace(`\n`, ` `)}
                  width={400}
                  height={500} 
                  className={`w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110`} 
                />
                <div className={`absolute inset-0 bg-black/40 md:group-hover:bg-black/50 transition-colors duration-300`} />
                <div className={`absolute inset-0 p-4 flex items-center justify-center text-center`}>
                  <h3 className={`text-white font-bold text-lg md:text-xl drop-shadow-md whitespace-pre-line leading-tight`}>
                    {tech.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

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