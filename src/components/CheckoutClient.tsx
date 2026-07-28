"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CheckoutClient() {
  const { cartItems } = useCart();
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const taxRate = 0.05; 
  const taxAmount = subtotal * taxRate;
  const finalTotal = subtotal > 0 ? subtotal + taxAmount : 0;

  const hasRangeItems = cartItems.some(item => item.priceDisplay);

  const [formData, setFormData] = useState({
    firstName: ``,
    lastName: ``,
    email: ``,
    address: ``,
    city: ``,
    zipCode: ``,
    requestDiscount: false,
    paymentMethod: `online-link`
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === `checkbox` ? checked : value 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const paymentLabels: Record<string, string> = {
      "online-link": `Credit Card / PayPal (Secure Link)`,
      "bank-transfer": `Direct Bank Transfer`,
      "cod": `Cash on Delivery (Pakistan Only)`
    };

    let orderMessage = `New Order from Hair Skill Clinic\n\n` +
      `Customer Details:\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Address: ${formData.address}, ${formData.city}, ${formData.zipCode}\n` +
      `Payment Method Preference: ${paymentLabels[formData.paymentMethod]}\n`;
      
    if (formData.requestDiscount) {
      orderMessage += `\n*** CUSTOMER REQUESTED A SPECIAL DISCOUNT ***\n`;
    }

    orderMessage += `\nItems Ordered:\n`;

    cartItems.forEach(item => {
      const priceText = item.priceDisplay ? item.priceDisplay : item.price.toLocaleString();
      orderMessage += `- ${item.quantity}x ${item.name} (PKR ${priceText})\n`;
      if (item.requirements) {
        orderMessage += `  Requirements: ${item.requirements}\n`;
      }
    });

    orderMessage += `\nOrder Summary:\n` +
      `Estimated Base Subtotal: PKR ${subtotal.toLocaleString()}\n` +
      `Estimated Tax: PKR ${taxAmount.toLocaleString()}\n` +
      `Delivery: Pending Address Review\n` +
      `Discount: Pending (To be applied by Manager)\n` +
      `Estimated Base Total: PKR ${finalTotal.toLocaleString()}`;

    if (hasRangeItems) {
      orderMessage += `\n\nNote: Cart contains variable price range items. Please confirm final exact total with the customer.`;
    }

    const whatsappUrl = `https://wa.me/923014923336?text=${encodeURIComponent(orderMessage)}`;
    
    window.open(whatsappUrl, `_blank`);
  };

  return (
    <div className={`min-h-screen bg-gray-50 pt-32 pb-20 font-sans`}>
      <div className={`max-w-[1400px] mx-auto px-6 sm:px-8`}>
        
        <div className={`mb-12 text-center md:text-left`}>
          <h1 className={`text-4xl md:text-5xl font-extrabold text-[#772424] mb-4`}>
            Secure Checkout
          </h1>
          <p className={`text-lg text-gray-600`}>
            Please enter your details below to place your order request.
          </p>
        </div>

        <div className={`flex flex-col lg:flex-row gap-10`}>
          
          <div className={`w-full lg:w-2/3`}>
            <form onSubmit={handleSubmit} className={`bg-white rounded-3xl border border-gray-200 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)]`}>
              
              <h2 className={`text-2xl font-bold text-gray-900 mb-6`}>Billing and Shipping Details</h2>
              
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-6`}>
                <div>
                  <label className={`block text-sm font-bold text-gray-700 mb-2`} htmlFor={`firstName`}>First Name</label>
                  <input 
                    type={`text`} 
                    id={`firstName`} 
                    name={`firstName`} 
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#772424] focus:border-transparent transition-all`}
                    placeholder={`John`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-bold text-gray-700 mb-2`} htmlFor={`lastName`}>Last Name</label>
                  <input 
                    type={`text`} 
                    id={`lastName`} 
                    name={`lastName`} 
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#772424] focus:border-transparent transition-all`}
                    placeholder={`Doe`}
                  />
                </div>
              </div>

              <div className={`mb-6`}>
                <label className={`block text-sm font-bold text-gray-700 mb-2`} htmlFor={`email`}>Email Address</label>
                <input 
                  type={`email`} 
                  id={`email`} 
                  name={`email`} 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#772424] focus:border-transparent transition-all`}
                  placeholder={`john@example.com`}
                />
              </div>

              <div className={`mb-6`}>
                <label className={`block text-sm font-bold text-gray-700 mb-2`} htmlFor={`address`}>Full Street Address</label>
                <input 
                  type={`text`} 
                  id={`address`} 
                  name={`address`} 
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#772424] focus:border-transparent transition-all`}
                  placeholder={`123 Main St, Apt 4B`}
                />
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-10`}>
                <div>
                  <label className={`block text-sm font-bold text-gray-700 mb-2`} htmlFor={`city`}>City and Country</label>
                  <input 
                    type={`text`} 
                    id={`city`} 
                    name={`city`} 
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#772424] focus:border-transparent transition-all`}
                    placeholder={`Lahore, Pakistan`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-bold text-gray-700 mb-2`} htmlFor={`zipCode`}>ZIP / Postal Code</label>
                  <input 
                    type={`text`} 
                    id={`zipCode`} 
                    name={`zipCode`} 
                    required
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#772424] focus:border-transparent transition-all`}
                    placeholder={`54000`}
                  />
                </div>
              </div>

              <div className={`border-t border-gray-200 pt-8 mb-10`}>
                <label className={`flex items-start p-5 border border-green-200 bg-green-50 rounded-xl cursor-pointer transition-all hover:bg-green-100`}>
                  <div className={`flex items-center h-5 mt-1`}>
                    <input 
                      type={`checkbox`} 
                      name={`requestDiscount`} 
                      checked={formData.requestDiscount}
                      onChange={handleInputChange}
                      className={`w-5 h-5 text-green-600 rounded focus:ring-green-500`}
                    />
                  </div>
                  <div className={`ml-4 flex flex-col`}>
                    <span className={`font-bold text-green-900`}>Request Special Discount</span>
                    <span className={`text-sm text-green-700 mt-1 leading-relaxed`}>Check this box to request our manager for a special discount on your total bill via WhatsApp.</span>
                  </div>
                </label>
              </div>

              <div className={`border-t border-gray-200 pt-8 mb-6`}>
                <h2 className={`text-2xl font-bold text-gray-900 mb-2`}>Payment Method</h2>
                <p className={`text-sm text-gray-500`}>Select how you would prefer to pay once your order is reviewed.</p>
              </div>
              
              <div className={`space-y-4 mb-8`}>
                <label className={`flex items-start p-5 border-2 rounded-xl cursor-pointer transition-all ${formData.paymentMethod === `online-link` ? `border-[#772424] bg-[#772424]/5` : `border-gray-200 hover:border-gray-300`}`}>
                  <div className={`flex items-center h-5 mt-1`}>
                    <input 
                      type={`radio`} 
                      name={`paymentMethod`} 
                      value={`online-link`} 
                      checked={formData.paymentMethod === `online-link`}
                      onChange={handleInputChange}
                      className={`w-5 h-5 text-[#772424] focus:ring-[#772424]`}
                    />
                  </div>
                  <div className={`ml-4 flex flex-col`}>
                    <span className={`font-bold text-gray-900`}>Credit Card / PayPal</span>
                    <span className={`text-sm text-gray-500 mt-1 leading-relaxed`}>A secure payment link will be sent to you via WhatsApp after your shipping is calculated.</span>
                  </div>
                </label>

                <label className={`flex items-start p-5 border-2 rounded-xl cursor-pointer transition-all ${formData.paymentMethod === `bank-transfer` ? `border-[#772424] bg-[#772424]/5` : `border-gray-200 hover:border-gray-300`}`}>
                  <div className={`flex items-center h-5 mt-1`}>
                    <input 
                      type={`radio`} 
                      name={`paymentMethod`} 
                      value={`bank-transfer`} 
                      checked={formData.paymentMethod === `bank-transfer`}
                      onChange={handleInputChange}
                      className={`w-5 h-5 text-[#772424] focus:ring-[#772424]`}
                    />
                  </div>
                  <div className={`ml-4 flex flex-col`}>
                    <span className={`font-bold text-gray-900`}>Direct Bank Transfer</span>
                    <span className={`text-sm text-gray-500 mt-1 leading-relaxed`}>Transfer directly to our local or international bank accounts. Details provided upon review.</span>
                  </div>
                </label>
                
                <label className={`flex items-start p-5 border-2 rounded-xl cursor-pointer transition-all ${formData.paymentMethod === `cod` ? `border-[#772424] bg-[#772424]/5` : `border-gray-200 hover:border-gray-300`}`}>
                  <div className={`flex items-center h-5 mt-1`}>
                    <input 
                      type={`radio`} 
                      name={`paymentMethod`} 
                      value={`cod`} 
                      checked={formData.paymentMethod === `cod`}
                      onChange={handleInputChange}
                      className={`w-5 h-5 text-[#772424] focus:ring-[#772424]`}
                    />
                  </div>
                  <div className={`ml-4 flex flex-col`}>
                    <span className={`font-bold text-gray-900`}>Cash on Delivery (COD)</span>
                    <span className={`text-sm text-gray-500 mt-1 leading-relaxed`}>Pay with cash upon delivery. Available for addresses within Pakistan only.</span>
                  </div>
                </label>
              </div>

            </form>
          </div>

          <div className={`w-full lg:w-1/3`}>
            <div className={`bg-white rounded-3xl border border-gray-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] sticky top-32`}>
              
              <div className={`bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8`}>
                <p className={`text-sm text-blue-900 leading-relaxed font-medium`}>
                  <span className={`font-extrabold block mb-1`}>Shipping & Discount Notice</span>
                  Because delivery rates vary based on your location and discounts are applied manually, your final cost will be verified. Once submitted, our team will contact you via WhatsApp with the exact delivery charges and your discounted total.
                </p>
              </div>

              <h3 className={`text-2xl font-extrabold text-gray-900 mb-6`}>Order Summary</h3>
              
              {/* --- NEW SECTION: ITEMS LIST IN CHECKOUT --- */}
              <div className={`mb-6`}>
                <h4 className={`text-xs font-bold text-gray-400 uppercase tracking-wider mb-3`}>Items in your cart</h4>
                <div className={`space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-100`}>
                  {cartItems.map((item) => (
                    <div key={item.id} className={`flex justify-between items-start text-sm`}>
                      <span className={`font-bold text-gray-800 pr-4`}>
                        {item.quantity}x {item.name}
                      </span>
                      <span className={`font-bold text-[#772424] text-right whitespace-nowrap`}>
                        PKR {item.priceDisplay ? item.priceDisplay : item.price.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* ----------------------------------------- */}

              <div className={`space-y-4 mb-8`}>
                <div className={`flex justify-between items-center text-gray-600 font-medium`}>
                  <span>Estimated Base Subtotal</span>
                  <span className={`text-gray-900`}>PKR {subtotal.toLocaleString()}</span>
                </div>
                
                <div className={`flex justify-between items-center text-gray-600 font-medium`}>
                  <span>Estimated Tax (5 percent)</span>
                  <span className={`text-gray-900`}>PKR {taxAmount.toLocaleString()}</span>
                </div>

                <div className={`flex justify-between items-center text-gray-600 font-medium`}>
                  <span>Delivery Charges</span>
                  <span className={`text-gray-900 font-bold bg-yellow-100 px-3 py-1 rounded-full text-xs`}>
                    Pending Address Review
                  </span>
                </div>

                <div className={`flex justify-between items-center text-green-600 font-medium`}>
                  <span>Special Discount</span>
                  <span className={`font-bold bg-green-100 px-3 py-1 rounded-full text-xs`}>
                    Applied on WhatsApp
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

              <button 
                onClick={handleSubmit}
                className={`w-full py-4 rounded-xl bg-[#772424] text-white font-bold text-lg hover:bg-[#5a1b1b] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#772424]/30`}
              >
                Request Order Review
              </button>

              <div className={`mt-6 text-center`}>
                <Link href={`/cart`} className={`text-sm font-bold text-gray-400 hover:text-[#772424] transition-colors`}>
                  ← Return to Cart
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}