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

export default function PrpClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the PRP Hair Treatment Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- 10 FAQS DATA (Verbatim, scrubbed of live prose & logistics errors) ---
  const faqList = [
    {
      q: "Does PRP really work for hair loss?",
      a: "Many patients with early to moderate PRP for androgenetic alopecia respond well. PRP helps reduce shedding and may improve density where follicles still exist. It does not regrow hair in bald follicle free areas."
    },
    {
      q: "How many PRP sessions for hair loss do I need?",
      a: "Most people start with a PRP 3 sessions protocol spaced evenly every 4 to 6 weeks. Responders continue with PRP hair maintenance sessions every 6 to 12 months."
    },
    {
      q: "Can PRP regrow hair in shiny bald areas?",
      a: "No. PRP supports active follicles. It cannot rebuild areas that completely lack living follicles."
    },
    {
      q: "Is PRP safe for hair loss?",
      a: "Yes when performed by medical professionals. PRP uses your own blood reducing allergy risks. Mild localized swelling or tenderness is common while serious complications are rare."
    },
    {
      q: "Does PRP hurt?",
      a: "Patients describe mild pinching or pressure. Vibration and clinical numbing options help make the session comfortable."
    },
    {
      q: "When will I see results?",
      a: "Many notice shedding reduction by month two and density improvements between months three and six. Full response matures over 12 months."
    },
    {
      q: "Can PRP be combined with minoxidil or finasteride?",
      a: "Yes. Combining PRP with localized minoxidil or prescribed oral medications helps maintain and amplify progress."
    },
    {
      q: "Should I use PRP after a hair transplant?",
      a: "It can support cellular healing and strengthen native hair if timed correctly. Hair Skill doctors determine your exact schedule post surgery."
    },
    {
      q: "Is PRP better than minoxidil?",
      a: "Not always. Effectiveness varies by patient. Some respond better to one some to both. Combination treatment is common practice."
    },
    {
      q: "How does the pricing behave in Lahore Pakistan?",
      a: "Pricing behaves inside accessible local package tiers in PKR structured around your specific concentration protocol. It provides immense relative savings over Western calculations."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24 overflow-x-hidden">
      
      {/* --- ASYMMETRIC HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-white px-4 sm:px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          {/* Breadcrumbs strictly pinned to far left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/treatments" className="hover:text-[#772424] transition-colors">Treatments</Link>
            <span>/</span>
            <span className="text-[#772424]">PRP Hair Treatment</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            PRP Hair Treatment 
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch lg:items-start w-full">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & 4 MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* IMAGE 1: Flagship Hero Visual */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/hair-transplant/treatments/8.webp" 
                  alt="Medical professional wearing sterile purple gloves administering precise PRP cellular injection into patient scalp at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 sm:left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-3 sm:px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Targeted Platelet Infusion, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* --- TOP ADDITION 1: WHAT IS PRP --- */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  What is PRP?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  PRP (Platelet-Rich Plasma) is a supportive hair treatment that can be used alongside a hair transplant or as a separate procedure to help improve hair growth and overall hair health.
                </p>
              </motion.div>

              {/* --- TOP ADDITION 2: HOW PRP HELPS --- */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12">
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">How PRP Helps</h3>
                <p className="text-black text-base md:text-lg font-medium mb-3">PRP is commonly used to:</p>
                <div className="space-y-3 ml-1 sm:ml-2">
                  {[
                    "Support the healing process after a hair transplant",
                    "Help boost the overall results of a hair transplant",
                    "Encourage stronger and healthier hair growth",
                    "Potentially help patients notice improvements sooner"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                      <p className="text-black text-base md:text-lg font-bold">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* --- TOP ADDITION 3: IMPORTANT INFORMATION ABOUT PRP --- */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12">
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">Important Information About PRP</h3>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424] flex flex-col gap-4">
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    PRP is not considered a permanent solution for hair loss. The benefits of PRP are generally maintained through ongoing treatment sessions.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                    Depending on your hair condition and goals, regular maintenance sessions may be recommended. Many patients choose to continue PRP treatments throughout the year to help maintain the benefits achieved from the procedure.
                  </p>
                  <p className="text-black text-base md:text-lg leading-relaxed font-bold border-t border-gray-200 pt-3">
                    If PRP treatments are discontinued, the supportive benefits may gradually reduce over time, and hair may return to its natural progression of thinning or loss.
                  </p>
                </div>
              </motion.div>

              {/* --- TOP ADDITION 4: PRP TREATMENT PLAN --- */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12">
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">PRP Treatment Plan</h3>
                <p className="text-black text-base md:text-lg font-medium mb-3">For patients undergoing hair transplant procedures:</p>
                <div className="space-y-3 ml-1 sm:ml-2 mb-6">
                  {[
                    "A total of 6 PRP sessions may be recommended.",
                    "2 PRP sessions are included free of cost with the transplant package.",
                    "Additional sessions can be scheduled as required and are subject to separate charges."
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#772424] font-black text-lg shrink-0">•</span>
                      <p className="text-black text-base md:text-lg font-bold">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* --- TOP ADDITION 5: LEARN MORE CTA --- */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-3">Learn More</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold bg-[#772424]/10 p-6 rounded-2xl border border-[#772424]/30">
                  Every patient condition is different. To find out whether PRP is suitable for you and to understand the expected benefits, maintenance requirements, and treatment plan, please contact our team for a personalized consultation.
                </p>
              </motion.div>

              {/* --- EXISTING DEEP DIVE: CLINICAL INTRODUCTION --- */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-6 pt-8 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] tracking-tight">
                  Comprehensive Medical Guide to PRP
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  PRP hair treatment is a medical procedure that uses your own blood to support weaker follicles. At Hair Skill Clinic PRP hair treatment in Pakistan is planned like any other medical therapy not treated as a quick add on. The aim is simple: Help your hair stay longer in the growth phase and slow the thinning process.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  During platelet rich plasma for hair sessions a small amount of blood is taken from your arm. It is then spun in a centrifuge to separate the plasma rich in platelets. This concentrated plasma is used for prp injections for hair loss directly into thinning areas. PRP uses growth factors from your blood that may signal follicles to work better supporting prp for hair restoration in the right candidates.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Patients usually search prp for hair loss when they notice early gaps shedding or a softer hairline. They want something more serious than shampoo but less invasive than surgery. PRP hair treatment Pakistan sits exactly in that space. It can also support results after a transplant or amplify the effect of medical therapy.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Results depend on your stage genetics hormones and existing follicle count. PRP is not a miracle. Evidence shows benefit for many cases of prp for androgenetic alopecia but not everyone responds at the same level. That honesty matters.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our lead surgical specialists often explain PRP in one line: It does not create new follicles. It helps the ones you still have perform at their best.
                </p>

                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mt-4 tracking-tight">
                  PRP Hair Treatment in Pakistan at Hair Skill Clinic
                </h2>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#772424]">
                  A medically guided way to protect the hair you still have
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Thinning hair feels stressful. Shedding breaks your confidence. And waiting only makes the problem harder to control. PRP hair treatment in Pakistan gives you a targeted science based method to support active follicles before they weaken further.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  At Hair Skill Clinic PRP is performed by doctors who understand the patterns behind prp for hair loss. Every session follows a structured plan built around your scalps biology not guesswork. This is hair care with a clear purpose. A plan you can trust.
                </p>
              </motion.div>

              {/* Section: Why Choose Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Choose Hair Skill Clinic for PRP Hair Treatment?
                </h2>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Doctor Led Treatment From Start to Finish</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">No rushed injections. No generic patterns. Every step is performed by a hair restoration specialist who evaluates your scalp density maps and shedding history before recommending PRP.</p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">High Concentration PRP for Stronger Support</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Hair Skill uses controlled processing designed to provide consistent platelet rich plasma for hair quality. This helps improve the signals that follicles respond to.</p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Treatment Designed for Real Hair Loss Patterns</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Whether you are facing prp for androgenetic alopecia a soft hairline prp for crown thinning or ongoing shedding your plan matches your stage. This avoids wasted sessions and prevents disappointment.</p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Integrates With Hair Transplant Plans & Comfort Care</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">PRP can support recovery after a transplant calm irritation or help strengthen native hair. You receive guidance on how PRP fits into your overall long term plan. Local numbing and gentle techniques make the experience manageable. Sessions fit easily into your week.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our clinical experts often share: PRP works best when the right patient the right protocol and the right timing meet.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">Key Benefits of PRP Hair Treatment</h3>
                <div className="space-y-4 ml-2 mb-6">
                  <div>
                    <div className="flex items-center gap-2 font-black text-[#772424] text-lg mb-1"><span>•</span><h4>Helps Reduce Shedding</h4></div>
                    <p className="text-black text-base md:text-lg font-medium pl-4">Many patients notice calmer shedding after their first few sessions. This is often the earliest sign that follicles are responding.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-black text-[#772424] text-lg mb-1"><span>•</span><h4>Supports Density and Coverage Over Time</h4></div>
                    <p className="text-black text-base md:text-lg font-medium pl-4">In active zones PRP may help prp stimulates hair follicles prp increases hair density and prp improves hair thickness.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-black text-[#772424] text-lg mb-1"><span>•</span><h4>Improves Hair Texture and Strength</h4></div>
                    <p className="text-black text-base md:text-lg font-medium pl-4">PRP supports natural shine and helps hair feel fuller at the roots.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-black text-[#772424] text-lg mb-1"><span>•</span><h4>Strengthens Existing Follicles</h4></div>
                    <p className="text-black text-base md:text-lg font-medium pl-4">PRP uses your own growth factors to support prp for thinning hair and prp for receding hairline keeping miniaturised follicles active longer.</p>
                  </div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  Personalised Protocols for Better Results: Hair Skill does not rely on generic packages. Treatment is shaped around your biology your age your shedding pattern and your goals.
                </p>
              </motion.div>

              {/* Section: Who Is PRP Hair Treatment Best For */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Who Is PRP Hair Treatment Best For?
                </h2>

                {/* IMAGE 2: Section Image Injecting Temple */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/treatments/9.webp" alt="Surgeon administering precise localized platelet plasma dosage into male frontal temple peak at Hair Skill Clinic" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Patients usually consider PRP hair treatment when thinning becomes noticeable but not yet severe. They want something medically guided that supports existing follicles without jumping straight into surgery. Hair Skill Clinic evaluates your scalp carefully before suggesting prp for hair loss because results depend heavily on timing and the number of active follicles left.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Early to Moderate Androgenetic Alopecia</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">People with prp for androgenetic alopecia often respond well because their follicles still exist even if miniaturised. This includes early prp for male pattern baldness and prp for female pattern hair loss. If you see a softer hairline shrinking density or slower regrowth PRP may help slow progression and support healthier cycles.</p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Thinning Hair Receding Hairline and Crown Weakness</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Many patients start PRP due to prp for thinning hair prp for receding hairline or prp for crown thinning. These areas still contain living follicles that can respond to growth factor stimulation. You should not wait until the scalp becomes shiny. PRP works best where there is still life.</p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">People Struggling With Shedding & Contraindications</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">If you feel hair shedding every time you shower or brush prp to reduce hair shedding can help stabilize the cycle. Shedding control is often one of the first improvements patients notice.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Who PRP Is Not Ideal For: PRP cannot regrow hair where follicles are gone. Patients with large smooth bald patches usually need a transplant sometimes supported by PRP for native hair. Certain conditions like platelet disorders active infections or uncontrolled autoimmune issues also require different treatment plans.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our supervising physicians remind patients: PRP is strongest in the early chapters of hair loss. Waiting too long closes doors.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: How PRP Hair Treatment Works at Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  How PRP Hair Treatment Works at Hair Skill Clinic
                </h2>

                {/* IMAGE 3: Section Image Blood Draw Tube */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/treatments/10.webp" alt="Clinical blood draw from patient arm into specialized biological centrifuge separation container" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Patients want clarity. They want to know how PRP hair treatment actually works what happens during the session and why some people respond better than others. Hair Skill Clinic uses a structured doctor led approach so every step has purpose. You always know what is being done and why.
                </p>

                <div className="space-y-6 border-l-2 border-[#772424]/20 pl-4 sm:pl-6 ml-2 mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#772424] mb-1">Step 1: Diagnosis and Planning</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Your journey starts with a detailed scalp evaluation. The doctor examines density miniaturisation shedding patterns and scalp health. This step helps define whether prp for hair loss should be used alone or paired with treatments like prp with minoxidil mesotherapy or medication. PRP works best when matched correctly to your stage.</p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#772424] mb-1">Step 2: Preparing the Platelet Rich Plasma</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">A small blood sample is drawn from your arm and placed into a centrifuge. This process concentrates your platelets into platelet rich plasma for hair which carries growth factors that drive results. These active components explain how PRP works for hair loss and why it helps early thinning.</p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#772424] mb-1">Step 3: PRP Injections Into Key Thinning Areas</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">The doctor injects PRP across targeted zones. Depth and spacing matter because prp stimulates hair follicles only when delivered precisely. Patients feel mild pressure or warmth. Sessions take 45 to 60 minutes. Hair Skill avoids rushed injection patterns. Every zone gets the attention it needs.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">What a Session Feels Like: Most patients describe mild discomfort similar to tiny pinches. Some prefer vibration or local numbing for comfort. There is no downtime. You can continue your day right after your procedure.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-5 rounded-2xl border-l-4 border-[#772424]">
                      Our clinical experts note: Technique shapes outcomes. Consistent depth careful patterns and correct concentration matter as much as the plasma itself.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Results What to Expect and When */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  PRP Hair Treatment Results: What to Expect and When
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Many patients start PRP hair treatment because they want progress they can see and feel not abstract promises. At Hair Skill Clinic results follow a natural timeline. PRP supports existing follicles so improvements depend on your biology your stage of prp for hair loss and how consistently you follow the plan.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Early Changes: Shedding Control and Scalp Balance</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">One of the earliest signs of response is reduced shedding. People notice this after several weeks especially when PRP is used for prp to reduce hair shedding. Shower drains look clearer. Brushes feel cleaner. This stage brings emotional relief because decline slows. Some report healthier scalp comfort supporting local tissue.</p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-3">Density Coverage & Growth Cycle Improvements</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-2">Visible change typically appears between 3 to 6 months including:</p>
                    <div className="space-y-1 ml-2 mb-3">
                      {[
                        "better coverage in thinning zones",
                        "improved texture and grip",
                        "slightly stronger strands",
                        "a fuller outline in areas of receding hairline or crown thinning"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-semibold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">These shifts appear subtle at first then more noticeable. Many say people around them notice before they do. PRP helps follicles stay in the growth phase longer increasing density and thickness. It works best where follicles are alive.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Before and After Expectations: Real results depend on your stage. Patients with early androgenetic alopecia tend to have the highest success rate. Advanced cases benefit mostly in texture and stability.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our restorative team shares: PRP is momentum based. Each session helps push follicles toward healthier cycles.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Protocols How Many Sessions You Really Need */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  PRP Hair Treatment Protocols: How Many Sessions You Really Need
                </h2>

                {/* IMAGE 4: Section Image Crown Syringe Injection */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/treatments/11.webp" alt="Surgeon administering concentrated platelet booster into patient crown and midscalp parting" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Patients constantly ask one question: how many PRP sessions for hair loss do I actually need? Hair Skill Clinic gives clear answers based on your stage shedding rate and follicle activity. PRP works best as a structured journey not a single appointment.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h3 className="text-lg sm:text-xl font-black text-[#772424] mb-2">Initial Treatment Phase (3 Sessions Protocol)</h3>
                    <p className="text-black font-medium text-base leading-relaxed">Most patients begin with a prp 3 sessions protocol spaced evenly every 4 to 6 weeks. This timing aligns with natural hair cycles allowing the scalp to respond gradually while stabilizing shedding. Patients with moderate thinning active shedding or combined pattern loss may need 4 or 5 sessions to reach meaningful improvement.</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h3 className="text-lg sm:text-xl font-black text-[#772424] mb-2">Maintenance Phase & Biological Adjustments</h3>
                    <p className="text-black font-medium text-base leading-relaxed mb-3">If you respond well your doctor suggests maintenance boosters every 6 to 12 months protecting gains against natural progression. Doctors adjust session count based on miniaturisation levels shedding severity density maps hormonal influences and medications.</p>
                    <p className="text-black font-medium text-base leading-relaxed border-t border-gray-200/80 pt-3 mb-3">When PRP May Not Be Continued: If follicles do not respond after multiple rounds doctors shift focus to medications microneedling or surgical transplant planning. Discontinuing PRP is sometimes the smartest decision.</p>
                    <p className="text-black font-bold text-base leading-relaxed border-t border-gray-200/80 pt-3">
                      Our senior physicians state: Good treatment is not about adding sessions. It is about choosing the right sessions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: PRP and Hair Transplant at Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  PRP Hair Treatment and Hair Transplant at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Many patients wonder how prp hair treatment fits with a transplant. They want to know whether it improves healing strengthens native hair or boosts overall results. At Hair Skill Clinic PRP is integrated into transplant care only when it adds true value. It is never offered as a default add on. It must serve a purpose.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">PRP Before a Hair Transplant</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Some patients begin prp before surgery to stabilize shedding and strengthen existing follicles creating a healthier environment for planning. When native hair behaves predictably it becomes easier to design natural density and direction while calming scalp inflammation.</p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">PRP After a Hair Transplant & Combination Plans</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Once healing passes the early phase prp after surgery supports surrounding tissue nourishing native hair near grafts easing tightness and balancing recovery. Some clinics claim PRP boosts survival; we take a realistic view. Success depends on surgical skill and implantation depth. PRP simply supports the environment.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Combination Plans: Paired with surgical packages microneedling localized minoxidil stem cells or advanced extracellular options. You follow a structured treatment ladder adapting to your condition.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our surgical directors share: PRP is a supporting actor not the whole story. When placed in the right position it strengthens the final outcome.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Is PRP Hair Treatment Safe Side Effects and Evidence */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Is PRP Hair Treatment Safe? Side Effects and Evidence
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Patients often search safety long before looking at results photos. Safety matters especially when treatments involve injections. At Hair Skill Clinic PRP is performed under medical supervision with controlled protocols sterile technique and careful candidate selection. You always know what is being done why it is needed and what to expect after.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Common Short Term Reactions & Understanding Risks</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Most experience mild temporary effects including localized swelling mild tenderness small pinpoint bruises and warmth fading within hours or days. You can return to normal routines immediately.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">PRP uses your own autologous blood lowering allergy risks. Rare issues include infection prolonged redness or flare ups in inflammatory scalp conditions. Patients with platelet disorders or active infections are screened carefully.</p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Does PRP Really Work? Evidence & Expectations</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Current research shows clear benefits for androgenetic alopecia reporting improved density reduced shedding and healthier cycles. However it is not equally effective for everyone. Some respond strongly some see mild change and a small percentage see little difference. Honest screening protects results.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Before and After photos show fuller outlines in early stage patients while advanced smooth bald areas do not respond.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our attending doctors emphasize: PRP is biologically logical but not magical. Good screening and honest guidance are what protect your results.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Cost Ranges in Pakistan */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  PRP Hair Treatment Cost Ranges in Pakistan: Packages at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Patients comparing treatment options often feel overwhelmed by volatile pricing. Some clinics advertise unbelievably cheap offers while others present heavily inflated calculations. You want absolute clarity and honesty. Hair Skill Clinic gives both inside accessible local PKR tiers so you can plan with confidence.
                </p>

                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-lg sm:text-xl font-black text-[#772424] mb-2">Pakistan vs Global Investment Brackets</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      Across accredited facilities in Lahore PRP hair treatment sits inside an exceptionally accessible local package bracket in PKR structured around your concentration protocol and session length. In Western hubs like the UK or US granular fee structures make completing a multi-session protocol heavily capital intensive. International visitors frequently discover they can execute an entire comprehensive three-session program in Lahore for a fraction of Western tier calculations.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-lg sm:text-xl font-black text-[#772424] mb-2">Hair Skill Clinic Package Tiers & Value</h3>
                    <p className="text-black font-medium text-base leading-relaxed mb-3">Hair Skill keeps investment brackets completely straightforward. Your custom tier calculation behaves in accessible local PKR ranges based on your concentration processing and whether PRP is bundled alongside surgical extractions or extracellular matrix infusions upfront.</p>
                    <p className="text-black font-bold text-base leading-relaxed border-t border-gray-200/80 pt-3">
                      Our physicians share: PRP is a time based treatment requiring consistency. Investment tiers should match medical quality; cheap options with poor technique become heavily expensive in the long run.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* SECTION: 10 FAQS ACCORDION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  PRP Hair Treatment Pakistan FAQs
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
                  Start Your PRP Hair Treatment Journey With Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  If you are noticing thinning shedding or slow density changes you deserve clarity instead of guesswork. PRP hair treatment in Pakistan offers a medically guided way to support the follicles you still have without committing to surgery before you are ready. At Hair Skill Clinic the process is personal steady and transparent. You receive a plan shaped around your biology your goals and your stage of hair loss.
                </p>
                <p className="text-black text-base md:text-lg font-medium mb-6">Your doctor examines your scalp reviews your history and explains whether PRP belongs in your treatment path. If it does you will know how many sessions you need when to expect improvement and what to combine it with for the best outcome. If not you will be guided toward other options matching your condition more realistically. This honesty protects your time budget and results. You do not have to navigate thinning alone. You do not have to guess what your hair needs. Hair Skill brings expert guidance into a simple supportive process respecting every stage of your journey.</p>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  Free Online PRP Assessment: Send your photos. Share your symptoms. Tell us what worries you most. A Hair Skill doctor reviews everything personally and responds with a tailored plan showing exactly how PRP could help you or what alternative fits better. Start your free assessment today and move one step closer to stronger fuller healthier hair.
                </p>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: STICKY CONSULTATION FORM */}
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
                    <input type="checkbox" id="prpPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer mt-0.5 sm:mt-0 shrink-0" />
                    <label htmlFor="prpPrivacy" className="text-xs text-white/80 cursor-pointer leading-tight">
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