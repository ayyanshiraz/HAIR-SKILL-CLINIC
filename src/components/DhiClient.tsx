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

export default function DhiClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the DHI Technique Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
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
      q: "What is a DHI hair transplant?",
      a: "DHI is a Direct Hair Implantation technique where grafts are placed using a Choi implanter pen. The surgeon controls angle depth and direction with each placement without opening channels beforehand. This supports natural detail in sensitive areas like the hairline and temples."
    },
    {
      q: "Is DHI better than FUE?",
      a: "DHI is better for precision based work especially hairlines temples and small gaps. FUE or Sapphire FUE may be better for very large coverage. DHI is not universally superior. Its strength lies in micro control not maximum graft count."
    },
    {
      q: "How much does a DHI hair transplant cost in Pakistan?",
      a: "Most clinics offer DHI inside accessible local package brackets in PKR upfront. Your DHI hair transplant Pakistan cost calculation depends on density needs method choice and complexity providing immense savings over Western tiers."
    },
    {
      q: "How long does a DHI procedure take?",
      a: "On average 6 to 8 hours. Complex cases may take slightly longer. You will have breaks throughout the day."
    },
    {
      q: "How many days should I allocate for my clinical staging?",
      a: "Allocate 3 to 4 days in Lahore for personal consultation surgical extractions Choi pen placement first wash and aftercare guidance."
    },
    {
      q: "When can I go back to work after DHI?",
      a: "Most people with desk jobs return within a few days. Jobs involving heat sweat helmets or physical activity require more rest."
    },
    {
      q: "When do you see results after DHI?",
      a: "Shedding begins around weeks 2 to 4. Early regrowth starts around month 3. Noticeable density appears between months 6 and 9. Full results mature by 12 to 18 months."
    },
    {
      q: "Is DHI hair transplant safe?",
      a: "Yes when done by trained surgeons. Risks include infection poor growth unnatural angles or donor overharvesting in low quality clinics."
    },
    {
      q: "Does DHI leave scars?",
      a: "DHI uses FUE extraction so micro scars exist but they remain very small and typically unnoticeable with short hair."
    },
    {
      q: "Can women get DHI?",
      a: "Yes. DHI is often ideal for women because it allows controlled density and natural line shaping without shaving large areas."
    },
    {
      q: "Does DHI guarantee better results?",
      a: "No technique guarantees perfection. DHI helps with angle precision and detail but donor strength and surgeon planning determine the final outcome."
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
            <span className="text-[#772424]">DHI Hair Transplant</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            DHI Hair Transplant Pakistan
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & 5 MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* IMAGE 1: Flagship Hero Visual (Capture image_1a0be3.jpg: Gloved hand holding Choi implanter pen) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/techniques/dhi-hero.jpg" 
                  alt="Surgeon holding specialized Choi implanter pen used for Direct Hair Implantation DHI at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Choi Pen Precision, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Many people discover DHI hair transplant Pakistan when they start searching for a method that feels gentler more controlled and more focused on natural angles. DHI often appears in headlines beside promises of no incisions fast healing and perfect density which can leave patients confused. At Hair Skill Clinic our job is to cut through the noise and give you a clear explanation of what DHI hair transplant in Pakistan can truly deliver and when it is the right choice for you.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  DHI is not magic. It is a technique built around the Choi implanter pen which helps your surgeon place each graft with refined depth and direction without creating channels first. This can support softer hairlines clean transitions and smoother blending in areas where precision matters most. Patients searching for DHI hair transplant Lahore usually want exactly that: natural detail not overpromised density.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Your journey here should feel calm and informed. You meet real surgeons. You discuss your goals openly. You receive clarity on your donor capacity your realistic density and whether DHI Sapphire FUE or a combined approach protects your long term outcome best.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  For those seeking trustworthy guidance Direct Hair Implantation Pakistan at Hair Skill is built on surgeon led planning careful graft handling and a philosophy that respects both aesthetics and donor preservation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our lead surgical specialists often say: DHI is a precision tool. It shines when you use it with intention not as a trend.
                </p>

                <h2 className="text-3xl font-black text-[#772424] mt-4 tracking-tight">
                  Rediscover Your Hair. Rediscover Your Confidence.
                </h2>
                <h3 className="text-xl font-extrabold text-[#772424]">
                  DHI Hair Transplant in Pakistan at Hair Skill Clinic
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If you want a natural looking result that blends seamlessly with your existing hair DHI can be the right choice. At Hair Skill Clinic DHI is performed only by experienced surgeons who understand the balance between precision density and long term donor health. You feel guided supported and fully informed from the first message to your last follow up.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  This is where medical expertise meets human centered care.
                </p>
              </motion.div>

              {/* IMAGE 2: Frontal Lowering Comparison (Capture image_1a0f9f.jpg: Marked hairline vs grown results) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                <img src="/techniques/dhi-lowering-comparison.jpg" alt="Frontal view comparing lowered pre surgical DHI hairline markings against mature dense growth" className="w-full h-full object-cover object-top" />
              </motion.div>

              {/* Section: Key Benefits at a Glance */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h3 className="text-2xl font-black text-[#772424] mb-4">Key Benefits at a Glance</h3>
                <div className="space-y-2 ml-2 mb-6">
                  {[
                    "Natural looking results created with real angle control",
                    "High density potential in small to medium areas",
                    "Ideal for hairline refinement and scattered thinning",
                    "No pre opened channels giving more comfort post surgery",
                    "Fast organized medical care experience",
                    "Trusted by international patients seeking permanent restoration"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>
              </motion.div>

              {/* Section: What Is DHI Hair Transplant and How Does It Work */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  What Is DHI Hair Transplant and How Does It Work?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People searching for what is DHI hair transplant usually want a simple honest explanation. DHI stands for Direct Hair Implantation. It uses a Choi implanter pen to place each graft directly into the scalp without creating channels beforehand.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  This gives your surgeon tighter control over angle depth and direction. When done correctly DHI can help you achieve a softer more refined look in areas that demand precision.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">DHI in simple language</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">During DHI hair transplant Pakistan grafts are extracted using standard FUE techniques. Instead of opening channels the surgeon loads each graft into the Choi pen. With a gentle press the pen implants the follicle exactly where it needs to sit. Placement and channel opening happen in one movement. This reduces handling time and helps the graft settle more naturally.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">DHI vs FUE</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-2">Many patients compare DHI vs FUE. The difference is not extraction. It is implantation. FUE creates channels then inserts grafts. DHI inserts grafts directly which supports angle control.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">It is also important to understand that in experienced hands DHI and standard FUE can achieve equally natural high-quality outcomes. The technique is a tool; what truly determines the result is the teams expertise: proper planning graft handling angle and direction control and disciplined donor management. In other words the best results come from the right hands not the trendiest label.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">For large areas like full crowns classic FUE or Sapphire FUE can be just as effective. For hairlines or temples DHI often provides cleaner detail because the surgeon manages every angle individually.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">DHI vs Sapphire FUE & When DHI shines</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">For dense packing across a broad zone Sapphire FUE can perform better. For micro refinement DHI hair transplant Lahore clinics often prefer the Choi pen. Hair Skill uses both techniques depending on your pattern rather than pushing one method for all cases.</p>
                    <p className="text-black text-base md:text-lg font-bold mb-2">When DHI shines:</p>
                    <div className="space-y-1 ml-2 mb-4">
                      {["Soft natural hairlines", "Temples and peaks", "Small gaps", "Unshaven cases", "Womens hairlines"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-semibold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our attending physicians note: DHI helps when detail matters. The method follows the design. Not the other way around.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Why Choose DHI Hair Transplant at Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Choose DHI Hair Transplant in Pakistan at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People searching for DHI hair transplant Pakistan usually fall into two groups. Some want a premium method that feels gentle and precise. Others want clarity about whether DHI is truly better or just heavily marketed.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Pakistan became one of the most trusted destinations for DHI because experienced surgeons competitive package tiers and a well developed medical care system come together in one place. But not every clinic uses DHI the same way. At Hair Skill the method is chosen with intention not as a blanket solution.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Why Pakistan leads in DHI</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">High case volume matters in this field. Lahore treats thousands of FUE and DHI patients every year giving surgeons more hands on experience. This consistency is one reason DHI hair transplant Lahore searches often point to clinics here. Another reason is affordability inside accessible local PKR tiers. Hair restoration in Pakistan sits significantly lower than Western calculations which allows patients to access advanced methods without inflated pricing.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Why Hair Skill stands out & Patient appreciation</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Hair Skill is shortlisted as a top DHI hair transplant clinic in Pakistan because surgeons open every design session themselves and decide whether DHI suits your pattern. Some people need detail work; others need wide coverage. DHI is applied where it makes sense not where marketing suggests. That is how we maintain donor safety and long term planning.</p>
                    <p className="text-black text-base md:text-lg font-bold mb-2">What most patients appreciate:</p>
                    <div className="space-y-1 ml-2 mb-4">
                      {[
                        "surgeon led implantation",
                        "careful angle and direction control",
                        "no rushed sessions",
                        "honest expectations",
                        "comfortable clinic environment",
                        "steady communication upfront"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-semibold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our restorative team states: DHI is a powerful tool but the real value comes from choosing it at the right moment for the right pattern.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Who Is a Good Candidate */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Who Is a Good Candidate for DHI Hair Transplant?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Many people searching who is a good candidate for DHI hair transplant want a clear answer that is free from hype. DHI performs best when the goal is precision not maximum coverage. If your concern is creating a soft natural front line or filling controlled gaps DHI often fits the assignment perfectly.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  If you need very large areas covered FUE or Sapphire FUE may be more efficient and equally natural. Matching the right method to your pattern protects both your donor and your long term result.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">When DHI is the strongest choice</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-2">DHI is especially effective for:</p>
                    <div className="space-y-1 ml-2 mb-3">
                      {[
                        "early androgenetic alopecia with thinning but not severe loss",
                        "receding hairline where angles need fine control",
                        "temples and peaks that require soft placement",
                        "crown thinning when scattered grafts need a natural swirl",
                        "womens hairlines where density must blend gently",
                        "unshaven DHI hair transplant requests allowing subtle corrections",
                        "patients wanting high density DHI within a limited area"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-semibold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium">These situations benefit from the Choi pens angle and depth precision. The surgeon can implant each graft exactly where it should sit without disrupting existing hair.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">When another method may be better & Suitability checks</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">DHI is not ideal for very large coverage. For advanced patterns or situations where thousands of grafts are needed in one session Sapphire FUE often creates a smoother workflow. Patients with weaker donor areas may also respond better to classic FUE strategies.</p>
                    <p className="text-black text-base md:text-lg font-medium mb-2">Medical suitability checks at Hair Skill examine donor density hair caliber scalp flexibility stability of hair loss and realistic goals.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical directors explain: DHI is not the default technique. It is the precise technique. We recommend it when it protects the donor and enhances detail not just because it sounds premium.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: DHI Techniques Choi Pen Control & Density Planning */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  DHI Techniques: Choi Pen Control, Density Planning, and Natural Design
                </h2>

                {/* IMAGE 3: Two Implanter Pens Lying Flat (Capture image_1a0fbe.jpg: Two Choi pens lying down) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-8 shadow-md">
                  <img src="/techniques/choi-pens-flat.jpg" alt="Two sterile Choi implanter pens calibrated for single and double follicular unit placements" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People often assume DHI is simply a pen instead of channels but the technique goes deeper. The strength of Direct Hair Implantation Pakistan comes from how the Choi pen allows surgeons to adjust angle direction and depth with a level of finesse that is harder to achieve with pre opened channels.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  At Hair Skill DHI is not used because it is trendy. It is used when your pattern density goals and donor capacity genuinely benefit from this level of control.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">How the Choi implanter pen works</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">The Choi pen loads one graft at a time. With gentle pressure your surgeon implants it directly into the scalp. Implantation and channel creation happen in one smooth motion. This reduces the time grafts spend outside the body and helps maintain hydration. It also allows for micro adjustments which matter deeply for natural results.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Why angle and direction matter & Useful zones</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">A natural hairline is not a straight line. It is a collection of micro angles. With DHI hair transplant Lahore each graft can be positioned individually creating soft transitions zigzag irregularity believable flow toward temples and clean directional blending. These micro details separate a natural result from an artificial look.</p>
                    <p className="text-black text-base md:text-lg font-medium mb-2">Where DHI is especially useful: restoring temple points shaping womens hairlines building subtle front line density scattered thinning small detailed corrections and no incision DHI or unshaven approaches.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Honest limits</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">DHI is slower. Large coverage requires either split days or combining methods. Some clinics exaggerate density claims. The reality is simple: DHI shines where detail matters not where volume dominates.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our senior physicians share: The Choi pen gives precision but precision must follow a plan. Without a balanced design technique alone means nothing.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Procedure Step by Step at Hair Skill */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  DHI Hair Transplant Procedure Step by Step at Hair Skill Clinic
                </h2>

                {/* IMAGE 4: Macro Choi Insertion (Capture image_1a0fdb.jpg: Doctor inserting Choi pen close up) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/techniques/choi-macro-insertion.jpg" alt="Macro close up view of surgeon placing follicular unit directly into scalp with Choi implanter pen" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Understanding the full DHI procedure step by step helps remove most of the anxiety people feel before surgery. The goal is to make the day predictable calm and structured. At Hair Skill every step is guided by your surgeon and every decision is explained. Nothing feels rushed. Nothing feels unclear.
                </p>

                <div className="space-y-6 border-l-2 border-[#772424]/20 pl-6 ml-2 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Before your procedure</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Your journey begins with an online consultation. You send your photos. A doctor reviews your pattern checks donor strength and evaluates whether DHI Sapphire FUE or a combined method protects your long term result. This is where honest planning begins. Many patients searching for DHI process in Pakistan simply want clarity on which method truly fits their case.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">On the surgery day</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">You arrive at the clinic meet your medical team and sit with your surgeon for a final design session. Together you shape the hairline and map density zones. Once numbing takes effect extraction begins using FUE principles. Grafts are handled gently and stored properly to preserve hydration. Next comes the DHI stage. Each graft is loaded into the Choi implanter pen and placed directly into the scalp in one movement. This is the core of how DHI is done. No pre opened channels. Full control over depth and angle. Smooth blending.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Duration & Staging Timeline</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Sessions typically last 6 to 8 hours depending on graft count and complexity. You take breaks eat stretch and rest as needed. Comfort remains the priority. Allocate 3 to 4 days in Lahore for personal consultation surgical staging first clinical wash and follow up care.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-5 rounded-2xl border-l-4 border-[#772424]">
                      Our supervising surgeons remind patients: A calm surgery day leads to better healing. Precision always works better when the environment is unhurried.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: DHI Cost Ranges in Pakistan (PURE PKR TIERS / ZERO LOGISTICS) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  DHI Hair Transplant Cost Ranges in Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  When people search DHI hair transplant Pakistan cost they often find confusing numbers that range from surprisingly cheap to questionably high. The truth sits in the middle. DHI is more labor intensive than classic FUE and it requires surgeon led precision during implantation so reliable clinics price it realistically.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  At Hair Skill package brackets stay transparent medically driven and tailored to your case inside accessible local PKR tiers not marketing trends.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Typical DHI package tiers in PKR</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      Most reputable clinical facilities in Lahore offer DHI inside accessible local package brackets in PKR depending on your precise graft count and structural complexity. If an unaccredited center advertises suspiciously cheap options it usually indicates rushed technician extractions with zero angle mapping upfront.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">What affects your tier quote & Global comparisons</h3>
                    <p className="text-black font-medium text-base leading-relaxed mb-3">Your custom tier quote depends on total grafts needed whether the case includes hairline crown or both unshaven vs shaven approaches scattered thinning combined techniques donor density hair caliber surgeon time required and supportive add-ons like PRP.</p>
                    <p className="text-black font-bold text-base leading-relaxed border-t border-gray-200/80 pt-3">
                      Comparing investment ranges globally demonstrates an astonishing reality: DHI procedures in Pakistan sit inside local PKR package tiers offering 60 to 70 percent relative savings compared to upper tier calculations in the USA or UK while supplying elite cleanroom surgical standards.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Comprehensive Clinical Care Packages</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      Comprehensive DHI care packages at Hair Skill bundle your complete cleanroom extractions Choi implanter placements cellular post op medications first clinical wash and 12 months of scheduled follow up care upfront.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Recovery Healing and 12-18 Month Results */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Recovery, Healing, and 12 to 18 Month Results With DHI
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People searching DHI recovery time want honest expectations not polished marketing. DHI can feel gentler on the surface because grafts are implanted directly without pre opened channels but healing follows the same biological steps as FUE. The advantage is in comfort and angle control not instant results. A clear timeline helps you understand exactly what to expect.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">The First Week</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Redness mild swelling tightness or small scabs improve within days. Your first wash happens at the clinic. Sleeping upright protects grafts upfront. Early days feel far easier than classic channel opening.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">Shedding Staging</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Between weeks 2 and 4 transplanted shafts shed. This is normal. The follicle enters a resting stage before new sprouts anchor. Shedding does not mean failure; it is vital root remodeling.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">Growth Turning Points</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Small thin hairs appear around months 3 and 4 thickening gradually. By months 6 to 9 patients see noticeable progress representing the first major visual milestone.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">Mature Results & Desk Work</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Final mature density settles between months 12 and 18. Most people return to desk work in a few days while heavy physical exertion requires additional tissue recovery upfront.</p>
                  </div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our attending doctors state: DHI helps with comfort and detail but time is still the artist. Hair grows at its own pace.
                </p>
              </motion.div>

              {/* Section: Risks Safety and Success Rate */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Risks, Safety, and Success Rate of DHI Hair Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Anyone researching safety usually wants absolute clarity. DHI is completely safe when done by trained surgeons who understand donor limits angle control and proper graft handling. The technique itself is precise but safety depends on planning execution and realistic expectations. The Choi pen is a tool. The outcome comes from the hands guiding it.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Expected side effects & Complications</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Minor swelling redness tightness and temporary numbness are common along with occasional small pimples during early regrowth. True complications happen almost exclusively in unaccredited technician centers including infection lower yield unnatural upright angles patchy density and donor overharvesting.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Does DHI guarantee better results?</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">No method can guarantee perfection. DHI gives surgeons precise control over angle and direction supporting natural results in detail heavy zones. But donor strength scalp biology and design choices still determine your final appearance.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">In experienced cleanroom settings DHI graft survival rate is exceptionally high often comparable to or slightly above classic FUE because grafts spend less time outside the body.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our surgical specialists explain: The method helps your result but the method never replaces judgment. Safe outcomes require discipline not just a different tool.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Aesthetics Density and Natural Results */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Aesthetics, Density, and Natural Results With DHI
                </h2>

                {/* IMAGE 5: 1-12 Month Progression (Capture image_1a0ffa.jpg: Month 1, 3, 6, 9, 12 panel) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-8 shadow-md">
                  <img src="/techniques/dhi-12month-panel.jpg" alt="Sequential clinical progression panel month 1 through month 12 mature DHI density anchoring" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Most patients looking into natural results with DHI want an outcome that blends seamlessly with their existing hair. They want softness believable density and a hairline that frames the face without attracting attention. DHI helps achieve this because each graft is implanted with individual control. Every angle is intentional. Every direction forms part of a larger visual pattern. When guided by a skilled surgeon the Choi pen becomes a precision instrument for creating natural flow.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">What natural results actually look like</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Natural does not mean overly dense in the front. It means the hairline grows in irregular micro angles. Density increases gradually toward the midscalp. Single grafts sit at the front doubles and triples behind them. With DHI hairline vs FUE hairline the difference often shows in softness allowing finer transitions and a less uniform look.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Where DHI enhances aesthetics & Density reality</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">DHI excels at shaping detailed hairlines filling temple points blending with existing hair correcting past work scattered part line thinning and edge directions. Some clinics promise extremely high density with DHI which is rarely safe. The role of DHI is controlled placement not pushing beyond biological constraints.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Your before and after journey evolves slowly starting early sprouts at months 3 to 4 major thickening at month 6 and ultimate refinement inside 12 to 18 months.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical directors summarize: A natural result is not a line. It is a language of angles. DHI gives us the vocabulary to shape that language.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Scheduling Your Session in Lahore (ZERO LOGISTICS LINES) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Scheduling Your DHI Restoration Staging in Lahore Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Planning your clinical staging in Lahore should feel completely calm and structured. Most patients allocate three to four days to complete their medical staging smoothly. Day one covers your clinical consultation micro geometry measurements and line mapping. Day two is the surgical extraction and Choi pen placement block. Day three covers your delicate first wash review and aftercare instruction under medical supervision.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Bring button-up shirts to avoid touching the recipient zone when changing. Pack a neck pillow for sleeping elevated during week one. Light unhurried city walks are fine once early localized swelling recedes provided you avoid harsh direct sunlight physical exertion or heavy sweating. Your only job is to rest and hydrate while allowing your newly placed grafts to anchor.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Our senior physicians note: Recovery is not about doing more. It is about giving your new grafts the calm they need.
                </p>
              </motion.div>

              {/* SECTION: 11 FAQS ACCORDION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  DHI Hair Transplant Pakistan FAQs
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
                  Start Your DHI Hair Transplant Journey With Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  If you want a result that looks natural feels effortless and reflects careful medical planning DHI can be the right path when guided by experienced surgeons. At Hair Skill Clinic DHI is not used because it is trending. It is used when your hairline density goals and donor biology genuinely benefit from the precision of the Choi pen. Your experience becomes personal structured and calm from the moment you step into our facility in Lahore.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  You meet your surgeon face to face. You review your design together. You understand why DHI suits your pattern or why a mixed plan may serve you even better. Nothing feels rushed. Nothing feels unclear.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-3">What you receive at Hair Skill Clinic</h3>
                <div className="space-y-2 ml-2 mb-6">
                  {[
                    "surgeon led DHI planning and implantation",
                    "hairline mapping designed specifically for your features",
                    "careful angle and direction control",
                    "donor safe extraction that protects long term potential",
                    "a comfortable cleanroom environment with a low daily case load",
                    "complete clinical care packages inside accessible local PKR tiers upfront",
                    "ongoing medical follow up for 12 full months"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Our patients repeatedly say the care feels thoughtful the process stays organized and the result looks naturally theirs.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-2">Your next step</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  You send your photos. Your doctor studies your pattern and donor strength. You receive a personalized plan and your exact package quote in PKR based on real medical need not generic marketing. It takes minutes to begin. The transformation lasts for years. Get Your Free DHI Assessment Today. Let Hair Skill help you take the next step toward a confident natural looking result.
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
                    <input type="checkbox" id="dhiPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="dhiPrivacy" className="text-xs text-white/80 cursor-pointer">
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