import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { MeshBackground } from "@/components/mesh-background"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yordan Tabakov | Junior Full-Stack Developer",
  description: "Portfolio of a passionate junior developer learning full-stack development",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased min-h-screen bg-background`}>
        <MeshBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
