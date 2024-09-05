import './Mobileproduct.css'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Memory } from 'react-bootstrap-icons'
function MobileSpecifications() {
  return (
    <div className='specifications'>
        <div className='features-slide'>
            <h2 className='spe-title'>Features</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={4.5}
                pagination={{ clickable: true }}
                loop>
                <SwiperSlide className='feature'>
                    <h4>Storage</h4>
                    <Memory/>
                    <p>125 GB</p>
                </SwiperSlide>
                <SwiperSlide className='feature'>
                    <h4>Storage</h4>
                    <Memory/>
                    <p>125 GB</p>
                </SwiperSlide>
                <SwiperSlide className='feature'>
                    <h4>Storage</h4>
                    <Memory/>
                    <p>125 GB</p>
                </SwiperSlide>
                <SwiperSlide className='feature'>
                    <h4>Storage</h4>
                    <Memory/>
                    <p>125 GB</p>
                </SwiperSlide>
                <SwiperSlide className='feature'>
                    <h4>Storage</h4>
                    <Memory/>
                    <p>125 GB</p>
                </SwiperSlide>
                <SwiperSlide className='feature'>
                    <h4>Storage</h4>
                    <Memory/>
                    <p>125 GB</p>
                </SwiperSlide>
            </Swiper>

        </div>
    </div>
  )
}

export default MobileSpecifications