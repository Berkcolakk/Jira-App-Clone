/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    domains: ['flowbite.com', "avatars.githubusercontent.com", ]
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
}
}

module.exports = nextConfig
