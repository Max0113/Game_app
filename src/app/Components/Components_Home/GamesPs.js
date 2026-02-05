"use client"
import React , { useState , useEffect } from 'react'
import Link from 'next/link'
import { fetch10GamesPc , fetch10GamesPs5 } from '../API/api'
import Slide2 from './Slide_GamesPc'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Home2() {

    const [games, setGames] = useState([]);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    
      useEffect(() => {
        // Call the utility function
        const getGames = async () => {
          const data = await fetch10GamesPs5();
          setGames(data);
        };
    
        getGames();
      }, []);
      
      console.log(games)

  return (
    <div className='m-10'>
        <div className='flex justify-between items-center text-center px-7'>
          <h1 className='text-[2.3rem] font-bold text-white pb-3'>Top 10 Games for Ps5</h1>
          <p className='text-[1.2rem] font-medium text-[#ff4242] pb-3'><Link href="/Games">Browse All Games</Link></p>
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

export default Home2