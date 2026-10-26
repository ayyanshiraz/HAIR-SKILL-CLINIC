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
            Tailored Treatment Plans.<br className="hidden md:block"/>
            <span className="text-[#772424]">Consultation-Based Pricing.</span>
          </h1>
          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl font-medium text-center md:text-left">
            At Hair Skill Clinic Lahore, every hair restoration procedure is customized to your anatomy. Because your required graft count, donor capacity, and baldness area are unique, your exact hair transplant cost is determined after a clinical scalp evaluation with our surgeon.
          </p>
        </div>
      </motion.section>

      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Session Structure Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            
            {/* Card 1: Motorized FUE with DHI */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-200/80 flex flex-col h-full hover:border-[#772424]/30 transition-colors"
            >
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500 bg-gray-200 px-3 py-1 rounded-full">Standard Surgical Option</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a202c] mt-4">Motorized FUE <br/>with DHI</h2>
                <p className="text-gray-600 text-sm mt-3 font-medium">Efficient follicular extraction combined with Direct Hair Implantation for dense frontal hairlines and broad coverage.</p>
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div>
                    <p className="text-xs text-[#772424] font-bold uppercase tracking-wider">1-Day Session Plan</p>
                    <p className="text-base font-extrabold text-gray-900 mt-1">Hairline &amp; Moderate Thinning</p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">Ideal for Norwood Stages 2 to 4 coverage</p>
                  </div>
                  <span className="text-xs font-bold bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-center">
                    Quote After Evaluation
                  </span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div>
                    <p className="text-xs text-[#772424] font-bold uppercase tracking-wider">2-Days Session Plan</p>
                    <p className="text-base font-extrabold text-gray-900 mt-1">Extensive Frontal &amp; Crown Area</p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">Designed for advanced Norwood Stages 5 to 7</p>
                  </div>
                  <span className="text-xs font-bold bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-center">
                    Quote After Evaluation
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Manual FUE with DHI (Premium) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#772424] rounded-3xl p-8 sm:p-10 border border-[#8c2a2a] flex flex-col h-full text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-[#C5A059] text-white text-xs font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl">Surgeon Recommended</div>
              
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-white/80 bg-black/20 px-3 py-1 rounded-full">Premium Precision Option</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">Manual FUE <br/>with DHI</h2>
                <p className="text-white/80 text-sm mt-3 font-medium">Maximum donor preservation. The surgeon hand-extracts each follicle with tactile control to protect delicate roots.</p>
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div>
                    <p className="text-xs text-white/70 font-bold uppercase tracking-wider">1-Day Session Plan</p>
                    <p className="text-base font-extrabold text-white mt-1">High-Density Frontal Restoration</p>
                    <p className="text-xs text-white/75 font-medium mt-0.5">Suited for delicate donor zones &amp; temple framing</p>
                  </div>
                  <span className="text-xs font-bold bg-white/20 text-white px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-center">
                    Quote After Evaluation
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div>
                    <p className="text-xs text-white/70 font-bold uppercase tracking-wider">2-Days Session Plan</p>
                    <p className="text-base font-extrabold text-white mt-1">Full Scalp Coverage &amp; Density</p>
                    <p className="text-xs text-white/75 font-medium mt-0.5">Comprehensive restoration for larger baldness grades</p>
                  </div>
                  <span className="text-xs font-bold bg-white/20 text-white px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-center">
                    Quote After Evaluation
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Clinical Consultation Notice */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <p className="inline-block bg-amber-50/50 border border-amber-200/60 text-gray-700 text-sm font-medium px-6 py-3 rounded-xl">
              <span className="text-[#772424] font-bold mr-1">Medical Policy:</span> 
              We do not publish generic online prices because every scalp requires a different graft count and surgical plan. Visit our Gulberg III clinic for an accurate, face-to-face quote with our doctor.
            </p>
          </motion.div>

          {/* How Cost Is Calculated Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-16 bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">How Your Hair Transplant Cost Is Determined</h2>
            <p className="text-gray-600 text-sm sm:text-base font-medium mb-8 max-w-3xl">
              During your in-clinic consultation at Hair Skill Clinic, Dr. Mansoor Ahmad (PMDC Reg. No. 1535-P) examines four clinical factors before providing your final package quote:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">1. Size of the Bald Area &amp; Norwood Grade</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  A minor temple or frontal hairline touch-up requires far fewer grafts and less operating time than restoring advanced thinning across both the mid-scalp and vertex crown.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">2. Required Grafts &amp; Session Duration</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  Based on the number of follicular units needed for natural density, your doctor will advise whether your restoration can be completed in a 1-day session or requires a 2-days session.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">3. Donor Area Quality &amp; Follicle Structure</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  We inspect the thickness, curl angle, and density of the hair at the back of your head to ensure safe harvesting without depleting your permanent donor reserves.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">4. Extraction &amp; Implantation Technique</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  Choosing between Motorized FUE, hand-controlled Manual FUE, Sapphire blades, or Direct Hair Implantation (DHI) Choi pens directly shapes the surgical time and instruments required.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Value Add / What Is Included */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 bg-gray-50 border border-gray-200/80 rounded-3xl p-8 sm:p-12"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8">What Is Included in Your Treatment Plan?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="w-12 h-12 bg-[#772424]/10 rounded-xl flex items-center justify-center mb-4 text-[#772424] font-black text-xl">1</div>
                <h4 className="font-extrabold text-gray-900 mb-2">Doctor Consultation</h4>
                <p className="text-sm text-gray-600 font-medium">Detailed scalp analysis, graft calculation, and hairline mapping by Dr. Mansoor Ahmad.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#772424]/10 rounded-xl flex items-center justify-center mb-4 text-[#772424] font-black text-xl">2</div>
                <h4 className="font-extrabold text-gray-900 mb-2">The Procedure</h4>
                <p className="text-sm text-gray-600 font-medium">Complete extraction and DHI implantation using sterile, single-use clinical instruments.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#772424]/10 rounded-xl flex items-center justify-center mb-4 text-[#772424] font-black text-xl">3</div>
                <h4 className="font-extrabold text-gray-900 mb-2">Comfort Anesthesia</h4>
                <p className="text-sm text-gray-600 font-medium">Needle-free local anesthesia administered under medical supervision before surgery begins.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#772424]/10 rounded-xl flex items-center justify-center mb-4 text-[#772424] font-black text-xl">4</div>
                <h4 className="font-extrabold text-gray-900 mb-2">Post-Op Guidance</h4>
                <p className="text-sm text-gray-600 font-medium">Structured washing protocols and continuous follow-up checkups over 12 months.</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Call to Action Block */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-extrabold text-gray-900 mb-4">Get Your Personalized Quote From Our Surgeon</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Avoid misleading per-graft estimates or bargain packages that compromise on hygiene. Schedule an in-person scalp examination at Hair Skill Clinic in Gulberg III, Lahore, or send us your scalp photos on WhatsApp for a preliminary doctor assessment.
            </p>
            <div className="mt-8">
              <Link href="https://wa.me/923014923336" target="_blank" className="inline-flex items-center gap-3 bg-[#772424] text-white font-extrabold px-8 py-4 rounded-xl hover:bg-[#8c2a2a] transition-all shadow-lg hover:scale-105 active:scale-95">
                Book Your Scalp Evaluation Now <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}