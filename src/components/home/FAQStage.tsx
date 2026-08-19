"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQStage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqsLeft = [
    {
      id: 0,
      q: `How long should I wear a hat after a hair transplant?`,
      a: `We recommend that you use the hat we gave you for 10 days after hair transplantation.`
    },
    {
      id: 2,
      q: `When can I do sports after surgery?`,
      a: `You should wait at least 1 month after the operation to start exercising.`
    },
    {
      id: 4,
      q: `Should I wash my hair everyday after a hair transplant?`,
      a: `After hair transplantation, you should wash your hair everyday for 1 month.`
    }
  ];

  const faqsRight = [
    {
      id: 1,
      q: `When can I remove my bandage after hair transplantation?`,
      a: `You need to wash your head on the second day after the operation. The bandage is removed before washing your head and does not need to be used again afterwards.`
    },
    {
      id: 3,
      q: `How long do I need to use special shampoo?`,
      a: `You should use the shampoo we recommend for 1 month. After you are sure of the health of your hair and scalp, you can continue using the shampoo you always use.`
    },
    {
      id: 5,
      q: `How long should I use Panthenol spray?`,
      a: `You need to use it for about 15 days, until the crusts are completely removed from the skin.`
    }
  ];

  const FAQItem = ({ item }: { item: any }) => {
    const isActive = activeIndex === item.id;
    return (
      <div className={`mb-4 md:mb-6 flex flex-col w-full shadow-md ${isActive ? `rounded-[2rem] overflow-hidden` : `rounded-full`}`}>
        <button
          onClick={() => setActiveIndex(isActive ? null : item.id)}
          className={`w-full text-left px-6 py-5 md:px-8 md:py-6 font-bold text-white transition-colors duration-300 ${isActive ? `bg-[#772424] rounded-t-[2rem]` : `bg-[#772424] hover:bg-red rounded-full`}`}
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