"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const customEase: [number, number, number, number] = [0.2, 0.65, 0.3, 0.9];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: customEase }
  })
};

export default function TechniquesClient() {
  const [searchQuery, setSearchQuery] = useState("");

  // --- 8 MASTER CLINICAL TECHNIQUES (Exactly matching image_7bcb45.png, zero prices, build-safe prose) ---
  const techniquesList = [
    {
      title: "Sapphire Hair Transplant",
      slug: "sapphire",
      categoryFolder: "techniques",
      description: "Utilizing precious sapphire gemstone blades instead of traditional steel to open micro channels in the recipient zone. This advanced precision reduces tissue trauma minimizes scab formation and accelerates overall healing while enabling maximum graft density.",
      duration: "6 - 8 Hours",
      benefits: ["Minimal tissue crusting", "Higher density placement", "Faster scalp recovery"]
    },
    {
      title: "DHI Hair Transplant",
      slug: "dhi",
      categoryFolder: "techniques",
      description: "Direct Hair Implantation utilizes a specialized Choi Implanter pen tool. Grafts are loaded and injected directly into the scalp simultaneously without the need for prior channel creation ensuring maximum graft survival rates and angle control.",
      duration: "6 - 8 Hours",
      benefits: ["No prior channel incisions", "Reduced out of body graft time", "Excellent for hairline lowering"]
    },
    {
      title: "Manuel Fue Hair Transplant",
      slug: "manuel-fue",
      categoryFolder: "techniques",
      description: "The classic ancestral technique where follicular units are extracted one by one using a specialized handheld punch. This meticulous manual control guarantees the lowest possible transection rate and pristine graft preservation.",
      duration: "6 - 8 Hours",
      benefits: ["Pristine graft quality", "Highly controlled extraction", "Safeguards native donor reserves"]
    },
    {
      title: "Body Hair Transplant",
      slug: "body",
      categoryFolder: "techniques",
      description: "When scalp donor reserves are depleted body hair from the beard chest or limbs can be safely harvested to provide vital background density and midscalp coverage creating a fully balanced and believable overall appearance.",
      duration: "6 - 8 Hours",
      benefits: ["Expands depleted donor pools", "Excellent midscalp filling", "Strategic layered placement"]
    },
    {
      title: "Unshaven Hair Transplant",
      slug: "unshaven-transplant",
      categoryFolder: "treatments",
      description: "A highly discreet procedure tailored for individuals who require immediate return to professional life. The restoration process is executed without shaving the recipient or visible donor zones keeping the treatment completely undetectable.",
      duration: "6 - 8 Hours",
      benefits: ["Zero visible hair length change", "Complete conversational privacy", "Ideal for executive profiles"]
    },
    {
      title: "Long FUE Hair Transplant",
      slug: "long-fue",
      categoryFolder: "treatments",
      description: "An advanced extraction protocol where follicles are harvested with longer hair shafts intact. This allows patients to walk out of the clinical facility with an immediate architectural preview of their fully mature future density.",
      duration: "7 - 9 Hours",
      benefits: ["Immediate visual density preview", "Longer shaft extractions", "Highly specialized handling"]
    },
    {
      title: "Manual Punch Hair Transplant",
      slug: "manual-punch",
      categoryFolder: "techniques",
      description: "Relying strictly on tactile human precision rather than automated micro motors. The surgeon gently rotates fine punches by hand to free individual follicles keeping surrounding native tissue completely undisturbed.",
      duration: "6 - 8 Hours",
      benefits: ["Strict human tactile control", "Zero mechanical heat trauma", "Rapid donor zone closure"]
    },
    {
      title: "Needle-Free Anesthesia",
      slug: "needle-free",
      categoryFolder: "techniques",
      description: "Eliminating injection anxiety through high pressure jet diffusion technology. Anesthetic medication is sprayed directly into the scalp tissue creating rapid localized numbing before any extraction begins.",
      duration: "15 - 30 Mins",
      benefits: ["Overcomes needle phobia", "Rapid subcutaneous diffusion", "Enhanced operational comfort"]
    }
  ];

  const filteredTechniques = techniquesList.filter(tech =>
    tech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tech.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
      {/* --- BREADCRUMBS & HERO HEADLINE --- */}
      <motion.section 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-white px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <span className="text-[#772424]">Techniques</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight text-center mt-4">
            Advanced Hair Restoration Techniques
          </h1>
          <p className="text-black text-center max-w-2xl mx-auto mt-4 text-base md:text-lg font-medium leading-relaxed">
            Explore the advanced clinical methodologies performed at Hair Skill Clinic in Pakistan to deliver seamless natural density with maximum cleanroom safety protocols.
          </p>
        </div>
      </motion.section>

      {/* --- LIVE INTERACTIVE FILTER HUB --- */}
      <section className="py-6 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          
          <div className="mb-12 max-w-md mx-auto">
            <input 
              type="text"
              placeholder="Filter specific techniques..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl text-black placeholder-gray-400 outline-none focus:border-[#772424] transition-all font-medium text-sm shadow-xs"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredTechniques.map((tech, idx) => (
              <motion.div
                key={tech.title}
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="border border-gray-100 rounded-3xl p-8 bg-gray-50/60 hover:bg-white hover:border-[#772424]/30 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group border-[#772424]/5"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-4 tracking-tight group-hover:text-[#772424] transition-colors">
                    {tech.title}
                  </h2>
                  <p className="text-black text-sm md:text-base leading-relaxed font-medium mb-6">
                    {tech.description}
                  </p>

                  <div className="space-y-2.5 mb-8 border-t border-gray-200/60 pt-6 ml-1">
                    {tech.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-3">
                        <span className="text-[#772424] font-black text-sm">•</span>
                        <span className="text-black text-xs md:text-sm font-bold">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200/60 pt-6 mt-2 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="w-full sm:w-auto text-left">
                    <p className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">Est Clinical Duration</p>
                    <p className="text-black font-extrabold text-sm mt-0.5">{tech.duration}</p>
                  </div>

                  <Link 
                    href={`/${tech.categoryFolder}/${tech.slug}`}
                    className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-200 text-black hover:border-[#772424] hover:bg-[#772424] hover:text-white font-extrabold text-xs md:text-sm rounded-xl transition-all text-center tracking-wider uppercase shadow-xs group-hover:scale-[1.02]"
                  >
                    Explore Details <span>›</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTechniques.length === 0 && (
            <div className="text-center py-16 bg-gray-50 rounded-3xl border border-dashed border-gray-200 mt-6">
              <p className="text-black font-extrabold text-lg">No clinical techniques match your current search parameter.</p>
              <button onClick={() => setSearchQuery("")} className="mt-3 text-xs font-bold text-[#772424] uppercase tracking-wider hover:underline">Reset Search</button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}