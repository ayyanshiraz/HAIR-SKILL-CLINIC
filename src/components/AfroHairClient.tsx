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

export default function AfroHairClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Afro Hair Transplant Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- 18 FAQS DATA (Verbatim from pasted text, scrubbed of safe prose & exact numeric price errors) ---
  const faqList = [
    {
      q: "Can Afro hair be transplanted successfully?",
      a: "Yes. Afro hair can be transplanted very successfully when performed by surgeons experienced with textured and tightly coiled hair types. The main difference is the curved structure of Afro hair follicles beneath the scalp which requires more precise extraction and placement. When this structure is respected patients can achieve natural-looking density strong growth and long-term results."
    },
    {
      q: "Does the curl pattern change after transplant?",
      a: "No. Your natural curl pattern does not change after a hair transplant. The transplanted follicles continue to grow with the same texture and curl structure as they had in the donor area. Early growth may appear slightly looser but the curl pattern usually becomes more defined between 12 and 18 months."
    },
    {
      q: "Is Afro hair transplant permanent?",
      a: "Yes. Afro hair transplant is considered a permanent solution because the grafts are taken from donor areas that are genetically resistant to hair loss. When the donor area is properly evaluated and the procedure is performed correctly transplanted hair can continue to grow for a lifetime."
    },
    {
      q: "Is shaving required for Afro hair transplant?",
      a: "Shaving is not always required. It depends on the technique and the size of the treatment area. Larger procedures usually require full shaving for better precision while smaller cases such as edge or hairline restoration may only need partial shaving. In selected cases no-shave options like Long FUE may also be considered after medical evaluation."
    },
    {
      q: "How long does Afro hair transplant surgery take?",
      a: "Afro hair transplant surgery usually takes 6 to 9 hours depending on the number of grafts and the complexity of the case. Because Afro follicles follow a curved path under the skin extraction requires a slower and more controlled approach to protect the grafts and support long-term growth."
    },
    {
      q: "When can I return to work after an Afro hair transplant?",
      a: "Most patients can return to work within 5 to 7 days after the procedure. Redness and scabbing usually begin to improve during the first week. However the exact recovery time may vary depending on your healing speed and the type of work you do."
    },
    {
      q: "When can I go to the gym after the procedure?",
      a: "Light activity can usually be resumed after about two weeks. More intense exercise and gym workouts should be avoided for at least 3 to 4 weeks. This helps prevent sweating friction and increased blood pressure which may affect healing and graft survival."
    },
    {
      q: "Can I wear a hat after a hair transplant?",
      a: "Yes but usually after 7 to 10 days once the grafts are more secure. It is important to wear a loose-fitting hat that does not press against the transplanted area. Your doctor should confirm the safest timing based on your healing progress."
    },
    {
      q: "When can I cut my hair after Afro hair transplant?",
      a: "Hair can usually be cut with scissors about one month after the procedure. Machine trimming should be avoided for at least 2 to 3 months to protect the newly transplanted grafts during the early growth phase."
    },
    {
      q: "When will I see results after Afro hair transplant?",
      a: "New hair growth usually starts around the third or fourth month after the procedure. Visible density often develops between months 6 and 9. Final results including full curl definition and density usually appear between 12 and 18 months."
    },
    {
      q: "Will the density look natural?",
      a: "Yes. Afro hair can create very natural-looking density when grafts are placed correctly. Because curly hair provides strong visual coverage even a moderate number of grafts can create a fuller appearance. Natural curl direction and hairline design are key factors."
    },
    {
      q: "How many days should I stay in Pakistan for a hair transplant?",
      a: "Most international patients are advised to stay in Lahore Pakistan for around 4 to 7 days. This allows time for consultation surgery early recovery and the first wash under medical supervision."
    },
    {
      q: "Can I travel alone for an Afro hair transplant in Pakistan?",
      a: "Yes. Many international patients travel alone for their Afro hair transplant in Pakistan. Comprehensive clinic packages in accessible local PKR tiers often include airport transfers hotel accommodation and a dedicated patient coordinator making the process easier and more comfortable."
    },
    {
      q: "Will people notice that I had a hair transplant?",
      a: "In the first few days there may be visible redness scabbing or swelling. These signs usually fade within two to three weeks. After healing and new growth the result becomes increasingly natural and difficult to detect."
    },
    {
      q: "Can Afro women get hair transplants?",
      a: "Yes. Afro women can benefit from hair transplant procedures especially for edges temples and thinning part lines. Many female patients seek treatment for traction alopecia caused by tight hairstyles. With proper planning natural and soft results can be achieved."
    },
    {
      q: "Is Afro hair transplant safe for darker skin?",
      a: "Yes. Afro hair transplant is safe for darker skin when performed by experienced professionals. However special care is needed to reduce risks such as hyperpigmentation or keloid scarring. Technique incision depth and spacing should be adapted to the patients skin type."
    },
    {
      q: "Can traction alopecia be permanently fixed?",
      a: "In many cases yes. Traction alopecia can be treated permanently with a hair transplant if the condition is stable and there is no active inflammation or ongoing tension on the scalp. Transplantation can help restore areas such as edges and temples."
    },
    {
      q: "What happens if I need a second procedure?",
      a: "A second procedure may be recommended depending on your desired density donor capacity and the progression of hair loss. Not every patient needs a second session but for patients who want more density or have advanced hair loss it can be planned after donor area evaluation."
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
            <span className="text-[#772424]">Afro Hair Transplant</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Afro Hair Transplant
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & 5 MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* IMAGE 1: Flagship Hero Visual (Man flexing bicep in plaid shirt) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/treatments/afro-hero.jpg" 
                  alt="Confident smiling African American gentleman flexing bicep after successful Afro Hair Transplant restoration" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-top" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  V.G., 42 Years Old, 4100 Grafts © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If you have been searching for a clinic that truly understands the needs of tightly coiled hair this page gives you the clarity you have been missing. A bold afro hair transplant Pakistan experience depends on surgeons who respect curl biology donor limits and natural hairline shapes. Not every clinic can do that. Hair Skill focuses on difficult cases complex textures and patients who were previously told their curls were too challenging.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  An afro hair transplant in Pakistan can rebuild confidence when thinning edges traction damage or genetic loss affect your daily life. Our team approaches every case with careful planning. No templates. No assumptions. Just a deep focus on curl direction density and long term health.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If you want a natural result that honors your texture this guide explains how we work what the process looks like and why Hair Skill is trusted by men and women from the US UK Africa and the Caribbean looking for a reliable ethnic hair transplant Pakistan option.
                </p>

                <h2 className="text-3xl font-black text-[#772424] mt-4 tracking-tight">
                  Afro Hair Transplant in Pakistan at Hair Skill Clinic
                </h2>
                <h3 className="text-xl font-extrabold text-[#772424]">
                  Designed for Your Texture. Led by Real Surgeons.
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If you have been searching for a safe and skilled place to restore tightly coiled hair you are in the right spot. Afro hair needs surgeons who understand its curve density and rhythm. Not every clinic does. Hair Skill Clinic focuses on restoring texture with care intention and doctor led precision.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Your curls deserve more than a standard approach. They deserve a team trained to work with every bend and every coil.
                </p>
              </motion.div>

              {/* Section: Why Afro Hair Needs Specialist Expertise */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Afro Hair Needs Specialist Transplant Expertise
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  Understanding curly follicle structure is the foundation of a successful afro hair transplant Lahore journey. Afro hair grows in a curved corkscrew pathway beneath the skin. The follicle has an elliptical cross section. The root follows a subcutaneous curve. These features give Afro hair its strength and identity but they also increase the risk of transection if the clinic uses standard tools or straight extraction angles.
                </p>

                {/* IMAGE 2: Scalp marked with blue mapping pen */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/treatments/afro-follicle-reading.jpg" alt="Macro view of patient scalp marked with surgical blue pen defining temporal and frontal curl boundaries" className="w-full h-full object-cover object-top" />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Why afro hair transplant is different</h3>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">Afro follicles bend under the skin. That bend must be respected. If a straight punch is used the root may be cut before extraction. This creates lower growth rates and patchy results. At Hair Skill extraction follows the natural rotation of each follicle using punch sizes chosen after a detailed scalp reading.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Tools made for curls</h3>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">Hair Skill uses manual FUE for afro hair for many cases. This offers tight control over angle pressure and depth. Some cases combine micromotor extraction with curved punches. For hairline work our surgeons often prefer DHI with the Choi Pen because implantation angle control protects the curl pattern.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Preserving curl direction</h3>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">Your final look depends on correct placement. Implanting curls without respecting their natural rotation leads to awkward texture or unnatural lift. Our surgeons place every graft with attention to curl orientation so your density matures smoothly over the months.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our clinical specialists emphasize: Afro follicles require patience. They deserve surgeons who respect their rhythm. Rushing is not an option.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Why Choose Afro Hair Transplant at Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Choose Afro Hair Transplant in Pakistan at Hair Skill Clinic
                </h2>

                {/* IMAGE 3: Before / After comparison of gentleman in yellow shirt */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/treatments/afro-comparison-yellow.jpg" alt="Side by side comparison of Afro patient in yellow shirt showing native frontal thinning versus restored dense mature hairline" className="w-full h-full object-cover object-top" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Many patients first search afro hair transplant Pakistan because they hear that results are strong and prices are more manageable. The truth is a bit deeper. Why afro hair transplant in Pakistan has a simple answer: Volume and focus. Clinics here treat thousands of curly and coiled cases each year which sharpens technique and understanding of different textures.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  Lahore in particular attracts people looking for afro hair transplant Lahore afro american hair transplant Pakistan and afro caribbean hair transplant in Pakistan. The city has a mature ecosystem. Hotels that know post op needs. Drivers used to medical visitors. Coordinators who support patients flying in from the US UK Europe and Africa. That environment keeps things smoother from airport to follow up.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Cost advantage: Pakistan vs US and UK in PKR tiers</h3>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">Another reality matters. Afro hair transplant Pakistan cost is usually significantly lower than in Western countries. When you compare afro hair transplant investment ranges in Pakistan vs USA UK or Europe the gap can be dramatic. Many medical guides highlight that a Pakistan afro hair transplant is 60 to 70 percent more affordable in local PKR tiers than the US even when booking elite high quality clinics. You are not paying less for less care. You benefit from lower regional operating costs and a highly competitive local market.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Why Hair Skill stands out</h3>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">Hair Skill is not just another stop on the afro hair transplant medical tourism circuit. Our focus sits at the intersection of medical detail and design for textured hair. Patients often describe Hair Skill as the best afro hair transplant clinic in Pakistan for them because surgeons lead every step not technicians curl pattern and hairline shape are planned together and the donor area is protected for possible future needs.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical leadership frequently tells new patients: Pakistan gives you accessible options. Your job is to choose a medical team that respects your texture as much as you do.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#772424] mb-4">Key Benefits</h3>
                <div className="space-y-3 mb-6 ml-2">
                  {[
                    "Curl preserving extraction",
                    "Hairline design tailored to Afro patterns",
                    "Safe approach for darker skin",
                    "No over harvesting or aggressive graft targets",
                    "Repairs for traction alopecia and relaxer damage",
                    "Predictable density over the 12 to 18 month timeline",
                    "Dedicated coordinators guiding every step"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-[#772424] font-black text-lg">•</span>
                      <p className="text-black text-base md:text-lg font-bold">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  Your hair grows back with confidence not guesswork.
                </p>
              </motion.div>

              {/* Section: Who Is a Good Candidate */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Who Is a Good Candidate for Afro Hair Transplant?
                </h2>

                {/* IMAGE 4: Comparison of man looking slightly down */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/treatments/afro-candidate-flow.jpg" alt="Frontal downward view comparing thinned native Afro hairline profile against dense restored mature results" className="w-full h-full object-cover object-top" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A successful afro hair transplant in Pakistan begins with understanding whether your scalp donor area and hair pattern align with what textured procedures require. Afro follicles are strong but donor supply varies. Some patients come with traction alopecia. Some show genetic thinning. Others have breakage from relaxers or repeated protective styles. Every pattern needs a different plan.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Can afro hair be transplanted?</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Yes. Afro hair can be transplanted with excellent results when handled by surgeons experienced in curly follicle anatomy. The key is matching the technique to your texture. Patients with tightly coiled follicles often benefit from manual extraction and carefully controlled implantation angles.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Common situations where transplant works well</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Most people seeking hair transplant for black men afro hair transplant for women or afro hair transplant for black women fall into one of these categories:</p>
                    <div className="space-y-2 ml-2">
                      {[
                        "genetic thinning at the front or crown",
                        "traction alopecia from braids weaves or tight buns",
                        "thinning edges or temple loss",
                        "scars from accidents or previous surgery",
                        "thinning after chemical relaxer damage"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">When we pause or decline</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Certain conditions require caution. Active scarring alopecias can worsen after transplant. A history of severe keloid formation increases risk. Very low donor density may limit what we can safely achieve. In those cases our doctors provide alternatives or phased plans.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Difference between afro hair transplant and normal hair transplant</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">The main difference is the follicle shape. Straight hair grows in a predictable path. Afro follicles follow a corkscrew path beneath the skin. This means extraction and placement must follow that curve. Transplanting afro hair with straight hair habits leads to poor growth.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our surgical leadership notes: Each curl holds its own character. The goal is not just to replace hair. The goal is to restore identity.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Techniques at Hair Skill */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Techniques at Hair Skill for Afro Hair Types: FUE, DHI, and Curl-Safe Methods
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A natural looking result for afro hair transplant Pakistan depends on choosing the right extraction and implantation method. Not every technique suits every curl pattern. Hair Skill selects the method based on your donor density curl tightness scalp thickness and the design you want. The goal is simple: Protect curl integrity while building strong density.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">FUE afro hair transplant in Pakistan & Custom tools</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">FUE remains the most common method for textured hair. But the way it is performed matters. For Afro follicles extraction often requires slower work with manual FUE for afro hair or controlled micromotor settings. Surgeons follow the curve of each root not a straight line. This reduces the higher transection risk in afro follicles caused by their subcutaneous curve.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Hair Skill uses punch systems designed for curl-safe extraction. Curved punches and angle adapted tips help capture the entire follicle. This is important because unique hair texture and curly roots require careful handling. Some cases benefit from special punches for curly follicles transection reduction strategies and precise depth control.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">DHI afro hair transplant in Pakistan</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">DHI shines in areas that demand detail like temples edges and refined Afro hairlines. The Choi Pen gives smoother angle control which helps preserving curl pattern and orientation during implantation. DHI can deliver tight controlled spacing when designing female edges or rebuilding traction alopecia.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">FUT vs FUE & FUE vs DHI comparisons</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Most Afro patients do not choose FUT because linear scars stand out on shorter hairstyles. FUE and DHI give greater flexibility for fades tapers and low cuts. FUE suits larger cases where coverage matters. DHI suits small areas that need precision. Hair Skill sometimes combines both for balanced results.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our clinical experts state: Technique is never chosen by habit. It is chosen by your curl. The method must match the root.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Procedure Step by Step */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Afro Hair Transplant Procedure Step by Step
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A clear process helps you feel calm and prepared before your afro hair transplant in Pakistan. At Hair Skill each stage is predictable and guided by your surgeon. No rushed handoffs. No guessing who will handle your grafts. You always know what is happening and why.
                </p>

                <div className="space-y-6 border-l-2 border-[#772424]/20 pl-6 ml-2 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Before your surgery day</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Everything starts with a simple online consultation. You send your photos from different angles. The doctor evaluates donor density curl tension and any traction patterns. We discuss your goals possible limitations and how many days your trip should be. You receive a personalized plan and a transparent cost estimate in accessible PKR tiers based on graft count and technique.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">On the surgery day</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Your day begins with a relaxed consultation. Your doctor designs your hairline with attention to Afro geometry and temple flow. After numbing the scalp extraction begins. This phase takes time because we follow the subcutaneous curve of afro follicles to prevent transection. Breaks are provided when needed. Implantation comes next. For most Afro cases we use a mix of FUE and DHI. This improves control over angles and helps maintain your curl direction. Each graft is positioned to match your natural corkscrew path.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Trip duration & Sedation protocol</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Most international patients stay between 3 and 5 days: Day 1 arrival Day 2 surgery Day 3 first wash Day 4 to 5 follow up. Local anesthesia is typically enough. Some patients prefer light sedation for relaxation. Your medical team will guide you depending on your comfort.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-5 rounded-2xl border-l-4 border-[#772424]">
                      Our supervising surgeons note: Extraction is the heart of Afro cases. We move patiently. That is how we protect the curl and the character of your hair.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Afro Hair Transplant Pakistan Cost Ranges (PURE PKR TIERS / NO NUMERIC PRICES) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Afro Hair Transplant Pakistan Cost Ranges at Hair Skill
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People often begin their research with one central question: How much does an afro hair transplant cost in Pakistan? Pricing shapes your travel plan expectations and timeline. Hair Skill believes in complete transparency. No inflated figures. No sudden add ons. Your quote is structured strictly around your hair loss pattern curl structure and graft needs.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Typical afro hair transplant cost tiers in PKR</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      Rather than listing rigid volatile prices most Afro patients fall within highly accessible local PKR package tiers depending on technique choice and complexity. This aligns perfectly with standard restorative averages across accredited clinics in Lahore. Specialized repair cases widespread traction alopecia patterns or sessions requiring intense micro density sit inside corresponding adjusted PKR investment brackets.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">What affects your price calculation</h3>
                    <p className="text-black font-medium text-base leading-relaxed mb-3">Your final tier calculation depends on core clinical variables including graft count technique choice FUE DHI or combined density goals scalp thickness traction alopecia corrections surgeon time required and previous surgery repair if needed.</p>
                    <p className="text-black font-bold text-base leading-relaxed border-t border-gray-200/80 pt-3">
                      Comparing investment ranges globally demonstrates an immense economic reality: Rebuilding textured hair in Pakistan sits within highly accessible PKR package tiers offering 60 to 70 percent relative savings compared to capital-intensive upper tier ranges in the USA or UK even when booking elite accredited facilities.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">All inclusive afro hair transplant package Pakistan</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      Hair Skill offers complete travel friendly options. Many international visitors prefer comprehensive packages in PKR covering hotel stays and private transfers because they eliminate travel stress. These all-inclusive packages seamlessly supply your airport pickup and drop off luxury hotel stay surgical procedure cellular post op medications first clinical wash and dedicated patient coordination.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Recovery Shedding and 12-18 Month Results */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Recovery, Shedding, and 12 to 18 Month Results for Afro Hair
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Recovery after an afro hair transplant in Pakistan follows the same stages as other hair types but the visual changes feel different because curls take longer to show their full character. Afro hair grows in a coil not a straight line. This means the first few months may look uneven before your density settles. That is entirely normal. Your new texture needs time to reveal itself.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">Recovery Timeline</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Most patients feel comfortable moving around the city the next day. Mild swelling can appear on day two or three. Scabs fall off within 7 to 10 days. Tenderness fades gradually. Many return to work within a week depending on their job.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">Healing Staging</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Healing happens in layers. The skin closes first. Then the follicles settle. After that growth begins at its own natural pace. Afro follicles are resilient but they need steady care. Hydration gentle washing and avoiding pressure protect early growth.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">Week by Week Milestones</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Weeks 1 to 2 scabs shed. Weeks 3 to 6 expected shedding phase. Months 3 to 5 early sprouts appear. Months 6 to 9 meaningful density grows. Months 12 to 18 final corkscrew curl pattern completely matures.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <h4 className="text-lg font-black text-[#772424] mb-2">Mature Results</h4>
                    <p className="text-black font-medium text-sm md:text-base leading-relaxed">Most patients see visible improvement around month four. Real density appears between months six and nine. Full results take up to eighteen months. By month twelve most curls are defined. At eighteen months final shape is absolute.</p>
                  </div>
                </div>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our lead surgical specialists note: Afro growth is steady. It does not rush. When the curls show they show beautifully.
                </p>
              </motion.div>

              {/* Section: Risks Side Effects and Darker Skin Protection */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Risks, Side Effects, and How Hair Skill Protects Darker Skin
                </h2>

                {/* IMAGE 5: Dermatoscope inspection on hairline/edges */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/treatments/afro-edges-planning.jpg" alt="Clinical examination of African American female hairline and edges using diagnostic dermatoscope lens" className="w-full h-full object-cover object-top" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Every procedure carries some degree of risk. What matters is how those risks are managed. For an afro hair transplant in Pakistan the key challenges include the curved path of the follicles the potential for hyperpigmentation in darker skin and the possibility of scarring when the skin is sensitive. At Hair Skill your plan is shaped around these realities not against them. We do not ignore them. We prepare for them.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Follicular viability & Surgical safety</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Do hair transplants work on afro hair? Yes. They work extremely well when curl anatomy is respected. Growth rates are strong when extraction follows the natural curve and implantation angles match your original direction. Safety depends entirely on technique and surgeon involvement. Afro hair should never be extracted with speed based methods that ignore curl direction. At Hair Skill qualified surgeons oversee every step which lowers complications and transection risk significantly.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Short term reactions & Darker skin protection</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Potential short term effects include redness tightness mild swelling itching and temporary pimples during growth. These usually settle within days or weeks.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">People with darker skin tones may experience temporary hyperpigmentation if post op care is not followed. Rarely some sensitive tissue may have a risk of hypertrophic or keloid scarring. This is why we always audit your personal history with wounds and healing adjusting incision depths and spacing to safeguard your skin.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Success rate & Touch up policy</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Patients treated inside experienced clinical settings show exceptionally high success rates governed entirely by healthy graft survival. If a minor touch up is ever needed due to an unexpected tissue healing response your supervising doctor will guide you on timing and options transparently.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical directors frequently remind patients: A good result is not luck. It is careful technique meeting careful healing.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Afro Hairline Design Edges & Density */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Afro Hairline Design, Edges, and Density Planning
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Design matters as much as technique. A successful afro hair transplant Pakistan result depends on a hairline that matches your features your age and the natural behavior of Afro curls. Straight lines look artificial. Heavy density in the wrong zones creates a blocky look. The goal is absolute harmony. A result that feels honest when you look in the mirror.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Afro hairline vs European hairline</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Afro hairlines sit differently. They follow softer arcs and natural irregularity. Temple peaks are shaped with subtle curves rather than sharp angles. Many patients who had poor work done elsewhere complain that their old hairline looked too straight or too dense. Hair Skill rebuilds these lines using authentic natural Afro patterns not generic templates.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Temple peaks edges and density layering</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Traction alopecia often affects the edges and temples. These areas need detailed micro work. Using DHI pens helps control angle and flow. For women this means softer natural density around the face. For men temple peaks are rebuilt with texture and direction that match your original genetic pattern.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Afro hair gives strong coverage even with moderate density because curls expand creating fuller volume at lower graft counts. Singles go at the front while doubles and triples sit behind them creating seamless depth.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Traction repair & Case verification</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Cases caused by tight braids or weaves require specialized planning. The underlying tissue may be thinner or sensitive requiring conservative extraction and precise implantation depths. Documented before and after cases show what truly matters: curl direction natural edges and matching density.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our design specialists state: A good Afro hairline is built with respect. We follow your original genetic rhythm not trends.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Combined Procedures */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Combined Procedures for Afro Hair, Beard, Edges, and Eyebrows
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Many international visitors choose to address multiple areas during one comprehensive visit to Lahore. This can be highly efficient when planned correctly. At Hair Skill combined procedures are designed strictly with donor safety in mind. Afro textures offer excellent coverage but donor reserves must be preserved for your lifelong needs.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Beard edges eyebrows and moustaches</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Some men combine a scalp restoration with a beard enhancement session. Textured beard hair provides phenomenal blending when used as donor or recipient. Repairing traction edges pairs perfectly with frontal hairline lowering via DHI control. For patients requesting eyebrow refinement we implant strictly single units placed at acute skin-flat elevations. Upper lip moustache filling is similarly calibrated for absolute facial balance.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">When splitting procedures is medically safer</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Some clinical scenarios require spacing sessions across two visits to protect donor health. This happens when:</p>
                    <div className="space-y-1 ml-2 mb-4">
                      {["traction patterns are severe", "donor density is limited", "the patient wants future options", "scalp sensitivity requires slower healing"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-5 rounded-2xl border-l-4 border-[#772424]">
                      Our operating surgeons note: Combined sessions can be powerful but only when the donor vault allows it. Your future matters as much as todays result.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Planning Your Trip to Lahore Pakistan */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Planning Your Afro Hair Transplant Trip to Lahore Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Your medical trip should feel completely peaceful from the moment your flight lands. Planning an afro hair transplant in Pakistan is wonderfully simple when your clinical coordination team manages the logistical touchpoints. Hair Skill assists men and women traveling from the US UK Africa and the Caribbean every single day.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Trip duration & Concierge coordination</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Most international guests stay 4 to 7 days in Lahore allowing unhurried time for consultation surgery early recovery and your official first wash. You are never left guessing where to go; your personal concierge coordinator silently arranges your airport transfers hotel reservations native translations clinic scheduling aftercare instructions and digital follow up support.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Pack simple items including loose button-front shirts a travel neck pillow and loose clothing. Strictly avoid caps or tight headwear for week one. Once localized swelling recedes patients love enjoying gentle evening walks through Lahores beautiful patient-friendly districts.</p>
                  </div>
                </div>
              </motion.div>

              {/* SECTION: 18 FAQS ACCORDION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  Afro Hair Transplant Pakistan FAQs
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

              {/* Section: Start Your Plan CTA */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-black text-[#772424] mb-4 tracking-tight">
                  Start Your Afro Hair Transplant Plan With Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  If you have been waiting for the right moment to take control of your hair again this is your exact place to begin. An afro hair transplant Pakistan journey feels fundamentally different when qualified surgeons lead the process your native curl pattern is profoundly respected and every clinical step is shaped around your personal comfort. You deserve a dense result that looks natural from every angle. You deserve a medical institution that listens.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  At Hair Skill your experience is deeply personal. You sit down with your operating doctor. You examine your custom design. You understand your exact surgical blueprint before a single tool touches your skin. Zero sales pressure. Zero rushed choices. Just straightforward honest medical guidance grounded in years of elite specialization across Afro curls coils waves and every textured profile in between.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-4">What you get when you choose Hair Skill Clinic</h3>
                <div className="space-y-3 mb-8 ml-2">
                  {[
                    "Surgeon led planning and execution for your complete procedure",
                    "Curl-safe punch extraction and Choi pen implantation",
                    "Realistic sustainable graft targets based on long term donor health",
                    "A customized architectural design for your hairline edges or temples",
                    "A calm sterile cleanroom environment with full localized support",
                    "Complete luxury packages in accessible PKR tiers covering hotel and private transfers",
                    "12 full months of dedicated medical follow up to track your emerging density"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black text-lg">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>

                <h3 className="text-2xl font-black text-[#772424] mb-3">Get Your Free Afro Hair Assessment Today</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Your permanent transformation starts with a single simple step. Send our clinical team your scalp photos. Our lead restorative surgeons will carefully audit your curl pattern and supply your transparent personalized package quote in PKR. Move forward toward an authentic confident future today.
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
                    <input type="checkbox" id="afroPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="afroPrivacy" className="text-xs text-white/80 cursor-pointer">
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