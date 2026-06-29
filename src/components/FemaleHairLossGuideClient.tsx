"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
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

export default function FemaleHairLossGuideClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Female Hair Loss Guide Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24 overflow-x-hidden">
      
      {/* --- ASYMMETRIC HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-8 md:pb-12 bg-white px-4 sm:px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          {/* Breadcrumbs strictly pinned to far left */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/hair-transplant" className="hover:text-[#772424] transition-colors">Hair Transplant</Link>
            <span>/</span>
            <span className="text-[#772424]">The Causes Diagnosis and Treatments of Female Hair Loss</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            The Causes, Diagnosis and Treatments of Female Hair Loss
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 block">
              
              {/* IMAGE 1: Flagship Hero Visual */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/hair-transplant/21.webp" 
                  alt="Female patient examining diagnostic pre surgical hairline markings inside mirror at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-top" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Female Diagnosis & Staging, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Hair loss is a common issue that many women experience at some point in their lives. Women are more affected by hair loss than men as the ideals of female beauty and sophistication are aimed at them both verbally and nonverbally. While it is socially acceptable for men to experience hair loss women who experience thinning hair may feel as though they are alone in the world because flowing hair is often associated with feminine beauty. Since not many women lose their hair a woman with hair loss may feel like an outcast. As a result women may experience psychological and emotional difficulties because of their hair loss. Maintaining the ideal level of thick hair in society becomes more challenging when social media strongly influences peoples perceptions of themselves.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  However it is a problem that can be addressed with womens hair loss therapy. Several therapy approaches including FUE hair transplantation have demonstrated significant promise in treating irreversible hair loss and giving women their hair back along with their confidence!
                </p>
              </motion.div>

              {/* Section: Reasons Why Women Lose Their Hair */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Reasons Why Women Lose Their Hair
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Alopecia Androgenetica (AGA)</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Male-patterned hair loss or androgenetic alopecia is the most prevalent type of hair loss in both men and women AGA. Women mostly experience it after the age of 40 particularly around menopause when hormones are already fluctuating wildly. Unfortunately there are lots of women who start to suffer from AGA in their early twenties. The progressive weakening and thinning of hair in the front is the first sign of AGA in females. The main factor in this hair loss is testosterone a hormone generated by the adrenal gland and ovaries. Although testosterone is produced considerably less in women than in males it can still undergo 5-alpha-reductase and transform into its metabolite dihydrotestosterone DHT responsible for thinning and hair loss. Women will experience fewer severe side effects at first than men since they manufacture less 5-alpha-reductase.</p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Changes in Hormones & Traction Type Alopecia</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Hormone levels play a significant role in womens journeys through life such as menopause childbearing and the onset of menstruation. Hormone fluctuations the negative effects of birth control drugs and illnesses like thyroid disease can all cause hair loss. These hormone changes can disrupt the normal cycle of hair growth causing thinning and shedding.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">When tight hairstyles like braids buns and ponytails harm hair follicles traction alopecia occurs. Wearing a tight braid or ponytail regularly can damage the hair follicles and break hair leading to long-term hair loss and thinning. Ignoring them could cause irreversible harm including hair loss.</p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Iron deficiency anaemia & Adverse effects of medication</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Low iron is one of the most frequent reasons women experience hair loss. A woman loses iron every time she has her period; if she does not consume enough red meat which is high in iron her hair will suffer. Iron deficiency can lead to hair shedding and a reduction in the strength of the hair follicles. Iron deficiency-related hair loss typically disappears when the body receives more of this nutrient sometimes through supplements and other means including diet.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">It could occasionally be an adverse effect of prescribed drugs. Hair thinning can be caused by certain medications used to treat depression gout cancer hypertension arthritis and heart disease. Consequently individuals experiencing medication-induced hair loss should consult their physician.</p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Emotional trauma stress & Inadequate Nutrition</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Stress is another important factor in female hair loss. Excessive anxiety or hair loss following abrupt emotional shocks can also result in hypotrichosis. These conditions can affect the scalp eyelashes and eyebrows. Although it usually requires medical attention as well stress-related hair loss can occasionally compel you to seek psychological support.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Dietary irregularities or abrupt changes have a significant impact on hair. As is well known low nutritional levels especially those of the micronutrients needed for healthy hair growth such as vitamins A D and E or minerals like iron and zinc deficiency can also lead to thinning hair. Minerals and vitamins are crucial for maintaining hair health; therefore eating a balanced diet that includes proteins can help maintain the health of natural hair.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Womens Hair Loss Staging */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Womens Hair Loss: Staging
                </h2>

                {/* IMAGE 2: Ludwig Scale Staging Graphic */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-50 border border-gray-200/80 relative mb-8 shadow-md">
                  <img src="/hair-transplant/37.webp" alt="Clinical Ludwig Scale classification graphic illustrating Stage 1, Stage 2, and Stage 3 female pattern hair loss" className="w-full h-full object-contain p-4" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  The most often used classification scheme for female hair loss is the Ludwig Classification. According to this classification hair loss is symmetrically divided into three primary grades:
                </p>

                <div className="space-y-3 ml-2 mb-6">
                  {[
                    "Grade 1: Moderate thinning visible on the vertex area of the scalp",
                    "Grade 2: Thinning becomes more pronounced and the affected area is clearly noticeable",
                    "Grade 3: Extensive thinning across the top and crown regions of the scalp"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start sm:items-center gap-3"><span className="text-[#772424] font-black text-lg shrink-0">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  This classification system aids medical professionals in determining the appropriate course of action for treating patients by helping them assess the severity of their hair loss issues.
                </p>
              </motion.div>

              {/* Section: Diagnosis of Female Hair Loss */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Diagnosis of Female Hair Loss
                </h2>

                {/* IMAGE 3: Distressed Woman Showcase */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/22.webp" alt="Distressed female patient holding head demonstrating the psychological impact of unaddressed hair shedding" className="w-full h-full object-cover object-top" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  This is in contrast to the pattern of loss seen in males with male-pattern baldness which starts at the crowns and temples and progresses toward the back of the head creating a structure like a horseshoe where the remaining hair wraps around the back of the neck and behind the ears. Even while women seldom go as bald as men it is just as painful when the thinning is noticeable. Men are more likely to be diagnosed with hair loss than women because a number of factors need to be considered in the latter case.
                </p>

                <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-4">Methods of Diagnosis</h3>
                <div className="space-y-4 ml-1 sm:ml-2 mb-6">
                  <div>
                    <div className="flex items-center gap-2 font-black text-[#772424] text-lg mb-1"><span>•</span><h4 className="inline text-base sm:text-lg md:text-xl font-black text-[#772424]">Blood test</h4></div>
                    <p className="text-black text-base md:text-lg font-medium pl-4">It is typical for women to get a blood test to rule out any underlying health issues such as thyroid disorders hormonal imbalances or anaemia that could be brought on by hair loss.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-black text-[#772424] text-lg mb-1"><span>•</span><h4 className="inline text-base sm:text-lg md:text-xl font-black text-[#772424]">Scalp analysis</h4></div>
                    <p className="text-black text-base md:text-lg font-medium pl-4">A microscopical examination of the scalp can be used to identify anomalies and see the hair follicles.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-black text-[#772424] text-lg mb-1"><span>•</span><h4 className="inline text-base sm:text-lg md:text-xl font-black text-[#772424]">Pull Test</h4></div>
                    <p className="text-black text-base md:text-lg font-medium pl-4">To determine how many hairs come out gently pull out a bunch of hairs. You may be experiencing hair loss if you lose a lot of hair.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-black text-[#772424] text-lg mb-1"><span>•</span><h4 className="inline text-base sm:text-lg md:text-xl font-black text-[#772424]">Biopsy</h4></div>
                    <p className="text-black text-base md:text-lg font-medium pl-4">Occasionally a tiny sample of your scalp for more detailed analysis might be beneficial to ascertain whether or not the hair follicles are in good health and are not being attacked by conditions that impact the hair itself.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-black text-[#772424] text-lg mb-1"><span>•</span><h4 className="inline text-base sm:text-lg md:text-xl font-black text-[#772424]">Phototrichogram</h4></div>
                    <p className="text-black text-base md:text-lg font-medium pl-4">A phototrichogram is a method of taking consecutive pictures of the scalp to track hair growth or loss over time indicating the progression of hair loss.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Options for Womens Hair Loss Treatment */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Options for Women’s Hair Loss Treatment
                </h2>

                {/* IMAGE 4: Macro Scalp Grafts Close Up */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/38.webp" alt="Macro close up view of delicate female follicular units K.C., 27 years old, 2400 grafts" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  While treating the hair loss of adult women can be more challenging than that of males there are methods to slow down or even stop the process and occasionally regrow hair. The earlier the treatment is initiated the more successful the outcomes.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Medical Interventions</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Prescription drugs such as finasteride and minoxidil can be used to treat women with androgenetic alopecia. The reason finasteride stops hair shrinkage is because it prevents DHT from being formed. Although there is some evidence to support the possibility of dry skin and decreased sex drive these are very uncommon problems.</p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Low Laser Treatment & Mesotherapy</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Low-level laser Therapy or LLLT is a noninvasive procedure that uses laser light to stimulate hair follicles and improve blood flow to the scalp. This method is not a baldness cure but it can help maintain existing hair and slow down the rate of hair loss.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Mesotherapy: To nourish hair follicles vitamins minerals and enzymes are injected into the scalp using tiny needles. This technique helps to strengthen existing hair and promote hair growth. Most of the time this medication is utilized in addition to other therapies.</p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#772424] mb-2">Hair Transplantation Using FUE</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Hair transplantation with FUE Follicular Unit Extraction can offer a permanent option for women experiencing moderate to severe hair loss. Moving healthy hair follicles from one area usually the back of your head to areas with less or no hair is a surgical hair restoration treatment. The Sapphire FUE Hair Transplant is a cutting-edge procedure that uses sapphire blades to make clean incisions that speed up healing and produce results that seem more natural. It is available at our Hair Skill Clinic. Hair transplantation for women involves customizing an aesthetic therapy that requires meticulous preparation and focused attention to both the physical and emotional aspects of hair loss.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section: What We Can Provide for You */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-black text-[#772424] mb-6 tracking-tight">
                  What We Can Provide for You at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Women who lose their hair may find it distressing but it is treatable with the correct diagnosis and care. Our skilled surgeons who specialize in FUE hair transplantation have carried out thousands of successful hair restoration procedures for individuals from various nations across the world inside accessible local PKR package tiers.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  To receive extra guidance on hair loss schedule a complimentary online consultation with one of Hair Skill Clinics surgeons. They can provide you with information on the most suitable treatment choices. Our staff will assist you in selecting from our available prescription drugs laser therapy and hair transplants.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  We deliver the innovative Sapphire Hair Transplantation for people whose hair loss is naturally resistant to treatment. This top-rated therapy produces impressive results for women with permanent hair loss. Our team of skilled surgeons will ensure you feel secure and well-supported throughout the process.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  Female hair loss is a common issue that requires special attention. If hair loss is identified early on and treated quickly it can reverse both hair loss and growth. Discover the best new hair for regaining confidence with medicinal treatments mesotherapy procedures and surgical solutions like FUE transplantation for ladies.
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
                    <input type="checkbox" id="fhlPrivacy" required defaultChecked className="w-4 h-4 mt-0.5 sm:mt-0 accent-[#C5A059] rounded cursor-pointer shrink-0" />
                    <label htmlFor="fhlPrivacy" className="text-xs text-white/80 cursor-pointer leading-relaxed">
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