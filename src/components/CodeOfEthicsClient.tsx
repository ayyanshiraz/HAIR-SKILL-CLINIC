"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const ConsultationForm = dynamic(() => import("./ConsultationForm"), { ssr: false });

// --- STRICT ANIMATION Bezier Tuple ---
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

export default function CodeOfEthicsClient() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
      {/* --- PAGE HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-gray-50 border-b border-gray-200 px-6"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-[#772424] transition-colors">About</Link>
            <span>/</span>
            <span className="text-[#772424]">Code of Ethics</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Code of Ethics
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* Top Banner */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeUp}
                className="w-full rounded-2xl overflow-hidden bg-[#f8f9fa] relative mb-12 shadow-lg group"
              >
                <img 
                  src="/about/1.webp" 
                  alt="Hair Skill Clinic Building and Ethics" 
                  className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-1000" 
                />
              </motion.div>

              {/* Ethical Approach Section */}
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={fadeUp}
                className="mb-14"
              >
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Our Ethical Approach at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At Hair Skill Clinic, we place honesty, transparency, patient safety, confidentiality, and respect for human rights at the core of everything we do. As a trusted hair transplant clinic in Pakistan, achieving aesthetic excellence is just as important to us as ensuring that our patients feel safe, valued, and supported throughout their entire journey.
                </p>
              </motion.div>

              {/* Core Ethical Principles */}
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={fadeUp}
                className="mb-14"
              >
                <h3 className="text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Core Ethical Principles
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-6 font-medium">
                  To maintain our status as a provider of reliable hair restoration services, we strictly adhere to the following principles:
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-black text-[#772424]">Clear and Honest Communication:</span> We adopt a transparent hair transplant process in all communications, avoiding misleading or exaggerated claims.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-black text-[#772424]">Uncompromising Patient Safety:</span> Patient safety and privacy are paramount in every decision we make. We unconditionally respect our patients right to information, informed consent, and confidentiality.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-black text-[#772424]">Cultural and Religious Respect:</span> In delivering our services, we are mindful of cultural and religious sensitivities, treating every individual with fairness and equality.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-black text-[#772424]">Strict Data Protection:</span> We strictly safeguard personal and medical data, ensuring secure medical tourism Pakistan standards. Data is only accessible to authorized personnel and protected through robust technical and administrative security measures.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Professionalism Section */}
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={fadeUp}
                className="mb-14"
              >
                <h3 className="text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Professionalism and Workplace Ethics
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Professionalism is part of our institutional culture. Whether you visit us for a trusted hair transplant in Lahore or a safe hair transplant in Karachi, our medical team upholds a respectful and attentive approach in all interactions. We support the continuous development of our staff and are committed to principles of equality, safety, and justice in our workplace. We maintain a zero tolerance policy against harassment, mobbing, and discrimination.
                </p>
              </motion.div>

              {/* Integrity Section */}
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={fadeUp}
                className="mb-14"
              >
                <h3 className="text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Integrity and Accountability
                </h3>
                <div className="flex flex-col gap-4 ml-2">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-bold">Conflict of Interest:</span> All responsibilities and authorities are exercised within an ethical framework. We avoid conflicts of interest and refrain from seeking personal gain.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-bold">Institutional Boundaries:</span> We strictly adhere to defined institutional boundaries in matters of gifts, discounts, or privileges.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-bold">Political Neutrality:</span> In line with our principle of political neutrality, we do not allow any political views or activities to influence our operations. Our decisions are based solely on the best interests of the patient.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-bold">Fair Dealings:</span> In all interactions, especially with our suppliers, partners, and competitors, we act with absolute transparency, fairness, and integrity.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Internal Responsibility Section */}
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={fadeUp}
                className="mb-6"
              >
                <h3 className="text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Internal Responsibility and Continuous Care
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-6 font-medium">
                  Building open and trust based communication with our patients and supporting them at every stage of their journey is our highest priority. We also take internal ethical responsibility seriously by providing a system through which all employees can report any ethical violations without hesitation. Confidentiality is a fundamental principle of this process, and all reports are protected against any form of discrimination or retaliation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium p-6 bg-gray-50 rounded-2xl border-l-4 border-[#C5A059]">
                  At Hair Skill Clinic, we are committed to doing what is right under all circumstances, upholding our ethical values with determination, and providing our patients with the best hair clinic patient care at all times.
                </p>
              </motion.div>

            </div>

            {/* RIGHT SIDE: STICKY CONSULTATION FORM */}
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