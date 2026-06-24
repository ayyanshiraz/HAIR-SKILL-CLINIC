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

export default function MesotherapyClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Mesotherapy Treatment Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
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
      q: "Is hair mesotherapy enough for advanced hair loss?",
      a: "It helps support remaining follicles but it cannot restore areas where follicles are gone. Patients with smooth inactive zones usually benefit more from a hair transplant combined with medical support."
    },
    {
      q: "How soon can I wash my hair after a session?",
      a: "Most patients wash their hair the next day. The scalp stays slightly sensitive so gentle products are recommended until any redness fades."
    },
    {
      q: "Can I combine mesotherapy with minoxidil or finasteride?",
      a: "Yes. Many patients combine these treatments. Mesotherapy works locally while medications work systemically. This pairing protects density more effectively for androgenetic alopecia."
    },
    {
      q: "Will I lose results if I stop maintenance sessions?",
      a: "Results gradually fade if genetic thinning continues without support. Maintenance every few months helps keep progress steady."
    },
    {
      q: "Is hair mesotherapy painful?",
      a: "Most describe it as light pinching. Sessions are short and topical numbing reduces discomfort."
    },
    {
      q: "Can I travel right after my appointment?",
      a: "Yes. There is no downtime. International patients often schedule sessions between business meetings or everyday routines."
    },
    {
      q: "How long should I stay in Pakistan for a treatment course?",
      a: "Many start with a single session during their visit then continue follow-up sessions locally. Others stay long enough for weekly sessions. Hair Skill helps you plan based on your goals."
    },
    {
      q: "Can mesotherapy replace a transplant?",
      a: "Not when follicles are already gone. Mesotherapy strengthens existing hair; transplantation redistributes permanent follicles into empty areas."
    },
    {
      q: "Is it safe for women with hormonal hair loss?",
      a: "Yes after proper evaluation. Women often respond well because they still retain many active follicles ready to respond."
    },
    {
      q: "How does the pricing behave in Pakistan?",
      a: "Pricing behaves in accessible local PKR brackets structured around your specific compound blend. It provides massive relative savings compared to heavy capital calculations in Western clinics."
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
            <Link href="/hair-transplant" className="hover:text-[#772424] transition-colors">Hair Transplant</Link>
            <span>/</span>
            <span className="text-[#772424]">Hair Treatment Mesotherapy</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Hair Treatment Mesotherapy
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & 5 MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* IMAGE 1: Flagship Hero Visual (Capture image_18ba24.jpg: Doctor applying mesotherapy tool to scalp) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/treatments/mesotherapy-hero.jpg" 
                  alt="Doctor placing nutrient rich mesotherapy micro injections directly into patient scalp at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-top" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Targeted Micro-Injection, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Hair Treatment Mesotherapy in Pakistan is a targeted micro-injection method placing vitamins minerals and growth-supporting compounds directly into the scalp. It focuses on slowing active shedding improving density and strengthening weakened follicles. Many patients choose hair mesotherapy in Pakistan because it supports areas affected by androgenetic alopecia early thinning and seasonal shedding patterns.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At Hair Skill Clinic this treatment sits inside a wider medical strategy. You are not given random injections. You receive a plan built around your hair type shedding pattern and long-term goals. Every session aims to help you reach a stable fuller look that feels natural to style.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The injections are placed into the mesoderm layer. This is where weak follicles respond best. By putting nutrients exactly where hair grows mesotherapy may improve scalp balance hair texture and strand strength. Studies suggest benefits for pattern hair loss when applied in structured protocols often alongside PRP or medical therapy. It is not a standalone miracle. It can still be a valuable step for the right patient.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Most sessions last under 30 minutes. You return to daily life right away. Discomfort tends to be low. Many describe a quick pinch followed by a warm light sensation across the scalp.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our lead medical specialists note that mesotherapy works best when expectations match biology. It supports hair. It does not replace follicles that no longer exist. That honesty protects long-term satisfaction.
                </p>

                <h2 className="text-3xl font-black text-[#772424] mt-4 tracking-tight">
                  Hair Mesotherapy in Pakistan at Hair Skill Clinic
                </h2>
                <h3 className="text-xl font-extrabold text-[#772424]">
                  Strengthen thinning hair with a plan shaped around you
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Hair loss feels overwhelming when you do not know what is causing it or how fast it will progress. Hair mesotherapy in Pakistan at Hair Skill Clinic gives you a structured doctor-led path to calmer shedding stronger strands and healthier roots. Every session is personalized never generic. You know what is being injected and why it fits your hair needs.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  While many clinics offer mesotherapy as a routine add-on Hair Skill treats it as a targeted medical treatment built around diagnosis scalp mapping and clear goals. This difference shapes your results.
                </p>
              </motion.div>

              {/* Section: Why Choose Hair Skill Clinic for Mesotherapy */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Choose Hair Skill Clinic for Mesotherapy?
                </h2>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Doctor-Led Planning From Start to Finish</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Your plan is created by experienced physicians who specialize in androgenetic alopecia and hair restoration. No off-the-shelf formulas. No blind injections.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Custom Blended Cocktails Tailored to Your Scalp</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Your treatment may include biotin amino acids minerals and growth-supportive compounds chosen to match your hairs current state and your desired outcome.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Comfortable Sessions With No Downtime</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Most treatments take under 30 minutes. You return to your day immediately.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Designed to Work With Your Long-Term Hair Plan</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Mesotherapy can stabilize shedding before a hair transplant support native hair after surgery or simply strengthen thinning areas without any surgical steps.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Real Patients See Real Progress</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Less shedding. Better texture. Healthier shine. For many these changes appear gradually yet noticeably over the treatment course.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#772424] mb-3">Key Benefits of Hair Mesotherapy at Hair Skill</h3>
                <div className="space-y-2 ml-2 mb-4">
                  {[
                    "Supports thinning areas with nutrient-rich microinjections",
                    "Helps reduce shedding within weeks",
                    "Enhances hair texture volume and scalp balance",
                    "Can complement PRP medical therapy or a future transplant",
                    "Works well for early and moderate androgenetic alopecia",
                    "Short sessions with minimal discomfort"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  Patients who begin early often achieve the most visible improvements since they still have active follicles ready to respond.
                </p>
              </motion.div>

              {/* Section: Who Is Hair Mesotherapy Best For */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Who Is Hair Mesotherapy Best For?
                </h2>

                {/* IMAGE 2: Section Image Crown Injections (Capture image_18bde1.jpg: Doctor injecting crown area) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/treatments/mesotherapy-crown.jpg" alt="Surgeon administering targeted mesotherapy compound into patient crown zone at Hair Skill Clinic" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  This treatment supports people facing early or moderate thinning chronic shedding and visible density loss. Many patients arrive unsure whether they qualify. They worry their hair is too far gone or not bad enough for a medical procedure. Mesotherapy fills the gap between simple topical products and full surgery. It gives the scalp direct support while keeping your options open for the future.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Early and Moderate Androgenetic Alopecia</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Men and women experiencing androgenetic alopecia often notice shrinking strands weaker roots and slow styling changes. Hair mesotherapy helps stabilize these areas by delivering vitamins and amino acids into the scalp. It works well for people in the Norwood 1 to 4 and Ludwig early stages. When thinning is visible but not yet severe the scalp tends to respond faster.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Patients Not Ready for a Hair Transplant</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Some patients want a lighter option. They may be young still experiencing progression or unsure if surgery is right for them. Hair mesotherapy in Pakistan gives them a structured path. It slows further shedding and protects hair that still has life. Many use it while preparing mentally and medically for a transplant later.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Post Transplant Patients Seeking Density Support & Avoidance</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Mesotherapy can complement a transplant by supporting native hair around the transplanted area. Healthy native hair improves the final result. It also helps some patients manage small seasonal shedding cycles after surgery. People with active scalp infections pregnancy severe allergies or certain autoimmune conditions may not be suitable. A quick doctor evaluation decides the safest path.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our attending doctors often remind patients that success comes from matching the right treatment to the right stage. They prefer a measured approach rather than overtreating or offering false hope.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: How Hair Mesotherapy Works at Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  How Hair Mesotherapy Works at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  This treatment becomes far more effective when it follows a structured plan. Many clinics offer generic injections. Hair Skill Clinic builds a personalized program that fits your hair pattern medical history and long-term goals. The aim is stable thicker healthier hair that feels better each month.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">From Diagnosis to Your First Session</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-2">Your journey starts with a detailed consultation. The team examines your scalp with trichoscopy checks shedding patterns and reviews any current treatments. This step helps map out the exact areas needing the most support. You receive a plan that explains how many sessions you need how often they should be scheduled and how your progress will be measured. Clear steps give you confidence. You know what to expect before the first needle touches your scalp.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">What We Inject and Why It Matters</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-2">Hair Skill uses a blend of vitamins minerals amino acids and growth-supportive compounds designed for thinning areas. These may include biotin B-complex vitamins and other ingredients used widely in hair mesotherapy treatments. Each component aims to improve scalp balance follicle strength and hair texture. Some patients benefit from formulas enriched with peptides or growth-supportive factors. These blends are selected based on your specific pattern not a one-size approach.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Comfort Timing and Your Treatment Experience</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">A session usually lasts 15 to 30 minutes. Discomfort is mild thanks to small needles and light topical numbing. Most patients return to daily life immediately. There is no downtime and visible marks fade quickly.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our clinical leadership often highlights that technique matters more than ingredients. Precise depth spacing and distribution shape the result. Small details change everything.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: How Many Sessions Will You Need */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  How Many Mesotherapy Sessions Will You Need?
                </h2>

                {/* IMAGE 3: Section Image Syringe Close Up (Capture image_18be01.jpg: Close up small syringe) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/treatments/mesotherapy-sessions.jpg" alt="Close up view of physician administering measured micro dosage with fine needle" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Most patients want a clear answer before starting. They want to know how long the process takes when they will notice changes and how often they must return. At Hair Skill Clinic the path is structured yet flexible. Your plan adapts to your scalp response shedding pattern and long-term goals. That balance keeps treatment efficient without unnecessary sessions.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Mild thinning (3 to 4 sessions)</h3>
                    <p className="text-black font-medium text-base leading-relaxed">Many patients in this group start with 3 to 4 sessions spaced weekly or biweekly. These individuals still have strong follicle activity so the scalp tends to respond faster. The aim here is stabilization. Reducing shedding early protects density before it becomes visibly uneven.</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Moderate pattern loss (6 to 8 sessions)</h3>
                    <p className="text-black font-medium text-base leading-relaxed">Patients showing visible gaps or crown weakness usually need 6 to 8 sessions often scheduled weekly at first then spaced as improvement appears. This group benefits from a longer activation phase letting nutrients support both follicle strength and scalp balance.</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Post transplant support & Maintenance Plans</h3>
                    <p className="text-black font-medium text-base leading-relaxed mb-3">Hair Skill often recommends a tailored plan depending on graft growth stage. Some patients begin light mesotherapy a few months after surgery to support native hair and enhance texture across the scalp. It is never applied too early. Timing protects grafts and avoids irritation. After your initial sessions you may choose maintenance treatments every 3 to 6 months. This keeps results steady especially for patients with genetic thinning. Stopping maintenance may allow shedding to slowly return which is a common pattern in androgenetic alopecia.</p>
                    <p className="text-black font-bold text-base leading-relaxed border-t border-gray-200/80 pt-3">
                      Our supervising doctors remind patients that session count only works when the scalp is correctly diagnosed. Good planning saves time money and stress.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Month by Month Results */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Hair Mesotherapy Results: What to Expect Month by Month
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Patients often ask how quickly hair mesotherapy in Pakistan delivers visible changes. The timeline matters because most people feel frustrated with ongoing shedding and want clear signs they are moving in the right direction. At Hair Skill Clinic results follow a predictable pattern for many patients though each scalp responds at its own rhythm. What you see in the mirror depends on genetics age hormonal factors and how early treatment begins.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">When Shedding Starts to Slow</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Many patients notice reduced shedding after several weeks. Hair fall during brushing or showering begins to feel lighter. Strands look stronger and break less easily. This early stage often brings emotional relief. You finally feel like things are stabilizing. Competitive sites tend to stay vague here but structured clinical experience shows that shedding slowdown is one of the first positive signs.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">When Density Texture Improve & Expectations</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Visible density improvements usually appear after multiple sessions. Many patients report better coverage in weak zones smoother texture and more volume. The change is gradual not sudden. It brings a natural look instead of a forced transformation. People around you may comment that your hair looks healthier without knowing you had treatment. Mesotherapy strengthens existing follicles. It does not create new ones where they no longer grow. This is why early intervention matters. If you still have active follicles your before and after timeline becomes more impressive.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our senior surgeons often tell patients that progress should feel steady not dramatic. When biology guides expectations satisfaction builds naturally.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Mesotherapy vs PRP vs Hair Transplant */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Hair Mesotherapy vs PRP vs Hair Transplant
                </h2>

                {/* IMAGE 4: Section Image PRP Purple Gloves (Capture image_18be1f.jpg: Purple gloves cleaning scalp) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/treatments/mesotherapy-prp.jpg" alt="Nurse wearing purple gloves prepping scalp for combined PRP and mesotherapy session" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People search for hair mesotherapy PRP or a hair transplant because they want clarity. They want to know which option truly fits their stage of hair loss. Many fear choosing the wrong treatment and losing valuable time. Hair Skill Clinic gives straightforward guidance by comparing these three approaches honestly.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Mesotherapy vs PRP: What Patients Need to Know</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Mesotherapy delivers a blend of vitamins minerals amino acids and supportive compounds into the scalp. It focuses on nourishing weakened follicles and improving scalp balance. PRP uses your own platelets. These platelets contain growth-supportive factors that may help boost follicle activity. Many patients feel PRP offers a stronger biological signal while mesotherapy provides broader nutritional support.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Both treatments can slow shedding and improve texture. Some patients respond better to one than the other which is why Hair Skill evaluates your scalp before suggesting a path. Using both together can make sense for certain patterns especially early androgenetic alopecia.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">When a Hair Transplant Becomes the Better Option</h3>

                    {/* IMAGE 5: Section Image Patient Thumbs Up (Capture image_18be40.jpg: C.N., 32, 4500 Grafts thumbs up) */}
                    <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-6 shadow-md">
                      <img src="/treatments/mesotherapy-transplant.jpg" alt="Smiling patient C.N., 32 years old, giving thumbs up after successful restoration session" className="w-full h-full object-cover object-center" />
                    </div>

                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Mesotherapy does not replace follicles that are completely gone. If areas show smooth skin with no visible activity even the best cocktail cannot regrow new roots. This is where a hair transplant becomes more appropriate. Hair Skill performs transplants for advanced cases then uses mesotherapy selectively to protect native hair and support texture around the implanted areas.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">How these treatments work together: Some patients begin with mesotherapy to stabilize shedding before surgery. Others use it after a transplant to support the surrounding scalp. This combined approach leads to more balanced long-term results.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our clinical experts share that choosing between these options is not guesswork. It is diagnosis-driven planning shaped by your hair map and your goals.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Side Effects Risks and Safety */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Side Effects, Risks and Safety at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People often worry about side effects long before they ask about results. It is natural. Your scalp is sensitive and you want reassurance that hair mesotherapy in Pakistan is safe. At Hair Skill Clinic safety begins with a clear protocol careful ingredient selection and doctor-led application. The focus is comfort predictability and protecting long-term scalp health.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Common Side Effects You May Notice</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Mild redness. Light swelling. Tiny pinpoint marks. These are the expected signs of mesotherapy and fade within hours or days. Some patients feel slight tenderness when touching the scalp. Others describe a warm sensation after the injections. These effects stay temporary and do not interrupt daily life. There is no downtime. You can walk out of the clinic and continue your day normally.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Rare Risks Safety Studies & Technical Precision</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">More serious issues like infection or allergic reactions are uncommon. Hair Skill reduces these risks with sterile technique physician-supervised injections and careful ingredient screening. People with known allergies active scalp infections or specific medical conditions are always evaluated to prevent complications. Avoiding unnecessary treatments matters as much as performing the right ones. Published reviews show mesotherapy is generally well tolerated across different hair loss types. Most reported side effects are mild and short-lived. When technique dosage and timing are controlled the treatment remains predictable and steady.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical leadership emphasizes that the safest results come from precision. The right depth the right spacing the right scalp areas. Small decisions protect your comfort.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Mesotherapy Cost Ranges in Pakistan (PURE PKR TIERS / ZERO LOGISTICS) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Hair Mesotherapy Cost Ranges in Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Cost matters. Patients compare treatments worldwide and often feel unsure whether hair mesotherapy in Pakistan offers real value. Hair Skill Clinic keeps pricing transparent so you can plan confidently. You know what you invest why you invest it and how your plan fits within global standards. There are no surprise add-ons or hidden fees.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Pakistan vs UK and USA Investment Brackets</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      Pakistan has become a leading destination for non-surgical hair treatments because package tiers remain exceptionally accessible while medical standards stay high. Many clinics in Lahore offer mesotherapy sessions inside an affordable local PKR band structured around your full course of treatment. In Western hubs like the UK or US granular per-session calculations make completing an eight-session protocol heavily capital intensive. International visitors frequently discover they can execute a complete multi-session program in Lahore for a fraction of Western tier calculations.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Hair Skill Clinic Package Brackets in PKR</h3>
                    <p className="text-black font-medium text-base leading-relaxed mb-3">Hair Skill keeps investment brackets completely straightforward. Your tier calculation behaves in accessible local PKR ranges based on your compound formula and session roadmap. Many patients choose a complete course of 4 to 8 sessions to stabilize shedding and bolster density upfront.</p>
                    <p className="text-black font-bold text-base leading-relaxed border-t border-gray-200/80 pt-3">
                      Our physicians share that thoughtful planning matters more than the number of sessions. A well-built plan saves money and improves outcomes.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: How It Fits Into Your Hair Plan */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Hair Mesotherapy at Hair Skill Clinic: How It Fits Into Your Hair Plan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Mesotherapy works best when it is part of a bigger strategy. Many patients arrive unsure where they stand. Some feel early thinning. Others face steady shedding that has not responded to shampoos or supplements. A few are preparing for surgery. Hair Skill Clinic builds a plan that fits your reality not a generic template. You receive a roadmap that blends medical insight with long-term stability.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Before and After Surgery Roadmaps</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Patients with active shedding often start with hair mesotherapy to calm the scalp and support existing follicles. This step helps protect density until surgery becomes the right choice. Early stabilization also creates a more predictable environment for graft planning. When hair behaves consistently your transplant design becomes stronger and more accurate.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Some patients benefit from mesotherapy after grafts begin to settle. It is never applied too early. Timing is crucial for comfort and graft protection. Once approved by your doctor mesotherapy may help strengthen native hair around transplanted zones. This can improve overall harmony texture and styling flexibility. Stronger surrounding areas often make the final result appear fuller.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Your Long-Term Strategy</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Managing androgenetic alopecia requires consistency. Mesotherapy may be combined with PRP medication or structured lifestyle adjustments. The goal is simple: protect what you have and support what you gained. Maintenance sessions every few months help keep progress steady.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical team explains that real success comes from linking treatments together. One step prepares one step supports one step maintains. Patients feel the difference.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* SECTION: 10 FAQS ACCORDION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  Hair Mesotherapy Pakistan FAQs
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

              {/* Section: Closing CTA */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-black text-[#772424] mb-4 tracking-tight">
                  Start Your Hair Treatment Mesotherapy Journey with Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  If your hair feels thinner each month or your shedding has become a daily stress you do not need to navigate this alone. Hair mesotherapy in Pakistan offers a structured supportive way to protect your existing hair and improve density without committing to surgery right away. At Hair Skill Clinic every plan starts with listening. Your concerns your goals and your hair history shape everything that follows.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A doctor evaluates your scalp identifies the active thinning zones and creates a clear roadmap for your sessions. You understand what each step does how long results take and how mesotherapy fits into your long-term plan whether that includes medication PRP or a future hair transplant. No guesswork. No one-size-fits-all promises.
                </p>
                <p className="text-black text-base md:text-lg font-medium mb-4">
                  If you want stronger strands healthier roots and better control over your hairs future your next step is simple: Send your photos. Share your questions. Tell us your goals upfront.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  A Hair Skill doctor reviews everything personally and responds with a realistic plan based on your stage of androgenetic alopecia and your hairs potential. You deserve clarity. You deserve honesty. You deserve a team that treats your hair like it matters. Start your free assessment today.
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
                    <input type="checkbox" id="mesoPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="mesoPrivacy" className="text-xs text-white/80 cursor-pointer">
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