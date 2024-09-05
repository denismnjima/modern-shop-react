import './MobileSideBar.css'
import { List,ViewList,Phone,Earbuds,Laptop,Smartwatch,Bag,Search, Watch } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
function MobileSideBar() {
  return (
    <div className='overlay'>
    <header>
        <h2 className='Toggle'><List/></h2>
        <nav>
            <Link to='#' className='menuItems'>
                <ViewList className='menuIcon'/>
                <h3 className='menuName'>Dashboard</h3>
            </Link>
            <Link to='#' className='menuItems'>
                <Phone className='menuIcon'/>
                <h3 className='menuName'>Iphones</h3>
            </Link>
            <Link to='#' className='menuItems'>
                <Laptop className='menuIcon'/>
                <h3 className='menuName'>Mac & iPads</h3>
            </Link>
            <Link to='#' className='menuItems'>
                <Watch className='menuIcon'/>
                <h3 className='menuName'>Watches</h3>
            </Link>
            <Link to='#' className='menuItems'>
                <Earbuds className='menuIcon'/>
                <h3 className='menuName'>Accessories</h3>
            </Link>
            <Link to='#' className='menuItems'>
                <Bag className='menuIcon'/>
                <h3 className='menuName'>Cart</h3>
            </Link>

        </nav>

    </header>
    </div>
  )
}

export default MobileSideBar