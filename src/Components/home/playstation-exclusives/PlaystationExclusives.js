"use client"
import React , { useEffect , useState } from 'react'
import { PlaystationExclusivesAPI } from '../../../lib/api'
import SlidePlaystationExclusives from './SlidePlaystationExclusives';
import Link from 'next/link'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide , useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function PlaystationExclusives() {

    const [games,Setgames] = useState([])
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading , setLoading] = useState(false); 

    useEffect(() => {

        setLoading(true)

        const fetchFunction = async () => {
            try {
                const data = await PlaystationExclusivesAPI()
                Setgames(data || [])
            } catch(error) {
                console.error(error)
                Setgames([])
            } finally {
                setLoading(false)
            }
        }
        fetchFunction()
    },[])




    return (
        <div className='m-10'>
            <div className='flex justify-between items-center text-center px-7 pb-3'>
                <h1 className='text-[2.3rem] font-bold text-white pb-3'>Playstation Exclusives</h1>
                <p className='text-[1rem] font-sm text-[#ffffff] pb-3'><Link href="/Games" className='flex items-center gap-3'>Browse All Games  <FaArrowRightLong></FaArrowRightLong></Link></p>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={2}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {!loading ? (games.map((self,index)=>(
                        <SwiperSlide key={index}>
                            <SlidePlaystationExclusives key={index} title={self.name} id={self.id} url={self.background_image}></SlidePlaystationExclusives>
                        </SwiperSlide>)
                )) : (<div className="flex items-center justify-center py-6 text-white h-60">
                <span className="animate-spin h-10 w-10 border-2 border-white/30 border-t-white rounded-full"></span>
              </div>)}
            </Swiper>
        </div>
    )
}

export default PlaystationExclusives