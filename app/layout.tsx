
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Providers from "@/app/Providers" // Import the Providers component
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" })

export const metadata: Metadata = {
  title: "Wool Forest",
  description: "Premium wools, lenses, and Vietnamese products",
  keywords: "wool, lens, Vietnam, knitting, photography, authentic products",
  authors: [{ name: "Wool & Lens Vietnam" }],
  openGraph: {
    title: "Wool & Lens Vietnam",
    description: "Premium wools, lenses, and Vietnamese products",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans bg-white flex flex-col min-h-screen">
        <Providers> {/* Wrap everything with Providers */}
        <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}