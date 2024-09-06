import FeaturedProducts from "./FeaturedProducts"
import './FeaturedProducts.css'

function FeaturedProductsContainer() {
  return (
    <div className="featuredContainer">
        <h2 className="title">Best Seller</h2>
        <FeaturedProducts/>
    </div>
  )
}

export default FeaturedProductsContainer