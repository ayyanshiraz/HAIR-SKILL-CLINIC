"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

// Safely mapped to your app data folder
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

export default function LongFueClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Long FUE Treatment Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

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
          {/* Breadcrumbs pinned strictly to left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/hair-transplant" className="hover:text-[#772424] transition-colors">Hair Transplant</Link>
            <span>/</span>
            <span className="text-[#772424]">Long FUE</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Long FUE Hair Transplant
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* Main Hero Image */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeUp}
                className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group"
              >
                <img 
                  src="/hair-transplant/1.webp" 
                  alt="Doctor marking patient hairline for Long FUE procedure without shaving" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-top" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Long FUE Planning, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Intro Paragraphs */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Long FUE hair transplant in Pakistan is an advanced technique that allows hair transplantation without fully shaving the donor area preserving longer hair strands for a more discreet procedure. It offers better visual planning natural hairline design and less noticeable downtime.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Ideal for patients who want to maintain their existing hairstyle during treatment Long FUE combines precision with immediate aesthetic advantage. At Hair Skill Clinic each case is carefully evaluated to ensure optimal results based on individual hair characteristics and long-term goals.
                </p>
              </motion.div>

              {/* Section: What Is Long FUE */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-4 tracking-tight">
                  What Is Long FUE?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Long FUE Long Follicular Unit Excision is a modern hair transplant technique where follicles are extracted with the hair left longer than usual. Instead of shaving the donor area down to very short stubble the surgeon removes grafts while keeping the hair shafts long. This makes it easier to preview the direction curl and overall look of the result earlier.
                </p>
              </motion.div>

              {/* Section: Who Is It For */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Who Is It For?
                </h2>
                <p className="text-black text-base md:text-lg font-bold mb-4">Long FUE can be a good option if you:</p>

                <div className="flex flex-col gap-4 mb-6 ml-2">
                  {[
                    "Want a less shaved look during the healing phase",
                    "Prefer to keep your hairstyle while undergoing treatment",
                    "Need precise placement to match existing hair direction especially at the hairline",
                    "Have enough donor density to support FUE extraction"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                      <p className="text-black text-base md:text-lg font-medium">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  It may not be ideal if you have very tight curls severe donor thinning or if your surgeon recommends a different approach based on scalp condition.
                </p>
              </motion.div>

              {/* Section: Main Benefits */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Main Benefits of Long FUE
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/60">
                    <h3 className="text-lg font-extrabold text-[#772424] mb-2">Less noticeable downtime</h3>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">No fully shaved scalp so many patients feel more comfortable returning to daily life sooner.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/60">
                    <h3 className="text-lg font-extrabold text-[#772424] mb-2">Better visual planning</h3>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Longer hair helps the team judge angle direction and blend with surrounding hair.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/60">
                    <h3 className="text-lg font-extrabold text-[#772424] mb-2">Early cosmetic improvement</h3>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Even though transplanted hairs often shed later the immediate look can be more natural right after surgery.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/60">
                    <h3 className="text-lg font-extrabold text-[#772424] mb-2">Natural hairline control</h3>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">The surgeon can place grafts to better match your existing growth pattern.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Key Steps */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-4 border-gray-100">
                  Key Steps in the Long FUE Procedure
                </h2>

                <div className="flex flex-col gap-8 ml-2 border-l-2 border-[#772424]/20 pl-6">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Consultation and Design</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Your surgeon evaluates donor supply hair caliber curl pattern and scalp laxity. Then they design the hairline and map the areas to be filled.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Donor Area Preparation</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Instead of fully shaving the donor hair is typically trimmed in sections or selectively reduced to allow accurate extraction while keeping surrounding hair long enough to cover the area.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Local Anesthesia</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Numbing medication is applied to both donor and recipient sites. Most patients feel pressure and movement not pain.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Graft Extraction (FUE)</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Using a small punch tool follicular units are carefully removed one by one. With Long FUE extra care is taken to avoid damaging long shafts during removal.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Graft Handling and Sorting</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Grafts are kept hydrated sorted by hair count 1-hair 2-hair 3-hair units and prepared for implantation.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Recipient Site Creation & Implantation</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Tiny incisions are made in the thinning area. Angle direction and density are planned to create a natural pattern. Grafts are inserted into the prepared sites. Single-hair grafts are usually used at the hairline for a softer more natural edge.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Recovery Timeline */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Recovery What to Expect
                </h2>

                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[#772424]">
                    <h4 className="font-extrabold text-[#772424] text-lg mb-2">First 1 to 3 Days</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Mild swelling tightness and redness are common. Small scabs begin to form around grafts. Keep the scalp clean and follow washing instructions exactly.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[#772424]">
                    <h4 className="font-extrabold text-[#772424] text-lg mb-2">Days 4 to 14</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Scabs gradually fall off do not pick them. Redness fades for many patients though it can last longer in some skin types. You will likely be advised to avoid heavy sweating and direct sun exposure.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[#772424]">
                    <h4 className="font-extrabold text-[#772424] text-lg mb-2">Weeks 2 to 8 (Shedding Phase)</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Transplanted hairs often shed this is normal and expected. The follicles remain in place and begin a new growth cycle.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[#772424]">
                    <h4 className="font-extrabold text-[#772424] text-lg mb-2">Months 3 to 6</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">New hairs start growing initially fine and lighter. Density begins to improve steadily.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[#772424]">
                    <h4 className="font-extrabold text-[#772424] text-lg mb-2">Months 9 to 12 (and up to 18)</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Results become fuller and more mature. Texture and thickness continue to improve.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Aftercare Tips */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Aftercare Tips
                </h2>
                <div className="flex flex-col gap-4 ml-2">
                  {[
                    "Wash only as instructed by your clinic",
                    "Avoid scratching or rubbing the recipient area",
                    "Sleep with your head elevated for the first few nights if advised",
                    "Skip smoking and alcohol during early healing if possible",
                    "Attend follow-up visits to track progress and address concerns"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                      <p className="text-black text-base md:text-lg font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Section: Risks and Side Effects */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] mb-4 tracking-tight">
                  Potential Risks and Side Effects
                </h2>
                <p className="text-black text-base md:text-lg font-bold mb-4">As with any transplant method possible issues include:</p>
                <div className="flex flex-col gap-4 mb-6 ml-2">
                  {[
                    "Temporary swelling redness and itching",
                    "Shock loss temporary shedding of nearby native hair",
                    "Patchy growth during early months",
                    "Infection rare with proper care",
                    "Over-harvesting if donor planning is poor"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0" />
                      <p className="text-black text-base md:text-lg font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold">
                  Choosing an experienced Long FUE surgeon is one of the most important factors for a safe procedure and natural-looking results.
                </p>
              </motion.div>

              {/* Section: Final Notes */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-6 pt-6 border-t border-gray-100">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">
                  Final Notes
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Long FUE combines the precision of FUE with the cosmetic advantage of keeping the hair longer throughout the procedure. For patients who want minimal visible downtime and a more controlled approach to hairline planning Long FUE may be a suitable option depending on hair type donor capacity and overall goals.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At Hair Skill Clinic every case is evaluated individually to determine the most appropriate technique for natural and long-term results. Contact us to learn whether Long FUE is the right choice for you.
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
                    <input type="checkbox" id="lfuePrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="lfuePrivacy" className="text-xs text-white/80 cursor-pointer">
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