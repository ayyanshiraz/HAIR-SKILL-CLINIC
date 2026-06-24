"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

// Safely mapped to your root app data folder
import { countries, type Country } from "../data/countries";

const customEase: [number, number, number, number] = [0.2, 0.65, 0.3, 0.9];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: customEase } 
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, delay: 0.2, ease: customEase } 
  }
};

export default function UnshavenTransplantClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Unshaven Transplant Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
      {/* --- ASYMMETRIC HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-white px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          {/* Breadcrumbs strictly pinned to far left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/hair-transplant" className="hover:text-[#772424] transition-colors">Hair Transplant</Link>
            <span>/</span>
            <span className="text-[#772424]">Unshaven Transplant</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Unshaven Transplant
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* Main Reference Split Hero Visual (Patient in Orange Shirt) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/treatments/unshaven-hero.jpg" 
                  alt="Split comparison of patient in orange shirt showing native forward styling versus un-shaved top recipient bed" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-top" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  P.T., 28 Years Old, 3450 Grafts © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The unshaven hair transplant has become a source of happiness for lots of men and women. There was a common misconception. If you had a hair transplant you had to shave your hair. For the majority of people shaving their hair could become a major problem.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  It is understandable if you do not want to cut your hair short for aesthetic concerns; or if you want to keep your hair transplant a secret. When these factors are taken into account people suffering from hair thinning give up on the idea of undergoing a hair transplant operation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Fortunately with the help of the unshaven hair transplant technique the patients without losing their existing hair can have a successful unshaven Fue hair transplant.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Hair Skill Clinic provides a safe and successful unshaven hair transplant for those who are not eager to reveal the truth about their hair transplantation and are obsessed with their long hair.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If you are planning a no-shave hair transplantation procedure the most important thing to consider is that the surgery will be carried out professionally and effectively. So a successful unshaven hair transplant depends on the experiment of your doctor.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Since the hair transplant is a work of art demanding utmost care and skill an unshaven hair transplant a more challenging procedure than the traditional one requires far more attention and expertise.
                </p>
              </motion.div>

              {/* Section: Can Everyone Have Unshaven Hair Transplant */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Can Everyone Have Unshaven Hair Transplant?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Both men and women are eligible for a hair transplant. Unshaven hair transplants which most people tend to have to keep the surgery private; or not shave their existing hair are becoming increasingly favorable.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Furthermore because it is more difficult for women to have completely shaved hair an unshaven hair transplant is a far more popular option among females.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Unshaved hair transplantation on the other hand is not for everyone. If you have severe hair loss you will not be able to undergo a no-shave hair transplant operation. Intense hair loss demands a much higher number of transplants than normal.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Therefore if the patient is experiencing intense hair loss an unshaven hair transplant might not be helpful. It is good to check your hair to see if a no-shave hair transplant is right.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  An ideal candidate for an unshaven hair transplant has mild hair loss. Because unshaven hair transplantation can only be done in a small number of grafts it cannot benefit patients with extensive hair loss.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  An unshaven hair transplant procedure is the best to be applied for the surgery if a patient is suffering from hair-line receding or temple thinning.
                </p>
              </motion.div>

              {/* Section: Operation of Unshaven Hair Transplant */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Operation of Unshaven Hair Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Unshaven FUE hair transplant which is the preference of both men and women is quite similar to the traditional FUE technique. The only difference is patients do not have to cut or shave their hair. It is possible to cover your donor and recipient area and no one could find out that you have undergone hair transplantation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  The rest is the same. Your operation will start with checking your donor area and planning as always. When your doctor is done with your planning he will apply anesthesia to your donor area for the extraction of your hair follicles.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Since hair will not be shaved just a limited number of hair follicles are extracted. The incision of the grafts begins when the extraction stage is completed successfully. One by one hair follicles will be inserted.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Unshaven hair transplant is proven to be an entirely successful surgery for those in need of hair treatment. Although the unshaven FUE hair transplant operation technique is similar to traditional FUE unshaven hair transplantation requires much more work because it is challenging to extract and incise hair follicles. In contrast the patients hair is not shaved.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Requiring much more care and attention the success of the unshaven operation depends on your doctors experience and skills. Hair Skill Clinic following the latest technology and new developments to give its patients the best hair transplant results is one of the sophisticated clinics performing unshaven FUE hair transplant in Pakistan.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Hair Skill helps you to gain lost hair while giving a successful and smooth operation. Therefore our clinic has been hosting lots of patients all around the world. Over 10.000 men have gotten natural-looking hair transplants so far.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold">
                  One of the popular and favorable techniques of hair transplantation unshaven hair transplant has become another success story for Hair Skill Clinic.
                </p>
              </motion.div>

              {/* Section: After the Procedure / 3 Types */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-2 tracking-tight">
                  Unshaven Hair Transplantation, After the Procedure
                </h2>
                <h3 className="text-2xl font-black text-[#772424] mb-6">
                  3 Types of Unshaven Hair Transplantation
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  If a patient is experiencing considerable hair loss s/he is not a good candidate for a fully unshaven procedure. As a result several treatment options are done based on the patients hair loss.
                </p>

                <div className="space-y-6 ml-2">
                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">1- Shaven Donor Site, Unshaven Recipient Site</h4>
                    <p className="text-black font-medium text-base">If your recipient area is completely bald your donor area will be shaved.</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">2- Limited Shaven Donor Site</h4>
                    <p className="text-black font-medium text-base leading-relaxed">Only one or two short strands of hair are shaved in the donor area. Limited Shaven Donors help patients to hide their donor areas. Yet the number of hair follicles grafts that can be extracted is limited.</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">3- Fully Unshaven</h4>
                    <p className="text-black font-medium text-base leading-relaxed">Although a fully unshaven procedure that allows patients to keep their existing hair helps patients to recover in a short time it limits the graft numbers.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Pros of Unshaven Hair Transplant */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Pros of Unshaven Hair Transplant
                </h2>

                <div className="space-y-4 ml-2">
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">You do not need to shave your hair which is the best part of this technique for most patients. An unshaven hair transplant is a lifesaving if you do not feel comfortable with short hair and the operation scars after the procedure!</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">Unshaven FUE hair transplant provides you with natural-looking hair just like a regular FUE transplant.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">The patient will not get any prominent scars after an unshaven hair transplant.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">The healing phase of the patient is going to be completed in a short time after the unshaven hair transplant. So you do not need to take a long rest staying home for days. Unshaven hair transplants do not interrupt your social life.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Cons of Unshaven Hair Transplant */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Cons of Unshaven Hair Transplant
                </h2>

                <div className="space-y-4 ml-2">
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">The success of an unshaven hair transplant depends on your doctor. So the patient should be sure of the clinic. You can search Hair Skill website and Instagram to witness the successful stories.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">Unshaven hair transplant takes much longer than regular FUE transplants. The duration of the procedure depends on the number of grafts. That is why the patient should be patient during the surgery.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">Unshaven hair transplant cannot be applied to people with severe hair loss since they will require more grafts.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg pb-1">•</span>
                    <p className="text-black text-base md:text-lg font-medium">Bacterial growth may occur because of the unshaven hair and the roots may get damaged due to bacteria and germs.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Unshaven Hair Transplant Pakistan */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-6 border-t border-gray-100">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  Unshaven Hair Transplant Pakistan
                </h2>
                
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  In recent years Pakistan has been home to people from worldwide visiting our country to have the best hair transplant surgery. Hair loss which affects both men and women for various causes is now easily treatable because of advances in technology.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Hair Skill Clinic in Lahore Pakistan is one of the well-known clinics with the leading technology and a dedicated team. If you are looking for the best place to have an unshaven hair transplant in Pakistan you visit the right page.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Unshaven Hair Transplant Pakistan is the most searched caption on the internet. Our clinic has succeeded in unshaven FUE hair transplant techniques just as in other FUE techniques. You can visit our Instagram to learn more about our clinic and witness the success stories of Hair Skill!
                </p>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: STICKY CONSULTATION FORM */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="w-full lg:w-1/3 lg:sticky lg:top-32"
            >
              <div className="bg-[#772424] text-white rounded-3xl p-8 shadow-2xl relative w-full border border-[#8c2a2a]">
                <h3 className="text-white text-xl font-black text-center mb-8 tracking-wide">
                  GET FREE CONSULTATION
                </h3>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                      required 
                      className="w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium" 
                      style={autofillFixStyle}
                    />
                  </div>
                  
                  <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors">
                    <input 
                      type="email" 
                      placeholder="E-mail" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                      className="w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium" 
                      style={autofillFixStyle}
                    />
                  </div>

                  <div className="border-b border-white/30 pb-2 focus-within:border-white transition-colors flex items-center relative">
                    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 cursor-pointer text-sm font-bold text-[#C5A059] select-none mr-3 shrink-0">
                      <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={selectedCountry.name} className="w-5 object-contain" />
                      <span>{selectedCountry.dial}</span>
                      <span className="text-[10px]">▼</span>
                    </div>
                    
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 shadow-2xl rounded-xl z-50">
                        {countries.map((country: Country, idx: number) => (
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className="px-4 py-2.5 hover:bg-gray-100 cursor-pointer text-sm flex items-center justify-between text-black transition-colors">
                            <div className="flex items-center gap-2.5 truncate mr-2">
                              <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} className="w-5 object-contain shrink-0" />
                              <span className="font-bold">{country.code}</span>
                              <span className="text-xs text-black truncate">{country.name}</span>
                            </div>
                            <span className="text-[#772424] font-black shrink-0">{country.dial}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      required 
                      className="w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium" 
                      style={autofillFixStyle}
                    />
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <input type="checkbox" id="unshavenPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="unshavenPrivacy" className="text-xs text-white/80 cursor-pointer">
                      I have read and accept the <Link href="/privacy-policy" className="text-[#C5A059] font-black hover:underline">Privacy Policy.</Link>
                    </label>
                  </div>

                  <button type="submit" className="w-full py-4 bg-white hover:bg-gray-100 text-[#772424] font-extrabold rounded-xl transition-all tracking-wider text-sm mt-2 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]">
                    Submit <span>›</span>
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}