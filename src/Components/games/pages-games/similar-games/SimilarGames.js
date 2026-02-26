"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getSimilarGames } from "../../../../lib/api";
import Slide_Similar from "./Slide_Similar";
import { FaArrowRightLong } from "react-icons/fa6";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function TopGames({ id }) {
  const [similarGames, setSimilarGames] = useState([]);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [loading, setLoading] = useState(false);

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

    return () => clearInterval(interval);
  }, [swiperInstance]);

  return (
    <div className="m-0">
      <div className="flex justify-between items-center text-center px-2">
        <h1 className="text-[2.3rem] font-bold text-white pb-3">Similar Games</h1>
        <p className="text-[1rem] font-sm text-[#ffffff] pb-3">
          <Link href="/games" className="flex items-center gap-3">
            Browse All Games <FaArrowRightLong />
          </Link>
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-6 text-white h-100">
          <span className="animate-spin h-10 w-10 border-2 border-white/30 border-t-white rounded-full"></span>
        </div>
      ) : similarGames.length ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={4}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          {similarGames.map((game, index) => (
            <SwiperSlide key={index}>
              <Slide_Similar game={game}></Slide_Similar>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex justify-center items-center gap-3 h-60">
          <h1 className="text-white text-[1.3rem] font-bold">Im sorry but i don&apos;t find anything</h1>
          <span className="text-[1.4rem]">😀</span>
        </div>
      )}
    </div>
  );
}

export default TopGames;
