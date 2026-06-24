"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import { countries, type Country } from "../data/countries";

// --- STRICT ANIMATION TUPLE ---
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

export default function FAQClient() {
  // --- FORM STATES ---
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // --- ACCORDION STATE ---
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the FAQ Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Defeats Google Chrome forced white Autofill override
  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- FAQ DATA EXTRACTED FROM SCREENSHOTS ---
  const faqs = [
    {
      id: 0,
      q: "How long should I wear a hat after a hair transplant?",
      a: "We recommend that you use the hat we gave you for 10 days after hair transplantation."
    },
    {
      id: 1,
      q: "When can I do sports after surgery?",
      a: "You should wait at least 1 month after the operation to start exercising."
    },
    {
      id: 2,
      q: "Should I wash my head every day after a hair transplant?",
      a: "After hair transplantation, you should wash your head every day for 1 month."
    },
    {
      id: 3,
      q: "When can I remove my bandage after hair transplantation?",
      a: "You need to wash your head on the second day after the operation. The bandage is removed before washing your head and does not need to be used again afterwards."
    },
    {
      id: 4,
      q: "How long do I need to use special shampoo?",
      a: "You should use the shampoo we recommend for 1 month. After you are sure of the health of your hair and scalp, you can continue to use the shampoo you always use."
    },
    {
      id: 5,
      q: "How long should I use Panthenol spray?",
      a: "You need to use it for about 15 days, until the crusts are completely removed from the skin."
    },
    {
      id: 6,
      q: "When can I have sexual intercourse after hair transplantation?",
      a: "There are no restrictions on sexual intercourse after the operation, it is recommended that you do not exert too much effort."
    },
    {
      id: 7,
      q: "Can I use a different product than the recommended ones?",
      a: "You should carefully examine the content of the products you will use and choose natural products that will not harm you and do not contain paraben."
    },
    {
      id: 8,
      q: "Can I use panthenol spray on the donor area?",
      a: "You can use it, but this will cause the spray to run out very quickly."
    },
    {
      id: 9,
      q: "Is there another product I can use instead of Panthenol spray?",
      a: "You can use Bepanthol body lotion, this product is available in all pharmacies."
    },
    {
      id: 10,
      q: "What should I do if swelling occurs?",
      a: "Swelling is normal, don't worry. You can apply ice for 10 minutes every two hours and massage your head gently. The swelling will disappear in a few days."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
      {/* --- PAGE HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-gray-50 border-b border-gray-200 px-6"
      >
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            F.A.Q.S
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT SIDE: FAQ ACCORDION */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-6">
                  Frequently Asked Questions
                </h2>
              </motion.div>

              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col gap-4">
                {faqs.map((item) => {
                  const isActive = activeIndex === item.id;
                  return (
                    <div 
                      key={item.id} 
                      className="flex flex-col w-full shadow-md transition-all duration-300 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full flex items-center justify-between px-6 py-5 md:px-8 md:py-6 bg-[#772424] text-white font-bold text-left transition-colors duration-300"
                      >
                        <span className="text-base md:text-lg pr-4">{item.q}</span>
                        <span className="text-2xl font-light leading-none shrink-0">
                          {isActive ? "−" : "+"}
                        </span>
                      </button>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="bg-gray-200 overflow-hidden"
                          >
                            <div className="px-6 py-8 md:px-8 md:py-10 text-black font-medium text-base md:text-lg leading-relaxed">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>

            </div>

            {/* RIGHT SIDE: STICKY CONSULTATION FORM */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="w-full lg:w-1/3 lg:sticky lg:top-32"
            >
              <div className="bg-[#772424] text-white rounded-3xl p-8 shadow-2xl relative w-full border border-[#8c2a2a]">
                <h3 className="text-white text-xl font-black text-center mb-8 tracking-wide">
                  GET FREE CONSULTATION
                </h3>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                      required 
                      className="w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium" 
                      style={autofillFixStyle}
                    />
                  </div>
                  
                  <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors">
                    <input 
                      type="email" 
                      placeholder="E-mail" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                      className="w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium" 
                      style={autofillFixStyle}
                    />
                  </div>

                  <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors flex items-center relative">
                    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 cursor-pointer text-sm font-bold text-[#C5A059] select-none mr-3 shrink-0">
                      <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={selectedCountry.name} className="w-5 object-contain" />
                      <span>{selectedCountry.dial}</span>
                      <span className="text-[10px]">▼</span>
                    </div>
                    
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 shadow-2xl rounded-xl z-50">
                        {countries.map((country: Country, idx: number) => (
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className="px-4 py-2.5 hover:bg-gray-100 cursor-pointer text-sm flex items-center justify-between text-black transition-colors">
                            <div className="flex items-center gap-2.5 truncate mr-2">
                              <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} className="w-5 object-contain shrink-0" />
                              <span className="font-bold">{country.code}</span>
                              <span className="text-xs text-black truncate">{country.name}</span>
                            </div>
                            <span className="text-[#772424] font-black shrink-0">{country.dial}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      required 
                      className="w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium" 
                      style={autofillFixStyle}
                    />
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <input type="checkbox" id="faqPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="faqPrivacy" className="text-xs text-white/80 cursor-pointer">
                      I have read and accept the <Link href="/privacy-policy" className="text-[#C5A059] font-black hover:underline">Privacy Policy.</Link>
                    </label>
                  </div>

                  <button type="submit" className="w-full py-4 bg-white hover:bg-gray-100 text-[#772424] font-extrabold rounded-xl transition-all tracking-wider text-sm mt-2 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]">
                    Submit <span>›</span>
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}