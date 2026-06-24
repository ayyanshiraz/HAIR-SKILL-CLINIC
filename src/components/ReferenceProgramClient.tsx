"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

// Path points to ../data/countries because this file sits inside /src/components
import { countries, type Country } from "../data/countries";

// --- STRICT ANIMATION Bezier Tuple ---
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

export default function ReferenceProgramClient() {
  // --- FORM STATES ---
  const defaultCountry = countries.find((c: Country) => c.code === `PK`) || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState(``);
  const [email, setEmail] = useState(``);
  const [phone, setPhone] = useState(``);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = `923014923336`;
    const textMessage = `Hello! I would like to get a free consultation from the Reference Program Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, `_blank`);
  };

  // Defeats Google Chrome forced white Autofill override
  const autofillFixStyle = {
    WebkitBoxShadow: `0 0 0px 1000px #772424 inset`,
    WebkitTextFillColor: `#ffffff`
  };

  return (
    <div className={`min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24`}>
      
      {/* --- PAGE HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className={`pt-28 lg:pt-36 pb-12 bg-gray-50 border-b border-gray-200 px-6`}
      >
        <div className={`max-w-[1200px] mx-auto`}>
          <div className={`text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2`}>
            <Link href={`/`} className={`hover:text-[#772424] transition-colors`}>Homepage</Link>
            <span>/</span>
            <Link href={`/about`} className={`hover:text-[#772424] transition-colors`}>About</Link>
            <span>/</span>
            <span className={`text-[#772424]`}>Hair Skill Reference Program</span>
          </div>
          {/* Explicitly excepted heading: Changed to text-black */}
          <h1 className={`text-4xl md:text-6xl font-black text-gray-900 tracking-tight`}>
            Hair Skill Reference Program
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className={`py-16 px-6 bg-white`}>
        <div className={`max-w-[1200px] mx-auto`}>
          <div className={`flex flex-col lg:flex-row gap-16 items-start`}>
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className={`w-full lg:w-2/3 flex flex-col`}>
              
              {/* Top Banner */}
              <motion.div 
                initial={`hidden`} 
                animate={`visible`} 
                variants={fadeUp}
                className={`w-full rounded-2xl overflow-hidden bg-[#f8f9fa] relative mb-12 shadow-lg group`}
              >
                <img 
                  src={`/about/reference-banner.jpg`} 
                  alt={`Hair Skill Reference Program`} 
                  className={`w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-1000`} 
                />
              </motion.div>

              {/* Gentle Club Section */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-12`}
              >
                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight`}>
                  Hair Skill Gentle Club
                </h2>
                
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  For all these years, our patients and we have formed a great family, and our relationship has been the most important thing for us. Are you one of these gentlemen who have his hair back in Hair Skill Clinic? How about extending our Gentlemen Club? With Hair Skill Gentleman Club, we take this relationship one step ahead and invite you to join us to make our family bigger, help us improve the quality, and provide affordable hair loss treatment for everyone!
                </p>

                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  If you know someone considering having a <span className={`font-bold text-black underline decoration-[#C5A059]`}>hair transplant</span> treatment; and looking for the best place to get his operation, all you need to do is explain your experience and start contact between us. You will receive a referral reward when your friend decides to go with the Gentlemen Club of Hair Skill Clinic! After the treatment, our new family member will get a 20% discount as well!
                </p>
              </motion.div>

              {/* Eligibility Section */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-12`}
              >
                <h3 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight`}>
                  How to Benefit From Hair Skill Gentlemen Club
                </h3>
                
                <h4 className={`text-xl font-black text-[#772424] mb-4`}>1. Eligibility</h4>
                <p className={`text-lg font-bold text-black mb-4`}>Exceptions:</p>

                <div className={`flex flex-col gap-4 mb-6 ml-2`}>
                  {[
                    `Hair Skill Clinic employees`,
                    `Hair Skill Clinic partners and staff`,
                    `Candidates must not have contacted Hair Skill Clinic or our partners before the referral.`,
                    `The patients who had already benefited from other discounts`
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-start gap-3`}>
                      <span className={`w-2 h-2 rounded-full bg-[#772424] mt-2.5 shrink-0`} />
                      <p className={`text-black text-base md:text-lg font-bold`}>{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* How it Works Section */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-12`}
              >
                <h4 className={`text-xl font-black text-[#772424] mb-4`}>2. How the referral system works?</h4>
                <p className={`text-black text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  If you have your friend interested in booking a hair transplant surgery with us, do the following:
                </p>

                <div className={`flex flex-col gap-5 ml-2`}>
                  <div className={`flex items-start gap-3`}>
                    <span className={`font-black text-[#772424] text-lg`}>a)</span>
                    <p className={`text-black text-base md:text-lg font-medium pt-0.5`}>Let the Candidate get in touch with us</p>
                  </div>
                  <div className={`flex items-start gap-3`}>
                    <span className={`font-black text-[#772424] text-lg`}>b)</span>
                    <p className={`text-black text-base md:text-lg font-medium pt-0.5`}>The Candidate should state the person who referred them and share the information with our case managers.</p>
                  </div>
                  <div className={`flex items-start gap-3`}>
                    <span className={`font-black text-[#772424] text-lg`}>c)</span>
                    <p className={`text-black text-base md:text-lg font-medium pt-0.5`}>The Candidate needs to confirm the referral and treatment to Hair Skill Clinic.</p>
                  </div>
                  <div className={`flex items-start gap-3`}>
                    <span className={`font-black text-[#772424] text-lg`}>d)</span>
                    <p className={`text-black text-base md:text-lg font-medium pt-0.5`}>The case will be evaluated within 24-48 hours after the Candidates application.</p>
                  </div>
                  <div className={`flex items-start gap-3`}>
                    <span className={`font-black text-[#772424] text-lg`}>e)</span>
                    <p className={`text-black text-base md:text-lg font-medium pt-0.5`}>They must accept that you referred to have the right to disclaim the discount and your bonus.</p>
                  </div>
                  <div className={`flex items-start gap-3`}>
                    <span className={`font-black text-[#772424] text-lg`}>f)</span>
                    <p className={`text-black text-base md:text-lg font-medium pt-0.5`}>There is NO limit! You are free to be referral as many people as you like!</p>
                  </div>
                </div>
              </motion.div>

              {/* Rewards Section */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
                className={`mb-12`}
              >
                <h4 className={`text-xl font-black text-[#772424] mb-6`}>3. What Do You & Your Friend Get?</h4>

                <div className={`flex flex-col gap-6 ml-2`}>
                  <div className={`flex items-start gap-3`}>
                    <span className={`font-black text-[#772424] text-lg`}>a)</span>
                    <p className={`text-black text-base md:text-lg font-medium pt-0.5`}>
                      If the Candidate undergoes treatment at Hair Skill Clinic, you and the Candidate can receive the loyalty reward.
                    </p>
                  </div>
                  <div className={`flex items-start gap-3`}>
                    <span className={`font-black text-[#772424] text-lg`}>b)</span>
                    <div className={`flex flex-col gap-3 pt-0.5 w-full`}>
                      <p className={`text-black text-base md:text-lg font-black`}>The payment reward structure:</p>
                      <p className={`text-black text-base md:text-lg font-medium`}>- You: every single new operation will receive a 20% reward.</p>
                      <p className={`text-black text-base md:text-lg font-medium`}>- Your referral: 20% discount from total expense.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Influencer Section */}
              <motion.div 
                initial={`hidden`} 
                whileInView={`visible`} 
                viewport={{ once: true, margin: `-50px` }} 
                variants={fadeUp}
              >
                <h4 className={`text-xl font-black text-[#772424] mb-4 leading-tight`}>4. How an Influencer get benefit from Hair Skill Gentle Club Patient Reference Program?</h4>
                <p className={`text-black text-base md:text-lg leading-relaxed font-medium`}>
                  If you are an influencer, active on Instagram, Youtube, or TikTok, we will make a content plan for your social media profile and give you a promo code! For each Candidate you get us, you will receive a 20% reward.
                </p>
              </motion.div>

            </div>

            {/* RIGHT SIDE: STICKY CONSULTATION FORM (Glides in from right) */}
            <motion.div 
              initial={`hidden`}
              animate={`visible`}
              variants={slideInRight}
              className={`w-full lg:w-1/3 lg:sticky lg:top-32`}
            >
              <div className={`bg-[#772424] text-white rounded-3xl p-8 shadow-2xl relative w-full border border-[#8c2a2a]`}>
                <h3 className={`text-white text-xl font-black text-center mb-8 tracking-wide`}>
                  GET FREE CONSULTATION
                </h3>
                
                <form onSubmit={handleSubmit} className={`flex flex-col gap-6`}>
                  <div className={`border-b border-white/30 pb-2 focus-within:border-white transition-colors`}>
                    <input 
                      type={`text`} 
                      placeholder={`Full Name`} 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                      required 
                      className={`w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium`} 
                      style={autofillFixStyle}
                    />
                  </div>
                  
                  <div className={`border-b border-white/30 pb-2 focus-within:border-white transition-colors`}>
                    <input 
                      type={`email`} 
                      placeholder={`E-mail`} 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                      className={`w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium`} 
                      style={autofillFixStyle}
                    />
                  </div>

                  <div className={`border-b border-white/30 pb-2 focus-within:border-white transition-colors flex items-center relative`}>
                    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`flex items-center gap-2 cursor-pointer text-sm font-bold text-[#C5A059] select-none mr-3 shrink-0`}>
                      <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={selectedCountry.name} className={`w-5 object-contain`} />
                      <span>{selectedCountry.dial}</span>
                      <span className={`text-[10px]`}>▼</span>
                    </div>
                    
                    {isDropdownOpen && (
                      <div className={`absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 shadow-2xl rounded-xl z-50`}>
                        {countries.map((country: Country, idx: number) => (
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className={`px-4 py-2.5 hover:bg-gray-100 cursor-pointer text-sm flex items-center justify-between text-black transition-colors`}>
                            <div className={`flex items-center gap-2.5 truncate mr-2`}>
                              <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} className={`w-5 object-contain shrink-0`} />
                              <span className={`font-bold`}>{country.code}</span>
                              <span className={`text-xs text-black truncate`}>{country.name}</span>
                            </div>
                            <span className={`text-[#772424] font-black shrink-0`}>{country.dial}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <input 
                      type={`tel`} 
                      placeholder={`Phone Number`} 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      required 
                      className={`w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium`} 
                      style={autofillFixStyle}
                    />
                  </div>

                  <div className={`flex items-center gap-2 mt-2`}>
                    <input type={`checkbox`} id={`refPrivacy`} required defaultChecked className={`w-4 h-4 accent-[#C5A059] rounded cursor-pointer`} />
                    <label htmlFor={`refPrivacy`} className={`text-xs text-white/80 cursor-pointer`}>
                      I have read and accept the <Link href={`/privacy-policy`} className={`text-[#C5A059] font-black hover:underline`}>Privacy Policy.</Link>
                    </label>
                  </div>

                  <button type={`submit`} className={`w-full py-4 bg-white hover:bg-gray-100 text-[#772424] font-extrabold rounded-xl transition-all tracking-wider text-sm mt-2 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]`}>
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