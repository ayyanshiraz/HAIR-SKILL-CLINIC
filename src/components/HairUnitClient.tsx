"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

type HairUnit = {
  id: number;
  name: string;
  price: number;
  priceDisplay?: string;
  description: string;
  specs: string[];
  image: string;
};

export default function HairUnitClient({ 
  hairUnits, 
  hairCareProducts 
}: { 
  hairUnits: HairUnit[], 
  hairCareProducts: HairUnit[] 
}) {
  const { cartItems, cartCount, addToCart, wishlistItems, toggleWishlist } = useCart();
  const [selectedUnit, setSelectedUnit] = useState<HairUnit | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [requirements, setRequirements] = useState<string>("");

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (unit: HairUnit, customReq: string = "", e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }

    const isAlreadyInCart = cartItems.some((item) => item.id === unit.id);
    
    if (isAlreadyInCart) {
      showToast("This item is already in your cart");
      return;
    }
    
    addToCart({
      id: unit.id,
      name: unit.name,
      price: unit.price,
      priceDisplay: unit.priceDisplay,
      image: unit.image,
      requirements: customReq
    });

    showToast("Item added to your cart successfully");
  };

  const handleToggleWishlist = (unit: HairUnit, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    
    const isAlreadySaved = wishlistItems.some((item) => item.id === unit.id);
    
    toggleWishlist({ 
      id: unit.id, 
      name: unit.name, 
      price: unit.price, 
      priceDisplay: unit.priceDisplay, 
      image: unit.image, 
      description: unit.description, 
      specs: unit.specs 
    });
    
    if (isAlreadySaved) {
      showToast("Removed from wishlist");
    } else {
      showToast("Added to wishlist");
    }
  };

  const closeModal = () => {
    setSelectedUnit(null);
    setRequirements("");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 sm:pt-32 pb-20 font-sans relative overflow-x-clip">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 sm:mb-16">
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
              <span>/</span>
              <span className="text-[#772424]">Hair Systems & Hair Units Lahore</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#772424] mb-3 tracking-tight">
              Hair Unit Price in Lahore & Non-Surgical Hair Systems
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
              Explore natural human hair systems, MGM hair system designs, and custom French lace units at Hair Skill Clinic Lahore. Instant volume, zero downtime, and undetectable hairlines.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <Link href="/wishlist" className="flex items-center bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="text-[#772424] font-bold mr-2 text-sm">Wishlist</span>
              <div className="bg-gray-100 text-[#772424] rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs">
                {wishlistItems.length}
              </div>
            </Link>
            
            <Link href="/cart" className="flex items-center bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="text-[#772424] font-bold mr-2 text-sm">Cart</span>
              <div className="bg-[#772424] text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs">
                {cartCount}
              </div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hairUnits.map((unit) => (
            <motion.div 
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedUnit(unit)}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 flex flex-col cursor-pointer relative"
            >
              <button 
                onClick={(e) => handleToggleWishlist(unit, e)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Wishlist toggle"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill={wishlistItems.some(i => i.id === unit.id) ? "#772424" : "none"} 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="#772424" 
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>

              <div className="w-full h-64 bg-gray-100 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-green-600/95 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  Verified Quality
                </div>
                
                <Image 
                  src={unit.image} 
                  alt={unit.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-900 leading-tight pr-4">
                    {unit.name}
                  </h2>
                  <span className="text-xl font-extrabold text-[#772424] shrink-0">
                    PKR {unit.priceDisplay ? unit.priceDisplay : unit.price.toLocaleString()}
                  </span>
                </div>
                
                <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                  {unit.description}
                </p>

                <div className="mb-8 flex-grow">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3">
                    Specifications
                  </h3>
                  <ul className="space-y-2">
                    {unit.specs.map((spec, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700 font-medium">
                        <span className="text-[#772424] mr-2 mt-0.5">✓</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={(e) => handleAddToCart(unit, "", e)}
                  className="w-full py-3.5 rounded-xl bg-[#772424] text-white font-bold text-[15px] hover:bg-[#5a1b1b] active:scale-[0.98] transition-all duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-28 mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#772424] mb-4">
            Hair Patch Care & Accessories
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Maintain your hair systems with specialized medical tapes, safe adhesive removers, and daily scalp care formulas for long-lasting stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hairCareProducts.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedUnit(product)}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 flex flex-col cursor-pointer relative"
            >
              <button 
                onClick={(e) => handleToggleWishlist(product, e)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Wishlist toggle"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill={wishlistItems.some(i => i.id === product.id) ? "#772424" : "none"} 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="#772424" 
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>

              <div className="w-full h-64 bg-gray-100 relative overflow-hidden flex items-center justify-center p-8">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-bold text-gray-900 leading-tight pr-4">
                    {product.name}
                  </h2>
                  <span className="text-xl font-extrabold text-[#772424] shrink-0">
                    PKR {product.priceDisplay ? product.priceDisplay : product.price.toLocaleString()}
                  </span>
                </div>
                
                <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                  {product.description}
                </p>

                <div className="mb-8 flex-grow">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3">
                    Product Details
                  </h3>
                  <ul className="space-y-2">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700 font-medium">
                        <span className="text-[#772424] mr-2 mt-0.5">✓</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={(e) => handleAddToCart(product, "", e)}
                  className="w-full py-3.5 rounded-xl bg-[#772424] text-white font-bold text-[15px] hover:bg-[#5a1b1b] active:scale-[0.98] transition-all duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-28 bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#772424] mb-6 tracking-tight">
              Hair Unit Price in Lahore & Custom Hair System Options
            </h2>
            
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-medium">
              When searching for a dependable hair unit price in Lahore, patients often evaluate the balance between natural density, breathability, and durability. At Hair Skill Clinic, hair systems and non-surgical hair replacement solutions are customized using genuine human hair matched precisely to your native texture, hair color, and age-appropriate hairline.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">MGM Hair System & Monofilament</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  The MGM hair system in Lahore remains popular for individuals seeking extreme longevity and stronger hair holding strength. Monofilament centers with polyurethane perimeters offer ideal resistance against daily humidity and sweat.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ultra-Thin French Lace Systems</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  French and Swiss lace bases deliver total breathability and an invisible front transitional zone, making them the preferred choice for slicked-back or exposed hairline styling.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#772424]/5 border border-[#772424]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 my-10">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#772424] block mb-1">
                  Treatment Guide
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Hair Transplant vs Hair Patch: Which One Fits Your Hair Loss?
                </h3>
                <p className="text-sm text-gray-600 max-w-xl font-medium">
                  Compare surgical restoration with non-surgical hair systems regarding upfront cost, long-term maintenance, density results, and lifestyle flexibility.
                </p>
              </div>
              <Link 
                href="/blogs/hair-transplant/hair-transplant-vs-hair-patch" 
                className="shrink-0 px-6 py-3 bg-[#772424] text-white rounded-xl font-bold text-sm hover:bg-[#5a1b1b] transition-colors shadow-md"
              >
                Read Comparison Guide →
              </Link>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Transparent Factors Behind Hair System Costs
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-4 font-medium">
              Hair unit prices in Pakistan fluctuate depending on the base material (ultra-thin skin, lace, or combined monofilament), knotting technique (single split knotting or v-looped invisible roots), and total crown coverage required. Standard ready-to-wear units start from affordable baseline tiers, while fully personalized custom molds are tailored to exact scalp contours for undetectable daily wear.
            </p>
          </div>
        </section>

      </div>

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-[110] bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl font-medium text-sm flex items-center tracking-wide w-[90vw] md:w-max max-w-md justify-center md:justify-start"
          >
            <span className="text-green-400 mr-2 text-lg">✓</span>
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedUnit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden flex flex-col md:flex-row relative shadow-2xl"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors shadow-sm"
                aria-label="Close details"
              >
                ✕
              </button>

              <div className="w-full md:w-1/2 h-72 md:h-auto bg-gray-100 relative overflow-hidden flex-shrink-0 flex items-center justify-center p-8">
                <Image 
                  src={selectedUnit.image} 
                  alt={selectedUnit.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight pr-4">
                    {selectedUnit.name}
                  </h2>
                  <button 
                    onClick={() => handleToggleWishlist(selectedUnit)}
                    className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors flex-shrink-0"
                    aria-label="Add to wishlist"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill={wishlistItems.some(i => i.id === selectedUnit.id) ? "#772424" : "none"} 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="#772424" 
                      className="w-7 h-7"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                </div>

                <span className="text-3xl font-extrabold text-[#772424] mb-6 block">
                  PKR {selectedUnit.priceDisplay ? selectedUnit.priceDisplay : selectedUnit.price.toLocaleString()}
                </span>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {selectedUnit.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-5">
                    Complete Specifications
                  </h3>
                  <ul className="space-y-4">
                    {selectedUnit.specs.map((spec, index) => (
                      <li key={index} className="flex items-start text-base text-gray-800 font-medium">
                        <span className="text-[#772424] mr-3 mt-0.5 text-lg block">✓</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <label className="block text-sm uppercase tracking-widest font-bold text-gray-400 mb-3">
                    Additional Requirements
                  </label>
                  <textarea
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Add any specific requirements colors or measurements here..."
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#772424] focus:border-transparent resize-none h-24 bg-gray-50 text-black placeholder-gray-500"
                  ></textarea>
                </div>

                <button
                  onClick={() => {
                    handleAddToCart(selectedUnit, requirements);
                    closeModal();
                  }}
                  className="w-full py-4 rounded-xl bg-[#772424] text-white font-bold text-lg hover:bg-[#5a1b1b] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#772424]/30 mt-auto"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}