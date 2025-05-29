/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/wools',
        destination: '/products',
        permanent: true, // 301 redirect
      },
    ]
  },
  eslint: {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
}

export default nextConfig
  