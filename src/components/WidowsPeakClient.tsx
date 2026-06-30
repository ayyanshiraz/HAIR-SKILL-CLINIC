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

export default function WidowsPeakClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Widows Peak Treatment Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- 10 FAQS DATA (Verbatim from your pasted text, scrubbed of safe prose errors) ---
  const faqList = [
    {
      q: "Can you get a widows peak with a hair transplant?",
      a: "Yes. A widows peak hair transplant can create a natural V-shaped hairline using FUE Sapphire FUE or DHI techniques. The result depends entirely on proper aesthetic design and graft angle placement."
    },
    {
      q: "Can a widows peak be removed with a hair transplant?",
      a: "Yes. A remove widows peak hair transplant softens or rounds the central point by adding dense grafts to the front line and temples creating a flawlessly smooth rounded hairline contour."
    },
    {
      q: "How many grafts are needed for a widows peak hair transplant?",
      a: "Most widows peak transplant cases require between 800 to 2500 grafts depending on whether your goal is to subtly refine soften or fully redesign the frontal hairline band."
    },
    {
      q: "Does a widows peak hair transplant look natural?",
      a: "It looks completely natural when designed with soft micro irregularity forward-laying flat angles and gradual density layering. Poor rigid design is the only reason for unnatural pluggy results."
    },
    {
      q: "Which technique is best for widows peak hairline design?",
      a: "Both FUE and DHI methods produce world class results. DHI allows extreme depth and angle control in the tight frontal zone while Sapphire FUE supports ultra refined dense channel opening."
    },
    {
      q: "How long does a widows peak hair transplant last?",
      a: "Transplanted follicular units are permanent. A well planned hairline transplant will grow naturally for the rest of your life though surrounding native hairs behind it may require maintenance."
    },
    {
      q: "How much does a widows peak hair transplant cost?",
      a: "Pricing behaves on a tiered global scale. South Asian centers like Pakistan offer highly affordable all-inclusive luxury packages whereas European and American clinics operate on premium per-graft fee structures."
    },
    {
      q: "When will I see results after the procedure?",
      a: "Initial shedding of transplanted shafts occurs in the first 2 to 3 months. Visible new growth begins around month 4 with ultimate mature density settling in between months 9 to 12."
    },
    {
      q: "Is creating a widows peak better than a straight hairline?",
      a: "There is no superior shape. It depends strictly on your natural facial bone geometry. Some gentlemen look best with a sharp defined V contour while others suit a softer rounded aesthetic."
    },
    {
      q: "Will my widows peak look natural as I age?",
      a: "Yes provided the hairline is planned at an age appropriate vertical height on the forehead. Conservative expertly tailored designs age seamlessly alongside your changing facial features."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24 overflow-x-hidden">
      
      {/* --- ASYMMETRIC HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-white px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          {/* Breadcrumbs strictly pinned to far left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2 justify-start flex-wrap">
            <Link href="/" className="md:hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/hair-transplant" className="md:hover:text-[#772424] transition-colors">Hair Transplant</Link>
            <span>/</span>
            <span className="text-[#772424]">Widows Peak Hair Transplant</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center break-words">
            Widows Peak Hair Transplant Create or Remove a V-Shaped Hairline
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & 10 MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* IMAGE 1: Flagship Hero V-Shape Comparison */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img src="/hair-transplant/2.webp" alt="Patient before and after Widows Peak Hair Transplant creation and frontal band redesign" className="w-full h-full object-cover md:group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Widows Peak Redesign, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Intro Paragraphs */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  A widows peak hair transplant is one of the most precise hairline design procedures. Some people want to create a sharp V-shaped hairline. Others want to soften or remove it. Both are possible with modern techniques. When people search widows peak transplant or can you get a widows peak with hair transplant they are usually trying to answer one question: Can my hairline be redesigned in a natural way?
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The answer is yes. A hair transplant can:
                </p>
                
                <div className="flex flex-col gap-2 ml-2">
                  {[
                    "create a defined widows peak",
                    "soften an existing peak",
                    "round the hairline",
                    "fill temple recessions"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-[#772424] font-black text-lg pb-0.5">•</span>
                      <p className="text-black text-base md:text-lg font-bold">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mt-2">
                  The key is design. A widows peak is not just a line. It is a shape that must match your face age and natural hair direction.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Patients often worry about two things: Will it look natural and will it still look good years later? These concerns are valid. A poorly designed V-shaped hairline can look artificial. A well-designed one blends seamlessly and ages naturally.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Our lead surgeons explain that hairline design is the most artistic part of a transplant. The angle density and irregularity determine whether it looks like your own hair.
                </p>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  This guide explains everything you need to know about widows peak hair transplant before after including:
                </p>

                <div className="flex flex-col gap-2 ml-2">
                  {[
                    "how to create or remove a widows peak",
                    "how many grafts you may need",
                    "which techniques are used",
                    "cost and recovery expectations",
                    "how to keep the result natural over time"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-[#772424] font-black text-lg pb-0.5">•</span>
                      <p className="text-black text-base md:text-lg font-medium">{item}</p>
                    </div>
                  ))}
                </div>

                {/* At a glance box */}
                <div className="p-8 rounded-3xl bg-gray-50 border-l-4 border-[#772424] shadow-sm my-4">
                  <h3 className="text-xl font-extrabold text-[#772424] mb-2">Widows Peak Hair Transplant at a glance</h3>
                  <p className="text-black font-medium text-base leading-relaxed">
                    A widows peak hair transplant can create soften or reshape a V-shaped hairline. Around 800 to 2500 grafts are typically used. Natural results depend on hairline design angle and density planning using FUE or DHI techniques.
                  </p>
                </div>
              </motion.div>

              {/* SECTION: What is a widows peak hairline */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  What is a widows peak hairline?
                </h2>

                {/* IMAGE 2: Bathroom mirror inspection */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/3.webp" alt="Gentleman checking native receding widows peak hairline inside mirror" className="w-full h-full object-cover object-top" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A widows peak hair transplant starts with understanding the shape itself. A widows peak is a V-shaped point in the center of the hairline. Some people are born with it. Others develop a similar look as the temples recede.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-4">Natural genetics and hairline shape</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  A widows peak is usually genetic. It is part of your natural hairline pattern. Common characteristics include:
                </p>
                
                <div className="flex flex-col gap-3 mb-6 ml-2">
                  {[
                    "A central point that dips slightly forward",
                    "Gentle recession at both temples",
                    "A soft V shape rather than a sharp line"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#772424] font-black text-lg pb-1">•</span>
                      <p className="text-black text-base md:text-lg font-medium">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  This is why many searches like create widows peak hairline or V shaped hairline transplant focus on recreating a natural pattern rather than an artificial shape. Our medical team explains that a natural widows peak is rarely a perfect triangle. It is a soft irregular shape that blends into the rest of the hairline.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-4">Aesthetic perception of widows peak</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  People view widows peaks differently. Some see it as:
                </p>

                <div className="flex flex-col gap-2 mb-4 ml-2">
                  <div className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">A masculine and defined hairline</p></div>
                  <div className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">A classic strong facial frame</p></div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Others prefer a softer rounded front. That is why patients search both:
                </p>

                <div className="flex flex-col gap-2 mb-6 ml-2">
                  <div className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">hairline transplant widows peak to create one</p></div>
                  <div className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">remove widows peak hair transplant to soften it</p></div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  There is no single correct hairline. The right design is the one that fits your face age and personal preference.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-4">When a widows peak becomes a concern</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Sometimes a natural widows peak becomes more pronounced due to temple recession or thinning around the frontal zone. This can make the V-shape look sharper or uneven. In those cases patients may consider reshaping the hairline through transplant design.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  The key idea: A widows peak is not just a point. It is part of a wider hairline pattern that must be designed as a whole. Next we explain can you create a widows peak with a hair transplant and how surgeons design a natural-looking V-shaped hairline.
                </p>
              </motion.div>

              {/* SECTION: Can you create a widows peak */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Can you create a widows peak with a hair transplant?
                </h2>

                {/* IMAGE 3: Scalp top view marked */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/4.webp" alt="Top surgical view of patient forehead marked with white mapping pencil" className="w-full h-full object-cover object-top" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Yes. A widows peak hair transplant can create a natural V-shaped hairline when it is designed carefully and placed with precision. The goal is not a sharp triangle. The goal is a soft natural point that fits your face.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-4">Design principles for a natural V-shaped hairline</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Creating a widows peak starts with planning not grafts. A natural design considers:
                </p>

                <div className="flex flex-col gap-3 mb-6 ml-2">
                  {["Forehead height and facial proportions", "Temple position and existing recession", "Hair direction and curl pattern"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><span className="text-[#772424] font-black text-lg pb-1">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  The central point is placed first. Then the hairline flows back into the temples with a gentle curve. Our surgical specialists note that a believable create widows peak hairline plan uses micro-irregularity. The front line is never perfectly straight or perfectly symmetric.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-4">Density and angle for realism</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  A natural widows peak depends on how each graft is placed. Key technical details:
                </p>

                <div className="flex flex-col gap-3 mb-6 ml-2">
                  {["Single-hair grafts used at the very front", "Gradual density increase behind the hairline", "Flat angles in the front so hair lays forward naturally"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><span className="text-[#772424] font-black text-lg pb-1">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  These elements avoid a pluggy or artificial look often seen in older procedures.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-4">Who is a good candidate for creating a widows peak?</h3>
                <div className="flex flex-col gap-3 mb-4 ml-2">
                  {["Good donor density at the back of the scalp", "Stable hair loss pattern", "A desire for a defined but natural hairline"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><span className="text-[#772424] font-black text-lg pb-1">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                  ))}
                </div>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People with very low donor density or advanced hair loss may need a more conservative design.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-4">What result to expect</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  A well-designed hairline transplant widows peak creates a natural-looking central point better facial framing and balanced density that looks realistic in daylight. Our surgeons explain that subtle design often looks stronger than an aggressive low hairline.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  The key takeaway: Yes you can create a widows peak. The success depends on design angle and density not just graft numbers.
                </p>
              </motion.div>

              {/* SECTION: Can you remove or soften */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Can you remove or soften a widows peak?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Not everyone wants a sharp V shape. Many patients search remove widows peak hair transplant or fix widows peak hairline because they prefer a softer more rounded front. This is possible with careful design and placement.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-4">Rounding the hairline</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Softening a widows peak means reducing the central point and blending it into a smoother curve. The design approach usually involves:
                </p>

                <div className="flex flex-col gap-3 mb-6 ml-2">
                  {["Lowering or filling the central V area slightly", "Adding density along both sides of the peak", "Creating a gentle rounded transition into the temples"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><span className="text-[#772424] font-black text-lg pb-1">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  The goal is not to erase the natural pattern completely. It is to balance it so it looks even and natural from all angles. Our clinical specialists explain that rounding a hairline must follow facial proportions. A hairline that is too straight can look artificial as you age.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-4">Filling temple recessions & Softening choices</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A strong widows peak is often combined with temple recession. This makes the V shape appear deeper. To soften the overall look surgeons often fill the temple corners with additional grafts blend the frontal line into the temples and adjust density so the transition looks gradual. This approach creates a more balanced frame for the face.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  You may consider softening your widows peak if the central point looks too sharp your temples have receded significantly or you want a more youthful rounded hairline. Our medical staff notes that many patients prefer a softened design because it adapts better to future aging.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Expected outcome: A well-planned reduce widows peak procedure creates a smoother hairline shape improved symmetry and natural density that blends with existing hair. The key takeaway: A widows peak can be created reduced or reshaped. The best option depends on your face donor capacity and long-term hair pattern.
                </p>
              </motion.div>

              {/* SECTION: How the procedure works (FUE vs DHI) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  How the procedure works: FUE vs DHI
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  A widows peak hair transplant is a design-driven procedure. The technique supports the plan. The two main options used for hairline work are FUE hairline transplant widows peak and DHI hairline transplant widows peak.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-4">Graft extraction with FUE</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  In FUE hair transplant individual follicles are taken from the donor area at the back of the scalp. Key steps:
                </p>

                <div className="flex flex-col gap-2 mb-6 ml-2">
                  <div className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">Local anesthesia is applied for comfort</p></div>
                  <div className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">Individual grafts are extracted one by one</p></div>
                  <div className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">The donor area is protected to keep it natural-looking</p></div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  FUE allows careful selection of fine grafts for the hairline. This is important for a natural widows peak. Our surgical team explains that donor management is part of long-term planning not just one session.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-4">Channel creation and implantation</h3>

                {/* IMAGE 4: Gloved hand holding sapphire pen */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-6 shadow-md">
                  <img src="/hair-transplant/5.webp" alt="Surgeon holding synthetic crystal Sapphire blade tool used for dense micro slits" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  After extraction channels are created in the recipient area. These channels determine the angle direction and density of the hairline. In <span className="font-extrabold text-[#772424]">Sapphire FUE</span> fine sapphire blades are used to create precise channels for a soft refined front line.
                </p>

                {/* IMAGE 5: DHI implanter pen */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-6 shadow-md">
                  <img src="/hair-transplant/6.webp" alt="Direct Hair Implantation DHI implanter pen placing single hair graft directly into scalp" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  In <span className="font-extrabold text-[#772424]">DHI hair transplant</span> grafts are implanted directly using an implanter pen. This allows:
                </p>

                <div className="flex flex-col gap-2 mb-6 ml-2">
                  <div className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">Controlled depth of placement</p></div>
                  <div className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">Precise angle and direction</p></div>
                  <div className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">Focused density in small areas like the central peak</p></div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Our clinicians note that DHI is often preferred for detailed hairline shaping where control is essential. Both methods can produce excellent results. The choice depends on the complexity of your hairline design the number of grafts required and the surgical teams planning and experience. Technique supports the outcome. Design determines the outcome.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  What happens on the day of surgery: The procedure typically takes several hours. It is done under local anesthesia. Most patients are comfortable and awake. You leave the clinic the same day with clear aftercare instructions.
                </p>
              </motion.div>

              {/* SECTION: How many grafts are needed */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  How many grafts are needed for a widows peak?
                </h2>

                {/* IMAGE 6: Two diagnostic angles marked */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/7.webp" alt="Frontal and oblique diagnostic views of patient forehead mapped for graft volume distribution" className="w-full h-full object-cover object-top" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  The number of grafts for a widows peak hair transplant depends on how much you want to change. Some patients only refine the central point. Others redesign the entire frontal line.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Mild correction or refinement (800 to 1,200 grafts)</h3>
                    <p className="text-black font-medium text-base leading-relaxed">If your goal is to slightly define or soften the V shape the graft requirement is usually modest. This level is often used to sharpen a subtle widows peak soften a slightly uneven point or adjust symmetry at the front. Our lead doctors explain that small changes in the frontal line can make a noticeable difference without needing large graft numbers.</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Moderate redesign of frontal hairline (1,200 to 2,000 grafts)</h3>
                    <p className="text-black font-medium text-base leading-relaxed">If you want to reshape both the peak and the temple areas more grafts are needed. This allows creation or reduction of the central peak filling of temple recessions and improved density across the frontal band. This is one of the most common ranges for hairline transplant widows peak procedures.</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Full hairline transformation (2,000 to 2,500+ grafts)</h3>
                    <p className="text-black font-medium text-base leading-relaxed">In cases where there is significant recession or thinning a larger number of grafts may be required. This includes full frontal hairline reconstruction temple and corner filling and stronger density throughout the front.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#772424] mb-3">What affects graft numbers</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Your personal graft count depends on donor density and hair thickness hair color and contrast with your scalp and the shape and height of your new hairline. Curly or thick hair often requires fewer grafts for visual density.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our experts note that using the right number of grafts not the maximum number helps preserve donor hair for the future. The key takeaway: Most widows peak transplant cases use between 800 and 2500 grafts depending on the level of change.
                </p>
              </motion.div>

              {/* SECTION: Widows peak hair transplant cost (PURE RANGES / NO NUMERIC PRICES) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Widows peak hair transplant cost ranges
                </h2>

                {/* IMAGE 7: Cost graphic / Pakistan Hub visual */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/8.webp" alt="Global healthcare package and medical hub investment tiers graphic" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  The cost of a widows peak hair transplant depends on graft numbers technique and location. Since this is usually a hairline-focused procedure most cases fall into the 800 to 2500 graft range. Rather than listing rigid numeric prices that fluctuate with global currencies pricing behaves across three distinct international healthcare tiers:
                </p>

                <div className="space-y-6 mb-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Average cost structures in Pakistan</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      Pakistan is the most popular destination for widows peak transplant packages because of all-inclusive pricing models. Rather than charging aggressive per-graft rates clinical hubs in Lahore operate on fixed comprehensive packages. These package ranges comfortably cover your complete surgical procedure luxury hotel stays VIP transfers and post-operative care in one highly accessible financial bracket making it significantly more cost-effective than Western alternatives.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Average cost structures in Europe and UK</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      European clinics usually charge strictly per graft. Because rebuilding a dense widows peak requires meticulously implanting thousands of tightly packed single-hair units per-graft calculations escalate rapidly placing European hairline design procedures into significantly higher expense tiers.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Average cost structures in the United States</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      The US uses a strict premium per-graft model governed almost entirely by the operating surgeons individual celebrity reputation and total extracted volume representing the most capital-intensive investment tier in global restorative medicine.
                    </p>
                  </div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Why widows peak procedures vary in price: The final cost depends on how many grafts you need the level of hairline design detail technique used FUE Sapphire FUE or DHI and surgeon experience. Smaller corrections naturally cost less than full hairline reconstruction. The key takeaway: Global pricing behaves as a tiered scale moving from highly accessible South Asian packages up to premium Western fee structures.
                </p>
              </motion.div>

              {/* SECTION: Before and after results timeline */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Widows peak before and after results & timeline
                </h2>

                {/* IMAGE 8: Downward timeline view */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/9.webp" alt="Top downward comparison of marked surgical plan versus 12 months mature healed growth" className="w-full h-full object-cover object-top" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  When patients search widows peak hair transplant before after they want to know two things: How it will look and when they will see it. A widows peak design evolves in stages. The final result takes time to appear.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <span className="text-xs font-black uppercase tracking-widest text-[#772424] block mb-1">First Month</span>
                    <h4 className="text-lg font-black text-[#772424] mb-2">Tissue Recovery</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">In the first weeks the focus is healing. You may see small scabs that fall off within 10 to 12 days mild redness in the recipient area and short stubble where grafts were placed. By the end of month one the scalp looks clean.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <span className="text-xs font-black uppercase tracking-widest text-[#772424] block mb-1">Months 2 to 4</span>
                    <h4 className="text-lg font-black text-[#772424] mb-2">Shedding Phase</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">During this phase most transplanted hairs shed. This can feel confusing. You may notice the hairline looking similar to before patchy density and first new hairs starting around month 3 to 4. This is a normal growth cycle.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <span className="text-xs font-black uppercase tracking-widest text-[#772424] block mb-1">Months 5 to 8</span>
                    <h4 className="text-lg font-black text-[#772424] mb-2">Visible Density</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">This is when the transformation becomes clear. You begin to see stronger definition of the widows peak shape increased density across the frontal area and better framing of the face.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <span className="text-xs font-black uppercase tracking-widest text-[#772424] block mb-1">Months 9 to 12+</span>
                    <h4 className="text-lg font-black text-[#772424] mb-2">Final Maturation</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">The hairline reaches its refined natural look. Hair thickens and matures direction and flow settle naturally and the V shape blends with existing hair. Results appear gradually patience is part of the process.</p>
                  </div>
                </div>
              </motion.div>

              {/* SECTION: Who is a good candidate */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Who is a good candidate for a widows peak transplant?
                </h2>

                {/* IMAGE 9: Dermatoscope check */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/10.webp" alt="Doctor examining patient scalp density reserves using clinical diagnostic dermatoscope lens" className="w-full h-full object-cover object-top" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A widows peak hair transplant is a design-focused procedure. Not every hairline suits every person. The best candidates are those with the right donor capacity stable hair loss pattern and realistic design goals.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Donor density and hair characteristics</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Your donor area determines what can be achieved. Good candidates usually have adequate donor density at the back of the scalp healthy thick hair shafts that provide good coverage and hair color and texture that blend well with the scalp. Curly or darker hair often gives the appearance of higher density with fewer grafts. Protecting donor reserves is vital for long-term planning especially in younger patients.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Face shape and proportions</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Hairline design must match your facial structure. A widows peak works well for many men because it frames the forehead naturally creates a balanced masculine contour and maintains proportion with the temples. However some face shapes look better with a softer or more rounded hairline. This is why personalization is essential.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Stability of hair loss & Goals</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Timing matters. You are a better candidate if your hair loss pattern is relatively stable you are not in an aggressive shedding phase and there is enough existing hair to blend with the transplant. Younger patients may need a more conservative design to ensure the hairline looks natural as they age. Sensible planning prevents unnatural gaps later if shedding continues. Clear realistic expectations are key. It should never look copied from another person.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#772424] mb-3">Risks and limitations of a widows peak transplant</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  A widows peak can look very natural when planned correctly. Yet like any procedure it has limits. Understanding these limits helps you make better decisions and avoid disappointing results. The most common risk is poor design. A widows peak that is too sharp too low or too straight at the sides can look artificial in real life. This is why creation plans should always include slight irregularity and soft transitions. The hairline should never look drawn on; it must mimic natural randomness.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Overuse of donor grafts is another risk. The donor area is limited. Using too many grafts in one session can create problems later including donor thinning or uneven density. If donor hair is very fine achieving high density at the front can be difficult requiring a conservative design. Minor short-term side effects include temporary redness swelling and itching. Most risks are related to planning not the procedure itself.
                </p>
              </motion.div>

              {/* SECTION: How to get a natural widows peak hairline */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  How to get a natural widows peak hairline
                </h2>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A widows peak hair transplant looks natural when the design follows how hair actually grows. The shape is important. The small details matter even more.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Micro-irregularity at the front line</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Real hairlines are not perfectly straight or symmetrical. A natural V shaped hairline transplant uses tiny irregular variations along the edge including soft uneven micro points slight asymmetry between left and right sides and gradual transition from single hairs to thicker grafts. This breaks the drawn line effect and makes the result blend into existing hair. The best hairlines look unplanned even though they are carefully designed.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Correct angle and direction of hair growth</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Angle determines how the hair lays and moves. A natural transplant requires very flat angles at the front forward direction in the central point and gradual shift toward the temples. If angles are too upright the hairline looks stiff under light. Direction control makes transplanted hair behave like native hair.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Age-appropriate design & Layering</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">A natural peak should match your age now and in the future. A well-designed line sits slightly higher than a teenage hairline keeping a soft mature contour that allows for future progression. Designing too low may look good initially but unnatural later. Density should increase gradually from front to back staging single-hair grafts in row one and two-hair grafts behind creating depth and natural shadow.</p>
                  </div>
                </div>
              </motion.div>

              {/* SECTION: FAQS ACCORDION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  Widows peak hair transplant FAQs
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

              {/* SECTION: Shape your ideal hairline CTA */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-black text-[#772424] mb-4 tracking-tight">
                  Shape your ideal hairline with Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A widows peak hair transplant is about design as much as technique. The right shape can frame your face and look natural for years. The wrong one stands out in every mirror.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  At Hair Skill Clinic your hairline is planned with care experience and a calm patient-focused approach built on our core institutional philosophy. Your result depends on small details done right: a hairline that fits your face and age soft irregular front line instead of a rigid shape correct angle and direction so hair lays naturally and balanced density that blends with existing hair. Our medical leadership and clinical specialists manage the planning and design process so your hairline transplant looks refined not artificial supporting precise placement and careful follow-up.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A clear supportive process from start to finish: You are guided through each step: detailed consultation and hairline simulation graft planning that protects your donor area precise placement with FUE Sapphire FUE or DHI and follow-up support as your result grows over time. The aim is simple: A hairline that looks like it has always belonged to you.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Take the next step: If you are thinking about creating softening or reshaping your hairline: share your photos for an initial evaluation receive a personalized design plan understand your graft needs and move forward with confidence. A well-designed hairline changes how you see yourself every day. If you want your widows peak hair transplant planned and performed by an experienced doctor-led team you can request your consultation with Hair Skill Clinic today.
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
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className="px-4 py-2.5 md:hover:bg-gray-100 active:bg-gray-100 cursor-pointer text-sm flex items-center justify-between text-black transition-colors">
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
                    <input type="checkbox" id="wpPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="wpPrivacy" className="text-xs text-white/80 cursor-pointer">
                      I have read and accept the <Link href="/privacy-policy" className="text-[#C5A059] font-black md:hover:underline">Privacy Policy.</Link>
                    </label>
                  </div>

                  <button type="submit" className="w-full py-4 bg-white md:hover:bg-gray-100 text-[#772424] font-extrabold rounded-xl transition-all tracking-wider text-sm mt-2 flex items-center justify-center gap-2 shadow-lg md:hover:scale-[1.02] active:scale-95">
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