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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function HairWashingClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Hair Washing Guide Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
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
            <span className="text-[#772424]">Hair Washing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Hair Wash After the Procedure
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* Main Hero Image with Patient Tag */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeUp}
                className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group"
              >
                <img 
                  src="/guide/washing-hero.jpg" 
                  alt="Medical assistant performing gentle post-op hair wash on patient" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 bg-[#772424] text-white text-xs md:text-sm font-black px-5 py-2.5 rounded-full shadow-lg border border-white/20 tracking-wide">
                  T.B., 40, 5000 Grafts @ Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Intro Paragraph */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  <span className="font-bold underline decoration-[#C5A059]">Hair washing</span> is one of the essential parts of a hair transplant. Therefore, there are some necessary steps that you need to follow to complete your healing stage. Here is the guideline to answer your considerations regarding the hair wash!
                </p>
              </motion.div>

              {/* Section 1: Wait for Two Days */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Wait for Two Days to Wash Your Hair
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  When you wash the newly transplanted area of your scalp immediately after the surgery, it may damage your hair follicles. It is recommended to wash your hair 2 days after your surgery or at least 36 to 48 hours after. We will do your first wash at the Hair Skill Clinic.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  You can learn <span className="font-bold underline decoration-[#772424]">how to wash your hair from the video on our Youtube channel</span>. If the patient has more bleeding or discharge than usual, we can perform the first wash the next day after the surgery.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  It would be best to wash your head once a day for the first month after the hair transplant. It should be the way we taught you in the clinic or watched on our Youtube channel for the first two weeks. Two weeks after the surgery, you can wash your hair the way you used to do before. After a month, you can wash your hair once in two or three days.
                </p>

                {/* Video Embed Cover Box */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border border-gray-200 my-6 bg-gray-900">
                  <img 
                    src="/guide/youtube-wash-cover.jpg" 
                    alt="Hair Washing Tutorial Thumbnail" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#e52d27] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(229,45,39,0.8)] group-hover:scale-110 group-hover:bg-[#ff3b35] transition-all duration-300">
                      <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[22px] border-l-white border-b-[14px] border-b-transparent ml-2" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <span className="text-white font-black text-xl md:text-2xl tracking-wide uppercase block">Watch Official Washing Guide</span>
                    <span className="text-[#C5A059] font-bold text-xs">Hair Skill Clinic Youtube Channel</span>
                  </div>
                </div>
              </motion.div>

              {/* Section 2: Apply Lotion/Foam */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Apply Lotion/Foam
                </h2>

                <div className="flex flex-col gap-4 ml-2">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">
                      You can use lotion or foam on both donor and recipient areas. Applying lotion or foam promotes your skin cells to renew, hydrate, and soften your scabs. While using lotion or foam, please be gentle and tap gently. Before rinsing it off, wait for at least 20 to 40 minutes.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">
                      You can apply Panthenol spray, which protects your skin; soothes and cools the skin. You should use Panthenol spray for the first 10 to 14 days. If you run out of it, you can use Bepanthol lotion.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">
                      Stop using lotion or foam after all the scabs are off.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">
                      Apply antibiotic cream supplied to you only for your donor area for the first 5 to 7 days after the surgery. Do not apply it over your recipient zone! After 5 to 7 days, your donor will be healed.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section 3: Wash in a Proper Way */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Wash Your Hair in a Proper Way
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  While shampooing your recipient area, you must be careful when touching it. After pouring shampoo over the recipient zone and making it foamy, do the gentle tapping in a vertical direction with your fingertips. Please do not rub and avoid circular movements of the recipient zone.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  To prevent any infection, wash your donor area by rubbing to clean blood and any tissue remnants.
                </p>
                <p className="text-black text-base md:text-lg font-medium italic bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Hair Washing with Gentle Taps
                </p>
              </motion.div>

              {/* Section 4: Advised Shampoos */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Apply Advised Shampoos
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Before applying shampoo different from the one, we supplied, please consult your doctor. Your doctor will guide you to pick up a suitable shampoo for your hair. Applying advised shampoo will help you remove the scabs and improve the healing.
                </p>
              </motion.div>

              {/* Section 5: Rinsing */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Rinsing
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Water should not be cold and should not be hot. It should be warm water with low pressure. Avoid using a shower header to wash your head for the first 14 days after the surgery. Instead, you can use a bowl or switch the shower header to get liquid water with low pressure.
                </p>
              </motion.div>

              {/* Section 6: Drying */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Drying
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The recipient and donor areas should be dried differently. Please dry your recipient (transplanted) site with a paper towel. Gently apply it over the newly transplanted grafts, so it absorbs the water. Do not rub the recipient area.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  You can dry your donor area with a regular towel. Hairdryers are not recommended unless you are not using your hairdryer in cool mode. If it is possible, let your hair air dry.
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
                    <input type="checkbox" id="washPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="washPrivacy" className="text-xs text-white/80 cursor-pointer">
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