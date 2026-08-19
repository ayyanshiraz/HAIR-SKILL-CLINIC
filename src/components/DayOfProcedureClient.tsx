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
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24 overflow-x-clip">
      
      {/* --- PAGE HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-gray-50 border-b border-gray-200 px-6"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2 flex-wrap">
            <Link href="/" className="md:hover:text-[#772424] active:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/patient-guide" className="md:hover:text-[#772424] active:text-[#772424] transition-colors">Patient Guide</Link>
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
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            
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
                  src="/patient-guide/6.webp" 
                  alt="Patient completing medical evaluation form at Hair Skill Clinic" 
                  className="w-full h-full object-cover md:group-hover:scale-[1.02] group-active:scale-[1.02] transition-transform duration-1000 opacity-95" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Patient Forms, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Intro Paragraphs */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  <span className="font-bold underline decoration-[#C5A059]">Day of Procedure</span>: Eventually, the big day when the transformation starts to come. It is so common that you have recurring questions on your mind, such as what should I do on the day of hair transplantation and how do I prepare for my hair surgery on the day of the procedure. Many patients actively search for the exact hair transplant procedure step by step to understand what happens inside the operating theater.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  There is absolutely no need to worry because this comprehensive guide provides all the necessary information that patients must consider to experience a smooth, painless, and highly successful operation. Whether you are searching for a safe hair transplant near me or traveling from other cities, we ensure your safety and comfort at every single step.
                </p>
              </motion.div>

              {/* Section: Where to Stay */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Where to Stay During My Experience at the Hair Skill Clinic?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Since the ultimate comfort of the patients is our absolute priority, Hair Skill patients will be fully assisted by the professional authorities from the very beginning of the hair transplant process to the very end. This premium level of medical hospitality is widely known as Hair Skill Gentle Care.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If you are traveling for your hair transplant procedure in Pakistan from cities like Lahore, Karachi, Multan, or Rawalpindi, your accommodation will be seamlessly arranged in a luxury hotel by the dedicated operation team of Hair Skill. We ensure you get proper rest before your surgical day begins.
                </p>
              </motion.div>

              {/* Section: How to Get to Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  How to Get to Hair Skill Clinic on the Day of the Procedure?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Our patient transportation is going to be safely provided by Hair Skill. A comfortable private shuttle will pick you up directly from your hotel to drive you to the clinic on the morning of your surgery. So you do not need to worry about transportation, navigating local traffic, or finding parking near the facility.
                </p>
              </motion.div>

              {/* Section: Interpreter */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Do I Have an Interpreter in the Clinic?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Because international health tourism is very advanced in our clinic, we provide our patients with dedicated interpreters who are fully qualified in the exact language that you speak! At Hair Skill, we do not have a language barrier, ensuring you can communicate your aesthetic goals clearly to your surgical team.
                </p>
              </motion.div>

              {/* Section: Will I Be Informed */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Will I Be Informed About the Whole Hair Transplant Process?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Hair Skill Guest Relations Specialists will be with you all the way, as well as your personal case manager. So, you will be deeply informed about the whole process, including pre op preparation and post op recovery procedures. You will be medically advised on what is best for your specific scalp condition. If you have any medical questions, please do not hesitate to ask your patient experience specialist and your assigned case manager.
                </p>
              </motion.div>

              {/* Section: Prepared for Operation */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  How Do We Get You Prepared for Operation?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The preparation for the FUE hair transplant procedure is highly systematic to ensure zero complications.
                </p>
                
                <div className="flex flex-col gap-4 ml-2">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      First, our certified doctors give detailed general information about the surgery on the procedure day.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      Medical consent documents will be handed out to be read carefully and signed by the patients.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      Before the surgery begins, your pre hair transplantation photos will be professionally taken by Hair Skill photographers for your medical file.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      Strict blood tests including HIV, HBV, and HCV will be carried out immediately.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      Your vital signs such as blood pressure, body temperature, and pulse rate will be checked continuously before the hair transplant starts to ensure you are fit for local anesthesia.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Operation Duration */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Hair Transplant Duration: How Long Does It Take?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Patients frequently ask how long a hair transplant procedure takes. The complete operation usually takes 6 to 8 hours depending on the number of grafts required. So, please have a healthy breakfast before the procedure begins. Do not worry about getting bored during your surgery duration; our VIP patient rooms have modern smart televisions with a high speed internet connection. So if you like, we can put on good music, movies, or documentaries to keep you relaxed.
                </p>
              </motion.div>

              {/* Section: Steps of Surgery */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight">
                  What are the steps of surgery?
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Understanding the hair transplant steps can significantly reduce your anxiety. One of the most critical steps of your surgery is the aesthetic planning process.
                </p>

                <div className="flex flex-col gap-4 ml-2">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      Hair Skill doctors strategically plan your surgery to give you the best medical outcomes and your desired natural appearance.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      The patients donor area quality, hair density, and extraction size are thoroughly evaluated under bright medical lights.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      Hair skill doctors guide and gently advise regarding the front hairline and physically draw the hairline for you using a medical marker. You can actively discuss your styling ideas about your hairline with your doctor before any extraction begins.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      The physical operation starts with the safe extraction of hair follicles from your donor area located at the back of your head.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      After the extraction phase is complete, tiny microscopic channels will be opened by your doctor in the bald areas.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium">
                      The procedure finally continues with the careful implantation of each hair graft into the newly opened channels at the perfect angle.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Lunch */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  What about lunch?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Hair Skill Clinic orders your lunch exactly according to your dietary preference. So if you are a strict vegetarian or prefer specialized halal or kosher food, do not worry; our hospitality staff will take care of it and serve you a fresh meal during your surgical break.
                </p>
              </motion.div>

              {/* Section: The Next Day */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-6 pt-6 border-t border-gray-100">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  The Next Day After the Operation
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Our patients will be expected to visit Hair Skill Clinic the next day after the operation. We will do the professional wound care, carefully check the recipient and donor area for any early signs of infection or inflammation, and change your medical bandages at the clinic. We will also perform the first medical wash if your surgery was completed two days ago. Sometimes, if the patient has more bleeding or fluid discharge than usual, our clinical nurses can perform the first wash the very next day after the surgery.
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
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className="px-4 py-2.5 md:hover:bg-gray-100 active:bg-gray-100 cursor-pointer text-sm flex items-center justify-between text-black transition-colors">
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
                      I have read and accept the <Link href="/privacy-policy" className="text-[#C5A059] font-black md:hover:underline active:underline">Privacy Policy.</Link>
                    </label>
                  </div>

                  <button type="submit" className="w-full py-4 bg-white md:hover:bg-gray-100 active:bg-gray-100 text-[#772424] font-extrabold rounded-xl transition-all tracking-wider text-sm mt-2 flex items-center justify-center gap-2 shadow-lg md:hover:scale-[1.02] active:scale-[0.99]">
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