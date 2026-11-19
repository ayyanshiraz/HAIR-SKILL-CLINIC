import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PostOpClient = dynamic(() => import("../../../components/PostOpClient"));

export const metadata: Metadata = {
  title: "Post-Op Hair Transplant FAQs | Hair Skill Clinic Lahore",
  description: "Find expert answers to post-op hair transplant questions in Lahore. Learn essential guidelines about washing, diet, and fast recovery at Hair Skill Clinic.",
  keywords: ["Post-Op Hair Transplant Lahore", "Hair Surgery Recovery FAQs", "Hair Transplant Aftercare", "Hair Skill Clinic Post-Op", "Washing After Hair Transplant"],
  alternates: {
    canonical: "https://www.hairskill.com/faqs/post-op",
  },
  openGraph: {
    title: "Post-Op Hair Transplant FAQs - Hair Skill Clinic Lahore",
    description: "Find expert answers to post-op hair transplant questions in Lahore. Learn essential guidelines about washing, diet, and fast recovery at Hair Skill Clinic.",
    url: "https://www.hairskill.com/faqs/post-op",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Post-Op Hair Transplant FAQs at Hair Skill Clinic Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

// Top 8 high-intent Post-Op FAQs matching visible content in PostOpClient
const topPostOpFaqs = [
  {
    q: "HOW LONG DOES IT TAKE TO THE GRAFTS BECOME SECURE AFTER THE SURGERY?",
    a: "The grafts become secure at least 5 to 10 days after the surgery. Patients should avoid wearing hats or sleeping normally and follow all post-operative care instructions for at least 10 days."
  },
  {
    q: "HOW CAN I SLEEP AFTER HAIR TRANSPLANTATION?",
    a: "Patients after the hair transplantation should sleep on their donor area for at least 7 to 10 days. We usually recommend using a neck pillow and avoiding turning left or right so the transplanted hairs do not touch the pillow."
  },
  {
    q: "HOW OFTEN SHOULD YOU WASH YOUR HAIR AFTER THE TRANSPLANT SURGERY?",
    a: "For the first 30 days after the hair transplant surgery, you should wash your hair every day. For the first 2 weeks, you should wash your hair the way explained in the clinic guideline."
  },
  {
    q: "WHEN CAN I SHOWER NORMALLY AFTER HAIR TRANSPLANT?",
    a: "You can use your shower with normal pressure 10 days after a hair transplant. In 10 days, your grafts attach securely to your skin so normal water pressure will not harm them."
  },
  {
    q: "WHEN CAN I GO BACK TO WORK AFTER HAIR TRANSPLANTATION?",
    a: "Patients can go back to office work one to two days after the hair transplantation, though we recommend resting for at least one or two days. For physical jobs or dusty environments, wait 10 to 14 days."
  },
  {
    q: "CAN YOU WEAR A HAT AFTER HAIR TRANSPLANT?",
    a: "You can wear a hat after 10 days of your hair transplant. Initially, a loose hat, bandana, or loose scarf works best."
  },
  {
    q: "CAN I CUT MY TRANSPLANTED HAIR?",
    a: "Patients should avoid shaving, cutting, or trimming their hair for at least one month. After one month, you can use scissors for the recipient side and clippers for the donor side, while avoiding clippers on the recipient area for at least 2 to 3 months."
  },
  {
    q: "WHAT IS THE SUCCESS RATES OF THE HAIR TRANSPLANTATION?",
    a: "The frontal area is more vascularized, so success rates are more than 95 percent. For the crown area, due to circulation and anatomical conditions, success rates are typically 70 to 80 percent."
  }
];

export default function PostOpPage() {
  // FAQPage structured data generated from top Post-Op FAQs
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": topPostOpFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PostOpClient />
    </>
  );
}