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

export default function PrivacyPolicyClient() {
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
    const textMessage = `Hello! I would like to get a free consultation from the Personal Data Policy Page.\n\n*Name*: ${fullName}\n*Email*: ${email}\n*Phone*: ${selectedCountry.dial} ${phone}`;
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

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
          <div className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center justify-start gap-2">
            <Link href="/" className="hover:text-[#772424] transition-colors">Homepage</Link>
            <span>/</span>
            <span className="text-[#772424]">Personal Data Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight text-left">
            Personal Data Policy
          </h1>
        </div>
      </motion.section>

      {/* --- MAIN CONTENT & STICKY SIDEBAR --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT SIDE: POLICY TEXT CONTENT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6 text-black text-base md:text-lg font-medium leading-relaxed">
              
              <div className="border border-gray-200 p-8 rounded-2xl bg-gray-50/50 mb-6">
                <h2 className="text-xl font-black text-[#772424] mb-4 uppercase tracking-wider">CONTENTS</h2>
                <ul className="space-y-1.5 text-sm md:text-base font-bold text-gray-700">
                  <li>I. INTRODUCTION</li>
                  <li className="pl-4">— Purpose and Scope</li>
                  <li className="pl-4">— Definitions</li>
                  <li>II. GENERAL PRINCIPLES AND CONDITIONS REGARDING THE PROCESSING OF PERSONAL DATA</li>
                  <li className="pl-4">— Principles Regarding the Processing of Personal Data</li>
                  <li className="pl-4">— Conditions Regarding the Processing of Personal Data</li>
                  <li className="pl-4">— Conditions Regarding the Processing of Special Categories of Personal Data</li>
                  <li>III. CATEGORIES OF PERSONAL DATA PROCESSED BY HAIR SKILL CLINIC</li>
                  <li>IV. TRANSFER OF PERSONAL DATA</li>
                  <li className="pl-4">— Transfer of Personal Data</li>
                  <li className="pl-4">— Transfer of Special Categories of Personal Data</li>
                  <li>V. MATTERS REGARDING THE PROTECTION OF PERSONAL DATA</li>
                  <li className="pl-4">— Training Activities</li>
                  <li className="pl-4">— Audit Activities</li>
                  <li>VI. RETENTION AND DESTRUCTION OF PERSONAL DATA</li>
                  <li>VII. INFORMING AND NOTIFYING THE DATA SUBJECT</li>
                  <li>VIII. RIGHTS OF THE DATA SUBJECT AND EXERCISE OF THESE RIGHTS</li>
                  <li>IX. HAIR SKILL CLINIC’S RESPONSE TO APPLICATIONS</li>
                  <li>X. EFFECTIVENESS AND UPDATE PERIOD OF THE POLICY</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-[#772424] uppercase tracking-tight mt-6">I. INTRODUCTION</h2>
              
              <h3 className="text-xl font-black text-[#772424] mt-2">A. Purpose and Scope</h3>
              <p>
                This Policy sets out the principles adopted by <strong>Hair Skill Clinic</strong> in the protection and processing of personal data.
              </p>
              <p>
                Within the scope of this Policy, the aim is to provide explanations regarding <strong>Hair Skill Clinic</strong>’s personal data processing activities and the systems adopted for personal data protection, thereby ensuring transparency by informing Data Subjects, especially <strong>Product or Service Recipients, Employees and Employee Candidates, Potential Customers, Shareholders, Visitors, Participants, Suppliers, and Third Parties</strong>. It also aims to establish and implement standards in personal data management; define and support organizational goals and obligations; establish control mechanisms consistent with an acceptable risk level; comply with the principles and rules set forth by international conventions, the Constitution, laws, regulations, contracts, and other legislation regarding personal data protection; and ensure the best possible protection of Data Subjects’ fundamental rights and freedoms. Furthermore, this Policy covers all physical and electronic data recording systems and environments used for processing personal and special categories of personal data, whether automatically or non-automatically as part of a data recording system.
              </p>

              <h3 className="text-xl font-black text-[#772424] mt-4">B. Definitions</h3>
              <div className="overflow-x-auto border border-gray-200 my-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-sm font-black border-b border-gray-200">
                      <th className="p-4 w-1/3">Definition</th>
                      <th className="p-4 w-2/3">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm md:text-base">
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Explicit Consent</td>
                      <td className="p-4">Consent relating to a specific matter, given based on information and declared with free will</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Constitution</td>
                      <td className="p-4">Constitution of the Islamic Republic of Pakistan</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Employee</td>
                      <td className="p-4">Employees and managers at Hair Skill Clinic</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Employee Candidate</td>
                      <td className="p-4">Natural persons who have applied for a job at Hair Skill Clinic by any means or who have made their resume and related information available for Hair Skill Clinic’s review</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Shareholder/Partner</td>
                      <td className="p-4">Natural persons who are shareholders and partners of Hair Skill Clinic.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Data Subject</td>
                      <td className="p-4">The natural person whose personal data is processed</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Destruction</td>
                      <td className="p-4">Deletion or destruction of personal data</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Personal Data</td>
                      <td className="p-4">Any information relating to an identified or identifiable natural person</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Personal Data Processing Inventory</td>
                      <td className="p-4">An inventory created by data controllers by associating their personal data processing activities carried out in connection with their business processes with personal data processing purposes, data categories, recipient groups transferred to, and data subject groups, detailing the maximum period for which personal data is processed for the purposes for which it is processed, personal data expected to be transferred to foreign countries, and security measures taken regarding data security</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Anonymization of Personal Data</td>
                      <td className="p-4">Anonymization of personal data means rendering personal data unable to be associated with an identified or identifiable natural person in any way, even by matching it with other data</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Destruction of Personal Data</td>
                      <td className="p-4">The process of deleting, anonymizing, or destroying personal data</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Deletion of Personal Data</td>
                      <td className="p-4">The process of making personal data inaccessible and unusable in any way for Relevant Users</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Committee</td>
                      <td className="p-4">Hair Skill Clinic Personal Data Protection Committee</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Board</td>
                      <td className="p-4">Personal Data Protection Commission and the data protection authority of the relevant member state</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">PDPA</td>
                      <td className="p-4">Personal Data Protection Act of Pakistan</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">GDPR</td>
                      <td className="p-4">European General Data Protection Regulation</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Special Categories of Personal Data</td>
                      <td className="p-4">Data relating to race, ethnic origin, political opinions, philosophical beliefs, religion, sect or other beliefs, dress and appearance, membership of associations, foundations or trade unions, health, sexual life, criminal convictions and security measures, and biometric and genetic data</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Periodic Destruction</td>
                      <td className="p-4">The process of automatically deleting, destroying, or anonymizing personal data at recurring intervals specified in the data retention and destruction policy, when all conditions for processing personal data specified in PDPA and GDPR cease to exist</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Policy</td>
                      <td className="p-4">Hair Skill Clinic Personal Data Processing and Protection Policy</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Hair Skill Clinic</td>
                      <td className="p-4">Hair Skill Clinic Private Limited.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Supplier Employee</td>
                      <td className="p-4">Natural persons working in institutions with which Hair Skill Clinic has any business relationship (such as business partners, suppliers, but not limited to these).</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Supplier Official</td>
                      <td className="p-4">Natural persons who are shareholders and officials of institutions with which Hair Skill Clinic has a business relationship</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Product or Service Recipient / Product and Service Recipient Official</td>
                      <td className="p-4">Natural persons who use or have used the products and services offered by Hair Skill Clinic, regardless of whether they have a contractual relationship with Hair Skill Clinic (Product or Service Recipient), or Officials of Legal Entities who use/have used these</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Data Processor</td>
                      <td className="p-4">A natural or legal person who processes personal data on behalf of the data controller based on the authority given by the data controller</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Data Recording System</td>
                      <td className="p-4">A recording system in which personal data is processed by structuring it according to specific criteria</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Data Controller</td>
                      <td className="p-4">A natural or legal person who determines the purposes and means of processing personal data and is responsible for establishing and managing the data recording system</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#772424]">Visitor</td>
                      <td className="p-4">Natural persons who have entered Hair Skill Clinic’s physical premises for various purposes or who visit our websites</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-[#772424] uppercase tracking-tight mt-6">II. GENERAL PRINCIPLES AND CONDITIONS REGARDING THE PROCESSING OF PERSONAL DATA</h2>
              <p>
                <strong>Hair Skill Clinic</strong>, in accordance with the Constitution, the PDPA, and Article 5 of the GDPR, processes personal data in a manner that is lawful and fair, accurate and, where necessary, up-to-date; for specific, explicit, and legitimate purposes; and in a way that is relevant, limited, and proportionate to the purpose. In this context, for residents of Pakistan, in accordance with the PDPA, it processes personal data based on one or more of the conditions specified in the PDPA for the processing of personal data, and retains personal data for the period required by law and/or by the purpose of personal data processing. Furthermore, it acts in compliance with the regulations stipulated for the processing of special categories of personal data, and in accordance with the regulations stipulated by law and set forth by the Commission regarding the transfer of personal data. It informs the Data Subject and provides the necessary information if the Data Subject requests it. In addition, all the above-mentioned activities are carried out for European residents in accordance with the relevant provisions of the GDPR.
              </p>

              <h3 className="text-xl font-black text-[#772424] mt-4">A. Principles Regarding the Processing of Personal Data</h3>
              <p>
                Your personal data is processed by <strong>Hair Skill Clinic</strong> in accordance with the personal data processing principles set out in the PDPA and Article 5 of the GDPR. Compliance with these principles is mandatory for each personal data processing activity:
              </p>
              
              <p className="font-bold text-[#772424] mt-2 mb-0">Processing personal data lawfully and fairly:</p>
              <p className="mt-0">
                In processing your personal data, we act in accordance with laws, secondary regulations, and general principles of law; we prioritize processing personal data limited to the purpose of processing and taking into account the Data Subject’s reasonable expectations.
              </p>

              <p className="font-bold text-[#772424] mt-2 mb-0">Personal data must be accurate and up-to-date:</p>
              <p className="w-full">
                Attention is paid to whether your processed personal data is up-to-date and to carrying out controls in this regard. The Data Subject is granted the right to request the correction or deletion of inaccurate or outdated data in this context.
              </p>

              <p className="font-bold text-[#772424] mt-2 mb-0">Processing personal data for specified, explicit, and legitimate purposes:</p>
              <p className="w-full">
                Before each personal data processing activity, data processing purposes are identified, and compliance with the lawfulness of these purposes is observed.
              </p>

              <p className="font-bold text-[#772424] mt-2 mb-0">Personal data must be relevant, limited, and proportionate to the purpose for which they are processed:</p>
              <p className="w-full">
                The personal data necessary to achieve the collection purpose is limited, and necessary technical and administrative measures are taken to prevent the processing of personal data not related to this purpose.
              </p>

              <p className="font-bold text-[#772424] mt-2 mb-0">Retaining personal data for the period required by law or the processing purposes:</p>
              <p className="w-full">
                Personal data is deleted, destroyed, or anonymized after the personal data processing purpose ceases to exist or upon the expiration of the period stipulated by law.
              </p>

              <h3 className="text-xl font-black text-[#772424] mt-4">B. Conditions Regarding the Processing of Personal Data</h3>
              <p>
                Your personal data is processed by <strong>Hair Skill Clinic</strong> if at least one of the personal data processing conditions specified in the PDPA and Article 6 and subsequent articles of the GDPR is met. Explanations regarding these conditions are provided below:
              </p>

              <p className="font-bold text-[#772424] mt-2 mb-0">Existence of the Data Subject’s Explicit Consent:</p>
              <p className="w-full">
                The Data Subject’s personal data can only be processed if the Data Subject gives consent freely, with sufficient information about the personal data processing activity, without any doubt, and limited only to that specific transaction.
              </p>

              <p className="font-bold text-[#772424] mt-2 mb-0">Clearly stipulated in laws:</p>
              <p className="w-full">
                Personal data can be processed without the Data Subject’s Explicit Consent within the framework of the relevant legal regulation if it is explicitly stipulated in laws.
              </p>

              <p className="font-bold text-[#772424] mt-2 mb-0">Inability to obtain the Data Subject’s Explicit Consent due to factual impossibility and the necessity of personal data processing:</p>
              <p className="w-full">
                Personal data belonging to a Data Subject who is unable to express consent or whose consent cannot be validated can be processed without Explicit Consent if the processing of personal data is necessary to protect the life or physical integrity of the Data Subject or a third person.
              </p>

              <p className="font-bold text-[#772424] mt-2 mb-0">The personal data processing activity is directly related to the establishment or performance of a contract:</p>
              <p className="w-full">
                If it is necessary to process the personal data of the parties to a contract established or already signed between the Data Subject and <strong>Hair Skill Clinic</strong>, the personal data processing activity can be carried out without Explicit Consent.
              </p>

              <p className="font-bold text-[#772424] mt-2 mb-0">Personal data processing activity is mandatory for the Data Controller to fulfill its legal obligation:</p>
              <p className="w-full">
                Personal data can be processed without Explicit Consent for the purpose of fulfilling legal obligations stipulated within the scope of current legislation.
              </p>

              <p className="font-bold text-[#772424] mt-2 mb-0">The Data Subject has made their personal data public:</p>
              <p className="w-full">
                Personal data that has been disclosed to the public in any way by the Data Subject and has become accessible to everyone as a result of this public disclosure can be processed without the Data Subject’s Explicit Consent, limited to the purpose of public disclosure.
              </p>

              <p className="font-bold text-[#772424] mt-2 mb-0">Personal data processing is mandatory for the establishment, exercise, or protection of a right:</p>
              <p className="w-full">
                If data processing is mandatory for the establishment, exercise, or protection of a right, the Data Subject’s personal data may be processed.
              </p>

              <p className="font-bold text-[#772424] mt-2 mb-0">Personal data processing is mandatory for the legitimate interests of the data controller, provided that it does not harm the fundamental rights and freedoms of the Data Subject:</p>
              <p className="w-full">
                Personal data can be processed provided that the Data Subject’s interests are balanced. In this context, when processing data based on legitimate interest, the legitimate interest that <strong>Hair Skill Clinic</strong> will obtain as a result of the processing activity is first determined. The possible impact of the processing of personal data on the Data Subject’s rights and freedoms is evaluated, and if it is concluded that the balance is not disturbed, the processing activity can be carried out without Explicit Consent.
              </p>

              <h3 className="text-xl font-black text-[#772424] mt-4">C. Conditions Regarding the Processing of Special Categories of Personal Data</h3>
              <p>
                In the PDPA, special categories of personal data are specified as limited in number. These are: individuals’ race, ethnic origin, political opinion, philosophical belief, religion, sect or other beliefs, dress and appearance, membership of associations, foundations or trade unions, health, sexual life, criminal convictions and security measures, and biometric and genetic data.
              </p>
              <p>
                <strong>Hair Skill Clinic</strong> may process special categories of personal data by taking additional measures determined by the Commission in the following situations:
              </p>
              
              <p className="font-bold text-[#772424] mt-2 mb-0">Processing of special categories of personal data other than health and sexual life:</p>
              <p className="w-full">
                It can be processed with the Data Subject’s Explicit Consent or, if explicitly stipulated in laws, without the Data Subject’s Explicit Consent.
              </p>

              <p className="font-bold text-[#772424] mt-2 mb-0">Personal data relating to health and sexual life:</p>
              <p className="w-full">
                It can be processed with the Data Subject’s Explicit Consent or by persons or authorized institutions and organizations under an obligation of confidentiality, without the Data Subject’s Explicit Consent, for the purposes of protecting public health, preventive medicine, medical diagnosis, treatment and care services, planning and management of health services and their financing.
              </p>
              <p>
                Regardless of the processing reason, general data processing principles are always taken into account during processing, and compliance with these principles is ensured. Regarding the protection of special categories of data, our company has implemented the “<strong>Policy on the Protection of Special Categories of Personal Data</strong>”, and our business units act in accordance with the provisions of this policy and take the necessary measures.
              </p>
              <p>
                Furthermore, the processing of special categories of personal data is possible if at least one of the following conditions listed in GDPR Article 9 exists. In the presence of these conditions, special categories of personal data can be processed by ensuring the appropriate security level also stipulated under PDPA. These issues are also clearly stated in our prepared Policy on the Protection of Special Categories of Personal Data:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>If the data subject has given explicit consent.</li>
                <li>To enable the data controller to fulfill its obligations under the Labor Law and Social Security Law.</li>
                <li>If the data subject is physically or legally unable to give consent.</li>
                <li>If the data has been made public by the data subject.</li>
                <li>If legal claims are made and data processing is necessary within the relevant judicial framework.</li>
                <li>Data processing for public interest, provided that necessary technical and administrative measures are ensured.</li>
                <li>For preventive medicine or occupational health purposes.</li>
                <li>For the purposes of carrying out archiving and research activities for the public interest in accordance with GDPR Article 89/1, based on law.</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-black text-[#772424] uppercase tracking-tight mt-6">III. CATEGORIES OF PERSONAL DATA PROCESSED BY HAIR SKILL CLINIC</h2>
              <p>
                <strong>Hair Skill Clinic</strong> processes personal data belonging to the Data Subject within the framework of the purposes and conditions specified in this Policy, in accordance with the PDPA, GDPR, and other relevant legislative provisions, including:
              </p>

              <div className="space-y-4 text-black text-sm md:text-base">
                <p><strong>Identity Information:</strong> Information contained in documents such as Driver’s License, Identity Card, Residence Permit, Passport, Marriage Certificate.</p>
                <p><strong>Contact Information:</strong> Telephone number, address, e-mail.</p>
                <p><strong>Personnel Information:</strong> Personal data processed to obtain information that will form the basis for the personnel rights of our employees or natural persons in a working relationship with Hair Skill Clinic.</p>
                <p><strong>Legal Transaction Information:</strong> Personal data processed for the determination, follow-up of our legal receivables and rights, and the performance of our debts, as well as for our legal obligations and compliance with Hair Skill Clinic’s policies.</p>
                <p><strong>Customer Transaction Information:</strong> Records related to the use of our products and services, as well as instructions and requests necessary for the customer’s use of products and services.</p>
                <p><strong>Physical Space Security Information:</strong> Records taken upon entry to a physical space, during stay within the physical space, and personal data related to documents.</p>
                <p><strong>Transaction Security Information:</strong> Personal data processed to ensure technical, administrative, legal, and commercial security during the conduct of activities.</p>
                <p><strong>Finance:</strong> Personal data related to all financial outcomes, documents, and records created according to the type of legal relationship established between Hair Skill Clinic and the data subject.</p>
                <p><strong>Professional Experience:</strong> Personal data processed for the purpose of measuring the performance of our employees or natural persons in a working relationship with our Company and planning and carrying out their career development within the scope of Hair Skill Clinic’s human resources policy.</p>
                <p><strong>Marketing Information:</strong> Personal data processed for the purpose of customizing and marketing our products and services in line with the data subject’s usage habits, preferences, and needs, and reports and evaluations created as a result of this processing.</p>
                <p><strong>Visual and Audio Records:</strong> Photographs and camera recordings (excluding records falling under Physical Space Security Information), audio recordings, and data contained in documents that are copies of documents containing personal data.</p>
                <p><strong>Special Categories of Personal Data:</strong> Data relating to health and sexual life, criminal convictions and security measures.</p>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-[#772424] uppercase tracking-tight mt-6">IV. TRANSFER OF PERSONAL DATA</h2>
              <p>
                Data transfer is carried out by <strong>Hair Skill Clinic</strong> for purposes such as ensuring the fulfillment of its operational and establishment objectives, securing the provision of services externally obtained from suppliers and necessary for <strong>Hair Skill Clinic</strong>’s commercial activities, ensuring the implementation of human resources and employment policies, fulfilling obligations within the framework of occupational health and safety and taking necessary measures, and providing necessary information to authorized public institutions and organizations.
              </p>
              <p>
                <strong>Hair Skill Clinic</strong> does not transfer personal data of data subjects to other persons without the explicit consent of the data subject, except in cases where PDPA, GDPR, or relevant legislation requires the transfer to administrative and judicial institutions and organizations.
              </p>
              <p>
                However, in cases where a legal justification exists, it may transfer the Data Subject’s personal data and special categories of personal data to natural persons and private law legal entities, shareholders, suppliers, and authorized public institutions and organizations and other relevant parties, by taking the necessary security measures in line with personal data processing purposes, without seeking explicit consent. In this regard, actions are taken in accordance with the regulations stipulated in the PDPA and/or Articles 6 and 8 and Part 5 of the GDPR.
              </p>

              <h3 className="text-xl font-black text-[#772424] mt-4">A. Transfer of Personal Data</h3>
              <p>
                Under the PDPA, even without the Data Subject’s Explicit Consent, personal data may be transferred to third parties by <strong>Hair Skill Clinic</strong> with due diligence and by taking all necessary security measures, including methods stipulated by the Commission, if one or more of the following conditions are met:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>The relevant activities regarding the transfer of personal data are explicitly stipulated in laws.</li>
                <li>It is mandatory to protect the life or physical integrity of the person who is unable to express consent due to factual impossibility or whose consent is not legally valid, or of another person.</li>
                <li>The transfer of personal data is directly related to and necessary for the establishment or performance of a contract.</li>
                <li>The transfer of personal data is mandatory for the fulfillment of a legal obligation.</li>
                <li>Personal data has been made public by the Data Subject, provided that it is transferred in a limited manner for the purpose of public disclosure.</li>
                <li>The transfer of personal data is mandatory for the establishment, exercise, or protection of a right of <strong>Hair Skill Clinic</strong> or the Data Subject or third parties.</li>
                <li>It is mandatory to carry out personal data transfer activities for the legitimate interests of <strong>Hair Skill Clinic</strong>, provided that it does not harm the fundamental rights and freedoms of the Data Subject.</li>
              </ul>
              <p>
                In addition to the above, personal data may be transferred to foreign countries declared by the Commission to have adequate protection, if any of the above conditions exist. If there is no adequate protection, data may be transferred to foreign countries where the data controllers in Pakistan and the relevant foreign country have committed in writing to provide adequate protection and where the Commission’s permission has been obtained, without the Data Subject’s Explicit Consent, in accordance with the data transfer conditions stipulated in the legislation.
              </p>
              <p>
                Under the GDPR, the free movement of personal data within the European Union is permitted in accordance with Articles 6 and 8. Its transfer outside the European Union is possible as regulated in Part 5, which includes Articles 44 and 50. According to GDPR Article 44, an adequate level of security must be ensured for a transfer outside the European Union. According to GDPR Article 45, a decision by the European Union Commission is required stating that the relevant country, region, or relevant sector in that place has an adequate level of security. Furthermore, according to Article 46, it is possible for the data controller to transfer personal data to the relevant third country, provided that effective legal remedies are available to the data subjects.
              </p>

              <h3 className="text-xl font-black text-[#772424] mt-4">B. Transfer of Special Categories of Personal Data</h3>
              <p>
                Special categories of personal data can be transferred by <strong>Hair Skill Clinic</strong> in accordance with the principles stated in this Policy and by taking all necessary technical and administrative measures, including methods to be determined by the Commission, and if the following conditions exist.
              </p>
              <ul className="list-disc ml-6 space-y-1.5">
                <li>Special categories of personal data, other than those relating to health and sexual life, may be processed without the <strong>Explicit Consent</strong> of the Data Subject if explicitly provided for by law, i.e., if there is an explicit provision in the relevant law regarding the processing of personal data. Otherwise, the <strong>Explicit Consent</strong> of the Data Subject will be obtained.</li>
                <li>Special categories of personal data relating to health and sexual life may be processed without explicit consent by persons under an obligation of secrecy or by authorized institutions and organizations for the purpose of protecting public health, preventive medicine, medical diagnosis, treatment, and care services, as well as planning and managing health services and their financing. Otherwise, the <strong>Explicit Consent</strong> of the Data Subject will be obtained.</li>
              </ul>
              <p>
                In addition to the above, personal data may be transferred to foreign countries with adequate protection if any of the above conditions exist. If adequate protection is not available, data may be transferred to foreign countries where the Data Controller / Data Processor undertakes in writing to provide adequate protection, in accordance with the data transfer conditions stipulated in the legislation.
              </p>
              <p>
                Regarding the transfer of special categories of personal data, our company has implemented a “<strong>Policy on the Protection of Special Categories of Personal Data</strong>,” and our operations adhere to the provisions of this policy, with necessary measures being taken. Regardless of the processing reason, general data processing principles are always considered during transfer processes, and compliance with these principles is ensured.
              </p>

              <h2 className="text-2xl md:text-3xl font-black text-[#772424] uppercase tracking-tight mt-6">V. MATTERS REGARDING THE PROTECTION OF PERSONAL DATA</h2>
              <p>
                <strong>Hair Skill Clinic</strong>, in accordance with the PDPA and Article 32 of the GDPR, takes the necessary technical and administrative measures to ensure an appropriate level of security to prevent the unlawful processing of personal data and unlawful access to data, and to ensure the preservation of data. Within this scope, it conducts or has conducted the necessary audits.
              </p>
              <p>
                Systems compatible with technological advancements are utilized to protect personal data in secure environments. Technical security systems are established for storage areas, and the technical measures taken are periodically audited by an audit mechanism determined by <strong>Hair Skill Clinic</strong>. Issues posing a risk are re-evaluated, and necessary technological solutions are developed.
              </p>
              <p>
                In contracts concluded by <strong>Hair Skill Clinic</strong> with relevant companies regarding the storage of personal data, provisions are included stating that the persons to whom personal data is transferred will take the necessary security measures for the protection of personal data and ensure compliance with these measures within their own organizations. In this regard, <strong>Hair Skill Clinic</strong> acts in accordance with the provisions of its Personal Data Protection Procedure in Third-Party Relations.
              </p>
              <p>
                The data protection principles adopted by <strong>Hair Skill Clinic</strong> include:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Providing clear information to individuals about who uses their personal data and how.</li>
                <li>Processing personal data to the necessary minimum extent for these purposes, without harming individuals’ fundamental rights and freedoms, and avoiding the processing of excessive data.</li>
                <li>Respecting the Data Subject’s rights regarding personal data, including the right of access.</li>
                <li>Maintaining an inventory of processed personal data categories.</li>
                <li>Ensuring personal data is accurate and up-to-date when necessary.</li>
                <li>Processing personal data fairly and lawfully.</li>
                <li>Processing personal data only when clearly necessary for legitimate corporate purposes.</li>
                <li>Retaining personal data only within the periods determined by legal regulations, <strong>Hair Skill Clinic</strong>’s legal obligations, or legitimate corporate interests, and as specified in <strong>Hair Skill Clinic</strong>’s Personal Data Retention and Destruction Policy.</li>
                <li>Transferring personal data abroad in accordance with the principles determined by PDPA and GDPR.</li>
                <li>Designating a Committee with special powers and responsibilities regarding the personal data protection system.</li>
                <li>Applying exceptions permitted by legislation.</li>
                <li>Preparation of this Policy.</li>
                <li>Taking all necessary technical and administrative measures, as determined by PDPA, GDPR, secondary legislation, and the Commission, to ensure an appropriate level of security for all personal data.</li>
                <li>Processing only relevant and appropriate personal data.</li>
              </ul>

              <h3 className="text-xl font-black text-[#772424] mt-4">A. Training Activities</h3>
              <p>
                <strong>Hair Skill Clinic</strong> provides its employees with necessary training on personal data protection within the scope of Policies and PDPA & GDPR Regulations and Procedures. Special emphasis is given in the training to the definitions of Special Categories of Personal Data and practices for their protection. If a <strong>Hair Skill Clinic</strong> employee accesses Personal Data physically or in a computer environment, our Company provides specific training to that employee regarding these accesses.
              </p>
              <p>
                <strong>Hair Skill Clinic</strong> ensures that employees are trained and that necessary notifications are made to increase awareness about preventing the unlawful processing of personal data, unlawful access to data, and ensuring the preservation of data.
              </p>

              <h3 className="text-xl font-black text-[#772424] mt-4">B. Audit Activities</h3>
              <p>
                <strong>Hair Skill Clinic</strong> reserves the right to regularly and autonomously audit at any time, without prior notice, whether all its employees, departments, and suppliers comply with this Policy and PDPA & GDPR Regulations, and conducts or has conducted the necessary routine audits within this scope. The results of these audits are evaluated within the company’s internal operations, and necessary activities are carried out to improve the measures taken.
              </p>

              <h2 className="text-2xl md:text-3xl font-black text-[#772424] uppercase tracking-tight mt-6">VI. RETENTION AND DESTRUCTION OF PERSONAL DATA</h2>
              <p>
                <strong>Hair Skill Clinic</strong> retains personal data for the period necessary for the purpose for which they are processed and in accordance with the minimum periods stipulated in the legislation applicable to the relevant activity. In this context, it first determines whether a retention period for personal data is stipulated in the relevant legislation; if a period is specified, it acts in accordance with that period. If there is no period in the legislation, personal data is retained for the period necessary for the purpose for which it is processed. Personal data is destroyed at the end of the determined retention periods, in accordance with the periodic destruction periods specified in <strong>Hair Skill Clinic</strong>’s Personal Data Retention and Destruction Policy or upon the Data Subject’s request, and using the determined destruction methods (deletion and/or destruction and/or anonymization).
              </p>
              <p>
                For detailed information, you can access <strong>Hair Skill Clinic</strong>’s Personal Data Retention and Destruction Policy at www.hairskillclinic.com.
              </p>

              <h2 className="text-2xl md:text-3xl font-black text-[#772424] uppercase tracking-tight mt-6">VII. INFORMING AND NOTIFYING THE DATA SUBJECT</h2>
              <p>
                <strong>Hair Skill Clinic</strong> informs the Data Subject in accordance with PDPA, GDPR, and secondary regulations. In this context, if personal data is obtained directly from the Data Subject, it is informed at the time of acquisition; if it is not obtained from the Data Subject, within a reasonable period from the acquisition of personal data; but in any case, without being dependent on the Data Subject’s request, the Data Subject is informed of:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Hair Skill Clinic</strong>’s identity,</li>
                <li>The purpose for which personal data will be processed,</li>
                <li>To whom and for what purposes it may be transferred,</li>
                <li>The method of personal data collection,</li>
                <li>The legal basis for personal data collection,</li>
                <li>The Data Subject’s other rights listed in PDPA or GDPR.</li>
              </ul>
              <p>
                It must be ensured that this notification, in addition to the above, definitely includes the Data Subject’s rights listed in the PDPA, GDPR, and this Policy. The following points are taken into consideration when making the notification:
              </p>
              <ul className="list-disc ml-6 space-y-1.5">
                <li>The information within the scope of the notification is provided using clear and simple language. Expressions that might create the impression that the relevant personal data could be processed for other purposes that may arise in the future are not used.</li>
                <li>Notification can be made verbally, in writing, via sound recording through a call center, through various physical or electronic media, and by directing to a web page containing personal data notification texts and other media that may be announced later. The relevant department providing the information and fulfilling the notification obligation takes measures to prove this in a lawful and proper manner.</li>
                <li>If the data processing purpose specified in the notification changes while obtaining personal data, the notification obligation for this new purpose is additionally fulfilled in accordance with the procedures foreseen above.</li>
                <li>If the acquired personal data will only be used for communication with the Data Subject, the notification can be made at the time of the initial communication.</li>
                <li>If the acquired personal data will be transferred to third parties, care is taken to ensure that the notification is made at the latest at the time the personal data is first transferred.</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-black text-[#772424] uppercase tracking-tight mt-6">VIII. RIGHTS OF THE DATA SUBJECT AND EXERCISE OF THESE RIGHTS</h2>
              <p>
                The legal rights that the Data Subject can exercise regarding personal data are listed below:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>To learn whether personal data is processed.</li>
                <li>To request information if personal data has been processed.</li>
                <li>To learn the purpose of processing personal data and whether they are used in accordance with their purpose.</li>
                <li>To learn the third parties to whom personal data is transferred domestically or abroad.</li>
                <li>To request the correction of your personal data if it is incomplete or incorrectly processed and to request that the transaction made in this context be notified to third parties to whom your personal data has been transferred.</li>
                <li>To request the deletion, destruction, or anonymization of personal data if the reasons for its processing have ceased to exist, despite having been processed in accordance with the law and other relevant legal provisions, and to request that the transaction made in this context be notified to third parties to whom your personal data has been transferred.</li>
                <li>To object to an unfavorable outcome arising from the exclusive analysis of processed data through automated systems.</li>
                <li>To request compensation for damages incurred due to the unlawful processing of personal data.</li>
                <li>To transfer personal data to a different data controller requested by the data subject (right to data portability).</li>
              </ul>
              <p>
                If the Data Subject is a resident of Pakistan, they can submit their requests regarding the rights listed in this article in English, in accordance with the procedures for Applications to the Data Controller. If the Data Subject is a resident of Europe, they can submit their requests in English by filling out the <strong>Hair Skill Clinic</strong> Application Form in writing or by using a Registered Electronic Mail address, Secure Electronic Signature, Mobile Signature, or the e-mail address previously notified and registered in our system, and forwarding it to <strong>Hair Skill Clinic</strong>.
              </p>

              <h2 className="text-2xl md:text-3xl font-black text-[#772424] uppercase tracking-tight mt-6">IX. HAIR SKILL CLINIC’S RESPONSE TO APPLICATIONS</h2>
              <p>
                <strong>Hair Skill Clinic</strong> takes all necessary technical and administrative measures to conclude applications made by the Data Subject effectively, lawfully, and in accordance with the rule of honesty.
              </p>
              <p>
                The Data Subject’s applications may be accepted or rejected with an explanation of the reason. The response to the Data Subject’s application may be communicated to the Data Subject in writing or electronically.
              </p>
              <p>
                If the Data Subject submits their request regarding the rights contained in Policy section VIII, titled “Rights of the Data Subject and Exercise of These Rights,” to <strong>Hair Skill Clinic</strong> in accordance with the aforementioned procedures, the relevant request will be concluded free of charge as soon as possible and within 30 (thirty) days at the latest, depending on the nature of the request. However, if the transaction requires an additional cost and the conditions determined by the Board are met, the fee specified in the tariff may be charged.
              </p>

              <h2 className="text-2xl md:text-3xl font-black text-[#772424] uppercase tracking-tight mt-6">X. EFFECTIVENESS AND UPDATE PERIOD OF THE POLICY</h2>
              <p>
                This Policy, prepared by <strong>Hair Skill Clinic</strong>, came into force on 01.05.2021. Necessary updates will be made if the entire Policy or specific articles thereof are renewed.
              </p>
              <p>
                The Committee is responsible for the implementation, updating, and dissemination of this Policy. The Policy is published on the <strong>Hair Skill Clinic</strong> website.
              </p>

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
                    <input type="checkbox" id="privacyCheck" required defaultChecked className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer" />
                    <label htmlFor="privacyCheck" className="text-xs text-white/80 cursor-pointer">
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