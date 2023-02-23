import './globals.css'
import { Josefin_Sans as JosefinSans } from '@next/font/google'
import Navbar from '@/components/Navbar'

const jssans = JosefinSans({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${jssans.className} bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)]`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
