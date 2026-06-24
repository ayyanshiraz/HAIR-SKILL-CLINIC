"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { countries, type Country } from "../data/countries";

// --- STRICT ANIMATION TUPLE ---
const customEase: [number, number, number, number] = [0.2, 0.65, 0.3, 0.9];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: customEase 
    } 
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      delay: 0.2,
      ease: customEase 
    } 
  }
};

export default function AfterProcedureClient() {
  // --- FORM STATES ---
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the After Procedure Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Defeats Google Chrome forced white Autofill override
  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
      {/* --- PAGE HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-gray-50 border-b border-gray-200 px-6"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/patient-guide" className="hover:text-[#772424] transition-colors">Patient Guide</Link>
            <span>/</span>
            <span className="text-[#772424]">After Hair Transplant Procedure</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            After Hair Transplant Procedure
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {/* Main Banner Image */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeUp}
                className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-gray-900 relative mb-10 shadow-xl group"
              >
                <img 
                  src="/guide/after-procedure-banner.jpg" 
                  alt="Patient recovering after hair transplant procedure at Hair Skill Clinic" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  A.P, 33, 3750 Grafts, © Hair Skill Clinic
                </div>
              </motion.div>

              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12 flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Hair Transplant After Procedure: What to Expect and What to Pay Attention
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  <span className="font-bold underline decoration-[#C5A059]">After Procedure;</span> One of the most critical phases of your hair transplant process is aftercare. During the procedure, local anesthesia is used to numb the scalp and ensure your comfort. Hair restoration surgery is a permanent solution for hair loss and can make you look 5-10 years younger than your actual age. Androgenetic alopecia is the most common cause of hair loss treated with hair transplant procedures. Dr. Levent Acar has performed over 20,000 successful hair transplants in more than 16 years, establishing a high level of expertise. The choice of hair transplant method, such as Micro Sapphire DHI, plays a crucial role in achieving natural-looking results. The Micro Sapphire DHI method is known for offering the highest graft survival rates due to its minimally invasive approach and precision. We invite you to schedule a free consultation with our hair transplant experts for personalized advice and treatment planning.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Once you and your doctor complete a smooth and successful operation, there will be some things you will be encountering and some essential things you will need to avoid and pay attention to.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  So, there will be exact information about what you must and must not do. If you want natural-looking hair soon, you must follow up on some necessities! A booklet will be handed out for that.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Introduction to Hair Transplant Aftercare
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  After undergoing a hair transplant surgery, the journey to fuller hair doesn’t end in the operating room—it continues with diligent aftercare. Proper hair transplant aftercare is essential for supporting the survival of your hair grafts and encouraging healthy hair growth. The post hair transplant period is a critical phase for optimal results, requiring careful management and strict adherence to aftercare instructions. The way you care for your scalp and transplanted hair in the days and weeks following surgery can make a significant difference in your final results. By following your hair transplantation clinic’s guidelines and being mindful of your daily habits, you help create the ideal environment for your new hair to thrive. Remember, the success of your hair transplant is not just about the procedure itself, but also about the care you provide during the crucial recovery period.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Hair Transplant Consultation: Setting Expectations and Planning for Aftercare
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  A successful hair transplant journey begins with a thorough consultation. During this initial meeting, your hair transplant expert will carefully assess your hair loss pattern and discuss the most suitable hair transplant procedure for your needs. This is your opportunity to ask questions about the process, understand what the surgery involves, and set realistic expectations for your hair restoration results. Your specialist will also walk you through the essentials of hair transplant recovery, including how to manage any discomfort, prevent infection, and promote healthy healing. By the end of your consultation, you’ll have a clear roadmap for your hair restoration, including personalized aftercare instructions to help you achieve the best possible outcome. Taking the time to plan and prepare at this stage ensures you’re confident and informed every step of the way.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Hair Transplant Procedure Steps: What Happens Before Aftercare Begins
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Understanding the steps involved in a hair transplant procedure can help you feel more at ease on the day of your surgery. The process typically starts with the administration of local anesthesia to ensure your comfort throughout the procedure. Next, the donor area—usually at the back or sides of your head—is prepared for harvesting using advanced techniques like follicular unit extraction (FUE) or strip harvesting. Once the healthy hair follicles are collected, your surgeon will create tiny incisions in the recipient area of your scalp, carefully planning the placement for the most natural look. The harvested grafts are then meticulously implanted into these incisions. After the hair transplant procedure is complete, you’ll receive detailed instructions on how to care for your transplanted area, including how to gently wash your hair, manage any discomfort, and prevent infection. Immediate aftercare is crucial for protecting your new grafts and supporting a smooth recovery.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Hair Transplant Types: How Different Methods Affect Recovery
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  There are several hair transplant methods available, each with its own approach and recovery considerations. FUE (follicular unit extraction) is a popular, minimally invasive technique that involves extracting individual hair follicles from the donor area and implanting them into the recipient area. FUT (follicular unit transplantation) involves removing a strip of hair-bearing skin, which can result in a slightly longer recovery time. Direct hair implantation (DHI) uses a specialized tool to place grafts directly into the scalp, often allowing for precise placement and potentially faster healing. Regardless of the method chosen, it’s important to follow your clinic’s aftercare instructions closely—this includes gently washing your hair, avoiding strenuous exercise, and taking steps to prevent infection in the transplanted area. Your hair transplant expert will recommend the best method for your needs and guide you through a recovery plan tailored to your procedure.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Hair Transplant Cost: Financial Considerations for Your Recovery Journey
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  When considering a hair transplant, it’s important to factor in the financial investment alongside the potential for long-lasting hair growth. The cost of a hair transplant procedure can vary significantly, depending on the clinic, the expertise of the surgeon, and the number of grafts required to achieve your desired results. On average, hair transplant clinics may charge anywhere from $3,000 to $15,000 or more. While this may seem like a substantial expense, many patients find the confidence and natural hair growth they gain to be well worth it. Some clinics offer financing plans or package deals to help make the procedure more accessible. During your consultation, be sure to discuss all costs and available payment options so you can plan your hair restoration journey with confidence and peace of mind.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Bruised-Look of Your Scalp
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  After hair transplant surgery, your donor and recipient areas might look bruised, and you will see the red dot-like holes in the donor zone where the grafts are harvested. However, there is nothing to be worried about; it is a temporary phase for your first days! Minor oozing and discoloration in the donor and recipient areas are completely normal during this period.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Just hesitate to touch the recipient area for the first two days. It is crucial to avoid any contact with the implanted area to promote healing, prevent infection, and ensure successful hair regrowth. Bruised-look and red holes will heal within 7-10 days. Be aware that certain medications, such as blood thinners and anti-inflammatory drugs, or activities that may cause injury, can increase bleeding risk and should be avoided during the initial recovery period.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium font-bold">
                  Contact your surgeon if you experience excessive bleeding, a fever over 100°F, or any signs of infection.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Redness or Pinkish Discolouration
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Your donor and recipient area may look red or pinkish after the procedure. This is completely normal and part of the healing process, and it will fade gradually after the first 7-10 days.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Mild Pain After Hair Treatment
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Although pain is uncommon after an FUE procedure, you might have mild pain on your first night in your donor area rather than your recipient area. The mild painkiller your doctor prescribes for you will help you out, so do not worry.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  After a fue hair transplant, the typical recovery timeline involves several stages of healing, and it is crucial to follow your surgeon’s aftercare instructions closely to minimize complications and support proper recovery.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  FUE patients should follow specific post-operative care protocols to promote healing, prevent complications, and ensure optimal results after their procedure.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Discharge from Donor/Recipient Area
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The First 1 to 2 nights after the hair transplant surgery, you may experience some discharge (blood or plasma). It is normal to have it. Minor discharge is part of the normal healing process as the implanted grafts settle into the scalp.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Swelling
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Swelling on your forehead and around the eyes is another thing the patients may experience on days 3 and 4, and it usually reaches its peak on days 6-7 and subsides after that.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Applying a gel ice pack to your forehead can help prevent swelling after a hair transplant.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Hair Skill Clinic provides its patients with anti-inflammatory medicines to minimize the swelling for the first few days.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  After your transplant, pay attention to keeping your head elevated during sleep, ideally at a 45-degree angle, for the first few nights. This position is important to minimize swelling and protect the grafts. Try not to lower your head while busy with your phone or a book to reduce your swelling.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  These measures are recommended to prevent and minimize swelling during the post-op period.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Shock Loss
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Do not be worried if your hair happens to shed. It is totally normal; it is the reaction of your body to the treatment you have had. Shock hair loss in the recipient area is very common, affects most patients, and typically begins 2-6 weeks after the procedure. There are three different types of shock loss you may encounter. You may have hair shedding in the area of transplanted hair, donor area, or non-transplanted area.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The transplanted hair will fall out shortly after surgery due to changes in the hair growth cycle, a process known as shock loss, but new hair will begin to grow soon after.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Scabbing and Itching
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Scabbing and itching are common feelings. Itchy feeling on your scalp signs that you are healing. Scabbing may continue 7-10 days after transplantation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Any remaining scabs in the grafted area should be allowed to fall off naturally to avoid dislodging the grafts. Itching, numbness, or tingling may occur after a hair transplant, especially around day 10, but these symptoms should improve over time. Picking at scabs can dislodge grafts and negatively affect the success of the hair transplant.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Hair Growth Cycle: Understanding the Stages of Recovery
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Patience is key when it comes to seeing the final result of your hair transplant. After your procedure, the transplanted hair will go through the natural hair growth cycle, which includes the anagen (growth), catagen (transitional), and telogen (resting) phases. It’s completely normal for the transplanted hair to shed in the weeks following your surgery—this is part of the telogen phase and signals the start of new hair growth. Over the next several months, you’ll notice gradual changes as your new hair begins to grow, thicken, and blend with your existing hair. Factors like genetics, nutrition, and overall health can influence the speed and quality of your hair growth, so following your aftercare plan and maintaining a healthy lifestyle are essential. By understanding the hair growth cycle, you’ll be better prepared for each stage of recovery and can look forward to enjoying the full, natural results of your hair transplant procedure.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Protecting Your Investment: Long-Term Care for Your Hair Transplant
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Your hair transplant is a significant investment in your appearance and confidence, so it’s important to protect it with thoughtful, long-term care. To support ongoing hair growth and maintain the health of your transplanted hair grafts, focus on a healthy diet rich in vitamins and minerals that nourish hair follicles. A healthy diet, rich in minerals and vitamins and low in fats, helps provide the hair implants with a well-oxygenated and nutritious blood supply. Limit strenuous exercise, especially in the early months, to avoid unnecessary stress on the transplanted area. Shield your scalp from direct sunlight, as UV exposure can damage sensitive skin and affect the healing process. Incorporate gentle hair care routines, using products designed for post-transplant hair, to prevent irritation and breakage. Advanced techniques, such as the sapphire fue hair transplant, use sapphire blades for greater precision, quicker healing, and reduced infection risk, supporting long-term hair health. By making these habits part of your daily life, you help ensure that your transplanted hair remains strong, healthy, and vibrant for years to come.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Specialized Aftercare for Different Procedures: Beard Transplant Aftercare
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Beard transplants are a unique form of hair transplantation that require special attention during the recovery process. The facial skin is more delicate than the scalp, making it especially important to follow a tailored aftercare routine. After your beard transplant, gently cleanse the area as directed by your clinic, and apply any recommended antibiotic ointments to reduce the risk of infection. Avoid activities that could disturb the newly placed hair grafts, such as vigorous facial washing or strenuous exercise, until your doctor advises it is safe. By prioritizing these specialized aftercare steps, you can help your new beard grow in naturally and achieve the full, even look you desire.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Cosmetic Surgery Considerations: The Connection Between Hair Transplant and Cosmetic Surgery
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Many people choose to combine hair transplantation with other cosmetic surgery procedures, such as facelifts or eyelid surgery, to achieve a more comprehensive transformation. When planning multiple procedures, it’s important to consider how each surgery may affect the other. For example, some cosmetic surgeries can increase the risk of swelling or bleeding, which may impact the healing of your hair transplant. To ensure the best possible outcome, work closely with a qualified cosmetic surgeon who understands the interactions between different procedures. Careful planning and expert coordination can help you achieve natural-looking results and minimize the risk of complications during your recovery.
                </p>
              </motion.div>

              {/* --- FAQ SECTION --- */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 pt-6 border-t border-gray-200">
                <h2 className="text-3xl md:text-4xl font-black text-[#772424] tracking-tight mb-8">
                  FAQ
                </h2>
                
                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3">How Long Does the Healing Last?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-6 font-medium">
                  Key milestones in the healing process can be tracked by days post-surgery: the donor area typically heals in 7-10 days, and the recipient site also heals within this period. It is fundamental to follow all the post-op advice given by your clinic after a hair transplant to ensure proper healing and optimal results. Most patients experience different stages during their recovery journey. In 2 to 4 weeks, growth of transplanted hair is seen, which may be followed by temporary hair-shedding known as Shock Hair Loss. Complete healing takes 6-12 months, and by 12 months post-surgery, most patients are seeing the full results of their hair transplant, with significant hair growth blending naturally with existing hair.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  You should consider the necessary steps during this process. The first two weeks can be challenging for you. However, you can relax when you complete the first two weeks and gradually return to your routine.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">When Can I See the Results?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  As mentioned before, hair transplantation is a journey, and in this journey, you must be patient. Almost every week, your transplanted hair will be in the process of healing and getting better. Be aware of the stages you are going through; you will understand the transformation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  New hair growth typically begins at the end of the second month, with the first hairs being fine and thin. Most patients will see the full results of their hair transplant within 8 to 12 months after the procedure. Excellent hair transplant results are often characterized by a natural-looking hairline and thick new growth. Patient testimonials frequently highlight life-changing transformations and high satisfaction with the final result.
                </p>
                <ul className="list-disc ml-8 text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  <li>The first results are seen in 4-6 months.</li>
                  <li>In 12 months, good results are seen.</li>
                  <li>In 18 months, you will have your final results.</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Will I Need to Use a Bandage After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-2 font-medium">
                  If there is swelling in the front head area, we will apply an elastic bandage to limit it.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Your wound dressings will be changed in the Hair Skill Clinic the next day after the surgery.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">When Does Hair Transplant Start to Grow?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  The hair growth starts almost immediately after the surgery. Two weeks after the surgery, you can already see the first outgrowths when the scabs will be off. It is normal for the new grafts (transplanted follicles) to shed initially, but new hair growth typically begins at the end of the second month, with the first hairs being fine and thin. This hair growth and maturation will continue up to 12-18 months after the surgery.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">How should I sleep after the hair transplant surgery?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  After the surgery, you need to pay attention to your sleeping habits. For the first seven (7) days after the surgery (in some cases up to 10 days), to prevent any possibility of damage to transplanted hair, you can sleep only on your back, with two pillows in a slightly elevated position and with a neck pillow that we provide.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  Keeping your head elevated not only reduces swelling but also helps protect the grafted area, supporting proper healing and ensuring the survival of the transplanted follicles.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  A neck pillow will help keep your head and neck position in the same position, preventing it from touching the pads and dislodging the grafts.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can You Lose Transplanted Hair?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  Some patients may experience thinning of their existing hair in the area, referred to as shock loss in their 2-4 months, which is a normal, expected stage of healing and regaining your lost hair.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  It is also completely normal to experience shock hair loss, which is the shedding of transplanted hair, usually occurring 2-6 weeks after a hair transplant.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Take a Shower After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  You can take a shower, but you shouldn’t wash your scalp. You can have it below the shoulder level if you want to shower just after the procedure. Do not stay in the shower cabin for a long time, and keep shower cabin doors slightly opened to avoid too much steam formation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  After the procedure, you shouldn’t wash your hair for the first two days. You can learn how to wash your hair from the video on our Youtube channel. Sometimes if the patient has more bleeding/discharge than usual we can perform the first wash the next day after the surgery after the evaluation by a doctor.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">When Can I Wash My Hair After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  You should avoid washing your hair for the first two days after the surgery. You can learn how to wash your hair from the video on our YouTube channel. Sometimes if the patient has more bleeding/discharge than usual we can perform the first wash the next day after the surgery after the evaluation by a doctor.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Please, remember that you should be careful with your recipient area the first 10-14 days after the surgery. You can wash your hair normally as you used to before the surgery 10-14 days after. The hallmark is after the scabs are shed off.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Use a Hair Dryer?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  Please let your hair air dry for the first six (6) months. It is because of the hair dryer’s heat, which can damage your hair follicles. If you start to use a hairdryer, you are recommended to set it to low heat.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Additionally, avoid using aggressive hair products, such as gels, lacquers, waxes, or colorings, as these can harm your scalp and newly transplanted hair. For hair maintenance after a transplant, it is best to use mild shampoos made from natural ingredients.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Comb My Hair After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  You can comb your donor area. However, your recipient area cannot be combed till you complete your two weeks.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Get a Haircut After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  You can get a haircut one month after the procedure. For the donor area, you can use clippers, while scissors should be used for the recipient area for the first three months.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Dye My Hair After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Because the chemical hair dyes damage the scalp, coloring your newly transplanted hair may not be a good idea for you. If you want to have a good-healing process, you should avoid dying your hair for the first 6-8 weeks after the surgery.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Smoke After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Smoking reduces oxygen and causes poor blood circulation, it can damage your healing process. Avoiding alcohol and tobacco is crucial for maintaining blood flow and circulation to the scalp after a hair transplant. Therefore, you should stop smoking at least 12 hours before the procedure, and you must avoid smoking for two (2) weeks more after your hair transplant surgery. Patients should also abstain from alcohol for 3–5 days after a hair transplant to ensure proper blood flow and healing.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Drink Alcohol After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  Avoid alcohol for the first fourteen (14) days after the surgery.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Alcohol can increase bleeding risk after a hair transplant, so it should be avoided for at least 3–5 days following the procedure.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Exercise After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Exercises should be avoided for the first 2 weeks after the hair transplantation. Light exercise can be resumed after two weeks, but strenuous activity should still be avoided to protect the grafts. Two weeks after the operation, you can start with light exercises without weight lifting. When you complete the first month, you can go with regular activities, and in 2-3 months, you will be free to do close impact sports such as football, basketball, martial arts, etc. There are no restrictions regarding your daily life (going to work, shopping, walking, etc.).
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Wear a Hat or Scarf After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  You can start wearing the hat we provide in your amenity kit 4-5 days after the surgery. If you have your temples reconstructed avoid it for the first 14 days; the hallmark is the shedding of scabs. But it would be best to avoid wearing the hat/scarf/caps for the first 10-14 days after the procedure to prevent any trauma to the grafts. The hat should not be too tight, and there must be a gap between the grafts and the top of the hat. If it is rainy outside, remember to take your umbrella with you to protect your scalp.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">What About Sunlight Exposure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  There are no restrictions regarding your daily routine (going to work, shopping, having some walks and etc.). The only thing we tell our patients is to avoid too much sunlight or ultraviolet light exposure for the first 6 months after the hair transplant surgery. We advise it for two reasons; First of all, it can cause extensive scar formation, and number two, it can cause an altered pigmentation across your scalp. So, for the first 6 months, after the hair transplant surgery if you’re going to be under direct sunlight for a longer period of time (having sunbathing, walking under direct sunlight and etc.) please use a hat, cap, or sunscreen with an SPF of 30 to 50.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  If you want to sunbathe, avoid it for the first 4 weeks after the surgery.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Go to Work After Hair Transplant?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  It depends on the type of job. If it is an office job, you can return to it 3-5 days after the surgery. If you work outdoors and have to put in a lot of effort, avoid them for the first 14 days.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Travel After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  You can travel, there are no restrictions about that. Just be careful about your recipient area, do not touch and do not hit your head anywhere.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Will I Need To Visit the Clinic After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Unless there is an emergency, you do not need to visit the Hair Skill Clinic. Your case manager and doctors will follow your whole process. Reputable hair transplant clinics provide ongoing support and follow-up care to ensure optimal results for their patients. You should send your photos of the transplanted area for the Hair Skill team to check your healing process. You can always get in contact with your case manager if you happen to have some considerations after your surgery.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">What Should I Do If My Swelling Progresses?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Do not worry about your swelling progressing. Cold compressions for 10 minutes every 1 hour will help you out alongside a gentle massage to relieve your swelling.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">When Can I Start Drinking Tea or Coffee?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  You can have beverages with caffeine inside even on the day of surgery. But we advise avoiding it on the day of surgery because caffeine can cause some dilation of blood vessels that may lead to more bleeding. You can start having tea or coffee safely the next day after the surgery.
                </p>
              </motion.div>

              {/* Conclusion Section */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Conclusion: Key Takeaways for a Successful Recovery
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  A successful hair transplant recovery is built on a foundation of informed, consistent aftercare. To maximize your hair growth and protect your results, follow a healthy diet, avoid strenuous exercise, and limit exposure to direct sunlight. Gently wash your hair with a special shampoo as recommended by your clinic, and avoid scratching the transplanted area to prevent infection and support healing. Partnering with experienced hair transplant experts ensures you receive personalized advice and support throughout your recovery journey. By taking these proactive steps and maintaining good habits, you can enjoy the full benefits of your hair transplant and look forward to a healthy, natural head of hair for years to come.
                </p>
              </motion.div>

            </div>

            {/* RIGHT SIDE: STICKY CONSULTATION FORM */}
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
                    <input type="checkbox" id="afterPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="afterPrivacy" className="text-xs text-white/80 cursor-pointer">
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