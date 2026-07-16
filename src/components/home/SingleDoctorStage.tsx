"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SingleDoctorStage() {
  const doctor = {
    name: `Dr. Mansoor Ahmad`,
    title: `Senior Chief Surgeon and Medical Director`,
    image: `/home/doctor.webp`,
    bio: `Dr Mansoor Ahmad is a highly distinguished surgical specialist with over four decades of operative practice and clinical leadership. Registered permanently with the Pakistan Medical and Dental Council his career represents a lifelong commitment to surgical precision patient safety and advanced medical administration.`
  };

  return (
    <div className={`w-full bg-white text-gray-900 py-28 relative overflow-hidden z-20`}>
      <div className={`max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10`}>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: `-50px` }}
          transition={{ duration: 0.8 }}
          className={`mb-16 text-center flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto`}
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8, filter: `blur(8px)` }}
              whileInView={{ opacity: 1, scale: 1, filter: `blur(0px)` }}
              transition={{ delay: 0.1, duration: 0.7, ease: `easeOut` }}
              className={`text-[#772424] font-black text-xs md:text-sm tracking-[0.3em] uppercase block mb-4`}
            >
              World Class Operations
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: `easeOut` }}
              className={`text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]`}
            >
              Meet Our <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-[#772424] to-[#C5A059]`}>
                Master Craftsman
              </span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: `easeOut` }}
            className={`text-gray-600 max-w-2xl font-medium text-base md:text-lg leading-relaxed mt-2`}
          >
            Our hair restoration clinics are directed exclusively by legendary surgeon who execute every single micro-incision with clinical perfection.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`max-w-4xl mx-auto bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100`}
        >
          <div className={`w-full md:w-2/5 bg-gradient-to-b from-gray-50 to-gray-200/50 relative flex items-stretch`}>
            <Image 
              src={doctor.image} 
              alt={doctor.name} 
              width={600}
              height={800}
              className={`relative z-10 w-full h-full object-cover drop-shadow-xl`}
            />
          </div>
          <div className={`w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center`}>
            <span className={`text-[#772424] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block`}>
              {doctor.title}
            </span>
            <h3 className={`text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight`}>
              {doctor.name}
            </h3>
            <div className={`w-12 h-1 bg-[#C5A059] mb-6`} />
            <p className={`text-gray-600 text-base md:text-lg leading-relaxed mb-8`}>
              {doctor.bio}
            </p>
            <div>
              <Link 
                href={`/doctors-category`} 
                className={`inline-flex items-center justify-center px-8 py-3.5 font-bold text-white bg-[#772424] rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              >
                Read Full Profile
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}