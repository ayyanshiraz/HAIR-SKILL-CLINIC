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

export default function DayOfProcedureClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Day Of Procedure Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
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
            <span className="text-[#772424]">Day Of Procedure</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            The Day When The Transformation Starts
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* Main Evaluation Form Hero Image */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeUp}
                className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group"
              >
                <img 
                  src="/guide/day-of-hero.jpg" 
                  alt="Patient completing medical evaluation form at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Patient Forms, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Intro Paragraphs */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  <span className="font-bold underline decoration-[#C5A059]">Day Of Procedure</span>; Eventually, the big day when the transformation starts to come. It is so common that you have recurring questions on your mind, such as what should I do on the day of hair transplantation? How to prepare for my hair surgery on the day of the procedure?
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  There is no need to worry because this guide provides all the necessary information that the patients consider to experience a smooth and successful operation.
                </p>
              </motion.div>

              {/* Section: Where to Stay */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Where to Stay During My Experience in Hair Skill Clinic?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Since the ultimate comfort of the patients is the priority, Hair Skill patients will be assisted by the authorities from the beginning of the <span className="font-bold underline decoration-[#772424]">hair transplantation</span> process to the end, which is known as Hair Skill Gentle Care in Hair Skill Clinic.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Your accommodation will be arranged in a 4-5 stars hotel by the operation team of Hair Skill.
                </p>
              </motion.div>

              {/* Section: How to Get to Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  How to Get to Hair Skill Clinic on the Day of the procedure?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Our patients transportation is going to be provided by Hair Skill. The shuttle will pick you up to drive to the clinic on the day of your <span className="font-bold underline decoration-[#C5A059]">hair transplant</span> surgery. So you do not need to worry about transportation.
                </p>
              </motion.div>

              {/* Section: Interpreter */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Do I Have an Interpreter in the Clinic?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Because health tourism is very advanced, we provide our patients with interpreters qualified in the language that you speak! At Hair Skill, we do not have a language barrier.
                </p>
              </motion.div>

              {/* Section: Will I Be Informed */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Will I Be Informed about the Whole Process of Hair Transplant on the Day of the Procedure?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Hair Skill Guest Relations Specialists will be with you all the way long, as well as your case manager. So, you will be informed about the whole process, pre-op and post-op procedures. You will be advised on what is best for you. If you have any questions, please do not hesitate to ask your patient experience specialist and case manager.
                </p>
              </motion.div>

              {/* Section: Prepared for Operation */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  How Do We Get You Prepared for Operation?
                </h2>

                <div className="flex flex-col gap-4 ml-2">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      First, our doctors give general information about the surgery on the procedure day.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      Consent documents will be handed out to be read carefully and signed by the patients.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      Before the surgery, your before hair transplantation photos will be taken by Hair Skill photographers.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      Blood tests (HIV, HBV, HCV) will be carried out, and your vital signs (BP, Temperature, Pulse, etc.) checked before the hair transplant.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Operation Time */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  How Long Does the Operation Take?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The operation takes 6-8 hours. So, please have your breakfast before the procedure. Do not worry about getting bored during your surgery; our rooms have smart television with an internet connection. So if you like, we can put on good music or movies.
                </p>
              </motion.div>

              {/* Section: Steps of Surgery */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight">
                  What are the Steps of Surgery?
                </h3>

                <div className="flex flex-col gap-4 ml-2">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      One of the most critical steps of your surgery is the planning process. Hair Skill doctors plan your surgery to give you the best outcomes and desired appearance.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      The patients donor area quality, density, and size are evaluated.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      Hair Skill doctors guide and advise regarding the hairline and draw the hairline for you. You can discuss your ideas about your hairline with your doctor.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      The operation starts with the extraction of hair follicles from your donor area. After extraction, channels will be opened by your doctor, and it continues with implantation.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Lunch */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  What about Lunch?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Hair Skill Clinic orders your lunch according to your preference. So if you are a vegetarian or prefer kosher/halal food, do not worry; we will take care of it.
                </p>
              </motion.div>

              {/* Section: The Next Day */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-6 pt-6 border-t border-gray-100">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  The Next Day After the Operation
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Our patients will be expected to visit Hair Skill Clinic the next day after the operation. We will do the wound care, check the recipient and donor area for any signs of infection or inflammation and change bandages at the clinic the next day after the surgery. We will do the first wash if your surgery was two days ago.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Sometimes if the patient had more bleeding or discharge than usual we can perform the first wash the next day after the surgery.
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
                    <input type="checkbox" id="dayOfPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="dayOfPrivacy" className="text-xs text-white/80 cursor-pointer">
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