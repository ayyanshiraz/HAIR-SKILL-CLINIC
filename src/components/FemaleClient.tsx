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

export default function FemaleClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Female Hair Transplant Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- 10 FAQS DATA (Verbatim from pasted text, scrubbed of safe prose & numeric price errors) ---
  const faqList = [
    {
      q: "Can women get a hair transplant?",
      a: "Yes. A female hair transplant works well when hair loss follows a predictable pattern the donor area is strong and the underlying cause is stable. Women with localized thinning often see excellent improvement."
    },
    {
      q: "Is female hair loss different from male hair loss?",
      a: "Yes. Women usually experience diffuse thinning along the top and part line instead of recession at the temples. Diagnosis is essential because many women have hormonal or nutritional causes that must be corrected before surgery."
    },
    {
      q: "How much does a female hair transplant cost in Pakistan?",
      a: "Most women invest inside accessible local package brackets in PKR depending on technique choice FUE or DHI graft count and specific part line design needs. The final tier planning reflects your custom density layout upfront."
    },
    {
      q: "Is the procedure painful?",
      a: "Local anesthesia keeps the procedure comfortable. You may feel slight pressure during extraction and implantation but pain is minimal."
    },
    {
      q: "Do women need to shave their hair for transplant?",
      a: "Usually no. Most women undergo partial shave or unshaven hair transplant women techniques where only a hidden donor strip is shaved underneath long hair. The rest of your hair remains untouched."
    },
    {
      q: "When will I see results?",
      a: "Early growth begins around month 3 to 4. Noticeable fullness appears by month 6 to 9. Final results arrive at month 12 to 14."
    },
    {
      q: "Will I need medical treatment after the transplant?",
      a: "Often yes. Treatments like minoxidil PRP iron supplementation or hormonal balancing support long term density and protect native hair."
    },
    {
      q: "Can female hair transplant fix diffuse thinning?",
      a: "Only if the thinning follows a stable pattern. Diffuse unpatterned alopecia or active shedding does not respond well to surgery and requires medical management instead."
    },
    {
      q: "Can women lower their hairline with transplant?",
      a: "Yes. Hairline lowering through transplant works well when donor density is strong and the desired shape is feminine and soft."
    },
    {
      q: "Are results permanent?",
      a: "Transplanted follicles are permanent but surrounding hair may continue thinning without medical support. That is why combined treatment is encouraged."
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
            <span className="text-[#772424]">Female Hair Transplant</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Female Hair Transplant
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & 4 MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* IMAGE 1: Flagship Hero Visual (Capture image_182f23.jpg: Woman inspecting hairline inside mirror) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/treatments/female-hero.jpg" 
                  alt="Female patient examining pre surgical hairline markings inside mirror at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-top" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Female Restoration Analysis, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Losing hair as a woman feels different. It is not just about coverage. It is about how you see yourself in photos how confidently you style your hair how much you avoid mirrors on difficult days. That is why a female hair transplant Pakistan journey needs a different approach than a standard male transplant.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At Hair Skill Clinic a female hair transplant in Pakistan is always built on diagnosis first surgery second. Many women arrive believing transplant is the only option. Sometimes it is. Sometimes medical treatment or a mix of both is the smarter path. Our job is to help you figure that out calmly step by step.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  In simple terms hair transplant for women in Pakistan means taking permanent follicles from the stronger donor area at the back of the scalp and moving them to thinning zones such as the part line temples or frontal hairline. The goal is not just more hair. The goal is a softer fuller frame that still looks like you.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  A female hair transplant is a FUE or DHI procedure where grafts from the permanent donor area are implanted into thinning areas like the part line temples or crown. It is suitable when female pattern hair loss is stable and there is enough donor density in the back of the scalp.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Hair Skill treats every hair transplant Pakistan women case as a partnership. You bring your story your worries and your goals. We bring honest assessment careful design and techniques adapted to female patterns instead of forcing you into a male style plan.
                </p>
              </motion.div>

              {/* Section: Is Female Hair Transplant Right for You */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Is Female Hair Transplant in Pakistan Right for You?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A female hair transplant Pakistan procedure works best for women with defined thinning areas that have stable predictable patterns. If your part line keeps widening or the temples look lighter or there is a small but noticeable drop in density at the front a transplant can rebuild those zones with natural harmony. The goal is subtle fullness. Not a dramatic makeover. Just a softer frame that lifts your entire look.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Ideal candidates</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Women who usually benefit include:</p>
                    <div className="space-y-2 ml-2 mb-4">
                      {[
                        "those with female pattern hair loss following Ludwig I or II",
                        "women with stable androgenetic alopecia",
                        "patients with traction alopecia from hairstyles pulling over time",
                        "women with thinning around temples or frontal points",
                        "those seeking hairline lowering or refinement",
                        "patients with localized thinning not full scalp loss"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      You are also a good candidate when medical issues are stable: thyroid levels corrected iron or ferritin brought to healthy levels PCOS under control and active shedding slowed or stopped.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Who is not suitable</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Some conditions do not respond well to surgery including:</p>
                    <div className="space-y-2 ml-2 mb-4">
                      {[
                        "diffuse unpatterned alopecia",
                        "active autoimmune alopecia",
                        "uncontrolled hormonal disorders",
                        "severe donor area weakness",
                        "active telogen effluvium or postpartum shedding"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                      Hair Skill will tell you honestly if surgery is not right now. You will not be pushed toward a transplant you do not need or cannot benefit from.
                    </p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our lead surgical specialists often remind patients: When the loss is stable and the donor is healthy results look incredibly natural. But identifying that stability must come first.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Why Choose Female Hair Transplant at Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Choose Female Hair Transplant in Pakistan at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Pakistan has become one of the most trusted destinations for women seeking natural subtle hair restoration. The country combines experienced surgeons modern techniques patient friendly pricing and a warm organized treatment experience. For many women a female hair transplant Pakistan journey offers the right balance of quality comfort and safety.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Why Pakistan Is a Top Choice for Women</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Women from around the world travel to Lahore each year for female hair restoration. The reasons are simple:</p>
                    <div className="space-y-2 ml-2 mb-4">
                      {[
                        "surgeons with high experience treating female patterns",
                        "clinics that understand unshaven and partial shave needs",
                        "refined techniques suited for delicate density work",
                        "affordable treatment compared to UK USA and Europe",
                        "streamlined care packages that reduce stress during planning"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                      Most importantly clinics here treat female hair loss as its own specialty not an extension of male transplant protocols.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Why Hair Skill Clinic Stands Out</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Hair Skill has become a preferred clinic for women because the approach is gentle personalized and honest. You are evaluated thoroughly before surgery is recommended and your design is built around your unique features. At Hair Skill you receive:</p>
                    <div className="space-y-2 ml-2 mb-6">
                      {[
                        "surgeon led planning from start to finish",
                        "natural looking hairline and part line design",
                        "partial shave or unshaven methods for discretion",
                        "FUE or DHI hair transplant for women chosen based on your goals",
                        "careful donor management to protect long term density",
                        "a calm environment focused on comfort and education"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">A Clinic That Listens</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Many women say what matters most is simply being heard. Hair Skills doctors spend real time understanding how thinning affects your confidence styling habits and daily comfort. There is no rush. No pressure. Just clear guidance shaped around what works best for you.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our attending doctors often share: A womans hairline and density story is personal. We tailor everything to protect softness balance and identity.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: About Female Hair Loss Patterns and Proper Diagnosis */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  About Female Hair Loss Patterns and Proper Diagnosis
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Hair loss in women almost always needs a closer look before deciding on surgery. A female hair transplant Pakistan plan only makes sense when the cause of thinning is truly permanent. Many women experience shedding from hormones stress childbirth thyroid shifts nutrition gaps or tight hairstyles. Those situations often improve with treatment rather than surgery. That is why diagnosis comes first at Hair Skill.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Common patterns in women</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Female thinning looks different from male recession. It usually appears as:</p>
                    <div className="space-y-2 ml-2 mb-4">
                      {[
                        "widening part line through the center",
                        "general thinning on the top third of the scalp",
                        "reduced volume at the crown",
                        "weaker temple points",
                        "high or uneven hairline",
                        "traction alopecia from long term styling tension"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium">Clinics use the Ludwig scale to describe severity from I to III but real assessment depends on trichoscopy and donor analysis.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Causes worth investigating</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Female hair loss has many possible triggers. Understanding them changes the plan. Key contributors include:</p>
                    <div className="space-y-2 ml-2 mb-4">
                      {[
                        "androgenetic alopecia",
                        "PCOS or hormonal imbalance",
                        "thyroid dysfunction",
                        "low iron or ferritin below optimal levels",
                        "stress related shedding",
                        "postpartum period",
                        "nutritional issues",
                        "medication effects"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Blood tests and scalp evaluation help separate temporary shedding from long term loss. This protects women from undergoing a transplant too early or when medical treatment would be more helpful.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Why this step matters</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">When thinning is active transplant results weaken over time. When the cause is temporary surgery offers little benefit. When the pattern is stable though a female hair transplant in Pakistan can deliver truly elegant improvement.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our clinical leadership puts it simply: Female hair loss is rarely one reason. Once we clarify the story behind the thinning we design a solution that actually fits.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Techniques and Methods for Female Hair Transplant */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Techniques and Methods for Female Hair Transplant
                </h2>

                {/* IMAGE 2: Macro Scalp Grafts Close Up (Capture image_182f43.jpg: K.C., 27, 2400 Grafts close up) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/treatments/kc-female-grafts.jpg" alt="Macro close up view of delicate female part line follicular units K.C., 27 years old, 2400 grafts" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Once diagnosis confirms stability the next step is choosing the right method. A female hair transplant Pakistan procedure is not a copy of a male surgery. Women often prefer to keep their existing hairstyle avoid a full shave and focus on restoring density rather than creating a dramatic new pattern. Hair Skill adapts the technique to those needs.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">FUE for Women</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Female FUE hair transplant Pakistan is the most common approach. Individual follicles are extracted from the donor area at the back of the scalp usually through a partial shave hidden underneath long hair. This gives surgeons access while keeping the rest of the hairstyle intact.</p>
                    <p className="text-black text-base md:text-lg font-medium mb-2">FUE works well for:</p>
                    <div className="space-y-1 ml-2">
                      {["part line strengthening", "temple point reconstruction", "small to medium thinning zones", "balanced density improvement"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">DHI for Women</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">DHI hair transplant for women uses the Choi pen to implant grafts without creating channels. This allows implantation at high density and with precise angulation. Women often prefer this method for its accuracy in delicate zones especially when treating narrow part lines or a fine feminine hairline.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Unshaven or Partial Shave Options</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Many women ask for unshaven hair transplant women procedures. Hair Skill uses partial shave techniques where only a small section of the donor area is trimmed hidden beneath longer hair. The recipient area is not shaved making the process discreet.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Hairline and Temple Design</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Female hairlines differ from male hairlines. They are softer lower and have gentle curvature. Temple points must be refined not squared. Hair Skill focuses on rounded feminine transitions avoiding male style angles and reinforcing natural flow instead of forcing symmetry.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our design specialists mention: Women want density without disturbance. Every angle every graft every section must be gentle and intentional.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Candidacy and Limitations */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Candidacy and Limitations for Female Hair Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A strong female hair transplant Pakistan plan begins with understanding who will truly benefit. Women often assume any thinning can be corrected surgically but female hair loss is more complex. Some patterns respond beautifully to transplant. Others require medical stabilization first. At Hair Skill the goal is to guide you honestly so your expectations match what surgery can deliver.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Who is a good candidate?</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Women who benefit most share common traits:</p>
                    <div className="space-y-2 ml-2 mb-4">
                      {[
                        "thinning that follows female pattern hair loss",
                        "stable progression for at least 6 to 12 months",
                        "strong donor density at the back of the scalp",
                        "widening part line or thinning around temples",
                        "early to moderate loss on the Ludwig I or II scale",
                        "clear areas that need refinement rather than full coverage",
                        "healthy hormonal thyroid and iron levels"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">You may also be a good candidate if you seek hairline lowering for aesthetic balance temple restoration to regain facial framing or density improvement after years of traction hairstyles.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Who is not suitable?</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">A transplant cannot fix every situation. Surgery is not recommended for:</p>
                    <div className="space-y-2 ml-2 mb-4">
                      {[
                        "diffuse unpatterned alopecia",
                        "active autoimmune alopecia",
                        "uncontrolled PCOS or thyroid disorders",
                        "persistent telogen effluvium",
                        "postpartum shedding still ongoing",
                        "extremely weak donor areas",
                        "severe scarring alopecia without stability"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">These cases require medical treatment first. Sometimes surgery can help later but only once stability is achieved.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Clear expectations matter</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">A female transplant increases density but it cannot rebuild the thickness of teenage hair. When done well it creates a natural fuller frame that lifts confidence without looking artificial.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our attending physicians often say: Women need honesty not pressure. When the donor is strong and loss is stable the improvement feels life changing. When it is not the right time we say so clearly.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Female Hair Transplant Cost Ranges in Pakistan (PURE PKR TIERS / ZERO LOGISTICS) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Female Hair Transplant Cost Ranges in Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  For many women affordability is one of the biggest reasons to consider a female hair transplant Pakistan journey. Pakistan offers advanced surgical quality inside accessible local package tiers. But price alone is not the value. What matters is surgeon involvement design quality and how naturally the result blends with your feminine hairline.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Typical Cost Brackets in PKR</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      Across trusted healthcare comparisons the investment brackets in PKR comfortably cover most female FUE or DHI cases with specialized options for complex part line designs. Hair Skill Clinic typically offers accessible package brackets in local PKR tiers depending on graft count needed technique FUE or DHI hair transplant for women whether partial shave or unshaven methods are used and the complexity of hairline or part line reconstruction. These local rates remain far below international premium calculations where granular per-graft billing makes structural restorations heavily capital intensive.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Comprehensive Care Packages</h3>
                    <p className="text-black font-medium text-base leading-relaxed mb-3">Most international patients choose a comprehensive clinical package that includes surgeon consultation and personalized design procedure with FUE or DHI partial shave techniques for discreet surgery aftercare kit and native concierge assistance during your clinical visits. No surprises. No confusion. Just a clear path forward.</p>
                    <p className="text-black font-bold text-base leading-relaxed border-t border-gray-200/80 pt-3">
                      Our financial counselors share: Cost matters but design decides everything. A smaller well crafted procedure often beats a larger one done without intention.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Procedure Recovery and What to Expect Step by Step */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Procedure, Recovery, and What to Expect Step by Step
                </h2>

                {/* IMAGE 3: Pen Marking on Hairline (Capture image_182f61.jpg: K.K., 37, 3200 Grafts pen marking) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/treatments/kk-hairline-marking.jpg" alt="Surgeon drawing delicate lowered feminine hairline contour on patient K.K., 37 years old" className="w-full h-full object-cover object-top" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A female hair transplant Pakistan procedure at Hair Skill is designed to feel calm predictable and respectful of your existing hairstyle. Women often worry about shaving downtime or whether the result will look obvious. A clear step by step structure removes that anxiety and helps you envision exactly how the journey unfolds.
                </p>

                <div className="space-y-6 border-l-2 border-[#772424]/20 pl-6 ml-2 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 1: Consultation and Diagnosis</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Your visit begins with a detailed medical review and donor evaluation. Trichoscopy checks miniaturization levels. We confirm stability and rule out temporary shedding. Then we design your hairline part line or temple points with gentle curvature that matches a feminine aesthetic.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 2: Donor Planning and Partial Shave</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">For most women only a thin strip in the donor area is trimmed. Longer hair above and below hides it. The rest of your hair remains unshaven keeping your appearance unchanged after surgery. This discreet approach is why unshaven hair transplant women procedures are so popular.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 3: FUE or DHI Extraction and Implantation</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">The surgeon selects either FUE or DHI hair transplant for women depending on your goals. FUE allows efficient extraction for medium areas. DHI offers high precision for narrow zones like the part line. Grafts are placed with exact angulation so they blend with your natural direction and density.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 4: Recovery Timeline</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Healing is smoother for women than many expect. What to anticipate: day 1 to 3 mild swelling or tightness day 4 to 7 scabs begin softening day 5 to 7 many women return to work week 3 to 6 shedding phase month 3 to 4 early growth month 6 to 9 visible thickening month 12 to 14 full result.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 5: Aftercare and Styling</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Women receive specific guidance for washing gentle styling and avoiding tension hairstyles during the early healing window.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-5 rounded-2xl border-l-4 border-[#772424]">
                      Our clinical specialists explain: For women implantation must respect softness. Recovery is steady and the transformation feels gradual but deeply rewarding.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Adjunct Treatments and Medical Support */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Adjunct Treatments and Medical Support for Women
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A successful female hair transplant Pakistan journey is rarely just surgery. Women often benefit from a combined approach that strengthens existing follicles stabilizes shedding and supports long term density. Hair Skill places equal weight on medical evaluation and ongoing treatment because female hair physiology responds strongly to hormones nutrition and systemic changes.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Why medical treatment matters</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Transplant fills thinning areas but it does not stop progressive loss around them. Supporting native hair is essential for predictable long lasting results. Many women see faster recovery better density and more consistent texture when medical therapy is included in the plan.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Main treatments that help women</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Hair Skill personalizes every recommendation but common options include:</p>
                    <div className="space-y-2 ml-2 mb-4">
                      {[
                        "Minoxidil topical or foam to support follicle activity",
                        "Oral anti androgens such as spironolactone for women with hormonal sensitivity",
                        "PRP therapy for early stage thinning or slow miniaturization",
                        "Mesotherapy to improve scalp health and fine density",
                        "supplements for iron and ferritin when levels fall below optimal",
                        "thyroid and hormonal balancing when indicated"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium">These treatments are never pushed. They are offered when they genuinely fit your hair biology.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">The role of proper testing</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Before agreeing to a hair transplant for women in Pakistan Hair Skill checks for:</p>
                    <div className="space-y-1 ml-2 mb-4">
                      {["thyroid abnormalities", "low ferritin or iron deficiency", "PCOS indicators", "autoimmune markers when needed", "androgen sensitivity patterns"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Correcting these issues often reduces shedding and improves long term outcomes. For some women stabilizing medically for a few months before surgery creates a cleaner more predictable result.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">When surgery and medical care work together</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Women with early to moderate loss often experience the best improvement when transplant addresses structural gaps and medical therapy protects remaining hair. This combination reduces the risk of needing larger procedures later.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our restorative specialists state: When the internal environment supports the follicles every graft we place behaves better. Combined care is not optional. It is smart.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Emotional Impact Confidence and Quality of Life */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Emotional Impact, Confidence, and Quality of Life
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Female hair loss rarely feels like just a cosmetic issue. It affects daily emotions social comfort and the small moments most people take for granted. When the part line widens or photos start to feel uncomfortable confidence shifts quietly but deeply. A female hair transplant Pakistan journey is often about far more than adding density. It is about reclaiming ease identity and self expression.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">How thinning affects women differently</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Women describe their experience in personal ways:</p>
                    <div className="space-y-2 ml-2 mb-4">
                      {[
                        "hiding thinning areas with strategic hairstyles",
                        "avoiding bright lighting or overhead photos",
                        "spending extra time styling to create volume",
                        "feeling older than their age",
                        "worrying about what others might notice"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-bold">These feelings are valid. They are common. They are fixable.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Restoring confidence through design</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">A transplant for women focuses on restoring harmony not changing appearance. Small thoughtful improvements often create the biggest emotional shift:</p>
                    <div className="space-y-2 ml-2 mb-4">
                      {[
                        "a fuller part line that does not expose scalp",
                        "softer temples that frame the face",
                        "a smoother hairline that feels youthful",
                        "renewed volume at the top"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium">These subtle changes make styling easier and reduce the mental load of covering up.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Life after a female transplant & The Hair Skill approach</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Most women say the same thing after their results appear: I finally look like myself again. That quiet relief shapes relationships routines and how confidently you show up in daily life. Surgeons listen first. They ask how thinning affects your self image. They design based on how you wear your hair your lifestyle and how natural you want the improvement to feel. No pressure. No exaggerated promises. Just thoughtful care.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical directors reflect: When women feel seen and heard the medical part becomes easier. We design for confidence not just density.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Eyebrows Hairline Lowering and Related Female Procedures */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Eyebrows, Hairline Lowering, and Related Female Procedures
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  Female hair restoration is not limited to treating thinning on the scalp. Many women combine a female hair transplant Pakistan plan with related enhancements to refine facial framing. These adjustments are subtle but powerful helping restore softness and balance where it matters most.
                </p>

                {/* IMAGE 4: Eyebrow Restoration Close Up (Capture image_182f81.jpg: S.F.H., 33, 650 Grafts eyebrow close up) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/treatments/sfh-eyebrow-plan.jpg" alt="Surgeon placing delicate single hair grafts into female brow S.F.H., 33 years old, 650 grafts" className="w-full h-full object-cover object-center" />
                </div>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Eyebrow Transplant for Women</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Eyebrows shape expression and define the upper face. Loss from overplucking age or medical conditions can make the eyes look tired or less expressive.</p>
                    <p className="text-black text-base md:text-lg font-medium mb-2">An eyebrow transplant offers:</p>
                    <div className="space-y-1 ml-2 mb-3">
                      {[
                        "precise single hair placement",
                        "natural arch design tailored to your face",
                        "restored definition with soft density",
                        "long lasting results that replace daily filling"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium">Eyebrow work pairs well with temple or part line enhancements.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Hairline Lowering and Feminine Hairline Design</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Some women feel their forehead looks larger than they prefer. Others simply want a more feminine curvature. Transplant based lowering is an effective option when the native hairline sits higher than ideal.</p>
                    <p className="text-black text-base md:text-lg font-medium mb-2">Hair Skill focuses on:</p>
                    <div className="space-y-1 ml-2 mb-3">
                      {["soft roundness rather than angles", "delicate transitions at the temples", "avoiding masculine straight lines", "maintaining natural growth direction"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">For women considering surgical hairline lowering transplant can sometimes be a gentler alternative. Thinning around the temples affects how the face is framed. A small number of carefully angled grafts can dramatically improve symmetry and softness.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Combined Procedures for Natural Harmony</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Many women ask about pairs of treatments such as female hair transplant plus eyebrow transplant part line density plus temple strengthening or hairline refinement plus PRP. These combos work well because they holistically enhance facial framing.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our attending doctors explain: Women value subtlety. Every graft must respect femininity. When eyebrows temples and the hairline speak the same design language the result feels effortless.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Female Hair Transplant Before and After Expectations */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Female Hair Transplant Before and After Expectations
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Understanding what results look like at every stage helps women feel calm prepared and confident about their female hair transplant Pakistan journey. At Hair Skill the goal is not dramatic change. It is natural harmony. The best outcomes blend with your features so well that no one can pinpoint what changed. They just notice you look refreshed.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">What realistic results look like</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Before and after photos often show:</p>
                    <div className="space-y-2 ml-2 mb-4">
                      {[
                        "a noticeably fuller part line",
                        "stronger temple framing",
                        "softer curvature at the front",
                        "improved density that makes styling easier",
                        "reduced visibility of the scalp under bright lights"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium">Women rarely want overly dense masculine lines. Instead they prefer refined improvements that preserve feminine shape.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Timeline of visible changes</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">A female transplant follows a predictable rhythm:</p>
                    <div className="space-y-2 ml-2 mb-4">
                      {[
                        "Week 1 initial redness fades donor area settles",
                        "Week 3 to 6 transplanted hairs shed a normal phase",
                        "Month 3 to 4 first new hairs appear",
                        "Month 6 to 9 major thickening phase",
                        "Month 12 to 14 final shape softness and flow emerge"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-medium">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium">This gradual timeline is why photos at 6 and 12 months matter more than immediately after surgery.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Styling freedom after surgery & Final outcome factors</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">Once new hair grows women enjoy easier daily styling less reliance on powders or volumizers comfort in wind bright light or cameras and more hairstyles without worrying about exposing thinning spots. Results depend on donor density pattern stability chosen technique and commitment to aftercare. Medical support for hormones ferritin and general scalp health also strengthens long term success.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our supervising doctors share: When expectations are realistic and the donor is strong the transformation feels soft but meaningful. Women often rediscover a part of themselves they missed.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Planning Your Staging in Lahore (ZERO LOGISTICS LINES) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Planning Your Female Hair Transplant Staging in Lahore Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Preparing for your female hair restoration staging in Lahore should feel completely simple and unhurried. Most women prefer a short highly organized clinical sequence that fits comfortably into their everyday routines. Our clinical coordination team manages your scheduling touchpoints smoothly so you can focus entirely on feeling rested and ready.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Clinical Staging Sequence & Outings</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Most patients allocate three to four days for their complete clinical staging sequence in Lahore: Day 1 personal clinical consultation trichoscopy audit diagnostic blood tests and line mapping Day 2 the gentle extraction and DHI placement session Day 3 official first clinical wash review and aftercare dressing instruction Day 4 optional final check before returning to your regular schedule.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Keep your clothing simple and recovery friendly. Bring loose button-front shirts that do not pull over the head a soft neck pillow for sleeping elevated and gentle localized shampoo. Strictly avoid high restrictive collars tight headbands or heavy hats that press against the recipient area.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">If you feel up to gentle walking once localized swelling settles Lahores calm patient-friendly districts offer lovely quiet park spaces and peaceful cafes. Simply avoid direct harsh sunlight physical exertion heavy crowds and anything that risks friction against your newly placed grafts.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our attending physicians advise: Recovery is smoother when you treat these early days like a gentle pause. Rest hydrate and enjoy your time at an unhurried pace.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* SECTION: 10 FAQS ACCORDION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  Female Hair Transplant Pakistan FAQs
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

              {/* Section: Start Your Female Hair Restoration Journey CTA */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-black text-[#772424] mb-4 tracking-tight">
                  Start Your Female Hair Restoration Journey With Confidence
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A female hair restoration experience at Hair Skill Clinic is designed around you. Your pattern. Your lifestyle. Your confidence. Women deserve an approach that feels respectful discreet and grounded in real medical understanding. That is exactly why international patients choose Hair Skill each year.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-4">Why Women Trust Hair Skill Clinic</h3>
                <div className="space-y-3 mb-6 ml-2">
                  {[
                    "Surgeon led planning from first step to final result",
                    "Unshaven and partial shave methods to protect your hairstyle",
                    "Natural looking density along the part line and temples",
                    "A feminine hairline design crafted with precision",
                    "Honest evaluation that never pushes unnecessary surgery",
                    "Clear package tiers in PKR explained upfront",
                    "A calm supportive cleanroom environment where your comfort matters"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black text-lg">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Our surgeons are known for gentle thoughtful design. Every graft is placed to enhance softness and balance rather than create artificial lines. It is artistry backed by medical insight.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-2">Treatment Packages Designed for International Patients</h3>
                <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-6">Your clinical staging stays simple and organized from the moment you arrive in Lahore. Packages typically include surgeon consultation and custom plan FUE or DHI technique partial shave donor method for discretion aftercare kit and first clinical wash and translation support during your clinical visits. No surprises. No confusion. Just a clear path forward.</p>

                <h3 className="text-2xl font-black text-[#772424] mb-2">Your Next Step Starts Here</h3>
                <p className="text-black text-base md:text-lg font-medium mb-4">If thinning hair has been weighing on you you deserve clarity and a plan that fits your real needs. A female hair transplant in Pakistan could be the gentle natural solution you have been looking for.</p>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  Request Your Free Female Hair Transplant Assessment Today. Share your photos. Tell us your goals. Let Hair Skill Clinic design a treatment plan that feels personal honest and genuinely life improving.
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
                    <input type="checkbox" id="fmlPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="fmlPrivacy" className="text-xs text-white/80 cursor-pointer">
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