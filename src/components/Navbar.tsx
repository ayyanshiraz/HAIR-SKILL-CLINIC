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
        <div className={`flex justify-between items-center h-14 lg:h-20`}>

          {/* Logo Section */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-shrink-0 flex items-center`}
          >
            <Link href={`/`}>
              <img 
                src={`/home/logo.webp`} 
                alt={`Hair Skill Clinic`} 
                className={`h-8 w-auto object-contain`} 
              />
            </Link>
          </motion.div>

          {/* Desktop Links Section */}
          <nav className={`hidden lg:flex items-center space-x-1 text-[15px] font-bold tracking-wide h-full`}>
            
            {/* Clean Single About Link */}
            <div 
              className={`relative h-full flex items-center`}
              onMouseEnter={() => setHoveredItem(`About`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative px-4 py-2 flex items-center justify-center`}>
                {hoveredItem === `About` && (
                  <motion.div layoutId={`active-pill`} className={`absolute inset-0 bg-[#772424]/10 rounded-full`} transition={{ type: `spring`, stiffness: 400, damping: 25 }} />
                )}
                <Link href={`/about`} className={`relative z-10 transition-colors duration-300`}>About</Link>
              </div>
            </div>

            {/* Hair Transplant 2-Column Mega Menu */}
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
              
              {/* Mega Menu Dropdown */}
              <div className={`absolute left-0 top-full hidden group-hover:flex w-[550px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-6 rounded-xl border border-gray-100`}>
                
                {/* Column 1: Treatments */}
                <div className="flex-1 border-r border-gray-100 px-8">
                  <Link href={`/hair-transplant/treatments`} className="text-[#772424] text-[13px] uppercase font-extrabold tracking-wider block mb-4 hover:underline">
                    Treatments
                  </Link>
                  <div className="flex flex-col space-y-2">
                    {[
                      { name: `Manual FUE`, path: `/hair-transplant/treatments/manual-fue` },
                      { name: `DHI Hair Transplant`, path: `/hair-transplant/treatments/dhi` },
                      { name: `Beard Transplant`, path: `/hair-transplant/treatments/beard-transplant` },
                      { name: `Female FUE`, path: `/hair-transplant/treatments/female` },
                      { name: `PRP Treatment`, path: `/hair-transplant/treatments/prp-hair-treatment` },
                      { name: `Afro Restoration`, path: `/hair-transplant/treatments/afro-hair` }
                    ].map(item => (
                      <Link key={item.path} href={item.path} className="text-[14px] font-medium text-gray-600 hover:text-[#772424] hover:translate-x-1 transition-all">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <Link href={`/hair-transplant/treatments`} className="inline-block mt-5 text-[13px] font-bold text-[#772424] hover:underline">
                    View All Treatments ➔
                  </Link>
                </div>

                {/* Column 2: Techniques */}
                <div className="flex-1 px-8">
                  <Link href={`/hair-transplant/techniques`} className="text-[#772424] text-[13px] uppercase font-extrabold tracking-wider block mb-4 hover:underline">
                    Techniques
                  </Link>
                  <div className="flex flex-col space-y-2">
                    {[
                      { name: `Sapphire Technique`, path: `/hair-transplant/techniques/sapphire` },
                      { name: `Body-to-Scalp (BHT)`, path: `/hair-transplant/techniques/body` },
                      { name: `Unshaven Method`, path: `/hair-transplant/techniques/unshaven-transplant` },
                      { name: `Long Graft Technique`, path: `/hair-transplant/techniques/long-fue` },
                      { name: `Manual Extraction`, path: `/hair-transplant/techniques/manual-punch` }
                    ].map(item => (
                      <Link key={item.path} href={item.path} className="text-[14px] font-medium text-gray-600 hover:text-[#772424] hover:translate-x-1 transition-all">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <Link href={`/hair-transplant/techniques`} className="inline-block mt-5 text-[13px] font-bold text-[#772424] hover:underline">
                    View All Techniques ➔
                  </Link>
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
            
            {/* Clean Single Patient Guide Link */}
            <div 
              className={`relative h-full flex items-center`}
              onMouseEnter={() => setHoveredItem(`Patient Guide`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative px-4 py-2 flex items-center justify-center`}>
                {hoveredItem === `Patient Guide` && (
                  <motion.div layoutId={`active-pill`} className={`absolute inset-0 bg-[#772424]/10 rounded-full`} transition={{ type: `spring`, stiffness: 400, damping: 25 }} />
                )}
                <Link href={`/patient-guide`} className={`relative z-10 transition-colors duration-300`}>Patient Guide</Link>
              </div>
            </div>

            {/* Clean Single F.A.Q.S Link */}
            <div 
              className={`relative h-full flex items-center`}
              onMouseEnter={() => setHoveredItem(`FAQ`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative px-4 py-2 flex items-center justify-center`}>
                {hoveredItem === `FAQ` && (
                  <motion.div layoutId={`active-pill`} className={`absolute inset-0 bg-[#772424]/10 rounded-full`} transition={{ type: `spring`, stiffness: 400, damping: 25 }} />
                )}
                <Link href={`/faqs`} className={`relative z-10 transition-colors duration-300`}>F.A.Q.S</Link>
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
              className={`lg:hidden flex flex-col pt-4 pb-6 space-y-3 border-t border-gray-100 overflow-y-auto max-h-[calc(100vh-8.5rem)] overscroll-contain pr-1 text-[15px] font-bold [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
            >
              {/* About Mobile */}
              <Link href={`/about`} onClick={() => setIsMobileMenuOpen(false)} className={`py-2 block active:text-[#902b2b]`}>
                About
              </Link>

              {/* Hair Transplant Mobile (Categorized) */}
              <div>
                <div className={`w-full flex justify-between items-center py-2 text-left active:text-[#902b2b]`}>
                  <Link href={`/hair-transplant`} onClick={() => setIsMobileMenuOpen(false)} className={`flex-1`}>
                    Hair Transplant
                  </Link>
                  <button onClick={() => toggleMobileAccordion(`ht`)} className={`px-2`}>
                    <span>{openMobileAccordion === `ht` ? `−` : `+`}</span>
                  </button>
                </div>
                {openMobileAccordion === `ht` && (
                  <div className={`flex flex-col pl-4 mt-3 space-y-5 border-l-2 border-[#772424]/20 text-sm font-medium text-gray-600`}>
                    
                    {/* Treatments Mobile */}
                    <div>
                      <Link href={`/hair-transplant/treatments`} onClick={() => setIsMobileMenuOpen(false)} className={`text-[#772424] text-xs uppercase font-extrabold tracking-wider block mb-2`}>
                        Treatments
                      </Link>
                      <div className={`flex flex-col pl-2 space-y-1.5`}>
                        {[
                          { name: `Manual FUE`, path: `/hair-transplant/treatments/manual-fue` },
                          { name: `DHI Hair Transplant`, path: `/hair-transplant/treatments/dhi` },
                          { name: `Beard Transplant`, path: `/hair-transplant/treatments/beard-transplant` },
                          { name: `Female FUE`, path: `/hair-transplant/treatments/female` },
                          { name: `PRP Treatment`, path: `/hair-transplant/treatments/prp-hair-treatment` },
                          { name: `Afro Restoration`, path: `/hair-transplant/treatments/afro-hair` }
                        ].map(item => (
                          <Link key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`py-1 block`}>{item.name}</Link>
                        ))}
                        <Link href={`/hair-transplant/treatments`} onClick={() => setIsMobileMenuOpen(false)} className={`py-1.5 font-bold text-[#772424] text-[13px]`}>
                          View All Treatments ➔
                        </Link>
                      </div>
                    </div>

                    {/* Techniques Mobile */}
                    <div>
                      <Link href={`/hair-transplant/techniques`} onClick={() => setIsMobileMenuOpen(false)} className={`text-[#772424] text-xs uppercase font-extrabold tracking-wider block mb-2`}>
                        Techniques
                      </Link>
                      <div className={`flex flex-col pl-2 space-y-1.5`}>
                        {[
                          { name: `Sapphire Technique`, path: `/hair-transplant/techniques/sapphire` },
                          { name: `Body-to-Scalp (BHT)`, path: `/hair-transplant/techniques/body` },
                          { name: `Unshaven Method`, path: `/hair-transplant/techniques/unshaven-transplant` },
                          { name: `Long Graft Technique`, path: `/hair-transplant/techniques/long-fue` },
                          { name: `Manual Extraction`, path: `/hair-transplant/techniques/manual-punch` }
                        ].map(item => (
                          <Link key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`py-1 block`}>{item.name}</Link>
                        ))}
                        <Link href={`/hair-transplant/techniques`} onClick={() => setIsMobileMenuOpen(false)} className={`py-1.5 font-bold text-[#772424] text-[13px]`}>
                          View All Techniques ➔
                        </Link>
                      </div>
                    </div>

                  </div>
                )}
              </div>

              {/* Hair Unit Mobile */}
              <Link href={`/hair-unit`} onClick={() => setIsMobileMenuOpen(false)} className={`py-2 block active:text-[#902b2b]`}>Hair Unit</Link>

              {/* Reviews Mobile */}
              <Link href={`/reviews`} onClick={() => setIsMobileMenuOpen(false)} className={`py-2 block active:text-[#902b2b]`}>Reviews</Link>

              {/* Patient Guide Mobile (Clean Single Link) */}
              <Link href={`/patient-guide`} onClick={() => setIsMobileMenuOpen(false)} className={`py-2 block active:text-[#902b2b]`}>
                Patient Guide
              </Link>

              {/* FAQ Mobile (Clean Single Link) */}
              <Link href={`/faqs`} onClick={() => setIsMobileMenuOpen(false)} className={`py-2 block active:text-[#902b2b]`}>
                F.A.Q.S
              </Link>

              {/* Standalones Mobile */}
              <Link href={`/before-after`} onClick={() => setIsMobileMenuOpen(false)} className={`py-2 block active:text-[#902b2b]`}>Before & After</Link>
              
              {/* Blogs Mobile */}
              <div>
                <div className={`w-full flex justify-between items-center py-2 text-left active:text-[#902b2b]`}>
                  <Link href={`/blogs`} onClick={() => setIsMobileMenuOpen(false)} className={`flex-1`}>
                    Blogs
                  </Link>
                  <button onClick={() => toggleMobileAccordion(`blogs`)} className={`px-2`}>
                    <span>{openMobileAccordion === `blogs` ? `−` : `+`}</span>
                  </button>
                </div>
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