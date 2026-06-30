"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function CartClient({ initialItems }: { initialItems: CartItem[] }) {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>(initialItems);

  const deliveryCharge = 15.00;
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const taxRate = 0.05; 
  const taxAmount = subtotal * taxRate;
  const finalTotal = subtotal > 0 ? subtotal + taxAmount + deliveryCharge : 0;

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    }));
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleProceedToCheckout = () => {
    // Navigate to the checkout page we created earlier
    router.push("/checkout");
  };

  return (
    <div className={`min-h-screen bg-gray-50 pt-32 pb-20 font-sans`}>
      <div className={`max-w-[1400px] mx-auto px-6 sm:px-8`}>
        
        {/* Header Section */}
        <div className={`mb-12`}>
          <h1 className={`text-4xl md:text-5xl font-extrabold text-[#772424] mb-4`}>
            Your Shopping Cart
          </h1>
          <p className={`text-lg text-gray-600`}>
            Review your carefully selected items from Hair Skill Clinic before proceeding to checkout.
          </p>
        </div>

        <div className={`flex flex-col lg:flex-row gap-10`}>
          
          {/* Cart Items List */}
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
                    className={`bg-white rounded-3xl border border-gray-200 p-6 flex flex-col sm:flex-row items-center gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)]`}
                  >
                    {/* Product Image */}
                    <div className={`w-full sm:w-32 h-32 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0`}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className={`w-full h-full object-cover`}
                      />
                    </div>

                    {/* Product Details */}
                    <div className={`flex-grow flex flex-col w-full`}>
                      <div className={`flex justify-between items-start mb-2`}>
                        <h2 className={`text-xl font-bold text-gray-900 leading-tight`}>
                          {item.name}
                        </h2>
                        <button 
                          onClick={() => handleRemoveItem(item.id)}
                          className={`text-gray-400 hover:text-red-500 transition-colors p-1`}
                        >
                          ✕
                        </button>
                      </div>
                      
                      <span className={`text-2xl font-extrabold text-[#772424] mb-4 block`}>
                        ${item.price}
                      </span>

                      {/* Quantity Controls */}
                      <div className={`flex items-center space-x-4`}>
                        <span className={`text-sm font-bold text-gray-500 uppercase tracking-wider`}>
                          Quantity
                        </span>
                        <div className={`flex items-center bg-gray-50 border border-gray-200 rounded-full`}>
                          <button 
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className={`w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-l-full transition-colors`}
                          >
                            −
                          </button>
                          <span className={`w-12 text-center font-bold text-gray-900`}>
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => handleQuantityChange(item.id, 1)}
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

          {/* Order Summary Panel */}
          <div className={`w-full lg:w-1/3`}>
            <div className={`bg-white rounded-3xl border border-gray-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] sticky top-32`}>
              <h3 className={`text-2xl font-extrabold text-gray-900 mb-8`}>Order Summary</h3>
              
              <div className={`space-y-4 mb-8`}>
                <div className={`flex justify-between items-center text-gray-600 font-medium`}>
                  <span>Subtotal</span>
                  <span className={`text-gray-900`}>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className={`flex justify-between items-center text-gray-600 font-medium`}>
                  <span>Estimated Tax (5 percent)</span>
                  <span className={`text-gray-900`}>${taxAmount.toFixed(2)}</span>
                </div>

                <div className={`flex justify-between items-center text-gray-600 font-medium`}>
                  <span>Delivery Charges</span>
                  <span className={`text-gray-900`}>
                    {subtotal > 0 ? `$${deliveryCharge.toFixed(2)}` : `$0.00`}
                  </span>
                </div>
              </div>

              <div className={`border-t border-gray-200 pt-6 mb-8`}>
                <div className={`flex justify-between items-center`}>
                  <span className={`text-lg font-bold text-gray-900`}>Total</span>
                  <span className={`text-3xl font-extrabold text-[#772424]`}>
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button 
                onClick={handleProceedToCheckout}
                disabled={cartItems.length === 0}
                className={`w-full py-4 rounded-xl bg-[#772424] text-white font-bold text-lg hover:bg-[#5a1b1b] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#772424]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#772424] disabled:active:scale-100`}
              >
                Proceed to Checkout
              </button>

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