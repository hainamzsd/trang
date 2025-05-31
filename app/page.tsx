import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import WoolCreations from "@/components/wool-creations"
import AsymmetricalGrid from "@/components/AsymmetricalGrid"
import SplitSection from "@/components/SplitSection"
import CuratedCollections from "@/components/CuratedCollections"
import Script from "next/script"

export default function Home() {
  return (
    <>
      {/* Google Ads (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16994659085"
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-home"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16994659085');
          `
        }}
      />
      
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NB5P4Q6ZE2"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-home"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NB5P4Q6ZE2');
          `
        }}
      />
      
      <div className="overflow-hidden">
        <Hero />
        <CuratedCollections />
        <AsymmetricalGrid />
        <FeaturedProducts />
        <WoolCreations />
        <SplitSection />
        {/* <AboutUs /> */}
      </div>
    </>
  )
}