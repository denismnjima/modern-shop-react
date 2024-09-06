import './MobileSideBar.css'
import { List,ViewList,Phone,Earbuds,Laptop,Smartwatch,Bag,Search, Watch } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { useMenuStore } from '../../store/menuStore'
function MobileSideBar() {
  const {menuSet,setMenuSet} = useMenuStore((state)=>({
    menuSet:state.menuSet,
    setMenuSet:state.setMenuSet
  }))
  const handleMenuToggle = () => {
    menuSet?setMenuSet(false):setMenuSet(true)
  }
  return (
    <header>
        <h2
         className='Toggle'
         onClick={handleMenuToggle}
         >
          <List/>
        </h2>
        <nav>
            <Link to='#' className='menuItems'>
                <ViewList className='menuIcon'/>
                {menuSet?(<h3 className='menuName'>Dashboard</h3>):''}
            </Link>
            <Link to='#' className='menuItems'>
                <Phone className='menuIcon'/>
                {menuSet?(<h3 className='menuName'>Iphones</h3>):''}
            </Link>
            <Link to='#' className='menuItems'>
                <Laptop className='menuIcon'/>
                {menuSet?(<h3 className='menuName'>Mac & iPads</h3>):''}
            </Link>
            <Link to='#' className='menuItems'>
                <Watch className='menuIcon'/>
                {menuSet?(<h3 className='menuName'>Watches</h3>):''}
            </Link>
            <Link to='#' className='menuItems'>
                <Earbuds className='menuIcon'/>
                {menuSet?(<h3 className='menuName'>Accessories</h3>):''}
            </Link>
            <Link to='#' className='menuItems'>
                <Bag className='menuIcon'/>
                {menuSet?(<h3 className='menuName'>Cart</h3>):''}
            </Link>

        </nav>

    </header>
  )
}

export default MobileSideBar