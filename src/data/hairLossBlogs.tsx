import React, { ReactNode } from "react";
import { BlogPost } from ".";

export const hairLossBlogs: BlogPost[] = [
  {
    id: 1,
    slug: "prp-hair-treatment",
    category: "hair-loss",
    title: "PRP Hair Treatment",
    date: "June 26, 2026",
    previewImage: "/blogs/hairloss/1.webp",
    summary: "PRP hair treatment is a medical procedure that uses your native plasma to stimulate dormant follicles. It increases blood supply to the scalp and triggers natural hair thickness.",
    seoDescription: "Learn how Platelet Rich Plasma (PRP) scalp therapy stimulates dormant hair follicles and thickens thinning hair naturally at Hair Skill Clinic Lahore.",
    metaTitle: "PRP Hair Treatment Process and Benefits",
    focusKeyword: "PRP Hair Treatment",
    content: (
      <>
        <p className="mb-4">PRP hair treatment is an advanced non-surgical medical procedure that uses your native blood plasma to stimulate dormant follicles. By concentrating the growth factors present in your own platelets, surgeons can directly awaken miniaturized hair roots.</p>
        <p className="mb-4">During a session at Hair Skill Clinic, a small sample of your blood is drawn and placed into a specialized medical centrifuge. This rapid spinning isolates the Platelet Rich Plasma from red blood cells. The concentrated liquid is then carefully injected across thinning recipient areas of your scalp.</p>
        <p>Regular PRP therapy significantly increases local blood supply to the follicular matrix, extending the active anagen growth phase and increasing overall hair shaft caliber over a series of monthly treatments.</p>
      </>
    )
  },
  {
    id: 2,
    slug: "ozone-hair-therapy",
    category: "hair-loss",
    title: "Ozone Hair Therapy",
    date: "June 27, 2026",
    previewImage: "/blogs/hairloss/2.webp",
    summary: "Ozone therapy for hair is a targeted scalp treatment that infuses native tissue with concentrated oxygen. It eliminates scalp inflammation dandruff and excessive shedding.",
    seoDescription: "Discover how Ozone Hair Therapy infuses concentrated oxygen into the scalp to eliminate bacterial dandruff and stop hair shedding at Hair Skill Clinic.",
    metaTitle: "Ozone Hair Therapy for Scalp Health",
    focusKeyword: "Ozone Hair Therapy",
    content: (
      <>
        <p className="mb-4">Ozone therapy for hair is a targeted clinical scalp treatment that infuses native dermal tissue with concentrated active oxygen (O3). This potent infusion rapidly revitalizes damaged cellular structures and cleanses the superficial layers of the scalp.</p>
        <p className="mb-4">When applied clinically, ozone acts as a powerful antimicrobial agent. It rapidly eliminates persistent fungal infections, stubborn dandruff, and deep follicle inflammation that often accelerate premature hair shedding.</p>
        <p>By oxidizing the localized scalp environment, Ozone Hair Therapy stimulates cellular renewal, strengthens hair roots, and creates the pristine biological foundation required for healthy long-term hair density.</p>
      </>
    )
  }
];