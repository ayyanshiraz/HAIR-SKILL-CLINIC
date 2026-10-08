import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PreOpClient = dynamic(() => import("../../../components/PreOpClient"));

export const metadata: Metadata = {
  title: "Pre-Op Hair Transplant FAQs | Hair Skill Clinic Lahore",
  description: "Expert answers to pre-op hair transplant FAQs in Lahore. Learn about candidacy, preparation, and what to expect at Hair Skill.",
  keywords: ["Pre-Op Hair Transplant Lahore", "Hair Surgery Preparation FAQs", "Hair Transplant Candidacy", "Hair Skill Clinic Pre-Op", "Before Hair Transplant Guide"],
  alternates: {
    canonical: "https://www.hairskill.com/faqs/pre-op",
  },
  openGraph: {
    title: "Pre-Op Hair Transplant FAQs - Hair Skill Clinic Lahore",
    description: "Expert answers to pre-op hair transplant FAQs in Lahore. Learn about candidacy, preparation, and what to expect at Hair Skill.",
    url: "https://www.hairskill.com/faqs/pre-op",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Pre-Op Hair Transplant FAQs at Hair Skill Clinic Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function PreOpPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can women get a restoration procedure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, of course. Follicular thinning affects approximately 50% to 65% of men and around 40% to 45% of women during their lifetime. In selected female patients, restoration surgery can also be performed."
        }
      },
      {
        "@type": "Question",
        "name": "Are you awake during the surgical procedure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, patients are normally awake during the procedure. In some cases, mild sedation may be used, but we generally do not recommend general anesthesia because this is a cosmetic and usually well-tolerated procedure."
        }
      },
      {
        "@type": "Question",
        "name": "How many grafts are needed for a full head?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This varies depending on the size of the scalp and the characteristics of the donor area. For example, in some patients, 5,000 grafts may cover only 60% of the scalp, while in others, 4,000 grafts may be enough for nearly full coverage."
        }
      },
      {
        "@type": "Question",
        "name": "Is it necessary to have a haircut or shave during surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In most cases, some level of shaving is required during the procedure. This allows the surgical team to see the angles more clearly and work more precisely in both the donor and recipient areas."
        }
      },
      {
        "@type": "Question",
        "name": "What is the optimal donor area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The optimal donor area is usually the back of the head. We also refer to this area as the safe donor zone because the follicles there are generally more resistant to the effects of thinning."
        }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PreOpClient />
    </main>
  );
}