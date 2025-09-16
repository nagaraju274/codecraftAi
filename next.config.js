/** @type {import('next').NextConfig} */
// The main configuration object for the Next.js application.
const nextConfig = {
  /* config options here */
  // Configuration for Next.js's image optimization feature.
  images: {
    // Defines a list of allowed remote domains from which to serve images.
    // This is a security measure to prevent arbitrary image loading.
    remotePatterns: [
      {
        // The protocol for the allowed domain.
        protocol: 'https',
        // The hostname of the allowed domain.
        hostname: 'placehold.co',
        // The port (if any). Empty string means any port.
        port: '',
        // The path pattern. '/**' means any path on this domain is allowed.
        pathname: '/**',
      },
      {
        // The protocol for the allowed domain.
        protocol: 'https',
        // The hostname of the allowed domain for Google user content.
        hostname: 'lh3.googleusercontent.com',
        // The port (if any). Empty string means any port.
        port: '',
        // The path pattern. '/**' means any path on this domain is allowed.
        pathname: '/**',
      }
    ],
  },
};

// Export the configuration object so Next.js can use it.
module.exports = nextConfig;
