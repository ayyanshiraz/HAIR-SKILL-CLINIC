"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import { countries, type Country } from "../data/countries";

import AnimatedCounter from "./home/AnimatedCounter";

// Dynamically importing heavy sections to reduce initial load and improve Total Blocking Time
const SingleDoctorStage = dynamic(() => import("./home/SingleDoctorStage"), { ssr: false });
const BeforeAfterStage = dynamic(() => import("./home/BeforeAfterStage"), { ssr: false });
const PhilosophyStage = dynamic(() => import("./home/PhilosophyStage"), { ssr: false });
const WhyChooseStage = dynamic(() => import("./home/WhyChooseStage"), { ssr: false });
const TreatmentsStage = dynamic(() => import("./home/TreatmentsStage"), { ssr: false });
const GalleryStage = dynamic(() => import("./home/GalleryStage"), { ssr: false });
const PatientGuideStage = dynamic(() => import("./home/PatientGuideStage"), { ssr: false });
const TechniquesStage = dynamic(() => import("./home/TechniquesStage"), { ssr: false });
const FAQStage = dynamic(() => import("./home/FAQStage"), { ssr: false });

export default function Home() {
  const headline = `Hair Skill Clinic`;
  const tagline = `Mastering the Art of the Best Hair Transplant in Lahore and Karachi with World-Class Expertise and 100% Natural Results.`;
  
  const taglineWords = tagline.split(` `);
  const defaultCountry = countries.find((c: Country) => c.code === `PK`) || countries[0];
  
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const [fullName, setFullName] = useState(``);
  const [email, setEmail] = useState(``);
  const [phone, setPhone] = useState(``);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = `923014923336`;
    const textMessage = `Hello! I would like to get a free consultation.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, `_blank`);
  };

  return (
    <div className={`min-h-screen bg-[#772424] font-sans relative overflow-hidden`}>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: `easeInOut` }}
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/10 blur-[120px] rounded-full pointer-events-none`}
      />

      <div className={`w-full max-w-[1400px] mx-auto px-6 sm:px-8 pt-24 lg:pt-36 pb-20 relative z-10`}>
        
        <div className={`text-center mb-16 flex flex-col items-center`}>
          <h1 className={`mb-6 text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-white drop-shadow-2xl text-center`}>
            {headline}
          </h1>

          <p className={`text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto font-bold leading-relaxed flex flex-wrap justify-center gap-x-2 drop-shadow-xl`}>
            {taglineWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: `blur(12px)`, y: 10 }}
                animate={{ opacity: 1, filter: `blur(0px)`, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.04), duration: 0.8, ease: `easeOut` }}
              >
                {word}
              </motion.span>
            ))}
          </p>
          
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-end relative mt-8`}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className={`relative w-full flex justify-center lg:justify-start items-end h-full lg:-ml-12 xl:-ml-16 mt-12 -mb-20`}
          >
            <Image
              src={`/home/owner1.webp`}
              alt={`Hair Skill Clinic Doctors`}
              width={1050}
              height={850}
              priority={true}
              className={`w-[115%] lg:w-[125%] max-w-[550px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[1050px] h-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10`}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1, ease: `easeOut` }}
            className={`w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 flex flex-col gap-6 relative`}
          >
            <div className={`bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 relative z-10`}>
              <h2 className={`text-[#772424] text-xl font-extrabold text-center mb-8 tracking-wide`}>
                GET FREE CONSULTATION
              </h2>
              
              <form className={`flex flex-col gap-6`} onSubmit={handleSubmit}>
                <div className={`relative flex items-center border-b border-gray-300 pb-2 transition-colors focus-within:border-[#772424]`}>
                  <svg className={`w-5 h-5 text-gray-400 mr-3 shrink-0`} fill={`currentColor`} viewBox={`0 0 20 20`}>
                    <path fillRule={`evenodd`} d={`M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z`} clipRule={`evenodd`} />
                  </svg>
                  <input type={`text`} placeholder={`Full Name`} value={fullName} onChange={(e) => setFullName(e.target.value)} required className={`w-full text-sm outline-none bg-transparent text-gray-800 placeholder-gray-500 font-medium autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]`} />
                </div>

                <div className={`relative flex items-center border-b border-gray-300 pb-2 transition-colors focus-within:border-[#772424]`}>
                  <svg className={`w-5 h-5 text-gray-400 mr-3 shrink-0`} fill={`currentColor`} viewBox={`0 0 20 20`}>
                    <path d={`M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z`} />
                    <path d={`M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z`} />
                  </svg>
                  <input type={`email`} placeholder={`E-mail`} value={email} onChange={(e) => setEmail(e.target.value)} required className={`w-full text-sm outline-none bg-transparent text-gray-800 placeholder-gray-500 font-medium autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]`} />
                </div>

                <div className={`relative flex items-center border-b border-gray-300 pb-2 transition-colors focus-within:border-[#772424]`}>
                  <div className={`relative mr-4`}>
                    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`flex items-center gap-2 cursor-pointer text-sm font-bold text-[#772424] select-none whitespace-nowrap`}>
                      <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={selectedCountry.name} className={`w-5 object-contain`} />
                      {selectedCountry.dial}
                      <span className={`text-[10px] ml-1`}>▼</span>
                    </div>
                    {isDropdownOpen && (
                      <div className={`absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 shadow-xl rounded-lg z-50`}>
                        {countries.map((country: Country, idx: number) => (
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex items-center justify-between text-gray-800`}>
                            <div className={`flex items-center gap-2`}>
                              <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} className={`w-5 object-contain`} />
                              <span className={`font-bold`}>{country.code}</span>
                              <span className={`text-xs text-gray-400 hidden sm:inline truncate max-w-[80px]`}>{country.name}</span>
                            </div>
                            <span className={`text-gray-500 font-medium`}>{country.dial}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <input type={`tel`} placeholder={`Phone Number`} value={phone} onChange={(e) => setPhone(e.target.value)} required className={`w-full text-sm outline-none bg-transparent text-gray-800 font-medium`} />
                </div>

                <div className={`flex items-center gap-2 mt-2`}>
                  <input type={`checkbox`} id={`privacy`} className={`w-4 h-4 accent-[#772424] rounded cursor-pointer shrink-0`} required defaultChecked />
                  <label htmlFor={`privacy`} className={`text-[13px] text-gray-600 cursor-pointer leading-tight`}>
                    I have read and accept the <Link href={`/privacy-policy`} className={`text-[#772424] font-bold hover:underline`}>Privacy Policy.</Link>
                  </label>
                </div>

                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type={`submit`} className={`w-full bg-[#772424] text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 shadow-lg hover:bg-[#5a1b1b] transition-all mt-2`}>
                  Submit
                  <span className={`text-xl font-light`}>›</span>
                </motion.button>
              </form>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className={`flex justify-center w-full z-20`}
            >
              <motion.a 
                href={`https://www.google.com/search?sca_esv=b631901597e26bf7&sxsrf=APpeQntdMcTxbDVXHiSS_qNKDRIkwsn1fA:1782032822741&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-__wSd6NV-ZVxJuhvs5cLT_bSl9pMvKjj6iPC54pNuHuI4OpBZpeJk4pMlLlMA0BrMLtjnt7ATd5NRCqE3kOIE8ERS5LkYl7MiiOzWRDbK-WnGy-v8OirwYOoX_FKE_OMN3C24tIuOo8vbo6-0nXhNh80SS_8p7ziPhAvLqiD_hIkA7Kk2rXjPnwDZ8qu6q9nyxwv5PFRSWDNh2SuwaIfqu8N2gibt6FwlTCpge5xBl16mrfiPBwJmamRFEhRnjc27J8vXtcl80ybaW-FzvfsQm0mc8XFdjdoIkGnN4V3wd1W9QlnL9N2z1d6zUJcC32UsY9Anjh8PodWFbZKefK6JSli-_S9&q=%F0%9D%97%9B%F0%9D%97%AE%F0%9D%97%B6%F0%9D%97%BF+%F0%9D%97%A6%F0%9D%97%B8%F0%9D%97%B6%F0%9D%97%B9%F0%9D%97%B9+-+%F0%9D%97%99%F0%9D%97%A8%F0%9D%97%98+%F0%9D%90%83%F0%9D%90%87%F0%9D%90%88+%F0%9D%97%9B%F0%9D%97%AE%F0%9D%97%B6%F0%9D%97%BF+%F0%9D%97%A7%F0%9D%97%BF%F0%9D%97%AE%F0%9D%97%BB%F0%9D%98%80%F0%9D%97%BD%F0%9D%97%B9%F0%9D%97%AE%F0%9D%97%BB%F0%9D%98%81+%F0%9D%97%96%F0%9D%97%B9%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B6%F0%9D%97%B0+%F0%9D%97%9F%F0%9D%97%AE%F0%9D%97%B5%F0%9D%97%BC%F0%9D%97%BF%F0%9D%97%B2+%F0%9D%97%A3%F0%9D%97%AE%F0%9D%97%B8%F0%9D%97%B6%F0%9D%98%80%F0%9D%98%81%F0%9D%97%AE%F0%9D%97%BB+Reviews&sa=X&ved=2ahUKEwj3j4LL_ZeVAxX36skDHRiVAyQQ0bkNegQIPBAF&biw=1536&bih=703&dpr=1.25`}
                target={`_blank`}
                rel={`noopener noreferrer`}
                whileHover={{ y: -3, scale: 1.02 }} 
                className={`relative overflow-hidden flex items-center gap-4 bg-[#111] backdrop-blur-xl border border-gray-700/60 shadow-[0_15px_40px_rgba(0,0,0,0.4)] rounded-full px-7 py-3.5 cursor-pointer group block`}
              >
                <motion.div animate={{ x: [`-200%`, `200%`] }} transition={{ repeat: Infinity, duration: 2.5, ease: `linear`, repeatDelay: 1 }} className={`absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg] z-0 pointer-events-none`} />
                <div className={`relative z-10 bg-white p-1.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]`}>
                  <svg className={`w-5 h-5`} viewBox={`0 0 24 24`} xmlns={`http://www.w3.org/2000/svg`}>
                    <path d={`M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`} fill={`#4285F4`}/>
                    <path d={`M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`} fill={`#34A853`}/>
                    <path d={`M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z`} fill={`#FBBC05`}/>
                    <path d={`M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z`} fill={`#EA4335`}/>
                  </svg>
                </div>
                <div className={`relative z-10 flex flex-col`}>
                  <div className={`flex items-center gap-2`}>
                    <span className={`text-white font-black text-lg leading-none tracking-tight`}>4.9</span>
                    <div className={`flex gap-0.5`}>
                      {[1, 2, 3, 4, 5].map((star, i) => (
                        <motion.svg key={star} initial={{ opacity: 0, rotate: -30, scale: 0 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} transition={{ delay: 2.5 + (i * 0.1), type: `spring`, stiffness: 200 }} className={`w-[15px] h-[15px] text-[#FBBC05] drop-shadow-[0_0_3px_rgba(251,188,5,0.6)]`} fill={`currentColor`} viewBox={`0 0 20 20`}>
                          <path d={`M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z`} />
                        </motion.svg>
                      ))}
                    </div>
                  </div>
                  <span className={`text-gray-400 text-[10px] font-bold tracking-[0.1em] uppercase mt-0.5`}>5,000+ Google Reviews</span>
                </div>
              </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </div>

      <div className={`w-full bg-white py-20 relative z-20 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.05)]`}>
        <div className={`max-w-[1400px] mx-auto px-6 sm:px-8 relative`}>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative`}>
            
            <motion.div 
              initial={`hidden`} whileInView={`visible`} viewport={{ once: true, margin: `-50px` }}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: `easeOut` } } }}
              className={`flex flex-col items-center justify-center py-8 relative group`}
            >
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-3xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <h3 className={`text-6xl lg:text-[80px] font-black text-[#1a202c] tracking-tighter mb-2 relative z-10 flex items-center`}>
                <AnimatedCounter to={20} duration={2} />
                <span className={`text-[#772424]`}>+</span>
              </h3>
              <div className={`flex flex-col items-center`}>
                <span className={`text-xl lg:text-2xl font-bold text-[#4a5568]`}>Years of</span>
                <span className={`text-base lg:text-lg font-medium text-gray-500 tracking-wide`}>Experience</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ height: 0, opacity: 0 }} whileInView={{ height: `100%`, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
              className={`hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 w-[1px] h-[80%] bg-gradient-to-b from-transparent via-[#C5A059]/50 to-transparent`} 
            />

            <motion.div 
              initial={`hidden`} whileInView={`visible`} viewport={{ once: true, margin: `-50px` }}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: `easeOut` } } }}
              className={`flex flex-col items-center justify-center py-8 relative group`}
            >
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-3xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              <h3 className={`text-6xl lg:text-[80px] font-black text-[#1a202c] tracking-tighter mb-2 relative z-10 flex items-center`}>
                <AnimatedCounter to={5} duration={1.5} />
                <span className={`text-[#772424]`}>+</span>
              </h3>
              <div className={`flex flex-col items-center`}>
                <span className={`text-xl lg:text-2xl font-bold text-[#4a5568]`}>Hair Transplant</span>
                <span className={`text-base lg:text-lg font-medium text-gray-500 tracking-wide`}>Doctor</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ height: 0, opacity: 0 }} whileInView={{ height: `100%`, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.7 }}
              className={`hidden md:block absolute left-2/3 top-1/2 -translate-y-1/2 w-[1px] h-[80%] bg-gradient-to-b from-transparent via-[#C5A059]/50 to-transparent`} 
            />

            <motion.div 
              initial={`hidden`} whileInView={`visible`} viewport={{ once: true, margin: `-50px` }}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: `easeOut` } } }}
              className={`flex flex-col items-center justify-center py-8 relative group`}
            >
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-3xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              <h3 className={`text-6xl lg:text-[80px] font-black text-[#1a202c] tracking-tighter mb-2 relative z-10 flex items-center`}>
                <AnimatedCounter to={20000} duration={3} />
                <span className={`text-[#772424]`}>+</span>
              </h3>
              <div className={`flex flex-col items-center`}>
                <span className={`text-xl lg:text-2xl font-bold text-[#4a5568]`}>Happy</span>
                <span className={`text-base lg:text-lg font-medium text-gray-500 tracking-wide`}>Patient</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <SingleDoctorStage />
      <BeforeAfterStage />
      <PhilosophyStage />
      <WhyChooseStage />
      <TreatmentsStage />
      <GalleryStage />
      <PatientGuideStage />
      <TechniquesStage />
      <FAQStage />

    </div>
  );
}