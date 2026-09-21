"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQStage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  
  const faqsLeft = [
    {
      id: 0,
      q: `How long should I wear a head cover after the procedure?`,
      a: `We recommend wearing the provided protective cap for 10 days following your restoration session to ensure safe healing.`
    },
    {
      id: 2,
      q: `When is it safe to resume sports and physical activity?`,
      a: `Patients must wait at least one month post-surgery before engaging in heavy workouts or strenuous exercises.`
    },
    {
      id: 4,
      q: `Is daily washing required during the recovery phase?`,
      a: `Yes, you must carefully wash the treated area every day for the first month to maintain optimal scalp hygiene.`
    }
  ];

  const faqsRight = [
    {
      id: 1,
      q: `When will the medical bandage be removed?`,
      a: `Your initial wash takes place on the second day of recovery. At this time, the dressing is taken off and will not be needed again.`
    },
    {
      id: 3,
      q: `How long must I use the specialized clinic shampoo?`,
      a: `Please utilize the recommended medical wash for one full month. Once the follicles are fully secure, you may return to your regular routine.`
    },
    {
      id: 5,
      q: `What is the duration for applying Panthenol spray?`,
      a: `Continue applying the spray for approximately 15 days, or until all post-surgical crusts have naturally cleared from the scalp.`
    }
  ];

  const FAQItem = ({ item }: { item: any }) => {
    const isActive = activeIndex === item.id;
    return (
      <div className={`mb-4 md:mb-6 flex flex-col w-full shadow-md ${isActive ? `rounded-[2rem] overflow-hidden` : `rounded-full`}`}>
        <button
          onClick={() => setActiveIndex(isActive ? null : item.id)}
          className={`w-full text-left px-6 py-5 md:px-8 md:py-6 font-bold text-white transition-colors duration-300 ${isActive ? `bg-[#772424] rounded-t-[2rem]` : `bg-[#772424] hover:bg-red-700 rounded-full`}`}
        >
          {item.q}
        </button>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: `auto`, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`bg-[#d1d5db] overflow-hidden`}
            >
              <div className={`px-6 py-5 md:px-8 md:py-6 text-gray-800 font-medium text-sm md:text-base leading-relaxed`}>
                {item.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className={`w-full bg-[#f8f9fa] py-24 relative z-20`}>
      <div className={`max-w-[1200px] mx-auto px-6 sm:px-8 relative`}>
        <div className={`text-center mb-16`}>
          <span className={`text-[#772424] font-bold text-sm md:text-base tracking-wide block mb-3 uppercase`}>
            Hair Skill Clinic
          </span>
          <h2 className={`text-4xl md:text-5xl font-black text-black tracking-tight`}>
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className={`flex flex-col lg:flex-row gap-4 md:gap-8`}>
          <div className={`w-full lg:w-1/2 flex flex-col`}>
            {faqsLeft.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>
          <div className={`w-full lg:w-1/2 flex flex-col`}>
            {faqsRight.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}