/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath:'/inscription' , 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '**',
      },
    ],
  },
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
