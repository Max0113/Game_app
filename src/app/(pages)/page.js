"use client"
import React , { useState , useEffect } from 'react'
import SeactionBar from '../Components/Components_Home/SeactionBar'
import TopGames from '../Components/Components_Home/TopGames'

function page() {


  return (
    <>
      <SeactionBar></SeactionBar>
      <TopGames Title={"Top Games Pc"} index={true} ></TopGames>
      <TopGames Title={"Top Games Ps5"} index={false} ></TopGames>
    </>
  )
}

export default page