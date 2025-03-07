// import type { NextConfig } from 'next'
// import withNextIntl from 'next-intl/plugin'

// const nextConfig: NextConfig = withNextIntl()({
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'utfs.io',
//         port: '',
//       },
//     ],
//   },
// })

// export default nextConfig
//////////////////
import type { NextConfig } from 'next'
import withNextIntl from 'next-intl/plugin'

const nextConfig: NextConfig = withNextIntl()({
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Allow Cloudinary images
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
      },
    ],
  },
})

export default nextConfig
