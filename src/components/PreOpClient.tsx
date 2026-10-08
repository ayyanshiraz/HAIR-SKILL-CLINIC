"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import { countries, type Country } from "../data/countries";

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

export default function PreOpClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Pre Operation Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Can women get a restoration procedure?",
      a: "Yes, of course. Follicular thinning affects approximately 50% to 65% of men and around 40% to 45% of women during their lifetime. In selected female patients, especially those with suitable patterns of thinning, restoration surgery can also be performed. In fact, at our clinic, roughly 10% of patients admitted for restoration surgery are women."
    },
    {
      q: "Are you a candidate for restoration surgery?",
      a: "This is decided individually for each patient, because restoration is an aesthetic procedure and everyone expectations and vision of how they want to look are different. However, there is a widely accepted general rule: to be considered a suitable candidate, follicular thinning should usually be at least Norwood scale stage 2 or above."
    },
    {
      q: "Are you awake during the surgical procedure?",
      a: "Yes, patients are normally awake during the procedure. In some cases, mild sedation may be used, but we generally do not recommend general anesthesia because this is a cosmetic and usually well-tolerated procedure. In most cases, medication to reduce anxiety before surgery is enough to keep the patient comfortable throughout the day. Many patients assume it is a major operation, but in reality it is a manageable and tolerable process."
    },
    {
      q: "Can a restoration procedure cause death?",
      a: "Surgical restoration is a clinical procedure, and like all surgeries, it carries some risks. However, these risks are very low. Rare complications may occur if a patient has an allergy or severe reaction to local anesthetics or other medications used during the procedure. If the surgery is performed by a qualified medical team in a properly equipped clinic, such complications can usually be recognized and managed quickly. In rare cases, excessive bleeding or a medical reaction may also occur, which is why we strongly recommend having the procedure in a reputable clinic with emergency equipment and trained staff. At Hair Skill Clinic, our team holds regularly renewed emergency response certifications, and patients are monitored throughout the procedure."
    },
    {
      q: "Can I choose my frontal line look?",
      a: "On the day of the operation, the doctor will examine you, provide a consultation, and discuss the frontal line and treatment areas with you. So yes, your preferences are important. This is an aesthetic procedure, which means your expectations should absolutely be considered. At the same time, it is also important to listen to your doctor advice, because the most suitable design is the one that looks natural and fits your facial structure. If the design you want is appropriate for you, we can of course proceed accordingly."
    },
    {
      q: "Can I drink alcohol before surgery?",
      a: "We advise patients not to drink alcohol for at least a few days before surgery, ideally 3 to 5 days. Alcohol can affect the vascular system and may increase bleeding during the procedure. Avoiding alcohol helps create better surgical conditions on the day of the operation."
    },
    {
      q: "How can you get a consultation before surgery?",
      a: "First, you need to get in touch with our clinic and send us the preliminary photos we request. This allows us to make an initial evaluation of your case. After that, we can schedule either an online consultation or a face-to-face consultation."
    },
    {
      q: "How long does an eyebrow transplant take?",
      a: "An eyebrow restoration usually takes around 3 to 4 hours."
    },
    {
      q: "How long does the consultation last online, face to face in the clinic, or before the surgery?",
      a: "The length of the consultation depends on the patient individual needs, the number of questions they have, and the complexity of the case. For that reason, there is no exact standard duration. On average, face-to-face consultations in the clinic last around 20 to 40 minutes. Online consultations may take a little longer, as patients who contact us remotely usually want detailed answers to all their questions. Before surgery, we also perform a pre-operative consultation, which generally lasts around 15 to 30 minutes, or longer if needed."
    },
    {
      q: "How many grafts are needed for a full head?",
      a: "This varies depending on the size of the scalp and the characteristics of the donor area. For example, in some patients, 5,000 grafts may cover only 60% of the scalp because the head is larger, while in others, 4,000 grafts may be enough for nearly full coverage. That is why the most important factor is the density and capacity of the donor area. A higher graft number does not automatically guarantee a better result."
    },
    {
      q: "How many grafts are needed for patients full coverage on the recipient side?",
      a: "The required number of grafts is calculated before surgery. We assess the size of the frontal area, mid-scalp, and crown, then calculate the graft need based on the appropriate density, the patient native strand thickness, and the ratio of single to multiple-follicle grafts. On average, a patient may need up to 10,000 to 13,000 grafts in total for full density. However, in surgical restoration, this is usually not possible in a single session. For that reason, we generally work progressively, starting from the front and moving toward the crown over one or more sessions to achieve the best possible density."
    },
    {
      q: "Is the restoration noticeable?",
      a: "A good restoration should not be noticeable. Our goal is always to create a natural look with the highest appropriate density. If other people can immediately tell that someone has had a procedure, that usually indicates an unnatural result."
    },
    {
      q: "Is it necessary to have a haircut or shave during surgery?",
      a: "In most cases, some level of shaving is required during the procedure. This allows the surgical team to see the angles more clearly and work more precisely in both the donor and recipient areas. The extent of shaving depends on the technique being used and the individual treatment plan."
    },
    {
      q: "Should you cut or have a haircut before surgery?",
      a: "We usually ask patients not to cut their strands before they arrive at the clinic. This helps us assess the affected areas more accurately and plan the procedure properly. If a haircut or shaving is needed, we prefer to perform it here ourselves."
    },
    {
      q: "What can you do if you are scared to have the surgery?",
      a: "First of all, make sure you know the clinic, the doctor, and the team you are trusting with your procedure. The relationship between the patient and the doctor is one of the most important factors in feeling comfortable and confident. Speak with the doctor, ask all the necessary questions, and make sure you feel secure in your decision. If you feel very anxious before surgery, we can also provide supportive medication to help you relax."
    },
    {
      q: "What do you do to protect existing strands during the procedure?",
      a: "Our surgeons use magnification to examine the scalp clearly and identify the existing strands precisely. This helps us make incisions carefully without damaging the existing roots. Protecting the native density is very important, because harming those follicles would reduce the overall benefit of the procedure."
    },
    {
      q: "What if you are too nervous or anxious before the surgery?",
      a: "If you feel nervous, uncomfortable, or anxious before surgery, we can provide additional medication to help relieve your anxiety and make you feel more comfortable."
    },
    {
      q: "What is the optimal donor area?",
      a: "The optimal donor area is usually the back of the head. We also refer to this area as the safe donor zone because the follicles there are generally more resistant to the effects of thinning. For this reason, after extraction and implantation, these grafts are more likely to remain permanent."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-gray-50 border-b border-gray-200 px-6"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/faqs" className="hover:text-[#772424] transition-colors">F.A.Q.</Link>
            <span>/</span>
            <span className="text-[#772424]">Pre Operation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Pre Operation FAQs
          </h1>
        </div>
      </motion.section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {faqs.map((faq, index) => (
                <motion.div 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-50px" }} 
                  variants={fadeUp} 
                  key={index} 
                  className="mb-4 shadow-sm"
                >
                  <button 
                    onClick={() => toggleFaq(index)} 
                    className={`w-full flex items-center justify-between p-5 md:p-6 transition-colors text-left ${openFaqIndex === index ? "bg-[#8c2a2a] text-white" : "bg-[#772424] text-white hover:bg-[#8c2a2a]"}`}
                  >
                    <h2 className="text-lg md:text-xl font-bold tracking-tight pr-4">
                      {faq.q}
                    </h2>
                    <span className="text-3xl font-light shrink-0 leading-none">
                      {openFaqIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }} 
                        transition={{ duration: 0.3, ease: "easeInOut" }} 
                        className="bg-gray-50 border-x border-b border-[#772424] overflow-hidden"
                      >
                        <div className="p-6 text-black text-base md:text-lg leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

            </div>

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
                    <input type="checkbox" id="preOpPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="preOpPrivacy" className="text-xs text-white/80 cursor-pointer">
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