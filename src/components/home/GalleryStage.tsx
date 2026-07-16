"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryStage() {
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(null);

  const galleryImages = [
    `/home/clinic/1.webp`,
    `/home/clinic/2.webp`,
    `/home/clinic/3.webp`,
    `/home/clinic/5.webp`,
    `/home/clinic/6.webp`
  ];

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: `-50px` }}
        transition={{ duration: 0.8, ease: `easeOut` }}
        className={`w-full bg-white py-24 relative z-20`}
      >
        <div className={`max-w-[1200px] mx-auto px-6 sm:px-8 relative`}>
          
          <div className={`text-center mb-16`}>
            <span className={`text-[#772424] font-bold text-sm md:text-base tracking-wide block mb-3`}>
              Gallery
            </span>
            <h2 className={`text-4xl md:text-5xl lg:text-[56px] font-black text-[#1a202c] tracking-tight`}>
              Our Clinic
            </h2>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6`}>
            
            <div 
              className={`cursor-pointer overflow-hidden rounded-3xl h-[300px] md:h-[400px] lg:h-[500px] relative group`} 
              onClick={() => setSelectedGalleryIndex(0)}
            >
              <Image 
                src={galleryImages[0]} 
                alt={`Clinic View 1`} 
                width={800}
                height={800}
                className={`w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105`} 
              />
              <div className={`absolute inset-0 bg-black/0 md:group-hover:bg-black/10 transition-colors duration-300`} />
            </div>

            <div className={`grid grid-cols-2 gap-4 md:gap-6 h-[300px] md:h-[400px] lg:h-[500px]`}>
              {galleryImages.slice(1).map((img, idx) => (
                <div 
                  key={idx} 
                  className={`cursor-pointer overflow-hidden rounded-3xl h-full relative group`} 
                  onClick={() => setSelectedGalleryIndex(idx + 1)}
                >
                  <Image 
                    src={img} 
                    alt={`Clinic View ${idx + 2}`}
                    width={400}
                    height={400} 
                    className={`w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105`} 
                  />
                  <div className={`absolute inset-0 bg-black/0 md:group-hover:bg-black/10 transition-colors duration-300`} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedGalleryIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className={`fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-12`}
          >
            <div className={`absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-sm`} onClick={() => setSelectedGalleryIndex(null)} />
            
            <div className={`absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-center z-30 pointer-events-none`}>
              <span className={`text-gray-400 font-bold tracking-[0.2em] text-sm`}>
                {selectedGalleryIndex + 1} / {galleryImages.length}
              </span>
              <button 
                onClick={() => setSelectedGalleryIndex(null)} 
                className={`text-gray-400 hover:text-white transition-colors pointer-events-auto w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-[#772424] rounded-full backdrop-blur-md`}
              >
                <svg className={`w-6 h-6`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M6 18L18 6M6 6l12 12`} /></svg>
              </button>
            </div>

            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedGalleryIndex(prev => prev === 0 ? galleryImages.length - 1 : prev! - 1); 
              }}
              className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-[#772424] backdrop-blur-md rounded-full transition-all z-30`}
            >
              <svg className={`w-6 h-6 md:w-8 md:h-8`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M15 19l-7-7 7-7`} /></svg>
            </button>
            
            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedGalleryIndex(prev => prev === galleryImages.length - 1 ? 0 : prev! + 1); 
              }}
              className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-[#772424] backdrop-blur-md rounded-full transition-all z-30`}
            >
              <svg className={`w-6 h-6 md:w-8 md:h-8`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M9 5l7 7-7 7`} /></svg>
            </button>

            <motion.div 
              key={selectedGalleryIndex}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: `spring`, damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-5xl rounded-2xl md:rounded-3xl overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20`}
            >
              <div className={`w-full relative flex justify-center items-center`}>
                <Image 
                  src={galleryImages[selectedGalleryIndex]} 
                  alt={`Clinic Gallery Image`}
                  width={1200}
                  height={900} 
                  className={`w-full h-auto max-h-[85vh] object-contain`} 
                />
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}