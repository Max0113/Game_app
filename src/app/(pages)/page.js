"use client"
import React , { useState , useEffect } from 'react'
import SeactionBar from '../Components/Components_Home/SeactionBar'
import GamesPc from '../Components/Components_Home/GamesPc'
import GamesPs from '../Components/Components_Home/GamesPs'

function page() {


  return (
    <>
      <SeactionBar></SeactionBar>
      <GamesPc></GamesPc>
      <GamesPs></GamesPs>
    </>
  )
}

export default page