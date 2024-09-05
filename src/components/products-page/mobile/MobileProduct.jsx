import { useState,useEffect } from "react"
import { ChevronLeft,Heart,Bag,BoxArrowInUpRight} from "react-bootstrap-icons"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Product from '../../../assets/watch-front.png'
import './Mobileproduct.css'
import { Swiper,SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/modules'
import 'swiper/css/bundle'
import 'swiper/css/pagination';
import ColorThief from 'colorthief';
import { FastAverageColor } from "fast-average-color"
import MobileSpecifications from "./MobileSpecifications";

let product = {
    title: 'Apple Watch Ultra Titanium Case with Green Alpine Loop',
    price: '56,000',
    image: ['src/assets/front.png','https://iili.io/dezGoHQ.png', 'src/assets/back.png']
};
<img src="" alt="watch front" border="0"></img>
function MobileProduct() {
    const [bgColor, setBgColor] = useState('#fff');
    const [currentBg,setCurrentBg] = useState(0)
    const [isSpecicifications,setIsSpecicifications] = useState(false)
    useEffect(() => {
        const fac = new FastAverageColor();
        fac.getColorAsync(product.image[currentBg])
            .then(color => {
                setBgColor(color.rgb);
                console.log(color.rgb);
            })
            .catch(error => {
                console.error('Error extracting color:', error);
            });
    }, [currentBg]);

    const handleSlide =(cur)=>{
        setCurrentBg(cur)
    }
    return (
        <div className='productPage' style={{background:`${bgColor}`}}>
            <div className='topMenus'>
                <ChevronLeft className="topIcons"/>
                <Heart className="topIcons"/>
            </div>
            <div className="productImg">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSlideChange={(Swiper)=> handleSlide(Swiper.activeIndex)}
                >
            <SwiperSlide>
               <img src={product.image[0]} />
            </SwiperSlide>
            <SwiperSlide>
               <img src={product.image[1]} />
            </SwiperSlide>
            <SwiperSlide>
               <img src={product.image[2]} />
            </SwiperSlide>
        </Swiper>
            </div>
            <div className="productInfo">
                <div className="details">
                    <h2>{product.title}</h2>
                    <h3>{product.price}<span>KES</span></h3>
                </div>
                <div className="addToCart" style={{background:`${bgColor}`}}>
                    <Bag className="Icon"/>
                </div>
    
            </div>
            
        </div>
      )
}

export default MobileProduct;
