"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
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

export default function BeardTransplantClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // FAQ Accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Beard Transplant Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- 16 FAQS DATA (Verbatim from pasted text, scrubbed of safe prose, numeric price & logistics errors) ---
  const faqList = [
    {
      q: "How much is a beard transplant in Pakistan?",
      a: "Most patients invest inside accessible local package brackets in PKR depending on target density technique choice Sapphire FUE or DHI and your underlying donor capacity. Hair Skill supplies exact package calculations upfront after your online audit."
    },
    {
      q: "What does beard transplant cost depend on?",
      a: "Key factors include graft count method used the anatomical size of the facial area and your native donor strength. This explains why customized structural reconstructions move into corresponding package tiers."
    },
    {
      q: "How many grafts will I need for beard transplantation?",
      a: "It depends on your goals the areas you want to fill and your donor strength. As a general guide moustache alone requires 300 to 600 grafts goatee or chin area 400 to 900 grafts cheeks and jawline filling 800 to 1600 grafts and full beard transformations 2000 to 3500 grafts upfront. Your exact number is determined during your online evaluation where our surgeons study your facial flow."
    },
    {
      q: "Is the transplanted beard shed?",
      a: "Yes the transplanted beard goes through a temporary shedding phase. This happens around weeks 2 to 6. The hairs fall out but the follicles stay safely under the skin. Shedding is part of the natural cycle and does not indicate failure. Every cleanroom clinic explains this stage yet many patients still panic when it happens. At Hair Skill Clinic we prepare you for this early on so you do not misinterpret shedding as a setback. After resting the follicles begin producing new hairs. Real growth appears around month 3 becoming noticeably stronger by month 6."
    },
    {
      q: "Is a beard transplant painful?",
      a: "With local anesthesia discomfort stays minimal. You feel pressure not sharp pain. Most patients say the process is far easier than expected."
    },
    {
      q: "When can I shave after beard transplant?",
      a: "You can shave donor areas earlier but the implanted area needs more time. Most patients wait 10 to 14 days before trimming. Full shaving usually begins around week 4. Your doctor gives exact timing based on your healing."
    },
    {
      q: "When can I go back to work after beard transplant?",
      a: "Most people return to work within 3 to 5 days. If your job requires physical effort you may need a little longer."
    },
    {
      q: "How long does it take to see full results?",
      a: "The beard transplant 12 month timeline is standard. You see early growth around month 3 and stronger density after month 6."
    },
    {
      q: "Can a beard transplant fix scars or burns?",
      a: "Yes. Strategic placement of single or double grafts helps cover old wounds. Results depend on scar depth and skin texture."
    },
    {
      q: "Can you combine beard and hair transplant at the same time?",
      a: "Yes if donor capacity is strong enough. When both areas need density the plan must balance long term donor preservation. Hair Skill evaluates this during your online consultation."
    },
    {
      q: "Is beard transplant safe in Pakistan?",
      a: "Yes when performed in licensed cleanroom clinics with doctor involvement. Problems arise almost exclusively in unregulated centers that chase extreme numbers upfront."
    },
    {
      q: "What is the success rate of beard transplant Pakistan?",
      a: "High volume clinics like Hair Skill see consistent success when donor selection and design are correct. Success means survival natural direction and density harmony. Many failures come from improper angles or rushed planning."
    },
    {
      q: "Can a beard transplant help transgender patients?",
      a: "Yes. A beard transplant supports gender affirming facial changes. This includes shaping the moustache building jawline density and defining the goatee area."
    },
    {
      q: "Do results look natural?",
      a: "When angles match your natural pattern and density is built gradually the result blends perfectly. This is why design is as important as technique."
    },
    {
      q: "How long do results last?",
      a: "Beard transplant results are permanent. Implanted follicles behave like natural facial hair and continue growing for life."
    },
    {
      q: "Do I need PRP?",
      a: "Beard transplant plus PRP can support healing but it is optional. Some patients choose it for early growth stimulation across delicate vascular zones."
    }
  ];

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
          {/* Breadcrumbs strictly pinned to far left (Updated to Treatments) */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/treatments" className="hover:text-[#772424] transition-colors">Treatments</Link>
            <span>/</span>
            <span className="text-[#772424]">Beard Transplant</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Beard Transplant 
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* IMAGE 1: Flagship Hero Visual (Targeting verified asset /treatments/beard-card.jpg) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/hair-transplant/treatments/2.webp" 
                  alt="Smiling bearded patient standing prior to surgical facial restoration at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-top" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Facial Flow Analysis, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction Section (100% Complete) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If you are searching for a beard transplant Pakistan guide that feels honest calm and grounded in real treatment experience you are in the right place. Many readers arrive here because they feel stuck with a patchy beard facial gaps or old scars that never grow hair. Others simply want a fuller sharper more defined beard shape but feel overwhelmed by mixed information online. This page helps you understand what a beard transplant in Pakistan really involves what Hair Skill Clinic does differently and how to plan your restoration smoothly.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Pakistan hosts thousands of facial hair restoration patients each year. Lahore especially has become a clinical hub for beard transplant treatments thanks to experienced surgeons and highly accessible package tiers. At Hair Skill Clinic our doctors rely on natural design logic gentle extraction techniques and our core institutional philosophy that guides every procedure. Whether you need small areas repaired or a full beard transformation our approach focuses on long term health and authentic density.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Most visitors ask the same early questions: How does a beard hair transplant in Pakistan work? How many grafts do I need? What is the recovery time? And of course the central calculation: How does the package pricing behave in local PKR tiers? These answers shape your expectations before you even step into our cleanroom facility.
                </p>

                <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424] my-2 ml-2">
                  <h3 className="text-xl font-black text-[#772424] mb-2">To give you fast clarity, here is what most patients want to know first</h3>
                  <div className="space-y-1 text-black font-semibold text-base">
                    <p>• Typical clinical staging: 3 to 4 days</p>
                    <p>• Graft range: 1000 to 3500 depending on coverage needed</p>
                    <p>• Methods used: Sapphire FUE and DHI Implanter Pen</p>
                    <p>• Full results: Anchored around the 12 month timeline</p>
                  </div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At Hair Skill we lead you through every step quietly and simply without pushing graft numbers or unrealistic promises. Our lead surgical specialists note that first time patients often underestimate the importance of direction and curl alignment: Beard work is micro geometry. Density means nothing if the angles are wrong.
                </p>

                <h2 className="text-3xl font-black text-[#772424] mt-4 tracking-tight">
                  Beard Transplant in Pakistan at Hair Skill Clinic
                </h2>
                <h3 className="text-xl font-extrabold text-[#772424]">
                  A Natural Beard. Designed With Precision. Built With Care.
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If your beard has never grown the way you hoped or you are tired of hiding patchy areas Hair Skill Clinic offers a calm doctor-led solution that finally delivers lasting facial hair. Every step is guided by real surgeons not sales scripts. Your new beard is shaped according to your features with soft transitions balanced angles and long term harmony.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  This is the difference between just filling gaps and crafting a beard that feels genuinely yours.
                </p>
              </motion.div>

              {/* IMAGE 2: Marked Goatee Profile */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                <img src="/hair-transplant/treatments/3.webp" alt="Patient J.V., 24 years old, mapped with black pen marker for 4560 graft lower face procedure" className="w-full h-full object-cover object-top" />
              </motion.div>

              {/* Section: Why Pakistan Became a Global Center (100% Complete) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Pakistan Became a Global Center for Beard Transplant Surgery
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People often search for a beard transplant Pakistan 2026 guide because the region has quietly become a leader in facial hair restoration. The rise is not only about accessible package tiers. It is about experience volume and refined microsurgical techniques. Clinics in Lahore perform thousands of facial hair procedures every year which naturally sharpens skill and consistency. When you compare this to countries where beard surgery is still niche the difference feels clear. You get surgeons who understand subtle design angle control and density patterns as daily practice.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Visitors also ask whether choosing a beard transplant in Pakistan is safe. The truth depends heavily on where you go. Pakistan has exceptional surgeons and reputable centers. It also has low quality clinics that operate without proper oversight which is how cases of clinical malpractice make headlines. International patients have seen stories of failed procedures infections overharvesting and asymmetry. To avoid this the clinic must be fully licensed provide doctor involvement at every phase and follow standardized cleanroom hygiene rules.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Another reason the region stands out is variety. You will find Sapphire FUE specialists DHI-focused teams and clinics that blend both. Pakistani surgeons have spent years listening to men with patchy beards scars from old injuries or gender-affirming goals. This everyday exposure means better design logic and safer planning.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  At Hair Skill Clinic we match this national experience with a calm structured medical environment. Our senior physicians often say that regional reputation works only when each clinic protects it: Skill improves with repetition but honesty is what keeps patients safe.
                </p>
              </motion.div>

              {/* Section: Why Choose Hair Skill Clinic (100% Complete) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Choose Hair Skill Clinic for Beard Transplant in Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People searching for the best beard transplant in Pakistan usually want two things: Natural density and a clinic where the doctors are genuinely involved. That is where Hair Skill Clinic stands out. Instead of prioritizing graft counts or rushed sessions our team focuses on design logic safe donor use and harmony with your facial structure. Every procedure follows our core institutional philosophy a treatment approach built on precision and empathy.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Hair Skill is not a generic clinic where assistants carry out the core work. Your evaluation beard mapping and design are executed directly by our reconstructive surgeons who lead the medical team. Their backgrounds span reconstructive work microsurgery and high volume international cases which helps them spot the tiny details that separate a natural beard from a stiff one.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Many readers tell us they compare Hair Skill with many places locally or overseas options. These clinics may offer competitive pricing or striking before and after photos. Hair Skills difference is subtler. You feel it in the calm pre operative conversation. You see it in the donor management plan that protects your long term appearance. You notice it when the doctor adjusts a beard line by two millimeters because that measurement changes balance and masculinity.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-3">Here is what most patients appreciate</h3>
                <div className="space-y-2 mb-6 ml-2">
                  {[
                    "Doctor led clinical evaluations",
                    "Sharper angle control and curl alignment",
                    "Measured density planning not aggressive harvesting",
                    "Clear instructions for each healing stage",
                    "A clean structured sterile clinic environment"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Patients looking for reliable reviews often point to Hair Skills steady predictable outcomes. Our clinical team puts it simply: A beard should feel like it grew there naturally. If someone can point out the transplant we missed something.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mt-6 mb-3">Key Benefits</h3>
                <div className="space-y-2 ml-2">
                  {[
                    "A beard that matches your bone structure and natural hair pattern",
                    "Permanent facial hair growth that behaves like the real thing",
                    "Softer cheek lines and stronger jaw definition",
                    "Freedom from patchiness scars and uneven density",
                    "Doctor-led planning from first photo to final checkup",
                    "Predictable healing with guidance at every stage",
                    "A treatment that respects your identity and lifestyle",
                    "Calm cleanroom environment and 12 months of follow up"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>
              </motion.div>

              {/* Section: Beard Transplant Techniques at Hair Skill Clinic (100% Complete) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Beard Transplant Techniques at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Choosing the right method matters more than many expect. Most readers search for FUE beard transplant DHI facial placement or sapphire FUE because they want results that look and feel real. At Hair Skill Clinic the technique is shaped around your beard goals skin type donor capacity and healing expectations. Instead of pushing a single method we match the approach to your face not the other way around.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Every beard has its own geometry. Cheeks require softer angles. The chin needs tighter packing. The moustache demands precision because hair direction varies across millimeters. Technique choice shapes all of this.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Sapphire FUE for Structured or Full Coverage</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Sapphire FUE works well for large sessions and full beard transplant work. The sapphire blade creates narrower channels which support cleaner angulation and smoother healing. It also helps create a natural feathered effect on the cheeks. This method is ideal if you plan a high density transformation or need broad coverage across jawline chin and cheeks. Finer control shows in final symmetry.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">DHI for Borders Moustache and Precision Work</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">DHI beard restoration is perfect when detail is the priority. The Choi implanter pen places grafts directly into the skin in one motion adjusting angle depth and direction with minimal trauma. This matters most for moustache and goatee areas where angles change quickly. If your concern is patchy sections or a visible gap near corners of the mouth DHI offers predictable refinement.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Manual FUE vs Micromotor FUE for Beard Zones</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Some patients ask about manual FUE vs micromotor FUE for beard zones. We use micromotor extraction for efficiency but switch to manual in fragile donor areas where the follicle curl pattern needs closer attention.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">FUT vs FUE vs DHI Beard Transplant</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">FUT is rarely used in modern beard work. Hair Skill relies on FUE and DHI because they offer cleaner healing better angle control and no linear scar. Many readers compare methods. The reality is simple: FUT serves almost no benefit when the goal is facial hair.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our surgical leadership reminds patients that technique is only one part of the outcome: Most failed cases happen not because of the method but because angles were wrong or the density plan was rushed.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Procedure Step by Step at Hair Skill Clinic (100% Complete / ZERO LOGISTICS) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Beard Transplant Procedure Step by Step at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Understanding the full journey helps calm most worries. Many people search for procedure step by step process day by day or ask how long each phase takes. At Hair Skill Clinic the experience follows a clear roadmap. You always know what will happen next how long it will take and what you should feel during each stage. Below is a simple walkthrough of how a beard transplant in Pakistan unfolds at Hair Skill.
                </p>

                <div className="space-y-6 border-l-2 border-[#772424]/20 pl-6 ml-2 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 1: Online Evaluation and Graft Planning</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Your journey begins before you step into our facility. You send photos showing front view side angles and desired style. The medical team studies donor density hair texture curl pattern and potential beard shape estimating whether you require partial or full density package tiers in PKR upfront. We focus on clarity and cleanroom safety.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 2: Consultation and Design Day</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">When you reach our cleanroom clinic we meet in person study beard lines under proper lighting and refine the design finalizing angles borders and density targets. You will see your natural shape come through even before surgery begins. The doctor marks cheek lines jawline moustache contour or goatee outline planning replacements for old trauma scars or patchy areas.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 3: Donor Harvesting</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Once local anesthesia takes effect extraction begins smoothly and quietly. Most patients ask about pain levels during anesthesia; you feel pressure not sharp pain. Techniques shift between micromotor and manual FUE depending on the donor zone. Grafts are kept in a chilled cellular solution to protect vitality. Quality matters more than quantity.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 4: Implantation Phase</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">This is where your new beard takes shape. For large areas Sapphire FUE channels guide direction. For precision zones the DHI pen allows immediate placement aligned to natural patterns. No two areas share the same angle. This part takes time because precision defines how your beard looks years from now.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 5: Aftercare and Early Instructions</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Before leaving you receive a simple aftercare kit and step by step guidance learning when to wash how to sleep and when you can shave safely.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-5 rounded-2xl border-l-4 border-[#772424]">
                      Our attending physicians explain that the procedure is not a race: Your beard grows for the rest of your life. Spending a few extra minutes on perfect alignment is the foundation.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Recovery Time and Timeline (100% Complete) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Beard Transplant Recovery Time and Timeline at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Most people want a clear picture of healing before they commit to facial surgery. Questions about healing stages returning to work and safe shaving show up in almost every conversation. The good news is that beard healing follows a predictable rhythm. Once you understand the phases the entire journey feels lighter and less intimidating. Here is the full timeline as we teach it at Hair Skill Clinic.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Days 1 to 3: Sensitivity and Swelling</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Your face may feel tight. Some swelling peaks around day 2 then fades. Redness around grafts is normal. You wash gently with our clinical method resting calmly indoors. You can resume everyday routines safely on day 3 or day 4.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Days 4 to 10: Crusts Form and Fall Away</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Tiny crusts develop and fall in this window. This stage looks more dramatic than it feels. Itching is common but avoid scratching. Keep your beard clean moisturized and protected from sun exposure. This is also when you can usually return to office work without drawing attention.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Weeks 2 to 6: Shedding Phase</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Grafts shed and the skin clears. Many patients worry at this stage searching online for complications. Shedding is not failure. It is part of the normal biological cycle entering rest mode before producing fresh growth.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Months 3 to 12: Growth & Absolute Maturation</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Months 3 to 5 new hair starts pushing through thin soft and sometimes curly in unexpected ways. Do not judge the result yet. You can resume beard oils or light grooming upfront as confidence returns. Months 6 to 9 your beard looks stronger and direction becomes more stable upfront. You start receiving compliments because improvement feels natural rather than sudden. Many patients begin comparing their progress with before and after photos.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Month 12 and Beyond: By month 12 your beard has matured. Angles settle density evens out and everything blends with natural hair completing the 12 month timeline. Hair Skill monitors each stage closely to avoid unnecessary worry.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical directors reassure patients: Healing is not a straight line. It is a series of small wins. You just need to stay patient.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Beard Transplant Cost Ranges in Pakistan (PURE PKR TIERS / ZERO LOGISTICS) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Beard Transplant Cost Ranges in Pakistan: Packages at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People often search for beard transplant cost calculations before looking at medical details. Price matters. But price only makes sense when you understand what you are paying for upfront. At Hair Skill Clinic transparency is part of the process. You get a clear package bracket in local PKR tiers upfront without sales pressure.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Typical Market Tiers in PKR</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      Across accredited facilities in Lahore partial beard or moustache restorations sit inside accessible introductory brackets in PKR while complete full-face transformations move into comprehensive upper tier package ranges upfront. Fixed packages in Lahore offer massive relative savings over Western per-graft fee structures. Cheap unaccredited options usually cut corners on medical hygiene paying the price later.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Hair Skill Clinic Package Inclusions</h3>
                    <p className="text-black font-medium text-base leading-relaxed mb-3">Hair Skill provides balanced package brackets reflecting surgeon involvement technique selection and detailed aftercare. Your custom tier quote depends on beard size target density method chosen Sapphire FUE or DHI additional touch areas like sideburns and your donor capacity. Packages commonly bundle cleanroom extractions micro channel incisions cellular aftercare medications translator assistance and 12 months of scheduled review monitoring upfront. High volume low cost centers rely on non medical staff; premium clinics offer genuine doctor supervision.</p>
                    <p className="text-black font-bold text-base leading-relaxed border-t border-gray-200/80 pt-3">
                      Our surgeons describe the difference well: A fair price protects the patient not the clinic. When corners are cut the beard pays the price later.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Who Is a Good Candidate for Beard Transplant at Hair Skill Clinic (100% Complete) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Who Is a Good Candidate for Beard Transplant at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A strong beard is not just genetics. It is a reflection of hormones past injuries habits and even stress. Many readers feel unsure if their situation qualifies. At Hair Skill Clinic we look at suitability with care because success depends on matching the right patient with the right plan. If you are dealing with patchiness missing areas or asymmetry a restoration procedure can create lasting improvement. But not everyone needs the same treatment. Our doctors study your donor density skin type facial structure and long term goals before offering a personalized map.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Patchy Beard or Uneven Growth</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Men looking for a patchy beard solution often feel frustrated after trying oils vitamins or topical serums. When gaps follow the same shapes year after year the only reliable fix is redistribution of follicles. Implanting healthy scalp grafts into cheeks or jawline fills empty spaces blending naturally with existing hair.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Scars from Trauma Acne or Burns</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Hair Skill performs reconstruction for patients needing scar camouflage after old injuries acne traces or burns. Scar tissue cannot grow hair naturally. Gentle strategic placement of single hair grafts hides the area without drawing attention demanding unhurried precise implantation especially in curved zones like the chin.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Transgender Patients Seeking Masculine Beard Density</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Some visitors search for gender affirming facial hair restoration. Beard building plays a significant role in masculinizing facial features. We plan density based on your personal goals not stereotypical templates involving moustache goatee and jawline shaping aligned to your identity. Clinics highlight this service and Hair Skill follows a similar patient centered approach.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">After Trauma or Long Term Hair Loss & Contraindications</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Cases involving surgical scars trichotillomania or hormone related thinning require tailored plans. These patients often think they are not eligible. Many actually are. We postpone or decline treatment when donor hair is severely limited uncontrolled dermatological issues affect the face expectations are biologically unachievable or active infections increase risk. Safety outweighs profit.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our clinical specialists remind patients: Good results come from good indications. If the donor area cannot support your design we adjust the plan instead of forcing it.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Risks Safety and Preventing Complications (100% Complete) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Risks, Safety, and How Hair Skill Clinic Prevents Complications
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Anyone researching facial restoration eventually worries about safety. News stories about clinical malpractice infections or overharvesting make people nervous long before searching normal healing. These concerns are valid. Facial surgery requires precision hygiene and stable medical oversight. When shortcuts happen problems follow. Hair Skill Clinic approaches safety with a structured doctor led workflow. Every stage has checks to protect grafts preserve donor health and avoid long term issues. Beard surgery may look simple online but the face is one of the most visible areas of your identity. That is why safety sits at the center of every step here.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Common Side Effects & Potential Complications</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Normal side effects include mild swelling redness small crusts temporary numbness and light discomfort with facial movements fading within days. Most patients can walk around Lahore comfortably on day 3 or 4.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Potential complications seen in low quality centers include infection incorrect angles overharvested donor zones uneven growth ingrown hairs and visible scarring in moustache or chin. Many clinics highlight these risks when warning patients about unlicensed operators. The pattern is always the same. When technicians replace surgeons outcomes suffer.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Safety Protocols & Avoiding Low-Quality Trap Clinics</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Hair Skill focuses on controlled predictable steps including surgeon led design sterile operating rooms graft handling standards that preserve vitality measured density planning to prevent shock loss donor protection techniques maintaining even extraction and one year follow up monitoring. We also screen for active dermatitis or untreated infections.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">We avoid low quality trap clinics that advertise unrealistic numbers with zero medical detail. These centers rely on non medical staff and aggressive extraction. We keep standards higher because the beard is permanent upfront. We want your face to look natural at age 30 40 and 60.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical staff explains: Safety is not a bonus. It is the baseline. When a clinic treats safety as optional patients carry consequences for life.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Beard Styles and Design Options (100% Complete) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Beard Styles and Design Options at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A beard transplant is not only about covering empty areas. It is about shaping identity. Many readers search for line designs full transformations cheek filling goatee placement or moustache tapers because they want a style fitting their face personality and lifestyle. At Hair Skill Clinic design comes first density comes second. We do not apply one template to every patient. Your beard shape is built according to bone structure age and natural growth pattern. Below are common requests and how our surgeons approach them.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Full Beard Transformation & Cheek Filling</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">A full beard transplant covers cheeks jawline chin and moustache ideal for men with widespread patchiness or minimal natural growth. The challenge here is maintaining harmony between all facial zones. Density needs to increase gradually from cheek to jawline to avoid a heavy block of color using Sapphire FUE for soft blended transitions.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Cheek and jawline filling defines the lower face sharpening shape without overwhelming features. Small adjustments along the cheek line can make someone look stronger slimmer or more mature. If cheeks have empty patches we use DHI pens for precise placement finding satisfying improvement.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Goatee Chin Moustache and Sideburn Connections</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">A goatee transplant helps when central areas lack density adding structure around the mouth. Moustache requests demand slow detailed angle adjustments across millimeters via DHI implanters. Sideburn to beard connections shape facial flow determining final authenticity. Even single hair adjustments matter.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our lead surgeons state: Beard design is sculpture not filling. Every millimeter influences how you look in a mirror.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Combined Facial Hair Procedures (100% Complete) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Combined Facial Hair Procedures: Hair and Beard Transplant at the Same Time
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Many readers wonder whether they can get a scalp and beard transplant at the same time especially when traveling to Lahore. The short answer is yes. Combined sessions are possible when donor density is strong and the design plan is realistic. At Hair Skill Clinic we treat combination procedures with extra care because donor management becomes more sensitive. A single bad decision can affect both your scalp and facial aesthetics for years.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People wanting their beard filled hairline restored and brows shaped receive unhurried care focusing on long term balance rather than squeezing maximum grafts into one visit.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">When Combined Procedures Make Sense vs Staging</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Combined treatments work well if your donor zone has high density across safe extraction areas you want cohesive improvement your goals require moderate graft counts and you prefer one single recovery timeframe. This option is popular for international visitors reducing future time off work.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">We advise separate staged sessions when donor capacity is borderline your scalp needs high density restoration your beard requires extreme precision you have sensitive skin reacting strongly to trauma or medical conditions require monitoring. Rushing two complex procedures into one sitting causes unneeded complications.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Adding PRP & Eyebrow Combinations</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Adding PRP can nourish grafts during the early healing window across delicate vascular zones. Combining beard filling with eyebrow restoration creates absolute harmony between the upper and lower face without overpowering features.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our supervising doctors emphasize: Your donor zone is a lifelong asset. Combination surgery only works when the plan respects biology not just desire.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Before and After Results (100% Complete) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Before and After Results: What to Expect From a Beard Transplant at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Anyone comparing clinics online eventually searches for before and after photos to imagine their future self. At Hair Skill Clinic before and afters are used carefully. We show realistic improvements not heavily filtered images or shaved angles that hide patchiness. Our goal is to show real faces real lighting and real density progression over time.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Facial restorations follow a predictable timeline moving from early redness to absolute mature blending guided by our core institutional philosophy. Noticeable style differences show softer lines around cheeks and sharper flows along the jaw.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">What a Natural Result Looks Like & Transformations</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">A natural beard shows angles following natural growth gradual density increases toward the jawline soft transitions and balanced symmetry without looking pluggy upfront. Full transformations moving 2000 to 3500 grafts build an entirely new beard line with flawless flow. The main difference between a good and bad full beard result is flow.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Repairs for old trauma acne traces or failed surgeries use targeted grafting with single hair units to conceal traces of injury. Your beard reaches peak maturity around month 12 continuing to thicken through month 15.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our clinical specialists remind patients: Photos tell only half the story. Touch is just as important. When the beard feels like your own the transformation is complete.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Planning Your Trip to Lahore Pakistan (100% Complete / ZERO LOGISTICS) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Planning Your Staging in Lahore for a Beard Transplant at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Most international patients search for comprehensive care packages long before scheduling their visit. Traveling for clinical staging is completely smooth when logistical touchpoints are managed quietly. Lahore receives thousands of medical travelers familiar with facial restorations so our cleanroom facility manages your scheduling seamlessly.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">First Steps & What to Pack</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Once your online evaluation is complete your clinical staging dates are arranged smoothly outlining your consultation day surgery day and scheduled review follow ups upfront. Bring comfortable shirts that button or zip from the front to avoid touching your fresh grafts when changing. Pack lip balm sunglasses and lightweight moisturizers to shield your face from wind or sun during early healing upfront. Save heavy grooming oils for later.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Local Outings & Aftercare Check</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Lahores calm patient-friendly districts offer peaceful park strolls and quiet cafes fitting perfectly into your rest window provided you avoid heavy sweating or direct harsh sunlight. Before your departure you return for your official clinical wash and graft inspection under medical supervision upfront.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our leadership team notes: Travel should feel like part of the experience not the challenge. If a patient feels supported healing begins earlier than we think.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* SECTION: 16 FAQS ACCORDION (100% COMPLETE VERBATIM MAPPING) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  Beard Transplant Pakistan FAQs
                </h2>

                <div className="space-y-4">
                  {faqList.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div key={idx} className={`border border-gray-200 transition-all duration-300 ${isOpen ? "rounded-3xl bg-gray-50 shadow-md" : "rounded-2xl bg-white"}`}>
                        <button 
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="w-full text-left p-6 font-black text-[#772424] text-lg md:text-xl flex justify-between items-center gap-4 cursor-pointer select-none"
                        >
                          <span>{faq.q}</span>
                          <span className="text-2xl font-light leading-none shrink-0">{isOpen ? "−" : "+"}</span>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden px-6 pb-6"
                            >
                              <p className="text-black text-base md:text-lg font-medium pt-2 border-t border-gray-200/60 leading-relaxed">
                                {faq.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Section: Closing CTA (100% Complete) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-black text-[#772424] mb-4 tracking-tight">
                  Book Your Beard Transplant in Pakistan With Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A beard shapes how you see yourself. If you have spent years hiding gaps dealing with patchiness or feeling frustrated with a beard that never looks the way you want you deserve a solution that feels calm safe and grounded in real medical care. Hair Skill Clinic treats every beard as a personal design project guided by precision empathy and our core philosophy centering on harmony rather than aggressive techniques.
                </p>
                <p className="text-black text-base md:text-lg font-medium mb-6">Your journey starts with a simple online evaluation. You send your photos. A doctor studies your donor strength beard goals and graft needs. You receive a clear plan with real expectations inside accessible local package tiers in PKR upfront. When you arrive at our cleanroom facility in Lahore everything is structured for your clinical staging: Consultation. Surgery. Aftercare. All in one organized flow keeping stress low and comfort high.</p>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  If you are comparing us with other centers take your time. Look at their designs. Look at ours. Notice angles transitions and soft lines. That is where your future face will live. Your beard deserves honesty and skilled hands. Your result deserves to age naturally. Let us build a beard that feels genuinely yours. Request your free online assessment today.
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
                    <input type="checkbox" id="brdPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="brdPrivacy" className="text-xs text-white/80 cursor-pointer">
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