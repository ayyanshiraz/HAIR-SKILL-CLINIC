import type { NextConfig } from "next";
import { blogRedirects } from "./redirects";

const redirectList: [string, string][] = [
  ["/best-fue-hair-transplant-in-pakistan.html", "/hair-transplant/treatments/manual-fue"],
  ["/hair-transplant-in-karachi", "/hair-transplant"],
  ["/best-hair-transplant-surgeon-in-pakistan.html", "/doctors/dr-mansoor-ahmad"],
  ["/hair-transplant-center-in-lahore-pakistan", "/hair-transplant"],
  ["/hair-transplant-center-in-lahore-pakistan/", "/hair-transplant"],
  ["/want-know-hair-care-methods-will-make-hair-smash.html", "/blogs/how-to-prevent-hair-loss-in-lahore"],
  ["/doctors-category", "/doctors/dr-mansoor-ahmad"],
  ["/hair-transplant/treatments/fue-by-moterize", "/hair-transplant/treatments/motorized-fue"],
];

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "flagcdn.com" }],
  },
  async redirects() {
    const oldRedirects = redirectList.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
    
    return [...blogRedirects, ...oldRedirects];
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