"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { getGameScreenshots } from "../../../lib/api"
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function ImgeSlide({ id }) {
  const [dataShots, setDataShots] = useState([])
  const [swiperInstance, setSwiperInstance] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetching = async () => {
      setLoading(false)
      try {
        const shots = await getGameScreenshots(id)
        setDataShots(shots || [])
      } catch (error) {
        console.error(error)
        setDataShots([])
      } finally {
        setLoading(true)
      }
    }

    fetching()
  }, [id])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!swiperInstance) return

      if (swiperInstance.isEnd) {
        swiperInstance.slideTo(0)
      } else {
        swiperInstance.slideNext()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [swiperInstance])

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {(!loading ? [...Array(6)] : dataShots).map((self, index) => (
          <SwiperSlide key={index}>
            {loading ? (
              <div className='w-full h-[720px] relative'>
                <Image
                  src={self?.image}
                  className='object-cover rounded-2xl'
                  alt={`Game ${index}`}
                  fill
                />
              </div>
            ) : (
              <div className="h-180 w-full rounded-2xl bg-white/5 animate-pulse" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='flex justify-center m-4 gap-5'>
        {(!loading ? [...Array(6)] : dataShots).map((self, index) => (
          <div
            key={index}
            onClick={() => swiperInstance?.slideTo(index)}
            className={`
              relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-600 ease-in-out z-30
              hover:scale-102 hover:-translate-y-5 hover:z-30 hover:shadow-3xl
              ${activeIndex === index ? 'ring-1 ring-[#ff3737] scale-101 -translate-y-5 shadow-3xl' : ''}
            `}
          >
            <div className={`absolute inset-0 transition-opacity duration-500 z-10 ${activeIndex === index ? 'bg-transparent' : 'bg-black/30'}`} />
            {loading ? (
              <div className='w-[312px] h-[180px] relative'>
                <Image
                  src={self.image}
                  className='object-cover'
                  alt={`Game ${index}`}
                  fill
                />
              </div>
            ) : (
              <div className="w-78 h-45 rounded-2xl bg-white/5 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImgeSlide
