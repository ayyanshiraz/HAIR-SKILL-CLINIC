"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
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

export default function BeforeProcedureClient() {
  // --- FORM STATES ---
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Before Procedure Guide.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Defeats Google Chrome forced white Autofill override
  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
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
        <div className="max-w-[1200px] mx-auto">
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/patient-guide" className="hover:text-[#772424] transition-colors">Patient Guide</Link>
            <span>/</span>
            <span className="text-[#772424]">What Should I Do Before Hair Transplant</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            What Should I Do Before Hair Transplant Procedure?
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* Main Scalp Marking Hero Image */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeUp}
                className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group"
              >
                <img 
                  src="/guide/before-hero.jpg" 
                  alt="Surgeon marking patients hairline before hair transplant procedure" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Intro Paragraphs */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  <span className="font-bold underline decoration-[#C5A059]">Before Procedure</span>; If you are the one who is thinking about undergoing a hair transplant surgery, it is so usual to linger on some thoughts such as what should I do before a hair transplant? What should I know before hair transplant? How to prepare for my forthcoming hair transplant?
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  It is normal to feel nervous if you have never experienced hair transplantation before. Therefore, the role of consultation and information is so essential for the patients psychological readiness.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Before Procedure Guide will prepare you for your hair transplant. In that way, you will be informed about all the processes you will be going through. Knowing the process makes you feel relaxed; it leads patients to an easy and smooth operation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The before hair transplant procedure is simple. That is why, if you pay attention carefully, there is nothing to be worried about your forthcoming procedure.
                </p>

                {/* Video Embed Cover Box */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border border-gray-200 my-4 bg-gray-900">
                  <img 
                    src="/guide/youtube-before-cover.jpg" 
                    alt="Dr Mehmet Erdogan Before Operation FAQ Video" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#772424] rounded-full flex items-center justify-center shadow-[#772424] group-hover:scale-110 transition-all duration-300">
                      <svg className="w-10 h-10 text-white fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                    <span className="text-white font-bold text-lg md:text-xl max-w-lg drop-shadow-md">Hair Transplant FAQs | Before Operation | Dr. Mehmet Erdogan</span>
                  </div>
                </div>
              </motion.div>

              {/* Master Header H2 */}
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-black text-[#772424] mb-10 tracking-tight border-b pb-4 border-gray-100">
                Before Hair Transplant Procedure
              </motion.h2>

              {/* --- 13 BULLETS CONTENT SECTION --- */}
              <div className="flex flex-col gap-12">
                
                {/* 1 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Choose a Professional Clinic</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    Finding a good clinic for your hair transplant surgery is the first important thing you should pay attention to.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Therefore, you must research the best clinics to get the best treatment.
                  </p>
                </motion.div>

                {/* 2 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Stalk the Social Media of the Clinic</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    It would be better to find clinics social media accounts that generally demonstrate their patients and experiences or websites to have the necessary information about the clinic; it will be helpful to look at before after photos of patients and comments below the pictures.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    You can go to the Hair Skill website or Instagram account to learn about Hair Skill in general, our doctors; you can also read our blogs and see the before after photos of our patients!
                  </p>
                </motion.div>

                {/* 3 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Search About the Doctors of the Clinic</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    Researching about the doctor and going over CVs will assist you in making up your decision of the clinic where you are going to have your hair transplantation.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Always remember that a trustworthy clinic will considerably assist in having professional treatment, instruction, effective communication with physicians and the best possible outcome at the end.
                  </p>
                </motion.div>

                {/* 4 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Should I Cut My Hair Before the Procedure?</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Shaving your hair may not be a good idea depending on the hair transplant technique performed for you. So do not cut your hair before the procedure. We want to keep your hair long for the planning before the surgery to see and mark the areas that need a surgical correction. You can keep your hair 1-2 inches long. After the planning, we will have your hair cut at the clinic.
                  </p>
                </motion.div>

                {/* 5 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Should I Have Breakfast Before the Procedure?</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    Definitely yes! You can have breakfast but avoid a greasy and heavy breakfast. A light breakfast will be okay for you.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Remember to inform our clinic about your food preferences for lunch (vegetarian, kosher, etc.), so we get your meal type.
                  </p>
                </motion.div>

                {/* 6 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Inform Your Doctor about your Health and Medications You Take</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Inform your doctor about the medicines you are taking and your health condition. We must know these details because they may affect your surgery. Therefore, you must inform your doctor if you suffer from allergies, bleeding disorders, asthma, high blood pressure, breathing problems, diabetes, psoriasis, or any chronic diseases.
                  </p>
                </motion.div>

                {/* 7 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Inform your doctor about the Allergies You Have</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    If you have allergies to any medications, please inform your doctor about them. It has importance because you will need to take some medicines after your operation. Your doctor will prescribe different pills if you have an allergy to any medication.
                  </p>
                </motion.div>

                {/* 8 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Inform Your Doctor About Surgeries You Have Had Before</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Information about your previous surgeries is another aspect of your hair transplantation process. It gives your doctor an idea about the healing of the skin, scar formation level, and how you reacted to anesthesia in general.
                  </p>
                </motion.div>

                {/* 9 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Some Medicines You Should Stop Taking One Week Before the Procedure</h3>
                  </div>
                  
                  <ol className="list-decimal ml-6 font-bold text-black text-base md:text-lg my-4 space-y-1">
                    <li>Aspirin</li>
                    <li>Anti-inflammatory medications</li>
                    <li>B or E vitamins</li>
                    <li>Blood Thinners</li>
                    <li>Ibuprofen</li>
                    <li>Herbal medication</li>
                  </ol>

                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    These are some medicines you should stop taking one week before your hair treatment to prevent increased bleeding.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    Please inform your surgeon before scheduling the surgery if you use any other medications not mentioned in the list.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    If you are using Finasteride or Propecia, you do not need to stop taking them. However, Minoxidil or Rogaine should be avoided one week before surgery and resumed two weeks later. In addition, before taking any prescribed medications before the hair transplantation, consult your doctor.
                  </p>
                </motion.div>

                {/* 10 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">No, You Cant Drink Alcohol</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Since Alcohol may interfere with the anesthetic medications used during the surgery and increase bleeding and bruising, please stop taking Alcohol 5-7 days before the surgery and avoid it for 10-14 days after the surgery.
                  </p>
                </motion.div>

                {/* 11 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">No, You Cant Smoke</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Since cigarettes include nicotine, which can constrict blood vessels and reduce blood flow to the scalp, nicotine consumption impacts your operation process and healing phase. It is more difficult for the body to recover after an incision if you smoke because nicotine prevents oxygen from getting through your blood. Therefore, it should be avoided.
                  </p>
                </motion.div>

                {/* 12 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Do not Apply Hair Care Oils, Hair Gels, and Other Similar Products</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    Hair Care oils and similar products such as gels and creams should not be used before the procedure.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    It is also better not to wear a hat before your operation to prevent any microbial growth due to warmth or sweat and prepare your donor and recipient area.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    It is more difficult for the body to recover after an incision if you smoke because nicotine prevents oxygen from getting through your blood.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    If you are dealing with dandruff, it is better to consult your doctor. Your doctor can advise you on the appropriate product.
                  </p>
                </motion.div>

                {/* 13 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Put Something on You are Comfortable With</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Before your hair transplantation surgery, wear comfortable clothes. Clothes with zippers or buttons are advised because your scalp should not be damaged after the treatment. So pay attention to putting something on that you will be comfortable with!
                  </p>
                </motion.div>

              </div>

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
                    <input type="checkbox" id="beforePrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="beforePrivacy" className="text-xs text-white/80 cursor-pointer">
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