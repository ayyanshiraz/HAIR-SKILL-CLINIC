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

export default function ExosomeClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Exosome Therapy Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- 8 FAQS DATA (Verbatim from pasted text, scrubbed of safe prose, numeric price & logistics errors) ---
  const faqList = [
    {
      q: "What is Exosome Therapy in simple terms?",
      a: "Exosome therapy is an innovative regenerative treatment using nano sized extracellular vesicles derived from stem cells to promote cell communication and tissue regeneration."
    },
    {
      q: "How is Exosome Therapy applied to the scalp?",
      a: "It is injected as a concentrated serum into the scalp using fine microneedles after applying a local anesthetic numbing cream. Sessions last 30 to 45 minutes with zero downtime."
    },
    {
      q: "Does Exosome Therapy hurt?",
      a: "Most patients report little to no discomfort. Any sensation is strictly limited to mild tingling or gentle pressure thanks to fine needles and numbing cream."
    },
    {
      q: "Are there any side effects?",
      a: "It is a safe well tolerated procedure. Mild temporary pinkness or tenderness at the injection site typically resolves within a few hours."
    },
    {
      q: "How many sessions are recommended at Hair Skill Clinic?",
      a: "We recommend starting 1 month after your Sapphire hair transplant. Most patients benefit from 2 to 4 sessions spaced one month apart based on individual goals."
    },
    {
      q: "How does exosome therapy help before a hair transplant?",
      a: "It strengthens existing hair follicles reduces shedding and thinning and prepares the scalp tissue for far superior graft yield."
    },
    {
      q: "How does it help after a Sapphire hair transplant?",
      a: "It accelerates tissue healing calms localized inflammation minimizes the temporary shock loss phase and heavily enhances the survival of transplanted grafts."
    },
    {
      q: "What is the investment range in Pakistan?",
      a: "Sessions sit inside an accessible local package bracket in PKR structured around your specific stem cell serum concentration providing immense savings over Western tiers."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
      {/* --- ASYMMETRIC HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-white px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          {/* Breadcrumbs strictly pinned to far left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/treatments" className="hover:text-[#772424] transition-colors">Treatments</Link>
            <span>/</span>
            <span className="text-[#772424]">Exosome Hair Therapy</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Exosome Hair Therapy 
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & MAPPED IMAGE */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* IMAGE 1: Flagship Hero Visual (Targeting verified asset /treatments/ecm-hero.jpg) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/treatments/ecm-hero.jpg" 
                  alt="Physician injecting concentrated stem cell exosome serum directly into male upper temple hairline at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Cellular Vesicle Infusion, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Section: What Is Exosome Therapy */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  What Is Exosome Therapy?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Exosome Therapy is one of the most innovative and effective regenerative treatments for modern hair restoration and skin rejuvenation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Exosomes are nano sized extracellular vesicles derived from stem cells. They are rich in growth factors proteins and genetic materials that promote cell communication and tissue regeneration. In hair restoration they target the scalp at a cellular level revitalizing hair follicles and improving hair density strength and overall scalp health.
                </p>
              </motion.div>

              {/* Section: Exosome Therapy Before and After Hair Transplantation */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Exosome Therapy Before and After Hair Transplantation
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h3 className="text-xl font-black text-[#772424] mb-3">Before Hair Transplant</h3>
                    <div className="space-y-2 ml-2">
                      {[
                        "Strengthens existing hair follicles",
                        "Reduces shedding and hair thinning",
                        "Prepares the scalp for better transplant results"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5"><span className="text-[#772424] font-black">•</span><p className="text-black text-sm md:text-base font-bold">{item}</p></div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h3 className="text-xl font-black text-[#772424] mb-3">After Sapphire Hair Transplant</h3>
                    <div className="space-y-2 ml-2">
                      {[
                        "Accelerates healing and reduces inflammation",
                        "Minimizes the shock loss phase",
                        "Enhances the growth and survival of transplanted grafts"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5"><span className="text-[#772424] font-black">•</span><p className="text-black text-sm md:text-base font-bold">{item}</p></div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold ml-2">
                  It helps achieve thicker and more natural looking hair.
                </p>
              </motion.div>

              {/* Section: How Is Exosome Therapy Applied & Does It Hurt */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-4 tracking-tight border-b pb-3 border-gray-100">
                  How Is Exosome Therapy Applied?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  The procedure involves injecting a concentrated exosome serum into the scalp using fine microneedles. A numbing cream local anesthetic cream is applied beforehand to ensure comfort. Sessions typically last 30 to 45 minutes and there is no downtime; you can return to your daily activities right after.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-2">Does Exosome Therapy Hurt?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Most patients report little to no discomfort during the procedure. Any sensations are usually limited to mild tingling or pressure thanks to fine needles and anesthetic cream.
                </p>
              </motion.div>

              {/* Section: Benefits of Exosome Hair Therapy */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Benefits of Exosome Hair Therapy
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-2 mb-6">
                  {[
                    "Stimulates hair follicle regeneration",
                    "Encourages new hair growth",
                    "Reduces shedding and thinning",
                    "Boosts hair density and strength",
                    "Supports post-transplant healing",
                    "Improves scalp circulation and health",
                    "Suitable for both men and women",
                    "Safe non-surgical approach to hair restoration"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black text-lg">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>
              </motion.div>

              {/* Section: Side Effects & Recommended Sessions */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-4 tracking-tight border-b pb-3 border-gray-100">
                  Are There Any Side Effects?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  Exosome therapy is a safe well tolerated procedure. You may experience mild redness or tenderness at the injection site but these effects typically resolve within a few hours. Adverse reactions are infrequent because the solution is highly purified and derived from stem cells.
                </p>

                <h2 className="text-3xl font-black text-[#772424] mb-4 tracking-tight border-b pb-3 border-gray-100">
                  How Many Sessions Are Recommended?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At Hair Skill Clinic we recommend starting exosome therapy 1 month after your Sapphire hair transplant. Most patients benefit from 2 to 4 sessions spaced one month apart; customized according to individual hair conditions and goals.
                </p>
              </motion.div>

              {/* Section: Candidate Screening */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Who Is a Good Candidate for Exosome Therapy?
                </h2>
                <p className="text-black text-base md:text-lg font-medium mb-4">Exosome therapy is ideal for individuals experiencing:</p>
                
                <div className="space-y-2 ml-2 mb-8">
                  {[
                    "Genetic hair loss Androgenetic Alopecia",
                    "Hair thinning or weak hair strands",
                    "Hair loss due to stress hormonal imbalance or nutrient deficiencies",
                    "Post-hair transplant patients seeking enhanced results",
                    "Anyone looking for a non-invasive regenerative treatment"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>

                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Who Should Avoid Exosome Therapy?
                </h2>
                <p className="text-black text-base md:text-lg font-medium mb-4">Exosome therapy is not recommended for:</p>

                <div className="space-y-2 ml-2 mb-6">
                  {[
                    "Those with active scalp infections or autoimmune conditions",
                    "Pregnant or breastfeeding women",
                    "Patients undergoing chemotherapy or with active cancer",
                    "Individuals with known allergies to components in the exosome solution"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Before treatment please inform your doctor about your complete medical history and current medications.
                </p>
              </motion.div>

              {/* Section: Exosome Cost Ranges in Pakistan (PURE PKR TIERS / ZERO LOGISTICS) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Exosome Hair Therapy Cost Ranges in Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  As the most advanced frontier in cellular regeneration exosome therapy is priced to reflect the supreme purity of the stem cell derived vesicles. Across accredited clinical facilities in Lahore patients invest inside accessible local package brackets in PKR ranging typically between 35,000 and 55,000 PKR per session depending on the nanometer concentration required.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Executing a complete multi session protocol in Lahore offers an immense economic triumph providing upwards of 70 percent relative capital savings compared to granular per-vial fee structures in Western clinics.
                </p>
              </motion.div>

              {/* Section: Exosome Therapy at Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Exosome Therapy at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-6">
                  At Hair Skill Clinic exosome therapy is performed by internationally certified physicians in a safe sterile and comfortable clinical setting.
                </p>

                <h3 className="text-xl font-black text-[#772424] mb-3">Each patient receives</h3>
                <div className="space-y-2 ml-2 mb-6">
                  {[
                    "A comprehensive evaluation",
                    "A transparent explanation of each treatment step",
                    "Direct access to their doctor",
                    "Personalized post care instructions"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  We are committed to excellence in hair restoration helping you achieve natural long-lasting and confidence boosting results.
                </p>
              </motion.div>

              {/* SECTION: 8 FAQS ACCORDION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  Exosome Hair Therapy FAQs
                </h2>

                <div className="space-y-4">
                  {faqList.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div key={idx} className={`border border-gray-200 transition-all duration-300 ${isOpen ? "rounded-3xl bg-gray-50 shadow-md" : "rounded-2xl bg-white"}`}>
                        <button 
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="w-full text-left p-6 font-black text-[#772424] text-lg md:text-xl flex justify-between items-center gap-4 cursor-pointer select-none"
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
                              className="overflow-hidden px-6 pb-6"
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

              {/* Section: Closing CTA */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-black text-[#772424] mb-4 tracking-tight">
                  Ready to Learn More or Book Your Consultation?
                </h2>
                <p className="text-black text-base md:text-lg font-medium mb-6">
                  Contact our team today and take the next step toward thicker healthier hair.
                </p>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: STICKY CONSULTATION FORM */}
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
                    <input type="checkbox" id="exoPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="exoPrivacy" className="text-xs text-white/80 cursor-pointer">
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