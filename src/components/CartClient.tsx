"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function CartClient() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const taxRate = 0.05; 
  const taxAmount = subtotal * taxRate;
  const finalTotal = subtotal > 0 ? subtotal + taxAmount : 0; 

  const hasRangeItems = cartItems.some(item => item.priceDisplay);

  return (
    <div className={`min-h-screen bg-gray-50 pt-32 pb-20 font-sans`}>
      <div className={`max-w-[1400px] mx-auto px-6 sm:px-8`}>
        
        <div className={`mb-12`}>
          <h1 className={`text-4xl md:text-5xl font-extrabold text-[#772424] mb-4`}>
            Your Shopping Cart
          </h1>
          <p className={`text-lg text-gray-600`}>
            Review your carefully selected items from Hair Skill Clinic before proceeding to checkout.
          </p>
        </div>

        <div className={`flex flex-col lg:flex-row gap-10`}>
          
          <div className={`w-full lg:w-2/3 flex flex-col space-y-6`}>
            <AnimatePresence>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-white rounded-3xl border border-gray-200 p-6 flex flex-col sm:flex-row items-start gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)]`}
                  >
                    <div className={`w-full sm:w-32 h-32 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0`}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className={`w-full h-full object-cover`}
                      />
                    </div>

                    <div className={`flex-grow flex flex-col w-full`}>
                      <div className={`flex justify-between items-start mb-1`}>
                        <h2 className={`text-xl font-bold text-gray-900 leading-tight`}>
                          {item.name}
                        </h2>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className={`text-gray-400 hover:text-red-500 transition-colors p-1`}
                        >
                          ✕
                        </button>
                      </div>

                      {item.requirements && (
                        <div className={`bg-gray-50 border border-gray-100 rounded-xl p-3 mb-3`}>
                          <span className={`text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1`}>Requirements</span>
                          <p className={`text-sm text-gray-700`}>{item.requirements}</p>
                        </div>
                      )}
                      
                      <span className={`text-2xl font-extrabold text-[#772424] mb-4 block mt-auto`}>
                        PKR {item.priceDisplay ? item.priceDisplay : item.price.toLocaleString()}
                      </span>

                      <div className={`flex items-center space-x-4`}>
                        <span className={`text-sm font-bold text-gray-500 uppercase tracking-wider`}>
                          Quantity
                        </span>
                        <div className={`flex items-center bg-gray-50 border border-gray-200 rounded-full`}>
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className={`w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-l-full transition-colors`}
                          >
                            −
                          </button>
                          <span className={`w-12 text-center font-bold text-gray-900`}>
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className={`w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-r-full transition-colors`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className={`bg-white rounded-3xl border border-gray-200 p-12 text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)]`}>
                  <p className={`text-xl font-bold text-gray-400 mb-6`}>Your cart is currently empty</p>
                  <Link href={`/hair-unit`} className={`inline-block border-2 border-[#772424] text-[#772424] rounded-full px-8 py-3 font-bold hover:bg-[#772424] hover:text-white transition duration-300`}>
                    Continue Shopping
                  </Link>
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className={`w-full lg:w-1/3`}>
            <div className={`bg-white rounded-3xl border border-gray-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] sticky top-32`}>
              <h3 className={`text-2xl font-extrabold text-gray-900 mb-8`}>Order Summary</h3>
              
              <div className={`space-y-4 mb-8`}>
                <div className={`flex justify-between items-center text-gray-600 font-medium`}>
                  <span>Base Subtotal</span>
                  <span className={`text-gray-900`}>PKR {subtotal.toLocaleString()}</span>
                </div>
                
                <div className={`flex justify-between items-center text-gray-600 font-medium`}>
                  <span>Estimated Tax (5 percent)</span>
                  <span className={`text-gray-900`}>PKR {taxAmount.toLocaleString()}</span>
                </div>

                <div className={`flex justify-between items-center text-gray-600 font-medium`}>
                  <span>Delivery Charges</span>
                  <span className={`text-gray-900 font-bold bg-yellow-100 px-3 py-1 rounded-full text-xs`}>
                    {subtotal > 0 ? `Calculated post order` : `PKR 0`}
                  </span>
                </div>

                <div className={`flex justify-between items-center text-green-600 font-medium`}>
                  <span>Special Discount</span>
                  <span className={`font-bold bg-green-100 px-3 py-1 rounded-full text-xs`}>
                    {subtotal > 0 ? `Applied on WhatsApp` : `PKR 0`}
                  </span>
                </div>
              </div>

              <div className={`border-t border-gray-200 pt-6 mb-8`}>
                <div className={`flex justify-between items-center mb-2`}>
                  <div className={`flex flex-col`}>
                    <span className={`text-lg font-bold text-gray-900`}>Estimated Total</span>
                    <span className={`text-xs text-gray-500`}>Excluding shipping & discount</span>
                  </div>
                  <span className={`text-2xl lg:text-3xl font-extrabold text-[#772424]`}>
                    PKR {finalTotal.toLocaleString()}
                  </span>
                </div>
                {hasRangeItems && (
                  <p className={`text-xs text-[#772424] mt-2 font-medium bg-red-50 p-2 rounded-lg`}>
                    Note: Your cart contains items with price ranges. The total above uses the base minimum price. Final exact pricing will be verified via WhatsApp.
                  </p>
                )}
              </div>

              <Link 
                href={`/checkout`}
                className={`w-full py-4 rounded-xl bg-[#772424] text-white font-bold text-lg hover:bg-[#5a1b1b] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#772424]/30 block text-center ${cartItems.length === 0 ? `opacity-50 pointer-events-none` : ``}`}
              >
                Proceed to Checkout
              </Link>

              <div className={`mt-6 text-center`}>
                <Link href={`/hair-unit`} className={`text-sm font-bold text-gray-400 hover:text-[#772424] transition-colors`}>
                  ← Back to Shopping
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}