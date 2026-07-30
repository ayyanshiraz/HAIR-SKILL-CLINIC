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

export default function NeedleFreeClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the Needle Free Anesthesia Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24 overflow-x-clip">
      
      {/* --- ASYMMETRIC HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="pt-28 lg:pt-36 pb-12 bg-white px-6"
      >
        <div className="max-w-[1300px] mx-auto relative">
          {/* Breadcrumbs pinned to far left with flex-wrap for mobile safety */}
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex flex-wrap items-center gap-2 justify-start">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <Link href="/hair-transplant" className="hover:text-[#772424] transition-colors">Hair Transplant</Link>
            <span>/</span>
            <Link href="/hair-transplant/techniques" className="hover:text-[#772424] active:text-[#772424] transition-colors">Techniques</Link>
             <span>/</span>
            <span className="text-[#772424]">Needle-Free Anesthesia</span>
          </div>
          
          {/* Title centered independently */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight text-center">
            Needle-Free Anesthesia in FUE Hair Transplantation
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLL-ANIMATED PROSE & MAPPED IMAGES */}
            <div className="w-full lg:w-2/3 flex flex-col gap-10">
              
              {/* IMAGE 1: Flagship Hero Visual */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 relative shadow-xl group">
                <img 
                  src="/hair-transplant/25.webp" 
                  alt="Surgeon holding advanced high pressure jet injection device used for Needle Free Anesthesia in Lahore" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 opacity-95 object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white font-bold text-xs tracking-wider bg-black/40 px-4 py-1.5 rounded-md backdrop-blur-xs">
                  Advanced Jet Injection, © Hair Skill Clinic
                </div>
              </motion.div>

              {/* Lead Introduction Section */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col gap-6">
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The primary concern of patients during surgical operations is the fear of feeling pain and soreness during the anesthesia. Most of our patients researching FUE hair transplantation ask questions about feeling pain and how many injections will be given. At the Hair Skill Clinic, we understand that hair restoration should be an exciting journey, not a source of anxiety. Sapphire hair transplantation is performed with local anesthesia, which means that a particular area is numbed with medications given under the skin.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  This method ensures that the patient does not feel any surgical pain during the hair transplant. However, patients who have a needle phobia, or those who are simply worried about the initial discomfort, will feel immense stress at this stage. The most worrying part of the entire operation is always the local anesthesia administration. In recent years, local anesthesia has been applied with various modern methods to reduce this fear and anxiety. Some of these methods are offered to patients with the promise of no pain. If you are searching for a needle-free hair transplant near Lahore or looking for premium care in Karachi, it is essential to understand how modern technology can make your experience comfortable and safe.
                </p>
              </motion.div>

              {/* The Psychology of Needle Phobia */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  The Psychology of Needle Phobia and Surgical Anxiety
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Trypanophobia, or the extreme fear of medical needles, affects a significant percentage of the adult population. When individuals consider restoring their hairline, this fear often becomes a massive psychological barrier. Many men and women delay or completely cancel their plans to achieve a full head of hair simply because they cannot tolerate the thought of scalp injections.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The scalp is a highly sensitive area, densely packed with nerve endings designed to protect the head from injury. When a traditional needle pierces this sensitive skin, the brain immediately registers a sharp pain signal. Furthermore, the anticipation of the needle often causes more distress than the physical puncture itself. Blood pressure rises, the heart rate increases, and the patient enters a state of high alert. Overcoming this barrier requires a modern medical approach. Advanced clinics across the globe, and particularly our elite centers providing a needle-free hair transplant in Pakistan, have recognized the necessity of addressing this psychological hurdle. By removing the visual trigger of the needle, we significantly lower our patients preoperative anxiety levels. Whether you are traveling from Islamabad, Multan, or Rawalpindi, our clinical team focuses heavily on establishing a calm and relaxed environment before the procedure even begins.
                </p>
              </motion.div>

              {/* Understanding Technology */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  Understanding Needle-Free Anesthesia Technology
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  What exactly is a needle-free anesthesia hair transplant? Put simply, it is a revolutionary delivery system that uses high pressure instead of a sharp needle to push anesthetic fluid through the pores of the skin. The needle-free anesthesia method, widely used in many developed countries worldwide, is one of the most effective local anesthesia methods designed to reduce the anxiety of the patient. It minimizes the fear factor and actively facilitates the physicians workflow during FUE hair transplantation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Needle-free anesthesia in sapphire hair transplantation is performed with advanced technology devices commonly referred to as jet injectors. How does the jet injector work? The device relies on a highly calibrated mechanical spring or compressed gas system. When activated, the device forces the anesthetic medication out of a microscopic nozzle at an incredibly high velocity. This intense speed allows the liquid medicine to penetrate the epidermal layer of the skin without requiring a physical needle to puncture the tissue. Once the liquid breaks through the surface, it spreads into the subcutaneous tissue through a concept called diffusion logic. Instead of forming a localized pool of fluid the way a standard syringe does, the high-pressure spray causes the medication to spread out widely and evenly under the skin. This immediate diffusion blocks the pain signals transmitted to the local nerves almost instantly.
                </p>
              </motion.div>

              {/* The Reality */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  The Reality: Is It Completely Pain-Free?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  A crucial aspect of modern medicine is absolute transparency. While marketing slogans often promise a completely painless experience, the medical reality requires a more detailed explanation. Needle-free anesthesia is not pain-free anesthesia. It should not be forgotten that the reason for feeling pain during local anesthesia in FUE hair transplantation is actually the chemical composition of the medicine itself, rather than just the physical technique applied.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Anesthetic agents are acidic by nature. When these acidic fluids interact with the neutral tissues of the human body, they cause a brief and temporary stinging sensation. For this reason, even if needle-free anesthesia removes the sharp prick of the metal needle, it is not completely pain-free. The patient will still feel the pressure of the device against their scalp and a mild stinging sensation as the medication diffuses into the tissue.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  In scientific studies, patients who underwent anesthesia with traditional needles and non-needle anesthesia were closely examined. While the anxiety levels were vastly different, no absolute pain-free difference was detected between the two methods regarding the chemical sting. While conducting research, patients should keep in mind that a needle-free hair transplant is definitely not completely pain-free. However, a needle-free anesthesia hair transplant is incredibly beneficial for patients with needle phobia, as it eliminates the sharp and tearing sensation of a metal needle piercing the scalp.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Moreover, there is an important technical detail that every patient must understand. The most important point that patients who prefer needle-free anesthesia in FUE hair transplantation should know is that after some initial numbness is given through the device, standard microscopic needles will still be used for tumescent anesthesia. Tumescent anesthesia involves injecting a larger volume of fluid to swell the scalp, separate the skin from the skull, and minimize bleeding during extraction. Because the surface is already numbed by the needle-free device, the patient does not feel these subsequent needle injections at all.
                </p>
              </motion.div>

              {/* Anatomy of Scalp */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  The Anatomy of Scalp Sensitivity and Anesthesia Phasing
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  To truly appreciate the value of needle-free systems, it helps to understand how the scalp processes sensation. The human scalp contains a rich network of sensory nerves. Numbing this complex grid requires strategic administration.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  During a standard FUE or Sapphire FUE procedure, local anesthesia is applied to the patient in two distinct phases. The first phase involves numbing the donor area, which is located at the back and sides of the neck. This is done before the graft intake or extraction phase begins. The second phase involves numbing the recipient area, typically the forehead and hairline, before the tiny canals are opened for implantation.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Without a needle-free device, the initial injections into the tight skin of the back of the head can be quite uncomfortable. The skin here is dense, and injecting fluid directly into it causes a rapid expansion of tissue, leading to a sharp pressure response. Using a jet injector first, the doctor creates a numb protective barrier across the skin. Once this superficial layer is devoid of sensation, the deeper tumescent injections can be administered without triggering the pain receptors. This dual-step protocol ensures that the patient experiences the absolute minimum amount of discomfort currently possible in modern surgical hair restoration.
                </p>
              </motion.div>

              {/* Advantages */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  Advantages of the Needle-Free Technique
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium mb-2">
                  Beyond simply reducing the fear of needles, the jet injection technology provides several distinct medical and logistical advantages during a hair transplant procedure:
                </p>
                <ul className="list-disc ml-6 space-y-3 text-black text-base md:text-lg font-medium">
                  <li><strong>Faster Onset of Numbness:</strong> Because the high-pressure spray causes the anesthetic liquid to diffuse rapidly across a wider surface area beneath the skin, the numbing effect takes hold much faster than a standard localized injection. The doctor can proceed with the operation almost immediately.</li>
                  <li><strong>Reduced Risk of Tissue Trauma:</strong> Traditional needles, no matter how thin, act as microscopic blades that cut through tissue, blood vessels, and sometimes the very hair follicles we are trying to preserve. The fluid pressure from a jet injector pushes between the cellular structures rather than slicing through them, minimizing internal tissue trauma.</li>
                  <li><strong>Lower Risk of Infection:</strong> Every time a needle punctures the skin, there is a microscopic risk of introducing surface bacteria into the deeper tissues. Because the needle-free device does not physically penetrate the skin barrier with a sharp object, the risk of cross-contamination or infection is drastically reduced.</li>
                  <li><strong>Less Bruising and Swelling:</strong> The diffuse spread of the medication prevents the severe pooling of fluid that often leads to heavy bruising. Patients typically experience a cleaner and faster recovery in the initial days following the surgery.</li>
                  <li><strong>Enhanced Surgeon Focus:</strong> When a patient is writhing in pain or highly anxious, it creates a stressful environment for the surgical team. By keeping the patient calm and comfortable, the surgeon can maintain absolute focus on the delicate task of extracting and implanting thousands of hair follicles with artistic precision.</li>
                </ul>
              </motion.div>

              {/* Synergy */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  The Synergy Between Sapphire FUE and Needle-Free Technology
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  When discussing modern hair restoration, it is impossible to separate the anesthesia delivery from the actual surgical instrumentation. The integration of sapphire blades with a needle-free anesthesia hair transplant creates a powerful synergy that defines the modern standard of care. Traditional FUE utilizes steel blades to open the microcanals in the recipient area. Steel, while effective, loses its microscopic edge quickly and can create slightly irregular incisions, leading to a rougher healing process. Sapphire blades, carved from precious gemstones, retain a molecularly perfect and ultra-sharp edge.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  When a patient receives needle-free anesthesia, the tissue is preserved in a much calmer and less traumatized state before the incisions are even made. Because the jet injector diffuses the liquid evenly, the scalp does not become overly distorted or lumpy, which sometimes happens with heavy and localized needle injections. A smooth and undistorted scalp provides the perfect canvas for the surgeon. The doctor can then use the ultra-sharp sapphire blades to create precise, densely packed incisions that follow the exact natural angle of the native hair. This combination of smooth anesthesia delivery and flawless incision creation results in higher graft survival rates, faster healing times, and an aesthetic outcome that is virtually indistinguishable from natural hair growth.
                </p>
              </motion.div>

              {/* Preparation */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  Preparing for Your Procedure to Minimize Pain
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  While our technology does the heavy lifting in reducing your discomfort, there are physiological steps you can take to lower your pain perception even further. Preparing your body and mind before you arrive at our clinic in Lahore or Karachi can make a noticeable difference.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  First, we strongly advise patients to restrict their caffeine intake for at least twenty-four to forty-eight hours before the surgery. Caffeine stimulates the central nervous system, increases blood pressure, and heightens nerve sensitivity. A highly caffeinated patient is statistically more likely to feel the acidic sting of the anesthetic medication.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Second, a good night of sleep is a powerful natural analgesic. Sleep deprivation increases stress hormones like cortisol, which lowers the natural pain threshold of the body. Arriving at the clinic well rested ensures your nervous system is calm and resilient.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Third, hydration plays a vital role in tissue health. Well-hydrated skin is more elastic and receptive to the diffusion logic of the jet injector. Drinking plenty of water in the days leading up to your surgery ensures that the high-pressure spray can distribute the medication smoothly through the cellular structures of your scalp.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Finally, mental preparation is key. Acknowledging that there will be a brief period of mild discomfort, rather than expecting absolute zero sensation, helps prevent the shock factor. Trusting your surgical team and understanding the science behind the needle-free hair transplant allows you to relax into the process, letting our experts handle the rest.
                </p>
              </motion.div>

              {/* Comprehensive Journey */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  The Comprehensive Hair Transplant Journey
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  A successful hair transplant is a marathon, not a sprint. Sapphire hair transplant operations take approximately 6 to 8 hours. In contrast, administering local anesthesia takes about 15 minutes in total. Once those crucial 15 minutes are over, patients do not feel any pain for the remainder of the surgery.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Many patients bring their favorite music, listen to podcasts, watch movies, or even fall asleep during the extraction and implantation phases. The realization that the 8-hour surgery is entirely painless after the initial needle-free administration brings immense relief. When patients return to their homes in Lahore, Karachi, or Multan, they often report that the fear they had before the surgery was completely disproportionate to the experience.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  The healing phase is equally manageable. While the scalp may feel tight or slightly sore as the anesthesia wears off later that evening, basic over-the-counter pain relievers provided in our aftercare kit are more than sufficient to manage any discomfort. The integration of advanced sapphire blades further accelerates this healing process, resulting in less tissue damage, minimal scabbing, and a remarkably fast recovery timeline.
                </p>
              </motion.div>

              {/* Ideal Candidate */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  Who Is the Ideal Candidate?
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Almost any healthy adult experiencing male or female pattern baldness is a candidate for FUE hair transplantation. However, the addition of the needle-free anesthesia protocol makes the procedure highly accessible for specific groups of people who might otherwise avoid treatment.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  You are an ideal candidate for this specific technique if you have a documented fear of needles or medical environments. It is also highly recommended for individuals with a low pain threshold. Some people naturally have a higher density of nerve endings in their scalp, making traditional injections excruciating. The diffusion logic of the jet injector softens this impact significantly. Furthermore, individuals who have experienced traumatic or painful dental and surgical procedures in the past often suffer from medical PTSD. Providing a needle-free alternative helps rebuild their trust in the medical process.
                </p>
              </motion.div>

              {/* Clinic Approach */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-[#772424] tracking-tight border-b pb-3 border-gray-100">
                  Hair Skill Clinic and Our Approach to Comfort
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Unfortunately, in FUE hair transplantation, it is a fact that some pain will be felt while applying local anesthesia. The important point is to make a special application, not in a standard way, but by taking into account the reactions and needs of the individual while the application is made to the patient.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  At Hair Skill Clinic, we consider the psychological state of the patients in all the treatments we administer by using the latest technological devices accompanied by our specialist physicians. We carry out all operations in a safe way with the technological devices necessary for the patients to feel comfortable at the maximum level, and we follow the latest developments in this field in the world.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  We aim to minimize the pain that patients will feel while achieving positive results in hair transplantation. We make the process much faster and easier with the help of the needle-free anesthesia we apply during sapphire hair transplantation in our clinic. Whether our patients travel from the bustling streets of Karachi, the capital region of Islamabad, or local neighborhoods searching for a reliable needle-free hair transplant near Lahore, we guarantee a standardized and world-class level of medical care. Our surgeons are trained to read body language, adjust jet injector pressure based on skin thickness, and pace the anesthesia administration to prevent overwhelming the nervous system.
                </p>
              </motion.div>

              {/* Conclusion */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-black text-[#772424] tracking-tight">Conclusion and Next Steps</h3>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  Fear should never stand between you and the confidence of a full head of hair. The evolution of hair restoration technology has transformed what was once a highly uncomfortable procedure into a smooth, manageable, and minimally invasive experience. By integrating the needle-free anesthesia hair transplant method, Hair Skill Clinic ensures that your journey toward hair restoration is as stress-free as scientifically possible.
                </p>
                <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                  We believe in honest communication, cutting-edge technology, and prioritizing the physical and mental well-being of our patients above all else. Do not let the fear of a few minutes of discomfort rob you of a lifetime of confidence. If you live in Pakistan, or if you are planning to visit us from abroad, reach out to our medical team for a comprehensive and personalized evaluation. We will walk you through every step of the process, explain the exact timeline, and show you exactly how our advanced pain management protocols can work for you. Let us help you restore your hair, your youthful appearance, and your self-esteem in the safest and most comfortable environment possible.
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
                    <input type="checkbox" id="nfaPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="nfaPrivacy" className="text-xs text-white/80 cursor-pointer">
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