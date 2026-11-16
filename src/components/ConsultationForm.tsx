"use client";

import React, { useState } from "react";
import Link from "next/link";
import { countries, type Country } from "../data/countries";

export default function ConsultationForm() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 relative z-10 w-full">
      <h2 className="text-[#772424] text-xl font-extrabold text-center mb-8 tracking-wide">
        GET FREE CONSULTATION
      </h2>
      
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="relative flex items-center border-b border-gray-300 pb-2 transition-colors focus-within:border-[#772424]">
          <svg className="w-5 h-5 text-gray-400 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="w-full text-sm outline-none bg-transparent text-gray-800 placeholder-gray-500 font-medium" />
        </div>

        <div className="relative flex items-center border-b border-gray-300 pb-2 transition-colors focus-within:border-[#772424]">
          <svg className="w-5 h-5 text-gray-400 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full text-sm outline-none bg-transparent text-gray-800 placeholder-gray-500 font-medium" />
        </div>

        <div className="relative flex items-center border-b border-gray-300 pb-2 transition-colors focus-within:border-[#772424]">
          <div className="relative mr-4">
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 cursor-pointer text-sm font-bold text-[#772424] select-none whitespace-nowrap">
              <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={selectedCountry.name} width="20" height="15" loading="lazy" className="w-5 object-contain" />
              {selectedCountry.dial}
              <span className="text-[10px] ml-1">▼</span>
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 shadow-xl rounded-lg z-50">
                {countries.map((country: Country, idx: number) => (
                  <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex items-center justify-between text-gray-800">
                    <div className="flex items-center gap-2">
                      <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} width="20" height="15" loading="lazy" className="w-5 object-contain" />
                      <span className="font-bold">{country.code}</span>
                      <span className="text-xs text-gray-400 hidden sm:inline truncate max-w-[80px]">{country.name}</span>
                    </div>
                    <span className="text-gray-500 font-medium">{country.dial}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full text-sm outline-none bg-transparent text-gray-800 font-medium" />
        </div>

        <div className="flex items-center gap-2 mt-2">
          <input type="checkbox" id="privacy" className="w-4 h-4 accent-[#772424] rounded cursor-pointer shrink-0" required defaultChecked />
          <label htmlFor="privacy" className="text-[13px] text-gray-600 cursor-pointer leading-tight">
            I have read and accept the <Link href="/privacy-policy" className="text-[#772424] font-bold hover:underline">Privacy Policy.</Link>
          </label>
        </div>

        <button type="submit" className="w-full bg-[#772424] text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 shadow-lg hover:bg-[#5a1b1b] hover:scale-[1.02] active:scale-[0.98] transition-all mt-2">
          Submit
          <span className="text-xl font-light">›</span>
        </button>
      </form>
    </div>
  );
}