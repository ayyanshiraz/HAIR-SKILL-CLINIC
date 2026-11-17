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

export default function MissionClient() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#772424] selection:text-white pb-24">
      
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
            <span className="text-[#772424]">Mission & Vision</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Mission & Vision
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* Top Banner Image */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeUp}
                className="w-full rounded-2xl overflow-hidden bg-[#f8f9fa] relative mb-12 shadow-lg group"
              >
                <img 
                  src="/about/2.webp" 
                  alt="Hair Skill Clinic Mission" 
                  className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-1000" 
                />
              </motion.div>

              {/* Mission Section */}
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={fadeUp}
                className="mb-14"
              >
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Our Mission at Hair Skill Clinic
                </h2>
                
                <p className="text-black text-base md:text-lg leading-relaxed mb-6 font-medium">
                  At Hair Skill Clinic, our mission is to provide our patients with reliable, innovative, and high-quality hair transplant solutions. We aim to exceed our patients expectations through personalized approaches, adhering strictly to ethical and professional values.
                </p>

                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  To ensure the best outcomes, we focus on:
                </p>

                <div className="flex flex-col gap-3 mb-6 ml-2">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-bold">Advanced Treatments:</span> By closely following technological advancements, we apply the most effective treatment methods available today.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-bold">Continuous Education:</span> We continually enhance our teams expertise through ongoing education and training.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-bold">Patient-Centric Experience:</span> Our priority is to offer a safe, comfortable, and transparent service experience with an unwavering focus on quality and patient satisfaction.
                    </p>
                  </div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium p-6 bg-gray-50 rounded-2xl border-l-4 border-[#772424]">
                  Our ultimate goal is to improve our patients quality of life and earn their trust through our dedicated medical services.
                </p>
              </motion.div>

              {/* Vision Section */}
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={fadeUp}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Our Vision for the Future
                </h2>
                
                <p className="text-black text-base md:text-lg leading-relaxed mb-6 font-medium">
                  At Hair Skill Clinic, our vision is to become the worlds leading hair transplant clinic. To achieve this, we offer innovative, high-quality healthcare services, guided by our True Philosophy, which places human health and happiness at the core of everything we do.
                </p>

                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  Our path to global leadership is built on:
                </p>

                <div className="flex flex-col gap-3 mb-6 ml-2">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-bold">Elite Medical Professionals:</span> We carefully select experienced, skilled professionals and support their continuous development and motivation.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-bold">Industry Innovation:</span> By leveraging the latest technology and innovative methods, we aim to maintain our leadership in the industry.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-bold">Total Safety:</span> We prioritize the safety of both patients and employees, ensuring a secure and comfortable treatment process.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      <span className="font-bold">Global Impact:</span> With a commitment to social responsibility, we strive to make a positive impact on society and the environment.
                    </p>
                  </div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium p-6 bg-gray-50 rounded-2xl border-l-4 border-[#C5A059]">
                  Our ultimate goal is to grow globally and be recognized as a trusted health institution worldwide, serving patients from Lahore, Karachi, and across the globe.
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