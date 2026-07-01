"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CookiePolicyClient() {
  const lastUpdated = `June 2026`;

  return (
    <div className={`min-h-screen bg-[#f8f9fa] py-24 lg:py-36 relative z-20 overflow-hidden font-sans`}>
      
      {/* Background Decorative Elements */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 200, repeat: Infinity, ease: `linear` }}
        className={`absolute top-[-10%] right-[-5%] w-[600px] h-[600px] border-[1px] border-[#772424]/10 rounded-full border-dashed pointer-events-none`}
      />
      
      <div className={`max-w-[900px] mx-auto px-6 sm:px-8 relative z-10`}>
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`text-center mb-16`}
        >
          <span className={`text-[#772424] font-bold text-sm md:text-base tracking-[0.2em] uppercase block mb-4`}>
            Legal Information
          </span>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-[#1a202c] tracking-tight mb-6`}>
            Cookie Policy
          </h1>
          <p className={`text-gray-500 font-medium`}>
            Last Updated: {lastUpdated}
          </p>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-10`}
        >
          
          <section>
            <h2 className={`text-2xl font-bold text-[#772424] mb-4`}>1. Introduction</h2>
            <p className={`text-gray-700 leading-relaxed`}>
              This Cookie Policy explains how Hair Skill Clinic uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them as well as your rights to control our use of them. We respect your privacy and are committed to ensuring your online safety.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold text-[#772424] mb-4`}>2. What are cookies?</h2>
            <p className={`text-gray-700 leading-relaxed`}>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work or to work more efficiently as well as to provide reporting information.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold text-[#772424] mb-4`}>3. Why do we use cookies?</h2>
            <p className={`text-gray-700 leading-relaxed`}>
              We use first party and third party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate and we refer to these as essential cookies. Other cookies also enable us to track and target the interests of our visitors to enhance the experience on our website.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold text-[#772424] mb-4`}>4. Types of cookies we use</h2>
            <ul className={`list-disc pl-5 space-y-4 text-gray-700 leading-relaxed marker:text-[#772424]`}>
              <li>
                <strong className={`text-[#1a202c]`}>Essential Cookies:</strong> These are strictly necessary to provide you with services available through our website and to use some of its features such as access to secure areas.
              </li>
              <li>
                <strong className={`text-[#1a202c]`}>Performance and Functionality Cookies:</strong> These are used to enhance the performance and functionality of our website but are non essential to their use. However without these cookies certain functionality may become unavailable.
              </li>
              <li>
                <strong className={`text-[#1a202c]`}>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are or to help us customize our website for you.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={`text-2xl font-bold text-[#772424] mb-4`}>5. How can I control cookies?</h2>
            <p className={`text-gray-700 leading-relaxed`}>
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser you should visit your browser help menu for more information.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold text-[#772424] mb-4`}>6. Contact Us</h2>
            <p className={`text-gray-700 leading-relaxed mb-6`}>
              If you have any questions about our use of cookies or other technologies please contact us using the details below.
            </p>
            <div className={`bg-gray-50 p-6 rounded-xl border border-gray-100`}>
              <p className={`text-[#1a202c] font-bold mb-1`}>Hair Skill Clinic</p>
              <p className={`text-gray-600 mb-1`}>Lahore, Pakistan</p>
              <Link 
                href={`/contact`} 
                className={`text-[#772424] font-bold hover:underline inline-flex items-center gap-2 mt-2`}
              >
                Go to Contact Page
                <span className={`text-xl font-light`}>›</span>
              </Link>
            </div>
          </section>

        </motion.div>

        {/* Back to Home Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={`mt-12 flex justify-center`}
        >
          <Link 
            href={`/`}
            className={`inline-flex items-center justify-center px-10 py-4 font-bold text-white bg-[#772424] rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-xl`}
          >
            Return to Homepage
          </Link>
        </motion.div>

      </div>
    </div>
  );
}