import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"
import LoaderOverlayTitle from "@/components/LoaderOverlayTitle";
import LoaderOverlay from "@/components/LoaderOverlay";
import CursorFollower from "@/components/CursorFollower";

const safiro = localFont({
  src: [
    {
      path: "/fonts/safiro-medium.otf",
      weight: "500",
      style: "normal",
    }
  ],
  variable: "--font-safiro"
})

const oceanTrace = localFont({
  src: [
    {
      weight: "400",
      style: "normal",
      path: "/fonts/OceanTrace.ttf",
    }
  ],
  variable: "--font-ocean-trace"
})

export const metadata: Metadata = {
  title: {
    template: "%s • Alejandro Dalzotto",
    default: "Home • Alejandro Dalzotto"
  },
  description: "Welcome to my personal website. Here you can find most of my works, experiences, and thoughts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative min-h-screen bg-fixed bg-gradient-to-tl from-black via-neutral-950 to-black">
      <body
        className={`${oceanTrace.variable} ${safiro.variable} text-neutral-50`}
      >
        <CursorFollower />
        <LoaderOverlay />
        <LoaderOverlayTitle />
        <div
          className="fixed z-50 bg-repeat bg-[url('/grainy.svg')] bg-center w-screen h-full pointer-events-none"
        />
        {children}
      </body>
    </html>
  );
}
