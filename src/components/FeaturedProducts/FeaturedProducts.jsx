import './FeaturedProducts.css'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useShop } from '../../store/useShop'
import { useEffect } from 'react'
import laptop from '../../assets/1.png'
import { Heart } from 'react-bootstrap-icons'
function FeaturedProducts() {
  const {products,fetchProducts} = useShop((state)=>({
    products:state.products,
    fetchProducts:state.fetchProducts
    }))
  useEffect(() => {
    fetchProducts()
    console.log(products)
  },[])
  console.log(products)
  return (
    <div className='productList'>
        <Swiper
         spaceBetween={15}
         slidesPerView={1.4}
         onSlideChange={()=>console.log('slide')}
         >
            <SwiperSlide className='product'>
                <div>
                    <img src={laptop}/>
                </div>
                <div className='details'>
                    <h2>15-inch MacBook Air M2</h2>
                    <h3>120,000 <span>KES</span></h3>
                </div>
                <h4 className='favourite'><Heart/></h4>
            </SwiperSlide>

            <SwiperSlide className='product'>
                <div>
                    <img src={laptop}/>
                </div>
                <div className='details'>
                    <h2>15-inch MacBook Air M2</h2>
                    <h3>120,000 <span>KES</span></h3>
                </div>
                <h4 className='favourite'><Heart/></h4>
            </SwiperSlide>

            <SwiperSlide className='product'>
                <div>
                    <img src={laptop}/>
                </div>
                <div className='details'>
                    <h2>15-inch MacBook Air M2</h2>
                    <h3>120,000 <span>KES</span></h3>
                </div>
                <h4 className='favourite'><Heart/></h4>
            </SwiperSlide>

        </Swiper>

    </div>
  )
}

export default FeaturedProducts