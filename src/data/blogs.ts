export interface BlogPost {
  slug: string;
  category: "general" | "hair-transplant" | "hair-loss";
  title: string;
  date: string;
  previewImage: string;
  summary: string;
  seoDescription: string;
  content: string[];
}

export const blogsDatabase: BlogPost[] = [
  // --- GENERAL CATEGORY ---
  {
    slug: "seborrheic-dermatitis",
    category: "general",
    title: "Can Patients with Seborrheic Dermatitis Undergo Hair Transplantation?",
    date: "May 14, 2026",
    previewImage: "/blogs/1.webp",
    summary: "This article writing by Dr. Mehmet Erdogan. Co-founder & Hair Transplant Doctor Hair Skill Clinic Lahore TEMOS A-Rated Accredited medical facility.",
    seoDescription: "Learn if you can safely undergo a hair transplant with seborrheic dermatitis. Discover Hair Skill Clinic Lahore pre-surgery scalp clearing protocols.",
    content: [
      "Seborrheic dermatitis is a common skin condition that mainly affects your scalp. It causes scaly patches, red skin, and stubborn dandruff. For individuals considering hair restoration, a primary medical question arises regarding safety and graft survival.",
      "At Hair Skill Clinic, our standard protocol requires active scalp inflammation to be fully treated and brought under control before any surgical incisions are made. Performing micro-surgery on an actively flaking or inflamed scalp increases the risk of post-surgical infections and can negatively impact follicular unit anchoring.",
      "Once your dermatologist or our medical team clears the condition using specialized medicated shampoos and topical treatments, hair transplantation can proceed safely with high graft survival rates."
    ]
  },
  {
    slug: "minoxidil-guide",
    category: "general",
    title: "What Is Minoxidil? A Complete Guide",
    date: "June 02, 2026",
    previewImage: "/blogs/2.webp",
    summary: "This Guide writing by Dr. Gokay Bilgin M.D. and Dr. Mehmet Erdogan M.D. Hair Transplant Doctors at Hair Skill Clinic. What Is Minoxidil and how does it work?",
    seoDescription: "A complete medical guide to Minoxidil for hair regrowth. Discover how topical Minoxidil works as a vasodilator to support transplanted hair grafts.",
    content: [
      "Minoxidil is a well-known topical medication utilized worldwide to help slow down hair loss and promote hair regrowth in both men and women experiencing pattern baldness.",
      "Originally developed as an oral blood pressure medication, clinical researchers noted its powerful ability to stimulate hypertrichosis. As a vasodilator, topical Minoxidil widens blood vessels in the scalp, allowing more oxygen, blood, and nutrients to reach the hair follicles.",
      "Consistent daily application is required during your restoration journey. Our surgeons often recommend integrating Minoxidil several weeks after your transplant procedure to accelerate shedding recovery and support the newly implanted grafts."
    ]
  },
  // --- HAIR TRANSPLANT CATEGORY ---
  {
    slug: "nutrition-transplant-day",
    category: "hair-transplant",
    title: "Nutrition on Hair Transplant Day",
    date: "June 18, 2026",
    previewImage: "/blogs/hairtransplant/1.webp",
    summary: "Hair transplant day can feel exciting stressful and even a bit overwhelming. Eating the right nutrients before and after your procedure helps your scalp heal faster.",
    seoDescription: "Discover what to eat on the day of your hair transplant surgery. Optimize your surgical recovery and graft survival with proper clinical nutrition.",
    content: [
      "Hair transplant day can feel exciting stressful and even a bit overwhelming. Eating the right nutrients before and after your procedure helps your scalp heal faster and provides your body with the energy required for micro-surgical recovery.",
      "On the morning of your procedure, consume a balanced breakfast rich in complex carbohydrates and lean proteins. Avoid highly caffeinated beverages or heavy greasy foods that could spike your blood pressure or cause stomach discomfort during your session in the clinic.",
      "Staying well hydrated with pure water ensures optimal blood circulation to the scalp. Post-surgery, prioritize anti-inflammatory foods such as leafy greens, berries, and omega-3 rich fish to accelerate cellular repair around the donor and recipient areas."
    ]
  },
  {
    slug: "vitamin-supplements-after-transplant",
    category: "hair-transplant",
    title: "Vitamin Supplements After Hair Transplant",
    date: "June 25, 2026",
    previewImage: "/blogs/hairtransplant/2.webp",
    summary: "A hair transplant is not only a surgical procedure but a cellular journey. Taking proper vitamin supplements strengthens newly implanted follicular units.",
    seoDescription: "Explore the best vitamin supplements to take after a hair transplant. Learn how Biotin, Zinc, and Vitamin D support newly implanted follicular units.",
    content: [
      "A hair transplant is not only a surgical procedure but a cellular journey. Taking proper vitamin supplements strengthens newly implanted follicular units and minimizes shock loss during the initial shedding phase.",
      "Biotin (Vitamin B7) is one of the most critical supplements for structural keratin production. Our clinical team regularly prescribes high-grade Biotin alongside Zinc and Vitamin D to stimulate active follicle growth cycles and improve hair shaft thickness.",
      "While supplements provide vital micro-nutrients, they should always be taken under medical supervision. Consult with our surgeons during your follow-up appointments to establish a tailored supplementation schedule that complements your healing timeline."
    ]
  },
  // --- HAIR LOSS CATEGORY ---
  {
    slug: "prp-hair-treatment",
    category: "hair-loss",
    title: "PRP Hair Treatment",
    date: "June 26, 2026",
    previewImage: "/blogs/hairloss/1.webp",
    summary: "PRP hair treatment is a medical procedure that uses your native plasma to stimulate dormant follicles. It increases blood supply to the scalp and triggers natural hair thickness.",
    seoDescription: "Learn how Platelet Rich Plasma (PRP) scalp therapy stimulates dormant hair follicles and thickens thinning hair naturally at Hair Skill Clinic Lahore.",
    content: [
      "PRP hair treatment is an advanced non-surgical medical procedure that uses your native blood plasma to stimulate dormant follicles. By concentrating the growth factors present in your own platelets, surgeons can directly awaken miniaturized hair roots.",
      "During a session at Hair Skill Clinic, a small sample of your blood is drawn and placed into a specialized medical centrifuge. This rapid spinning isolates the Platelet Rich Plasma from red blood cells. The concentrated liquid is then carefully injected across thinning recipient areas of your scalp.",
      "Regular PRP therapy significantly increases local blood supply to the follicular matrix, extending the active anagen growth phase and increasing overall hair shaft caliber over a series of monthly treatments."
    ]
  },
  {
    slug: "ozone-hair-therapy",
    category: "hair-loss",
    title: "Ozone Hair Therapy",
    date: "June 27, 2026",
    previewImage: "/blogs/hairloss/2.webp",
    summary: "Ozone therapy for hair is a targeted scalp treatment that infuses native tissue with concentrated oxygen. It eliminates scalp inflammation dandruff and excessive shedding.",
    seoDescription: "Discover how Ozone Hair Therapy infuses concentrated oxygen into the scalp to eliminate bacterial dandruff and stop hair shedding at Hair Skill Clinic.",
    content: [
      "Ozone therapy for hair is a targeted clinical scalp treatment that infuses native dermal tissue with concentrated active oxygen (O3). This potent infusion rapidly revitalizes damaged cellular structures and cleanses the superficial layers of the scalp.",
      "When applied clinically, ozone acts as a powerful antimicrobial agent. It rapidly eliminates persistent fungal infections, stubborn dandruff, and deep follicle inflammation that often accelerate premature hair shedding.",
      "By oxidizing the localized scalp environment, Ozone Hair Therapy stimulates cellular renewal, strengthens hair roots, and creates the pristine biological foundation required for healthy long-term hair density."
    ]
  }
];