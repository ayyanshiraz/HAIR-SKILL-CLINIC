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

export default function FutClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the FUT Information Page regarding advanced FUE/DHI alternatives.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
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
        className="pt-28 lg:pt-36 pb-8 md:pb-12 bg-white px-4 sm:px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          {/* Breadcrumbs strictly pinned to far left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] active:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/hair-transplant" className="hover:text-[#772424] active:text-[#772424] transition-colors">Hair Transplant</Link>
            <span>/</span>
            <Link href="/hair-transplant/treatments" className="hover:text-[#772424] active:text-[#772424] transition-colors">Treatments</Link>
            <span>/</span>
            <span className="text-[#772424]">FUT Hair Transplant</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            FUT Hair Transplant
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE */}
            <div className="w-full lg:w-2/3 block">
              
              {/* Flagship Hero Visual */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/home/techniques/3.webp" 
                  alt="Modern advanced minimally invasive hair restoration consultation at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] group-active:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Understanding the Strip Method and Modern Alternatives at Hair Skill Clinic
                </div>
              </motion.div>

              {/* OVERVIEW SECTION */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-10 flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  What is FUT Follicular Unit Transplantation?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  FUT, also known as the Strip Method, is a traditional hair transplant technique that dominated the surgical hair restoration industry for decades. During a FUT hair transplant, the surgeon removes a linear strip of skin directly from the back or sides of the scalp, which serves as the permanent donor area. This continuous strip of tissue is then carefully dissected under high-powered stereoscopic microscopes into individual follicular units. These meticulously extracted hair follicles are subsequently transplanted into the balding or thinning areas of the recipient scalp.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  While FUT was widely used in the past and considered the absolute gold standard for many years, the medical community recognizes it as a highly invasive surgical procedure. Because it requires a surgical scalpel, deep tissue cutting, and stitches or staples to close the wound, it naturally involves a significantly longer healing process. Furthermore, it leaves a permanent linear scar on the back of the head, which can severely limit the future hairstyle choices of the patient. Understanding the mechanics of the strip method is essential for anyone researching permanent hair loss solutions today.
                </p>
              </motion.div>

              {/* IMPORTANT MEDICAL NOTICE SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-4">Important Medical Notice: We Do Not Perform FUT</h2>
                <div className="bg-[#772424] text-white p-8 rounded-3xl shadow-xl border-4 border-[#C5A059] flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#C5A059] text-2xl font-black">⚠</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">Patient Safety First</h3>
                  </div>
                  <p className="text-white text-base md:text-lg font-bold leading-relaxed">
                    At Hair Skill Clinic, our primary medical focus revolves strictly around patient safety, rapid healing, and delivering completely natural-looking results without inflicting severe or permanent linear scarring. Therefore, we do not perform the FUT hair transplant procedure at our facility. The medical field of dermatology and hair restoration has evolved tremendously, and we firmly believe that newer minimally invasive techniques offer vastly superior biological and aesthetic benefits.
                  </p>
                  <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed">
                    We strongly advise all our patients to consider advanced contemporary treatments such as Manual FUE, Motorized FUE, and the highly precise DHI technique. These modern approaches provide maximum graft survival without the intense pain, extended surgical downtime, and highly visible linear scars fundamentally associated with the traditional strip method. Our commitment is to elevate the standard of care and ensure that every patient experiences a comfortable journey from consultation to final growth.
                  </p>
                </div>
              </motion.div>

              {/* SURGICAL PROCEDURE SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight">
                  The Surgical Procedure: How Was FUT Traditionally Done?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  To fully understand what FUE and FUT hair transplant technologies are and how they contrast, it helps to know the exact step-by-step surgical process of how the strip method works.
                </p>
                <div className="space-y-4 ml-1 sm:ml-2">
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                    <p className="text-black text-base md:text-lg font-medium">First, the surgeon administers local anesthesia to the donor region. Once numb, the surgeon uses a scalpel to excise a horizontal strip of scalp tissue, usually spanning from ear to ear. The size of the strip depends entirely on the number of grafts required for the session.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                    <p className="text-black text-base md:text-lg font-medium">After the strip is removed, the open wound on the back of the head is forcefully pulled together and closed using deep sutures or surgical staples. This creates significant tension on the scalp.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                    <p className="text-black text-base md:text-lg font-medium">While the surgeon closes the wound, a dedicated team of clinical technicians takes the removed tissue strip to a separate workstation. Using microscopes, they slice the tissue to separate it into individual follicular units containing one to four hairs each.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                    <p className="text-black text-base md:text-lg font-medium">Finally, tiny channels or incisions are opened in the bald areas of the scalp, and the prepared grafts are delicately inserted into these recipient sites.</p>
                  </div>
                </div>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mt-2">
                  Because this method involves cutting and removing a continuous piece of tissue, the FUT hair transplant side effects often include extreme scalp tightness, prolonged tissue numbness, and a significant risk of stretching the linear scar if the patient engages in heavy physical activity too soon after the surgery.
                </p>
              </motion.div>

              {/* DIFFERENCE BETWEEN FUE AND FUT */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight">
                  The Core Difference Between FUE and FUT Hair Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Patients constantly research the difference between FUE and FUT hair transplant techniques to determine the safest and most effective option for their specific hair loss pattern. The primary distinction between the two lies entirely in how the donor hair is extracted from the back of the head. The implantation phase for both methods can actually be quite similar, but the harvesting phase is drastically different.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  In a traditional FUT hair transplant, a complete strip of skin is surgically excised. In stark contrast, FUE, which stands for Follicular Unit Extraction, involves extracting each hair follicle one by one directly from the scalp using a specialized micro-punch device. When comparing hair transplant techniques, FUE vs. FUT, the medical advantages of individual extraction become overwhelmingly apparent.
                </p>
                
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mt-4">Why FUE has Replaced FUT at Top-Tier Clinics</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The biggest aesthetic concern patients have regarding older techniques is the permanent FUT hair transplant scar. Because FUE uses micro punches measuring less than one millimeter in diameter, it leaves tiny dot marks that heal rapidly and become virtually invisible to the naked eye. FUT, on the other hand, leaves a long permanent surgical line that restricts patients from cutting their hair short.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Another major difference revolves around postoperative comfort. Figuring out how to sleep after a FUT hair transplant surgery is a common and incredibly difficult challenge because of the tight stitches, staples, and swelling on the back of the head. FUE patients experience significantly less pain, have zero stitches, and can sleep comfortably using a standard neck pillow much sooner.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Furthermore, FUE is fundamentally minimally invasive. It does not require scalpels, staples, or deep dermal stitches, making it a much safer and more comfortable procedure overall. FUE patients can typically return to their daily routines, light work, and exercise regimens much faster than those recovering from invasive strip surgery.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If you are asking if a future hair transplant is safe, the answer is technically yes when it is performed by a highly qualified and experienced surgeon in a sterile environment. However, being safe does not mean it is the optimal choice. The modern medical community heavily favors FUE because it eliminates the risks associated with large surgical incisions such as nerve damage, severe infections, and permanent scalp tightness.
                </p>
              </motion.div>

              {/* COST & LOCAL SEO SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight">
                  Analyzing FUT Hair Transplant Cost in Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Many patients actively search for the FUT hair transplant cost in Pakistan because historically the strip method was heavily marketed as a cheaper alternative to FUE. Patients seeking the lowest cost or affordable prices in Lahore, Karachi, and Rawalpindi often compare these outdated methods. The lower price tag was primarily due to the extraction process being faster for the primary surgeon. The doctor simply removed a strip of flesh in a few minutes and handed it over to a team of technicians for the tedious dissection process, allowing the clinic to process multiple patients quickly.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  However, the minor financial savings associated with FUT are heavily outweighed by the permanent physical consequences, specifically the linear scar and the longer, more painful recovery period. Patients often find themselves spending more money later on scar revision surgeries or scalp micropigmentation to hide the strip mark.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Today, modern technology has made both Manual FUE and Motorized FUE highly affordable and incredibly efficient. If you are looking for a top-rated hair transplant clinic near me with highly competitive and transparent prices, Hair Skill Clinic offers exceptional FUE packages. These packages provide maximum hair density without exposing you to the severe anatomical drawbacks of the traditional strip method. The overall value of preserving your donor area intact far exceeds any initial cost difference whether you are traveling from Lahore, Karachi, Rawalpindi, or anywhere else in Pakistan.
                </p>
              </motion.div>

              {/* PERMANENT SCARRING SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight">
                  Permanent Scarring and Long-Term Complications
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  One of the most heavily researched topics by prospective patients is the FUT hair transplant before and after results, specifically focusing on the donor region. While the transplanted hair on the top of the head may grow well, the back of the head tells a different story.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The primary complication is scar stretching. Even if a surgeon closes the wound perfectly, the natural movement of the neck and head can cause the linear scar to widen over the following months. This leaves a thick bald line stretching across the back of the head. Additionally, because the scalpel severs major sensory nerves in the scalp, many strip method patients report temporary or even permanent loss of sensation above and below the incision line.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  By eliminating the scalpel, FUE and DHI methods preserve the complex nerve networks and vascular structures of the scalp, ensuring a much healthier long-term outcome for the patient.
                </p>
              </motion.div>

              {/* ALTERNATIVE TREATMENTS AVAILABLE SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6">Exploring Better Modern Alternatives at Hair Skill Clinic</h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  Since we strictly do not offer FUT, we provide world-class modern alternatives that guarantee a remarkably high survival rate for your grafts and a pristine, unscarred donor area.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <Link href="/hair-transplant/treatments/manual-fue" className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#772424] transition-all group block">
                    <h4 className="font-black text-[#772424] text-lg mb-2 group-hover:translate-x-1 transition-transform">Manual FUE ›</h4>
                    <p className="text-black text-xs font-medium leading-relaxed">Manual FUE involves extracting individual hair follicles one by one using a highly precise handheld manual punch. This method is incredibly gentle on the donor area, giving the surgeon ultimate tactile feedback. It ensures maximum graft survival and minimal tissue trauma, making it absolutely perfect for smaller refinement sessions, facial hair restoration, and detailed hairline reconstructions.</p>
                  </Link>

                  <Link href="/hair-transplant/treatments/fue-by-moterize" className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#772424] transition-all group block">
                    <h4 className="font-black text-[#772424] text-lg mb-2 group-hover:translate-x-1 transition-transform">Motorized FUE ›</h4>
                    <p className="text-black text-xs font-medium leading-relaxed">For patients suffering from advanced baldness and requiring high-volume megasessions, Motorized FUE is the ultimate clinical solution. This technique uses a low-rotation automated punch to isolate and extract grafts rapidly, safely, and efficiently. It provides the high graft yield that people traditionally associated with FUT, but it achieves this without ever cutting a strip of skin or leaving a linear scar.</p>
                  </Link>

                  <Link href="/hair-transplant/treatments/dhi" className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#772424] transition-all group block">
                    <h4 className="font-black text-[#772424] text-lg mb-2 group-hover:translate-x-1 transition-transform">DHI Technique ›</h4>
                    <p className="text-black text-xs font-medium leading-relaxed">DHI takes clinical precision to the highest level. Using a specialized medical instrument known as the Choi Implanter Pen, our surgeons can place the extracted grafts directly into the scalp without needing to open prior surgical channels. This one-step implantation offers elite mechanical control over the exact angle, direction, and depth of the implanted hair, resulting in a completely natural look and ultra-high density.</p>
                  </Link>
                </div>
              </motion.div>

              {/* PRP RECOMMENDATION SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 pt-6 border-t border-gray-200">
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">The Critical Role of PRP Therapy for Hair Growth</h3>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424] flex flex-col gap-4">
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Regardless of the advanced extraction method you ultimately choose, your newly implanted grafts require robust biological support to thrive and grow strong. Patients considering any hair restoration treatments vastly benefit from PRP (platelet-rich plasma) therapy, integrating it as a core foundation of their hair growth plan. PRP utilizes the powerful healing cells and growth factors isolated directly from your own blood. When injected into the scalp, it accelerates tissue repair, stimulates blood supply to the new roots, and awakens dormant hair follicles.
                  </p>
                  <p className="text-black text-base md:text-lg font-black text-[#772424] mt-2">
                    For the absolute best surgical outcome, our medical board provides a clear and structured PRP protocol.
                  </p>
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-start gap-3">
                      <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                      <p className="text-black text-base md:text-lg font-bold">A total of 6 PRP sessions are heavily recommended for comprehensive healing, accelerated growth, and maximum density.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                      <p className="text-black text-base md:text-lg font-bold">2 PRP sessions are included completely free of cost within your primary hair transplant package, providing immediate postoperative support.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                      <p className="text-black text-base md:text-lg font-medium">The remaining 4 PRP sessions are chargeable and can be easily completed according to the personalized treatment schedule advised by our clinical specialists.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CONCLUSION SECTION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-6 pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight">
                  Why Choose Hair Skill Clinic Over Traditional Invasive Methods
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Your scalp anatomy is precious, and preserving the health and elasticity of your donor area is our top medical priority. When you undergo the strip method, your future restoration options become severely limited because of the tight scar tissue left behind and the overall reduction in scalp laxity. By choosing our advanced FUE Motorized or DHI methods, you keep your donor area healthy, structurally intact, and fully available for any potential future touch-ups as you age.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Our dedicated hair restoration experts take the time required to thoroughly evaluate your specific hair loss pattern, the current condition of your donor area capacity, and your long-term aesthetic goals. We strictly avoid outdated invasive procedures and focus exclusively on treatments that deliver maximum density, rapid healing, and complete, absolute patient satisfaction.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If you want a flawless full head of hair without carrying the heavy burden of a permanent surgical scar, schedule your free clinical assessment today. Let our specialists design a custom FUE or DHI restoration plan specifically tailored for you.
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
              <div className="bg-[#772424] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative w-full border border-[#8c2a2a]">
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
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className="px-4 py-2.5 hover:bg-gray-100 active:bg-gray-200 cursor-pointer text-sm flex items-center justify-between text-black transition-colors">
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

                  <div className="flex items-start sm:items-center gap-2 mt-2">
                    <input type="checkbox" id="futPrivacy" required defaultChecked className="w-4 h-4 mt-0.5 sm:mt-0 accent-[#C5A059] rounded cursor-pointer shrink-0" />
                    <label htmlFor="futPrivacy" className="text-xs text-white/80 cursor-pointer leading-relaxed">
                      I have read and accept the <Link href="/privacy-policy" className="text-[#C5A059] font-black hover:underline active:underline">Privacy Policy.</Link>
                    </label>
                  </div>

                  <button type="submit" className="w-full py-4 bg-white hover:bg-gray-100 active:bg-gray-200 text-[#772424] font-extrabold rounded-xl transition-all tracking-wider text-sm mt-2 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98]">
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