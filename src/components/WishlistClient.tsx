"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function WishlistClient() {
  const { wishlistItems, toggleWishlist, addToCart, cartItems } = useCart();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (item: any) => {
    const isAlreadyInCart = cartItems.some((cartItem) => cartItem.id === item.id);
    
    if (isAlreadyInCart) {
      showToast(`This unit is already in your cart`);
      return;
    }

    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      requirements: ``
    });

    showToast(`Added to cart successfully`);
  };

  return (
    <div className={`min-h-screen bg-gray-50 pt-32 pb-20 font-sans relative`}>
      <div className={`max-w-[1400px] mx-auto px-6 sm:px-8`}>
        
        <div className={`mb-12 flex flex-col md:flex-row md:items-center justify-between`}>
          <div>
            <h1 className={`text-4xl md:text-5xl font-extrabold text-[#772424] mb-4`}>
              Your Saved Units
            </h1>
            <p className={`text-lg text-gray-600`}>
              Keep track of the hair units you love. Add them to your cart whenever you are ready.
            </p>
          </div>
          <div className={`mt-6 md:mt-0`}>
            <Link href={`/hair-unit`} className={`inline-flex items-center text-[#772424] font-bold hover:underline transition-all`}>
              ← Back to Hair Units
            </Link>
          </div>
        </div>

        {wishlistItems.length === 0 ? (
          <div className={`bg-white rounded-3xl border border-gray-200 p-12 text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] max-w-3xl mx-auto`}>
            <div className={`w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6`}>
              <svg xmlns={`http://www.w3.org/2000/svg`} fill={`none`} viewBox={`0 0 24 24`} strokeWidth={1.5} stroke={`#d1d5db`} className={`w-10 h-10`}>
                <path strokeLinecap={`round`} strokeLinejoin={`round`} d={`M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z`} />
              </svg>
            </div>
            <h2 className={`text-2xl font-bold text-gray-900 mb-2`}>Your wishlist is empty</h2>
            <p className={`text-gray-500 mb-8`}>You have not saved any hair units yet. Explore our collection to find the perfect fit.</p>
            <Link href={`/hair-unit`} className={`inline-block bg-[#772424] text-white rounded-full px-8 py-3.5 font-bold hover:bg-[#5a1b1b] transition duration-300 shadow-md`}>
              Browse Hair Units
            </Link>
          </div>
        ) : (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
            <AnimatePresence>
              {wishlistItems.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 flex flex-col relative`}
                >
                  <button 
                    onClick={() => toggleWishlist(item)}
                    className={`absolute top-4 right-4 z-10 bg-white/90 backdrop-blur p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors`}
                  >
                    <svg xmlns={`http://www.w3.org/2000/svg`} fill={`#772424`} viewBox={`0 0 24 24`} strokeWidth={1.5} stroke={`#772424`} className={`w-5 h-5`}>
                      <path strokeLinecap={`round`} strokeLinejoin={`round`} d={`M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z`} />
                    </svg>
                  </button>

                  <div className={`w-full h-64 bg-gray-100 relative overflow-hidden`}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className={`w-full h-full object-cover`}
                    />
                  </div>

                  <div className={`p-6 flex flex-col flex-grow`}>
                    <div className={`flex justify-between items-start mb-2`}>
                      <h2 className={`text-xl font-bold text-gray-900 leading-tight pr-4`}>
                        {item.name}
                      </h2>
                      <span className={`text-xl font-extrabold text-[#772424]`}>
                        PKR {item.price.toLocaleString()}
                      </span>
                    </div>

                    <p className={`text-sm text-gray-500 mb-6`}>
                      {item.description}
                    </p>

                    <div className={`mb-8 flex-grow`}>
                      <h3 className={`text-xs uppercase tracking-wider font-bold text-gray-400 mb-3`}>
                        Specifications
                      </h3>
                      <ul className={`space-y-2`}>
                        {item.specs?.map((spec: string, i: number) => (
                          <li key={i} className={`flex items-start text-sm text-gray-700 font-medium`}>
                            <span className={`text-[#772424] mr-2 mt-0.5`}>✓</span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      onClick={() => handleAddToCart(item)}
                      className={`w-full mt-auto py-3.5 rounded-xl bg-[#772424] text-white font-bold text-[15px] hover:bg-[#5a1b1b] active:scale-[0.98] transition-all duration-200`}
                    >
                      Move to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

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
    </div>
  );
}