"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

import dynamic from "next/dynamic";
const ConsultationForm = dynamic(() => import("./ConsultationForm"), { ssr: false });


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

export default function PatientGuideClient() {

  // --- GRID DATA (Mapped directly from your reference screenshots) ---
  const guideArticles = [
    {
      title: "Sterilization at Hair Skill Clinic",
      image: "/patient-guide/1.webp",
      summary: "Sterilization and Hygiene Standards at Hair Skill Clinic. At Hair Skill Clinic, our priority is to provide patients with the safest and highest medical standards.",
      link: "/patient-guide/sterilization"
    },
    {
      title: "Hair Washing",
      image: "/patient-guide/5.webp",
      summary: "Hair Wash After the Procedure. Hair washing is one of the essential parts of a hair transplant. Therefore, there are some necessary steps to follow carefully.",
      link: "/patient-guide/hair-washing"
    },
    {
      title: "What Should I Do Before Hair Transplant",
      image: "/home/techniques/4.webp",
      summary: "What Should I Do Before Hair Transplant Procedure? Before Procedure; If you are the one who is thinking about undergoing a hair transplant, read these steps.",
      link: "/patient-guide/before"
    },
    {
      title: "Day Of Procedure",
      image: "/patient-guide/6.webp",
      summary: "The Day When The Transformation Starts. Day Of Procedure; Eventually, the big day when the transformation starts to come. It is structured for ultimate comfort.",
      link: "/patient-guide/day-of"
    },
    {
      title: "After Hair Transplant Procedure",
      image: "/patient-guide/7.webp",
      summary: "Hair Transplant After Procedure: What to Expect and What to Pay Attention After Procedure; One of the most critical phases of your natural hair restoration.",
      link: "/patient-guide/after"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#772424] selection:text-white pb-24">
      
      {/* --- PAGE HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-gray-50 border-b border-gray-200 px-6"
      >
        <div className="max-w-[1300px] mx-auto">
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2">
            <Link href="/" className="hover:text-[#772424] active:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <span className="text-[#772424]">Patient Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Patient Guide
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* LEFT COLUMN: 5 CARDS GRID */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {guideArticles.map((art, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.15 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 flex flex-col h-full group hover:border-[#772424] active:border-[#772424] hover:shadow-[0_20px_40px_-15px_rgba(119,36,36,0.15)] active:shadow-[0_20px_40px_-15px_rgba(119,36,36,0.15)] transition-all duration-300 shadow-lg"
                >
                  <Link href={art.link} className="flex flex-col flex-1 h-full block cursor-pointer">
                    <div className="w-full aspect-[16/10] overflow-hidden relative bg-gray-100 shrink-0">
                      <img 
                        src={art.image} 
                        alt={art.title} 
                        className="w-full h-full object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700 object-top" 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 group-active:bg-black/10 transition-colors duration-300" />
                    </div>
                    
                    <div className="p-8 flex flex-col flex-1 justify-between bg-white">
                      <div>
                        <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-[#772424] group-active:text-[#772424] transition-colors">
                          {art.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                          {art.summary}
                        </p>
                      </div>
                      
                      <div className="text-[#772424] font-black text-sm tracking-wider uppercase flex items-center gap-2 group-hover:translate-x-1 group-active:translate-x-1 transition-transform w-fit">
                        More <span>→</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* RIGHT COLUMN: STICKY CONSULTATION FORM */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="w-full lg:w-1/3 lg:sticky lg:top-32"
            >
              <ConsultationForm />
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}