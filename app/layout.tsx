import Navbar from "@/app/_components/navbar"
import "@/app/global.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Belajar Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
