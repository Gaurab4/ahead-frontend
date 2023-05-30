/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    // DB_URI: "mongodb://localhost:27017/next13-auth",
    NEXTAUTH_SECRET: "Z06D1SMWToGzYRGT3oQC1zsixUlIpdbNnOfR2jAycyI=",



    GOOGLE_CLIENT_ID:
      "581713269390-cmt463p0icscmh2nc9pu6e3emie7ovjn.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",


  },
};

module.exports = nextConfig;



// GOOGLE_CLIENT_ID=581713269390-cmt463p0icscmh2nc9pu6e3emie7ovjn.apps.googleusercontent.com
// GOOGLE_CLIENT_SECRET=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


// NEXTAUTH_URL= http://localhost:3000

// JWT_SECRET=Z06D1SMWToGzYRGT3oQC1zsixUlIpdbNnOfR2jAycyI=
