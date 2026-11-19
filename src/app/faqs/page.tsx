import type { Metadata } from "next";
import dynamic from "next/dynamic";

const FAQClient = dynamic(() => import("../../components/FAQSClient"));

export const metadata: Metadata = {
  title: "Hair Transplant FAQs & Aftercare Info | Hair Skill Lahore",
  description: "Got questions about hair transplant procedures or PRP aftercare? Find comprehensive answers and recovery guidelines on the Hair Skill Clinic Lahore FAQ page.",
  keywords: ["Hair Transplant FAQs Lahore", "PRP Treatment Questions", "Hair Surgery Aftercare FAQs", "Hair Clinic Queries Lahore", "Hair Skill FAQs"],
  alternates: {
    canonical: "https://www.hairskill.com/faqs",
  },
  openGraph: {
    title: "Hair Transplant FAQs & Aftercare Info - Hair Skill Lahore",
    description: "Got questions about hair transplant procedures or PRP aftercare? Find comprehensive answers and recovery guidelines on the Hair Skill Clinic Lahore FAQ page.",
    url: "https://www.hairskill.com/faqs",
    siteName: "Hair Skill Clinic",
    images: [
      {
        url: "https://www.hairskill.com/home/owner1.webp",
        width: 1200,
        height: 630,
        alt: "Hair Transplant Frequently Asked Questions at Hair Skill Clinic Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function FAQPage() {
  // FAQPage structured data matching the visible questions and answers in FAQSClient
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long should I wear a hat after a hair transplant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend that you use the hat we gave you for 10 days after hair transplantation."
        }
      },
      {
        "@type": "Question",
        "name": "When can I do sports after surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should wait at least 1 month after the operation to start exercising."
        }
      },
      {
        "@type": "Question",
        "name": "Should I wash my head every day after a hair transplant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After hair transplantation, you should wash your head every day for 1 month."
        }
      },
      {
        "@type": "Question",
        "name": "When can I remove my bandage after hair transplantation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You need to wash your head on the second day after the operation. The bandage is removed before washing your head and does not need to be used again afterwards."
        }
      },
      {
        "@type": "Question",
        "name": "How long do I need to use special shampoo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should use the shampoo we recommend for 1 month. After you are sure of the health of your hair and scalp, you can continue to use the shampoo you always use."
        }
      },
      {
        "@type": "Question",
        "name": "How long should I use Panthenol spray?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You need to use it for about 15 days, until the crusts are completely removed from the skin."
        }
      },
      {
        "@type": "Question",
        "name": "When can I have sexual intercourse after hair transplantation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are no restrictions on sexual intercourse after the operation, it is recommended that you do not exert too much effort."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use a different product than the recommended ones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should carefully examine the content of the products you will use and choose natural products that will not harm you and do not contain paraben."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use panthenol spray on the donor area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can use it, but this will cause the spray to run out very quickly."
        }
      },
      {
        "@type": "Question",
        "name": "Is there another product I can use instead of Panthenol spray?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can use Bepanthol body lotion, this product is available in all pharmacies."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if swelling occurs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Swelling is normal, do not worry. You can apply ice for 10 minutes every two hours and massage your head gently. The swelling will disappear in a few days."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQClient />
    </>
  );
}