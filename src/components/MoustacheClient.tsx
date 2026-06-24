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

export default function MoustacheClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Moustache Transplant Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- 11 FAQS DATA (Verbatim from pasted text, scrubbed of safe prose & exact numeric price errors) ---
  const faqList = [
    {
      q: "How much does a moustache transplant cost in Pakistan?",
      a: "Most patients invest within accessible local package tiers in PKR depending on the chosen method DHI or FUE and graft count. The final tier calculation reflects your precise density layout."
    },
    {
      q: "How many grafts do I need for a moustache transplant?",
      a: "A typical moustache uses 300 to 500 grafts for thin or patchy areas 500 to 700 grafts for full coverage and 700 to 1000 grafts for scar repairs or dense styles. The exact count changes with your lip shape and density goals."
    },
    {
      q: "Is the transplanted moustache shed?",
      a: "Yes. Shedding begins around week two and continues for two to three weeks. This is normal. The follicles stay inside the skin and regrow stronger in the following months."
    },
    {
      q: "When can I shave after moustache transplant?",
      a: "Most patients wait 3 to 4 weeks before shaving the transplanted area. The donor zone can be shaved earlier. Your doctor will give timing based on your skin sensitivity."
    },
    {
      q: "When can I go back to work?",
      a: "Light work is possible in 3 to 5 days. Jobs requiring physical effort may need a bit more time."
    },
    {
      q: "Is a moustache transplant painful?",
      a: "Discomfort stays low thanks to local anesthesia. Most patients describe the feeling as pressure rather than sharp pain."
    },
    {
      q: "How long does a moustache transplant take?",
      a: "The typical mustache transplant duration is 2 to 4 hours. The size of the area and the chosen technique influence the exact timing."
    },
    {
      q: "What is the moustache transplant success rate?",
      a: "With proper graft selection and good technique the moustache transplant success rate is high. Hair Skill achieves strong results by controlling angle direction and symmetry carefully."
    },
    {
      q: "Can a moustache transplant fix scars or burns?",
      a: "Yes. A moustache can effectively conceal scars if the skin is stable. This is a common request among patients with old injuries or cleft lip history."
    },
    {
      q: "Does a moustache transplant look natural?",
      a: "Yes when built around your natural angles and density pattern. Unnatural results come from rushed planning or incorrect direction."
    },
    {
      q: "Can I combine a moustache transplant with other procedures?",
      a: "Yes. Many patients combine it with beard or eyebrow work. Combined sessions require strong donor supply and a balanced design plan."
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
            <span className="text-[#772424]">Moustache Transplant</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Moustache Transplant
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* IMAGE 1: Flagship Hero Visual (Capture image_0b1381.jpg: Smiling gentleman in black hat) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/treatments/moustache-hero.jpg" 
                  alt="Smiling patient wearing black hat after successful Moustache Transplant restoration at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-top" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Moustache Restoration, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If you have been thinking about a moustache transplant Pakistan treatment because your upper lip never fills in the way you want you are not alone. Many men feel frustrated when their moustache grows thin uneven or stops after a few stubborn patches. A mustache transplant in Pakistan can change that experience completely especially when surgeons handle the design and direction themselves. At Hair Skill Clinic every moustache hair transplant Pakistan case begins with a simple question: What kind of moustache fits your face naturally?
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Pakistan has become a global center for moustache transplant Lahore procedures thanks to surgeon experience refined FUE and DHI techniques and predictable healing. But choosing the right moustache transplant clinic Lahore matters just as much as the procedure itself. You want a team that studies your facial structure listens to what bothers you and rebuilds your moustache with careful angulation. That is the approach of our doctors at Hair Skill Clinic.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  This guide explains the full journey. You will learn how moustache hair transplant Lahore techniques work how long healing takes and investment ranges for a moustache transplant in Pakistan based on graft count and method. If you have scars gaps or hormone related thinning you will also see whether this procedure fits your goals. The aim is to give you clarity confidence and a plan that feels realistic.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our lead surgical specialists say it often: A moustache changes the expression more than people think. The right design brings balance not exaggeration.
                </p>

                <h2 className="text-3xl font-black text-[#772424] mt-4 tracking-tight">
                  Moustache Transplant in Pakistan at Hair Skill Clinic
                </h2>
                <h3 className="text-xl font-extrabold text-[#772424]">
                  A Natural Moustache That Fits Your Face Perfectly
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If your moustache has never grown the way you hoped or you are tired of hiding thin gaps Hair Skill Clinic offers a calm surgeon led solution that rebuilds your upper lip with balance and precision. The goal is simple: A moustache that looks like it always belonged to you.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Our doctors study your features lip shape and hair texture to design a result that feels authentic. No rushed templates. No guesswork. Just steady hands and thoughtful planning.
                </p>
              </motion.div>

              {/* Section: Why Choose a Moustache Transplant */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Choose a Moustache Transplant in Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Many readers search for a moustache transplant in Pakistan because they hear that results are good and investment tiers are accessible. That is partly true. What really makes Pakistan stand out is a mix of high case volume experienced surgeons and a mature clinical infrastructure. Clinics here perform facial hair transplant Pakistan procedures every single day. That repetition sharpens skill and helps create predictable outcomes.
                </p>

                {/* --- ADDED IMAGE FROM SCREENSHOT HERE --- */}
                <div className="w-full rounded-2xl overflow-hidden border border-gray-100 my-8 relative shadow-md">
                  <img 
                    src="/treatments/moustache-es-result.jpg" 
                    alt="E.S, 24, 5100 Grafts" 
                    className="w-full h-auto object-cover" 
                  />
                  <div className="absolute bottom-0 left-0 bg-[#1a202c] text-white text-xs md:text-sm px-4 py-2 font-bold rounded-tr-lg">
                    E.S, 24, 5100 Grafts © Hair Skill Clinic
                  </div>
                </div>
                {/* -------------------------------------- */}

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  When you compare a moustache transplant in Pakistan vs UK USA or Europe the gap in cost becomes obvious. A similar procedure can be two or three times more capital intensive in Western countries. In Pakistan moustache transplant prices in PKR tend to sit around one clear accessible band depending on method and graft count.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Investment tiers are not the only factor though. Urban centers like Lahore have developed elite clinical facilities. Many patients read moustache transplant Pakistan reviews and decide based on the doctor rather than regional geography. Hair Skill Clinic sits in this environment as a medically focused surgeon led center. We are not a package reseller. We are a clinic that cares how your face will look five years from now.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our medical leadership puts it simply: Pakistan gives you the advantage of experience and accessible pricing. Your job is to choose the team that will use those advantages wisely.
                </p>
              </motion.div>

              {/* Section: Why Choose Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Choose Hair Skill Clinic for Your Moustache Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Choosing the right moustache transplant clinic Lahore can feel overwhelming when every website claims to be the best. What sets Hair Skill Clinic apart is not loud promises. It is quiet precision. Every mustache transplant in Pakistan we perform starts with a design created by surgeons not sales staff. The moustache sits at the center of your expression. It affects how serious confident or youthful you appear. That is why we treat this area with more detail than most patients expect.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  At Hair Skill we combine medical training with aesthetic awareness. Our doctors study your upper lip structure philtrum depth smile patterns and the natural curve under the nose. This micro geometry decides whether your moustache looks natural or forced. We never copy a template. We rebuild according to your face.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  For international visitors clinical safety is another concern. Many who search cheap moustache transplant Pakistan realize quickly that the lowest price usually means technician driven procedures. Angle control suffers. Density becomes uneven. Long term balance is lost. Hair Skill stays away from shortcuts. Surgeon involvement is the rule here not an upgrade.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-3">Here is what patients appreciate most</h3>
                <div className="space-y-2 mb-6 ml-2">
                  {[
                    "calm design planning with real medical guidance",
                    "FUE or DHI chosen based on your beard and lip anatomy",
                    "donor protection so your hairline stays healthy",
                    "clear aftercare with predictable healing",
                    "realistic density targets no exaggerated promises"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  When choosing between clinics in moustache transplant Lahore and broader facial hair transplant Pakistan options the deciding factor is trust. And trust grows from consistent natural results not aggressive marketing.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our surgical staff often notes: A moustache is small in size but big in impact. Precision decides everything.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mt-6 mb-3">Key Benefits</h3>
                <div className="space-y-2 ml-2">
                  {[
                    "Permanent moustache growth with your natural texture",
                    "Better symmetry for your upper lip",
                    "Stronger definition without a harsh look",
                    "Coverage for scars burns and previous injuries",
                    "A calm environment and one year of medical follow up",
                    "Clear guidance at every step",
                    "A moustache that looks confident not artificial"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>
              </motion.div>

              {/* Section: Techniques We Use */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Techniques We Use for Moustache Transplant at Hair Skill Clinic
                </h2>

                

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Most readers arrive with a simple question: Which method gives the most natural outcome for a moustache transplant Pakistan procedure? At Hair Skill Clinic we use two main techniques for moustache hair transplant Pakistan patients: Sapphire FUE and DHI. Each method serves a different purpose and both are chosen based on your facial structure donor strength and the density you want to achieve. Your moustache is not a large area but it is one of the most sensitive. Every millimeter matters. Every angle matters.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">FUE Moustache Transplant Pakistan</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-2">FUE moustache transplant Pakistan is a strong choice when you need moderate grafts or when density must be balanced across both sides of the upper lip. FUE works by extracting individual grafts from the donor area using micro punches. This method is clean efficient and gentle enough for most moustache cases. FUE suits men who want steady density have patchy growth across both sides or need scar coverage after injuries or cleft lip surgery. Using micro FUE tools or ultra thin microblades we create a soft texture that blends with your natural hairs.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">DHI Moustache Transplant Pakistan</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-2">For men who want refined borders or highly detailed shaping DHI moustache transplant Pakistan is often ideal. The Choi implanter pen lets us place grafts directly into the skin adjusting depth and angle with each movement. This helps avoid unnatural stiffness around the corners of the mouth. DHI fits when you want clean moustache edges have specific style goals or need to protect fragile skin.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Sapphire FUE & FUT comparisons</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">In some cases we use Sapphire FUE moustache transplant channels for smooth angulation. Sapphire blades create finer entry points which helps achieve softer feathered density. This works best for wide moustache shapes or when connecting to a beard. Most patients ask about FUT vs FUE. FUT leaves a linear scar and is rarely recommended for facial restoration. FUE and DHI dominate modern design because they heal faster.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our clinical specialists add a simple reminder: Technique is important but artistic placement is what makes a moustache look real.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Procedure Step by Step */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Moustache Transplant Procedure Step by Step at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Understanding the full moustache transplant Pakistan process helps remove uncertainty. Many patients worry about discomfort time off work or how obvious the early days look. A moustache hair transplant Pakistan is a focused delicate procedure that follows a steady sequence. Each step is designed to protect grafts maintain symmetry and give you a moustache that blends with your natural expression. Below is a simple walkthrough answering how it is done duration and daily milestones.
                </p>

                <div className="space-y-6 border-l-2 border-[#772424]/20 pl-6 ml-2 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 1: Online Evaluation and Style Mapping</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">The journey begins with clear photos. We study your upper lip shape gaps scars philtrum depth and the moustache style you want. This determines whether you need 300 grafts 600 grafts or more. Style examples help too especially classic or subtle designs. You receive a graft estimate healing timeline and package guidance in accessible PKR tiers.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 2: Design Session in Lahore</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">During your visit we refine every line. The doctor shapes the top border corner transitions and density slope toward the center. This session matters. A moustache can change your entire expression. We take time until the outline feels right.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 3: Donor Extraction</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Extraction begins once anesthesia takes effect. Most patients expect pain but moustache transplant pain level is low. You feel pressure not sharp discomfort. Donor hairs come from the scalp or beard depending on your texture and density goals. This part usually lasts one hour.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 4: Implantation on Upper Lip</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">This is the core. We use DHI pens or Sapphire FUE channels depending on your plan. Each graft is placed according to angle curl pattern and lip curvature. The moustache must move naturally when you talk or smile. That is where precision matters. Mustache transplant duration is 2 to 4 hours in the typical range.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Step 5: First 24 Hours</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">You leave the clinic with detailed care instructions and a simple routine. The moustache area looks full but delicate. You keep it dry elevated during sleep and protected from sweat or heat.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-5 rounded-2xl border-l-4 border-[#772424]">
                      Our attending doctors share this often: The moustache is expressive so we build it with care. The early days look temporary but the structure underneath is already set.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Recovery Shedding and Timeline */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Recovery, Shedding, and Moustache Healing Timeline
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Healing after a moustache transplant Pakistan procedure is predictable but many patients still feel anxious about the first few weeks. The moustache sits at the center of your face so every small change feels noticeable. Understanding the normal healing timeline helps calm worries and prevents confusion between normal symptoms and real issues.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Days 1 to 5: Redness Swelling Scabbing</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-2">Right after your procedure the upper lip looks fuller and slightly swollen. Tiny scabs start forming around day two. Redness is normal. Speaking or smiling may feel tight. Most people can walk outside comfortably by day three. If your job is office based you can usually return within three to five days. Normal symptoms include redness swelling dryness and small scabs fading steadily.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Weeks 2 to 4: Shedding Phase</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-2">This phase confuses many patients. The transplanted hairs fall out. This is not failure. It is the natural shedding cycle. Some search for shock loss after moustache transplant or fear uneven growth but shedding is expected. The follicles stay inside the skin and regrow stronger. This stage lasts one to three weeks.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-2">Months 2 to 12: Growth Milestones & Shaving</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Months 2 to 4 new sprouts appear thin and soft. Months 6 to 9 density builds consistently blending with natural hairs. You can safely shave the donor area within days but wait 3 to 4 weeks before shaving the upper lip. Month 12 full maturity settles completely.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical leadership reminds patients that healing comes in waves: A moustache settles slowly. Give it time. Every month adds character.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Moustache Transplant Cost Ranges in Pakistan (PURE PKR TIERS / NO NUMERIC PRICES) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Moustache Transplant Cost Ranges in Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Most people begin their research with price. They search for mustache transplant cost Pakistan or simply how much does a moustache transplant cost in Pakistan. Clear tiers matter but they only make sense when paired with realistic expectations. The moustache is a delicate area so cost depends on how many grafts you need which method fits your anatomy and design complexity.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Typical Moustache Transplant Tiers in PKR</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      Across accredited facilities in Lahore you will see consistent investment brackets. Rather than listing rigid volatile figures most cases fall inside accessible local package tiers in PKR depending on whether you require a light 300 graft touch up or a dense 1000 graft DHI reconstruction. These local package tiers sit significantly lower than Western calculations where granular per-graft billing makes upper lip restorations heavily capital intensive.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Hair Skill Clinic Pricing Structure & Packages</h3>
                    <p className="text-black font-medium text-base leading-relaxed mb-3">Your custom tier quote depends on graft count method used such as DHI moustache transplant Pakistan or FUE scar coverage and design complexity. We supply exact package calculations in PKR after your online assessment.</p>
                    <p className="text-black font-bold text-base leading-relaxed border-t border-gray-200/80 pt-3">
                      Comprehensive clinical packages at Hair Skill comfortably bundle your surgical procedure cleanroom extractions Choi implanter placements cellular post op medications and 12 months of clinical monitoring. Cheap low quality options often mean technician driven procedures where angle control suffers. Quality pays off.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Candidacy Styles & Safety */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Candidacy, Moustache Styles, and Clinical Safety
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Knowing whether you are the right fit helps avoid disappointment. Patchy growth scars burns cleft lip history and stable hormonal thinning respond wonderfully to DHI density packing. Active alopecia areata or unstable hormones require medical stabilization first. Good candidates heal predictably; right timing matters as much as technique.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Classic Moustache Styles & Upper Lip Geometry</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-2">Different facial structures suit different shapes including Chevron moustache transplant for a fuller look Pencil outline for a refined edge or Handlebar designs. Your philtrum depth and nose width guide the layout. The center often grows thicker while edges taper gently avoiding a blocky artificial look. The moustache should feel like it belongs to your face.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Risks Complications and Cleanroom Safety</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Normal temporary symptoms like localized pinkness fade in days. True risks like infection or unnatural upward angles happen almost exclusively in unaccredited technician facilities. Hair Skill protects you through surgeon led planning sterile operating rooms controlled extraction and careful angle mapping. Rebuilding an upper lip is small in size but big in visibility.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Combined Sessions: Many guests pair a moustache restoration with beard filling or eyebrow tapers. We only perform combination work when your donor density is robust never compromising future reserves.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Scheduling Your Session in Lahore (ZERO TRANSPORT/ACCOMMODATION LINES) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Scheduling Your Moustache Restoration in Lahore Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Once you decide to move forward your clinical sequence in Lahore is planned with absolute coordination. You focus entirely on your medical restoration and upper lip care while our clinical staff manages your scheduling touchpoints smoothly.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Most moustache restoration patients allocate two to three days for their clinical staging. Day one covers your official facial evaluation micro geometry measurements and line mapping. Day two is the surgical extraction and Choi pen implantation session. Day three covers the delicate first wash review and aftercare dressing under medical supervision.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Pack simple clothing such as zip or buttoned front shirts to prevent any fabric from grazing the upper lip during dressing changes. Light unhurried walking is perfectly fine once early swelling settles provided you keep the recipient area protected from intense direct sunlight.
                </p>
              </motion.div>

              {/* SECTION: 11 FAQS ACCORDION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  Moustache Transplant Pakistan FAQs
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
                  Book Your Moustache Transplant at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  If your moustache has always felt incomplete or you are tired of hiding thin patches a natural looking result is absolutely possible. The right mustache transplant in Pakistan brings balance back to your face and strengthens your expression in a way that feels honest not exaggerated. At Hair Skill Clinic your moustache is designed by surgeons who study your features closely and place each graft with steady intention.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Your journey begins with a simple online evaluation. You send your photos. A doctor reviews your donor strength upper lip structure and the style you want. You receive a clear plan real numbers and a step by step outline. No sales pressure. No rushed promises. Just medical guidance shaped around your goals.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  When you arrive at our facility in Lahore everything is structured for your clinical staging: Consultation. Surgery. Aftercare. A calm environment. A predictable process. A focused team.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  If you have looked at other clinics offering cheap deals take your time. Compare designs not slogans. Look at angles density and before and after transitions. Your future look deserves a clinic that listens. Start your free online moustache assessment today.
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
                    <input type="checkbox" id="mstPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="mstPrivacy" className="text-xs text-white/80 cursor-pointer">
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