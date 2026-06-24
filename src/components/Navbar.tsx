"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1400px] bg-white border border-gray-200 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-[#772424]`}
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

          {/* Links Section */}
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
              className={`relative h-full flex items-center group`}
              onMouseEnter={() => setHoveredItem(`Doctors`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative px-4 py-2 flex items-center justify-center`}>
                {hoveredItem === `Doctors` && (
                  <motion.div layoutId={`active-pill`} className={`absolute inset-0 bg-[#772424]/10 rounded-full`} transition={{ type: `spring`, stiffness: 400, damping: 25 }} />
                )}
                <Link href={`/doctors-category`} className={`relative z-10 transition-colors duration-300`}>Doctors</Link>
              </div>
              <div className={`absolute left-0 top-full hidden group-hover:block w-72 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-4 rounded-xl border border-gray-100`}>
                {[
                  { name: `Dr. Gökay Bilgin`, path: `/doctors/gokay-bilgin` },
                  { name: `Dr. Mehmet Erdoğan`, path: `/doctors/mehmet-erdogan` },
                  { name: `Dr. Firdavs Ahmedov`, path: `/doctors/firdavs-ahmedov` },
                  { name: `Dr. Ali Osman Soluk`, path: `/doctors/ali-osman-soluk` },
                  { name: `Dr. M. Reşat Arpacı`, path: `/doctors/resat-arpaci` }
                ].map((item) => (
                  <Link key={item.path} href={item.path} className={`group/link flex items-center px-8 py-3 text-[15px] font-medium text-gray-600 hover:text-[#772424] hover:bg-gradient-to-r hover:from-[#772424]/5 hover:to-transparent transition-all duration-300`}>
                    <span className={`w-0 overflow-hidden opacity-0 text-[#772424] transition-all duration-300 ease-in-out group-hover/link:w-6 group-hover/link:opacity-100 flex-shrink-0`}>—</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
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
                  <div className={`absolute left-full top-0 hidden group-hover/treatments:block w-72 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-4 rounded-xl border border-gray-100`}>
                    {[
                      { name: `Hair Transplant Turkey`, path: `/treatments/turkey` },
                      { name: `Beard Transplant`, path: `/treatments/beard` },
                      { name: `Moustache Transplant`, path: `/treatments/moustache` },
                      { name: `Eyebrow Transplant`, path: `/treatments/eyebrow` },
                      { name: `Female Hair Transplant`, path: `/treatments/female` },
                      { name: `Afro Hair Transplant`, path: `/treatments/afro` },
                      { name: `Sideburn Transplantation`, path: `/treatments/sideburn` },
                      { name: `Mesotherapy`, path: `/treatments/mesotherapy` },
                      { name: `Ozone Hair Therapy`, path: `/treatments/ozone` },
                      { name: `PRP Hair Treatment`, path: `/treatments/prp` },
                      { name: `Exosome Hair Therapy`, path: `/treatments/exosome` }
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
                      { name: `Manuel Fue Hair Transplant`, path: `/techniques/manuel-fue` },
                      { name: `Body Hair Transplant`, path: `/techniques/body` },
                      { name: `Unshaven Hair Transplant`, path: `/techniques/unshaven` },
                      { name: `Long FUE Hair Transplant`, path: `/techniques/long-fue` },
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
                <Link href={`/blog`} className={`relative z-10 transition-colors duration-300`}>Blogs</Link>
              </div>
              <div className={`absolute left-0 top-full hidden group-hover:block w-60 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-4 rounded-xl border border-gray-100`}>
                {[
                  { name: `Hair Transplant`, path: `/blog/hair-transplant` },
                  { name: `Hair Loss`, path: `/blog/hair-loss` }
                ].map((item) => (
                  <Link key={item.path} href={item.path} className={`group/link flex items-center px-8 py-3 text-[15px] font-medium text-gray-600 hover:text-[#772424] hover:bg-gradient-to-r hover:from-[#772424]/5 hover:to-transparent transition-all duration-300`}>
                    <span className={`w-0 overflow-hidden opacity-0 text-[#772424] transition-all duration-300 ease-in-out group-hover/link:w-6 group-hover/link:opacity-100 flex-shrink-0`}>—</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Standalone Price Link */}
            <div 
              className={`relative h-full flex items-center`}
              onMouseEnter={() => setHoveredItem(`Price`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative px-4 py-2 flex items-center justify-center`}>
                {hoveredItem === `Price` && (
                  <motion.div layoutId={`active-pill`} className={`absolute inset-0 bg-[#772424]/10 rounded-full`} transition={{ type: `spring`, stiffness: 400, damping: 25 }} />
                )}
                <Link href={`/price`} className={`relative z-10 transition-colors duration-300`}>Price</Link>
              </div>
            </div>

          </nav>

          {/* Contact Button */}
          <div className={`hidden lg:flex items-center space-x-4`}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={`/contact`} className={`border-2 border-[#772424] rounded-full px-8 py-2 text-[15px] font-bold hover:bg-[#772424] hover:text-white transition duration-300`}>
                Contact
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.header>
  );
}