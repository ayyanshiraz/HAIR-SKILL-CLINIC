import { MetadataRoute } from "next";

import { blogsDatabase } from "../data"; 

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hairskill.com";

  const staticRoutes = [
    "",
    "/about/data-protection",
    "/about/ethics",
    "/about/gentle-care",
    "/about/mission",
    "/about/our-story",
    "/about/philosophy",
    "/about/reference-program",
    "/about/why-choose-us",
    "/before-after",
    "/blogs",
    "/blogs/hair-loss",
    "/blogs/hair-transplant",
    "/blogs/general",
    "/cart",
    "/checkout",
    "/contact",
    "/cookie-policy",
    "/doctors-category",
    "/faqs",
    "/faqs/general",
    "/faqs/post-op",
    "/faqs/pre-op",
    "/hair-transplant",
    "/hair-unit",
    "/patient-guide/after",
    "/patient-guide/before",
    "/patient-guide/day-of",
    "/patient-guide/hair-washing",
    "/patient-guide/sterilization",
    "/privacy-policy",
    "/reviews",
    "/hair-transplant/techniques/body",
    "/hair-transplant/treatments/dhi",
    "/hair-transplant/treatments/manual-fue",
    "/hair-transplant/techniques/manual-punch",
    "/hair-transplant/techniques/needle-free",
    "/hair-transplant/techniques/sapphire",
    "/hair-transplant/treatments/afro-hair",
    "/hair-transplant/treatments/beard-transplant",
    "/hair-transplant/treatments/chinese-hair-transplant",
    "/hair-transplant/treatments/female",
    "/hair-transplant/treatments/fue-by-moterize",
    "/hair-transplant/treatments/fut",
    "/hair-transplant/techniques/long-fue",
    "/hair-transplant/treatments/mesotherapy",
    "/hair-transplant/treatments/ozone-hair-therapy",
    "/hair-transplant/treatments/prp-hair-treatment",
    "/hair-transplant/treatments/sideburn",
    "/hair-transplant/techniques/unshaven-transplant",
    "/hair-transplant/treatments/widows-peak"
  ];

  // Map all static routes for the sitemap
  const sitemapRoutes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamically map all blogs from the database
  const blogRoutes = blogsDatabase.map((post) => ({
    url: `${baseUrl}/blogs/${post.category}/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Combine static and dynamic routes
  return [...sitemapRoutes, ...blogRoutes];
}