import FeaturedProductsContainer from "../../FeaturedProducts/FeaturedProductsContainer"
import HomeFilter from "../../HomeFilter/HomeFilter"
import MobileSideBar from "../../Sidebar/MobileSideBar"
import TopIcons from "../../TopIcons/TopIcons"

function MobileHomePage() {
  return (
    <div>
        <MobileSideBar/>
        <div>
          <TopIcons/>
          <HomeFilter/>
          <FeaturedProductsContainer/>
        </div>
    </div>
  )
}

export default MobileHomePage