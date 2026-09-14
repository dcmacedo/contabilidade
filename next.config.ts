import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://challenges.cloudflare.com https://static.cloudflareinsights.com;
    script-src-elem 'self' 'unsafe-inline' https://challenges.cloudflare.com https://static.cloudflareinsights.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://pv.dcmacedo.com.br https://challenges.cloudflare.com;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://challenges.cloudflare.com;
    connect-src 'self' https://challenges.cloudflare.com https://pv.dcmacedo.com.br;
    upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
