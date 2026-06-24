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

export default function BodyClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Body Hair Transplant Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
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
      q: "What is a body hair transplant?",
      a: "A body hair transplant uses FUE to extract follicles from areas like the beard chest back arms or legs and implant them into thinning areas on the scalp. It increases total graft supply when scalp donor alone is not enough."
    },
    {
      q: "Can body hair be transplanted to the head?",
      a: "Yes. Body hair to head transplant methods are effective when performed carefully. Beard and chest grafts usually offer the strongest results. These grafts are placed in supportive zones not the hairline to maintain natural texture balance."
    },
    {
      q: "Who is suitable for a body hair transplant?",
      a: "You may be a good candidate if you have limited scalp donor capacity advanced hair loss scarring or need repair after a failed transplant. Strong beard or chest hair improves suitability."
    },
    {
      q: "Which body areas can be used as donors?",
      a: "Beard chest back arms and legs can all be used. Beard usually provides the strongest grafts while chest and back offer softer coverage."
    },
    {
      q: "Does body hair transplant look natural?",
      a: "Yes when designed correctly. Scalp grafts frame the hairline. Body grafts increase density behind it. This blend creates a fuller balanced appearance."
    },
    {
      q: "What is the success rate of body hair transplant?",
      a: "Most clinics report a body hair transplant success rate 60 to 80 percent depending on donor type and technique. Beard grafts typically achieve the highest survival."
    },
    {
      q: "Is body hair transplant painful?",
      a: "Local anesthesia keeps the procedure comfortable. Mild soreness in body donor areas is common for a few days."
    },
    {
      q: "How long does recovery take?",
      a: "Initial healing takes around a week. Visible improvements begin at 3 to 4 months with full results at 12 to 18 months."
    },
    {
      q: "How long should I allocate for my clinical staging?",
      a: "Most patients allocate 3 to 4 days in Lahore for consultation procedure first clinical wash and follow up guidance."
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
            <span className="text-[#772424]">Body Hair Transplant</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Body Hair Transplant
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* IMAGE 1: Flagship Hero Visual (Capture image_1926a2.jpg: Bearded patient standing in front of dark logo) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/techniques/body-hero.jpg" 
                  alt="Bearded patient standing confidently after Body Hair Transplant donor assessment at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-top" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  BHT Donor Assessment, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  If you are reading about body hair transplant Pakistan you have probably already heard that the back of the head is the main donor area. That is true. Most transplants rely on this zone. But sometimes the scalp donor is not enough to reach the density you want. Density is what your eye really notices. Without it even good technique looks thin.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  In a body hair transplant in Pakistan grafts with follicles are taken from other areas of the body and moved to the scalp. This can include beard chest back arms or legs. The goal is simple: Your surgeon increases the safe graft pool so the transplanted area does not look sparse even when your scalp donor is limited.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Think of body hair to head transplant as a support act not the main performer. Your scalp hair still frames the hairline and front. Body hair steps in to help with background coverage midscalp thickening or crown filling. Done correctly a combined body hair and scalp hair transplant can turn a borderline case into a believable result.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At Hair Skill Clinic BHT hair transplant is never offered as a quick fix. It is a strategic option for advanced hair loss depleted donor or body hair transplant for repair cases after unsatisfying surgeries.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our lead surgical specialists often remind patients: Tools like body hair transplant help us reach better density. But they only work when we respect your donor limits and design for what is truly possible.
                </p>

                <h2 className="text-3xl font-black text-[#772424] mt-4 tracking-tight">
                  Restore Your Hair When Scalp Donor Is Not Enough
                </h2>
                <h3 className="text-xl font-extrabold text-[#772424]">
                  Body Hair Transplant in Pakistan at Hair Skill Clinic
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  When thinning becomes advanced or previous procedures have exhausted your scalp donor area many people feel they are out of options. A body hair transplant in Pakistan at Hair Skill changes that. By safely using grafts from the beard chest back or other donor zones you unlock a larger supply of follicles and give your scalp a real chance to regain density.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  This is the solution for patients who want meaningful coverage without unrealistic promises. Hair Skill delivers strategic planning surgeon led design and natural looking results that honor your hair pattern.
                </p>
              </motion.div>

              {/* Section: Why This Treatment Is a Smart Choice */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why This Treatment Is a Smart Choice
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  Body hair expands your usable graft pool making it possible to treat advanced hair loss or repair unsatisfactory work. Scalp grafts still lead the design. Body grafts fill and support density where scalp hair alone cannot.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Surgeon Led Planning</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">BHT requires more nuance than standard FUE. Hair Skill surgeons analyze each donor zone carefully selecting grafts based on texture thickness and growth patterns so the final outcome blends naturally.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Natural Looking Density Boost</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">When placed intelligently body grafts strengthen the midscalp crown and repair zones. This creates a fuller look that is far more forgiving under real lighting and daily styling.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Transparent Guidance and Honest Expectations</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Hair Skill does not oversell. You receive clear explanations realistic goals and a design shaped around your true donor potential.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section: What Is a Body Hair Transplant (BHT) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  What Is a Body Hair Transplant (BHT)?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A body hair transplant uses the same principles as FUE but the grafts are taken from non scalp donor areas. In a typical body hair transplant Pakistan procedure your surgeon may extract follicles from the beard chest back arms or legs to support areas of thinning on your scalp. This approach is especially helpful when the usual donor zone at the back of the head cannot supply enough grafts for the density you want.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  Body hair behaves differently. Each donor area has its own texture curl angle and growth cycle. Beard hair is thicker and usually stronger. Chest hair is softer and often shorter. Arm or leg hair can be fine or slow growing. Understanding these differences is essential because texture mismatch can affect how natural your body hair to scalp transplant looks.
                </p>

                {/* IMAGE 2: Follicular Survival Staging Graph (Capture image_1926be.jpg: 4-12 Weeks curve) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-50 border border-gray-200/80 relative mb-8 shadow-md">
                  <img src="/techniques/body-timeline-graph.jpg" alt="Clinical graph demonstrating follicular survival cycle shocking shedding phase and mature 18 month density" className="w-full h-full object-contain p-4" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  This is why BHT focuses on smart placement. Beard hair may boost midscalp strength. Chest hair may help with crown coverage. Scalp grafts still build the hairline. A thoughtful combination creates better balance and reduces the chance of visible contrast.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Success rates vary. Many clinics quote body hair transplant 60 to 80 percent success rate depending on donor type and technique. That range is honest. Body grafts do not behave exactly like scalp grafts. Yet when used correctly they increase total coverage in a way scalp grafts alone cannot.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  For patients with depleted donor or advanced hair loss stages such as body hair grafts for Norwood 6 or Norwood 7 BHT becomes a practical tool. It adds volume where you need it most.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our medical leadership adds: The goal is not just more grafts. The goal is a natural pattern. Body hair grafts help us create that pattern when scalp donor is limited.
                </p>
              </motion.div>

              {/* Section: Who Is a Good Candidate */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Who Is a Good Candidate for Body Hair Transplant in Pakistan?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Not everyone needs BHT. The ideal candidate is someone who either has limited scalp donor capacity or wants additional density in zones where scalp grafts alone cannot deliver enough coverage. If you have thinning across large areas or previous overharvesting a body hair transplant in Pakistan can extend your donor supply safely.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  People with strong beard or chest hair often see the best outcomes. Beard grafts tend to grow thicker and faster making them useful for midscalp reinforcement and crown filling. Chest hair is softer and blends well in background density. This flexibility gives surgeons room to design a more complete result.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-3">BHT also works well for</h3>
                <div className="space-y-2 ml-2 mb-6">
                  {[
                    "body hair transplant for poor donor area",
                    "body hair transplant for repair cases after overharvesting",
                    "body hair transplant after failed transplant where density was not achieved",
                    "body hair to head transplant for advanced hair loss",
                    "patients with scars or patchy areas needing support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  At Hair Skill we look at how each donor area will behave on your scalp. Texture direction and growth cycle matter. You might be a good candidate if these align. You might not if your body hair is very light sparse or extremely different from your scalp hair.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Expectations also play a role. A body hair transplant for Norwood 6 or Norwood 7 can help with coverage but it will not recreate the thickness you had in your teens. BHT is a density enhancer not a density miracle.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our experienced physicians share: Choosing the right donor is key. We prefer using body hair to support not to replace scalp grafts. The balance gives the most believable outcome.
                </p>
              </motion.div>

              {/* Section: Donor Areas for Body Hair Transplant at Hair Skill */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Donor Areas for Body Hair Transplant at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A successful body hair transplant Pakistan depends on selecting the right donor areas. Each part of the body offers different texture thickness and growth behavior. At Hair Skill Clinic donor selection is never random. It is carefully matched to the region of the scalp we want to strengthen.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Beard as Donor</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Beard follicles are the strongest body donor source. They have thick shafts high survival rates and good growth on the scalp. This makes beard to scalp transplant and beard hair transplant to head ideal for adding structure in the midscalp or crown. Beard grafts are rarely used at the front line since they may appear too thick there.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Chest Hair</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Chest hair is softer. It blends naturally when used for chest hair to head transplant in broader coverage zones. It works well for crown and background density. Beard hair gives strength. Chest hair gives softness. Together they expand your donor capacity.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Back Arms and Legs & Advanced Hierarchy</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">These areas are typically used only when scalp beard and chest are insufficient. Back hair to head arm hair to head and leg hair transplant to head can help certain patients with widespread thinning. The grafts usually have finer texture and shorter cycles so they are placed where subtle coverage is enough.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">For body hair grafts for Norwood 6 or Norwood 7 the donor plan becomes a hierarchy: Scalp then Beard then Chest then Back arms legs as supplemental sources. This layered approach helps maintain a natural look while adding the density larger cases demand.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our surgical specialists note: Body hair is not a replacement for scalp donor. It is a valuable extension. When used with intention it increases density without sacrificing natural harmony.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Technique and Planning */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Body Hair Transplant Technique and Planning at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A body hair transplant Pakistan procedure uses the FUE method but extraction and planning require a more sensitive approach. Body follicles grow with different angles curl patterns and lengths. Your surgeon must understand these variations to create a natural blend once the grafts reach the scalp. At Hair Skill every BHT hair transplant begins with a detailed donor analysis to decide which body zones can safely support your density goals.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">How We Mix Scalp and Body Grafts</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Scalp grafts remain the foundation. They set the hairline shape the front and define your look. Body grafts step in to reinforce midscalp areas strengthen the crown or add background coverage. This mixed approach is what transforms a thin result into something fuller and more believable.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Technical Principles</h3>
                    <div className="space-y-2 ml-2 mb-4">
                      {[
                        "FUE body hair transplant uses micro punches adjusted to each donor area",
                        "Extraction angle changes with beard chest or leg hair",
                        "Body hair often has a shorter growth cycle so it is placed in supportive zones",
                        "Curl and thickness differences are considered before placement"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">The technical challenge is worth it because body grafts increase your safe donor pool. More grafts mean more consistent density. And density is what creates the complete look many patients want. When the scalp donor is limited body hair transplant for density becomes a practical advantage.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Why Planning Matters</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Poor planning leads to mismatch. Correct planning allows scalp and body hairs to work together. Hair Skill surgeons design each case to avoid clumping reduce directional conflicts and maintain the character of your natural pattern.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our senior clinicians often emphasize: Body hair is a precision tool. When placed with intent it fills the gaps that scalp donor alone cannot solve.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Procedure Step by Step */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Body Hair Transplant Procedure Step by Step
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A body hair transplant in Pakistan follows the same core structure as FUE but with additional planning to manage multiple donor zones. At Hair Skill Clinic the goal is always the same: Expand your usable donor pool safely and increase density in the areas where it matters most. Here is how a typical body hair to head transplant unfolds from start to finish.
                </p>

                <div className="space-y-6 border-l-2 border-[#772424]/20 pl-6 ml-2 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Pre Procedure Planning</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Your surgeon analyzes scalp and body donor areas. Beard chest back arms or legs are evaluated for strength and suitability. Some patients begin a short preparation phase that includes trimming or mild topical support to create uniformity in growth. This helps with extraction reliability and improves survival odds.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Local Anesthesia and Donor Extraction</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">The procedure begins with local anesthesia. Using the micro FUE body hair transplant technique grafts are harvested one by one. Beard may provide strong thick grafts. Chest hair may offer softer blending. Back or arm grafts are taken when additional support is needed. Each follicle is handled carefully since body grafts can have curved roots or shallow angles.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#772424] mb-1">Sorting Recipient Design & Implantation</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Grafts are grouped according to texture and thickness. Scalp singles shape the hairline. Body grafts strengthen midscalp or crown. This mix is essential for natural flow. Using fine implanters or forceps grafts are placed according to angle spacing and pattern. Body hair fills background zones while scalp grafts define structure. A BHT operation time often runs 6 to 8 hours and longer in complex cases.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-5 rounded-2xl border-l-4 border-[#772424]">
                      Our attending doctors note: Every graft must be placed with intention. BHT cases demand more patience but they reward patients with coverage they thought was impossible.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Cost Ranges in Pakistan (PURE PKR TIERS / ZERO LOGISTICS) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Body Hair Transplant Cost Ranges in Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  The body hair transplant Pakistan cost ranges help you plan realistically. Tiers vary because BHT requires more time more precision and often more than one donor source. Compared to standard FUE BHT demands deeper expertise especially when beard chest or back grafts are combined with scalp grafts to achieve balanced density.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Most clinics follow similar patterns and public packages show highly accessible local PKR investment brackets structured around basic BHT cases with comprehensive upper tier PKR ranges allocated for multi donor or complex planning. For patients with advanced hair loss these tiers matter. Many need grafts from several different body zones. This increases surgical hours and planning time which affects total tier calculations.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-3">Your exact tier calculation depends on</h3>
                <div className="space-y-2 ml-2 mb-6">
                  {[
                    "total grafts needed",
                    "number of donor areas used",
                    "complexity of curl angle or texture differences",
                    "whether the case involves repair after failed transplant",
                    "combined scalp plus body approach"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg font-medium mb-6">
                  At Hair Skill Clinic tier calculations stay transparent upfront. You receive your personalized plan graft strategy and full clinical outline in PKR before scheduling anything upfront.
                </p>

                <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424] mb-6">
                  <h3 className="text-xl font-black text-[#772424] mb-2">How much does a body hair transplant cost in Pakistan?</h3>
                  <p className="text-black font-medium text-base leading-relaxed mb-3">Most international patients invest within accessible local package brackets in PKR depending on graft count donor areas and complexity upfront. Pakistan remains far more affordable than the US or UK offering massive relative savings compared to heavy capital calculations abroad.</p>
                  <p className="text-black font-bold text-base leading-relaxed border-t border-gray-200/80 pt-3">
                    Our financial counselors add: BHT tier planning should match the precision required. More donor zones do not mean better outcomes unless the plan is thoughtfully built. You invest upfront in design not just grafts.
                  </p>
                </div>
              </motion.div>

              {/* Section: Recovery Healing and Results */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Recovery, Healing and Results After Body Hair Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Healing after a body hair transplant Pakistan procedure follows the same general pattern as scalp FUE but each donor zone may react differently. Beard areas usually heal fast. Chest and back can feel tender for a few days. Arm and leg donor sites tend to recover quietly with minimal irritation. Your scalp follows a familiar cycle: redness tiny scabs shedding and gradual regrowth.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">What the First Weeks Look Like</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">During the first week you see mild crusting in both scalp and body donor areas. Washing instructions help those scabs soften and fall naturally. Most patients return to everyday routines after a few days because body donor sites are hidden under clothing. By week two donor areas look far better. Shedding begins around weeks three to five. This is normal. The graft enters a resting phase before it starts growing again.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Growth Timeline & Blending for Natural Outcomes</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Body hair has a different growth rhythm than scalp hair. That means the timeline varies: Early signs appear around month 3 to 4 noticeable improvement arrives between months 6 and 9 full mature results settle inside 12 to 18 months. Because body grafts may be curlier or shorter Hair Skill surgeons place them where those differences support coverage instead of distracting.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">BHT grafts do not need to mimic scalp hair perfectly to be effective. They strengthen areas where visual density matters. When combined with scalp grafts they create a fuller more consistent look. This is how a body hair to scalp transplant enhances coverage even in advanced cases.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our restorative team shares: Growth takes patience. Body grafts wake up slowly but when placed correctly they add the extra layer of density many patients thought they could never achieve.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Risks Limits and Success Rate */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Risks, Limits and Success Rate of Body Hair Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Every body hair transplant Pakistan procedure has unique strengths and practical limits. Body hair is a valuable donor source but it behaves differently from scalp hair. Understanding these differences helps you set healthy expectations and recognize when BHT can meaningfully improve your result.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">What Makes BHT Different & Success Reality</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Body hair varies in curl diameter angle and growth cycle. Beard hair is thick and fast growing. Chest hair is softer and often shorter. Leg or arm hair may grow slowly. These differences mean that body grafts usually support density rather than create fine detail. This is why scalp follicles remain the foundation for hairline design.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Many clinics report a body hair transplant success rate 60 to 80 percent. This is accurate. Body grafts survive well but typically not at the same rate as scalp grafts. The key is using the right donor for the right zone. Beard grafts often achieve the highest survival while chest and limb hair may offer moderate yield. When mixed thoughtfully with scalp grafts these numbers still create visible improvement.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Potential Risks and Limitations</h3>
                    <div className="space-y-2 ml-2 mb-4">
                      {[
                        "texture mismatch when placed incorrectly",
                        "lower yield compared to scalp donor",
                        "longer operations due to complex angles",
                        "overharvesting risk in visible areas like beard",
                        "limited ability to create full density in very advanced cases",
                        "short growth cycles in some donor zones"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                      ))}
                    </div>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">BHT is not meant to replace scalp donor. It extends your donor supply. It improves coverage. It adds layers of density in areas where scalp grafts alone fall short.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our surgical experts explain: We never chase graft numbers. We chase balance. Body hair grafts must blend with your pattern not compete with it. When the plan is honest BHT becomes a powerful tool.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Why Choose Pakistan and Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Choose Pakistan and Hair Skill Clinic for Body Hair Transplant?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Pakistan has become a leading destination for advanced hair restoration and body hair transplant Pakistan procedures sit at the center of that expertise. Surgeons here perform thousands of graft extractions each year across beard chest back and limb donor zones. This volume sharpens technique improves decision making and builds the kind of intuition that complex BHT cases require.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Why Pakistan Stands Out</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Accessible package tiers play a role but medical expertise matters more. Clinics in Pakistan often provide the same or better outcomes as Western countries inside affordable local PKR brackets. Many international patients travel for procedures that would carry heavy premium calculations abroad. This includes comprehensive clinical packages that simplify the entire experience upfront.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Why Hair Skill Clinic is Different</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Hair Skill focuses on design first. Body hair is not used randomly. It is assigned to supportive zones where its texture strengthens density rather than disrupts flow. Every body hair restoration case begins with a plan built by a surgeon not by a sales team. Beard grafts reinforce structure. Chest grafts fill background spaces. Scalp grafts define the areas that frame your face.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Patients with body hair transplant for repair cases find comfort knowing that Hair Skill specializes in correction. Whether your donor was overharvested or previous density was not enough a carefully constructed BHT plan can recover lost coverage and restore confidence.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical directors summarize it well: BHT is a partnership. When we combine surgical precision with a thoughtful patient plan even complex cases open new possibilities.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Aesthetics Density and Expected Outcomes */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Aesthetics, Density, and Expected Outcomes
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  When patients consider a body hair transplant Pakistan they often ask the same question: Will the result look natural? The answer depends on design placement and donor strategy. Body hair does not behave exactly like scalp hair so the technique must respect those differences. Done well BHT improves coverage fills gaps and strengthens density where your eye needs it most.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">How Body Hair Supports Density</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Scalp grafts shape the hairline and set the overall pattern. Body grafts reinforce that structure. Beard hair is thicker so it adds strength in the midscalp. Chest or back hair is softer and creates a gentle background layer. Combining scalp and body hair for higher graft numbers helps maximize surface coverage and reduce visible thinning in advanced cases.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Realistic Expectations</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">If you have extensive thinning BHT cannot recreate adolescent density. But it can lift a see through appearance into something fuller more uniform and far easier to style. This is especially useful for:</p>
                    <div className="space-y-1 ml-2 mb-4">
                      {["crown filling", "repair of patchy transplants", "scar coverage", "major Norwood stages", "general density enhancement upfront"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Appearance Texture & Before and After Perspective</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Most patients notice that once body grafts grow they blend visually even if the strands differ slightly in texture. Strategic placement is key. Softer body grafts sit under or behind scalp grafts. Thicker beard grafts stay away from the frontal hairline. This layered approach results in natural looking results with mixed donor sources. Seeing body hair to head transplant before and after photos helps set expectations. At Hair Skill surgeons encourage reviewing cases similar to your donor structure.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our attending doctors reflect: When body hair supports the right zones density improves without calling attention to itself. The best BHT outcomes feel calm balanced and quietly satisfying.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* SECTION: 9 FAQS ACCORDION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  Body Hair Transplant Pakistan FAQs
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
                  Start Your Body Hair Transplant Journey With Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  If you feel limited by your scalp donor area or past procedures a body hair transplant Pakistan plan at Hair Skill Clinic can help you regain options you thought were gone. Body hair opens a new donor supply. It strengthens density. It fills areas that looked impossible to fix. And most importantly it does all of this while still respecting natural design upfront.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-3">Why Patients Choose Hair Skill Clinic</h3>
                <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-6">Because every BHT case demands careful thinking upfront. Hair Skill surgeons examine your beard chest back and scalp donors with a designers eye. They decide which grafts belong in which zone upfront. This avoids mismatched texture and creates results that feel balanced instead of forced. Your clinical experience stays completely structured and comfortable: medical extractions implanter placement monitoring and localized aftercare support are all handled for you upfront. You focus entirely on your restoration upfront.</p>

                <h3 className="text-2xl font-black text-[#772424] mb-3">Key Benefits You Can Expect</h3>
                <div className="space-y-2 ml-2 mb-6">
                  {[
                    "expanded donor supply for advanced hair loss",
                    "better density across midscalp and crown",
                    "strategic mixing of scalp and body grafts",
                    "natural looking outcomes using supportive placement",
                    "clear expectations based on your unique donor profile",
                    "transparent package tiers in PKR explained upfront"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>

                <h3 className="text-2xl font-black text-[#772424] mb-2">Your Next Step</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  Send your photos. Share your goals upfront. Let a Hair Skill surgeon create a personalized body hair to head transplant Pakistan plan designed for your real potential upfront not unrealistic promises. Request Your Free BHT Assessment Today. A fuller more confident look begins with one decision. Hair Skill is ready when you are.
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
                    <input type="checkbox" id="bhtPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="bhtPrivacy" className="text-xs text-white/80 cursor-pointer">
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