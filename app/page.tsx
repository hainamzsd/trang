import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import WoolCreations from "@/components/wool-creations"
import AsymmetricalGrid from "@/components/AsymmetricalGrid"
import SplitSection from "@/components/SplitSection"
import CuratedCollections from "@/components/CuratedCollections"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CuratedCollections />
      <AsymmetricalGrid />
      <FeaturedProducts />
      <WoolCreations />
      <SplitSection />
      {/* <AboutUs /> */}
    </div>
  )
}