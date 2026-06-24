"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const bottomLinks = [
    { name: `About`, href: `/about` },
    { name: `Doctors`, href: `/doctors` },
    { name: `Hair Transplant Before & After`, href: `/before-after` },
    { name: `Press Releases`, href: `/press-releases` },
    { name: `F.A.Q.`, href: `/faq` },
    { name: `Price`, href: `/price` },
    { name: `Contact`, href: `/contact` },
  ];

  const socialPlatforms = [
    {
      name: `Facebook`,
      href: `#`,
      icon: (
        <svg className={`w-4 h-4 fill-current shrink-0`} viewBox={`0 0 24 24`}>
          <path d={`M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z`} />
        </svg>
      ),
    },
    {
      name: `Instagram`,
      href: `#`,
      icon: (
        <svg className={`w-4 h-4 fill-current shrink-0`} viewBox={`0 0 24 24`}>
          <path d={`M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z`} />
        </svg>
      ),
    },
    {
      name: `YouTube`,
      href: `#`,
      icon: (
        <svg className={`w-4 h-4 fill-current shrink-0`} viewBox={`0 0 24 24`}>
          <path d={`M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z`} />
        </svg>
      ),
    },
    {
      name: `TikTok`,
      href: `#`,
      icon: (
        <svg className={`w-4 h-4 fill-current shrink-0`} viewBox={`0 0 24 24`}>
          <path d={`M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z`} />
        </svg>
      ),
    },
  ];

  return (
    <footer
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden bg-[#772424] text-slate-100 pt-20 pb-12 border-t border-[#8f2b2b] font-sans selection:bg-white selection:text-[#772424]`}
    >
      {/* Dynamic Ambient Mouse Spotlight */}
      <div
        className={`pointer-events-none absolute -inset-px transition-opacity duration-500 ease-out`}
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.12), transparent 40%)`,
        }}
      />

      {/* Top Subtle Animated Shimmer Bar */}
      <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse`} />

      <div className={`relative max-w-7xl mx-auto px-6 lg:px-8 z-10`}>
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#8f2b2b]/80`}>
          
          {/* Col 1 (Span 4): Elevated Brand Showcase */}
          <div className={`lg:col-span-4 flex flex-col items-start justify-center`}>
            <div className={`group relative flex flex-col items-start cursor-pointer`}>
              <div className={`absolute -inset-4 rounded-3xl bg-white/5 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100`} />
              <img
                src={`/logo.png`}
                alt={`Hair Skill Clinic Logo`}
                className={`relative w-auto h-24 mb-4 object-contain transition-transform duration-500 group-hover:scale-105`}
              />
              <span className={`text-2xl font-black tracking-tight uppercase leading-none drop-shadow-sm`}>
                Hair Skill
              </span>
              <span className={`text-base font-medium tracking-widest uppercase text-red-200 mt-1.5`}>
                Clinic
              </span>
            </div>
          </div>

          {/* Col 2 (Span 5): Tactile Interactive Contact Details */}
          <div className={`lg:col-span-5 flex flex-col space-y-5`}>
            <h3 className={`text-xl font-extrabold tracking-tight text-white uppercase`}>
              Contact Us
            </h3>
            <ul className={`space-y-4 text-base text-red-100 font-medium`}>
              
              <li className={`group/item flex items-start space-x-4 p-2.5 -ml-2.5 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:translate-x-1.5 hover:shadow-lg backdrop-blur-xs cursor-pointer`}>
                <div className={`p-2.5 rounded-xl bg-white/10 text-white transition-all duration-300 group-hover/item:bg-white group-hover/item:text-[#772424] group-hover/item:scale-110 shadow-sm mt-0.5`}>
                  <svg className={`w-5 h-5`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`} strokeWidth={`2.5`}>
                    <path strokeLinecap={`round`} strokeLinejoin={`round`} d={`M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z`} />
                    <path strokeLinecap={`round`} strokeLinejoin={`round`} d={`M15 11a3 3 0 11-6 0 3 3 0 016 0z`} />
                  </svg>
                </div>
                <span className={`transition-colors duration-300 group-hover/item:text-white pt-1 leading-snug`}>
                  Hotel MayFair 4th floor, 50-52, E - III, Commercial Zone, Gulberg III, 54660, Lahore, Punjab.
                </span>
              </li>

              <li className={`group/item flex items-center space-x-4 p-2.5 -ml-2.5 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:translate-x-1.5 hover:shadow-lg backdrop-blur-xs cursor-pointer`}>
                <div className={`p-2.5 rounded-xl bg-white/10 text-white transition-all duration-300 group-hover/item:bg-white group-hover/item:text-[#772424] group-hover/item:scale-110 shadow-sm`}>
                  <svg className={`w-5 h-5`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`} strokeWidth={`2.5`}>
                    <path strokeLinecap={`round`} strokeLinejoin={`round`} d={`M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9`} />
                  </svg>
                </div>
                <span className={`transition-colors duration-300 group-hover/item:text-white`}>
                  info@hairskillclinic.com
                </span>
              </li>

              <li className={`group/item flex items-center space-x-4 p-2.5 -ml-2.5 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:translate-x-1.5 hover:shadow-lg backdrop-blur-xs cursor-pointer`}>
                <div className={`p-2.5 rounded-xl bg-white/10 text-white transition-all duration-300 group-hover/item:bg-white group-hover/item:text-[#772424] group-hover/item:scale-110 shadow-sm`}>
                  <svg className={`w-5 h-5`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`} strokeWidth={`2.5`}>
                    <path strokeLinecap={`round`} strokeLinejoin={`round`} d={`M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z`} />
                  </svg>
                </div>
                <span className={`font-bold tracking-wide transition-colors duration-300 group-hover/item:text-white`}>
                  +92 301 492 3336
                </span>
              </li>

            </ul>
          </div>

          {/* Col 3 (Span 3): The "Kinetic Pill Dock" Socials */}
          <div className={`lg:col-span-3 flex flex-col space-y-5`}>
            <h3 className={`text-xl font-extrabold tracking-tight text-white uppercase`}>
              Follow Us
            </h3>
            <div className={`flex flex-wrap gap-3`}>
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target={`_blank`}
                  rel={`noopener noreferrer`}
                  aria-label={platform.name}
                  className={`group relative flex items-center gap-0 overflow-hidden rounded-full bg-white/10 px-4 py-3.5 text-white backdrop-blur-md transition-all duration-300 ease-out hover:bg-white hover:px-5 hover:text-[#772424] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:-translate-y-1`}
                >
                  <span className={`relative z-10 transition-transform duration-300 group-hover:scale-110`}>
                    {platform.icon}
                  </span>
                  <span className={`max-w-0 overflow-hidden whitespace-nowrap text-xs font-black tracking-wider opacity-0 transition-all duration-300 ease-out group-hover:max-w-[100px] group-hover:pl-2.5 group-hover:opacity-100`}>
                    {platform.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Centered Bottom Stack: Navigation directly above Copyright */}
        <div className={`mt-12 flex flex-col items-center justify-center space-y-6`}>
          
          {/* Floating Glassmorphism Capsule */}
          <nav className={`flex flex-wrap justify-center gap-x-8 gap-y-3 rounded-full bg-black/20 px-8 py-4 backdrop-blur-md border border-white/10 shadow-inner text-sm font-semibold text-red-100`}>
            {bottomLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-white hover:scale-105 transition-all duration-200`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <p className={`text-sm font-semibold text-red-200/80 text-center tracking-wide`}>
            {`© 2026 Hair Skill Clinic. All Rights Reserved.`}
          </p>

        </div>
      </div>
    </footer>
  );
}