import ProductCard from "./ProductCard"
import ProductCarousel from "./ProductCarousel"

const BrandPage = () => {
  return (
    <div>
      <div className="my-10">
      <h1 className="text-3xl font-bold text-center">Brand Name Here</h1>
      </div>
      <ProductCarousel/>
      <ProductCard/>
    </div>
  )
}

export default BrandPage
