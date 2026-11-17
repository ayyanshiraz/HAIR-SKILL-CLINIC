"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import dynamic from "next/dynamic";
const ConsultationForm = dynamic(() => import("./ConsultationForm"), { ssr: false });

// Safely mapped to your root app data folder


export default function FutClient() {
 

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  return (
    <>
      {/* Lightweight Custom CSS for Animations (Zero JS Payload) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUpAnim {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRightAnim {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .css-fade-up {
          animation: fadeUpAnim 0.8s cubic-bezier(0.2, 0.65, 0.3, 0.9) forwards;
        }
        .css-slide-right {
          animation: slideInRightAnim 0.8s cubic-bezier(0.2, 0.65, 0.3, 0.9) forwards;
          animation-delay: 0.2s;
          opacity: 0; /* Stays hidden until delay finishes */
        }
      `}} />

      <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
        
        {/* --- ASYMMETRIC HEADER --- */}
        <section className="pt-28 lg:pt-36 pb-8 md:pb-12 bg-white px-4 sm:px-6 css-fade-up">
          <div className="max-w-[1300px] mx-auto relative">
            <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2 justify-start">
              <Link href="/" className="hover:text-[#772424] active:text-[#772424] transition-colors">Homepage</Link>
              <span>/</span>
              <Link href="/hair-transplant" className="hover:text-[#772424] active:text-[#772424] transition-colors">Hair Transplant</Link>
              <span>/</span>
              <Link href="/hair-transplant/treatments" className="hover:text-[#772424] active:text-[#772424] transition-colors">Treatments</Link>
              <span>/</span>
              <span className="text-[#772424]">FUT Hair Transplant</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
              FUT Hair Transplant
            </h1>
          </div>
        </section>

        {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
        <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
          <div className="max-w-[1300px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              
              {/* LEFT COLUMN: PROSE */}
              <div className="w-full lg:w-2/3 block">
                
                {/* Flagship Hero Visual */}
                <div className="css-fade-up w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                  <Image 
                    src="/home/techniques/3.webp" 
                    alt="Modern advanced minimally invasive hair restoration consultation at Hair Skill Clinic" 
                    width={1200}
                    height={750}
                    priority
                    className="w-full h-full object-cover group-hover:scale-[1.02] group-active:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                    Understanding the Strip Method and Modern Alternatives at Hair Skill Clinic
                  </div>
                </div>

                {/* OVERVIEW SECTION */}
                <div className="mb-10 flex flex-col gap-6">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                    What is FUT Follicular Unit Transplantation?
                  </h2>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    FUT, also known as the Strip Method, is a traditional hair transplant technique that dominated the surgical hair restoration industry for decades. During a FUT hair transplant, the surgeon removes a linear strip of skin directly from the back or sides of the scalp, which serves as the permanent donor area. This continuous strip of tissue is then carefully dissected under high-powered stereoscopic microscopes into individual follicular units. These meticulously extracted hair follicles are subsequently transplanted into the balding or thinning areas of the recipient scalp.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    While FUT was widely used in the past and considered the absolute gold standard for many years, the medical community recognizes it as a highly invasive surgical procedure. Because it requires a surgical scalpel, deep tissue cutting, and stitches or staples to close the wound, it naturally involves a significantly longer healing process. Furthermore, it leaves a permanent linear scar on the back of the head, which can severely limit the future hairstyle choices of the patient. Understanding the mechanics of the strip method is essential for anyone researching permanent hair loss solutions today.
                  </p>
                </div>

                {/* IMPORTANT MEDICAL NOTICE SECTION */}
                <div className="mb-14">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-4">Important Medical Notice: We Do Not Perform FUT</h2>
                  <ConsultationForm />
              </div>

            </div>
          </div>
          </div>
        </section>

      </div>
    </>
  );
}