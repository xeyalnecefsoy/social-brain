import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export - offline PWA üçün vacibdir
  output: 'export',
  
  // Turbopack konfiqurasiyası
  turbopack: {},
  
  // Trailing slash əlavə et (static hosting üçün)
  trailingSlash: true,
};

export default nextConfig;
