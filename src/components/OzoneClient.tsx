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

export default function OzoneClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Ozone Hair Therapy Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- 9 FAQS DATA (Verbatim from pasted text, scrubbed of safe prose, exact numeric price & logistics errors) ---
  const faqList = [
    {
      q: "Does ozone therapy for hair loss really work?",
      a: "It supports thinning areas by improving oxygen flow and calming irritation. It helps with ozone therapy for hair thinning and ozone therapy for hair fall but it cannot replace lost follicles."
    },
    {
      q: "Is ozone therapy safe for hair?",
      a: "When done with medical oversight yes. Many patients tolerate it well. Poorly regulated devices increase risk which is why Hair Skill uses controlled systems."
    },
    {
      q: "How many sessions do I need?",
      a: "It depends on whether you treat ozone therapy for dandruff thinning or post transplant healing. Many start with a short series and adjust based on results."
    },
    {
      q: "Can ozone hair treatment cure dandruff?",
      a: "It can help reduce flakes and irritation thanks to the ozone therapy antibacterial effect on scalp. Long term control may require combined care."
    },
    {
      q: "Will ozone therapy increase my hair growth?",
      a: "Ozone supports the environment around the follicle. It may help early ozone therapy for hair growth but only if active follicles remain."
    },
    {
      q: "Can I use ozone therapy with PRP or mesotherapy?",
      a: "Yes. These combinations often improve scalp comfort and support long term planning."
    },
    {
      q: "Can ozone therapy help after a hair transplant?",
      a: "It can assist recovery when timed correctly. Many patients use ozone therapy after hair transplant to support healing stages."
    },
    {
      q: "Are there side effects?",
      a: "Most reactions are mild such as warmth or slight redness. Severe ozone therapy side effects scalp are rare when applied correctly."
    },
    {
      q: "How soon can I wash my hair after treatment?",
      a: "Usually the next day unless your medical team suggests otherwise."
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
          {/* Breadcrumbs strictly pinned to far left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/treatments" className="hover:text-[#772424] transition-colors">Treatments</Link>
            <span>/</span>
            <span className="text-[#772424]">Ozone Hair Therapy</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Ozone Hair Therapy 
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & 5 MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* IMAGE 1: Flagship Hero Visual (Capture image_354de2.jpg: Handheld high frequency ozone comb emitting blue/violet energy) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/treatments/ozone-hero.jpg" 
                  alt="Medical professional utilizing advanced handheld high frequency medical ozone comb wand to energize scalp follicles at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Targeted Ozone Infusion, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Ozone therapy for hair is a targeted scalp treatment that uses controlled medical ozone to support follicles calm inflammation and improve scalp balance. At Hair Skill Clinic ozone hair therapy sits inside a complete diagnostic process. Every session has a purpose. Nothing is random. The goal is simple: a healthier scalp that supports stronger fuller hair over time.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  People choose ozone hair treatment in Pakistan because it can help with multiple concerns at once. It supports thinning areas helps reduce shedding eases dandruff and balances oil production. Many international patients visit ozone therapy Lahore or Pakistan clinics but Hair Skill offers a medical-first approach backed by doctors who understand androgenetic alopecia and transplant recovery.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Ozone is delivered in a controlled dose. It works by increasing oxygen availability on the scalp helping blood flow and supporting weakened follicles. Evidence suggests improved hair cycle activity when ozone is applied correctly. This sets it apart from spa-style treatments. Hair Skill uses doctor-led protocols medical devices and safe dosing.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  You may see terms like ozone steamer for hair ozone comb treatment ozone sauna for hair or ozone injection for hair online. These vary widely in quality. Hair Skill uses methods that match medical standards and predictable outcomes.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Early improvements often include calmer itch easier styling and reduced flaking. Over time texture improves and follicles perform better. It feels like your scalp can breathe again.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our medical specialists note that real success comes from correct dosing. The scalp needs support not overwhelm. Precision builds trust and results.
                </p>

                <h2 className="text-3xl font-black text-[#772424] mt-4 tracking-tight">
                  Ozone Hair Therapy in Pakistan at Hair Skill Clinic
                </h2>
                <h3 className="text-xl font-extrabold text-[#772424]">
                  A cleaner, calmer, healthier scalp starts here
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Thinning hair stubborn dandruff itching or scalp irritation can feel exhausting. You try shampoos. You switch routines. Nothing changes. Ozone hair therapy in Pakistan gives your scalp targeted support using controlled medical ozone designed to refresh the skin improve circulation and help struggling follicles perform better.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  At Hair Skill Clinic this is not a spa add on. It is a doctor guided treatment tailored for people facing real hair and scalp concerns. You receive a structured plan not a simple session list. That difference shapes everything.
                </p>
              </motion.div>

              {/* Section: Why Patients Choose Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Patients Choose Hair Skill Clinic for Ozone Hair Therapy
                </h2>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Doctor Led Care, Not Generic Sessions</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Your scalp is assessed by the medical team before anything begins. You receive a plan shaped around thinning flaking or post transplant healing needs.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Medical Grade Ozone Technology</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Hair Skill uses controlled systems designed for predictable ozone therapy for hair results. No unregulated devices. No aggressive dosing.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Designed for Thinning, Dandruff and Scalp Sensitivity</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">This treatment can help with ozone therapy for hair thinning ozone therapy for dandruff ozone therapy for itchy scalp and microbial imbalance.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Full Integration With Hair Transplant Care</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Many patients use ozone sessions to prepare the scalp or support comfort during recovery with ozone therapy after hair transplant.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#772424] mb-4">Key Benefits of Ozone Hair Treatment</h3>
                <div className="space-y-4 ml-2 mb-6">
                  <div>
                    <div className="flex items-center gap-2 font-black text-[#772424] text-lg mb-1"><span>•</span><h4>Balanced Scalp Environment</h4></div>
                    <p className="text-black text-base md:text-lg font-medium pl-4">Ozone helps refresh and clear the scalp. Patients dealing with stubborn flakes odor or irritation often see smoother comfort and cleaner roots.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-black text-[#772424] text-lg mb-1"><span>•</span><h4>Supports Active Follicles</h4></div>
                    <p className="text-black text-base md:text-lg font-medium pl-4">By improving oxygen around the scalp surface ozone may help follicles function more efficiently. This is why early ozone therapy for hair growth cases respond well.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-black text-[#772424] text-lg mb-1"><span>•</span><h4>Improves Texture and Shine</h4></div>
                    <p className="text-black text-base md:text-lg font-medium pl-4">Better scalp balance leads to calmer oil levels and softer strands. Your hair feels easier to manage and healthier to style.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-black text-[#772424] text-lg mb-1"><span>•</span><h4>Gentle Yet Effective</h4></div>
                    <p className="text-black text-base md:text-lg font-medium pl-4">Sessions are comfortable non invasive and quick. You return to daily life right away.</p>
                  </div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our specialists note that ozone builds a healthier environment not unrealistic promises. When the scalp feels balanced hair behaves better.
                </p>
              </motion.div>

              {/* Section: Who Is Ozone Hair Therapy Best For */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Who Is Ozone Hair Therapy Best For?
                </h2>

                {/* IMAGE 2: Section Image Glass Comb Wand (Capture image_354e09.jpg: High frequency glass comb wand emitting violet light) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/treatments/ozone-comb-wand.jpg" alt="Close up view of medical high frequency glass comb electrode conducting activated oxygen across scalp" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People turn to ozone therapy for hair when thinning shedding flaking or discomfort begins to affect confidence. Many feel unsure whether their problem is genetic microbial or stress related. Hair Skill Clinic helps you understand the root cause before suggesting treatment. Ozone hair therapy is most effective when matched to the right scalp condition and the right timing.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Thinning Hair and Early Hair Loss</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">If you notice lighter strands widening parts or slow styling changes ozone therapy for hair thinning can support struggling follicles. By improving oxygen flow and calming irritation ozone gives weakened roots a healthier environment. It does not replace lost follicles but it may slow ozone therapy for hair fall and support early ozone therapy for hair growth responses in active zones.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Dandruff, Scalp Infections and Seborrheic Issues</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Many patients choose ozone hair treatment for dandruff because ozone has a gentle antimicrobial action. This may help with ozone therapy for scalp infections ozone therapy for seborrheic dermatitis and stubborn flakes that resist shampoos. People with ozone therapy for itchy scalp often describe fast relief smoother skin and easier washing routines.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Preparing for and Supporting Healing After Surgery</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Some patients start ozone therapy before hair transplant to stabilize the scalp and improve comfort. A clean balanced scalp supports better planning and healthier tissue before surgery.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">When timed correctly ozone therapy after hair transplant may help recovery feel smoother. It works by supporting circulation and easing irritation. This is why some doctors use it in protocols designed to speed healing after hair transplant or possibly increase graft survival by improving the surrounding environment.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our attending physicians share that ozone therapy works best when the scalp still has active potential. Matching the right patient to the right treatment is what creates long term confidence.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: How Ozone Hair Therapy Works at Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  How Ozone Hair Therapy Works at Hair Skill Clinic
                </h2>

                {/* IMAGE 3: Section Image Follicle Macro (Capture image_354e28.jpg: Scalp root follicles energized) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/treatments/ozone-follicle-macro.jpg" alt="Macro close up view of follicular unit shafts responding to cellular oxygenation and vascular dilation" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Hair Skill Clinic approaches ozone hair therapy with structure intention and medical oversight. Patients often come in after trying shampoos vitamins or at-home devices without progress. They want a treatment that feels guided safe and predictable. That is exactly why every step of ozone therapy for hair at Hair Skill follows a clear plan.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Step by Step: From Diagnosis to First Ozone Session</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-2">Your journey begins with a scalp evaluation. The doctor checks your shedding pattern inflammation level and follicle activity. Trichoscopy helps map thinning zones and identify issues such as dandruff excess oil or early infection. This step determines whether ozone therapy scalp treatment is right for you or if PRP medications or mesotherapy should be added. A detailed plan is created so you know how many sessions you need and what improvements to expect.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Devices and Techniques Used at Hair Skill</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-2">Online you may see many tools for ozone hair treatment such as ozone steamer for hair ozone comb treatment ozone sauna for hair and ozonated oils for hair. Their quality varies widely. Hair Skill uses controlled medical systems that deliver ozone safely and evenly avoiding irritation or overdosing. These devices help create an oxygen rich environment on the scalp while supporting circulation and comfort. When needed doctors may complement the session with targeted applications similar in effect to light ozone injection for hair but only under medical supervision.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">What a Session Feels Like</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Most sessions last 20 to 30 minutes. You may feel warmth light tingling or gentle stretching on the scalp. These sensations fade quickly. There is no downtime. Patients usually return to daily life immediately.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our clinical leadership often reminds patients that the delivery method matters as much as the ozone itself. When technique is correct comfort stays high and outcomes stay steady.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Benefits of Ozone Hair Treatment */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Benefits of Ozone Hair Treatment: What Patients Can Expect
                </h2>

                {/* IMAGE 4: Section Image Crown Application (Capture image_354e47.jpg: Nurse applying wand to parting) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/treatments/ozone-crown-wand.jpg" alt="Clinical specialist administering high frequency ozone wand across sensitive thinning part line" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Patients often choose ozone hair therapy because they want relief from scalp discomfort thinning or chronic flaking. They want something that feels gentle yet effective. When applied correctly ozone therapy for hair supports the scalp in ways many topical products cannot. It works across several layers of scalp health which is why improvement often feels gradual but steady.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Scalp Detox Microbial Control and Dandruff Support</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Ozone helps clean and refresh the scalp surface. The ozone therapy antibacterial effect on scalp can reduce buildup and irritation especially in people struggling with flakes or odor. This is why many patients see improvements with ozone therapy for dandruff ozone therapy for scalp infections and even some cases of ozone therapy for seborrheic dermatitis. A calmer scalp makes daily grooming easier and more comfortable.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Improved Circulation and Follicle Support</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Healthy follicles depend on oxygen. When applied in safe concentrations ozone therapy improves blood circulation to scalp areas affected by thinning. Better flow may help nourish active follicles and encourage healthier growth cycles over time. This is why early cases of ozone therapy for hair growth and ozone therapy for hair thinning can respond especially well.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Texture Shine Reduced Breakage & Practical Limits</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Balanced oil levels create smoother strands. Ozone therapy balances sebum production helping both oily and dry scalps feel stable. Less buildup means easier styling and less breakage. Many patients report cleaner roots and a fresher look after several sessions.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Where Ozone Therapy Has Limits: Ozone supports existing follicles. It does not regenerate areas where follicles are gone. Patients with advanced loss may still benefit but results remain supportive rather than transformational.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our restorative specialists remind patients that ozone builds healthier conditions. It prepares the ground strengthens the environment and protects the hair you still have.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Ozone Hair Therapy and Hair Transplant at Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Ozone Hair Therapy and Hair Transplant at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Many patients ask how ozone hair therapy fits into a transplant plan. They want to know if it helps grafts improves comfort or prepares the scalp for surgery. At Hair Skill Clinic ozone is used with purpose. It is not a routine add on. It is applied only when it supports healing scalp balance and long term results.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Preparing the Scalp Before a Hair Transplant</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Some patients start ozone therapy before hair transplant to create a healthier environment for surgery. Ozone helps calm irritation reduce microbial load and support balanced sebum levels. A cleaner calmer scalp makes surgical planning more predictable. When follicles sit in a stable environment designing density direction and implanting strategy becomes easier for the medical team.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Supporting Healing After a Hair Transplant</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">When applied at the right stage ozone therapy after hair transplant may improve comfort by soothing sensitive skin. Patients often notice less tightness fewer dry patches and easier washing routines. Its supportive action on oxygen and circulation can help the scalp feel more stable as it heals. Some doctors use ozone as part of early recovery to improve tissue quality around grafts. This is why you see the term ozone therapy to speed healing after hair transplant on many clinic pages. Hair Skill applies it only when the timing is correct never too early never too aggressive.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Can Ozone Support Graft Survival?</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Ozone may help the surrounding microenvironment but it is not a magic tool. Some clinics claim ozone therapy to increase graft survival but Hair Skill takes an honest view. Graft survival depends on surgical technique careful handling correct depth and post operative care. Ozone simply supports the skin around the grafts.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our supervising surgeons explain that ozone works best as a supportive tool not a replacement for surgical precision. When used wisely it strengthens recovery instead of complicating it.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Is Ozone Therapy for Hair Safe Side Effects and Evidence */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Is Ozone Therapy for Hair Safe? Side Effects and Evidence
                </h2>

                {/* IMAGE 5: Section Image Smiling Patient (Capture image_354ebe.jpg: Patient smiling with healthy hair) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/treatments/ozone-smiling-patient.jpg" alt="Smiling patient experiencing absolute scalp comfort and revitalized hair texture post medical ozone therapy" className="w-full h-full object-cover object-top" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Patients often worry about safety before anything else. They want reassurance that ozone therapy for hair will not irritate their scalp or interfere with other treatments. Hair Skill Clinic approaches safety with caution medical supervision and clear communication. Nothing begins until your scalp is examined and the treatment is confirmed appropriate.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Common Mild Reactions</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Most reactions are short lived. You may feel warmth light tingling or slight tightness during treatment. These sensations fade quickly. Some patients notice temporary redness. These responses are expected in ozone hair treatment because the scalp receives increased oxygen activity. There is no downtime. You can return to work or daily life immediately.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Understanding Possible Risks</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">People with certain conditions allergies or active scalp infections may not be suitable for ozone. This is why Hair Skill screens every patient before planning sessions. Mild irritation can occur if the skin is already sensitive. This is more common in severe ozone therapy for seborrheic dermatitis cases or active ozone therapy for scalp infections. More serious reactions are rare when ozone is applied correctly. Still careful dosing matters. Overexposure or unregulated devices used in some salons increase risk. Hair Skill uses medical grade systems with controlled output.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">What Research Suggests & Absolute Safety</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Some studies indicate improved hair cycle activity and scalp comfort when ozone is used in structured protocols. Results include better oxygenation reduced microbial activity and balanced oil levels. These improvements support ozone therapy hair results for thinning itching and flaking. Patients often see visible improvements in before and after photos when inflammation and dandruff were main problems. For advanced loss outcomes remain supportive rather than regrowth focused.</p>
                    <p className="text-black text-base md:text-lg font-bold mb-4">Is Ozone Therapy Safe for Hair? Used correctly yes. The key is controlled settings proper diagnosis and doctor led protocols. Hair Skill follows all three.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical staff reminds patients that good results come from respecting limits. Ozone must support the scalp not overwhelm it. When balance is right comfort improves and progress becomes steady.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Cost Ranges in Pakistan (PURE PKR TIERS / ZERO LOGISTICS) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Ozone Hair Therapy Cost Ranges in Pakistan: Packages at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Patients comparing ozone hair therapy Pakistan options usually want two things: clear pricing and honest guidance on how many sessions they truly need. Hair Skill Clinic gives both. The goal is to help you plan your treatment without guesswork or hidden fees. You see your full path from day one.
                </p>

                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Pakistan vs Global Investment Brackets</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      Across Pakistan most clinics offer ozone hair treatment at package brackets that make long term care manageable. Typical ozone therapy cost ranges between 28,000 to 42,000 PKR per session depending on device quality and medical supervision. The same session in Western countries can be significantly higher. Many UK and US clinics charge several times the Pakistani average which makes multi session treatments expensive for patients dealing with hair thinning dandruff or irritation. Because ozone works best in a series cost differences matter. A full plan in Lahore can equal one or two sessions elsewhere.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Hair Skill Clinic Package Tiers</h3>
                    <p className="text-black font-medium text-base leading-relaxed mb-3">Hair Skill Clinic offers a straightforward package range. Sessions sit inside accessible local tiers ranging from 28,000 to 42,000 PKR based on the protocol device settings and your scalp needs. You receive clear guidance on session count. Some patients need only a short series to manage dandruff or itchy scalp. Others with thinning or transplant recovery benefit from a structured plan. Your medical team tells you exactly what to expect.</p>
                    <p className="text-black font-medium text-base leading-relaxed border-t border-gray-200/80 pt-3 mb-3">Packages for Surgical Patients: Patients undergoing a hair transplant sometimes add ozone therapy after surgery or supportive scalp care sessions. Hair Skill creates customized packages in Pakistan for those wanting combined PRP mesotherapy or follow up care. You get one coordinated plan instead of scattered treatments.</p>
                    <p className="text-black font-bold text-base leading-relaxed border-t border-gray-200/80 pt-3">
                      Our physicians highlight that real value is not the accessible cost. It is the medically supervised structure that protects your scalp and guides every step of progress.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* SECTION: 9 FAQS ACCORDION (100% COMPLETE VERBATIM MAPPING) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  Ozone Hair Therapy Pakistan FAQs
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
                  Start Your Ozone Hair Therapy Journey with Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  If you are noticing thinning flaking itching or slow recovery after a transplant you do not have to guess your way forward. Ozone hair therapy gives your scalp the targeted support it needs while staying gentle comfortable and medically supervised. At Hair Skill Clinic every step is guided by doctors who understand the biology behind ozone therapy for hair loss inflammation and healing.
                </p>
                <p className="text-black text-base md:text-lg font-medium mb-6">Your plan is shaped around your scalp condition not a generic package. You learn how many sessions you truly need when to expect changes and how ozone hair treatment fits into your long term hair strategy. Whether your goal is calmer dandruff slower shedding or smoother recovery after surgery your treatment remains precise and personal. You deserve clarity. You deserve honest guidance. And you deserve a team that treats every detail of your hair with respect.</p>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  Free Online Hair and Scalp Assessment: Send your photos. Share your concerns. Describe your symptoms. A Hair Skill doctor reviews everything personally and creates a tailored recommendation including whether ozone hair therapy Pakistan is the right move for you. If ozone belongs in your plan you will know exactly why. If not you will get a better alternative backed by medical reasoning. Start your free assessment today and take the first step toward a healthier more comfortable scalp.
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
                    <input type="checkbox" id="oznPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="oznPrivacy" className="text-xs text-white/80 cursor-pointer">
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