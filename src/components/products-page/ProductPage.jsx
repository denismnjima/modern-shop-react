import { useState,useEffect } from "react"
import { ChevronLeft,Heart,Bag,BoxArrowInUpRight} from "react-bootstrap-icons"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Product from '../../assets/watch-front.png'
import './ProductPage.css'
import { Swiper,SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/modules'
import 'swiper/css/bundle'
import 'swiper/css/pagination';
import ColorThief from 'colorthief';
import { FastAverageColor } from "fast-average-color"
import MobileProduct from "./mobile/MobileProduct";
import MobileSpecifications from "./mobile/MobileSpecifications";

let product = {
    title: 'Apple Watch Ultra Titanium Case with Green Alpine Loop',
    price: '56,000',
    image: ['src/assets/front.png','https://iili.io/dezGoHQ.png', 'src/assets/back.png']
};

function ProductPage() {
    return (
        <>
           <Swiper
            direction="vertical"
            spaceBetween={0}
            slidesPerView={1}
            >
            <SwiperSlide>
              <MobileProduct/>
            </SwiperSlide>
            <SwiperSlide>
              <MobileSpecifications/>
            </SwiperSlide>
           </Swiper>
        </>
      )
}

export default ProductPage;
