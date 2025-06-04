import type { Metadata } from "next"
import { Playfair_Display, Lato } from 'next/font/google'
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Providers from "@/app/Providers"
import VietnamCelebrationBg from "@/components/vietnam-celebration"
import HolidayPopup from "@/components/holiday"
import { HolidayPopupProvider } from "@/components/holiday-context"
import MetaPixel from "@/components/MetaPixel"
import { Suspense } from 'react'
import FloatingBubbles from "@/components/floating-bubbles"
import Script from 'next/script'

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" })

export const metadata: Metadata = {
  metadataBase: new URL('https://woolforest.shop'),
  title: {
    default: 'Wool Forest - Len Cao Cấp & Sản Phẩm Truyền Thống Việt Nam',
    template: '%s | Wool Forest'
  },
  description: 'Wool Forest cung cấp các sản phẩm len cao cấp, ống kính và sản phẩm truyền thống Việt Nam. Chúng tôi tự hào về chất lượng và sự khéo léo trong từng sản phẩm.',
  keywords: ['len cao cấp', 'len milk cotton', 'len cotton', 'móc len', 'sản phẩm truyền thống việt nam', 'wool forest'],
  authors: [{ name: 'Wool Forest' }],
  creator: 'Wool Forest',
  publisher: 'Wool Forest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://woolforest.shop',
    siteName: 'Wool Forest',
    title: 'Wool Forest - Len Cao Cấp & Sản Phẩm Truyền Thống Việt Nam',
    description: 'Wool Forest cung cấp các sản phẩm len cao cấp, ống kính và sản phẩm truyền thống Việt Nam. Chúng tôi tự hào về chất lượng và sự khéo léo trong từng sản phẩm.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Wool Forest Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wool Forest - Len Cao Cấp & Sản Phẩm Truyền Thống Việt Nam',
    description: 'Wool Forest cung cấp các sản phẩm len cao cấp, ống kính và sản phẩm truyền thống Việt Nam. Chúng tôi tự hào về chất lượng và sự khéo léo trong từng sản phẩm.',
    images: ['/logo.png'],
    creator: '@woolforest'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Wool Forest",
              "url": "https://woolforest.shop",
              "logo": "https://woolforest.shop/logo.png",
              "description": "Wool Forest cung cấp các sản phẩm len cao cấp, ống kính và sản phẩm truyền thống Việt Nam.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Số 1 Võ Văn Ngân, Bình Thọ, Thủ Đức",
                "addressLocality": "TP. Hồ Chí Minh",
                "addressCountry": "VN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+84-28-3823-4567",
                "contactType": "customer service",
                "email": "woolforestshop@gmail.com",
                "availableLanguage": ["Vietnamese", "English"]
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61573046981705",
                "https://www.instagram.com/woolforest",
                "https://twitter.com/woolforest"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans bg-white flex flex-col min-h-screen">
        <MetaPixel pixelId="1351011086200587" />
        <Providers>
          <Suspense fallback={<div>Loading...</div>}>
            {/* Vietnam celebration background with subtle flags and confetti */}
            <VietnamCelebrationBg variant="light" density="low" />

            {/* Holiday popup context provider */}
            <HolidayPopupProvider>
              {/* Holiday popup that shows on first visit or when triggered */}
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
              <FloatingBubbles />
            </HolidayPopupProvider>
          </Suspense>
        </Providers>
      </body>
    </html>
  )
}
