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
                  src="/patient-guide/7.webp" 
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
                  After the procedure, one of the most critical phases of your hair transplant process is aftercare. During the procedure, local anesthesia is used to numb the scalp and ensure your comfort. Many patients ask if FUE hair transplant is safe. The medical answer is an absolute yes when performed by certified experts. Hair restoration surgery is a permanent solution for hair loss and can make you look 5 to 10 years younger than your actual age, leading many satisfied patients to realize if a hair transplant is worth it. Androgenetic alopecia is the most common cause of hair loss treated with these advanced procedures. Our leading doctors have performed over 20,000 successful hair transplants in more than 16 years, establishing a high level of international expertise.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The choice of method, such as Micro Sapphire DHI, plays a crucial role in achieving natural-looking results. The Micro Sapphire DHI method is known for offering the highest graft survival rates due to its minimally invasive approach and maximum precision. We warmly invite you to schedule a free consultation with our experts for personalized advice and treatment planning, whether you are looking for the best hair transplant near me in Lahore, Karachi, Multan, or Rawalpindi.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Once you and your doctor complete a smooth, successful operation, there will be natural bodily reactions you will experience, along with essential dos and donts after a hair transplant that you will need to pay close attention to. There will be exact medical information about what you must and must not do. If you want natural-looking hair soon, you must strictly follow up on some daily necessities! A complete clinical booklet will be handed out to you for that purpose.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Introduction to Hair Transplant Aftercare
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  After undergoing a surgical restoration, the journey to fuller hair does not end in the operating room; it continues with diligent aftercare. Proper post-op care is essential for supporting the survival of your delicate hair grafts and encouraging healthy new hair growth. The post-hair transplant period is a critical phase for optimal results, requiring careful daily management and strict adherence to medical instructions. The specific way you care for your scalp and transplanted hair in the days and weeks following surgery can make a massive difference in your final aesthetic results. By following your clinics guidelines and being highly mindful of your daily habits, you help create the ideal biological environment for your new hair to thrive. Remember, the ultimate success of your procedure is not just about the surgery itself but also about the dedicated care you provide during the crucial recovery period.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Hair Transplant Consultation: Setting Expectations and Planning for Aftercare
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  A successful restoration journey always begins with a thorough clinical consultation. During this initial meeting, your expert will carefully assess your specific hair loss pattern and discuss the most suitable procedure for your needs. This is your perfect opportunity to ask important questions about the process, understand what the surgery involves, and set highly realistic expectations for your future results. Many patients ask if you have to shave your head for a hair transplant. Your specialist will explain the exact requirements based on the FUE or DHI method chosen for you. Your specialist will also walk you through the essentials of recovery, including how to safely manage any discomfort, prevent scalp infection, and promote healthy tissue healing. By the end of your detailed consultation, you will have a clear roadmap for your treatment, including personalized aftercare instructions to help you achieve the absolute best possible outcome.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Hair Transplant Procedure Steps: What Happens Before Aftercare Begins
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Understanding the medical steps involved in a hair transplant procedure can help you feel much more at ease on your surgery day. The process typically starts with the administration of local anesthesia to ensure your complete comfort throughout the procedure. Next, the donor area located at the back or sides of your head is prepared for harvesting using advanced techniques like follicular unit extraction. Once the healthy hair follicles are collected, your surgeon will create tiny microscopic incisions in the recipient area of your scalp, carefully planning the exact angle and placement for the most natural look. The harvested grafts are then meticulously implanted into these incisions. After the procedure is fully complete, you will receive detailed instructions on how to care for your transplanted area, including how to gently wash your head, manage any slight discomfort, and prevent any bacterial infection. Immediate aftercare is highly crucial for protecting your new grafts and supporting a smooth biological recovery.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Hair Transplant Types: How Different Methods Affect Recovery
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  There are several advanced methods available, each with its own unique approach and specific recovery considerations. FUE is a highly popular, minimally invasive technique that involves extracting individual hair follicles from the donor area and implanting them into the recipient area. FUT involves removing a strip of hair-bearing skin, which can sometimes cause a slightly longer recovery time. Direct hair implantation uses a specialized pen tool to place grafts directly into the scalp, often allowing for extremely precise placement and potentially faster healing. Regardless of the method chosen, it is very important to follow your clinics aftercare instructions closely. This includes gently washing your hair, avoiding strenuous physical exercise, and taking preventative steps against infection in the transplanted area. Your medical expert will recommend the best method for your specific needs and strictly guide you through a recovery plan tailored to your procedure.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Bruised Look of Your Scalp
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  After the surgery, your donor and recipient areas might look bruised. You will see red dot-like holes in the donor zone where the grafts are harvested. However, there is absolutely nothing to be worried about. It is a temporary healing phase for your very first days! Minor oozing and skin discoloration in the donor and recipient areas are completely normal biological responses during this period.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Please hesitate to touch the recipient area for the first two days. It is crucial to avoid any physical contact with the implanted area to promote fast healing, prevent infection, and ensure successful hair regrowth. The bruised look and red holes will heal perfectly within 7 to 10 days. Be highly aware that certain medications, such as blood thinners and anti-inflammatory drugs, or activities that may cause physical injury, can increase bleeding risk and should be strictly avoided during the initial recovery period. Contact your surgeon immediately if you experience excessive bleeding, a fever over 100 degrees, or any severe signs of infection.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Redness or Pinkish Discoloration
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Your donor and recipient area may naturally look red or pinkish after the procedure. This is completely normal and a natural part of the healing process, and it will fade gradually after the first 7 to 10 days.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Mild Pain After Hair Treatment
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Although pain is very uncommon after an FUE procedure, you might have mild pain on your first night in your donor area rather than your recipient area. The mild painkiller your designated doctor prescribes for you will definitely help you out, so do not worry. After an FUE procedure, the typical recovery timeline involves several stages of skin healing. It is crucial to follow your surgeons aftercare instructions closely to minimize complications and support proper tissue recovery. Patients should follow specific postoperative care protocols to promote rapid healing, prevent complications, and ensure optimal aesthetic results after their procedure.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Discharge from Donor and Recipient Area
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The first 1 to 2 nights after the surgery, you may experience some fluid discharge containing blood or plasma. It is very normal to have. Minor discharge is a standard part of the normal healing process as the newly implanted grafts securely settle into the scalp tissue.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Swelling
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Many patients wonder how many days swelling after a hair transplant lasts. Swelling on your forehead and around the eyes is another natural thing that patients may experience on days 3 and 4. It usually reaches its absolute peak on days 6 and 7 and completely subsides after that. Applying a gel ice pack to your forehead can help prevent excessive swelling.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Hair Skill Clinic provides its patients with specialized anti-inflammatory medicines to minimize the swelling for the first few days. After your transplant, pay strict attention to keeping your head elevated during sleep, ideally at a 45-degree angle, for the first few nights. This specific resting position is critical to minimize fluid swelling and protect the fragile grafts. Try not to lower your head while busy with your mobile phone or a book to reduce your swelling. These medical measures are strongly recommended to prevent and minimize facial swelling during the post-op period.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Shock Loss
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Do not be worried if your new hair happens to shed. It is totally normal; it is the natural reaction of your body to the medical treatment you have had. Shock hair loss in the recipient area is very common, affects most patients worldwide, and typically begins 2 to 6 weeks after the procedure. There are three types of shock loss you may encounter. You may have temporary hair shedding in the area of transplanted hair, the donor area, or the non-transplanted area. The transplanted hair will fall out shortly after surgery due to biological changes in the hair growth cycle, but robust new hair will begin to grow soon after.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Scabbing and Itching
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Scabbing and itching are very common physical feelings. An itchy feeling on your scalp simply signs that you are successfully healing. Scabbing may continue 7 to 10 days after transplantation. Any remaining dry scabs in the grafted area should be allowed to fall off completely naturally to avoid dislodging the delicate grafts. Itching, numbness, or tingling may occur, especially around day 10, but these symptoms should rapidly improve over time. Picking at scabs with your nails can completely dislodge grafts and negatively affect the overall success of the hair transplant.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Hair Growth Cycle: Understanding the Stages of Recovery
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Patience is the key when it comes to seeing the final result of your procedure. People constantly ask if hair grows after transplant, and the answer is rooted in the natural hair growth cycle, which includes the anagen growth, catagen transitional, and telogen resting phases. It is completely normal for the transplanted hair to initially shed in the weeks following your surgery. This is part of the telogen phase and signals the start of new permanent hair growth. Over the next several months, you will notice gradual changes as your new hair begins to grow, thicken, and seamlessly blend with your existing hair. Factors like genetics, daily nutrition, and overall physical health can deeply influence the speed and quality of your hair growth. By understanding this natural cycle, you will be much better prepared for each stage of recovery.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Protecting Your Investment: Long-Term Care
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Your procedure is a significant investment in your appearance and personal confidence, so it is important to protect it with thoughtful, long-term care. To support ongoing hair growth and maintain the health of your newly transplanted grafts, focus on a healthy diet rich in vital vitamins and minerals that nourish hair follicles. A healthy diet, low in unhealthy fats, helps provide the hair implants with a well-oxygenated and highly nutritious blood supply. Limit strenuous physical exercise, especially in the early months, to avoid unnecessary physical stress on the transplanted area. Shield your scalp from direct summer sunlight, as UV exposure can damage sensitive skin and negatively affect the healing process. Incorporate gentle hair care routines, using organic products designed specifically for post-transplant hair, to prevent scalp irritation and hair breakage.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Cosmetic Surgery Considerations
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Many people choose to strategically combine hair transplantation with other cosmetic surgery procedures, such as facelifts or eyelid surgery, to achieve a more comprehensive facial transformation. When planning multiple medical procedures, it is important to consider how each distinct surgery may directly affect the other. For example, some cosmetic surgeries can increase the risk of facial swelling or prolonged bleeding, which may affect the healing of your scalp. To ensure the absolute best possible outcome, work closely with a highly qualified cosmetic surgeon who deeply understands the biological interactions between different procedures. Careful medical planning and expert clinical coordination can help you achieve stunning, natural-looking results and minimize the risk of complications during your recovery.
                </p>
              </motion.div>

              {/* --- FAQ SECTION --- */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 pt-6 border-t border-gray-200">
                <h2 className="text-3xl md:text-4xl font-black text-[#772424] tracking-tight mb-8">
                  FAQ
                </h2>
                
                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3">How Long Does the Healing Last?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-6 font-medium">
                  Key medical milestones in the healing process can be clearly tracked by days post-surgery. The donor area typically heals completely in 7 to 10 days. The recipient site also heals within this same period. It is absolutely fundamental to follow all the post-op advice given by your clinic to ensure proper healing and optimal aesthetic results. Most patients experience different biological stages during recovery. In 2 to 4 weeks, initial growth of transplanted hair is seen, which may be followed by temporary hair shedding known as shock hair loss. Complete internal healing takes 6 to 12 months. By 12 months post-surgery, most patients are happily seeing the full results of their procedure, with significant hair growth blending naturally with their existing hair. The first two weeks can be physically demanding. However, you can deeply relax when you complete the first two weeks and gradually return to your normal daily routine.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">When Can I See the Results?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  As mentioned before, this medical procedure is a journey, and in this specific journey, you must remain patient. Almost every single week, your transplanted hair will be in the biological process of healing and getting noticeably better. New hair growth typically begins at the very end of the second month, with the first hairs being fine and thin. Most patients will see the full results within 8 to 12 months after the procedure. Excellent medical results are often strictly characterized by a natural-looking hairline and extremely thick new growth. Patient testimonials frequently highlight life-changing personal transformations and high satisfaction with the final aesthetic result.
                </p>
                <ul className="list-disc ml-8 text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  <li>The first visible results are seen in 4 to 6 months.</li>
                  <li>In 12 months, very good results are seen.</li>
                  <li>In 18 months, you will finally have your ultimate final results.</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Will I Need to Use a Bandage After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-2 font-medium">
                  If there is noticeable swelling in the front head area, our medical team will apply a soft elastic bandage to safely limit it.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Your sterile wound dressings will be carefully changed in the Hair Skill Clinic the very next day after the surgery.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">When Does Hair Transplant Start to Grow?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Biological hair growth begins almost immediately after surgery. Two weeks after the surgery, you can already see the very first outgrowths when the dry scabs are fully off. It is perfectly normal for the new grafts to shed initially, but new hair growth typically begins at the end of the second month. This steady hair growth and follicular maturation will safely continue up to 12 to 18 months after the surgery.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">How should I sleep after the hair transplant surgery?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  Many patients wonder how to sleep after FUT hair transplant or FUE procedures. After surgery, you must pay attention to your resting habits. For the first 7 days after the surgery, to prevent any possibility of physical damage to transplanted hair, you can safely sleep only on your back, with two soft pillows in a slightly elevated position and with a special neck pillow that we provide.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  Keeping your head safely elevated not only reduces facial swelling but also helps protect the grafted area, supporting proper tissue healing and ensuring the maximum survival of the transplanted follicles.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  A neck pillow will effectively help keep your head and neck position perfectly still, preventing it from touching the bed pads and dislodging the fragile grafts.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can You Lose Transplanted Hair?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  Some patients may experience temporary thinning of their existing hair in the surrounding area, commonly referred to as shock loss, in their 2 to 4 month period, which is a highly normal, fully expected stage of healing and regaining your lost hair.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  It is also completely normal to experience the shedding of newly transplanted hair, usually occurring 2 to 6 weeks after a procedure.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Take a Shower After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  You can shower safely, but you should not wash your healing scalp. You can have the warm water flow below the shoulder level if you want to shower right after the procedure. Do not stay in the hot shower cabin for long. Keep bathroom doors slightly open to avoid too much steam formation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  You should not wash your hair the first two days. You can easily learn how to wash your hair properly from the detailed video on our official YouTube channel.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">When Can I Wash My Hair After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  You should completely avoid washing your hair for the first two days after the surgery. Please remember that you should be highly careful with your recipient area for the first 10 to 14 days after the surgery.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  You can finally wash your hair normally as you used to before the surgery after 14 days have passed. The main hallmark is when the dry scabs are completely shed off.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Use a Hair Dryer?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  Please dry your hair for the first 6 months. This is strictly because of the hair dryers intense heat, which can permanently damage your sensitive hair follicles. If you absolutely must start to use a hairdryer, you are highly recommended to set it to the lowest heat setting.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Additionally, strictly avoid using aggressive hair cosmetic products, such as strong gels, thick lacquers, heavy waxes, or chemical colorings, as these can easily harm your scalp and newly transplanted hair. For safe hair maintenance, it is best to use mild organic shampoos made from pure natural ingredients.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Comb My Hair After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  You can safely comb your donor area at the back. However, your sensitive recipient area cannot be combed at all until you complete your first two weeks of recovery.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Get a Haircut After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  You can safely get a professional haircut one full month after the procedure. For the back donor area, your barber can use electric clippers, while only sharp scissors should be used carefully for the top recipient area for the first three months.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Dye My Hair After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Because harsh chemical hair dyes deeply damage the sensitive scalp, coloring your newly transplanted hair may not be a good idea for you at all. If you want to have a good healing process, you should strictly avoid dying your hair for the first 6 to 8 weeks after the surgery.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Smoke After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Smoking heavily reduces vital oxygen levels and causes poor blood circulation, and it can severely damage your internal healing process. Avoiding alcohol and toxic tobacco is highly crucial for actively maintaining healthy blood flow and circulation to the scalp. Therefore, you should stop smoking at least 12 hours before the procedure, and you must completely avoid smoking for 2 full weeks after your surgery.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Drink Alcohol After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  You must avoid alcohol for the first 14 days after the surgery.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Alcohol can drastically increase your bleeding risk after a clinical procedure, so it should be strictly avoided for at least 3 to 5 days following the surgical operation.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Exercise After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Heavy physical exercises should be completely avoided for the first 2 weeks. Light physical exercise can be safely resumed after two weeks, but strenuous gym activity should still be fully avoided to protect the new grafts. When you complete the first month, you can go with regular fitness activities. In 2 to 3 months, you will be completely free to do high-impact sports such as competitive football, basketball, or martial arts. There are absolutely no restrictions regarding your daily normal life, like going to work, casual shopping, or walking.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Wear a Hat or Scarf After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Patients frequently ask how long to wear a cap after a hair transplant safely. You can start wearing the loose hat we provide in your amenity kit 4 to 5 days after the surgery. If you have your delicate temples reconstructed, avoid it for the first 14 days. It would be best to completely avoid wearing any tight hat, scarf, or cap for the first 10 to 14 days after the procedure to prevent any physical trauma to the grafts. The hat should never be too tight, and there must always be a safe gap between the top grafts and the inner top of the hat.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">What About Sunlight Exposure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-4 font-medium">
                  The only major thing we tell our patients is to completely avoid too much direct sunlight or harsh ultraviolet light exposure for the first 6 months. We strongly advise it for two medical reasons. First, it can cause extensive permanent scar formation. And number two, it can cause altered skin pigmentation all over your scalp.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  So, for the first 6 months, if you are going to be under direct sunlight for a longer period of time, please use a loose protective cap or safe sunscreen with an SPF of 30 to 50. If you passionately want to sunbathe, avoid it strictly for the first 4 weeks after the surgery.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Go to Work After Hair Transplant?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  It completely depends on the physical type of your job. If it is a relaxed indoor office job, you can safely return to it 3 to 5 days after the surgery. If you work actively outdoors and have to put in a lot of heavy physical effort, avoid those tasks for the first 14 days.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Can I Travel After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  You can safely travel; there are absolutely no medical restrictions about taking flights. Just be highly careful about your recipient area, do not touch it with dirty hands, and do not accidentally hit your head anywhere in the airplane.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">Will I Need To Visit the Clinic After the Procedure?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Many patients wonder how many PRP sessions after a hair transplant they will need and when to visit. Unless there is a strict medical emergency, you do not need to physically visit the Hair Skill Clinic constantly. Your dedicated case manager and doctors will follow your whole recovery process remotely. You should securely send clear photos of the transplanted area for the Hair Skill medical team to accurately check your healing process. You can always contact your case manager if you have medical considerations. For PRP sessions, your doctor will advise the exact schedule during your remote follow-ups.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">What Should I Do If My Swelling Progresses?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  Do not worry if your facial swelling slightly progresses. Safe cold compressions for 10 minutes every 1 hour will greatly help you out alongside a gentle forehead massage to rapidly relieve your swelling.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight mb-3 mt-8">When Can I Start Drinking Tea or Coffee?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 font-medium">
                  You can have beverages with active caffeine even on the day of surgery. But we strongly advise avoiding it on the day of surgery because heavy caffeine can cause some internal dilation of blood vessels that may lead to more unexpected bleeding. You can start having regular tea or coffee safely the very next day after the surgery.
                </p>
              </motion.div>

              {/* Conclusion Section */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight mb-2">
                  Conclusion: Key Takeaways for a Successful Recovery
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  A highly successful recovery is beautifully built on a solid foundation of informed, consistent aftercare. To maximize your natural hair growth and protect your aesthetic results, strictly follow a healthy diet, avoid strenuous physical exercise, and heavily limit your exposure to direct harsh sunlight. Gently wash your newly planted hair with a special organic shampoo as recommended by your clinic. Never scratch the transplanted area to successfully prevent infection and support rapid healing. Partnering with experienced medical experts ensures you safely receive personalized professional advice and strong support throughout your entire recovery journey. By securely taking these proactive steps and strictly maintaining good daily habits, you can deeply enjoy the full lifelong benefits of your procedure and look forward to a healthy, completely natural head of hair for many years to come.
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