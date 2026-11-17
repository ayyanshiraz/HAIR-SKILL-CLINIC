"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

import dynamic from "next/dynamic";
const ConsultationForm = dynamic(() => import("./ConsultationForm"), { ssr: false });


// --- STRICT ANIMATION TUPLE ---
const customEase: [number, number, number, number] = [0.2, 0.65, 0.3, 0.9];

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, delay: 0.2, ease: customEase } 
  }
};

const techniquesList = [
  {
    title: "Sapphire Hair Transplant",
    image: "/home/techniques/2.webp",
    summary: "People often search sapphire hair transplant Pakistan hoping to understand whether this method truly delivers better micro-incision density and softer faster healing.",
    link: "/hair-transplant/techniques/sapphire"
  },
  {
    title: "Body Hair Transplant",
    image: "/home/techniques/5.webp",
    summary: "If you are reading about body hair transplant Pakistan you have probably already heard that the back of the head is the primary donor area. Here is how we utilize body reserves.",
    link: "/hair-transplant/techniques/body"
  },
  {
    title: "Unshaven Hair Transplant",
    image: "/home/techniques/7.webp",
    summary: "Unshaven Hair Transplant A Secret Between You and Your Doctor. The unshaven hair transplant has become a fantastic source of permanent happiness for working professionals.",
    link: "/hair-transplant/techniques/unshaven-transplant"
  },
  {
    title: "Long FUE Hair Transplant",
    image: "/hair-transplant/1.webp",
    summary: "Long FUE hair transplant in Pakistan is an advanced technique that allows hair transplantation without fully shaving the donor area.",
    link: "/hair-transplant/techniques/long-fue"
  },
  {
    title: "Manual Punch Hair Transplant",
    image: "/home/techniques/4.webp",
    summary: "Manual Punch Hair Transplant is a technique applied in hair transplantation where the grafts are extracted strictly one by one using manual precision tools.",
    link: "/hair-transplant/techniques/manual-punch"
  },
  {
    title: "Needle-Free Anesthesia",
    image: "/hair-transplant/25.webp",
    summary: "Needle-Free Anesthesia Patients primary concern during surgical operations is the fear of feeling pain. Our advanced jet injection systems eliminate standard needles.",
    link: "/hair-transplant/techniques/needle-free"
  }
];

export default function TechniquesClient() {
  

 

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start mt-8 mb-8 ml-8">
      
      {/* LEFT COLUMN: EXACT PREVIOUS LIST DESIGN WITH IMAGES */}
      <div className="w-full lg:w-2/3">
        
        {/* Back Button */}
        <Link 
          href="/hair-transplant" 
          className="mb-8 mt-24 text-[#772424] font-black text-sm tracking-widest uppercase flex items-center gap-2 hover:-translate-x-1 transition-transform w-fit"
        >
          <span>←</span> Back To Hair Transplant
        </Link>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center mb-6">
            Techniques
          </h1>
        {/* The Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {techniquesList.map((art, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 flex flex-col h-full group hover:border-[#772424] active:border-[#772424] hover:shadow-[0_20px_40px_-15px_rgba(119,36,36,0.15)] active:shadow-[0_20px_40px_-15px_rgba(119,36,36,0.15)] transition-all duration-300 shadow-lg"
            >
              <Link href={art.link} className="flex flex-col flex-1 h-full block cursor-pointer select-none">
                
                {/* Image Box */}
                <div className="w-full aspect-[16/10] overflow-hidden relative bg-gray-100 shrink-0">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700 object-top" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 group-active:bg-black/5 transition-colors duration-300" />
                </div>
                
                {/* Text Details Box */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#772424] mb-3 leading-snug group-hover:translate-x-0.5 group-active:translate-x-0.5 transition-transform">
                      {art.title}
                    </h2>
                    <p className="text-black text-sm leading-relaxed mb-6 font-medium line-clamp-3">
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
      </div>

      {/* RIGHT COLUMN: EXACT PREVIOUS STICKY CONSULTATION FORM */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={slideInRight}
        className="w-full lg:w-1/3 lg:sticky lg:top-32 self-start h-max"
      >
        <ConsultationForm />
      </motion.div>

    </div>
  );
}