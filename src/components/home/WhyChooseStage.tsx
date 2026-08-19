"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseStage() {
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
          Hair is an important part of your aesthetic perception and overall self-confidence. Correct clinical applications strengthen not only physical appearance but also inner confidence. Providing the best hair transplant in Lahore, Hair Skill Clinic offers exceptional procedures using advanced medical techniques and ethical care. Through the vast experience of our specialist doctors and patient-oriented hospitality, we ensure you achieve completely natural and successful results.
        </motion.p>

      </div>
    </div>
  );
}