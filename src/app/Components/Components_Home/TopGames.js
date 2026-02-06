"use client"
import React , { useState , useEffect } from 'react'
import Link from 'next/link'
import { Top10Games } from '../API/api'
import Slide2 from './Slide_Games'
import { FaArrowRightLong } from "react-icons/fa6";


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function TopGames({ Title , index }) {

    const [games, setGames] = useState([]);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    
      useEffect(() => {
        const getGames = async () => {
          const data = await Top10Games(index);
          setGames(data);
        };
        getGames();
        console.log(games)

      }, []);
      
      console.log(games)

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
          {
            games.map((game , index) => ( 
              <SwiperSlide key={index}>
                  <Slide2 key={index} game={game}></Slide2>
              </SwiperSlide> 
            )) 
          }
        </Swiper>
    </div>
  )
}

export default TopGames