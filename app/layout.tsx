import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MobileSidebar from "@/components/mobile-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Skill Test Dashboard",
  description: "A skill test dashboard built with Next.js and Tailwind CSS",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <div className="md:hidden fixed top-0 left-0 z-50 p-4">
            <MobileSidebar />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
