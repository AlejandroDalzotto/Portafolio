import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Alejandro Dalzotto\'s Portfolio',
    short_name: 'Alejandro Dalzotto\'s Portfolio',
    description: 'My personal place on the internet where you can discover what things I\'m working on ^^',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "any",
        type: "image/png"
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    display: 'standalone',
  }
}