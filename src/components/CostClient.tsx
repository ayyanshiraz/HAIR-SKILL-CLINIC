"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const customEase: [number, number, number, number] = [0.2, 0.65, 0.3, 0.9];

export default function CostClient() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-8 md:pb-12 bg-white px-4 sm:px-6"
      >
        <div className="max-w-[1200px] mx-auto relative">
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors"><span>←</span> Homepage</Link>
            <span className="text-gray-400">/</span>
            <Link href="/hair-transplant" className="hover:text-[#772424] transition-colors">Hair Transplant</Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center md:text-left leading-tight">
            Transparent Pricing.<br className="hidden md:block"/>
            <span className="text-[#772424]">Zero Hidden Fees.</span>
          </h1>
          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl font-medium text-center md:text-left">
            At Hair Skill Clinic Lahore, we believe in complete transparency. Our hair transplant cost depends entirely on the technique and the number of sessions required. Review our fixed packages below.
          </p>
        </div>
      </motion.section>

      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            
            {/* Card 1: Motorized */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-200/80 flex flex-col h-full hover:border-[#772424]/30 transition-colors"
            >
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500 bg-gray-200 px-3 py-1 rounded-full">Standard Package</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a202c] mt-4">Motorized FUE <br/>with DHI</h2>
                <p className="text-gray-600 text-sm mt-3 font-medium">Efficient extraction with precise Direct Hair Implantation for excellent coverage.</p>
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">1 Day Session</p>
                    <p className="text-xl font-black text-gray-900">60,000 PKR</p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">2 Days Session</p>
                    <p className="text-xl font-black text-gray-900">120,000 PKR</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Manual (Premium) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#772424] rounded-3xl p-8 sm:p-10 border border-[#8c2a2a] flex flex-col h-full text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-[#C5A059] text-white text-xs font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl">Most Popular</div>
              
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-white/80 bg-black/20 px-3 py-1 rounded-full">Premium Package</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">Manual FUE <br/>with DHI</h2>
                <p className="text-white/80 text-sm mt-3 font-medium">Ultimate precision. Surgeon hand-extracts each graft to ensure zero follicle damage.</p>
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-white/70 font-bold uppercase tracking-wider">1 Day Session</p>
                    <p className="text-xl font-black text-white">80,000 PKR</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-white/70 font-bold uppercase tracking-wider">2 Days Session</p>
                    <p className="text-xl font-black text-white">160,000 PKR</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
          {/* --- Flexible Pricing Note --- */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <p className="inline-block bg-amber-50/50 border border-amber-200/60 text-gray-700 text-sm font-medium px-6 py-3 rounded-xl">
              <span className="text-[#772424] font-bold mr-1">Note:</span> 
              The exact cost may vary depending on your specific baldness grade. Visit Hair Skill Clinic for a personalized assessment and flexible pricing options.
            </p>
          </motion.div>

          {/* Value Add / What's Included (SEO Hack) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 bg-gray-50 border border-gray-200/80 rounded-3xl p-8 sm:p-12"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8">What’s Included in This Cost?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="w-12 h-12 bg-[#772424]/10 rounded-xl flex items-center justify-center mb-4 text-[#772424] font-black text-xl">1</div>
                <h4 className="font-extrabold text-gray-900 mb-2">Doctor Consultation</h4>
                <p className="text-sm text-gray-600 font-medium">Detailed scalp analysis and hairline mapping by Dr. Mansoor Ahmad.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#772424]/10 rounded-xl flex items-center justify-center mb-4 text-[#772424] font-black text-xl">2</div>
                <h4 className="font-extrabold text-gray-900 mb-2">The Procedure</h4>
                <p className="text-sm text-gray-600 font-medium">Complete extraction and DHI implantation using sterile, single-use equipment.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#772424]/10 rounded-xl flex items-center justify-center mb-4 text-[#772424] font-black text-xl">3</div>
                <h4 className="font-extrabold text-gray-900 mb-2">Local Anesthesia</h4>
                <p className="text-sm text-gray-600 font-medium">Needle-free, painless local anesthesia applied before the surgery begins.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#772424]/10 rounded-xl flex items-center justify-center mb-4 text-[#772424] font-black text-xl">4</div>
                <h4 className="font-extrabold text-gray-900 mb-2">Post-Op Guidance</h4>
                <p className="text-sm text-gray-600 font-medium">Continuous follow-up and care instructions for the next 12 months.</p>
              </div>
            </div>
          </motion.div>

          {/* SEO Text Block */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-extrabold text-gray-900 mb-4">Why Does the Price Vary?</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              The overall hair transplant cost in Lahore is determined by the technique and your required graft count. A standard 1-day session covers most moderate baldness cases, while a 2-day session is designed for advanced hair loss (Norwood Stage 5 to 7) requiring maximum coverage. Our Manual FUE option is priced slightly higher as it demands exceptional precision and more surgical time.
            </p>
            <div className="mt-8">
              <Link href="https://wa.me/923014923336" target="_blank" className="inline-flex items-center gap-3 bg-[#772424] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-[#8c2a2a] transition-all shadow-lg hover:scale-105 active:scale-95">
                Book a Free Consultation Now <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}