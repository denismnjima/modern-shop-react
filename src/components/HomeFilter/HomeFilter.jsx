import './HomeFilter.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/modules'
import 'swiper/css'
import { House,Recycle,CardChecklist,Fire,Percent } from 'react-bootstrap-icons'
function HomeFilter() {
  return (
    <div className='homeFilter'>
        <Swiper
            spaceBetween={10}
            slidesPerView={3.2}
            pagination={{ clickable: true }}
            className='homeFilterList'
            >
            <SwiperSlide className='list'>
                <House/>
                <p>Home</p>
            </SwiperSlide>

            <SwiperSlide className='list'>
                <Fire/>
                <p>Popular</p>
            </SwiperSlide>

            <SwiperSlide className='list'>
                <Recycle/>
                <p>Refubrished</p>
            </SwiperSlide>

            <SwiperSlide className='list'>
                <CardChecklist/>
                <p>Featured</p>
            </SwiperSlide>

            <SwiperSlide className='list'>
                <Percent/>
                <p>Discounts</p>
            </SwiperSlide>

        </Swiper>

    </div>
  )
}

export default HomeFilter