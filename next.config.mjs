/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "img.freepik.com" },
      { hostname: "droid-life.com" },
    ],
  },
};

export default nextConfig;
