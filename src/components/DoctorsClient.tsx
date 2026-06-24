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

export default function DoctorsClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Doctors Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
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
            <span className="text-[#772424]">Hair Transplant</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Best Hair Doctor Pakistan: Top Surgeons for Hair Transplant in Pakistan
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-10">
              
              {/* Banner Image Placeholder */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={fadeUp}
                className="w-full rounded-2xl overflow-hidden bg-gray-100 relative mb-4 shadow-lg group"
              >
                <img 
                  src="/doctors-hero.png" 
                  alt="Top Surgeons for Hair Transplant in Pakistan" 
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-1000" 
                />
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">Introduction: What Makes a Hair Doctor the Best in Pakistan and Why It Matters</h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The best hair doctor Pakistan offers combines world-class expertise with advanced surgical techniques, performing over 60,000 hair transplant procedures annually across Lahore’s specialized clinics. Leading surgeons renowned as the best in their field are all part of the expert team at Hair Skill Clinic. As a leading clinic in Lahore, Hair Skill Clinic has a solid reputation for excellence and is the preferred choice for international patients seeking quality hair restoration. Together, they achieve exceptional graft survival rates of 95-99% while treating patients from over 62 countries. This comprehensive guide reveals the top hair transplant doctors, their specialized techniques, success rates, and how to choose the right hair transplant surgeon for your restoration journey.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Pakistan has emerged as the global capital of hair transplantation, with Lahore alone housing over 200 specialized hair transplant clinics. As a top destination for hair transplant Pakistan and hair transplant Lahore, the city enjoys a solid reputation for quality, affordability, and experienced surgeons, attracting patients from around the world. This guide covers essential selection criteria, detailed doctor profiles, cost comparisons, and a step-by-step process to help you make an informed decision for your hair restoration treatment.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Whether you’re dealing with receding hairline, thinning hair, or advanced hair loss, understanding what separates the best hair transplant doctors from the rest will ensure optimal results and lasting satisfaction with your treatment journey.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">Understanding Best Hair Doctors in Pakistan: Key Qualifications and Expertise</h2>
                
                <h3 className="text-xl md:text-2xl font-black text-[#772424] mt-4">Core Qualifications of Top Hair Doctors</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The best hair transplant doctor in Pakistan must meet stringent professional standards that distinguish them from technician-led facilities. Essential qualifications include formal medical credentials with board certifications in dermatology or plastic surgery, plus specialized hair transplantation training through recognized institutions.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Top hair transplant doctors maintain active memberships in prestigious organizations like ISHRS (International Society of Hair Restoration Surgery) or the Pakistani Society of Hair Restoration Surgery. These memberships require ongoing education and adherence to international safety protocols, ensuring patients receive treatment from qualified medical professionals.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Experience metrics separate exceptional surgeons from average practitioners. The best hair doctors typically perform 4,000+ hair transplant procedures annually with documented success rates exceeding 90%. They maintain comprehensive before-and-after portfolios, published case studies, and verifiable patient reviews from international clients.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] mt-4">Advanced Technique Mastery</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Leading hair transplant surgeons in Pakistan specialize in cutting-edge techniques that maximize natural results while minimizing recovery time. Sapphire FUE hair transplant represents the gold standard, using sapphire-tipped blades for precise recipient site creation, supporting faster healing and enabling higher density packing of healthy hair follicles.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Direct Hair Implantation (DHI) offers another advanced approach where hair follicles are extracted and implanted simultaneously using specialized Choi Implanter Pens. This technique reduces the time hair follicles spend outside the body, potentially improving graft survival rates and creating more natural looking results.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The most innovative hair transplant clinics develop proprietary protocols combining multiple techniques. For example, True Philosophy represents an evolution of traditional follicular unit extraction, reportedly achieving up to 99% graft survival rates in documented patient cohorts—significantly exceeding the industry average of 85-95%. These clinics use a comprehensive approach that considers both technical skill and aesthetic outcomes for each patient.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] mt-4">Why Pakistan Has the World’s Best Hair Doctors</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Pakistan performs an estimated 300,000+ hair transplant procedures annually, generating nearly 1 billion USD in medical tourism revenue. This volume creates an environment where hair transplant surgeons develop exceptional expertise through extensive practice, treating diverse patient populations from Western Europe, North America, and beyond.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The cost advantage makes Pakistan’s best hair transplant clinics accessible to international patients. Hair transplant procedures in Pakistan average PKR 150,000 - PKR 350,000, compared to $8,000-$20,000 for comparable treatment in the USA or UK. This 60-70% cost reduction doesn’t compromise quality when choosing established hair transplant doctors with solid reputations. Pakistani clinics are also known for delivering lasting results, ensuring patients enjoy natural-looking hair restoration that endures over time.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Lahore’s concentration of specialized hair transplant clinics creates a competitive environment that drives innovation. The Pakistani government has implemented stringent regulations requiring clinic accreditation and surgeon certification, while the Ministry of Health conducts regular audits to maintain international standards.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Leading Pakistani hair transplant surgeons often speak multiple languages and employ dedicated international patient coordinators, ensuring seamless communication throughout the treatment journey. Most clinics begin the process with a personal consultation to tailor the treatment plan to each patient’s needs. Many clinics offer comprehensive all-inclusive packages covering surgery, accommodation, airport transfers, and post operative care. In addition, each clinic offers a variety of services, including personalized consultations, advanced techniques, and comprehensive aftercare to meet the unique needs of every patient.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">Step-by-Step Guide to Choosing the Best Hair Doctor in Pakistan</h2>
                
                <h3 className="text-xl md:text-2xl font-black text-[#772424] mt-4">Step 1: Research and Initial Assessment</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Begin your selection process by verifying surgeon credentials through official databases. Check Pakistani Medical Association registration to confirm legitimate medical qualifications. Review comprehensive before-and-after photo galleries focusing on cases similar to your hair loss pattern and aesthetic goals.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Request a free consultation and hair analysis through the clinic’s website. Most reputable hair transplant clinics offer virtual consultations where you submit photos for professional assessment. This initial evaluation helps determine if you’re a suitable candidate and provides preliminary graft estimates for your specific needs.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Examine patient testimonials and reviews across multiple platforms, paying attention to long-term results and patient experiences with post operative care. Focus on reviews from patients with similar hair loss patterns and treatment goals to gauge expected results for your situation.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] mt-4">Step 2: Consultation and Treatment Planning</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Schedule detailed consultations with 2-3 shortlisted hair transplant doctors to compare their approaches and recommendations. During these consultations, discuss your specific hair loss pattern, donor area assessment, and realistic expectations for transplanted hair growth and natural appearance.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Evaluate each doctor’s communication style and their medical team’s responsiveness to your questions. The best hair transplant surgeons take time to explain their recommended technique, whether FUE, Sapphire FUE, or DHI, and why it suits your unique pattern of hair loss and facial features.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Compare comprehensive treatment plans including total graft requirements, procedure duration, expected results timeline, and all-inclusive package details. Ensure each proposal includes accommodation, airport transfers, medications, and follow-up care protocols.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] mt-4">Step 3: Final Selection and Booking</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Evaluate aftercare support and long-term follow-up protocols offered by each clinic. The best hair transplant clinics provide detailed post-surgery instructions, 24/7 patient support during recovery, and scheduled follow-up appointments to monitor healing progress and hair growth.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Confirm all package inclusions and verify that your chosen hair transplant surgeon will personally perform the procedure rather than delegating to technicians. Request written confirmation of graft numbers, technique specifics, and expected timeline for seeing final results.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Book your procedure with the required deposit while maintaining clear communication about pre-operative instructions, travel arrangements, and arrival timeline. Prepare for surgery by following your doctor’s specific guidelines regarding medications, alcohol consumption, and hair washing protocols.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">Common Mistakes to Avoid When Choosing a Hair Doctor</h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  <strong>Mistake 1:</strong> Choosing based solely on lowest price without verifying surgeon qualifications. Many patients fall into the trap of selecting hair transplant clinics offering suspiciously low prices, often indicating technician-led procedures rather than doctor-performed surgery. These facilities may lack proper medical oversight, leading to poor aesthetic results and potential complications requiring revision procedures.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  <strong>Mistake 2:</strong> Ignoring technique compatibility with your hair type and loss pattern. Not all hair transplant techniques suit every patient. Some individuals benefit more from Sapphire FUE for its precision, while others may achieve better results with DHI techniques for specific areas. The best hair transplant doctors assess your unique characteristics before recommending the most appropriate approach. Patients experiencing hair thinning require careful assessment to ensure the chosen technique addresses their specific needs.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  <strong>Mistake 3:</strong> Overlooking aftercare support and long-term follow-up services. Successful hair transplantation extends far beyond the surgical procedure itself. Many patients focus solely on the surgery while neglecting the importance of comprehensive post operative care, proper hair washing techniques, and monitoring for potential shock loss or complications.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  <strong>Pro Tip:</strong> Always verify surgeon credentials independently through official medical associations and request multiple consultations before making your final decision. The best hair transplant surgeons welcome questions and provide transparent information about their experience, success rates, and patient outcomes.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">What to Expect After Your Hair Transplant: The Patient Experience</h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Undergoing hair transplant surgery is the first step in a transformative journey toward restoring your natural appearance and self-confidence. After your procedure at Hair Skill Clinic, considered as one of the best hair transplant clinics in Pakistan, you can expect a carefully structured treatment journey designed to deliver optimal results and lasting satisfaction.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The process begins with a free consultation, where your hair transplant doctor will assess your hair loss pattern, donor area, and receding hairline to develop a personalized treatment plan. This initial assessment ensures that your aesthetic goals and expectations are clearly understood, and that the most suitable treatment options—such as the FUE technique, Sapphire FUE hair transplant, or Direct Hair Implantation (DHI)—are selected for your unique needs.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  During the hair transplant procedure itself, patients benefit from advanced surgical techniques and the expertise of a dedicated medical team. Local anesthesia ensures a comfortable, virtually painless experience as healthy hair follicles are carefully extracted from the donor area and implanted into the recipient area. Techniques like Sapphire FUE are especially popular for their ability to achieve natural looking results with minimal scarring, while DHI offers precise placement for a seamless, natural appearance.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Post-operative care is a crucial part of the hair transplantation process. At Hair Skill Clinic, patients receive comprehensive guidance on hair wash routines, medication, and follow-up appointments to monitor healing and hair growth. Adhering to your hair transplant surgeon’s instructions is essential to minimize the risk of shock loss and to support the survival of transplanted hair follicles. The clinic’s holistic approach ensures that all our patients receive personalized care and support throughout their recovery.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  As the months progress, you’ll notice your transplanted hair gradually growing in, blending naturally with your existing hair. While the full results of hair restoration can take up to a year or more to become apparent, most patients begin to see new hair growth within three to four months. The end result is a natural, fuller head of hair that enhances your appearance and boosts your self confidence.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Patients from Western Europe, Pakistan, and beyond consistently praise Hair Skill Clinic for its patient-focused approach, attentive medical team, and commitment to achieving the best hair and aesthetic results. The clinic’s comprehensive post operative care and ongoing support ensure that you feel informed and comfortable at every stage of your treatment journey.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  In summary, the hair transplant experience is a life-changing process that, with the right clinic and doctor, leads to natural results and lasting satisfaction. By choosing a reputable hair transplant clinic and following your surgeon’s guidance, you can look forward to a successful hair restoration journey and the confidence that comes with achieving your aesthetic goals.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">Success Story: Advanced Hair Restoration with Hair Skill Clinic in Lahore</h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  <strong>Case Study:</strong> A 34-year-old software engineer from Islamabad experienced significant hair loss affecting his professional confidence and personal relationships. His receding hairline and crown thinning had progressed to Norwood Stage 4, requiring comprehensive restoration to achieve natural looking results.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  <strong>Starting situation:</strong> The patient had avoided hair transplant surgery for years due to concerns about unnatural appearance and potential complications. After researching Pakistan hair transplants extensively, he chose Hair Skill Clinic based on documented success rates and the innovative True Philosophy technique.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  <strong>Treatment approach:</strong> Hair Skill Clinic’s assessment revealed excellent donor area density suitable for transplanting 4,200 healthy hair follicles using the True Philosophy technique. The procedure took 7 hours with expert doctors of Hair Skill Clinic performing extractions and implantations, ensuring optimal graft placement for natural hair growth patterns.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  <strong>Results achieved:</strong> Twelve months post-surgery, the patient achieved 98% graft survival with complete hairline restoration and significant crown density improvement. His new hair demonstrates natural appearance and growth patterns, requiring no special maintenance beyond regular hair washing and styling. Patient satisfaction surveys indicate complete satisfaction with both aesthetic results and the comprehensive treatment journey.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The transformation restored his self confidence and eliminated the need for concealment strategies he had used for years. Follow-up appointments at 6 and 12 months confirmed healthy transplanted hair growth with no signs of shock loss or complications.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">Frequently Asked Questions About Best Hair Doctors in Pakistan</h2>
                
                <h3 className="text-xl md:text-2xl font-black text-[#772424] mt-4">Q1: How much does the best hair doctor in Pakistan cost compared to other countries?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Top Pakistani hair transplant surgeons charge PKR 150,000 - PKR 350,000 for comprehensive all-inclusive packages, representing 60-70% savings compared to equivalent treatment in the UK (£8,000-£15,000) or USA ($10,000-$20,000). These packages typically include surgery, accommodation, airport transfers, medications, and post operative care, making Pakistan an attractive destination for medical tourism.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] mt-4">Q2: Which hair doctor in Pakistan do international patients prefer?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Hair Skill Clinic attracts significant international attention due to its 99% graft survival rates and doctor-led surgical approach.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] mt-4">Q3: How do I verify a hair doctor’s credentials in Pakistan?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Check membership through official medical databases, verify Pakistani Medical Association registration, and review clinic accreditation certificates from the Ministry of Health. Additionally, examine patient testimonials across multiple independent platforms and request references from previous international patients who achieved successful results.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] mt-4">Q4: What’s the success rate of the best hair doctors in Pakistan?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Top-tier hair transplant surgeons achieve 95-99% graft survival rates with over 98% patient satisfaction based on thousands of documented procedures. These success rates exceed global industry averages due to advanced techniques, experienced medical teams, and comprehensive patient selection protocols.
                </p>

                <h3 className="text-xl md:text-2xl font-black text-[#772424] mt-4">Q5: How long does recovery take with the best hair transplant doctors?</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Most patients return to normal activities within 3-5 days after hair transplant surgery with leading Pakistani surgeons. Complete healing of the recipient area occurs within 10-14 days, while transplanted hair begins visible growth after 3-4 months. Final results typically become apparent 12-18 months post-surgery, depending on individual healing characteristics and hair growth cycles.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight">Conclusion: Key Takeaways for Finding Your Best Hair Doctor</h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Pakistan has become a global leader in medical tourism for hair transplants. Many patients combine their hair transplant treatment with a vacation in Pakistan, enhancing their experience. Patients often receive free consultations via online assessments before traveling to Pakistan for surgery. Advanced techniques like FUE and DHI are commonly offered by clinics in Pakistan. Sapphire FUE involves using sapphire blades for creating incisions during the hair transplant procedure. Micro Sapphire DHI combines both Sapphire FUE and DHI techniques for enhanced results and better graft survival rates. All hair restoration techniques should be tailored to each patient’s specific hair type and aesthetic goals.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Pakistan offers world-class hair transplant doctors with 15+ years of experience achieving 90-99% success rates through advanced surgical techniques and comprehensive patient care. The top surgeons represent the pinnacle of hair restoration expertise with documented results across thousands of international patients.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  When selecting your hair transplant surgeon, prioritize verified credentials, technique compatibility with your hair loss pattern, and comprehensive aftercare support over price alone. The best hair transplant doctors take a patient focused approach, personally performing procedures while ensuring optimal results through proven protocols and safety standards.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  All-inclusive packages starting from PKR 150,000 - PKR 350,000 make Pakistan 60-70% more affordable than Western alternatives without compromising treatment quality. The combination of experienced surgeons, advanced techniques like Sapphire FUE and DHI, and comprehensive medical tourism infrastructure creates an ideal environment for successful hair restoration.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Your next step involves scheduling free consultations with 2-3 top-rated hair transplant doctors to compare their treatment approaches, assess their communication style, and evaluate their comprehensive care protocols. This comparison process ensures you select the best hair doctor for your specific needs, aesthetic goals, and expectations for long-term results.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Take an active role in your treatment journey by thoroughly researching your options, verifying credentials, and choosing a hair transplant surgeon who demonstrates both technical expertise and genuine commitment to your satisfaction and safety throughout the entire process.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Lahore is known for its high concentration of world-class hair transplant centers. Hair Skill Clinic is renowned for personalized treatment plans tailored to meet the unique needs of each patient. Hair Skill Clinic has been awarded as best hair transplant clinic in Lahore many times.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Nearly 50,000 men had regain their hair and self confidence thanks to Hair Skill Clinic. Patients often describe their hair transplant experience in Hair Skill Clinic as life-changing. Many patients express satisfaction with the overall results of their hair transplants with Hair Skill Clinic; Patient testimonials frequently highlight the professionalism of the medical staff during the hair transplant process.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Several patients appreciate the aftercare support provided after their transplant procedures. Our surgeons focus on individualized treatment considering each patient’s facial structure, hairline, and density. They are recognized for their precision, ethical practices, and patient-centric approach in hair transplants. When selecting a hair transplant clinic in Pakistan, consider surgeon qualifications, clinic sanitation, and package transparency.
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
                    <input type="checkbox" id="doctorsPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="doctorsPrivacy" className="text-xs text-white/80 cursor-pointer">
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