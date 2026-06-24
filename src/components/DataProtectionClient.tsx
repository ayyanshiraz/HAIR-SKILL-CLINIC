"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

// Path points to ../data/countries because this file sits inside /src/components
import { countries, type Country } from "../data/countries";

// --- STRICT ANIMATION Bezier Tuple ---
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

export default function DataProtection() {
  // --- FORM STATES ---
  const defaultCountry = countries.find((c: Country) => c.code === `PK`) || countries[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState(``);
  const [email, setEmail] = useState(``);
  const [phone, setPhone] = useState(``);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetWhatsapp = `923014923336`;
    const textMessage = `Hello! I would like to get a free consultation from the Data Protection Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, `_blank`);
  };

  const autofillFixStyle = {
    WebkitBoxShadow: `0 0 0px 1000px #772424 inset`,
    WebkitTextFillColor: `#ffffff`
  };

  // --- LEGAL DEFINITIONS DATA (Adapted for Pakistan) ---
  const definitions = [
    { term: `Open Consent`, desc: `Consent on a particular subject, based on information and expressed with free will.` },
    { term: `Constitution`, desc: `Constitution of the Islamic Republic of Pakistan.` },
    { term: `Worker`, desc: `Employees and managers at Hair Skill Clinic.` },
    { term: `Employee Candidate`, desc: `Individuals who have applied to Hair Skill Clinic by any means or have opened their CV and related information to Hair Skill Clinic for review.` },
    { term: `Shareholder/Partner`, desc: `The shareholders and partners of Hair Skill Clinic are real persons.` },
    { term: `Related person`, desc: `Natural person whose personal data is processed.` },
    { term: `Destruction`, desc: `Deletion or destruction of personal data.` },
    { term: `Personal Data`, desc: `Any information relating to an identified or identifiable natural person.` },
    { term: `Personal Data Processing Inventory`, desc: `Personal data processing activities carried out by data controllers depending on their business processes; Personal data processing inventory, which is created by associating personal data with the purposes of processing, data category, transferred recipient group and data subject group, by explaining the maximum time required for the purposes for which personal data is processed, the personal data planned to be transferred to foreign countries and the measures taken regarding data security.` },
    { term: `Anonymization of Personal Data`, desc: `Anonymizing personal data, making it impossible to associate personal data with an identified or identifiable natural person in any way, even if it is matched with other data.` },
    { term: `Disposal of Personal Data`, desc: `The process of deletion, anonymization or destruction of personal data.` },
    { term: `Deletion of Personal Data`, desc: `The process of making personal data inaccessible and non-reusable for Relevant Users in any way.` },
    { term: `Destruction of Personal Data`, desc: `The process of destroying personal data, making personal data inaccessible, unrecoverable and unusable by anyone in any way.` },
    { term: `Committee`, desc: `Hair Skill Clinic Personal Data Protection Committee.` },
    { term: `Commission / Board`, desc: `National Commission for Personal Data Protection and data protection authority of the relevant member country.` },
    { term: `PDPB`, desc: `Personal Data Protection Bill / Law of Pakistan.` },
    { term: `GDPR`, desc: `European General Data Protection Regulation.` },
    { term: `Special Qualified Personal Data`, desc: `Data as well as data on peoples race, ethnic origin, political opinion, philosophical belief, religion, sect or other beliefs, clothing, membership in associations, foundations or unions, health, sexual life, criminal convictions and security measures.` },
    { term: `Periodic Destruction`, desc: `In the event that all of the personal data processing conditions in the PDPB and GDPR are eliminated, the deletion, destruction or anonymization of personal data, which will be carried out ex officio at repetitive intervals and specified in the storage and destruction policy.` },
    { term: `Policy`, desc: `Hair Skill Clinic Personal Data Processing and Protection Policy.` },
    { term: `Hair Skill Clinic`, desc: `Hair Skill Clinic (Pvt) Ltd.` },
    { term: `Supplier Employee`, desc: `Real persons working in institutions (such as but not limited to business partners, suppliers) with which Hair Skill Clinic has any business relationship.` },
    { term: `Supplier Representative`, desc: `Real persons with whom Hair Skill Clinic has business relations.` },
    { term: `Product or Service User / Authority`, desc: `Regardless of whether they have any contractual relationship with Hair Skill Clinic, natural persons (who receive products or services), or Legal Entity Authorities who use or have used them, using or using the products and services offered by Hair Skill Clinic.` },
    { term: `Data Processor`, desc: `The natural or legal person who processes personal data on behalf of the data controller based on the authority given by him.` },
    { term: `Data Recording System`, desc: `The registry system where personal data is processed and structured according to certain criteria.` },
    { term: `Data Controller`, desc: `The natural or legal person who determines the purposes and means of processing personal data and is responsible for the establishment and management of the data recording system.` },
    { term: `Visitor`, desc: `Real persons who have entered the physical facilities owned by Hair Skill Clinic for various purposes or visited our websites.` }
  ];

  return (
    <div className={`min-h-screen bg-white text-gray-900 font-sans selection:bg-[#772424] selection:text-white pb-24`}>
      
      {/* --- PAGE HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className={`pt-28 lg:pt-36 pb-12 bg-gray-50 border-b border-gray-200 px-6`}
      >
        <div className={`max-w-[1200px] mx-auto`}>
          <div className={`text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2`}>
            <Link href={`/`} className={`hover:text-[#772424] transition-colors`}>Homepage</Link>
            <span>/</span>
            <Link href={`/about`} className={`hover:text-[#772424] transition-colors`}>About</Link>
            <span>/</span>
            <span className={`text-[#772424]`}>Data Protection Policy</span>
          </div>
          <h1 className={`text-4xl md:text-6xl font-black text-[gray-900] tracking-tight`}>
            Personal Data Protection Policy
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className={`py-16 px-6 bg-white`}>
        <div className={`max-w-[1200px] mx-auto`}>
          <div className={`flex flex-col lg:flex-row gap-16 items-start`}>
            
            {/* LEFT SIDE: SCROLL-ANIMATED CONTENT */}
            <div className={`w-full lg:w-2/3 flex flex-col`}>
              
              {/* I. INTRODUCTION */}
              <motion.div initial={`hidden`} whileInView={`visible`} viewport={{ once: true, margin: `-50px` }} variants={fadeUp} className={`mb-14`}>
                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight uppercase`}>
                  I. INTRODUCTION
                </h2>
                
                <h3 className={`text-xl font-black text-[#772424] mb-4`}>A. Purpose and Scope</h3>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  The principles of <span className={`font-black`}>Hair Skill Clinic</span> for the protection and processing of personal data are defined in this policy.
                </p>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-8 font-medium`}>
                  Within the scope of this Policy, making explanations about the personal data processing activity and the systems adopted by <span className={`font-black`}>Hair Skill Clinic</span> for the protection of personal data, in this context, the persons who buy products or services, our employee and employee candidates, potential customers, shareholders, visitors, participants, suppliers and third parties ensuring transparency by informing the Relevant Person, establishing and realizing standards in the management of personal data; setting and supporting organizational goals and obligations; it is aimed to establish control mechanisms in line with the acceptable risk level, to comply with the principles and rules introduced by international agreements on the protection of personal data, the constitution, laws, regulations, contracts and other legislation, and to protect the fundamental rights and freedoms of the Relevant Person in the best way. In addition, this Policy covers all physical and electronic data recording systems and media used for automatic or non-automatic processing of personal and private data, provided that they are part of any data recording system.
                </p>

                <h3 className={`text-xl font-black text-[#772424] mb-6`}>B. Definitions</h3>
                <div className={`overflow-x-auto border border-gray-200 rounded-xl mb-12`}>
                  <table className={`w-full text-left border-collapse`}>
                    <thead>
                      <tr className={`bg-gray-50`}>
                        <th className={`py-4 px-6 font-black text-gray-900 border-b border-gray-200`}>Definition</th>
                        <th className={`py-4 px-6 font-black text-gray-900 border-b border-gray-200`}>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {definitions.map((def, idx) => (
                        <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50/50 transition-colors`}>
                          <td className={`py-4 px-6 text-sm md:text-base font-bold text-[#772424] w-1/3 align-top`}>{def.term}</td>
                          <td className={`py-4 px-6 text-sm md:text-base text-gray-900 font-medium align-top`}>{def.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* II. GENERAL PRINCIPLES */}
              <motion.div initial={`hidden`} whileInView={`visible`} viewport={{ once: true, margin: `-50px` }} variants={fadeUp} className={`mb-14`}>
                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight uppercase`}>
                  II. GENERAL PRINCIPLES AND CONDITIONS REGARDING THE PROCESSING OF PERSONAL DATA
                </h2>
                
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-8 font-medium`}>
                  <span className={`font-black`}>Hair Skill Clinic</span>, in accordance with the Constitution of Pakistan, the PDPB, and Article 5 of the GDPR, regarding the processing of personal data; in accordance with the law and the rules of honesty, accurate and up-to-date when necessary; for specific, clear and legitimate purposes; engages in personal data processing activities in a connected, limited and measured manner for this purpose. In this context, in accordance with the PDPB for the residents of Pakistan, personal data is processed based on one or more of the conditions regarding the processing of personal data, and the personal data is retained for as long as required by the laws and/or the personal data processing purpose is doing. In addition, it also acts in accordance with the regulations envisaged in terms of the processing of sensitive personal data in accordance with the PDPB, and in accordance with the regulations stipulated in the law and set forth by the Commission on the transfer of personal data. It informs the Relevant Person and provides the necessary information in case the Relevant Person requests information. In addition, all the above-mentioned activities are carried out for European residents in accordance with the relevant provisions of the GDPR.
                </p>

                <h3 className={`text-xl font-black text-[#772424] mb-6`}>A. Principles Regarding the Processing of Personal Data</h3>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  <span className={`font-black`}>Hair Skill Clinic</span> processes your personal data in accordance with the personal data processing principles in the PDPB and Article 5 of the GDPR. It is mandatory to comply with these principles for each personal data processing activity:
                </p>

                <div className={`flex flex-col gap-6 ml-2 mb-8`}>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Processing personal data in accordance with the law and honesty rules:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>In the processing of your personal data, we act in accordance with the laws, secondary regulations and general principles of law; It is important to process personal data limited to the purpose of processing and to take into account the reasonable expectations of the Relevant Person.</p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Accurate and up-to-date personal data:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>Care is taken to ensure that your processed personal data is up-to-date and to check it. In this context, the Relevant Person is entitled to request the correction or deletion of their correct and outdated data.</p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Processing of personal data for specific, explicit and legitimate purposes:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>Before each personal data processing activity, the purposes of data processing are determined and compliance with the law is complied with.</p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Being connected, limited and proportional to the purpose for which personal data is processed:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>The personal data required to fulfill the purpose of collecting data processing activities are limited and necessary technical and administrative measures are taken to prevent the processing of personal data not related to this purpose.</p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Retention of personal data for as long as required by the legislation or processing purposes:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>Personal data is deleted, destroyed or anonymized after the purpose of processing personal data disappears or when the period stipulated in the legislation expires.</p>
                  </div>
                </div>

                <h3 className={`text-xl font-black text-[#772424] mb-6`}>B. Conditions Regarding the Processing of Personal Data</h3>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Your personal data is processed by at least one of the personal data processing conditions in the PDPB and Article 6 of the GDPR and its continuation. Explanations on these conditions are given below:
                </p>

                <div className={`flex flex-col gap-6 ml-2 mb-8`}>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Having the Explicit Consent of the Relevant Person:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>The personal data of the Relevant Person can be processed with his/her free will, provided that he/she has sufficient information about the personal data processing activity, and gives his/her consent limited to that transaction, leaving no room for hesitation.</p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Explicitly stipulated in laws:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>Personal data can be processed within the framework of the relevant legal regulation without the Explicit Consent of the Related Person, if it is expressly stipulated in the laws.</p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>If the Explicit Consent of the Related Person cannot be obtained due to the actual impossibility and personal data processing is mandatory:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>Personal data belonging to the Relevant Person, who is unable to express his consent or whose consent cannot be validated, may be processed without seeking explicit consent, if personal data processing is necessary in order to protect the life or physical integrity of the Relevant Person or a third party.</p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>If the personal data processing activity is directly related to the establishment or performance of a contract:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>If it is necessary to process the personal data of the parties to the contract established or already signed between the Company, personal data processing can be carried out without seeking explicit consent.</p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>In order for the Data Controller to fulfill his legal obligation:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>In order to fulfill the legal obligations stipulated in the current legislation, personal data can be processed without seeking explicit consent.</p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Relevant Person has made his personal data public:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>Personal data, which has been disclosed to the public in any way by the Relevant Person and has become accessible to everyone as a result of this publicization, may be processed without the Relevant Persons Express Consent, limited to the purpose of making it public.</p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Personal data processing is mandatory for the establishment, exercise or protection of a right:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>If data processing is necessary for the establishment, exercise or protection of a right, the personal data of the Relevant Person may be processed.</p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Data processing is mandatory for the legitimate interests of the data controller:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>Provided that the balance of interests of the Relevant Person is observed, personal data can be processed. In this context, the legitimate interest of <span className={`font-black`}>Hair Skill Clinic</span> as a result of the processing activity is determined primarily. If the possible impact on the rights and freedoms of the Relevant Person is evaluated and it is concluded that the balance is not disturbed, the processing can be carried out without seeking explicit consent.</p>
                  </div>
                </div>

                <h3 className={`text-xl font-black text-[#772424] mb-6`}>C. Conditions Regarding the Processing of Special Categories of Personal Data</h3>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Special categories of personal data are specified in a limited number. These; data about race, ethnic origin, political thought, philosophical belief, religion, sect or other beliefs, costume and clothing, membership to associations, foundations or unions, health, sexual life, criminal convictions and security measures, and biometric and genetic data.
                </p>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  <span className={`font-black`}>Hair Skill Clinic</span> can process sensitive personal data in the following cases by taking additional measures determined by the Commission:
                </p>
                <div className={`flex flex-col gap-6 ml-2 mb-8`}>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Processing of special categories of personal data other than health and sexual life:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>It can be processed without the Relevant Persons Explicit Consent, if the person concerned gives explicit consent or if it is expressly stipulated in the law.</p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Personal data on health and sexual life:</h4>
                    <p className={`text-gray-900 text-base md:text-lg leading-relaxed font-medium`}>In case the Relevant Person gives Explicit Consent, or for the purpose of protecting public health, performing preventive medicine, medical diagnosis, treatment and care services, planning and managing health services and financing, by persons or authorized institutions and organizations under the obligation of confidentiality. It can be processed without seeking his explicit consent.</p>
                  </div>
                </div>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Regardless of the reason for the processing, general data processing principles are always taken into account in the processing processes and compliance with these principles is ensured. Regarding the protection of sensitive data, Private Personal Data Protection Policy has been put into effect in our company, and our business units act in accordance with the provisions of this policy and necessary measures are taken.
                </p>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  However, the processing of special categories of personal data is only possible if at least one of the following conditions listed in Article 9 of the GDPR are present. In the presence of these situations, sensitive personal data may be processed by providing the appropriate level of security stipulated in accordance with the PDPB. These issues are also clearly stated in the Privacy Policy prepared by us:
                </p>
                <ul className={`list-disc ml-8 text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium flex flex-col gap-2`}>
                  <li>In case of explicit consent of the person concerned</li>
                  <li>For the data controller to fulfill its obligations under the Labor Law and Social Security Law</li>
                  <li>If the person concerned is physically or legally unable to give consent</li>
                  <li>In case the data is disclosed to the public by the person concerned</li>
                  <li>In case legal claims are made and data processing is required within the framework of the relevant jurisdiction</li>
                  <li>Processing data for the public benefit, provided that necessary technical and administrative measures are provided.</li>
                  <li>For the purposes of preventive medicine or occupational medicine,</li>
                  <li>For the purposes of conducting archive, research activities in the public interest based on applicable Law.</li>
                </ul>
              </motion.div>

              {/* III. CATEGORIES */}
              <motion.div initial={`hidden`} whileInView={`visible`} viewport={{ once: true, margin: `-50px` }} variants={fadeUp} className={`mb-14`}>
                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight uppercase`}>
                  III. HAIR SKILL CLINIC CATEGORIES OF PERSONAL DATA PROCESSED
                </h2>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-8 font-medium`}>
                  <span className={`font-black`}>Hair Skill Clinic</span> in accordance with the PDPB and GDPR and other relevant legislation provisions, within the framework of the purposes and conditions specified in this Policy.
                </p>
                
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>
                  <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100`}>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Credentials</h4>
                    <p className={`text-gray-900 text-sm md:text-base font-medium`}>Clearly belonging to an identified or identifiable natural person; Information contained in documents such as Drivers License, Identity Card, Residence, Passport, Marriage Certificate.</p>
                  </div>
                  <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100`}>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Communication Information</h4>
                    <p className={`text-gray-900 text-sm md:text-base font-medium`}>Clearly belonging to an identified or identifiable natural person; information such as phone number, address, e-mail.</p>
                  </div>
                  <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100`}>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Personal Information</h4>
                    <p className={`text-gray-900 text-sm md:text-base font-medium`}>All kinds of personal data processed for the purpose of obtaining the information that will form the basis of the personal rights of our employees or real persons who have a working relationship with <span className={`font-black`}>Hair Skill Clinic</span>.</p>
                  </div>
                  <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100`}>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Legal Transaction Information</h4>
                    <p className={`text-gray-900 text-sm md:text-base font-medium`}>Your personal data processed within the scope of determination, follow-up and performance of our legal receivables and rights, and compliance with our legal obligations.</p>
                  </div>
                  <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100`}>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Customer Transaction Information</h4>
                    <p className={`text-gray-900 text-sm md:text-base font-medium`}>Records for the use of our products and services, and the customers instructions and requests necessary for the use of products and services.</p>
                  </div>
                  <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100`}>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Physical Space Security Information</h4>
                    <p className={`text-gray-900 text-sm md:text-base font-medium`}>Personal data regarding the records and documents taken at the entrance to the physical space, during the stay in the physical space.</p>
                  </div>
                  <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100`}>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Transaction Security Information</h4>
                    <p className={`text-gray-900 text-sm md:text-base font-medium`}>Personal data processed to ensure technical, administrative, legal and commercial security while carrying out activities.</p>
                  </div>
                  <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100`}>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Finance</h4>
                    <p className={`text-gray-900 text-sm md:text-base font-medium`}>Personal data processed for information, documents and records showing all kinds of financial results created according to the type of legal relationship.</p>
                  </div>
                  <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100`}>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Professional Experience</h4>
                    <p className={`text-gray-900 text-sm md:text-base font-medium`}>Personal data processed for measuring performance of employees, and planning career development within <span className={`font-black`}>Hair Skill Clinic</span>s human resources policy.</p>
                  </div>
                  <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100`}>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Marketing Information</h4>
                    <p className={`text-gray-900 text-sm md:text-base font-medium`}>Personal data processed for customizing and marketing our products and services in line with usage habits, tastes and needs.</p>
                  </div>
                  <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100`}>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Audio and Audio Recordings</h4>
                    <p className={`text-gray-900 text-sm md:text-base font-medium`}>Data contained in photographs and camera recordings, audio recordings and documents that are copies of documents containing personal data.</p>
                  </div>
                  <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100`}>
                    <h4 className={`text-lg font-black text-[#772424] mb-2`}>Special Qualified Personal Data</h4>
                    <p className={`text-gray-900 text-sm md:text-base font-medium`}>Data on health and sexual life, data on criminal convictions and security measures.</p>
                  </div>
                </div>
              </motion.div>

              {/* IV. TRANSFERRING */}
              <motion.div initial={`hidden`} whileInView={`visible`} viewport={{ once: true, margin: `-50px` }} variants={fadeUp} className={`mb-14`}>
                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight uppercase`}>
                  IV. TRANSFERRING PERSONAL DATA
                </h2>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  To ensure the fulfillment of the objectives of <span className={`font-black`}>Hair Skill Clinic</span>s activities and establishments; the services that are outsourced from the supplier and necessary to carry out commercial activities are provided to our Company. Data transfer is carried out for the purposes of ensuring that the necessary information is provided to authorized public institutions.
                </p>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-8 font-medium`}>
                  By <span className={`font-black`}>Hair Skill Clinic</span>, without prejudice to the cases where it is necessary to transfer personal data to administrative and judicial institutions in accordance with PDPB, GDPR or relevant legislation, personal data of the persons concerned are not transferred to other persons without the express consent of the persons concerned. However in cases where there is a reason for compliance with the law, it can transfer data to real persons and private law legal entities, shareholders, suppliers, and public institutions by taking the necessary security measures, without seeking explicit consent. Accordingly, the regulations stipulated in the PDPB and GDPR are complied with.
                </p>

                <h3 className={`text-xl font-black text-[#772424] mb-6`}>A. Transfer of Personal Data</h3>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Within the scope of PDPB, even if the person does not have explicit consent, if one or more of the following conditions are present, <span className={`font-black`}>Hair Skill Clinic</span> personal data may be transferred to third parties, taking all necessary security measures:
                </p>
                <ul className={`list-disc ml-8 text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium flex flex-col gap-2`}>
                  <li>The relevant activities regarding the transfer of personal data are clearly stipulated in the laws.</li>
                  <li>It is compulsory for the person or someone else, who is unable to express his consent due to actual impossibility, to protect his or her life or physical integrity.</li>
                  <li>The transfer of personal data is directly related to and necessary for the establishment or performance of a contract.</li>
                  <li>The transfer of personal data is mandatory in order to fulfill a legal obligation.</li>
                  <li>Limited transfer of personal data for the purpose of making it public, provided that it has been made public by the Relevant Person.</li>
                  <li>Transfer of personal data is mandatory for the establishment, use or protection of the rights of <span className={`font-black`}>Hair Skill Clinic</span> or the relevant person or third parties.</li>
                  <li>It is mandatory to carry out personal data transfer activities for the legitimate interests of <span className={`font-black`}>Hair Skill Clinic</span>, provided that it does not harm the fundamental rights and freedoms of the Relevant Person.</li>
                </ul>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-8 font-medium`}>
                  In addition to the above, personal data may be transferred to foreign countries declared to have adequate protection by the Commission. In the absence of sufficient protection, it can be transferred to foreign countries where the data controllers in Pakistan and the relevant foreign country undertake an adequate protection in writing and where the permission of the Commission is available.
                </p>

                <h3 className={`text-xl font-black text-[#772424] mb-6`}>B. Transfer of Private Personal Data</h3>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Special categories of personal data <span className={`font-black`}>Hair Skill Clinic</span> by taking all necessary technical and administrative measures, including the methods to be determined by the Commission, in accordance with the principles set forth in this Policy. Special categories of personal data other than health and sexual life may be processed without the explicit consent of the Relevant Person, provided that it is expressly stipulated in the law. Otherwise, the Explicit Consent of the Related Person will be taken.
                </p>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Special quality personal data regarding health and sexual life, for the purpose of protection of public health, preventive medicine, medical diagnosis, treatment and care services, planning and management of health services and financing, without seeking the express consent of persons under the obligation of keeping confidentiality or authorized institutions and organizations. Otherwise, the Explicit Consent of the Related Person will be taken.
                </p>
              </motion.div>

              {/* V. PROTECTION */}
              <motion.div initial={`hidden`} whileInView={`visible`} viewport={{ once: true, margin: `-50px` }} variants={fadeUp} className={`mb-14`}>
                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight uppercase`}>
                  V. MATTERS REGARDING THE PROTECTION OF PERSONAL DATA
                </h2>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  <span className={`font-black`}>Hair Skill Clinic</span> takes the necessary technical and administrative measures to ensure the appropriate level of security in order to prevent the unlawful processing of the personal data it processes, illegal access to the data, and to ensure the preservation of the data, in accordance with the relevant security provisions of the PDPB and the 32nd article of the GDPR.
                </p>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Systems suitable for technological developments are used to protect personal data in secure environments. Technical security systems for hiding areas are established, the technical measures taken are periodically audited by the control mechanism determined by <span className={`font-black`}>Hair Skill Clinic</span>, the risky issues are re-evaluated and the necessary technological solution is produced.
                </p>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  Contracts concluded by <span className={`font-black`}>Hair Skill Clinic</span> with relevant companies on the storage of personal data; It is stated that the persons to whom personal data are transferred will take the necessary security measures for the protection of personal data and that these measures will be complied with in their own establishments.
                </p>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-4 font-bold`}><span className={`font-black`}>Hair Skill Clinic</span> includes:</p>
                <ul className={`list-disc ml-8 text-gray-900 text-base md:text-lg leading-relaxed mb-8 font-medium flex flex-col gap-2`}>
                  <li>Providing individuals with clear information about who and how their personal data is used.</li>
                  <li>For these purposes, to process personal data at the minimum level necessary and not to process more than necessary data.</li>
                  <li>Respecting the rights of the Relevant Person regarding their personal data, including the right of access.</li>
                  <li>Keeping an inventory of the processed personal data categories.</li>
                  <li>Keeping personal data accurate and up-to-date when necessary.</li>
                  <li>Processing personal data fairly and in accordance with the law.</li>
                  <li>Processing personal data only if it is clearly necessary for legitimate corporate purposes.</li>
                  <li>Personal data is only required by legal regulations, legal obligations or legitimate corporate interests of <span className={`font-black`}>Hair Skill Clinic</span> and to be stored within specified periods.</li>
                  <li>Transfer of personal data abroad within the framework of the principles determined by PDPB and GDPR.</li>
                  <li>Determining a Committee with special powers and responsibilities regarding the personal data protection system.</li>
                  <li>Implementation of the exceptions allowed in accordance with the legislation.</li>
                  <li>Preparation of this Policy.</li>
                  <li>Taking the necessary technical and administrative measures determined by the PDPB, GDPR and secondary legislation, as well as the Commission.</li>
                  <li>Processing only relevant and appropriate personal data.</li>
                </ul>

                <h3 className={`text-xl font-black text-[#772424] mb-6`}>A. Educational Activities</h3>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  <span className={`font-black`}>Hair Skill Clinic</span> provides employees with necessary training on the protection of Personal Data within the scope of the Policies and PDPB & GDPR Regulations and Procedures. In the trainings, applications for the definition and protection of Sensitive Personal Data are especially included. <span className={`font-black`}>Hair Skill Clinic</span> provides its employees with training and making necessary notifications in order to increase awareness about the illegal processing of personal data.
                </p>

                <h3 className={`text-xl font-black text-[#772424] mb-6`}>B. Audit Activities</h3>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  <span className={`font-black`}>Hair Skill Clinic</span> has the right to regular and ex officio inspection, without any prior notification, that all employees, departments and suppliers of the Company act in accordance with this Policy and PDPB & GDPR Regulations. The results of these audits are evaluated within the scope of the internal operation of the Company and necessary activities are carried out to improve the measures taken.
                </p>
              </motion.div>

              {/* VI, VII, VIII, IX, X */}
              <motion.div initial={`hidden`} whileInView={`visible`} viewport={{ once: true, margin: `-50px` }} variants={fadeUp} className={`mb-14`}>
                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight uppercase`}>
                  VI. STORAGE AND DISPOSAL OF PERSONAL DATA
                </h2>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-10 font-medium`}>
                  <span className={`font-black`}>Hair Skill Clinic</span> preserves personal data for the period required for the purpose for which they are processed and in accordance with the minimum periods stipulated in the legislation to which the relevant activity is subject. If a period of time is not available in the legislation, personal data is stored for the period necessary for the purpose for which they are processed. At the end of the personal data storage periods, <span className={`font-black`}>Hair Skill Clinic</span> destroys it in accordance with the periodic destruction periods specified in the Personal Data Storage and Disposal Policy.
                </p>

                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight uppercase`}>
                  VII. INFORMING THE RELATED PERSON
                </h2>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  <span className={`font-black`}>Hair Skill Clinic</span> enlightens the Relevant Person in accordance with PDPB, GDPR and secondary regulations. In this context, if the personal data is obtained from the Relevant Person himself, during the acquisition; If it is not obtained from the Relevant Person, within a reasonable time from the acquisition of the personal data. The disclosure includes:
                </p>
                <ul className={`list-disc ml-8 text-gray-900 text-base md:text-lg leading-relaxed mb-10 font-medium flex flex-col gap-2`}>
                  <li>Identity of <span className={`font-black`}>Hair Skill Clinic</span>.</li>
                  <li>For what purpose personal data will be processed.</li>
                  <li>To whom and for what purposes it can be transferred.</li>
                  <li>The method of personal data collection.</li>
                  <li>The legal reason for collecting personal data.</li>
                  <li>Other rights of the Related Person listed in the PDPB or GDPR.</li>
                </ul>

                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight uppercase`}>
                  VIII. THE RIGHTS OF THE RELATED PERSON
                </h2>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  The legal rights that the Relevant Person can use regarding personal data are listed below:
                </p>
                <ul className={`list-disc ml-8 text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium flex flex-col gap-2`}>
                  <li>Learning whether personal data is processed or not.</li>
                  <li>If personal data has been processed, requesting information about it.</li>
                  <li>Learning the purpose of processing personal data and whether they are used in accordance with the purpose.</li>
                  <li>Learning the third parties whose personal data is transferred in the country or abroad.</li>
                  <li>Requesting correction of your personal data if it is incomplete or incorrectly processed.</li>
                  <li>Requesting the deletion, destruction or anonymization of personal data.</li>
                  <li>Objecting to the emergence of a negative result by analyzing the processed data exclusively through automated systems.</li>
                  <li>To request the compensation of the damage in case of loss due to unlawful processing of personal data.</li>
                  <li>Transfer of personal data to a different data controller requested by the person concerned (right to data portability).</li>
                </ul>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-10 font-medium`}>
                  If the Relevant Person is a resident of Pakistan, on the condition that they make their requests regarding their rights in accordance with the relevant procedures under the PDPB, if they are a European resident, on the condition that they make their requests in English, it can be submitted to <span className={`font-black`}>Hair Skill Clinic</span> by filling out the Application Form in written form or by using the Registered Electronic Mail address or the e-mail address that it has previously notified and registered in our system.
                </p>

                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight uppercase`}>
                  IX. HAIR SKILL CLINICS ANSWER TO APPLICATIONS
                </h2>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-10 font-medium`}>
                  <span className={`font-black`}>Hair Skill Clinic</span> takes all kinds of technical and administrative measures to conclude the applications to be made by the Relevant Person effectively, in accordance with the law and honesty. Applications of the Relevant Person may be accepted or rejected by explaining the reason. Response may be notified in writing or electronically. The relevant request will be concluded free of charge as soon as possible and within 30 (thirty) days at the latest.
                </p>

                <h2 className={`text-2xl md:text-3xl font-black text-[#772424] mb-6 tracking-tight uppercase`}>
                  X. EFFECTIVENESS OF THE POLICY AND UPDATE PERIOD
                </h2>
                <p className={`text-gray-900 text-base md:text-lg leading-relaxed mb-6 font-medium`}>
                  The Committee carries out the implementation, updating and announcement of this Policy. This Policy is published by <span className={`font-black`}>Hair Skill Clinic</span> on the website.
                </p>
              </motion.div>

            </div>

            {/* RIGHT SIDE: STICKY CONSULTATION FORM */}
            <motion.div initial={`hidden`} animate={`visible`} variants={slideInRight} className={`w-full lg:w-1/3 lg:sticky lg:top-32`}>
              <div className={`bg-[#772424] text-white rounded-3xl p-8 shadow-2xl relative w-full border border-[#8c2a2a]`}>
                <h3 className={`text-white text-xl font-black text-center mb-8 tracking-wide`}>GET FREE CONSULTATION</h3>
                <form onSubmit={handleSubmit} className={`flex flex-col gap-6`}>
                  <div className={`border-b border-white/30 pb-2 focus-within:border-white transition-colors`}>
                    <input type={`text`} placeholder={`Full Name`} value={fullName} onChange={(e) => setFullName(e.target.value)} required className={`w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium`} style={autofillFixStyle} />
                  </div>
                  <div className={`border-b border-white/30 pb-2 focus-within:border-white transition-colors`}>
                    <input type={`email`} placeholder={`E-mail`} value={email} onChange={(e) => setEmail(e.target.value)} required className={`w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium`} style={autofillFixStyle} />
                  </div>
                  <div className={`border-b border-white/30 pb-2 focus-within:border-white transition-colors flex items-center relative`}>
                    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`flex items-center gap-2 cursor-pointer text-sm font-bold text-[#C5A059] select-none mr-3 shrink-0`}>
                      <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={selectedCountry.name} className={`w-5 object-contain`} />
                      <span>{selectedCountry.dial}</span>
                      <span className={`text-[10px]`}>▼</span>
                    </div>
                    {isDropdownOpen && (
                      <div className={`absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 shadow-2xl rounded-xl z-50`}>
                        {countries.map((country: Country, idx: number) => (
                          <div key={idx} onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }} className={`px-4 py-2.5 hover:bg-gray-100 cursor-pointer text-sm flex items-center justify-between text-gray-900 transition-colors`}>
                            <div className={`flex items-center gap-2.5 truncate mr-2`}>
                              <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} className={`w-5 object-contain shrink-0`} />
                              <span className={`font-bold`}>{country.code}</span>
                              <span className={`text-xs text-gray-500 truncate`}>{country.name}</span>
                            </div>
                            <span className={`text-[#772424] font-black shrink-0`}>{country.dial}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <input type={`tel`} placeholder={`Phone Number`} value={phone} onChange={(e) => setPhone(e.target.value)} required className={`w-full bg-transparent text-sm text-white placeholder-white/70 outline-none font-medium`} style={autofillFixStyle} />
                  </div>
                  <div className={`flex items-center gap-2 mt-2`}>
                    <input type={`checkbox`} id={`privacyCheck`} required defaultChecked className={`w-4 h-4 accent-[#C5A059] rounded cursor-pointer`} />
                    <label htmlFor={`privacyCheck`} className={`text-xs text-white/80 cursor-pointer`}>
                      I have read and accept the <Link href={`/privacy-policy`} className={`text-[#C5A059] font-black hover:underline`}>Privacy Policy.</Link>
                    </label>
                  </div>
                  <button type={`submit`} className={`w-full py-4 bg-white hover:bg-gray-100 text-[#772424] font-extrabold rounded-xl transition-all tracking-wider text-sm mt-2 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]`}>
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