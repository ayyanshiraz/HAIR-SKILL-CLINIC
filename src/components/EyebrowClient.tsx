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

export default function EyebrowClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Eyebrow Transplant Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- 10 FAQS DATA (Verbatim from pasted text, scrubbed of safe prose & exact numeric price errors) ---
  const faqList = [
    {
      q: "What is an eyebrow transplant?",
      a: "A procedure that uses your own hair follicles usually from behind the ear or scalp to create fuller natural eyebrows."
    },
    {
      q: "How long does an eyebrow transplant in Pakistan take?",
      a: "Typically 2 to 3 hours depending on the number of grafts and design complexity."
    },
    {
      q: "Is an eyebrow transplant painful?",
      a: "Local anesthesia keeps the procedure comfortable. Most patients describe it as easier than dental work."
    },
    {
      q: "How much does an eyebrow transplant cost in Pakistan?",
      a: "Most patients invest inside accessible local PKR package tiers depending on technique choice and surgeon expertise."
    },
    {
      q: "How many grafts do I need for an eyebrow transplant?",
      a: "Usually 200 to 400 grafts per brow based on thickness arch shape and existing hair."
    },
    {
      q: "How long do eyebrow transplant results last?",
      a: "Results are permanent because the transplanted follicles continue growing like natural hair."
    },
    {
      q: "Is eyebrow transplant better than microblading?",
      a: "Yes. A transplant is permanent looks more natural and does not fade or discolor like microblading or tattoos."
    },
    {
      q: "When can I go back to work?",
      a: "Most patients return to work within 2 to 3 days."
    },
    {
      q: "Can men also have eyebrow transplant?",
      a: "Absolutely. Men often want straighter fuller brows with strong structure and results look very natural."
    },
    {
      q: "When can I shape or pluck my brows again?",
      a: "Usually after several months once the follicles fully stabilize."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24 overflow-x-hidden">
      
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
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/hair-transplant" className="hover:text-[#772424] transition-colors">Hair Transplant</Link>
            <span>/</span>
            <span className="text-[#772424]">Eyebrow Transplant</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Eyebrow Transplant
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & 3 MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 block">
              
              {/* IMAGE 1: Flagship Hero Visual */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/hair-transplant/24.webp" 
                  alt="Surgeon measuring patient facial symmetry and arch height during Eyebrow Transplant design phase" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Eyebrow Design Precision, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Natural brows change everything. They frame your eyes lift your expression and shape how confident you feel when you look in the mirror. So when filters pencils or microblading cannot hide sparse eyebrows many people start searching for a permanent fix. That search usually leads straight to an eyebrow transplant Pakistan page. And for good reason.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Pakistan is one of the most trusted destinations for eyebrow transplant Lahore procedures offering high experience natural design and package tiers that feel realistic instead of overwhelming. At Hair Skill Clinic we take that foundation and raise the standard with artistry precision and doctor led planning.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  An eyebrow transplant in Pakistan is a simple medical procedure where single hair grafts are taken from a suitable donor zone often donor area behind the ears or occasionally the back of the head. These grafts are then placed one by one to rebuild the brow with the correct direction and a shallow implantation angle 10 to 15 degrees. When done with care you get real living brow hairs that grow naturally and blend into your face without effort.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Patients come to Hair Skill because they want more than a technical job. They want design awareness. They want safety. They want a clinic that understands the emotional side of thin brows over plucked eyebrows or loss after trauma.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our lead surgeons often say something simple that guides our approach: Brows must move with your expression. If they look drawn on the surgery missed its purpose. Here your brows grow back in a way that feels like you never lost them.
                </p>
              </motion.div>

              {/* Section: Is Eyebrow Transplant Right for You */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Is Eyebrow Transplant in Pakistan Right for You?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  If you are dealing with thin eyebrows patchy areas or long term gaps that never grow back no matter what you try an eyebrow transplant Pakistan procedure can be a meaningful solution. It is chosen by women and men who want natural fullness instead of penciling microblading touch ups or cosmetic tattoo fades.
                </p>

                <div className="space-y-6">
                  <p className="text-black text-base md:text-lg font-bold mb-4">Most people who come to Hair Skill fall into a few groups:</p>
                  <div className="space-y-2 ml-2 mb-6">
                    {[
                      "those with over plucked eyebrows that never recovered",
                      "those with naturally sparse eyebrows due to genetics",
                      "those who lost brow hair after scarring burns or minor trauma",
                      "those with gaps after medical treatments",
                      "those who want a refined softer brow shape that suits their face"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start sm:items-center gap-3"><span className="text-[#772424] font-black shrink-0">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">Who gets the best results</h3>
                  <p className="text-black text-base md:text-lg font-medium mb-3">Eyebrow transplant works best when there is:</p>
                  <div className="space-y-2 ml-2">
                    {[
                      "a stable pattern of thinning",
                      "healthy donor hair behind the ears or on the scalp",
                      "realistic expectations about density and shape"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start sm:items-center gap-3"><span className="text-[#772424] font-black shrink-0">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                    ))}
                  </div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mt-6">
                  When brows are rebuilt with single hair grafts placed at a controlled angle the results can look nearly indistinguishable from your natural brows. Active autoimmune conditions severe scarring disorders or unstable hair loss may delay or limit treatment. This is why a proper examination with high resolution dermoscopy is part of every Hair Skill consultation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our restorative specialists often remind patients: Eyebrows are not a template. They must match your personality as much as your face.
                </p>
              </motion.div>

              {/* Section: Why Choose Pakistan and Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Choose Eyebrow Transplant in Pakistan and at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Choosing an eyebrow transplant in Pakistan gives you access to surgeons who perform high volumes of brow restoration each year. Pakistan has become a global reference point for natural looking eyebrow design micro FUE mastery and accessible package tiers. For many patients this combination makes Lahore the most reliable destination for permanent eyebrow restoration.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-3">Benefits of having your eyebrow transplant in Lahore</h3>
                    <div className="space-y-2 ml-2">
                      {[
                        "Lahore clinics handle thousands of eyebrow cases annually which improves technique consistency",
                        "Investment tiers remain inside accessible PKR brackets while medical standards stay high",
                        "Brow focused surgeons refine angle control density planning and design mapping every day",
                        "All inclusive clinical packages simplify your experience and reduce unneeded stress"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start sm:items-center gap-3"><span className="text-[#772424] font-black shrink-0">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-3">What makes Hair Skill different</h3>
                    <div className="space-y-2 ml-2">
                      {[
                        "Hair Skill Clinic is design driven and internationally recognized",
                        "Our surgeons are known for micro FUE precision and eyebrow specific implantation angles",
                        "The clinics True Philosophy puts empathy education and long term satisfaction at the center",
                        "We regularly treat international patients seeking refined natural brow outcomes",
                        "Each design is created individually focusing on symmetry arch structure and facial harmony"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start sm:items-center gap-3"><span className="text-[#772424] font-black shrink-0">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our clinical team explains it clearly: Eyebrows influence expression more than any other feature. That is why their design must be intentional and personal.
                </p>
              </motion.div>

              {/* Section: Transplant vs Microblading */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why People Choose Eyebrow Transplant Instead of Microblading
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Eyebrow transplant in Pakistan continues to gain popularity because people want brows that grow behave and age like real hair. Microblading powder brows and tattoos can help temporarily yet they fade blur or shift color over time. A transplant gives you something more stable. It gives you hair you can shape trim and style exactly the way you prefer.
                </p>

                {/* IMAGE 2: Close up brow marking */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/32.webp" alt="Macro close up of patient brow zone marked with surgical white pen defining the new arch density" className="w-full h-full object-cover object-center" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">What makes a transplant different</h3>
                <p className="text-black text-base md:text-lg font-medium mb-3">A transplant uses your own living follicles taken from behind the ears or along the scalp. These grafts allow:</p>
                <div className="space-y-2 ml-2 mb-6">
                  {[
                    "real texture instead of ink strokes",
                    "long term results that do not wash or fade",
                    "styling freedom with tweezers gel or pencil",
                    "a softer organic look from every angle"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start sm:items-center gap-3"><span className="text-[#772424] font-black shrink-0">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  When the design is done carefully each graft is angled between 10 and 15 degrees to mimic your natural pattern. That direction creates the classic eyebrow flow: smooth at the inner brow defined through the arch and gradually tapered at the tail. Our medical staff puts it simply: Eyebrows frame emotion. When they look natural the entire face relaxes.
                </p>
              </motion.div>

              {/* Section: Step by Step Procedure */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  What an Eyebrow Transplant Looks Like Step by Step
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  An eyebrow transplant in Pakistan is a precise and gentle procedure that focuses on creating harmony softness and long term balance. At Hair Skill Clinic the process is shaped around comfort and design accuracy from the moment you arrive.
                </p>

                <div className="space-y-6 border-l-2 border-[#772424]/20 pl-4 sm:pl-6 ml-1 sm:ml-2 mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#772424] mb-1">Step 1: Consultation and digital eyebrow design</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">You meet your surgeon share your expectations and explore reference shapes. We map your ideal brow based on facial structure symmetry and muscle movement.</p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#772424] mb-1">Step 2: Donor area preparation</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Most grafts come from behind the ears or the lower scalp. These follicles have the right thickness for soft refined brows. Only single hair grafts are selected to avoid a heavy appearance.</p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#772424] mb-1">Step 3: Extraction using micro FUE</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">We use micro sized punches to gently remove follicles. This protects the root and keeps scarring minimal. Patients often describe this step as surprisingly comfortable.</p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#772424] mb-1">Step 4: Creating tiny channels & Implantation</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Angles matter here. Each opening is set between 10 and 15 degrees following natural brow direction. Your grafts are placed one by one. Total duration is usually 2 to 3 hours.</p>
                  </div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-5 rounded-2xl border-l-4 border-[#772424]">
                  Our lead surgeons explain it well: Design controls the outcome. Technique maintains it. Both must work together.
                </p>
              </motion.div>

              {/* Section: Recovery Healing and Growth Timeline */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Eyebrow Transplant Recovery, Healing, and Growth Timeline
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  Recovery after an eyebrow transplant Pakistan experience tends to feel simple and predictable. You can return to daily life quickly and the healing stages move in clear phases so you always know what to expect.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">Day 1 to Day 7</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">You will notice tiny scabs across each implanted hair falling away naturally within a week. Most patients feel comfortable going back to work after day three.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">Week 2 to Week 6</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Transplanted hairs begin to shed gradually as part of the follicle reset cycle. The roots remain in place and prepare for new growth.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">Month 3 to Month 6</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Soft thin hairs start to appear around month three. Most people notice clear shape definition by month five or six as confidence returns.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">Month 6 to Month 12</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Density improves each month. Your brows look more detailed and expressive. peak results reach their highest between month nine and twelve.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Techniques at Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Eyebrow Transplant Techniques at Hair Skill Clinic
                </h2>

                {/* IMAGE 3: Surgeon with ruler */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-8 shadow-md">
                  <img src="/hair-transplant/33.webp" alt="Hair Skill surgeon using micro precision ruler to calibrate eyebrow arch symmetry and graft placement" className="w-full h-full object-cover object-center" />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">FUE, DHI, and Sapphire Options</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Creating natural expressive brows requires precision at every step. FUE remains the most common choice where follicles are extracted one by one. DHI uses an implanter pen for direct placement along arches and tails without channel creation. Sapphire blades create ultra fine channels to support smooth blending with existing brow hair.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our attending physicians often explain: Technique is chosen after design. The design always leads and the method follows.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Eyebrow Transplant Cost Ranges in Pakistan */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Eyebrow Transplant Cost Ranges in Pakistan 2026
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Pakistan remains one of the most cost effective destinations for eyebrow restoration procedures. At Hair Skill Clinic pricing stays transparent inside accessible local PKR tiers so you can plan your treatment without surprises.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-lg sm:text-xl font-black text-[#772424] mb-2">Typical Package Tiers in PKR</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      Reputable Lahore clinics operate inside competitive investment brackets in PKR. Prices vary based on technique FUE DHI or Sapphire surgeon experience and graft count. Our package brackets stay within the typical Pakistan range; the true difference comes from the artisan craftsmanship of your medical design team.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-lg sm:text-xl font-black text-[#772424] mb-2">What Your PKR Investment Includes</h3>
                    <p className="text-black font-medium text-base leading-relaxed mb-3">Your custom tier calculation includes your surgeon consultation personalized design procedure using refined micro tools and post treatment products for healing and comfort. This clinical focus ensures every graft is placed with attention to facial harmony not just coverage.</p>
                    <p className="text-black font-bold text-base leading-relaxed border-t border-gray-200/80 pt-3">
                      Our financial counselors note: Price should reflect craftsmanship. Eyebrows shape identity. They deserve careful planning not quick shortcuts.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Candidacy and Safety */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Candidacy, Design, and Clinical Safety
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Ideal candidates include those with naturally thin brows density loss from over plucking or gaps caused by trauma. We avoid heavy blocky brows that look artificial; your design stays unique to your face shape and expression style. Only micro sized single follicles are selected for refinement to follow natural hair direction.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">How design and angle are mapped</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Your arch height is chosen according to eye shape and bone structure. Grafts are placed at acute angles between 10 and 15 degrees so brows look brushable smooth and natural. Female designs prefer a gentle arch with refined tails while male designs often favor straighter stronger definition.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical leadership summarizes: Safe eyebrows are planned not rushed. Natural outcomes start long before the surgery.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Scheduling Your Session in Lahore */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Scheduling Your Eyebrow Restoration in Lahore Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Expect to allocate 3 to 4 days for your clinical staging sequence in Lahore. Day one covers your clinical consultation digital design mapping and diagnostic tests. Day 2 is your eyebrow transplant procedure usually lasting 2 to 3 hours. Day 3 is your first clinical wash review and instructions for the healing phase.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Pack button down shirts to avoid pulling clothing over your fresh brows. Bring sunglasses for comfort and privacy. Enjoy light sightseeing like unhurried seaside walks or quiet cafes once localized swelling settles. Avoid intense sun sweating or crowded activities during the first few days. Keep your first days simple; your brows will settle best when you feel relaxed and unhurried.
                </p>
              </motion.div>

              {/* SECTION: 10 FAQS ACCORDION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  Eyebrow Transplant Pakistan FAQs
                </h2>

                <div className="space-y-4">
                  {faqList.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div key={idx} className={`border border-gray-200 transition-all duration-300 ${isOpen ? "rounded-3xl bg-gray-50 shadow-md" : "rounded-2xl bg-white"}`}>
                        <button 
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="w-full text-left p-4 sm:p-6 font-black text-[#772424] text-base sm:text-lg md:text-xl flex justify-between items-center gap-4 cursor-pointer select-none"
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
                              className="overflow-hidden px-4 sm:px-6 pb-6"
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

              {/* Section: Closing CTA */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-8 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-4 tracking-tight">
                  Start Your Eyebrow Transplant Journey With Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  If your eyebrows feel thin uneven or no longer reflect how you want to look you are not alone. Many of our patients arrive feeling frustrated with makeup routines or microblading touch ups that never look quite right. An eyebrow transplant at Hair Skill Clinic offers something different: a permanent natural solution built for your face not a template.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Our surgeons design each brow individually with careful attention to arch height tail direction and symmetry. Every graft is placed with the goal of creating expressive balanced brows that match your personality and facial structure. The result is subtle soft and long lasting.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Our clinical team guides you through every step from your first message to your final result. A personalized plan clear package tiers in PKR and a supportive local team keep your journey simple and reassuring.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  Ready to see what your new brows could look like? Upload your photos and request an eyebrow design consultation today. We will prepare a custom treatment plan and walk you through everything you need to know.
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
                    <input type="checkbox" id="ebPrivacy" required defaultChecked className="w-4 h-4 mt-0.5 sm:mt-0 accent-[#C5A059] rounded cursor-pointer shrink-0" />
                    <label htmlFor="ebPrivacy" className="text-xs text-white/80 cursor-pointer leading-relaxed">
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