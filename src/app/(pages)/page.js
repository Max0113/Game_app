"use client"
import React , { useState , useEffect } from 'react'
import SeactionBar from '../Components/Components_Home/SeactionBar'
import TopGames from '../Components/Components_Home/TopGames'
import PlaystationExclusives from '../Components/Components_Home/PlaystationExclusives'

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