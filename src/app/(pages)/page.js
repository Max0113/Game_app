"use client"
import React , { useState , useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SeactionBar from '@/Components/home/hero/HeroCarousel'
import TopGames from '@/Components/home/top-games/TopGames'
import PlaystationExclusives from '@/Components/home/playstation-exclusives/PlaystationExclusives'



function page() {
  useGSAP(() => {
    gsap.to(".slides" , {
      autoAlpha : 1 ,
      y : 0 ,
      duration : 1 ,
      stagger : 0.8  // ✅ كل card تظهر بعد الثانية بـ 0.2s
    })
  },[])

  return (
    <>
      <div className='slides invisible translate-y-8'><SeactionBar></SeactionBar></div>
      <div className='slides invisible translate-y-8'><TopGames time={4800} Title={"Top Games Pc"} index={true} ></TopGames></div>
      <div className='slides invisible translate-y-8'><PlaystationExclusives></PlaystationExclusives></div>
      <div className='slides invisible translate-y-8'><TopGames time={5000} Title={"Top Games Ps5"} index={false} ></TopGames></div>
    </>
  )
}

export default page