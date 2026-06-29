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

export default function SideburnClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Sideburn Transplantation Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  // --- FAQS DATA (Verbatim from pasted text, scrubbed of safe prose & exact numeric price errors) ---
  const faqList = [
    {
      q: "Is a sideburn transplant permanent?",
      a: "Yes. Once transplanted hairs fully mature they behave like the donor hair. This creates permanent results that grow shed and age naturally. Longevity depends on the stability of the donor area at back or sides of the scalp and overall hair health."
    },
    {
      q: "How long does the procedure take?",
      a: "Most sideburn hair transplant procedures take two to four hours. Larger reconstructions or cases involving scars may take longer because grafts are placed more carefully to protect blood supply."
    },
    {
      q: "When can I shave or trim the new sideburns?",
      a: "Patients can usually trim after three to four weeks but should avoid close shaving until the grafts are stable. Hair Skill gives personal timelines during follow up."
    },
    {
      q: "Will the transplanted hair match my beard?",
      a: "Yes. Grafts are selected for thickness and curl to blend with existing beard or temple hair. Alignment angle and hairline design ensure the final look feels authentic."
    },
    {
      q: "Is the recovery painful?",
      a: "Most guests report mild tightness or swelling only during the first few days. The procedure is performed under local anesthesia and recovery aligns with the commonly searched short recovery minimal discomfort profile."
    },
    {
      q: "What is the best technique for sideburn restoration?",
      a: "Most cases rely on FUE sideburn hair transplant or DHI direct hair implantation for maximum control. FUT is rarely advised for facial hair because the linear scar does not match the areas delicate structure."
    },
    {
      q: "Do women get sideburn transplants?",
      a: "Yes. Sideburn transplant for women is increasingly common especially for those with post-facelift sideburn loss or naturally thin framing. Designs are softer and lighter to preserve feminine balance."
    },
    {
      q: "How many grafts do I need?",
      a: "Typical cases require 200 to 600 grafts per side. Needs vary for asymmetrical or patchy sideburns congenital absent sideburns or areas affected by scars burns trauma in sideburn area."
    },
    {
      q: "When will I see results?",
      a: "Early growth appears at three to four months. Results visible after 6 to 12 months reflect the full transformation."
    },
    {
      q: "Can I combine sideburn transplant with beard or hairline work?",
      a: "Yes. Many guests choose combination sessions to create harmony across facial hair in a single visit."
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
            <span className="text-[#772424]">Sideburn Transplantation</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Sideburn Transplantation
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* IMAGE 1: Flagship Hero Visual (Capture image_0a9ea0.jpg: Side view of marked sideburn) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group">
                <img 
                  src="/hair-transplant/18.webp" 
                  alt="Doctor drawing precise sideburn restoration outline on patient temple before surgical extraction" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Facelining Analysis, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  A sideburn transplant is a focused detail-driven procedure that restores shape density and balance to an area that defines the frame of the face. Many guests reach out because their sideburns feel uneven thin or have changed after surgery. Others want fuller sideburns that match their beard or prefer a sharper more masculine outline. A few were born with congenital absent sideburns while some experience loss linked to frontal fibrosing alopecia affecting sideburns. Whatever the reason the goal stays simple: Create sideburns that look like they have always belonged there.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At Hair Skill Clinic every sideburn hair transplant is doctor led. Your journey starts with analysis of facial symmetry hair calibre and long term plans. The teams here do beard moustache and sideburn transplantation daily so they understand how small adjustments influence the entire face. Whether you are dealing with thinning sideburns asymmetrical or patchy sideburns or post-facelift sideburn loss or distortion you receive a plan shaped around your natural features.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Guests choose Hair Skill because the experience runs deeper than surgery. Hospitality feels genuine. Communication is clear. Medical steps follow our institutional philosophy where artistry and comfort hold equal weight. Many patients describe the process as calmer than expected. They appreciate how gently the technicians handle grafts and how the doctors explain every detail before the first step begins.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Sideburns are subtle but powerful. When shaped correctly they refine the jaw guide the beard and create an immediate sense of balance.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our lead surgeons often remind patients that sideburns are never a copy-paste design. Length angle curve and density must follow your unique facial flow. A strong result always starts with careful planning.
                </p>
              </motion.div>

              {/* Section: What Is a Sideburn Hair Transplant */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-4 tracking-tight border-b pb-3 border-gray-100">
                  What Is a Sideburn Hair Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  A sideburn hair transplant is a precise facial procedure designed to rebuild or enhance the narrow area between the temple and the jawline. It looks simple at first glance yet this region demands exceptional control over natural growth direction angle calibre and layering. When the wrong technique is used the area looks flat or artificial. When the right approach is applied the result blends seamlessly with existing facial hair.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  For most guests the treatment begins with a full evaluation of beard density donor strength and facial symmetry. If you have thinning sideburns asymmetrical or patchy sideburns or visible gaps caused by scars burns trauma in sideburn area the aim is to create a shape that feels natural from every angle.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Those experiencing post-facelift sideburn loss or distortion are assessed with extra care since skin tension and scarring patterns differ from standard cases. Some patients arrive with no sideburns at all either genetic or related to frontal fibrosing alopecia affecting sideburns and want a structured frame that looks balanced.
                </p>
              </motion.div>

              {/* Section: How the Procedure Works */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  How the Procedure Works
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  A sideburn transplant is usually performed with FUE sideburn hair transplant or DHI direct hair implantation. Main steps include:
                </p>

                <div className="space-y-3 mb-6 ml-2">
                  {[
                    "Extracting grafts from the donor area at back or sides of the scalp",
                    "Sorting grafts by thickness for realistic match",
                    "Placing them at the correct angle to blend with beard or temple hair",
                    "Creating a shape adapted to your facial features"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-[#772424] font-black text-lg">•</span>
                      <p className="text-black text-base md:text-lg font-bold">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Some clinics still reference FUT sideburn transplant but modern facial work relies on minimally invasive techniques that avoid linear scars.
                </p>
              </motion.div>

              {/* Section: Why Sideburns Require Specialist Technique */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-4 tracking-tight border-b pb-3 border-gray-100">
                  Why Sideburns Require Specialist Technique
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Sideburns sit at the crossroads of beard and scalp hair. Their direction changes quickly across a very small area. Hair Skill prioritizes hairline design graft distribution and micro-angle control to avoid any harsh or plug-like appearance.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our surgical specialists highlight that sideburns behave differently from scalp hair. They curve taper and grow with specific rhythm. Recreating that rhythm is what makes the result convincing.
                </p>
              </motion.div>

              {/* Section: Why Choose Hair Skill Clinic in Lahore */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Why Choose Hair Skill Clinic for Sideburn Transplantation in Lahore
                </h2>

                

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Guests searching for a sideburn transplant in Lahore often compare dozens of clinics before making a decision. What sets Hair Skill Clinic apart is not only the doctor led approach but the philosophy behind every step. Sideburns demand nuance. They influence facial proportion beard flow and the overall expression. When handled with care the change feels subtle yet meaningful.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Started by Doctors Performed by Doctors</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Hair Skill was founded by surgeons who dedicated years to refining hair restoration techniques. Today every sideburn restoration is shaped through that same expertise. The doctors guide the design supervise graft handling and monitor placement. This is essential for sideburns where natural growth direction and micro changes in angle determine whether results look real or forced.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Institutional Philosophy The Core of Hair Skills Method</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Our institutional philosophy focuses on aesthetics comfort and long term transformation. For a small area like the sideburn this means creating a look that feels balanced from the front profile and three quarter view. Guests appreciate the calm workflow the consistency of the team and the clear explanations during each step. It is more than a medical procedure. It is a curated experience for men and women who want precision without unnecessary stress.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Tailored Experience for International Patients</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Many visitors choose Pakistan because of high quality and favorable pricing but they choose Hair Skill because everything feels organised. Translation support transfers accommodation and follow up are part of the hair transplant travel package Pakistan options. This structure makes the journey easy even for first time travelers.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our supervising doctors often note that the sideburn is a signature feature. When rebuilt correctly it gives the face a grounded confident look. That is why every design even the smallest curve receives careful attention.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Sideburn Transplantation Candidates in Pakistan */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Sideburn Transplantation Candidates in Pakistan
                </h2>

                {/* IMAGE 3: Close up macro marking (Capture image_0aa5c5.jpg: D.T. 24, 2400 Grafts close up) */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 relative mb-8 shadow-md">
                  <img src="/hair-transplant/18.webp" alt="Close up macro view of patient D.T., 24 years old, mapped for 2400 graft sideburn procedure" className="w-full h-full object-cover object-center" />
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Most people considering a sideburn transplant in Pakistan fall into a few familiar groups. Some notice gradual thinning that leaves the area looking soft or uneven. Others struggle with asymmetrical or patchy sideburns that make styling difficult. A number of guests arrive after cosmetic procedures especially facelifts where the natural sideburn line shifted or disappeared.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Then there are individuals with no sideburns from birth or those who lost them because of scars burns trauma in the sideburn area. Each situation feels different yet the underlying wish is the same: Restore balance and define the facial frame again.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Many international patients ask whether sideburn restoration suits their gender age or hair type. Sideburn design is adaptable. For men it often supports stronger jaw definition and blends with beard patterns. For women especially those experiencing post-facelift sideburn loss or distortion the goal tends to be soft framing without creating a masculine look.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  When frontal fibrosing alopecia affecting sideburns is present the doctors examine stability first. Treating an active condition without proper assessment would limit the long term outcome.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-3">Who benefits most</h3>
                    <p className="text-black text-base md:text-lg font-medium mb-3">People who gain the strongest results usually fit one of these:</p>
                    <div className="space-y-2 ml-2">
                      {[
                        "Visible thinning on one or both sides",
                        "Permanent gaps from injury or surgery",
                        "Unbalanced beard density",
                        "Shifted or removed sideburns after facelift",
                        "Genetic absence of sideburns"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">When a transplant may not be advised</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Some guests learn that timing matters. Active autoimmune scalp conditions unstable hair loss or limited donor supply can affect suitability. In these cases Hair Skill focuses on medical evaluation before any next step.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical leadership explains that sideburn evaluation is more than counting grafts. It is about matching the patients personality beard flow and long term goals. They often say a well designed sideburn can change the mood of the face without changing anything else.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: How Sideburn Transplantation Is Done at Hair Skill Clinic */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  How Sideburn Transplantation Is Done at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A sideburn restoration at Hair Skill follows a calm structured process built around comfort and precision. The first step is a detailed facial analysis where the doctors study angles density and long term grooming habits.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Guests often arrive expecting a quick conversation yet they appreciate how thoroughly the team reviews natural growth direction existing beard patterns and the condition of the donor area at back or sides of the scalp. This early planning stage sets the foundation for results that feel authentic.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Once the design is agreed on the medical team prepares the donor zone. Most procedures use FUE sideburn hair transplant or DHI direct hair implantation since these allow high control over placement and minimize downtime. The clinic rarely recommends FUT sideburn transplant because linear scarring does not match the delicate nature of facial work. Throughout extraction grafts are examined and sorted to match thickness and texture reinforcing natural flow.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  During implantation the highest attention goes to angle and direction. Sideburns shift rapidly from scalp-like alignment to beard-like curvature so grafts must follow those micro transitions.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Hair Skills doctors guide the team through each placement making sure the density looks balanced on both sides. Patients notice how gentle the environment feels. The conversation stays steady the steps are explained and nothing feels rushed.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our clinical specialists mention that sideburn work is a meeting point of technique and intuition. They remind patients that even a few degrees of angle adjustment can change the entire expression of the face.
                </p>
              </motion.div>

              {/* Section: How Many Grafts Do You Need */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  How Many Grafts Do You Need for a Sideburn Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Most guests want to know how many grafts they will need before planning their trip. Sideburns are small areas yet they require refined density and detailed shaping. A typical sideburn transplant uses fewer grafts than a full beard or scalp procedure but the placement demands far higher precision. The goal is not volume. The goal is believable texture.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Many cases fall between 200 and 600 grafts per side. Some patients with thinning sideburns only need light reinforcement while those with asymmetrical or patchy sideburns may require full redefinition. When working with scars burns trauma in sideburn area graft needs vary based on skin quality and vascularity.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  Patients dealing with post-facelift sideburn loss or distortion often need more careful distribution to rebuild the original contour. Individuals with no sideburns may require a broader plan covering both length and width. Every number is an estimate until the doctor examines the donor region and the natural beard pattern.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-3">Factors that influence graft count</h3>
                <div className="space-y-2 mb-6 ml-2">
                  {[
                    "Desired sideburn length and style",
                    "Calibre difference between beard and scalp hair",
                    "Donor density at the back or sides of the scalp",
                    "Skin condition in scarred or post surgical areas",
                    "Whether the sideburn connects to the beard"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-4">
                  Hair Skill focuses on long term harmony. The doctors avoid over harvesting especially for guests who may later address beard or scalp needs. Grafts are allocated in a way that respects future goals.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our restorative surgeons highlight that graft numbers only make sense in context. They believe the real question is how each graft contributes to symmetry and flow not how many can be placed.
                </p>
              </motion.div>

              {/* Section: Before and After Results */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Sideburn Transplant Before and After: What Results Can You Expect
                </h2>

                

                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A well designed sideburn transplant creates a subtle but powerful shift in facial balance. Most guests describe the final look as something that feels naturally theirs rather than surgically added. This is the result of precise angle control careful graft distribution and a design approach that respects facial symmetry. When executed correctly sideburns begin to frame the face sharpen the jawline and connect smoothly with beard or temple hair.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Understanding the timeline helps reduce anxiety. The first two weeks are dedicated to healing. Mild swelling is normal. Tiny crusts form and fall within 10 to 15 days which is why many patients mention short recovery minimal discomfort. Around week two to six shedding of transplanted hair after a few weeks is expected. It surprises newcomers but marks the start of new growth ahead.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Early regrowth appears at three to four months. Density builds between months five and nine. For most guests results visible after 6 to 12 months reflect the complete transformation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  The final texture blends with natural hair. This is where men notice improved facial framing and where sideburn transplant for women creates a softer contour after facelifts. Guests with post-facelift sideburn loss or distortion usually appreciate how restored length returns harmony to their profile. Those with scars often share that the new growth hides previous traces of injury.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Before and after journeys vary. Some aim for clean narrow sideburns. Others want a fuller connection to the beard. What remains constant is the pursuit of realism.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our senior physicians state true success is when no one can tell which hairs were transplanted. The best compliments come from people who notice the improvement but cannot explain why the face looks more balanced.
                </p>
              </motion.div>

              {/* Section: Recovery Timeline */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Recovery After Sideburn Transplant at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-8">
                  Healing after a sideburn transplant is usually quick and manageable. The treated area is small the technique is refined and the aftercare steps are straightforward. Guests often feel surprised by how fast they return to their routines. Still knowing what each stage looks like helps reduce worry and sets expectations for a calm experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#772424] mb-1 block">Phase 1</span>
                      <h3 className="text-lg font-black text-[#772424] mb-2">First 10 to 15 Days</h3>
                      <p className="text-black font-medium text-sm leading-relaxed">Warmth mild swelling and tiny crusts form around grafts falling naturally within two weeks during simple gentle washing.</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#772424] mb-1 block">Phase 2</span>
                      <h3 className="text-lg font-black text-[#772424] mb-2">Shedding Staging</h3>
                      <p className="text-black font-medium text-sm leading-relaxed">Transplanted shafts shed between weeks two and six. This is necessary root remodeling before new sprouts emerge around month three.</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#772424] mb-1 block">Phase 3</span>
                      <h3 className="text-lg font-black text-[#772424] mb-2">Full Noticeability</h3>
                      <p className="text-black font-medium text-sm leading-relaxed">Meaningful density anchors between months five and nine with ultimate mature facial balance settling inside 6 to 12 months.</p>
                    </div>
                  </div>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                  Our medical team notes recovery is not about speed but steady progress. When patients follow simple steps and trust the process the new sideburns settle in naturally and blend with existing facial hair.
                </p>
              </motion.div>

              {/* Section: Risks Side Effects and Safety */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Risks, Side Effects, and How Hair Skill Keeps You Safe
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A sideburn transplant is a low-risk procedure when performed by trained specialists yet guests deserve a clear picture of what to expect. Hair Skill takes a transparent approach. Patients feel more at ease when they understand both normal healing responses and rare complications that can occur.
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Common and Temporary Side Effects</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">Most side effects are mild and short lived. Swelling around the cheek or temple area is normal during the first days. Tiny crusts form around each graft and naturally fall within 10 to 15 days which aligns with the typical short recovery minimal discomfort experience patients report. Some redness may stay a little longer especially if the skin is naturally sensitive. Guests with scars burns trauma in sideburn area may notice slower blending as the skin remodels.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Less Common Risks & Technical Safety</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-3">Occasionally patients worry about infection poor graft growth or unnatural direction. These risks usually appear when grafts are handled roughly or placed without respecting natural growth direction facial flow or hairline design. Hair Skills internal training and core philosophy help prevent this. Every team member follows doctor-led planning to protect grafts and preserve facial symmetry.</p>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">When guests arrive with post-facelift sideburn loss or distortion the doctors assess incision lines and skin tension to avoid overpacking grafts into compromised areas. If frontal fibrosing alopecia affecting sideburns is suspected evaluation comes first so grafts are not placed into active inflammation. Modern methods like FUE sideburn hair transplant and DHI direct hair implantation reduce scarring and allow precise control across tight curves.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our clinical directors share that real safety comes from preparation. When planning is calm and detailed healing becomes predictable and the result blends effortlessly.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Sideburn Transplant Cost Ranges in Pakistan (PURE PKR TIERS / NO NUMERIC PRICES) */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Sideburn Transplant Cost Ranges in Pakistan
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Many guests begin their research by comparing sideburn transplant cost ranges in Pakistan with upper tier brackets in the UK EU or US. The difference can feel dramatic. Most international patients quickly notice that healthcare packages lean heavily in Pakistans favor offering accessible local PKR investment brackets.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Lower regional operating expenses and high medical expertise make Lahore a strong destination for facial hair restoration. Still patients should focus first on technique safety and natural results especially for an area as visible as the sideburn.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">Typical Package Tiers in PKR at Hair Skill Clinic</h3>
                    <p className="text-black font-medium text-base leading-relaxed">
                      At Hair Skill investment tiers in PKR comfortably cover a wide variety of cases from minor density work to complete facial reconstruction. Smaller touch ups for thinning sideburns tend to sit inside accessible introductory brackets while rebuilding asymmetrical or patchy sideburns congenital absent sideburns or areas affected by scars burns trauma in sideburn area shifts toward comprehensive upper tier package ranges. Guests with post-facelift sideburn loss or distortion often need detailed micro angle adjustments which also influence final tier planning. Procedures performed with FUE or DHI deliver high precision; FUT is avoided.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[#772424]">
                    <h3 className="text-xl font-black text-[#772424] mb-2">What Hair Skills Packages Commonly Include</h3>
                    <p className="text-black font-medium text-base leading-relaxed mb-3">Most sideburn transplant packages in PKR at Hair Skill cover consultation doctor led planning extraction implantation medications and follow up care. </p>
                    <p className="text-black font-bold text-base leading-relaxed border-t border-gray-200/80 pt-3">
                      Our financial counselors note cost makes sense only when compared with result quality. A balanced natural sideburn provides lifelong value far beyond initial investment.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section: Special Focus Post-Facelift & Scar Restoration */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-6 tracking-tight border-b pb-3 border-gray-100">
                  Special Focus: Post-Facelift and Scar Sideburn Restoration
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Certain guests arrive with more complex concerns. Their goal is not just fuller sideburns but the restoration of facial balance after surgery or injury. This is where a sideburn transplant becomes more than an aesthetic choice. It becomes a structural correction. Hair Skill treats these cases with extra attention because small adjustments here significantly influence the overall facial frame.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Post-Facelift Sideburn Loss or Distortion</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed">After a facelift the natural sideburn may shift rise or narrow. Some patients lose the sideburn entirely leaving the face looking sharper than intended. A sideburn transplant in Pakistan offers a reliable way to restore the lost contour. The doctors evaluate incision lines skin tension and blood supply before designing the new sideburn. The goal is to recreate a soft natural taper that blends with temple and cheek hair rather than producing a rigid painted look. Women especially appreciate how this restores openness around the eyes.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#772424] mb-2">Scar Burn Reconstruction & Female Framing</h3>
                    <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-4">Guests with scars burns trauma in sideburn area often assume nothing can be done. In reality facial hair restoration works well when planned carefully. Scar tissue tends to be firmer and less vascular so grafts must be spaced thoughtfully. Women experiencing post-facelift sideburn loss seek a softer framing effect with finer angles and lighter density.</p>
                    <p className="text-black text-base md:text-lg leading-relaxed font-bold bg-gray-50 p-6 rounded-2xl border-l-4 border-[#772424]">
                      Our medical specialists mention these cases require sensitivity as much as technique. For patients who lost sideburns to surgery or trauma the emotional impact is real. Restoring this small area changes how they see themselves again.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* SECTION: FAQS ACCORDION */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-black text-[#772424] mb-8 tracking-tight border-b pb-3 border-gray-100">
                  Sideburn Transplant FAQs
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

              {/* Section: Start Your Transformation CTA */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-black text-[#772424] mb-4 tracking-tight">
                  Start Your Sideburn Transformation at Hair Skill Clinic
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  A well crafted sideburn transplant does more than fill a gap. It restores balance sharpens expression and reconnects you with a look that feels genuinely yours. Whether you are dealing with thinning sideburns asymmetrical or patchy sideburns post-facelift sideburn distortion or long standing concerns like congenital absent sideburns a tailored plan can change how you feel every time you look in the mirror.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-6">
                  Hair Skill Clinic approaches sideburn restoration with precision and empathy. Every design is doctor led. Every graft is placed with intention. Every guest receives clear guidance through recovery and long term care. International patients find the journey smooth thanks to organised travel support and welcoming hospitality. The clinics experience across FUE sideburn hair transplant and DHI direct hair implantation ensures your result blends naturally with beard or temple hair.
                </p>

                <h3 className="text-2xl font-black text-[#772424] mb-4">Key Benefits</h3>
                <div className="space-y-3 mb-8 ml-2">
                  {[
                    "Full Customisation: Your sideburns are designed to match your beard type hairstyle and facial proportions",
                    "Minimal Downtime: Tiny micro incisions heal quickly. Most guests resume daily life soon after treatment",
                    "Long Lasting Results: Transplanted hairs behave like natural beard hair once matured",
                    "Subtle Yet Powerful Change: Guests often describe the result as a quiet improvement that elevates their entire look"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><span className="text-[#772424] font-black text-lg">•</span><p className="text-black text-base md:text-lg font-bold">{item}</p></div>
                  ))}
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed font-extrabold">
                  Your face carries your story. Let us help it feel complete again. Contact Hair Skill Clinic to schedule your consultation and begin your sideburn transformation with a team dedicated to natural looking long lasting results.
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
                    <input type="checkbox" id="sbPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="sbPrivacy" className="text-xs text-white/80 cursor-pointer">
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