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
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/patient-guide" className="hover:text-[#772424] transition-colors">Patient Guide</Link>
            <span>/</span>
            <span className="text-[#772424]">Hair Washing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Hair Washing Guide After Transplant
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch lg:items-start w-full">
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* Main Hero Image */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeUp}
                className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group"
              >
                <img 
                  src="/patient-guide/5.webp" 
                  alt="Medical assistant performing gentle post op hair wash on patient" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95" 
                />
              </motion.div>

              {/* Lead Intro Paragraph */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Learning to wash hair after transplant is one of the most essential parts of your recovery. Whether you had your surgery in Lahore, Karachi, Multan, or Rawalpindi, following the correct hair transplant washing steps ensures your newly implanted grafts remain safe. If you are looking for a safe hair transplant near me with the lowest price and best postoperative care, Hair Skill Clinic is your ultimate destination. Here is the complete guideline to answer your questions regarding washing hair after a hair transplant!
                </p>
              </motion.div>

              {/* Section 1: Wait for Two Days */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Wait for Two Days for the First Wash
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  When you wash the newly transplanted area of your scalp immediately after the surgery, it may damage your sensitive hair follicles. We recommend waiting to wash your hair at least 36 to 48 hours after your procedure. At Hair Skill Clinic, we usually perform your first wash after a hair transplant professionally to ensure zero damage.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  You can learn how to wash your head after a hair transplant by watching the detailed tutorial on our YouTube channel. If a patient experiences more bleeding or discharge than usual, our experts can perform the initial head wash after hair transplant the very next day.
                </p>
              </motion.div>

              {/* Section 2: How Often to Wash */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  How Often to Wash Hair After Hair Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Patients frequently ask when they can wash their hair after a hair transplant and how often they should do it. It is advisable to wash your head once a day for the first month after surgery. For the first two weeks, you must follow the exact gentle tapping method we taught you in the clinic or demonstrated on our YouTube channel. 
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Two weeks after the surgery, you can slowly transition to washing your hair the way you used to do before. After a month, you can reduce the frequency and wash your hair once every two or three days.
                </p>
              </motion.div>

              {/* Section 3: Apply Lotion/Foam */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Apply Lotion and Foam Correctly
                </h2>

                <div className="flex flex-col gap-4 ml-2">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">
                      You can use medical lotion or foam on both the donor and recipient areas. Applying lotion promotes skin cell renewal, hydrates the scalp, and softens post surgery scabs. While using these products, please be extremely gentle and use light tapping motions. Before rinsing, wait at least 20 to 40 minutes.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">
                      We recommend applying Panthenol spray, which soothes, cools, and protects your healing skin. You should use Panthenol spray for the first 10 to 14 days. If you run out of it, Bepanthol lotion is an excellent alternative. Stop using lotion or foam completely once all the scabs have safely fallen off.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">
                      Apply the supplied antibiotic cream only on your donor area for the first 5 to 7 days after the surgery. Do not apply it over your recipient zone under any circumstances. After 5 to 7 days, your donor area will be fully healed.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section 4: Wash in a Proper Way */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Wash Your Hair in a Proper Way
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  While shampooing your recipient area, you must exercise extreme caution. After pouring shampoo over the recipient zone and making it foamy in your hands first, do gentle tapping in a vertical direction with your fingertips. Please do not rub and strictly avoid circular movements on the recipient zone.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  To prevent any infection and ensure a smooth healing process, wash your donor area by gently rubbing to clean dried blood and any tissue remnants.
                </p>
              </motion.div>

              {/* Section 5: Advised Shampoos */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Apply Advised Shampoos
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Before applying any shampoo different from the one we supplied at Hair Skill Clinic, please consult your doctor. Your physician will guide you to choose a suitable shampoo for your specific scalp condition. Applying the advised shampoo will help you remove scabs safely and improve overall healing.
                </p>
              </motion.div>

              {/* Section 6: Rinsing */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Rinsing Guidelines
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Water temperature is crucial. It should not be cold, and it should not be hot. Always use warm water with very low pressure. Avoid using a direct shower header to wash your head for the first 14 days after the surgery. Instead, you can use a small bowl or switch the shower header to a gentle, low pressure setting.
                </p>
              </motion.div>

              {/* Section 7: Drying */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Drying Your Hair Safely
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The recipient and donor areas require completely different drying techniques. Please dry your recipient transplant site with a soft paper towel. Gently apply it over the newly transplanted grafts so it absorbs the water naturally. Do not rub the recipient area at all.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  You can dry your donor area with a regular clean towel. Hairdryers are not recommended unless you strictly use the cool air mode. If it is possible, letting your hair air dry naturally is the safest option.
                </p>
              </motion.div>

            </div>

            {/* RIGHT SIDE: STICKY CONSULTATION FORM */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="w-full lg:w-1/3 lg:sticky lg:top-32 mt-4 lg:mt-0"
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
                    <input type="checkbox" id="washPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer mt-0.5 sm:mt-0 shrink-0" />
                    <label htmlFor="washPrivacy" className="text-xs text-white/80 cursor-pointer leading-tight">
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