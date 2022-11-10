/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  // nextConfig,
  distDir: 'build',
  async rewrites() {
    return [
        {
          source: '/api/:issue*',
          destination: `http://localhost:4001/api/:issue*`,
        },
      ]
  }
}
