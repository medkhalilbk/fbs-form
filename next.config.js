/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath:'/inscription' , 
  async redirects() {
    return [
        {
            source: '/',
            destination: '/inscription',
            basePath: false,
            permanent: false
        }
    ]
}
}

module.exports = nextConfig
