import React, { ReactNode } from "react";
import { BlogPost } from "."; // Assuming your interface is in blogs.tsx

export const generalBlogs: BlogPost[] = [
  {
    id: 1,
    slug: "seborrheic-dermatitis",
    category: "general",
    title: "Can Patients with Seborrheic Dermatitis Undergo Hair Transplantation?",
    date: "May 14, 2026",
    previewImage: "/blogs/general/1.webp",
    summary: "This article writing by Dr. Mehmet Erdogan. Co-founder & Hair Transplant Doctor Hair Skill Clinic Lahore TEMOS A-Rated Accredited medical facility.",
    seoDescription: "Learn if you can safely undergo a hair transplant with seborrheic dermatitis. Discover Hair Skill Clinic Lahore pre-surgery scalp clearing protocols.",
    metaTitle: "Can Patients with Seborrheic Dermatitis Undergo Hair Transplantation?",
    focusKeyword: "Seborrheic Dermatitis Hair Transplant",
    content: (
      <>
        <p className="mb-4">Seborrheic dermatitis is a common skin condition that mainly affects your scalp. It causes scaly patches, red skin, and stubborn dandruff. For individuals considering hair restoration, a primary medical question arises regarding safety and graft survival.</p>
        <p className="mb-4">At Hair Skill Clinic, our standard protocol requires active scalp inflammation to be fully treated and brought under control before any surgical incisions are made. Performing micro-surgery on an actively flaking or inflamed scalp increases the risk of post-surgical infections and can negatively impact follicular unit anchoring.</p>
        <p>Once your dermatologist or our medical team clears the condition using specialized medicated shampoos and topical treatments, hair transplantation can proceed safely with high graft survival rates.</p>
      </>
    )
  },
  {
    id: 2,
    slug: "minoxidil-guide",
    category: "general",
    title: "What Is Minoxidil? A Complete Guide",
    date: "June 02, 2026",
    previewImage: "/blogs/general/2.webp",
    summary: "This Guide writing by Dr. Gokay Bilgin M.D. and Dr. Mehmet Erdogan M.D. Hair Transplant Doctors at Hair Skill Clinic. What Is Minoxidil and how does it work?",
    seoDescription: "A complete medical guide to Minoxidil for hair regrowth. Discover how topical Minoxidil works as a vasodilator to support transplanted hair grafts.",
    metaTitle: "What Is Minoxidil? A Complete Guide for Hair Regrowth",
    focusKeyword: "Minoxidil Guide",
    content: (
      <>
        <p className="mb-4">Minoxidil is a well-known topical medication utilized worldwide to help slow down hair loss and promote hair regrowth in both men and women experiencing pattern baldness.</p>
        <p className="mb-4">Originally developed as an oral blood pressure medication, clinical researchers noted its powerful ability to stimulate hypertrichosis. As a vasodilator, topical Minoxidil widens blood vessels in the scalp, allowing more oxygen, blood, and nutrients to reach the hair follicles.</p>
        <p>Consistent daily application is required during your restoration journey. Our surgeons often recommend integrating Minoxidil several weeks after your transplant procedure to accelerate shedding recovery and support the newly implanted grafts.</p>
      </>
    )
  }
];