"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PatientGuideStage() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: `Before the Process`,
      circleColor: `bg-[#4A0E0E]`,
      ringColor: `border-[#4A0E0E]`,
      icon: `/home/guide/1.webp`,
      position: `bottom`,
      description: `Understanding what to consider before having a hair transplant procedure is a highly important question in the minds of many candidates. For individuals who have not had this specific medical experience before, the unknown may cause some anxiety, which is completely natural. As a top hair transplant clinic in Lahore, we have prepared a fully comprehensive and detailed patient guide to ensure you feel perfectly safe. Being fully informed about all clinical processes allows you to comfortably and consciously prepare for your successful operation day.`
    },
    {
      id: 2,
      title: `Operation Day`,
      circleColor: `bg-[#772424]`,
      ringColor: `border-[#772424]`,
      icon: `/home/guide/2.webp`,
      position: `top`,
      description: `The day of the operation is one of the most important steps of your hair transplantation process. When you come to our clinic, our team will greet you and make the necessary preparations before the operation. Your comfort is at the forefront during the procedure and our team will guide you. The stages of the operation and all the details to be considered are included in the guide specially presented to you. Our team will continue to support you throughout the process.`
    },
    {
      id: 3,
      title: `After Operation`,
      circleColor: `bg-[#B93232]`,
      ringColor: `border-[#B93232]`,
      icon: `/home/guide/3.webp`,
      position: `bottom`,
      description: `Your post-operative recovery process begins and there are some basic points you need to pay attention to during this process. You can manage the process in the healthiest way by following your doctors recommendations from the first days. Remember that hair transplantation is a natural recovery process and be patient. All the details you need to pay attention to during this period are included in our post-operative guide prepared specifically for you. Our team will continue to support you whenever you need it.`
    }
  ];

  return (
    <div className={`w-full bg-white py-12 md:py-24 relative z-20`}>
      <div className={`max-w-[1200px] mx-auto px-6 sm:px-8 relative`}>

        <div className={`text-center mb-16 md:mb-40`}>
          <span className={`text-[#772424] font-bold text-sm md:text-base tracking-wide block mb-3`}>
            Real Transformation
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-[56px] font-black text-[#772424] tracking-tight`}>
            Patient Guide
          </h2>
        </div>

        <div className={`hidden md:flex items-center w-full max-w-5xl mx-auto relative mb-64`}>
          <div className={`w-3.5 h-3.5 rounded-full bg-[#1a202c] shrink-0`} />

          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <React.Fragment key={step.id}>
                <div className={`flex-1 h-[3px] bg-[#1a202c]`} />
                <div
                  onClick={() => setActiveStep(index)}
                  className={`relative flex flex-col items-center shrink-0 cursor-pointer group`}
                >
                  {step.position === `top` && (
                    <div className={`absolute bottom-[100%] mb-8 flex flex-col items-center w-[250px] transition-transform duration-300 md:group-hover:-translate-y-2`}>
                      <Image src={step.icon} alt={step.title} width={80} height={80} className={`h-16 lg:h-20 w-auto object-contain mb-4`} />
                      <span className={`text-[#772424] font-extrabold text-lg lg:text-xl text-center`}>{step.title}</span>
                    </div>
                  )}

                  <div className={`relative flex items-center justify-center w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]`}>
                    <div className={`absolute inset-[-8px] rounded-full transition-all duration-300 ${isActive ? `border-[3px] ${step.ringColor} scale-100` : `border-0 opacity-0 scale-90`}`} />
                    <div className={`absolute inset-0 rounded-full flex items-center justify-center text-white text-4xl lg:text-5xl font-black ${step.circleColor} transition-transform duration-300 ${isActive ? `scale-100` : `scale-95 md:group-hover:scale-90`} z-10`}>
                      {step.id}
                    </div>
                  </div>

                  {step.position === `bottom` && (
                    <div className={`absolute top-[100%] mt-8 flex flex-col items-center w-[250px] transition-transform duration-300 md:group-hover:translate-y-2`}>
                      <Image src={step.icon} alt={step.title} width={80} height={80} className={`h-16 lg:h-20 w-auto object-contain mb-4`} />
                      <span className={`text-[#772424] font-extrabold text-lg lg:text-xl text-center`}>{step.title}</span>
                    </div>
                  )}
                </div>
                <div className={`flex-1 h-[3px] bg-[#1a202c]`} />
                <div className={`w-3.5 h-3.5 rounded-full bg-[#1a202c] shrink-0`} />
              </React.Fragment>
            );
          })}
        </div>

        <div className={`flex flex-col gap-12 relative z-10 md:hidden mb-16`}>
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div key={step.id} onClick={() => setActiveStep(index)} className={`flex flex-col items-center cursor-pointer group`}>
                <Image src={step.icon} alt={step.title} width={80} height={80} className={`h-16 w-auto object-contain mb-4`} />
                <span className={`text-[#772424] font-extrabold text-xl text-center mb-4`}>{step.title}</span>
                <div className={`relative flex items-center justify-center w-[80px] h-[80px]`}>
                  <div className={`absolute inset-[-6px] rounded-full transition-all duration-300 ${isActive ? `border-[3px] ${step.ringColor} scale-100` : `border-0 opacity-0 scale-90`}`} />
                  <div className={`absolute inset-0 rounded-full flex items-center justify-center text-white text-4xl font-black ${step.circleColor} transition-transform duration-300 ${isActive ? `scale-100` : `scale-95 group-hover:scale-90`} z-10`}>
                    {step.id}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`max-w-4xl mx-auto min-h-[150px] flex items-center justify-center text-center px-4`}>
          <AnimatePresence mode={`wait`}>
            <motion.p
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: `easeOut` }}
              className={`text-gray-700 text-base md:text-lg leading-relaxed`}
            >
              {steps[activeStep].description}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}