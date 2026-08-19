"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";

// Safely mapped to your root app data folder
import { countries, type Country } from "../data/countries";

const customEase: [number, number, number, number] = [0.2, 0.65, 0.3, 0.9];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: customEase } 
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, delay: 0.2, ease: customEase } 
  }
};

export default function FueMotorizedClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // FAQ Accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the FUE Motorized Technique Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- 10 FAQS DATA ---
  const faqList = [
    {
      q: "What is a motorized FUE hair transplant?",
      a: "Motorized FUE uses an electronic punch device to safely and rapidly extract hair follicles from the donor area. This speeds up the process and protects graft hydration compared to older manual methods."
    },
    {
      q: "Is motorized FUE better than manual FUE?",
      a: "For large sessions motorized FUE is vastly superior because it reduces the time grafts spend outside the body improving survival rates. Manual FUE is typically only practical for very small graft counts."
    },
    {
      q: "Does the motorized punch cause more scarring?",
      a: "No. When used by an experienced surgeon the motorized punch uses the same microdiameter as a manual punch leaving tiny dot marks that become virtually invisible once healed."
    },
    {
      q: "How long does an FUE procedure take?",
      a: "Depending on the graft count a motorized FUE session typically lasts between 5 and 7 hours allowing for comfortable breaks throughout the day."
    },
    {
      q: "Will I experience pain during the motorized extraction?",
      a: "The procedure is performed under local anesthesia. You will experience no pain during the extraction or implantation phases."
    },
    {
      q: "How much does an FUE transplant cost in Lahore?",
      a: "The FUE hair transplant cost in Pakistan depends on the total grafts required but it remains highly accessible compared to Western clinics offering immense value within local PKR tiers."
    },
    {
      q: "When can I wash my hair after FUE?",
      a: "Your first gentle wash is usually performed at the clinic within 24 to 48 hours after surgery. You will receive detailed instructions for safe home care."
    },
    {
      q: "How many grafts can be extracted with motorized FUE?",
      a: "A safe megasession can extract between 3000 and 5000 grafts in a single day depending on your specific donor density and scalp laxity."
    },
    {
      q: "Do the transplanted hairs look natural?",
      a: "Yes. The natural appearance comes from how the surgeon designs the hairline and angles the channel openings regardless of how the grafts were initially extracted."
    },
    {
      q: "Are the results of motorized FUE permanent?",
      a: "Yes. The extracted donor hairs are genetically resistant to the hormone that causes hair loss making your new growth permanent."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24 overflow-x-clip">
      
      {/* --- ASYMMETRIC HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-8 md:pb-12 bg-white px-4 sm:px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          {/* Breadcrumbs strictly pinned to far left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] active:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/hair-transplant" className="hover:text-[#772424] active:text-[#772424] transition-colors">Hair Transplant</Link>
            <span>/</span>
            <Link href="/hair-transplant/treatments" className="hover:text-[#772424] active:text-[#772424] transition-colors">Treatments</Link>
             <span>/</span>
            <span className="text-[#772424]">FUE Motorized Hair Transplant</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            FUE Motorized Hair Transplant Pakistan
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & HERO */}
            <div className="w-full lg:w-2/3 block">
              
              {/* Flagship Hero Visual */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/home/techniques/1.webp" 
                  alt="Surgeon performing FUE Motorized hair transplant extraction at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] group-active:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Advanced Megasession Precision, Hair Skill Clinic
                </div>
              </motion.div>

              {/* OVERVIEW SECTION */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  FUE Motorized Hair Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  An FUE motorized hair transplant is a modern hair restoration technique that uses a specialized electronic punch device to extract hair follicles from the donor area. This method allows highly efficient graft harvesting while maintaining excellent graft quality and natural looking results. Motorized FUE is a popular option for patients requiring a larger number of grafts because it offers a minimally invasive approach to hair transplantation with exceptional speed and safety.
                </p>
              </motion.div>

              {/* BENEFITS SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12">
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">Benefits of Motorized FUE</h3>
                <div className="space-y-3 ml-1 sm:ml-2">
                  {[
                    "Efficient and rapid graft extraction",
                    "Suitable for larger megasession transplants",
                    "Minimal dot scarring in the donor area",
                    "Natural looking results with high density",
                    "Faster procedure time protecting graft hydration",
                    "Comfortable hair transplant recovery time"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                      <p className="text-black text-base md:text-lg font-bold">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* RECOVERY & AFTERCARE SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">Recovery and Aftercare</h3>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424] flex flex-col gap-4">
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Following the procedure patients receive detailed aftercare instructions and prescribed medications to support healing and optimal results.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Our medical specialists will assess your scalp condition and provide personalized guidance throughout your entire recovery journey.
                  </p>
                </div>
              </motion.div>

              {/* COMPREHENSIVE GUIDE SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight">
                  Comprehensive Guide to FUE Motorized Hair Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Many people discover the FUE motorized hair transplant when they start searching for a method capable of covering large bald areas efficiently. The motorized punch often appears in clinical discussions beside promises of high graft counts fast healing and maximum density. At Hair Skill Clinic our job is to give you a clear medical explanation of what an FUE hair transplant in Pakistan can truly deliver and when it fits your specific hair loss pattern.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Motorized FUE relies on a calibrated micro punch attached to a low rotation electric handpiece. By utilizing this advanced technology our surgeons can rapidly isolate follicular groupings without generating excessive heat or friction. This protects the surrounding tissue and significantly shortens the time your grafts spend outside the scalp. Whether you are looking to restore a receding frontal line or achieve complete crown coverage motorized harvesting offers the speed and safety necessary for high volume sessions while keeping patient fatigue to an absolute minimum.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  If you are searching for the best FUE hair transplant clinic near me you deserve a medical team that balances extraction speed with strict donor preservation.
                </p>
              </motion.div>

              {/* FUE VS MANUAL SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight mb-6 border-b pb-3 border-gray-100">
                  Motorized FUE vs Manual FUE: Understanding the Difference
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Patients frequently research motorized FUE vs manual FUE to understand which extraction method protects their donor area better. Manual FUE uses a handheld punch rotated entirely by the surgeon wrist. It is extremely gentle but very slow making it impractical for covering large bald areas in a single day.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  A motorized FUE hair transplant uses an automated oscillating punch. This allows the surgeon to extract two to three times as many grafts at the same time. Speed is not just about convenience; it is a critical medical factor. Hair follicles begin to lose viability the longer they stay outside the body. By reducing extraction time motorized FUE helps ensure that grafts remain hydrated and healthy before implantation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  In experienced hands the motorized punch is just as safe as a manual punch. The risk of overharvesting only arises in unaccredited clinics where untrained technicians operate the device at incorrect speeds. At the Hair Skill Clinic every extraction is supervised and executed with strict depth control.
                </p>
              </motion.div>

              {/* CANDIDATE SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight mb-6 border-b pb-3 border-gray-100">
                  Who Is a Good Candidate for Motorized FUE?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  An FUE motorized hair transplant performs best when the goal is maximum coverage. If your concern involves advanced androgenetic alopecia where thousands of grafts are required this method fits the assignment perfectly.
                </p>
                
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">When Motorized FUE is the strongest choice</h3>
                <div className="space-y-3 ml-1 sm:ml-2 mb-6">
                  {[
                    "Advanced Norwood stages requiring megasessions",
                    "Complete crown and midscalp restorations",
                    "Patients needing 3000 to 5000 grafts in a single day",
                    "Individuals with strong thick donor areas",
                    "Patients seeking a highly efficient and faster procedure"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                      <p className="text-black text-base md:text-lg font-bold">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  For micro refinement or strictly hairline lowering methods like DHI motorized extraction may be combined with direct implantation. Matching the extraction speed to your pattern protects both your donor zone and your long term result.
                </p>
              </motion.div>

              {/* COST RANGES SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight mb-6 border-b pb-3 border-gray-100">
                  FUE Hair Transplant Cost Ranges in Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  When people search for an FUE hair transplant cost in Pakistan they often find numbers that range from surprisingly cheap to questionably high. The truth sits in the middle. Motorized FUE is highly efficient which often makes it more accessible than full DHI sessions while delivering equally stunning results.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  If you are comparing the global FUE hair transplant price you will see massive advantages here. At Hair Skill package brackets stay transparent medically driven and tailored to your case inside accessible local PKR tiers. Hair restoration in Pakistan sits significantly lower than Western calculations which allows international and local patients to access advanced megasessions without inflated pricing.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Most reputable clinical facilities offering an FUE hair transplant Lahore package provide comprehensive care. Packages at Hair Skill bundle your complete cleanroom extractions implantation cellular post op medications first clinical wash and scheduled follow up care upfront.
                </p>
              </motion.div>

              {/* TIMELINE SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight mb-6 border-b pb-3 border-gray-100">
                  The Procedure and Recovery Timeline
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Understanding the entire procedure step by step helps remove anxiety. Your journey begins with a detailed consultation to map your donor capacity. On surgery day numbing takes effect and extraction begins using the motorized punch. Grafts are stored in a chilled preservation fluid. Channels are then opened in the bald areas and the grafts are carefully implanted.
                </p>
                
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">The hair transplant recovery time is highly predictable</h3>
                <div className="space-y-4 ml-1 sm:ml-2">
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                    <p className="text-black text-base md:text-lg font-medium"><strong className="font-black">The First Week:</strong> Redness mild swelling and tiny scabs form in the donor and recipient areas. Sleeping upright helps reduce swelling.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                    <p className="text-black text-base md:text-lg font-medium"><strong className="font-black">Weeks 2 to 4:</strong> Transplanted hairs will shed. This is a normal phase of root remodeling.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                    <p className="text-black text-base md:text-lg font-medium"><strong className="font-black">Months 3 to 6:</strong> Early growth begins. Hairs start thin and gradually gain thickness.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                    <p className="text-black text-base md:text-lg font-medium"><strong className="font-black">Months 12 to 15:</strong> The final mature density settles giving you a complete natural transformation.</p>
                  </div>
                </div>
              </motion.div>

              {/* RISKS & SAFETY SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight mb-6 border-b pb-3 border-gray-100">
                  Risks, Safety, and Donor Management
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Safety depends heavily on clinical discipline. The most significant risk in motorized FUE is donor overharvesting. This happens when aggressive clinics extract too many grafts leaving the back of the head looking patchy and thin. At the Hair Skill Clinic our medical directors strictly calculate a safe extraction limit. We leave enough surrounding hair to ensure your donor area heals looking completely untouched.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  When guided by a skilled surgeon motorized FUE is exceptionally safe yielding a graft survival rate that easily matches or exceeds slower manual methods due to reduced out of body time.
                </p>
              </motion.div>

              {/* CLOSING SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight mb-6 border-b pb-3 border-gray-100">
                  Start Your Hair Restoration Journey With Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  If you want a result that looks natural feels effortless and provides maximum coverage an FUE hair transplant Lahore session can be the perfect path. At the Hair Skill Clinic your experience becomes personal structured and calm from the moment you step into our facility.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  You meet real doctors. You review your design together. You receive a personalized plan and your exact package quote in PKR based on real medical need not generic marketing. Get your free assessment today and let Hair Skill help you take the next step toward a confident natural looking result.
                </p>
              </motion.div>

              {/* SECTION: FAQS ACCORDION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  FUE Motorized Hair Transplant FAQs
                </h2>

                <div className="space-y-4">
                  {faqList.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div key={idx} className={`border border-gray-200 transition-all duration-300 ${isOpen ? "rounded-3xl bg-gray-50 shadow-md" : "rounded-2xl bg-white"}`}>
                        <button 
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="w-full text-left p-4 sm:p-6 font-black text-[#772424] text-base sm:text-lg md:text-xl flex justify-between items-center gap-4 cursor-pointer select-none"
                        >
                          <span>{faq.q}</span>
                          <span className="text-2xl font-light leading-none shrink-0">{isOpen ? "−" : "+"}</span>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden px-4 sm:px-6 pb-6"
                            >
                              <p className="text-black text-base md:text-lg font-medium pt-2 border-t border-gray-200/60 leading-relaxed">
                                {faq.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: STICKY CONSULTATION FORM */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="w-full lg:w-1/3 lg:sticky lg:top-32"
            >
              <div className="bg-[#772424] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative w-full border border-[#8c2a2a]">
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
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className="px-4 py-2.5 hover:bg-gray-100 active:bg-gray-200 cursor-pointer text-sm flex items-center justify-between text-black transition-colors">
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

                  <div className="flex items-start sm:items-center gap-2 mt-2">
                    <input type="checkbox" id="motorizedPrivacy" required defaultChecked className="w-4 h-4 mt-0.5 sm:mt-0 accent-[#C5A059] rounded cursor-pointer shrink-0" />
                    <label htmlFor="motorizedPrivacy" className="text-xs text-white/80 cursor-pointer leading-relaxed">
                      I have read and accept the <Link href="/privacy-policy" className="text-[#C5A059] font-black hover:underline active:underline">Privacy Policy.</Link>
                    </label>
                  </div>

                  <button type="submit" className="w-full py-4 bg-white hover:bg-gray-100 active:bg-gray-200 text-[#772424] font-extrabold rounded-xl transition-all tracking-wider text-sm mt-2 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98]">
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