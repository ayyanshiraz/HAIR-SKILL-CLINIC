"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

type HairUnit = {
  id: number;
  name: string;
  price: number;
  description: string;
  specs: string[];
  image: string;
};

export default function HairUnitClient({ hairUnits }: { hairUnits: HairUnit[] }) {
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedUnit, setSelectedUnit] = useState<HairUnit | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setCartCount(cartCount + 1);
    showToast(`Item added to your cart successfully`);
    
    // This line redirects the user to the cart page immediately
    router.push(`/cart`);
  };

  const toggleWishlist = (id: number, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((itemId: number) => itemId !== id));
      showToast(`Removed from wishlist`);
    } else {
      setWishlist([...wishlist, id]);
      showToast(`Added to wishlist`);
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 pt-32 pb-20 font-sans relative`}>
      <div className={`max-w-[1400px] mx-auto px-6 sm:px-8`}>
        
        {/* Header Section */}
        <div className={`flex flex-col md:flex-row justify-between items-center mb-16`}>
          <div>
            <h1 className={`text-4xl md:text-5xl font-extrabold text-[#772424] mb-4`}>
              Premium Hair Units
            </h1>
            <p className={`text-lg text-gray-600 max-w-2xl`}>
              Discover our collection of high quality hair systems at Hair Skill Clinic. Designed for comfort durability and a perfectly natural appearance.
            </p>
          </div>
          
          {/* Cart & Wishlist Icons */}
          <div className={`mt-6 md:mt-0 flex items-center space-x-4`}>
            <div className={`flex items-center bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-200`}>
              <span className={`text-[#772424] font-bold mr-2 text-sm`}>Wishlist</span>
              <div className={`bg-gray-100 text-[#772424] rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs`}>
                {wishlist.length}
              </div>
            </div>
            
            <Link href={`/cart`} className={`flex items-center bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer`}>
              <span className={`text-[#772424] font-bold mr-2 text-sm`}>Cart</span>
              <div className={`bg-[#772424] text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs`}>
                {cartCount}
              </div>
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
          {hairUnits.map((unit) => (
            <motion.div 
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: unit.id * 0.1 }}
              onClick={() => setSelectedUnit(unit)}
              className={`bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 flex flex-col cursor-pointer relative`}
            >
              
              {/* Wishlist Button Overlay */}
              <button 
                onClick={(e) => toggleWishlist(unit.id, e)}
                className={`absolute top-4 right-4 z-10 bg-white/90 backdrop-blur p-2 rounded-full shadow-md hover:bg-white transition-colors`}
              >
                <svg 
                  xmlns={`http://www.w3.org/2000/svg`} 
                  fill={wishlist.includes(unit.id) ? `#772424` : `none`} 
                  viewBox={`0 0 24 24`} 
                  strokeWidth={1.5} 
                  stroke={`#772424`} 
                  className={`w-5 h-5`}
                >
                  <path strokeLinecap={`round`} strokeLinejoin={`round`} d={`M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z`} />
                </svg>
              </button>

              {/* Card Image */}
              <div className={`w-full h-64 bg-gray-100 relative overflow-hidden`}>
                <img 
                  src={unit.image} 
                  alt={unit.name} 
                  className={`w-full h-full object-cover`}
                />
              </div>

              <div className={`p-6 flex flex-col flex-grow`}>
                <div className={`flex justify-between items-start mb-2`}>
                  <h2 className={`text-xl font-bold text-gray-900 leading-tight pr-4`}>
                    {unit.name}
                  </h2>
                  <span className={`text-xl font-extrabold text-[#772424]`}>
                    ${unit.price}
                  </span>
                </div>
                
                <p className={`text-sm text-gray-500 mb-6`}>
                  {unit.description}
                </p>

                <div className={`mb-8 flex-grow`}>
                  <h3 className={`text-xs uppercase tracking-wider font-bold text-gray-400 mb-3`}>
                    Specifications
                  </h3>
                  <ul className={`space-y-2`}>
                    {unit.specs.map((spec, index) => (
                      <li key={index} className={`flex items-start text-sm text-gray-700 font-medium`}>
                        <span className={`text-[#772424] mr-2 mt-0.5`}>✓</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={(e) => handleAddToCart(e)}
                  className={`w-full py-3.5 rounded-xl bg-[#772424] text-white font-bold text-[15px] hover:bg-[#5a1b1b] active:scale-[0.98] transition-all duration-200`}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Custom Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: `-50%` }}
            animate={{ opacity: 1, y: 0, x: `-50%` }}
            exit={{ opacity: 0, y: 20, x: `-50%` }}
            className={`fixed bottom-8 left-1/2 z-[110] bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl font-medium text-sm flex items-center tracking-wide`}
          >
            <span className={`text-green-400 mr-2 text-lg`}>✓</span>
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedUnit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedUnit(null)}
            className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative shadow-2xl`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedUnit(null)}
                className={`absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors shadow-sm`}
              >
                ✕
              </button>

              {/* Modal Image */}
              <div className={`w-full md:w-1/2 h-72 md:h-auto bg-gray-100 relative overflow-hidden`}>
                <img 
                  src={selectedUnit.image} 
                  alt={selectedUnit.name} 
                  className={`w-full h-full object-cover`}
                />
              </div>

              {/* Modal Content */}
              <div className={`w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center`}>
                
                <div className={`flex justify-between items-start mb-2`}>
                  <h2 className={`text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight pr-4`}>
                    {selectedUnit.name}
                  </h2>
                  <button 
                    onClick={() => toggleWishlist(selectedUnit.id)}
                    className={`p-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors flex-shrink-0`}
                  >
                    <svg 
                      xmlns={`http://www.w3.org/2000/svg`} 
                      fill={wishlist.includes(selectedUnit.id) ? `#772424` : `none`} 
                      viewBox={`0 0 24 24`} 
                      strokeWidth={1.5} 
                      stroke={`#772424`} 
                      className={`w-7 h-7`}
                    >
                      <path strokeLinecap={`round`} strokeLinejoin={`round`} d={`M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z`} />
                    </svg>
                  </button>
                </div>

                <span className={`text-3xl font-extrabold text-[#772424] mb-6 block`}>
                  ${selectedUnit.price}
                </span>

                <p className={`text-lg text-gray-600 mb-8 leading-relaxed`}>
                  {selectedUnit.description}
                </p>

                <div className={`mb-10`}>
                  <h3 className={`text-sm uppercase tracking-widest font-bold text-gray-400 mb-5`}>
                    Complete Specifications
                  </h3>
                  <ul className={`space-y-4`}>
                    {selectedUnit.specs.map((spec, index) => (
                      <li key={index} className={`flex items-start text-base text-gray-800 font-medium`}>
                        <span className={`text-[#772424] mr-3 mt-0.5 text-lg block`}>✓</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    handleAddToCart();
                    setSelectedUnit(null);
                  }}
                  className={`w-full py-4 rounded-xl bg-[#772424] text-white font-bold text-lg hover:bg-[#5a1b1b] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#772424]/30`}
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