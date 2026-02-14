"use client"
import React , { useState , useEffect } from 'react'
import SeactionBar from '@/Components/home/hero/HeroCarousel'
import TopGames from '@/Components/home/top-games/TopGames'
import PlaystationExclusives from '@/Components/home/playstation-exclusives/PlaystationExclusives'

function page() {


  return (
    <>
      <SeactionBar></SeactionBar>
      <TopGames time={4800} Title={"Top Games Pc"} index={true} ></TopGames>
      <PlaystationExclusives></PlaystationExclusives>
      <TopGames time={5000} Title={"Top Games Ps5"} index={false} ></TopGames>
    </>
  )
}

export default page