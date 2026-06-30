"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay for a smoother user experience on first load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    // You can initialize your analytics scripts here
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
    // Ensure tracking scripts remain disabled
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 pointer-events-none"
        >
          {/* 
            AMENDMENT: Changed 'max-w-5xl' to 'w-full max-w-[95%] 2xl:max-w-7xl' 
            to significantly increase the width across all large screens.
          */}
          <div className="w-full max-w-[95%] 2xl:max-w-7xl mx-auto pointer-events-auto bg-[#111111] border border-gray-800 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white font-bold mb-2">We value your privacy</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                <Link href="/cookie-policy" className="text-white underline hover:text-gray-300 transition-colors">
                  Cookie Policy
                </Link>{" "}
                for more details.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={rejectCookies}
                className="px-6 py-3 text-sm font-bold text-gray-400 uppercase tracking-wider border border-gray-800 rounded hover:bg-gray-900 hover:text-white transition-colors w-full sm:w-auto text-center"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-3 text-sm font-bold text-black bg-white uppercase tracking-wider rounded hover:bg-gray-200 transition-colors w-full sm:w-auto text-center"
              >
                Accept All
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}