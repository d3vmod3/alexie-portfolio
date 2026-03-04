import type { NextConfig } from "next";
import withPWA from "next-pwa";
import { join } from "path";
const isProduction = process.env.NODE_ENV === "production";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

export default withPWA({
  dest: "public", // Service worker files will go here
  register: true, // auto register service worker
  skipWaiting: true, // activate new SW immediately
  disable: !isProduction, // disable PWA in dev mode
  // Optional: custom runtime caching
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
        },
      },
    },
    {
      urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "jsdelivr",
        expiration: {
          maxEntries: 20,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
  ],
});

// export default nextConfig;
