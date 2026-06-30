"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  // Mobile specific state toggles
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  const toggleMobileAccordion = (menu: string) => {
    setOpenMobileAccordion(openMobileAccordion === menu ? null : menu);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1400px] bg-white border border-gray-200 rounded-3xl lg:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-[#772424]`}
    >
      <div className={`px-6 sm:px-8`}>
        <div className={`flex justify-between items-center h-20`}>

          {/* Logo Section */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-shrink-0 flex items-center`}
          >
            <Link href={`/`}>
              <img 
                src={`/logo.png`} 
                alt={`Smile Hair Clinic`} 
                className={`h-12 w-auto object-contain`} 
              />
            </Link>
          </motion.div>

          {/* Desktop Links Section */}
          <nav className={`hidden lg:flex items-center space-x-1 text-[15px] font-bold tracking-wide h-full`}>
            
            {/* About */}
            <div 
              className={`relative h-full flex items-center group`}
              onMouseEnter={() => setHoveredItem(`About`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative px-4 py-2 flex items-center justify-center`}>
                {hoveredItem === `About` && (
                  <motion.div layoutId={`active-pill`} className={`absolute inset-0 bg-[#772424]/10 rounded-full`} transition={{ type: `spring`, stiffness: 400, damping: 25 }} />
                )}
                <Link href={`/about`} className={`relative z-10 transition-colors duration-300`}>About</Link>
              </div>
              <div className={`absolute left-0 top-full hidden group-hover:block w-80 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-4 rounded-xl border border-gray-100`}>
                {[
                  { name: `Smile True Philosophy`, path: `/about/philosophy` },
                  { name: `Smile Gentle Care`, path: `/about/gentle-care` },
                  { name: `Why To Choose Smile Hair Clinic?`, path: `/about/why-choose-us` },
                  { name: `Code of Ethics`, path: `/about/ethics` },
                  { name: `Mission & Vision`, path: `/about/mission` },
                  { name: `Personal Data Protection Policy`, path: `/about/data-protection` }
                ].map((item) => (
                  <Link key={item.path} href={item.path} className={`group/link flex items-center px-8 py-3 text-[15px] font-medium text-gray-600 hover:text-[#772424] hover:bg-gradient-to-r hover:from-[#772424]/5 hover:to-transparent transition-all duration-300`}>
                    <span className={`w-0 overflow-hidden opacity-0 text-[#772424] transition-all duration-300 ease-in-out group-hover/link:w-6 group-hover/link:opacity-100 flex-shrink-0`}>—</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Doctors */}
            <div 
              className={`relative h-full flex items-center`}
              onMouseEnter={() => setHoveredItem(`Doctors`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative px-4 py-2 flex items-center justify-center`}>
                {hoveredItem === `Doctors` && (
                  <motion.div layoutId={`active-pill`} className={`absolute inset-0 bg-[#772424]/10 rounded-full`} transition={{ type: `spring`, stiffness: 400, damping: 25 }} />
                )}
                <Link href={`/doctors-category`} className={`relative z-10 transition-colors duration-300`}>Doctors</Link>
              </div>
            </div>

            {/* Hair Transplant Multi-Level Dropdown */}
            <div 
              className={`relative h-full flex items-center group`}
              onMouseEnter={() => setHoveredItem(`Hair Transplant`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative px-4 py-2 flex items-center justify-center`}>
                {hoveredItem === `Hair Transplant` && (
                  <motion.div layoutId={`active-pill`} className={`absolute inset-0 bg-[#772424]/10 rounded-full`} transition={{ type: `spring`, stiffness: 400, damping: 25 }} />
                )}
                <Link href={`/hair-transplant`} className={`relative z-10 transition-colors duration-300`}>Hair Transplant</Link>
              </div>
              <div className={`absolute left-0 top-full hidden group-hover:block w-64 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-4 rounded-xl border border-gray-100`}>
                
                {/* Treatments Sub-Menu */}
                <div className={`relative group/treatments`}>
                  <Link href={`/treatments`} className={`group/link flex justify-between items-center px-8 py-3 text-[15px] font-medium text-gray-600 hover:text-[#772424] hover:bg-gradient-to-r hover:from-[#772424]/5 hover:to-transparent transition-all duration-300 cursor-pointer`}>
                    <div className={`flex items-center`}>
                      <span className={`w-0 overflow-hidden opacity-0 text-[#772424] transition-all duration-300 ease-in-out group-hover/link:w-6 group-hover/link:opacity-100 flex-shrink-0`}>—</span>
                      <span>Treatments</span>
                    </div>
                    <span className={`text-[10px] text-gray-400 group-hover/link:text-[#772424] transition-colors`}>▶</span>
                  </Link>
                  <div className={`absolute left-full top-0 hidden group-hover/treatments:block w-72 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-4 rounded-xl border border-gray-100 max-h-[60vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
                    {[
                      { name: `Manual Fue Hair Transplant`, path: `/techniques/manual-fue` },
                      { name: `DHI Hair Transplant`, path: `/techniques/dhi` },
                       { name: `FUE By Moterize Method`, path: `/treatments/fue-by-moterize` },
                        { name: `Chinese Method`, path: `/treatments/chinese` },
                         { name: `FUT Hair Trasnplant`, path: `/treatments/fut` },
                      { name: `Beard Transplant`, path: `/treatments/beard-transplant` },
                      { name: `Moustache Transplant`, path: `/treatments/moustache` },
                      { name: `Eyebrow Transplant`, path: `/treatments/eyebrow` },
                      { name: `Female Hair Transplant`, path: `/treatments/female` },
                      { name: `Afro Hair Transplant`, path: `/treatments/afro-hair` },
                      { name: `Sideburn Transplantation`, path: `/treatments/sideburn` },
                      { name: `Mesotherapy`, path: `/treatments/mesotherapy` },
                      { name: `Ozone Hair Therapy`, path: `/treatments/ozone-hair-therapy` },
                      { name: `PRP Hair Treatment`, path: `/treatments/prp-hair-treatment` },
                      { name: `Exosome Hair Therapy`, path: `/treatments/exosome-hair-therapy` }
                    ].map((item) => (
                      <Link key={item.path} href={item.path} className={`group/link flex items-center px-8 py-3 text-[15px] font-medium text-gray-600 hover:text-[#772424] hover:bg-gradient-to-r hover:from-[#772424]/5 hover:to-transparent transition-all duration-300`}>
                        <span className={`w-0 overflow-hidden opacity-0 text-[#772424] transition-all duration-300 ease-in-out group-hover/link:w-6 group-hover/link:opacity-100 flex-shrink-0`}>—</span>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Techniques Sub-Menu */}
                <div className={`relative group/techniques`}>
                  <Link href={`/techniques`} className={`group/link flex justify-between items-center px-8 py-3 text-[15px] font-medium text-gray-600 hover:text-[#772424] hover:bg-gradient-to-r hover:from-[#772424]/5 hover:to-transparent transition-all duration-300 cursor-pointer`}>
                    <div className={`flex items-center`}>
                      <span className={`w-0 overflow-hidden opacity-0 text-[#772424] transition-all duration-300 ease-in-out group-hover/link:w-6 group-hover/link:opacity-100 flex-shrink-0`}>—</span>
                      <span>Techniques</span>
                    </div>
                    <span className={`text-[10px] text-gray-400 group-hover/link:text-[#772424] transition-colors`}>▶</span>
                  </Link>
                  <div className={`absolute left-full top-0 hidden group-hover/techniques:block w-72 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-4 rounded-xl border border-gray-100`}>
                    {[
                      { name: `Sapphire Hair Transplant`, path: `/techniques/sapphire` },
                      { name: `DHI Hair Transplant`, path: `/techniques/dhi` },
                      { name: `Body Hair Transplant`, path: `/techniques/body` },
                      { name: `Unshaven Hair Transplant`, path: `/treatments/unshaven-transplant` },
                      { name: `Long FUE Hair Transplant`, path: `/treatments/long-fue` },
                      { name: `Manual Punch Hair Transplant`, path: `/techniques/manual-punch` },
                      { name: `Needle-Free Anesthesia`, path: `/techniques/needle-free` }
                    ].map((item) => (
                      <Link key={item.path} href={item.path} className={`group/link flex items-center px-8 py-3 text-[15px] font-medium text-gray-600 hover:text-[#772424] hover:bg-gradient-to-r hover:from-[#772424]/5 hover:to-transparent transition-all duration-300`}>
                        <span className={`w-0 overflow-hidden opacity-0 text-[#772424] transition-all duration-300 ease-in-out group-hover/link:w-6 group-hover/link:opacity-100 flex-shrink-0`}>—</span>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Hair Unit */}
            <div 
              className={`relative h-full flex items-center`}
              onMouseEnter={() => setHoveredItem(`Hair Unit`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative px-4 py-2 flex items-center justify-center`}>
                {hoveredItem === `Hair Unit` && (
                  <motion.div layoutId={`active-pill`} className={`absolute inset-0 bg-[#772424]/10 rounded-full`} transition={{ type: `spring`, stiffness: 400, damping: 25 }} />
                )}
                <Link href={`/hair-unit`} className={`relative z-10 transition-colors duration-300`}>Hair Unit</Link>
              </div>
            </div>

            {/* Reviews */}
            <div 
              className={`relative h-full flex items-center`}
              onMouseEnter={() => setHoveredItem(`Reviews`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative px-4 py-2 flex items-center justify-center`}>
                {hoveredItem === `Reviews` && (
                  <motion.div layoutId={`active-pill`} className={`absolute inset-0 bg-[#772424]/10 rounded-full`} transition={{ type: `spring`, stiffness: 400, damping: 25 }} />
                )}
                <Link href={`/reviews`} className={`relative z-10 transition-colors duration-300`}>Reviews</Link>
              </div>
            </div>
            
            {/* Patient Guide */}
            <div 
              className={`relative h-full flex items-center group`}
              onMouseEnter={() => setHoveredItem(`Patient Guide`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative px-4 py-2 flex items-center justify-center`}>
                {hoveredItem === `Patient Guide` && (
                  <motion.div layoutId={`active-pill`} className={`absolute inset-0 bg-[#772424]/10 rounded-full`} transition={{ type: `spring`, stiffness: 400, damping: 25 }} />
                )}
                <Link href={`/patient-guide`} className={`relative z-10 transition-colors duration-300`}>Patient Guide</Link>
              </div>
              <div className={`absolute left-0 top-full hidden group-hover:block w-80 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-4 rounded-xl border border-gray-100`}>
                {[
                  { name: `Sterilization at Smile Hair Clinic`, path: `/patient-guide/sterilization` },
                  { name: `Hair Washing`, path: `/patient-guide/hair-washing` },
                  { name: `What Should I Do Before Hair Transplant`, path: `/patient-guide/before` },
                  { name: `Day Of Procedure`, path: `/patient-guide/day-of` },
                  { name: `After Hair Transplant Procedure`, path: `/patient-guide/after` },
                ].map((item) => (
                  <Link key={item.path} href={item.path} className={`group/link flex items-center px-8 py-3 text-[15px] font-medium text-gray-600 hover:text-[#772424] hover:bg-gradient-to-r hover:from-[#772424]/5 hover:to-transparent transition-all duration-300`}>
                    <span className={`w-0 overflow-hidden opacity-0 text-[#772424] transition-all duration-300 ease-in-out group-hover/link:w-6 group-hover/link:opacity-100 flex-shrink-0`}>—</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* F.A.Q. */}
            <div 
              className={`relative h-full flex items-center group`}
              onMouseEnter={() => setHoveredItem(`FAQ`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative px-4 py-2 flex items-center justify-center`}>
                {hoveredItem === `FAQ` && (
                  <motion.div layoutId={`active-pill`} className={`absolute inset-0 bg-[#772424]/10 rounded-full`} transition={{ type: `spring`, stiffness: 400, damping: 25 }} />
                )}
                <Link href={`/faqs`} className={`relative z-10 transition-colors duration-300`}>F.A.Q.S</Link>
              </div>
              <div className={`absolute left-0 top-full hidden group-hover:block w-56 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-4 rounded-xl border border-gray-100`}>
                {[
                  { name: `Pre Operation`, path: `/faqs/pre-op` },
                  { name: `Post Operation`, path: `/faqs/post-op` },
                  { name: `General`, path: `/faqs/general` }
                ].map((item) => (
                  <Link key={item.path} href={item.path} className={`group/link flex items-center px-8 py-3 text-[15px] font-medium text-gray-600 hover:text-[#772424] hover:bg-gradient-to-r hover:from-[#772424]/5 hover:to-transparent transition-all duration-300`}>
                    <span className={`w-0 overflow-hidden opacity-0 text-[#772424] transition-all duration-300 ease-in-out group-hover/link:w-6 group-hover/link:opacity-100 flex-shrink-0`}>—</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* --- STANDALONE Before & After Link --- */}
            <div 
              className={`relative h-full flex items-center`}
              onMouseEnter={() => setHoveredItem(`Before After`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative px-4 py-2 flex items-center justify-center`}>
                {hoveredItem === `Before After` && (
                  <motion.div layoutId={`active-pill`} className={`absolute inset-0 bg-[#772424]/10 rounded-full`} transition={{ type: `spring`, stiffness: 400, damping: 25 }} />
                )}
                <Link href={`/before-after`} className={`relative z-10 transition-colors duration-300`}>Before & After</Link>
              </div>
            </div>

            {/* --- PLURALIZED BLOGS DROPDOWN --- */}
            <div 
              className={`relative h-full flex items-center group`}
              onMouseEnter={() => setHoveredItem(`Blogs`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative px-4 py-2 flex items-center justify-center`}>
                {hoveredItem === `Blogs` && (
                  <motion.div layoutId={`active-pill`} className={`absolute inset-0 bg-[#772424]/10 rounded-full`} transition={{ type: `spring`, stiffness: 400, damping: 25 }} />
                )}
                <Link href={`/blogs`} className={`relative z-10 transition-colors duration-300`}>Blogs</Link>
              </div>
              <div className={`absolute left-0 top-full hidden group-hover:block w-60 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-4 rounded-xl border border-gray-100`}>
                {[
                  { name: `Hair Transplant`, path: `/blogs/hair-transplant` },
                  { name: `Hair Loss`, path: `/blogs/hair-loss` }
                ].map((item) => (
                  <Link key={item.path} href={item.path} className={`group/link flex items-center px-8 py-3 text-[15px] font-medium text-gray-600 hover:text-[#772424] hover:bg-gradient-to-r hover:from-[#772424]/5 hover:to-transparent transition-all duration-300`}>
                    <span className={`w-0 overflow-hidden opacity-0 text-[#772424] transition-all duration-300 ease-in-out group-hover/link:w-6 group-hover/link:opacity-100 flex-shrink-0`}>—</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

          </nav>

          {/* Desktop Contact Button */}
          <div className={`hidden lg:flex items-center space-x-4`}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={`/contact`} className={`border-2 border-[#772424] rounded-full px-8 py-2 text-[15px] font-bold hover:bg-[#772424] hover:text-white transition duration-300`}>
                Contact
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className={`flex lg:hidden items-center`}>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className={`p-2 rounded-lg text-[#772424] focus:outline-none`}
            >
              <span className={`text-3xl select-none font-light block`}>{isMobileMenuOpen ? `✕` : `☰`}</span>
            </button>
          </div>

        </div>

        {/* --- MOBILE ACCORDION DRAWER --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: `auto`, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden flex flex-col pt-4 pb-6 space-y-3 border-t border-gray-100 overflow-y-auto max-h-[calc(100vh-8.5rem)] overscroll-contain pr-1 text-[15px] font-bold`}
            >
              {/* About Mobile */}
              <div>
                <button onClick={() => toggleMobileAccordion(`about`)} className={`w-full flex justify-between items-center py-2 text-left active:text-[#902b2b]`}>
                  <span>About</span>
                  <span>{openMobileAccordion === `about` ? `−` : `+`}</span>
                </button>
                {openMobileAccordion === `about` && (
                  <div className={`flex flex-col pl-4 mt-2 space-y-2 border-l-2 border-[#772424]/20 text-sm font-medium text-gray-600`}>
                    {[
                      { name: `Smile True Philosophy`, path: `/about/philosophy` },
                      { name: `Smile Gentle Care`, path: `/about/gentle-care` },
                      { name: `Why To Choose Smile Hair Clinic?`, path: `/about/why-choose-us` },
                      { name: `Code of Ethics`, path: `/about/ethics` },
                      { name: `Mission & Vision`, path: `/about/mission` },
                      { name: `Personal Data Protection Policy`, path: `/about/data-protection` }
                    ].map(item => (
                      <Link key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`py-1.5 block`}>{item.name}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Doctors Mobile */}
              <Link href={`/doctors-category`} onClick={() => setIsMobileMenuOpen(false)} className={`py-2 block active:text-[#902b2b]`}>Doctors</Link>

              {/* Hair Transplant Mobile */}
              <div>
                <button onClick={() => toggleMobileAccordion(`ht`)} className={`w-full flex justify-between items-center py-2 text-left active:text-[#902b2b]`}>
                  <span>Hair Transplant</span>
                  <span>{openMobileAccordion === `ht` ? `−` : `+`}</span>
                </button>
                {openMobileAccordion === `ht` && (
                  <div className={`flex flex-col pl-4 mt-2 space-y-3 border-l-2 border-[#772424]/20 text-sm font-medium text-gray-600`}>
                    <div>
                      <span className={`text-[#772424] text-xs uppercase font-extrabold tracking-wider block mb-1`}>Treatments</span>
                      <div className={`flex flex-col pl-2 space-y-1.5`}>
                        {[
                          { name: `Manual Fue Hair Transplant`, path: `/techniques/manual-fue` },
                          { name: `DHI Hair Transplant`, path: `/techniques/dhi` },
                           { name: `FUE By Moterize Method`, path: `/treatments/fue-by-moterize` },
                            { name: `Chinese Method`, path: `/treatments/chinese` },
                             { name: `FUT Hair Trasnplant`, path: `/treatments/fut` },
                          { name: `Beard Transplant`, path: `/treatments/beard-transplant` },
                          { name: `Moustache Transplant`, path: `/treatments/moustache` },
                          { name: `Eyebrow Transplant`, path: `/treatments/eyebrow` },
                          { name: `Female Hair Transplant`, path: `/treatments/female` },
                          { name: `Afro Hair Transplant`, path: `/treatments/afro-hair` },
                          { name: `Sideburn Transplantation`, path: `/treatments/sideburn` },
                          { name: `Mesotherapy`, path: `/treatments/mesotherapy` },
                          { name: `Ozone Hair Therapy`, path: `/treatments/ozone-hair-therapy` },
                          { name: `PRP Hair Treatment`, path: `/treatments/prp-hair-treatment` },
                          { name: `Exosome Hair Therapy`, path: `/treatments/exosome-hair-therapy` }
                        ].map(item => (
                          <Link key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`py-1 block`}>{item.name}</Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className={`text-[#772424] text-xs uppercase font-extrabold tracking-wider block mb-1`}>Techniques</span>
                      <div className={`flex flex-col pl-2 space-y-1.5`}>
                        {[
                          { name: `Sapphire Hair Transplant`, path: `/techniques/sapphire` },
                          { name: `DHI Hair Transplant`, path: `/techniques/dhi` },
                          { name: `Body Hair Transplant`, path: `/techniques/body` },
                          { name: `Unshaven Hair Transplant`, path: `/treatments/unshaven-transplant` },
                          { name: `Long FUE Hair Transplant`, path: `/treatments/long-fue` },
                          { name: `Manual Punch Hair Transplant`, path: `/techniques/manual-punch` },
                          { name: `Needle-Free Anesthesia`, path: `/techniques/needle-free` }
                        ].map(item => (
                          <Link key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`py-1 block`}>{item.name}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Hair Unit Mobile */}
              <Link href={`/hair-unit`} onClick={() => setIsMobileMenuOpen(false)} className={`py-2 block active:text-[#902b2b]`}>Hair Unit</Link>

              {/* Reviews Mobile */}
              <Link href={`/reviews`} onClick={() => setIsMobileMenuOpen(false)} className={`py-2 block active:text-[#902b2b]`}>Reviews</Link>

              {/* Patient Guide Mobile */}
              <div>
                <button onClick={() => toggleMobileAccordion(`guide`)} className={`w-full flex justify-between items-center py-2 text-left active:text-[#902b2b]`}>
                  <span>Patient Guide</span>
                  <span>{openMobileAccordion === `guide` ? `−` : `+`}</span>
                </button>
                {openMobileAccordion === `guide` && (
                  <div className={`flex flex-col pl-4 mt-2 space-y-2 border-l-2 border-[#772424]/20 text-sm font-medium text-gray-600`}>
                    {[
                      { name: `Sterilization at Smile Hair Clinic`, path: `/patient-guide/sterilization` },
                      { name: `Hair Washing`, path: `/patient-guide/hair-washing` },
                      { name: `What Should I Do Before Hair Transplant`, path: `/patient-guide/before` },
                      { name: `Day Of Procedure`, path: `/patient-guide/day-of` },
                      { name: `After Hair Transplant Procedure`, path: `/patient-guide/after` },
                    ].map(item => (
                      <Link key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`py-1.5 block`}>{item.name}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* FAQ Mobile */}
              <div>
                <button onClick={() => toggleMobileAccordion(`faq`)} className={`w-full flex justify-between items-center py-2 text-left active:text-[#902b2b]`}>
                  <span>F.A.Q.S</span>
                  <span>{openMobileAccordion === `faq` ? `−` : `+`}</span>
                </button>
                {openMobileAccordion === `faq` && (
                  <div className={`flex flex-col pl-4 mt-2 space-y-2 border-l-2 border-[#772424]/20 text-sm font-medium text-gray-600`}>
                    {[
                      { name: `Pre Operation`, path: `/faqs/pre-op` },
                      { name: `Post Operation`, path: `/faqs/post-op` },
                      { name: `General`, path: `/faqs/general` }
                    ].map(item => (
                      <Link key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`py-1.5 block`}>{item.name}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Standalones Mobile */}
              <Link href={`/before-after`} onClick={() => setIsMobileMenuOpen(false)} className={`py-2 block active:text-[#902b2b]`}>Before & After</Link>
              
              {/* Blogs Mobile */}
              <div>
                <button onClick={() => toggleMobileAccordion(`blogs`)} className={`w-full flex justify-between items-center py-2 text-left active:text-[#902b2b]`}>
                  <span>Blogs</span>
                  <span>{openMobileAccordion === `blogs` ? `−` : `+`}</span>
                </button>
                {openMobileAccordion === `blogs` && (
                  <div className={`flex flex-col pl-4 mt-2 space-y-2 border-l-2 border-[#772424]/20 text-sm font-medium text-gray-600`}>
                    {[
                      { name: `Hair Transplant`, path: `/blogs/hair-transplant` },
                      { name: `Hair Loss`, path: `/blogs/hair-loss` }
                    ].map(item => (
                      <Link key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`py-1.5 block`}>{item.name}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Contact Button */}
              <div className={`pt-4 block`}>
                <Link href={`/contact`} onClick={() => setIsMobileMenuOpen(false)} className={`w-full block text-center bg-[#772424] text-white py-3 rounded-xl font-bold active:scale-98 transition-transform`}>
                  Contact Us
                </Link>
              </div>

            </motion.nav>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}