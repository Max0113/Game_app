"use client"
import React , { useState , useEffect } from 'react'
import Link from 'next/link'
import { getSimilarGames } from '../../../../Components/API/api'
import Slide_Similar from './Slide_Similar'
import { FaArrowRightLong } from "react-icons/fa6";


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function TopGames({ id }) {

    const [SimilarGames, setSimilarGames] = useState([]);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading,setLoading] = useState(false)
    
      useEffect(() => {

        if (!id) {
          setSimilarGames([]);
          setLoading(false);
          return;
        }

        setLoading(true);
        const getGames = async () => {
          try {
            const data = await getSimilarGames(id);
            setSimilarGames(data || []);
          } catch (error) {
            console.error(error);
            setSimilarGames([]);
          } finally {
            setLoading(false);
          }
        };
        getGames();
      }, [id]);

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

        return () => clearInterval(interval)

      },[swiperInstance])
      

  return (
    <div className='m-10'>
        <div className='flex justify-between items-center text-center px-7'>
          <h1 className='text-[2.3rem] font-bold text-white pb-3'>{`Similar Games`}</h1>
          <p className='text-[1rem] font-sm text-[#ffffff] pb-3'><Link href="/Games" className='flex items-center gap-3'>Browse All Games  <FaArrowRightLong></FaArrowRightLong></Link></p>
        </div>
        {loading ? (
          <div className="flex items-center justify-center py-6 text-white h-100">
            <span className="animate-spin h-10 w-10 border-2 border-white/30 border-t-white rounded-full"></span>
          </div>
        ) : (
          <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={4}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {SimilarGames.map((game , index) => ( 
                <SwiperSlide key={index}>
                    <Slide_Similar key={index} game={game}></Slide_Similar>
                </SwiperSlide> 
            ))}
          </Swiper>
        )}
    </div>
  )
}

export default TopGames
