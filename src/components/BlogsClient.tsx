"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

import dynamic from "next/dynamic";
const ConsultationForm = dynamic(() => import("./ConsultationForm"), { ssr: false });


interface BlogCard {
  slug: string;
  title: string;
  date: string;
  previewImage: string;
  summary: string;
  category: string;
}

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

export default function BlogClient({ posts }: { posts: BlogCard[] }) {
  

  const allPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-white px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2 justify-start">
            <Link href="/" className="md:hover:text-[#772424] active:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <span className="text-[#772424]">Blogs</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Blogs
          </h1>
        </div>
      </motion.section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-10 border-b border-gray-100 pb-6">
            <Link 
              href="/blogs" 
              className="px-6 py-2.5 rounded-xl bg-[#772424] text-white font-extrabold text-sm tracking-wider uppercase shadow-lg transition-colors"
            >
              All Blogs
            </Link>
            <Link 
              href="/blogs/hair-transplant" 
              className="px-6 py-2.5 rounded-xl bg-gray-100 text-black md:hover:bg-gray-200 active:bg-gray-200 font-extrabold text-sm tracking-wider uppercase transition-colors"
            >
              Hair Transplant
            </Link>
            <Link 
              href="/blogs/hair-loss" 
              className="px-6 py-2.5 rounded-xl bg-gray-100 text-black md:hover:bg-gray-200 active:bg-gray-200 font-extrabold text-sm tracking-wider uppercase transition-colors"
            >
              Hair Loss
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {allPosts.map((post, idx) => (
                <motion.div 
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 flex flex-col h-full group md:hover:border-[#772424] active:border-[#772424] md:hover:shadow-[0_20px_40px_-15px_rgba(119,36,36,0.15)] active:shadow-[0_20px_40px_-15px_rgba(119,36,36,0.15)] transition-all duration-300 shadow-lg"
                >
                  <Link href={`/blogs/${post.slug}`} className="flex flex-col flex-1 h-full block cursor-pointer">
                    <div className="w-full aspect-[16/10] overflow-hidden relative bg-gray-50 shrink-0 flex items-center justify-center">
                      <img 
                        src={post.previewImage} 
                        alt={post.title} 
                        className="w-full h-full object-contain md:group-hover:scale-105 group-active:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/5 group-active:bg-black/5 transition-colors duration-300" />
                    </div>
                    
                    <div className="p-8 flex flex-col flex-1 justify-between bg-white">
                      <div>
                        <h2 className="text-xl font-extrabold text-[#772424] mb-3 leading-snug md:group-hover:translate-x-0.5 group-active:translate-x-0.5 transition-transform">
                          {post.title}
                        </h2>
                        <p className="text-black text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                          {post.summary}
                        </p>
                      </div>
                      
                      <div className="text-[#772424] font-black text-sm tracking-wider uppercase flex items-center gap-2 md:group-hover:translate-x-1 group-active:translate-x-1 transition-transform w-fit">
                        More <span>→</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="w-full lg:w-1/3 lg:sticky lg:top-32"
            >
              <ConsultationForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}