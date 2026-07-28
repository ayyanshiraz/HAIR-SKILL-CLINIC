"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { countries, type Country } from "../data/countries";

// --- STRICT ANIMATION TUPLE ---
const customEase: [number, number, number, number] = [0.2, 0.65, 0.3, 0.9];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: customEase 
    } 
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      delay: 0.2,
      ease: customEase 
    } 
  }
};

export default function BeforeProcedureClient() {
  // --- FORM STATES ---
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Before Procedure Guide.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Defeats Google Chrome forced white Autofill override
  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24 overflow-x-clip">
      
      {/* --- PAGE HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-gray-50 border-b border-gray-200 px-6"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/patient-guide" className="hover:text-[#772424] transition-colors">Patient Guide</Link>
            <span>/</span>
            <span className="text-[#772424]">What Should I Do Before Hair Transplant</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            What Should I Do Before Hair Transplant Procedure?
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch lg:items-start w-full">
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* Main Scalp Marking Hero Image */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeUp}
                className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group"
              >
                <img 
                  src="/home/techniques/4.webp" 
                  alt="Surgeon marking patients hairline before hair transplant procedure" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Intro Paragraphs */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  <span className="font-bold underline decoration-[#C5A059]">Before your procedure</span>, if you are someone who is thinking about undergoing hair restoration, it is very usual to linger on thoughts such as what should I do before hair transplant surgery and what are the essential precautions before a hair transplant. It is entirely normal to feel nervous or anxious if you have never experienced a clinical procedure like this before. Therefore, the role of detailed consultation and accurate medical information is absolutely essential for the psychological readiness of all our patients.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Our before procedure guide will comprehensively prepare you for your upcoming treatment. In this way, you will be fully informed about all the medical processes you will be going through. Knowing the exact things to know before hair transplant makes you feel relaxed and leads patients to experience a smooth, painless, and highly successful surgical operation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Whether you are traveling from Lahore, Karachi, Multan, or Rawalpindi, the preparation protocol remains strictly the same. The preparation steps are straightforward. If you pay careful attention to these medical guidelines, there is absolutely nothing to be worried about regarding your forthcoming procedure.
                </p>
              </motion.div>

              {/* Master Header H2 */}
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-black text-[#772424] mb-10 tracking-tight border-b pb-4 border-gray-100">
                Before Hair Transplant Procedure Checklist
              </motion.h2>

              {/* --- BULLETS CONTENT SECTION --- */}
              <div className="flex flex-col gap-12">
                
                {/* 1 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Choose a Professional Clinic</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    Finding a good and certified clinic for your surgery is the first important thing you should pay attention to when looking for a safe hair transplant near me. Therefore, you must research the best medical facilities to guarantee you receive the safest treatment and the best possible aesthetic outcome. Hair Skill Clinic stands as a premium choice across Pakistan.
                  </p>
                </motion.div>

                {/* 2 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Evaluate Social Media and Patient Reviews</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    It is always better to find a clinical social media account that genuinely demonstrates real patients, their raw experiences, and detailed websites to gather necessary information about the facility. It is highly helpful to look at real patient results and read the authentic comments below the pictures.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    You can visit the Hair Skill website or our official Instagram account to learn about our advanced medical techniques and our certified doctors. You can also read our informative blogs and see the incredible transformation photos of our previous patients.
                  </p>
                </motion.div>

                {/* 3 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Search About the Doctors of the Clinic</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    Researching the leading doctor and going over their professional CVs will assist you in making up your decision regarding the clinic where you are going to have your medical procedure.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Always remember that a trustworthy and internationally certified clinic will considerably assist you in having professional treatment, clear instructions, effective communication with skilled physicians, and the absolute best possible outcome at the end of your healing journey.
                  </p>
                </motion.div>

                {/* 4 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Should I Cut My Hair Before the Procedure?</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Patients frequently ask if they can shave their head before a hair transplant or if they need a haircut. Shaving your hair yourself may not be a good idea depending on the specific medical technique planned for your scalp. So please do not cut or shave your hair before visiting the clinic. There is no strict requirement regarding hair size, as the surgery can be performed successfully regardless of your current hair length. We generally prefer to keep your hair long for the initial planning phase before the surgery. This allows our surgeons to clearly see your natural hair growth angles and accurately mark the areas that need surgical correction. After the planning phase is completed, our medical staff will have your hair safely cut at the clinic if it is deemed necessary for the extraction process.
                  </p>
                </motion.div>

                {/* 5 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Should I Have Breakfast Before the Procedure?</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    Definitely yes! You can and should have a healthy breakfast before arriving at the clinic, but please avoid any greasy, heavy, or overly spicy meals. A light and nutritious breakfast will be perfect for you. Please remember to strictly avoid consuming both tea and coffee on the morning of your surgery, as caffeine can elevate your blood pressure and heart rate.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Remember to inform our clinical staff about your specific food preferences for lunch, such as vegetarian options, so we can prepare your ideal meal type during the break.
                  </p>
                </motion.div>

                {/* 6 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Inform Your Doctor About Your Health and Medications</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    You must inform your doctor about all the medicines you are currently taking and your general health condition. We must know these critical medical details because they may directly affect your surgery and recovery phase. Therefore, you must proactively inform your doctor if you suffer from environmental allergies, bleeding disorders, asthma, high blood pressure, breathing problems, diabetes, scalp psoriasis, or any other chronic diseases.
                  </p>
                </motion.div>

                {/* 7 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Inform Your Doctor About the Allergies You Have</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    If you have known allergies to any medications, please inform your doctor about them immediately during the consultation. This information has vital importance because you will need to take some prescribed medicines after your operation to prevent infection and manage discomfort. Your doctor will prescribe different and safer pills if you have an allergy to any standard medication.
                  </p>
                </motion.div>

                {/* 8 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Inform Your Doctor About Previous Surgeries</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Information about your previous surgical history is another crucial aspect of your medical preparation process. It gives your doctor a clear idea about the healing capacity of your skin, your natural scar formation level, and how your body reacted to local anesthesia in general during past treatments.
                  </p>
                </motion.div>

                {/* 9 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Medicines You Should Stop Taking One Week Before</h3>
                  </div>
                  
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-2">
                    There are specific things to do before a hair transplant regarding your daily medication. To prevent increased bleeding during the surgical extraction and implantation process, you must avoid the following:
                  </p>

                  <ol className="list-decimal ml-6 font-bold text-black text-base md:text-lg my-4 space-y-1">
                    <li>Aspirin</li>
                    <li>Anti inflammatory medications</li>
                    <li>B or E vitamins</li>
                    <li>Blood Thinners</li>
                    <li>Ibuprofen</li>
                    <li>Herbal medication</li>
                  </ol>

                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    Please inform your surgeon before scheduling the surgery if you use any other medications not mentioned in the list above. 
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    If you are using finasteride or Propecia, you do not need to stop taking them. However, applying minoxidil before a hair transplant should be strictly avoided for at least one full week before the surgery and can be resumed safely two weeks later. Also, before taking any newly prescribed medications before your operation, always consult your primary doctor.
                  </p>
                </motion.div>

                {/* 10 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">No, You Cannot Drink Alcohol</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Since alcohol may severely interfere with the local anesthetic medications used during the surgery and significantly increase both bleeding and bruising, please stop consuming alcohol 5 to 7 days before the surgery. You must also avoid it completely for 10 to 14 days after the surgery to ensure your newly transplanted grafts receive proper blood flow.
                  </p>
                </motion.div>

                {/* 11 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">No, You Cannot Smoke</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Since cigarettes include high levels of nicotine, which directly constricts blood vessels and reduces vital blood flow to the scalp, nicotine consumption negatively impacts your operation process and your entire healing phase. It is much more difficult for the human body to recover after surgical incisions if you smoke because nicotine actively prevents oxygen from getting through your bloodstream to the newly implanted follicles. Therefore, smoking and vaping must be strictly avoided.
                  </p>
                </motion.div>

                {/* 12 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Avoid Hair Care Oils and Styling Gels</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    Hair care oils and similar cosmetic products such as styling gels, strong waxes, and chemical creams should not be used before the procedure. You can safely apply gentle hair oil or styling gel only after 2 full months of your hair transplant treatment have passed.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                    It is also highly recommended not to wear a tight hat or cap before your operation to prevent any microbial growth due to trapped warmth or sweat, keeping your donor and recipient areas perfectly clean. 
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    If you are currently dealing with severe scalp dandruff, it is advisable to consult your doctor beforehand. Your doctor can advise you on the appropriate medical shampoo to use before the surgery date.
                  </p>
                </motion.div>

                {/* 13 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#772424] font-black text-xl">•</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#772424]">Wear Comfortable Clothes</h3>
                  </div>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Before your surgery begins, make sure to wear highly comfortable and loose clothing. Shirts or sweaters with front zippers or buttons are strongly advised because your healing scalp and new grafts must not be damaged or rubbed against tight fabrics after the treatment is finished. Pay close attention to putting something on that you will be completely comfortable wearing for several hours!
                  </p>
                </motion.div>

              </div>

            </div>

            {/* RIGHT SIDE: STICKY CONSULTATION FORM */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="w-full lg:w-1/3 lg:sticky lg:top-32 mt-4 lg:mt-0"
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

                  <div className="flex items-start sm:items-center gap-2 mt-2">
                    <input type="checkbox" id="beforePrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer mt-0.5 sm:mt-0 shrink-0" />
                    <label htmlFor="beforePrivacy" className="text-xs text-white/80 cursor-pointer leading-tight">
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