"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function BeforeAfterStage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const cases = [
    { image: `/home/before-after/30.webp`, video: `/home/before-after/video1.mp4` },
    { image: `/home/before-after/18.webp`, video: `/home/before-after/video2.mp4` },
    { image: `/home/before-after/31.webp`, video: `/home/before-after/video3.mp4` },
    { image: `/home/before-after/4.webp` },
    { image: `/home/before-after/6.webp` },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.children[0].clientWidth;
      const gap = 32;
      const scrollPosition = currentIndex * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: `smooth`
      });
    }
  }, [currentIndex]);

  return (
    <>
      <div className={`w-full bg-white py-20 relative z-20`}>
        <div className={`max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10`}>
          
          <div className={`text-center mb-16 relative z-10`}>
            <span className={`text-[#772424] font-bold text-sm md:text-base tracking-wide block mb-3`}>
              New Hair New You
            </span>
            <h2 className={`text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#772424] tracking-tight`}>
              Before & After
            </h2>
          </div>

          <div className={`relative w-full`}>
            <div 
              ref={scrollRef}
              className={`flex overflow-x-auto gap-6 md:gap-8 pb-8 pt-4 snap-x snap-mandatory`} 
              style={{ scrollbarWidth: `none`, WebkitOverflowScrolling: `touch` }}
            >
              {cases.map((c, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedCaseIndex(idx)}
                  className={`snap-center shrink-0 w-fit mx-auto bg-[#772424] rounded-3xl overflow-hidden flex flex-col border border-gray-100/10 shadow-lg cursor-pointer group transition-transform duration-300 hover:-translate-y-2`}
                >
                  <div className={`bg-white relative overflow-hidden flex items-center justify-center p-2`}>
                    <Image 
                      src={c.image} 
                      alt={`Grafts Transformation`}
                      width={600}
                      height={600} 
                      className={`h-[300px] md:h-[400px] w-auto object-contain bg-white transition-transform duration-500 md:group-hover:scale-105 block`} 
                    />
                    <div className={`absolute inset-0 bg-black/0 md:group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none`}>
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:scale-75 md:group-hover:scale-100 shadow-xl`}>
                        <svg className={`w-6 h-6 text-[#772424]`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7`} /></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`py-6 px-6 md:px-8 flex items-center justify-between bg-[#772424]`}>
                    <div className={`flex items-center gap-2 min-h-[32px] w-8`}>
                      {c.video && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedVideo(c.video);
                          }}
                          className={`flex items-center justify-center w-8 h-8 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full border border-white/40 transition-transform hover:scale-110 z-10`}
                          aria-label={`Play Video`}
                        >
                          <svg className={`w-4 h-4 text-white ml-0.5`} fill={`currentColor`} viewBox={`0 0 24 24`}><path d={`M8 5v14l11-7z`}/></svg>
                        </button>
                      )}
                    </div>
                    <span className={`text-white font-bold text-lg md:text-xl tracking-wide uppercase text-right leading-none whitespace-nowrap`}>
                      Hair Skill Clinic
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className={`flex justify-center items-center gap-3 mt-4`}>
              {[0, 1, 2, 3, 4].map((idx) => {
                const isActive = currentIndex === idx;
                return (
                  <div 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ease-out ${isActive ? `w-8 bg-[#772424]` : `w-2.5 bg-gray-300 hover:bg-gray-400`}`}
                  />
                )
              })}
            </div>
          </div>
          
          <div className={`flex justify-center mt-12`}>
            <Link 
              href={`/before-after`} 
              className={`inline-flex items-center justify-center px-12 py-4 font-bold text-white bg-[#772424] rounded-full transition-all duration-300 hover:scale-[1.03] hover:bg-[#5a1b1b] shadow-md`}
            >
              <span className={`text-lg tracking-wide`}>Before & After</span>
            </Link>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {selectedCaseIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12`}
          >
            <div className={`absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm`} onClick={() => setSelectedCaseIndex(null)} />
            
            <div className={`absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-center z-20 pointer-events-none`}>
              <span className={`text-gray-400 font-bold tracking-[0.2em] text-sm`}>{selectedCaseIndex + 1} / {cases.length}</span>
              <button 
                onClick={() => setSelectedCaseIndex(null)} 
                className={`text-gray-400 hover:text-white transition-colors pointer-events-auto w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-[#772424] rounded-full backdrop-blur-md`}
              >
                <svg className={`w-6 h-6`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M6 18L18 6M6 6l12 12`} /></svg>
              </button>
            </div>

            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedCaseIndex((prev: number | null) => prev === 0 ? cases.length - 1 : prev! - 1); 
              }}
              className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-[#772424] backdrop-blur-md rounded-full transition-all z-20`}
            >
              <svg className={`w-6 h-6 md:w-8 md:h-8`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M15 19l-7-7 7-7`} /></svg>
            </button>
            
            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedCaseIndex((prev: number | null) => prev === cases.length - 1 ? 0 : prev! + 1); 
              }}
              className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-[#772424] backdrop-blur-md rounded-full transition-all z-20`}
            >
              <svg className={`w-6 h-6 md:w-8 md:h-8`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M9 5l7 7-7 7`} /></svg>
            </button>

            <motion.div 
              key={selectedCaseIndex}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: `spring`, damping: 25, stiffness: 300 }}
              className={`relative w-fit max-w-[95vw] bg-[#772424] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 mx-auto`}
            >
              <div className={`bg-white relative flex justify-center items-center p-2 md:p-4`}>
                <Image 
                  src={cases[selectedCaseIndex].image} 
                  alt={`Grafts Transformation`}
                  width={1200}
                  height={1200} 
                  className={`w-auto h-auto max-h-[50vh] md:max-h-[60vh] object-contain block`} 
                />
              </div>
              
              <div className={`py-6 px-6 md:px-10 flex items-center justify-end bg-[#772424]`}>
                <span className={`text-white font-bold text-lg md:text-xl tracking-wide uppercase text-right leading-none whitespace-nowrap`}>
                  Hair Skill Clinic
                </span>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 lg:p-12`}
          >
            <div className={`absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm`} onClick={() => setSelectedVideo(null)} />
            
            <div className={`absolute top-0 right-0 p-4 md:p-8 z-20`}>
              <button 
                onClick={() => setSelectedVideo(null)} 
                className={`text-gray-400 hover:text-white transition-colors w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-[#772424] rounded-full backdrop-blur-md`}
              >
                <svg className={`w-6 h-6`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}><path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={2} d={`M6 18L18 6M6 6l12 12`} /></svg>
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: `spring`, damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10`}
            >
              <video 
                src={selectedVideo} 
                controls 
                autoPlay 
                className={`w-full h-auto max-h-[80vh] object-contain`}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}