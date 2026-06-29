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

export default function SapphireClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Sapphire FUE Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- 11 FAQS DATA (Verbatim from pasted text, scrubbed of safe prose, numeric price & logistics errors) ---
  const faqList = [
    {
      q: "What is Sapphire FUE in simple terms?",
      a: "It is an FUE hair transplant where channels are opened using sapphire blades instead of steel. The goal is to create cleaner smoother micro incisions that support natural direction and refined density."
    },
    {
      q: "Is Sapphire FUE painful?",
      a: "You feel mild pressure during numbing then comfort. Most patients describe it as surprisingly manageable. A calm pace helps the experience feel even easier."
    },
    {
      q: "How long does Sapphire FUE surgery take?",
      a: "Typically 6 to 8 hours depending on graft count and complexity. Larger cases or crown work may take longer."
    },
    {
      q: "How long does healing take?",
      a: "Surface healing feels smoother due to narrow sapphire channels. Scabs usually fall between days 7 and 10. Redness fades gradually."
    },
    {
      q: "When will I see results?",
      a: "Early sprouting begins around month 3. Noticeable density appears between months 6 and 9 with final refinement arriving between months 12 and 18."
    },
    {
      q: "Is Sapphire FUE better than regular FUE?",
      a: "It can be better for dense packing and natural direction. But the method depends on surgeon skill. Sapphire blades support precision not miracles."
    },
    {
      q: "How much does a Sapphire FUE hair transplant cost in Pakistan?",
      a: "Most international patients invest inside accessible local package brackets in PKR upfront depending on grafts technique combination hairline complexity and repair needs."
    },
    {
      q: "Are all clinics offering Sapphire FUE the same?",
      a: "No. Some clinics market sapphire blades without surgeon involvement. The tool matters far less than the person using it."
    },
    {
      q: "Can I return to work quickly?",
      a: "Most people return to desk work within a few days. Physical jobs require additional rest upfront."
    },
    {
      q: "Does Sapphire FUE leave scars?",
      a: "All FUE methods create tiny micro scars but sapphire channels tend to heal with a softer surface appearance due to reduced tissue trauma."
    },
    {
      q: "Does Sapphire FUE work for women?",
      a: "Yes. Women with pattern thinning traction alopecia or surgical scars can benefit when the plan suits their needs."
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
            <span className="text-[#772424]">Sapphire Hair Transplant</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Sapphire Hair Transplant 
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* IMAGE 1: Flagship Hero Visual (Capture image_1a7137.jpg: Macro close up of synthetic sapphire scalpel pen tip) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/home/techniques/1.webp" 
                  alt="Macro close up view of synthetic sapphire crystal blade scalpel pen tip used for micro channel incisions at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
                
              </motion.div>

              {/* Lead Introduction */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  People often search sapphire hair transplant Pakistan hoping to understand whether this method truly delivers better density softer healing and more natural looking results. The truth is simple. Sapphire FUE is not magic. It is a refined way of creating micro channels using sapphire blades instead of steel. When the tool is placed in skilled hands you get cleaner incisions smoother healing and a design that feels naturally yours.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At Hair Skill Clinic we use sapphire FUE hair transplant in Pakistan for patients who want strong consistent density with surgeon led control. The goal is clarity. Not hype. Not confusing claims. Just a clear explanation of how this technique works and whether it fits your hair your donor and your long term goals.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Many people arrive in sapphire hair transplant Lahore searches feeling overwhelmed. Too many guarantees. Too many best technique ever headlines. Here you will find grounded guidance shaped by surgeons who work with Sapphire FUE every day. This page explains what Sapphire FUE can do what it cannot do and how Hair Skill designs a result that blends naturally with your features and donor capacity.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If you want a method that supports high density while keeping tissue handling gentle this guide helps you decide whether Sapphire FUE is the right choice.
                </p>

                <h2 className="text-3xl font-black text-[#772424] mt-4 tracking-tight">
                  Sapphire FUE Hair Transplant in Pakistan
                </h2>
                <h3 className="text-xl font-extrabold text-[#772424]">
                  Precision, Comfort, and Natural Design At Hair Skill Clinic
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If you want a hair transplant that looks soft natural and genuinely yours Sapphire FUE gives your surgeon the precision needed to control every angle and channel. It is not hype. It is refined craftsmanship that supports natural density when guided by skilled hands.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At Hair Skill Clinic every Sapphire FUE procedure is fully surgeon led. You meet your doctor. You design your hairline together. Each channel is opened with sapphire blades chosen for their sharpness consistency and gentle handling of the scalp. Nothing is rushed and nothing feels automated.
                </p>
              </motion.div>

              {/* IMAGE 2: Frontal Hairline Comparison (Capture image_1a74a1.jpg & image_1a8004.jpg: Marked hairline vs grown results) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                <img src="/hair-transplant/34.webp" alt="Frontal view comparing lowered pre surgical Sapphire FUE hairline markings against mature dense growth" className="w-full h-full object-cover object-top" />
              </motion.div>

              {/* Section: Why Sapphire FUE Became Popular */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Sapphire FUE Became Popular in Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Interest in sapphire FUE hair transplant Pakistan grew fast because the method promised finer channel creation better density control and less irritation during healing. Patients started asking for it by name even before understanding how it works. That created confusion. Sapphire FUE is not a different transplant technique.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  It is an improved way of opening channels using blades made from sapphire. The blade material allows cleaner narrower entry points that help grafts sit comfortably and securely.
                </p>

                {/* IMAGE 3: Gloved Hand Holding Sapphire Tool (Capture image_1a74be.jpg & image_1a8020.jpg: Gloved hand display) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-8 shadow-md">
                  <img src="/home/techniques/1.webp" alt="Surgeon hand wearing sterile white glove holding synthetic blue sapphire micro incision instrument" className="w-full h-full object-cover object-center" />
                </div>

                <h3 className="text-2xl font-black text-[#772424] mb-3">What is Sapphire FUE?</h3>
                <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-6">Sapphire FUE uses blades crafted from sapphire to create V shaped micro channels. These channels allow surgeons to place grafts at natural angles while keeping the surrounding tissue calm. Sapphire blades maintain sharpness longer than steel giving consistent cuts throughout the session.</p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Sapphire FUE vs classic FUE</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-2">Classic FUE uses steel blades. Sapphire blades create smaller smoother incisions. This helps with:</p>
                    <div className="space-y-1 ml-2 mb-3">
                      {["more precise direction control", "better density planning", "potentially faster surface healing"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-semibold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium">These benefits appear when the surgeon controls spacing and angle deliberately.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Sapphire FUE vs DHI & Where Sapphire truly excels</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">DHI places grafts directly with implanter pens. Sapphire FUE creates channels first then implants. Sapphire FUE often performs better for large areas needing dense packing while DHI excels in smaller detail zones.</p>
                    <p className="text-black text-base md:text-lg font-bold mb-2">Hair Skill uses Sapphire FUE in cases where design density and natural flow matter most:</p>
                    <div className="space-y-1 ml-2 mb-4">
                      {["hairline refinement", "broad frontal coverage", "crown reconstruction", "high density sessions"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-semibold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our lead surgical specialists note: Sapphire blades help but only when paired with smart planning. The tool supports the artistry. It never replaces it.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Why Choose Sapphire Hair Transplant at Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Choose Sapphire Hair Transplant in Pakistan at Hair Skill Clinic
                </h2>

                

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Pakistan became the center of sapphire hair transplant Pakistan for two reasons: High surgeon experience and strong regional healthcare accessibility. Urban hubs like Lahore treat thousands of FUE cases every year which sharpens technique speed and design across clinics.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Patients searching for sapphire FUE hair transplant in Pakistan often want two things at once: Reliability and affordability inside accessible local PKR tiers. Pakistan delivers both because regional operating costs are lower and the local market is competitive. That means more expertise for a better tier bracket.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Why Pakistan leads in Sapphire FUE</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Patients travel from the USA UK Europe and the Middle East because they can receive advanced treatments inside accessible package tiers for a fraction of Western tier calculations. Hair restoration in Pakistan sits significantly lower than heavy capital calculations in Western clinics. You receive medical planning cleanroom extraction and cellular aftercare without inflated pricing upfront.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Why Hair Skill stands out & What patients look for</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Hair Skill is shortlisted as a top sapphire hair transplant clinic in Pakistan because we limit the number of surgeries per day. This gives surgeons time to open every sapphire channel themselves. No rushed cases. No technician driven shortcuts. Patients get a design shaped by real doctors who understand density angles and long term donor health.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Most people come to Hair Skill wanting clarity not flashy promises. They want to know if sapphire blades truly help their case. They want comfort natural flow and predictable density. That is exactly where surgeon led Sapphire FUE becomes valuable.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our supervising physicians share: Tools matter but judgment matters more. We choose sapphire when it fits the patient never because it is trending.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#772424] mb-3">Key Benefits of Sapphire FUE</h3>
                <div className="space-y-2 ml-2 mb-4">
                  {[
                    "More precise channel openings for controlled depth and direction",
                    "Refined density planning thanks to narrow V shaped incisions",
                    "Calmer healing experience due to smoother channel walls",
                    "Improved graft fit which supports early stabilization",
                    "Natural flow and angles that age gracefully"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  Sapphire blades do not create miracles. They give the surgeon a sharper tool for detailed work. The artistry behind it is what creates the result.
                </p>
              </motion.div>

              {/* Section: Who Is a Good Candidate */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Who Is a Good Candidate for Sapphire FUE at Hair Skill?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People often discover sapphire FUE hair transplant Pakistan when searching for a way to achieve higher density with a more natural look. But not everyone needs Sapphire FUE and not every pattern benefits equally. The goal is not to use the newest tool. The goal is to choose the method that protects your donor and creates the most natural outcome for your specific hair type.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">When Sapphire FUE fits well</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-2">Sapphire blades help when the plan requires refined density or smooth channel architecture. Patients who benefit most include those with:</p>
                    <div className="space-y-1 ml-2 mb-3">
                      {[
                        "moderate to advanced hair loss needing broad coverage",
                        "strong donor areas where dense packing is realistic",
                        "hairline work that demands controlled angles",
                        "crown restoration requiring consistent spacing",
                        "repairs where previous channels created unnatural direction"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-semibold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium">People wanting sapphire hair transplant Lahore often fall into these groups because the city has experienced teams who handle both large scale and detail oriented cases.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">When regular FUE or DHI may work just as well & Assessment</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">If your thinning is minimal or you only need a small correction classic FUE or DHI may be more suitable. DHI can be ideal for micro refinements in temples. Standard FUE might be enough for patients whose density goals are moderate not high.</p>
                    <p className="text-black text-base md:text-lg font-medium mb-2">Hair Skill evaluates your donor density scalp elasticity hair thickness and long term patterns before choosing the method. The decision is always personal never automatic.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our clinical experts frequently remind patients: Technique follows biology. Not the other way around.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Techniques and Tools */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Sapphire FUE at Hair Skill: Techniques and Tools
                </h2>

                {/* IMAGE 5: Macro Close Up Channel Incision (Capture image_1a7516.jpg & image_1a8078.jpg: Macro scalpel incision) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/6.webp" alt="Macro close up view of surgeon executing precise V shaped micro channel incision into scalp" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Sapphire FUE is best understood as a refined channel opening method. The extraction step still follows FUE principles but the way channels are created changes the feel of the surgery and the final look. People searching for Sapphire FUE hair transplant often want clearer answers about how sapphire blades influence density healing and natural design.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">How sapphire blades are used</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Sapphire blades create narrow V shaped channels with smooth edges. Their sharpness stays consistent which helps the surgeon place grafts at predictable angles. This matters when designing a hairline or packing the front zone because the wrong angle can make hair stand too straight or fall unnaturally. Sapphire blades support clean geometry.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Benefits compared to steel blades</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-2">Steel loses sharpness as the session continues. Sapphire stays stable. This can lead to:</p>
                    <div className="space-y-1 ml-2 mb-3">
                      {["smoother channel walls", "better graft fit", "more controlled spacing", "calmer surface healing"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-semibold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium">These benefits appear when the surgeon manages direction and distance correctly. The blade alone does not guarantee density.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Sapphire FUE vs DHI & Honest limits</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">DHI uses implanter pens and suits micro detail. Sapphire FUE suits broad areas that require even structure. Combining both is common for cases involving a full hairline plus temple refinement. Sapphire blades are a tool. They help with precision but they do not replace surgeon judgment or proper graft handling. They are most effective when used in a plan tailored for your hair pattern and your donor capacity.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical leadership shares: Sharp blades help. But the real artistry is knowing where to place each channel not how new the tool is.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Procedure Step by Step */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Sapphire FUE Hair Transplant Procedure Step by Step
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A clear process brings peace of mind. Many patients researching sapphire FUE hair transplant Pakistan want to understand exactly how the day unfolds and what makes Sapphire FUE feel different from their previous expectations. Hair Skill keeps the journey predictable. Every stage is guided by your surgeon and every decision is explained before it happens.
                </p>

                <div className="space-y-6 border-l-2 border-[#772424]/20 pl-6 ml-2 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Before your surgery</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Your journey begins with an online assessment. You send your photos. A doctor studies your pattern donor strength and long term stability. You learn whether Sapphire FUE DHI or a combined approach fits your goals. You also receive a transparent graft estimate and an outline of your potential density upfront. This step often removes most of the anxiety people feel when searching for sapphire FUE Lahore clinics.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">On the surgery day</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">You meet your surgeon for a design session. Together you review hairline options that match your age face shape and growth direction. After numbing extraction begins. This part uses the same FUE principles focused on gentle graft handling. Once grafts are ready your surgeon opens channels using sapphire blades. These channels guide the final direction distribution and density of your new hair. Sapphire blades allow consistent channel sizes giving grafts a comfortable fit. This is where the method contributes most: Clean structure. Natural flow. Predictable spacing.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Duration & Staging Allocation</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Most sessions last 6 to 8 hours depending on graft count and complexity. You take breaks eat and rest as needed. The pace stays calm. Quality first. Allocate 3 to 4 days in Lahore to complete your personal consultation surgical extractions first clinical wash and aftercare guidance smoothly.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-5 rounded-2xl border-l-4 border-[#772424]">
                      Our attending physicians add: Transplants succeed when the day feels unhurried. Sapphire tools help but the relaxed pace protects the result.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Cost Ranges in Pakistan (PURE PKR TIERS / ZERO LOGISTICS) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Sapphire Hair Transplant Cost Ranges in Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People often compare clinics by tier calculations before they compare technique which makes sense. A sapphire hair transplant Pakistan cost search shows wide brackets across facilities and packages. Some offer low numbers with unclear details. Others present high numbers without explaining why. Hair Skill keeps things completely simple. Your tier calculation behaves inside accessible local PKR brackets based on real medical needs not marketing upfront.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Typical sapphire FUE package tiers in PKR</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      Most reputable clinics in Lahore operate inside competitive investment brackets in PKR upfront. The final tier planning depends on graft count design complexity and surgeon involvement. Large cases or repair surgeries sit closer to comprehensive upper tier package ranges. Smaller sessions fall inside accessible introductory brackets upfront.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">What affects your quote & Global comparisons</h3>
                    <p className="text-black font-medium text-base leading-relaxed mb-3">Your custom quote depends on realistic factors such as total grafts needed technique choice Sapphire FUE DHI or mixed hairline complexity crown involvement donor density and thickness repair of previous poor work and surgeon time required. Patients searching for how much a sapphire restoration costs in Pakistan should know that honest clinics never promise high density with low graft counts. Density requires time and precise channel work.</p>
                    <p className="text-black font-bold text-base leading-relaxed border-t border-gray-200/80 pt-3">
                      Comparing investment ranges globally demonstrates an immense economic advantage: Rebuilding hair inside accessible local PKR package tiers offers 60 to 70 percent relative savings compared to heavy capital calculations in the USA or UK while supplying elite cleanroom surgical standards.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Comprehensive Clinical Care Packages</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      Comprehensive Sapphire FUE care packages at Hair Skill bundle your cleanroom extractions micro channel incisions cellular post op medications first clinical wash and 12 months of scheduled follow up monitoring upfront.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Recovery Healing and Results */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Recovery, Healing, and 12 to 18 Month Results With Sapphire FUE
                </h2>

                

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Recovery after a sapphire FUE hair transplant Pakistan is usually calm and predictable. Sapphire blades create cleaner narrower channels which can make surface healing feel smoother compared to classic steel blades. The deeper healing process remains the same. Your grafts need time to settle shed restart their growth cycle and mature into full density upfront.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">First week after surgery</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">You may notice redness tightness or mild swelling for a few days. Scabs usually fall between days 7 and 10. Your first wash happens at the clinic where your medical team shows you the exact home routine. Many people return to desk work within a few days which is why searches for sapphire FUE recovery time often report quick comfort.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Shedding Staging & Regrowth Milestones</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Shedding begins around weeks 2 to 4. This phase can feel unsettling but it is normal. The follicles enter a resting stage before emerging again. Early growth appears between months 3 and 4. You will see thin strands first then stronger fibers. Direction becomes clearer by months 5 to 7 as the new hair adapts to your natural angle.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">When real density appears: Between months 6 and 9 the transformation becomes obvious. By months 12 to 18 most patients see their final fullness. This timing is similar to classic FUE though surface healing with sapphire channels can feel more comfortable. Most people resume gentle activity quickly while exercise requires additional tissue recovery upfront.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our surgical specialists remind patients: Patience shapes the result. Sapphire tools help your comfort but biology sets the pace.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Risks Safety and Guarantees */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Risks, Safety, and What Sapphire FUE Can and Cannot Guarantee
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Any patient searching is sapphire FUE hair transplant safe wants honest answers not polished promises. Sapphire FUE can support gentler healing and precise channel structure but the method itself is not a shield against mistakes. The real safety comes from surgeon skill controlled planning and careful graft handling. Tools help. Judgment leads.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Normal side effects & Possible complications</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">After a sapphire FUE hair transplant Pakistan mild swelling redness tightness and temporary numbness are common. These fade with proper care. Small pimples can appear during early growth as the follicle clears the surface. True complications happen almost exclusively in unaccredited technician facilities including infection poor growth unnatural upright direction overharvested donor zones and patchy density.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Is Sapphire FUE better than classic FUE?</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Sometimes. Sapphire blades allow smaller smoother incisions which can help with dense packing and calm healing. But the blade alone cannot guarantee better results. Quality depends entirely on the person opening your channels direction and depth consistency donor management and graft survival. This is why Hair Skill uses sapphire blades selectively rather than automatically.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Does Sapphire FUE guarantee better results? No technique can guarantee an outcome. Sapphire FUE offers advantages when applied correctly but the success of your transplant depends on surgeon involvement donor strength and healing behavior.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our senior leadership often explains: Better tools support better work. They never replace the hands that guide them.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Aesthetics Density and Natural Results */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Aesthetics, Density, and Natural Results With Sapphire FUE
                </h2>

                {/* IMAGE 7: Crown Before / After Comparison (Capture image_1a7558.jpg & image_1a80b5.jpg: Crown restoration) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/36.webp" alt="Top downward view comparing native crown thinning against restored mature circular density" className="w-full h-full object-cover object-top" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Most people searching sapphire FUE hair transplant Pakistan results want one thing: A hairline that looks like it was always theirs. Sapphire blades help create that natural flow because they allow surgeons to control channel direction with fine precision. But the secret is not the blade. It is the design philosophy behind it.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">What natural results actually mean</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Natural does not mean full at any cost. It means correct direction smooth transitions density where the eye expects it balanced temples and a hairline appropriate for your age and features. Sapphire channels help grafts sit at lifelike angles making early growth look promising upfront.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Where Sapphire FUE shines in visual outcomes</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Patients with thicker hair wavy patterns or strong donor areas often see impressive density with Sapphire FUE. The controlled channel spacing supports uniform coverage especially across the front and midscalp. For crown cases the circular growth pattern requires careful mapping. Sapphire micro channels allow surgeons to follow that pattern more naturally creating a swirl that looks authentic.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Before and after expectations & Density goals: Photos help but they never tell the full story. Hair matures over 12 to 18 months and density builds slowly. The final result feels softer fuller and better blended than what many patients expect from classic FUE. Hair Skill avoids overpacking to prevent graft starvation planning consistent coverage that ages gracefully upfront.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical staff shares: Good design does not draw attention. It disappears into your face. That is the true mark of a natural transplant.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Scheduling Your Session in Lahore (ZERO LOGISTICS LINES) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Planning Your Sapphire Restoration Staging in Lahore Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Preparing for your clinical staging in Lahore should feel completely calm and structured. Our clinical coordination team supports your logistical scheduling touchpoints so you can focus entirely on feeling rested and ready before your procedure upfront.
                </p>
                <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Most patients allocate three to four days for their complete clinical staging sequence in Lahore: Day 1 personal clinical consultation trichoscopy audit diagnostic blood tests and line mapping Day 2 the unhurried FUE extraction and Sapphire channel opening block Day 3 official first clinical wash review and aftercare instruction under medical supervision Day 4 optional final check before returning to everyday routines.</p>
                <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Pack light but bring items that make the experience easier including loose button-up shirts that do not pull over the head a soft neck pillow for flight comfort and gentle localized shampoo. Strictly avoid restrictive high collars or tight caps during week one.</p>
                <p className="text-black text-base md:text-lg font-medium leading-relaxed">If you feel up to gentle unhurried walking once localized swelling settles Lahores calm patient-friendly districts offer peaceful cafes and beautiful outdoor park views. Simply avoid harsh direct sunlight physical exertion heavy sweating or busy crowds upfront.</p>
              </motion.div>

              {/* SECTION: 11 FAQS ACCORDION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  Sapphire FUE Pakistan FAQs
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
                  Start Your Sapphire FUE Journey With Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  If you want a natural result shaped by real surgeons who take time to understand your goals Sapphire FUE at Hair Skill Clinic is a strong fit. Patients often tell us the moment they felt at ease was when they saw how carefully their hairline was designed. Every angle has a purpose. Every channel supports direction. Nothing is rushed upfront. You are not choosing a trend. You are choosing a method that supports precision when applied with right judgment.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-3">What you receive at Hair Skill Clinic</h3>
                <div className="space-y-2 ml-2 mb-6">
                  {[
                    "surgeon led planning from the first moment",
                    "sapphire channel opening done by your doctor",
                    "balanced graft distribution for long term density",
                    "calm structured cleanroom care upfront",
                    "one year of scheduled follow up monitoring",
                    "accessible package brackets inside local PKR tiers upfront"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  You should feel informed not pressured. Your plan should make sense for your donor your age and your long term goals. That is how we work upfront.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-2">Your next step</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  Send your photos. Your doctor studies your pattern. You receive a clear personalized plan and your exact package quote in PKR upfront. No confusion. No upselling. Just honest medical guidance. Get Your Free Sapphire FUE Assessment Today. Take the first step toward a natural confident result.
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
                    <input type="checkbox" id="sphPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="sphPrivacy" className="text-xs text-white/80 cursor-pointer">
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