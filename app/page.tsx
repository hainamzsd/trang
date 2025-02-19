import Hero from "@/components/hero"
import Categories from "@/components/categories"
import FeaturedProducts from "@/components/featured-products"
import WoolCreations from "@/components/wool-creations"
import AboutUs from "@/components/about-us"

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WoolCreations />
      <AboutUs />
    </div>
  )
}

