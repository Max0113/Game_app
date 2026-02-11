"use client"
import React , { useState , useEffect, cache } from 'react'
import Link from 'next/link'
import { Top10Games } from '../../../lib/api'
import SlideGames from './SlideGames'
import { FaArrowRightLong } from "react-icons/fa6";


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function TopGames({ Title , index , time }) {

    const [games, setGames] = useState([]);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading,setLoading] = useState(false)
    
      useEffect(() => {

        setLoading(true)
        const getGames = async () => {
          try {
            const data = await Top10Games(index);
            setGames(data || []);
          } catch (error) {
            console.error(error);
            setGames([]);
          } finally {
            setLoading(false)
          }
        };
        getGames();
      }, []);

      useEffect(() => {
        const interval = setInterval(() => {
            if (swiperInstance) {
                if (swiperInstance.isEnd) {
                    swiperInstance.slideTo(0);
                } else {
                    swiperInstance.slideNext();
                }
            }
        }, time);

        return () => clearInterval(interval)

      },[swiperInstance])
      

  return (
    <div className='m-10'>
        <div className='flex justify-between items-center text-center px-7'>
          <h1 className='text-[2.3rem] font-bold text-white pb-3'>{`${Title}`}</h1>
          <p className='text-[1rem] font-sm text-[#ffffff] pb-3'><Link href="/Games" className='flex items-center gap-3'>Browse All Games  <FaArrowRightLong></FaArrowRightLong></Link></p>
        </div>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          { !loading ? (
            games.map((game , index) => ( 
              <SwiperSlide key={index}>
                  <SlideGames key={index} game={game}></SlideGames>
              </SwiperSlide> 
            ))  ) : (
              <div className="flex items-center justify-center py-6 text-white h-100">
                <span className="animate-spin h-10 w-10 border-2 border-white/30 border-t-white rounded-full"></span>
              </div>
            )
          }
        </Swiper>
    </div>
  )
}

export default TopGames