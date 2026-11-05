import { MetadataRoute } from "next";
import { blogsDatabase } from "../data";
import { isRetiredSlug } from "../../redirects"; // Yeh redirects.ts se check karega

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hairskill.com";

  // SEO rules ke mutabiq /cookie-policy aur /privacy-policy ko nikal diya gaya hai
  const staticRoutes = [
    "",
    "/about",
    "/about/data-protection",
    "/about/ethics",
    "/about/patient-care-standards",
    "/about/mission",
    "/about/our-story",
    "/about/our-approach",
    "/about/reference-program",
    "/about/why-choose-hair-skill",
    "/before-after",
    "/blogs",
    "/blogs/hair-transplant", // Category index added
    "/blogs/hair-loss",       // Category index added
    "/contact",
    "/doctors/dr-mansoor-ahmad",
    "/faqs",
    "/faqs/general",
    "/faqs/post-op",
    "/faqs/pre-op",
    "/hair-transplant",
    "/hair-transplant/cost",
    "/hair-unit",
    "/patient-guide",
    "/patient-guide/after",
    "/patient-guide/before",
    "/patient-guide/day-of",
    "/patient-guide/hair-washing",
    "/patient-guide/sterilization",
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

  // Static routes map (Bina fake lastModified aur priority ke)
  const sitemapRoutes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
  }));

  // Blog routes map (Sirf wo blogs jo redirect/retire NAHI hue)
  const blogRoutes: MetadataRoute.Sitemap = blogsDatabase
    .filter((post) => !isRetiredSlug(post.slug))
    .map((post) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      // Sirf real publish/edit date jayegi
      lastModified: post.date ? new Date(post.date) : new Date(),
    }));

  return [...sitemapRoutes, ...blogRoutes];
}