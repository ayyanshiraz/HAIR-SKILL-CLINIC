import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        destination: "/doctors-category",
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
        destination: "/blogs/hair-transplant/how-to-prevent-hair-loss-in-lahore",
        permanent: true,
      }
    ];
  }
};

export default nextConfig;