import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/best-fue-hair-transplant-in-pakistan.html",
        destination: "/hair-transplant/treatments/manual-fue",
        permanent: true,
      },
      {
        source: "/hair-transplant-in-karachi",
        destination: "/hair-transplant",
        permanent: true,
      },
      {
        source: "/best-hair-transplant-surgeon-in-pakistan.html",
        destination: "/dr-mansoor-ahmad",
        permanent: true,
      },
      {
        source: "/hair-transplant-center-in-lahore-pakistan",
        destination: "/hair-transplant",
        permanent: true,
      },
      {
        source: "/hair-transplant-center-in-lahore-pakistan/",
        destination: "/hair-transplant",
        permanent: true,
      },
      {
        source: "/want-know-hair-care-methods-will-make-hair-smash.html",
        destination: "/blogs/how-to-prevent-hair-loss-in-lahore",
        permanent: true,
      },
      {
        source: "/doctors-category",
        destination: "/doctors/dr-mansoor-ahmad",
        permanent: true, // Yeh 301 redirect hai
      },
      {
      source: "/blogs/hair-transplant-lahore-10-things",
      destination: "/blogs/best-hair-doctor-lahore",
      permanent: true,
    },
    {
      source: "/blogs/best-hair-transplant-surgeon-lahore-checklist",
      destination: "/blogs/best-hair-doctor-lahore",
      permanent: true,
    },
    {
      source: "/blogs/hair-transplant-results-timeline-lahore",
      destination: "/blogs/hair-transplant-recovery-timeline-lahore",
      permanent: true,
    },
    {
      source: "/blogs/dhi-hair-transplant-cost-in-pakistan",
      destination: "/blogs/dhi-hair-transplant-lahore-procedure-benefits",
      permanent: true,
    },
    {
      source: "/blogs/hair-transplant-method-by-baldness-stage",
      destination: "/blogs/dhi-vs-fue-hair-transplant-lahore",
      permanent: true,
    },
    {
      source: "/blogs/prp-hair-treatment-cost-lahore-price",
      destination: "/blogs/best-prp-hair-treatment-lahore",
      permanent: true,
    },
    {
      source: "/blogs/female-hair-transplant-cost-lahore",
      destination: "/blogs/female-hair-transplant-lahore-fue",
      permanent: true,
    },
    {
      source: "/blogs/female-hair-transplant-results-recovery-success",
      destination: "/blogs/female-hair-transplant-lahore-fue",
      permanent: true,
    },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;