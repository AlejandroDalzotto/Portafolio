import './globals.css'
import { Josefin_Sans as JosefinSans } from '@next/font/google'
import Navbar from '@/components/Navbar'

const jssans = JosefinSans({ subsets: ['latin'] })

/*
  Text's colors:

  Headers: #f5cb5c
  paragraphs: #cfdbd5
  links/anchors: #e8eddf

  Background's colors:

  web: linear-gradient to top from #000000 to #262626
  Main headers: linear-gradient to right from #fde68a to #eab308
*/

export const metadata = {
  title: 'Portfolio - Alejandro Dalzotto'
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${jssans.className}  bg-gradient-to-tr from-black to-neutral-800`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
