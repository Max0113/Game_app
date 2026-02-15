"use client"
import React , { useState , useEffect } from 'react'
import Image from 'next/image';
import HeroCarouselSlides from './HeroCarouselSlides'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide , useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function HeroCarousel() {

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [value, setvalue] = useState(0); // اختيارياً: لتحديد الصورة النشطة

    
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
    
    const links = [
        {
            logo : "/images/logos/Logo1.webp",
            Title : "The truth lies",
            Text : `Last chance to pre-order and get access to additional 
                    premium content. Call of Duty®: Black Ops 6 launches on 
                    October 25th`,
            link : "/videos/Backround1.mp4",
            imge : "/images/games/imge1.webp"
        },
        {
            logo : "/images/logos/Logo4.webp",
            Title : "Freedom Always Comes At A Price…",
            Text : `As cyber-enhanced mercenary V, join secret agent 
                    Solomon Reed to unravel a web of sinister political 
                    machinations.`,
            link : "/videos/Backround2.mp4",
            imge : "/images/games/imge2.webp"
        },
        {
            logo : "/images/logos/Logo2.webp",
            Title : "Shake the earth. Break the universe !",
            Text : `A legendary series has returned. Reach new levels of 
                    power in Dragon Ball: Sparking! Zero, out now on PS5.`,
            link : "/videos/Backround3.mp4",
            imge : "/images/games/imge3.webp"
        },
        {
            logo : "/images/logos/Logo3.webp",
            Title : "BE GREATER TOGETHER",
            Text : `Peter Parker & Miles Morales return for an exciting 
                    new adventure in the acclaimed Marvel’s Spider-Man franchise, 
                    out October 20 for PS5.`,
            link : "/videos/Backround4.mp4",
            imge : "/images/games/imge4.webp"
        }
    ]



  return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={1}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {links.map((self, index) => (
                    <SwiperSlide key={index}>
                        <HeroCarouselSlides  isActive={activeIndex == index} logo={self.logo} Text={self.Text} Title={self.Title} link={self.link} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* قسم الصور المصغرة (Thumbnails) */}
            <div className='flex justify-center m-4 gap-5'>
                {links.map((self, index) => (
                    <div 
                        key={index}
                        onClick={() => swiperInstance?.slideTo(index)} // الانتقال للسلايد المطلوب
                        className={`
                            relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-600 ease-in-out z-30
                            hover:scale-102 hover:-translate-y-5 hover:z-30 hover:shadow-3xl
                            ${activeIndex === index ? 'ring-1 ring-[#ff3737] scale-101 -translate-y-5 shadow-3xl' : ''}
                            ${activeIndex === index ? 'ring-1 ring-[#ff3737] scale-101 -translate-y-5 shadow-3xl' : ''}
                            w-[312px] h-[180px]
                        `}
                    >
                        <div className={`absolute inset-0 transition-opacity duration-500 z-10 ${activeIndex === index ? 'bg-transparent' : 'bg-black/25'} `} />
                        <Image 
                            src={self.imge} 
                            className='object-cover' 
                            alt={`Game ${index}`} 
                            fill
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeroCarousel