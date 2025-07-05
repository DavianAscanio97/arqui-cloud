import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/components/auth-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ArquiCloud - Gestión Integral de Documentación en la Nube",
  description:
    "Aplicación tecnológica diseñada para facilitar la gestión integral de documentación en la nube. Almacena, organiza, visualiza y colabora en documentos digitales de forma eficiente y segura.",
  keywords: "gestión documental, nube, colaboración, documentos digitales, CAD, BIM, 3D",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
