"use client";

import { useState } from "react";
import Link from "next/link";

type CartSummary = {
  subtotal: number;
  taxAmount: number;
  deliveryCharge: number;
  finalTotal: number;
};

export default function CheckoutClient({ cartSummary }: { cartSummary: CartSummary }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "credit-card"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderMessage = `New Order from Hair Skill Clinic\n\n` +
      `Customer Details:\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Address: ${formData.address}, ${formData.city}, ${formData.zipCode}\n` +
      `Payment Method: ${formData.paymentMethod}\n\n` +
      `Order Summary:\n` +
      `Subtotal: $${cartSummary.subtotal.toFixed(2)}\n` +
      `Tax: $${cartSummary.taxAmount.toFixed(2)}\n` +
      `Delivery: $${cartSummary.deliveryCharge.toFixed(2)}\n` +
      `Total: $${cartSummary.finalTotal.toFixed(2)}`;

    const whatsappUrl = `https://wa.me/923014923336?text=${encodeURIComponent(orderMessage)}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#772424] mb-4">
            Secure Checkout
          </h1>
          <p className="text-lg text-gray-600">
            Please enter your details below to complete your purchase.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Checkout Form */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-200 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing & Shipping Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#772424] focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#772424] focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#772424] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="address">Street Address</label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#772424] focus:border-transparent transition-all"
                  placeholder="123 Main St, Apt 4B"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="city">City</label>
                  <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#772424] focus:border-transparent transition-all"
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="zipCode">ZIP / Postal Code</label>
                  <input 
                    type="text" 
                    id="zipCode" 
                    name="zipCode" 
                    required
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#772424] focus:border-transparent transition-all"
                    placeholder="10001"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-t border-gray-200 pt-8">Payment Method</h2>
              
              <div className="space-y-4 mb-8">
                <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="credit-card" 
                    checked={formData.paymentMethod === "credit-card"}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-[#772424] focus:ring-[#772424]"
                  />
                  <span className="ml-3 font-bold text-gray-900">Credit or Debit Card</span>
                </label>
                
                <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="paypal" 
                    checked={formData.paymentMethod === "paypal"}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-[#772424] focus:ring-[#772424]"
                  />
                  <span className="ml-3 font-bold text-gray-900">PayPal</span>
                </label>
              </div>

            </form>
          </div>

          {/* Order Summary Panel */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] sticky top-32">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-8">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-gray-600 font-medium">
                  <span>Subtotal</span>
                  <span className="text-gray-900">${cartSummary.subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center text-gray-600 font-medium">
                  <span>Estimated Tax (5%)</span>
                  <span className="text-gray-900">${cartSummary.taxAmount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center text-gray-600 font-medium">
                  <span>Delivery Charges</span>
                  <span className="text-gray-900">${cartSummary.deliveryCharge.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-3xl font-extrabold text-[#772424]">
                    ${cartSummary.finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button 
                onClick={handleSubmit}
                className="w-full py-4 rounded-xl bg-[#772424] text-white font-bold text-lg hover:bg-[#5a1b1b] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#772424]/30"
              >
                Place Order
              </button>

              <div className="mt-6 text-center">
                <Link href="/cart" className="text-sm font-bold text-gray-400 hover:text-[#772424] transition-colors">
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