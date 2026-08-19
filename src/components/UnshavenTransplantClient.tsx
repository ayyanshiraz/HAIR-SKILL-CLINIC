"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
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

export default function UnshavenTransplantClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Unshaven Transplant Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24 overflow-x-clip">
      
      {/* --- ASYMMETRIC HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-white px-4 sm:px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          {/* Breadcrumbs strictly pinned to far left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/hair-transplant" className="hover:text-[#772424] transition-colors">Hair Transplant</Link>
            <span>/</span>
            <Link href="/hair-transplant/techniques" className="hover:text-[#772424] active:text-[#772424] transition-colors">Techniques</Link>
             <span>/</span>
            <span className="text-[#772424]">Unshaven Transplant</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Unshaven Transplant
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch lg:items-start w-full">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* Main Reference Split Hero Visual (Patient in Orange Shirt) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/home/techniques/7.webp" 
                  alt="Split comparison of patient in orange shirt showing native forward styling versus un-shaved top recipient bed" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-top" 
                />
              </motion.div>

              {/* Lead Introduction */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  For many professionals and public figures the hardest part of a hair transplant is not the surgery itself. It is the mandatory head shave. If you are searching for an unshaven hair transplant in Pakistan you already know why avoiding the razor matters. You want to restore your density without announcing it to the world. A completely shaved head requires weeks of hiding under caps or taking long leaves from work. With an unshaven hair transplant you can keep your existing hair exactly as it is.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At Hair Skill Clinic we specialize in discreet hair restoration. Our unshaven FUE technique allows you to walk in for your procedure and walk out with your current hairstyle intact. It is the perfect solution for anyone searching for an unshaven hair transplant near me in Lahore Karachi or Islamabad who needs to return to normal life immediately.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  The goal is absolute privacy. Your colleagues friends and clients will never know you had a procedure done unless you decide to tell them.
                </p>

                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mt-4 tracking-tight border-b pb-3 border-gray-100">
                  What Is an Unshaven Hair Transplant?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  An unshaven hair transplant also known as U FUE or DHI without shaving is an advanced technique where your surgeon extracts and implants follicles without shaving your recipient or main donor areas. Instead of a zero trim the surgical team carefully works between your existing hair strands.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  In a classic FUE the entire scalp is shaved to give the surgeon maximum visibility and speed. In an unshaven session the process is much slower and requires significantly more precision. Your doctor must extract individual follicles by navigating through long hair and then implant them delicately so the existing surrounding hairs remain undisturbed.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  This approach requires an elite level of skill which is why finding an expert surgeon is critical. Hair Skill Clinic focuses entirely on surgeon led execution to ensure your native hair is protected while the new grafts are placed perfectly.
                </p>
              </motion.div>

              {/* Section: Who Is a Good Candidate */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Who Is a Good Candidate for Unshaven FUE?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Not every patient is a fit for a completely unshaven procedure. Because the technique is highly detailed it works best for specific types of hair loss. You are likely an excellent candidate if you need the following:
                </p>
                
                <div className="space-y-2 ml-2 mb-6">
                  {[
                    "hairline lowering or temple restoration",
                    "mild to moderate density improvement",
                    "correction of small patchy areas",
                    "scar concealment from previous surgeries"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  If you have advanced hair loss requiring thousands of grafts a fully unshaven session might not be practical. However our surgeons often use a partial shave or hidden donor approach for larger cases. Patients traveling from Islamabad Multan or Rawalpindi often choose Hair Skill because our doctors provide honest assessments about whether an unshaven approach will yield the best density for their specific pattern.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Expectations play a huge role. An unshaven session limits the total number of grafts that can be safely moved in one day. If your priority is absolute secrecy over maximum graft volume this is the right path for you.
                </p>
              </motion.div>

              {/* Section: Key Benefits */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Key Benefits of an Unshaven Hair Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  The biggest advantage is complete privacy but the benefits extend beyond just keeping your hair long.
                </p>

                <div className="space-y-4 ml-2 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">Zero awkward transition phases with a fully shaved head</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">Immediate return to work meetings and social events</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">Existing hair easily conceals the newly implanted grafts and tiny donor marks</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">Faster visual recovery since you do not have to wait for your entire head of hair to grow back</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">High precision placement that respects your natural hair angle and flow</p>
                  </div>
                </div>
                
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  For business leaders public facing professionals and women an unshaven hair transplant is a game changer. It removes the social stigma and downtime associated with traditional hair restoration.
                </p>
              </motion.div>

              {/* Section: How Procedure Works */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  How the Unshaven Procedure Works at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  An unshaven hair transplant demands extreme focus. Here is how our clinical team ensures a flawless discreet outcome.
                </p>

                <div className="space-y-6 ml-2">
                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">Detailed Donor Management</h4>
                    <p className="text-black font-medium text-base leading-relaxed">Instead of a buzz cut your doctor either trims only microscopic hairs meant for extraction or hides the extraction sites beneath long layers of hair at the back of your head. Once your long hair falls naturally over the donor zone the tiny extraction points become completely invisible.</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">Precise Implantation</h4>
                    <p className="text-black font-medium text-base leading-relaxed">For the recipient area we frequently combine the unshaven approach with DHI implanter pens. This allows the surgeon to bypass standard channel creation and place the follicle directly between your native hairs without damaging their roots.</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">Pacing and Clinical Care</h4>
                    <p className="text-black font-medium text-base leading-relaxed">Because the surgeon is working through a forest of existing hair these sessions take longer. A typical unshaven procedure requires immense patience and is usually limited to a smaller number of grafts per session to ensure maximum follicle survival and scalp health.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Cost in Pakistan */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Unshaven Hair Transplant Cost in Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Because of the time precision and advanced skill required an unshaven hair transplant cost in Pakistan sits in a different tier than standard FUE. The procedure takes roughly twice as long to perform and demands maximum surgeon involvement.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Your specific tier calculation depends on the number of grafts required and the complexity of working around your existing hair length. Most patients find that even the upper tier PKR packages for unshaven FUE in Pakistan remain highly accessible compared to the premium rates charged in Western clinics.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Hair Skill provides a clear upfront quote in PKR covering your extractions cleanroom implantation and scheduled aftercare with zero hidden fees. You invest in secrecy precision and real medical expertise.
                </p>
              </motion.div>
              
              {/* Section: Recovery and Healing */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Recovery and Healing
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Healing from an unshaven hair transplant is incredibly manageable. Since you keep your hair the redness and tiny scabs in the recipient area are camouflaged almost instantly.
                </p>

                <div className="space-y-4 ml-2 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium"><span className="font-bold">Days 1 to 3:</span> You may experience mild swelling but your native hair hides the surgical zones effectively.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium"><span className="font-bold">Days 7 to 10:</span> The small scabs naturally wash away during your clinical washing routine.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium"><span className="font-bold">Months 3 to 4:</span> The new transplanted follicles begin to sprout seamlessly blending into your long hair.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium"><span className="font-bold">Months 12 to 18:</span> You achieve your final mature density with a completely natural look.</p>
                  </div>
                </div>
                
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  You can resume most normal activities within a few days making it the ultimate lunch break procedure for those with busy demanding schedules.
                </p>
              </motion.div>
              
              {/* Section: FAQs Placeholder */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Unshaven Hair Transplant FAQs
                </h2>
                <p className="text-gray-500 italic text-base md:text-lg">(FAQ Section placeholder - ready for your specific questions and answers)</p>
              </motion.div>
              
              {/* Section: Closing CTA */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-6 border-t border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Schedule Your Discreet Hair Restoration Today
                </h2>
                
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  If you want to restore your hair without pausing your life an unshaven hair transplant at Hair Skill Clinic offers the ultimate privacy. Our surgeons design every step to ensure your treatment remains a complete secret.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Send us your photos today for a confidential review. Our doctors will study your pattern and tell you exactly how many grafts you need providing a custom package tier in PKR. Take control of your hairline without losing your current style. Get Your Free Unshaven FUE Assessment Today.
                </p>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: STICKY CONSULTATION FORM */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="w-full lg:w-1/3 lg:sticky lg:top-32 self-start mt-4 lg:mt-0"
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

                  <div className="flex items-start sm:items-center gap-2 mt-2">
                    <input type="checkbox" id="unshavenPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer mt-0.5 sm:mt-0 shrink-0" />
                    <label htmlFor="unshavenPrivacy" className="text-xs text-white/80 cursor-pointer leading-tight">
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