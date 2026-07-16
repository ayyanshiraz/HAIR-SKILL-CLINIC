import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // IMPORTANT: Replace this with your actual live domain URL
  const baseUrl = 'https://www.hairskill.com';

  const routes = [
    '',
    '/about/data-protection',
    '/about/ethics',
    '/about/gentle-care',
    '/about/mission',
    '/about/our-story',
    '/about/philosophy',
    '/about/reference-program',
    '/about/why-choose-us',
    '/before-after',
    '/blogs/hair-loss',
    '/blogs/hair-transplant',
    '/cart',
    '/checkout',
    '/contact',
    '/cookie-policy',
    '/doctors-category',
    '/faqs',
    '/faqs/general',
    '/faqs/post-op',
    '/faqs/pre-op',
    '/female-hair-loss-guide',
    '/hair-transplant',
    '/hair-unit',
    '/patient-guide/after',
    '/patient-guide/before',
    '/patient-guide/day-of',
    '/patient-guide/hair-washing',
    '/patient-guide/sterilization',
    '/privacy-policy',
    '/reviews',
    '/side-effects-after-hair-transplant',
    // Niche wale sabhi paths mein '/hair-transplant' add kar diya gaya hai
    '/hair-transplant/techniques/body',
    '/hair-transplant/techniques/dhi',
    '/hair-transplant/techniques/manual-fue',
    '/hair-transplant/techniques/manual-punch',
    '/hair-transplant/techniques/needle-free',
    '/hair-transplant/techniques/sapphire',
    '/hair-transplant/treatments/afro-hair',
    '/hair-transplant/treatments/beard-transplant',
    '/hair-transplant/treatments/chinese',
    '/hair-transplant/treatments/exosome-hair-therapy',
    '/hair-transplant/treatments/extracellular-matrix',
    '/hair-transplant/treatments/eyebrow',
    '/hair-transplant/treatments/female',
    '/hair-transplant/treatments/fue-by-moterize',
    '/hair-transplant/treatments/fut',
    '/hair-transplant/treatments/long-fue',
    '/hair-transplant/treatments/mesotherapy',
    '/hair-transplant/treatments/moustache',
    '/hair-transplant/treatments/ozone-hair-therapy',
    '/hair-transplant/treatments/prp-hair-treatment',
    '/hair-transplant/treatments/sideburn',
    '/hair-transplant/techniques/unshaven-transplant',
    '/hair-transplant/treatments/widows-peak'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}