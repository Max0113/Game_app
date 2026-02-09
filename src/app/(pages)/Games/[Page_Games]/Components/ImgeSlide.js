"use client"
import React , { useState , useEffect } from 'react'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { getGameScreenshots } from "../../../../Components/API/api"

import { Swiper, SwiperSlide , useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ImgeSlide({ id }) {

    const [dataShots, setdataShots] = useState([])
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [Loding, setLoding] = useState(false); // اختيارياً: لتحديد الصورة النشطة


    useEffect(() => {
        const fetching = async () => {
            try {
                const Shorts = await getGameScreenshots(id)
                setdataShots(Shorts || [])
                console.log(Shorts)
            } catch (error) {
                console.error(error)
                setdataShots([])
            } finally {
                setLoding(true)
            }
        }
        fetching()
    })
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (swiperInstance) {
                if (swiperInstance.isEnd) {
                    swiperInstance.slideTo(0);
                } else {
                    swiperInstance.slideNext();
                }
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [swiperInstance]);  

  return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {(!Loding ? [...Array(6)] : dataShots ).map((self, index) => (
                    <SwiperSlide key={index}>
                        {Loding ? (<img 
                            src={self?.image} 
                            className='w-full h-180 object-cover rounded-2xl' 
                            alt={`Game ${index}`} 
                        />) : (<div className="h-180 w-full rounded-2xl bg-white/5 animate-pulse" />)}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* قسم الصور المصغرة (Thumbnails) */}
            <div className='flex justify-center m-4 gap-5'>
                {(!Loding ? [...Array(6)] : dataShots ).map((self, index) => (
                    <div 
                        key={index}
                        onClick={() => swiperInstance?.slideTo(index)} // الانتقال للسلايد المطلوب
                        className={`
                            relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-600 ease-in-out z-30
                            hover:scale-102 hover:-translate-y-5 hover:z-30 hover:shadow-3xl  // تكبير عند الـ Hover
                            ${activeIndex === index ? 'ring-1 ring-[#ff3737] scale-101 -translate-y-5 shadow-3xl' : ''} // تمييز الصورة النشطة
                        `}
                    >
                        <div className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === index ? 'bg-transparent' : 'bg-black/30'} `} />
                        {Loding ? (<img 
                            src={self.image} 
                            className='w-78 h-45 object-cover' 
                            alt={`Game ${index}`} 
                        />) : (<div className="w-78 h-45 rounded-2xl bg-white/5 animate-pulse" />)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImgeSlide