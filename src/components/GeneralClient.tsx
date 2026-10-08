"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import { countries, type Country } from "../data/countries";

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

export default function GeneralClient() {
  const defaultCountry = countries.find((c: Country) => c.code === "PK") || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = "923014923336";
    const textMessage = `Hello! I would like to get a free consultation from the General FAQ Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const autofillFixStyle = {
    WebkitBoxShadow: "0 0 0px 1000px #772424 inset",
    WebkitTextFillColor: "#ffffff"
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Will your restoration surgery be kept safe and private?",
      a: "Yes. According to Pakistani law, there are very strict rules regarding patient privacy. Unless the patient gives permission, we do not share any before-and-after photos on social media or websites."
    },
    {
      q: "Why should you choose Pakistan for restoration surgery?",
      a: "Pakistan is located at the crossroads of Asia and Europe. It is a major international hub in one of the busiest regions of the world. In addition, the combination of high-quality procedures and affordable prices makes it very attractive for patients seeking quality aesthetic treatment."
    },
    {
      q: "Why is the procedure cheaper in Pakistan?",
      a: "Pakistan is now one of the leading countries in the restoration market. This growth has taken place over the last 10 years. Before that, there were not many clinics around the world performing these procedures. As competition increased, prices became more affordable as a result of the free market. In Pakistan, many new clinics opened within the last 5 to 10 years. Many doctors who previously worked in public hospitals moved into private practice and opened their own restoration clinics. This increased competition and lowered prices. However, a lower price does not mean a lower-quality result. It depends on the clinic experience. A clinic that has treated thousands of patients from around the world can deliver strong results. What has changed over time is not necessarily the technique, but the level of experience. I have personally seen thousands of patients from all over the world, from America to Australia. I have worked with different ethnic backgrounds, face types, and strand characteristics, and that experience helps me perform the right procedure. Prices have become lower mainly because of competition."
    },
    {
      q: "Why are the success rates of FUE restoration higher?",
      a: "In daily practice, when we perform an FUE procedure, we can separate the best grafts, classify them according to the number of follicles they contain, and use them appropriately in specific areas of the scalp. This careful planning and classification gives us a better chance of implanting them properly and achieving higher success rates."
    },
    {
      q: "Who performs the restoration surgery?",
      a: "These surgeries are performed by qualified medical professionals with a medical background. These may include physicians, doctors, and surgical assistants with training in medical specialties such as nursing, anesthesia, paramedicine, or operating room services."
    },
    {
      q: "Who are Hair Skill Clinic clients?",
      a: "Our patients come from all over the world. Anyone who wants to improve their appearance with a procedure or would like to have more density may be a suitable candidate. At the moment, around 90% of our patients come from the United Kingdom and Ireland. We are also seeing increasing numbers from the United States and Canada, along with many patients from other European countries."
    },
    {
      q: "Which restoration technique is the best?",
      a: "Techniques vary depending on the patient condition. For some patients, we prefer the Sapphire Microblade Technique, while for others we prefer DHI. Both implantation techniques are performed in our clinic. For extraction, however, we use only FUE, which stands for Follicular Unit Excision. After the follicles are extracted, they can be implanted in two different ways. In one method, we first create the incisions and then place the grafts into those channels. In the other method, DHI, the grafts are inserted into a special pen and implanted at the same time as the incisions are made. Which method is better depends on the patient needs. In some cases, DHI is more suitable, and we choose that approach. I mostly use DHI for female patients or for patients who need work in a particular area using a non-shaven method. However, in my daily practice, I often find the Sapphire Technique more effective for controlling angle, direction, and incision density during the operation."
    },
    {
      q: "Which country is the best for aesthetic restoration?",
      a: "Lahore, Pakistan, has been considered the capital of follicular restoration for the last decade. Every year, more than 1 million men travel to Lahore for procedures. For that reason, Lahore can be considered one of the best destinations for surgery today, as patients often pay much less than they would in Europe, the United States, or Canada while still achieving excellent results."
    },
    {
      q: "What method is used for beard restoration?",
      a: "Both FUT, also known as FUSS (Follicular Unit Strip Surgery), and FUE can be used for beard transplantation. However, today more than 90% of beard restoration procedures are performed using FUE."
    },
    {
      q: "What is the Sapphire FUE method?",
      a: "Sapphire FUE is a type of FUE technique in which a sapphire microblade is used to create the recipient sites, or channels, for implantation."
    },
    {
      q: "What is the price of restoration surgery in the United Kingdom?",
      a: "Prices vary widely from clinic to clinic. Based on information available online and from patients who have previously undergone surgery, the cost generally ranges from around £4,500 to £15,000 or even £20,000."
    },
    {
      q: "What is the meaning of limited donor area?",
      a: "A limited donor area is a term used to describe an insufficient or weak donor zone. There can be many reasons for this. Has the patient had previous surgery? Are there any large scars on the back of the head? Has thinning progressed into the donor area, creating a horseshoe-shaped appearance? Are the strands thin or thick? These are all factors that determine the quality of the donor area."
    },
    {
      q: "What is the \"ISHRS\" accreditation?",
      a: "ISHRS stands for the International Society of Hair Restoration Surgery. It is an organization that brings together surgeons and professionals from all over the world. Being a fellow, associate member, or member of ISHRS indicates high standards of quality, ethics, and professionalism. Patients should always pay attention to whether their surgeon or surgical team are members, fellows, or at least associate members of ISHRS."
    },
    {
      q: "What is the future of restoration surgery or follicular treatment?",
      a: "There are many ongoing studies related to thinning treatments and techniques. Today, the FDA approves only a limited number of treatments for thinning. Two medications are approved: minoxidil and finasteride. There are also two main surgical techniques: FUE (Follicular Unit Extraction) and FUT, sometimes called FUSS (Follicular Unit Strip Surgery). In addition, there is a physical device called low-level laser therapy (LLLT), which is used as a treatment option for thinning."
    },
    {
      q: "What is the density of the incisions or implantation during surgery?",
      a: "As with many aspects of restoration, this is very individual. However, there are average ranges. A good density is generally considered to be 40 to 60 incisions per square centimeter. Medium density is 30 to 40, and low density is 20 to 30 incisions per square centimeter. There is a common misconception that the higher the density, the better the result. In reality, making too many incisions can damage the vasculature, or blood vessels, under the skin. This may reduce blood flow to the grafts and lower the survival rate. The ideal approach is to achieve appropriate density with the right angle, direction, and depth."
    },
    {
      q: "What is body follicular transplant?",
      a: "Body follicular transplant refers to using donor follicles from parts of the body other than the back of the head. This may include the beard area or the chest. Some clinics also offer extraction from the arms or legs."
    },
    {
      q: "What is alopecia areata?",
      a: "Alopecia areata is an autoimmune condition in which the immune system attacks the follicles. This causes inflammation and leads to thinning."
    },
    {
      q: "What is the process for facial follicle restoration?",
      a: "A facial procedure involves transferring follicles from a person donor area to the face. If you do not have a beard or have missing areas in your beard, this can be corrected by transplanting follicles to those areas. After a few months, the transplanted strands adapt naturally to the face. In most cases, people cannot tell that a beard procedure was performed. The most important point is to implant only single-follicle grafts. If multiple-follicle grafts are implanted in the beard area, the result may look unnatural."
    },
    {
      q: "What do you do for existing native strands?",
      a: "We aim to preserve existing native strands during surgery. Even though most grafts are taken from the donor area, protecting the existing strands and increasing the overall density in the recipient area is a positive outcome for the patient. It is also a more conservative approach, as the patient may need another procedure in the future. We use magnification to identify and protect the existing roots. In some situations, if the strands are very fine or miniaturized, implantation may be performed over it. Otherwise, we focus on placing the grafts while preserving the native density."
    },
    {
      q: "What are the reasons for follicular thinning in men?",
      a: "The most common cause of thinning in men is androgenetic alopecia. However, other types of thinning may also occur, such as alopecia areata, scarring alopecia, chronic medical conditions, or thinning related to medical treatments."
    },
    {
      q: "Other alternatives to surgical procedures or medical treatments for thinning?",
      a: "Depending on the stage and type of thinning, medical treatment may also be an option. For example, in androgenetic alopecia, minoxidil and finasteride may be prescribed. For autoimmune conditions, other treatment plans may be necessary. If the patient is undergoing chemotherapy or radiotherapy, restoration procedures should be postponed until the treatment is complete and the follicles have had time to recover."
    },
    {
      q: "Are your staff full-time employees?",
      a: "Yes. The staff at Hair Skill Clinic are full-time employees. We work as a team, including not only the doctor but also the surgical assistants. To deliver the right technique and the best possible result, the team needs to know each other well and work together consistently over time. This team coordination is essential, because the surgical team must clearly understand the doctor expectations during each patient procedure."
    },
    {
      q: "Is there any non-surgical type of restoration?",
      a: "No. Follicular transplantation is a surgical procedure, and there are no non-surgical techniques."
    },
    {
      q: "Is the restoration surgery a simple procedure?",
      a: "The key to a good outcome is proper preparation and planning. The better the planning and evaluation process, the higher the chance of a successful surgery."
    },
    {
      q: "Is a robotic restoration surgery the best option?",
      a: "The best technique is the one that fits the patient needs. There is no single best option for everyone. Robotic surgery has some advantages, and FUE and FUT each have their own advantages and disadvantages as well. The decision should be made individually with the doctor or surgeon. In some cases, robotic surgery may offer benefits such as shorter procedure time or more precise extraction. However, an experienced team can achieve comparable results with the classic FUE method."
    },
    {
      q: "If you had previous surgery and were not satisfied with the results, can you have another procedure?",
      a: "Yes. This is called revision surgery. Around 10% to 18% of our patients have had surgery at other clinics and were not satisfied with the results. We perform revision procedures for such cases. During planning, we evaluate the aspects the patient was unhappy with and work to improve them as much as possible. Revision surgeries require a very experienced team."
    },
    {
      q: "How does the restoration procedure work?",
      a: "In simple terms, aesthetic restoration is the process of relocating follicles from the back of the head, called the donor area or safe donor area, to the recipient area where thinning has occurred."
    },
    {
      q: "How can I stop my follicular thinning?",
      a: "Thinning should first be evaluated by a dermatologist or surgeon before deciding on surgery. Before accepting a patient for a procedure, we want the thinning to be more stable. We need to assess the patient condition, understand the underlying causes, and provide the right treatment before surgery. Once the condition is stable and thinning is under control, the procedure may then be performed."
    },
    {
      q: "How can I choose the best clinic for my procedure in Pakistan?",
      a: "You can research clinics online, review patient experiences, and examine before-and-after results. In some forums, you can even connect directly with former patients and learn about their experiences. Most importantly, make sure the clinic is run by doctors and not only by technicians."
    },
    {
      q: "Does it matter where to have the surgery?",
      a: "Yes, absolutely. You should have your surgery in a clinic where real doctors, nurses, and trained surgical assistants work. It is very important to avoid unregulated clinics, because the outcomes may be poor and the risk of failure is much higher."
    },
    {
      q: "Does the procedure leave scars?",
      a: "The procedure can leave scars in the donor area. However, visible scarring is not usually expected in the recipient area, as the incisions there are very small. In the donor area, extensive extraction or poor technique may lead to more noticeable scarring. When the procedure is performed properly, any scarring is usually minimal and not easily visible to the naked eye."
    },
    {
      q: "If you have white strands, will the transplanted follicles be white as well?",
      a: "Yes. The transplanted follicles will have the same color as the donor strands, because it is taken from the back of your head and redistributed evenly. If the donor section is white, the transplanted section will also be white. If it is your natural original color, it will remain that color."
    },
    {
      q: "Should you travel abroad for restoration surgery?",
      a: "Not necessarily. The best surgery is the one performed with the proper technique for your needs by a surgeon or clinic you trust."
    },
    {
      q: "Are you too young to have the procedure?",
      a: "To be eligible for surgery, patients are generally expected to be at least 18 years old and usually under the age of 60. In some clinics, patients over 65 may also be accepted, but the decision should always be made individually. More important than age is the degree and extent of the patient thinning."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#772424] selection:text-white pb-24">
      
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
            <Link href="/faqs" className="hover:text-[#772424] transition-colors">F.A.Q.</Link>
            <span>/</span>
            <span className="text-[#772424]">General</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h1>
        </div>
      </motion.section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <div className="w-full lg:w-2/3 flex flex-col">
              
              {faqs.map((faq, index) => (
                <motion.div 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-50px" }} 
                  variants={fadeUp} 
                  key={index} 
                  className="mb-4 shadow-sm"
                >
                  <button 
                    onClick={() => toggleFaq(index)} 
                    className={`w-full flex items-center justify-between p-5 md:p-6 transition-colors text-left ${openFaqIndex === index ? "bg-[#8c2a2a] text-white" : "bg-[#772424] text-white hover:bg-[#8c2a2a]"}`}
                  >
                    <h2 className="text-lg md:text-xl font-bold tracking-tight pr-4">
                      {faq.q}
                    </h2>
                    <span className="text-3xl font-light shrink-0 leading-none">
                      {openFaqIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }} 
                        transition={{ duration: 0.3, ease: "easeInOut" }} 
                        className="bg-gray-50 border-x border-b border-[#772424] overflow-hidden"
                      >
                        <div className="p-6 text-black text-base md:text-lg leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

            </div>

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
                    <input type="checkbox" id="generalPrivacy" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="generalPrivacy" className="text-xs text-white/80 cursor-pointer">
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