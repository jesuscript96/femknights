/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // The rooms were renamed and moved under /rewards; keep the old links alive.
  async redirects() {
    return [
      { source: "/about", destination: "/academy", permanent: true },
      {
        source: "/academy/teachings",
        destination: "/rewards/class-room",
        permanent: true,
      },
      {
        source: "/academy/discovery",
        destination: "/rewards/dressing-room",
        permanent: true,
      },
      {
        source: "/academy/table",
        destination: "/rewards/round-table",
        permanent: true,
      },
      { source: "/donate/reward", destination: "/donate", permanent: false },
      { source: "/donate/payment", destination: "/donate", permanent: false },
      { source: "/donate/pay", destination: "/donate", permanent: false },
    ];
  },
};

export default nextConfig;
