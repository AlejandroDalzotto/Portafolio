import './globals.css'
import { Josefin_Sans as JosefinSans } from '@next/font/google'
import Navbar from '@/app/components/Navbar'

const inter = JosefinSans({ subsets: ['latin'], weight: ['400'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" translate="no">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${inter.className} bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)]`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
