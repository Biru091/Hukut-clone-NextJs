import Navbar from "./components/layout/Navbar"
import Category from "./components/layout/Category"
import TopHero1 from "./hero-section/Top-hero"
import Hero_Category from "./hero-category/Category"
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Category/>
        <TopHero1/>
        <Hero_Category/>
    </div>

  )
}
