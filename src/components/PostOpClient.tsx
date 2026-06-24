"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
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

export default function PostOpClient() {
  // --- FORM STATES ---
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // --- ACCORDION STATE ---
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Post Operation Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Defeats Google Chrome forced white Autofill override
  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- FAQ DATA EXTRACTED FROM SCREENSHOTS ---
  const faqs = [
    {
      id: 0,
      q: "ARE THERE ANY DIETARY RESTRICTIONS AFTER THE HAIR TRANSPLANT SURGERY?",
      a: "There are minimum or close to no dietary restrictions. The only thing we require our patients is to avoid alcohol for the first 10 days after the surgery. Also we ask them to do some restrictions on spicy or salty food for the first three to five days. Of course, you can have some spice or salty food but it should be within the normal limits and with no exaggeration."
    },
    {
      id: 1,
      q: "CAN I COMB MY HAIR AFTER TRANSPLANT?",
      a: "You can comb your hair after the transplantation, because it's your existing hair, it's your hair, you can use even long hair, you can comb it, you can do any style. It doesn't interfere or it is not avoid it by the hair transplantation procedure. You can use it as normal."
    },
    {
      id: 2,
      q: "CAN I CUT MY TRANSPLANTED HAIR?",
      a: "We want patients at least for a month not to shave or cut or trim their hairs. Usually after a month you can use scissors for the recipient side or trimmers or clippers for the donor side to shave your hair. But, other than that, at least for two to three months we do not want you to use the trimmers or clippers in the recipient side because it may pull or damage the skin or hair, that's why you should avoid that."
    },
    {
      id: 3,
      q: "CAN I TAKE SHOWER ON MY HAIR TRANSPLANT DAY?",
      a: "You can. You should avoid water on newly transplanted zone. You can wash below your neck."
    },
    {
      id: 4,
      q: "CAN I USE CLIPPERS AFTER HAIR TRANSPLANT?",
      a: "You may start to use clippers for the sides and donor zone one month after the hair transplant. But, for the new hair, you should wait 6 months to use clippers."
    },
    {
      id: 5,
      q: "CAN YOU COLOR OR DYE YOUR HAIR AFTER THE HAIR TRANSPLANT SURGERY?",
      a: "Yes, you can. But, we advise our patients to start dying there or coloring their hair 6 to 8 weeks after the hair transplant surgery when the regrowth of the hair starts."
    },
    {
      id: 6,
      q: "CAN YOU DRIVE A CAR AFTER THE HAIR TRANSPLANT SURGERY?",
      a: "Wait for our patients to ask someone to pick them up and drop back home after the hair transplant surgery. We do it for a couple of reasons. First of all, a hair transplant surgery is a 6 to 8 hours procedure, so basically you can be really tired after the procedure. During the surgery where it means some medication to the patients and some of them can make you feel a little bit sleepy. So, for your safety, please don't drive the car immediately after the hair transplant surgery."
    },
    {
      id: 7,
      q: "CAN YOU GO OUTSIDE OR WALK UNDER THE SUN AFTER THE HAIR TRANSPLANT SURGERY?",
      a: "There are no restrictions regarding the aspects. The only thing we tell our patients is to avoid too much sunlight exposure or ultraviolet light exposure for the first six months after the hair transplant surgery. We asked it for two reasons. First of all, it can cause extensive scar formation and number two, it can cause an altered pigmentation across your scalp. So, for the first six months, after the hair transfer surgery if you're going to be under direct sunlight for a longer period of time please use a hat, cap or a sunscreen with an SPF 40 to 50."
    },
    {
      id: 8,
      q: "CAN YOU WEAR A HAT AFTER HAIR TRANSPLANT?",
      a: "You can wear a hat you want after 10 days of your hair transplant. For changes you are going to wear a loose hat or sometimes a bandana or a loose scarf will really work."
    },
    {
      id: 9,
      q: "DO YOU HAVE TO TAKE MEDICATIONS AFTER THE HAIR TRANSPLANTATION?",
      a: "Patients may need some medications after the surgery. As a package, we provide patients to use after the surgery as antibiotics, painkillers and other unswelling medications. But, sometimes according to the consultation and the hair transplantation procedure technique, they may need to use other one-year medications that your doctor may prescript to you but it depends on the patients case."
    },
    {
      id: 10,
      q: "DO YOU NEED FINASTERID USAGE AFTER THE HAIR TRANPLANTATION?",
      a: "Yes. This is something we recommend patients to to use it. Because normally the usage is mostly for the implant not for the implanted hairs for the existing hairs because when we do the implantation there are some also existing hairs. And we need to improve the thickness in order to give a combination treatment to the patient because the transplanted hairs will grow. But if the patient lose his actual hair existing care, it means that he may need another surgery but our thing is to to think the patient in a 360 degree and we want them to have a good result in the future. So, for keeping the hairs not to lose it and also improve the thickness, we want to use finasteride maybe in some patients also minoxidil too."
    },
    {
      id: 11,
      q: "DO YOU NEED TO USE THE MINOXIDIL AFTER THE HAIR TRANSPLANT SURGERY?",
      a: "Minoxidil is one of two FDA approved medical treatments for the hair loss problems. The minoxidil use is not the must but we advise that for the patients with androgenetic alopecia to minimize the miniaturization of the hair help with the regrowth of the hair after the heat transfer surgery."
    },
    {
      id: 12,
      q: "DOES HAIR IN THE DONOR AREA GROW BACK?",
      a: "No, it does not. We just cover that bald spots with the existing hair after your hair transplant. So, every time you have your hair transplant,your donor area loses its density additive like 20 to 30 percent."
    },
    {
      id: 13,
      q: "FOR HOW LONG DO I HAVE TO WAIT BEFORE I CAN HAVE MY SECOND HAIR TRANSPLANT SURGERY?",
      a: "The answer for this question is different. We need to wait for at least 6 to12 months. Before the second surgery, if we didn't perform any incisions or implantations at the area we want to perform, the second surgery we can do next surgery 6 months after. But if there were any implantations or incisions, it's better to wait for at least 12 months."
    },
    {
      id: 14,
      q: "HOW CAN I SLEEP AFTER HAIR TRANSPLANTATION?",
      a: "Patients after the hair transplantation should sleep at their donor area at least 7 to 10 days. If they avoid and if the transplanted hairs and not touch the pillow or other things during the sleeping it's okay. But we usually recommend patients to use a neck pillow and to avoid turning to right or left and sleeping on donor area is the safest part for the patient's condition."
    },
    {
      id: 15,
      q: "HOW LONG DOES IT TAKE TO THE GRAFTS BECOME SECURE AFTER THE SURGERY?",
      a: "The grafts become secure at least 5 to 10 days after the surgery. But the first 24 hours, of course the incisions that we did during the operation will be more the wound aids will be closed. So it will be become stabilized, but still fragile after the 5 sometimes 6, 7 or until 10 days. The grafts may be not so secure, so patients should avoid some kind of wearing hats or sleeping as normally or the things that we advise after the post-operative care is the important thing. So, patients should avoid everything at least at 10 days."
    },
    {
      id: 16,
      q: "HOW LONG YOU SHOULD TAKE A REST AFTER THE HAIR TRANSPLANT SURGERY?",
      a: "It depends on the type of job you do. If you work on any physical job, we advise our patients to stay away from the physical activity and dusty environments for the first 10 to 14 days. After the hair transplant surgery till the scabs are off. If you work in an office condition or an outdoor or from home you can be to work two to three days after the heat transfer."
    },
    {
      id: 17,
      q: "HOW OFTEN SHOULD YOU WASH YOUR HAIR AFTER THE TRANSPLANT SURGERY?",
      a: "For the first 30 days, after the hair transplant surgery, you should wash your hair every day. But, for the first 2 weeks, after the hair transfer surgery, you should wash your hair the way we explain you in the clinic or it's explained in the guideline."
    },
    {
      id: 18,
      q: "IS BLEEDING AFTER HAIR TRANSPLANTATION IS NORMAL?",
      a: "After the surgery we expect some small bleedings in the first night or in the second day also, but it's very minimal we do not expect it continuous bleeding. Maybe, it's just pop-up of the grafts in some parts and it's very minimal bleeding and it shouldn't be. There is no need to do something for that just pressing over. It will be enough."
    },
    {
      id: 19,
      q: "IS HAIR TRANSPLANT NOTICEABLE AFTER THE TRANSPLANTATION?",
      a: "Hair transplant is not noticeable in the end. But, in the progress ,at least after third week until fourth month or fifth month until the hairs grow, yes some redness may occur or some due to density in lack of density it may be noticeable. But, when it's totally grown and we we see the real result if it is done very properly with the right angle with the right direction and right implantation it is not noticeable. So, whatever we have to we we want to do for the patients is giving a natural a an aesthetical look after the surgery and the result."
    },
    {
      id: 20,
      q: "SHOULD I USE PRP BEFORE OR AFTER THE SURGERY?",
      a: "Actually PRP is not most of the doctor's approved solution for the hair loss treatment. But in my daily practice, in our clinic, that other doctors prefer PRP when there is onset of the hair loss. So repeated prp sessions is very beneficial and affected effect by the hair loss problems. And after the surgery, it gives a good recovery period, it heals better and the the growth will be quicker if it is done repeatedly at least a month for five to six months."
    },
    {
      id: 21,
      q: "SHOULD YOU CONTINUE ORAL MEDICATIONS FOR LIFE LONG TIME AFTER THE HAIR TRANSPLANT SURGERY?",
      a: "The answer is very individual because we never know when the shedding or the hair loss will stop in some patients. The hair loss may stop immediately after the hair transplant surgery. Because the active stage of the shedding is gone or in some patients it may last up to the age of 50 or even 55."
    },
    {
      id: 22,
      q: "SHOULD YOU USE FINASTERID AFTER THE HAIR TRANPLANT SURGERY?",
      a: "Finasteride is one of the two FDA approved medical treatments for the hair loss. Finasteride is the most potent or efficient medication today. We have to treat the androgenetic alopecia at least 85 of the patients who use the finasteride they stop the hair loss and the hair start to improve gaining back their volume and density."
    },
    {
      id: 23,
      q: "WHAT DIET SHOULD PATIENTS HAVE AFTER THE HAIR TRANSPLANTATION?",
      a: "After the hair transplantation, we do not recommend too many restrictions for the diet. But, at least 2 to 3 days in order to prevent some swelling, we do not want patients to eat more salt during their diet but other than that there is no restriction with any food preference."
    },
    {
      id: 24,
      q: "WHAT IS THE SUCCESS RATES OF THE HAIR TRANSPLANTATION?",
      a: "We expect some success rates in different areas. Especially, the frontal area is more vascularized. So, the success rates are more than 95 percent but when we come for the crown area due to circulation and anatomical and physical physiological conditions, the success rates are 70 to 80 percent. And, it depends on the grafts needed by hair transplantation in the desired area. If patient needs two high graft numbers in the vertex even implanting more grafts, that area will be resulted as lower success rates. So, according to the hair transplantation principles, each different area needs different density implantation during the surgery."
    },
    {
      id: 25,
      q: "WHAT SHOULD BE THE TEMPERATURE OF THE WATER FOR THE WASH AFTER THE HAIR TRANSPLANT SURGERY?",
      a: "We advise our patients to wash their head for the first one month after the hair transplant surgery every day for the first two weeks. It should be done the way it's explained in the clinic or shown on our video. The temperature of the water should be the warm one, it should not be very cold, it should not be hot, the warm comfortable temperature of the water is enough."
    },
    {
      id: 26,
      q: "WHEN CAN I GO BACK TO WORK AFTER HAIR TRANSPLANTATION?",
      a: "Patients after the hair transplantation go to the work even two days later one day or two days later. Because it's not a physical thing. But of course if patient wants to rest, we advise we recommend them to at least one or two days to rest and then they go to the their work. But, the main thing maybe the patient's concerned about that is patients may not be seen by other people or eyes on their hair transplantation. So, sometimes they do not want to go to work very soon but they can just go back to their work two days later."
    },
    {
      id: 27,
      q: "WHEN CAN I HAVE SEXUAL INTERCOURSE AFTER THE HAIR TRANSPLANTATION?",
      a: "Hair transplantation is a normal procedure and after the hair transplantation patients may have sexual intercourse. There is no contraindication for that even just after the surgery. It's possible to do it because it's not a contraindication for the transplantation. Only the patients have to take care is not to sweat too much during all physical activities like a sexual intercourse."
    },
    {
      id: 28,
      q: "WHEN CAN I SHOWER NORMALLY AFTER HAIR TRANSPLANT?",
      a: "You can use your shower with normal pressure after hair transplant after 10 days. In 10 days, your grafts will attach your skin. So, there will be no harm for your grafts with the normal pressure."
    },
    {
      id: 29,
      q: "WHICH SHAMPOO IS THE BEST AFTER HAIR TRANSPLANT?",
      a: "Any natural shampoo will do good after your hair transplant. You should avoid harmful chemicals and you can google the ingredients of the shampoo and you may choose the best one. But, if you ask my personal opinion, you may buy natural olive oil shampoos that will work."
    },
    {
      id: 30,
      q: "WILL I CONTINUE TO LOSE MY EXISTING HAIR AFTER HAIR TRANSPLANT?",
      a: "Hair transplant do not protect your existing hair or cause to lose them in the future. It's all about your genetics. If your genetics coded, then you will."
    },
    {
      id: 31,
      q: "IS IT MUST FOR THE PATIENT TO HAVE A PRP TREATMENT AFTER THE HAIR TRANSPLANT SURGERY?",
      a: "PRP is not a must treatment of the hair transplant surgery. But we advise it because it facilities of re-growth of the hair, helps to fight miniaturization and the recovery of the skin after the hair transplant surgery."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
      {/* --- PAGE HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-gray-50 border-b border-gray-200 px-6"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumbs aligned left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/faq" className="hover:text-[#772424] transition-colors">F.A.Q.</Link>
            <span>/</span>
            <span className="text-[#772424]">Post Operation</span>
          </div>
          {/* Heading aligned left */}
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Post Operation
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT SIDE: FAQ ACCORDION */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight uppercase mb-6">
                  Post Operation
                </h2>
              </motion.div>

              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col gap-4">
                {faqs.map((item) => {
                  const isActive = activeIndex === item.id;
                  return (
                    <div 
                      key={item.id} 
                      className="flex flex-col w-full shadow-md transition-all duration-300 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full flex items-center justify-between px-6 py-5 md:px-8 md:py-6 bg-[#772424] text-white font-bold text-left transition-colors duration-300"
                      >
                        <span className="text-base md:text-lg pr-4">{item.q}</span>
                        <span className="text-2xl font-light leading-none shrink-0">
                          {isActive ? "−" : "+"}
                        </span>
                      </button>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="bg-gray-200 overflow-hidden"
                          >
                            <div className="px-6 py-8 md:px-8 md:py-10 text-black font-medium text-base md:text-lg leading-relaxed">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>

            </div>

            {/* RIGHT SIDE: STICKY CONSULTATION FORM */}
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
                    <input type="checkbox" id="postOpPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="postOpPrivacy" className="text-xs text-white/80 cursor-pointer">
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