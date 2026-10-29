import type { NextConfig } from "next";

const redirectList: [string, string][] = [
  ["/best-fue-hair-transplant-in-pakistan.html", "/hair-transplant/treatments/manual-fue"],
  ["/hair-transplant-in-karachi", "/hair-transplant"],
  ["/best-hair-transplant-surgeon-in-pakistan.html", "/dr-mansoor-ahmad"],
  ["/hair-transplant-center-in-lahore-pakistan", "/hair-transplant"],
  ["/hair-transplant-center-in-lahore-pakistan/", "/hair-transplant"],
  ["/want-know-hair-care-methods-will-make-hair-smash.html", "/blogs/how-to-prevent-hair-loss-in-lahore"],
  ["/doctors-category", "/doctors/dr-mansoor-ahmad"],
  ["/blogs/hair-transplant-lahore-10-things", "/blogs/best-hair-doctor-lahore"],
  ["/blogs/best-hair-transplant-surgeon-lahore-checklist", "/blogs/best-hair-doctor-lahore"],
  ["/blogs/hair-transplant-results-timeline-lahore", "/blogs/hair-transplant-recovery-timeline-lahore"],
  ["/blogs/dhi-hair-transplant-cost-in-pakistan", "/blogs/dhi-hair-transplant-lahore-procedure-benefits"],
  ["/blogs/hair-transplant-method-by-baldness-stage", "/blogs/dhi-vs-fue-hair-transplant-lahore"],
  ["/blogs/prp-hair-treatment-cost-lahore-price", "/blogs/best-prp-hair-treatment-lahore"],
  ["/blogs/female-hair-transplant-cost-lahore", "/blogs/female-hair-transplant-lahore-fue"],
  ["/blogs/female-hair-transplant-results-recovery-success", "/blogs/female-hair-transplant-lahore-fue"],
  ["/blogs/hair-transplant/failed-hair-transplant-repair-lahore", "/blogs/failed-hair-transplant-repair-lahore"],
  ["/blogs/hair-transplant/female-hair-transplant-lahore-fue", "/blogs/female-hair-transplant-lahore-fue"],
  ["/blogs/hair-transplant/ozone-hair-treatment-lahore-scalp-rejuvenation", "/blogs/ozone-hair-treatment-lahore-scalp-rejuvenation"],
  ["/blogs/hair-transplant/female-hair-transplant-results-recovery-success", "/blogs/female-hair-transplant-lahore-fue"],
];

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "flagcdn.com" }],
  },
  async redirects() {
    return redirectList.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;