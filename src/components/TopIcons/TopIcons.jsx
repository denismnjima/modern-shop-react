import { Search ,Bag} from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import './TopIcons.css'
function TopIcons() {
  return (
    <div className="topIconsContainer">
        <Link to="#" className="topIcon">
            <Search/>
        </Link>
        <Link to="#" className="topIcon cart">
            <Bag/>
            <span></span>
        </Link>
    </div>
  )
}

export default TopIcons