"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

import dynamic from "next/dynamic";
const ConsultationForm = dynamic(() => import("./ConsultationForm"), { ssr: false });

// Safely mapped to your root app data folder


const customEase: [number, number, number, number] = [0.2, 0.65, 0.3, 0.9];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: customEase } 
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, delay: 0.2, ease: customEase } 
  }
};

export default function TreatmentsHubClient() {
 
  

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- 11 MASTER TREATMENTS CARDS (Exactly matching the dropdown items, deduplicated & build-safe) ---
  const treatmentsList = [
    {
      title: "Manual Fue Hair Transplant",
      desc: "Experience the precision of Manual FUE Hair Transplant for seamless and natural looking hair restoration results...",
      img: "/home/techniques/4.webp",
      href: "/hair-transplant/treatments/manual-fue"
    },
    {
      title: "DHI Hair Transplant",
      desc: "Direct Hair Implantation DHI offers advanced placement for maximum density and natural growth without prior shaving...",
      img: "/home/techniques/3.webp",
      href: "/hair-transplant/treatments/dhi"
    },
    {
      title: "FUE By Moterize Method",
      desc: "The Motorized FUE method ensures highly efficient and precise extraction for optimal hair transplant outcomes...",
      img: "/home/techniques/1.webp",
      href: "/hair-transplant/treatments/motorized-fue"
    },
    {
      title: "Chinese Method",
      desc: "Explore the specialized Chinese Method for hair restoration uniquely tailored to specific hair and scalp characteristics...",
      img: "/hair-transplant/35.webp",
      href: "/hair-transplant/treatments/chinese-hair-transplant"
    },
    {
      title: "FUT Method",
      desc: "FUT, also known as the Strip Method, is a hair transplant technique in which a strip of scalp is removed...",
      img: "/hair-transplant/6.webp",
      href: "/hair-transplant/treatments/fut"
    },
    {
      title: "Beard Transplant",
      desc: "If you are searching for a beard transplant Pakistan guide that feels honest calm and grounded in real treatment experience you ar...",
      img: "/hair-transplant/treatments/2.webp",
      href: "/hair-transplant/treatments/beard-transplant"
    },
    {
      title: "Female Hair Transplant",
      desc: "Losing hair as a woman feels different. It is not just about coverage. It is about how you see yourself in photos how confidently you style...",
      img: "/hair-transplant/21.webp",
      href: "/hair-transplant/treatments/female"
    },
    {
      title: "Afro Hair Transplant",
      desc: "If you have been searching for a clinic that truly understands the needs of tightly coiled hair this page gives you the clarity you have been...",
      img: "/hair-transplant/13.webp",
      href: "/hair-transplant/treatments/afro-hair"
    },
    {
      title: "Sideburn Transplantation",
      desc: "A sideburn transplant is a focused detail-driven procedure that restores shape density and balance to an area that defines the fram...",
      img: "/hair-transplant/18.webp",
      href: "/hair-transplant/treatments/sideburn"
    },
    {
      title: "Mesotherapy",
      desc: "Hair Treatment Mesotherapy in Pakistan is a targeted micro-injection method placing vitamins minerals and growth-supporting...",
      img: "/hair-transplant/26.webp",
      href: "/hair-transplant/treatments/mesotherapy"
    },
    {
      title: "Ozone Hair Therapy",
      desc: "Ozone therapy for hair is a targeted scalp treatment that uses controlled medical ozone to support follicles calm inflammation and...",
      img: "/hair-transplant/treatments/4.webp",
      href: "/hair-transplant/treatments/ozone-hair-therapy"
    },
    {
      title: "PRP Hair Treatment",
      desc: "PRP hair treatment is a medical procedure that uses your own blood to support weaker follicles. At Hair Skill Clinic PRP hair treatment...",
      img: "/hair-transplant/treatments/8.webp",
      href: "/hair-transplant/treatments/prp-hair-treatment"
    },
    {
      title: "Widow's Peak Hair Transplant",
      desc: "Restore a natural and youthful hairline with our specialized Widow's Peak hair transplant, tailored for perfect facial framing and density.",
      img: "/hair-transplant/2.webp", 
      href: "/hair-transplant/treatments/widows-peak"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
      {/* --- ASYMMETRIC HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-white px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          {/* Breadcrumbs strictly pinned to far left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/hair-transplant" className="hover:text-[#772424] transition-colors">Hair Transplant</Link>
           
            
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Treatments
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: 2-COLUMN TREATMENTS GRID */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {treatmentsList.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    variants={fadeUp}
                    className="flex flex-col"
                  >
                    <Link 
                      href={item.href} 
                      className="group bg-gray-50 border border-gray-200/80 rounded-3xl overflow-hidden flex flex-col justify-between h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 border-[#772424]/10"
                    >
                      <div>
                        <div className="w-full aspect-[16/10] overflow-hidden bg-gray-200 relative">
                          <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-top" 
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        </div>
                        
                        <div className="p-6">
                          <h2 className="text-xl font-black text-[#772424] mb-3 group-hover:text-black transition-colors leading-snug">
                            {item.title}
                          </h2>
                          <p className="text-black text-sm leading-relaxed font-medium line-clamp-3">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-2">
                        <span className="text-[#772424] font-black text-sm tracking-wider group-hover:translate-x-1.5 inline-block transition-transform flex items-center gap-1">
                          More <span>›</span>
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
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