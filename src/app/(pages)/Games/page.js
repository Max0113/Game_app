"use client"
import React, { useEffect, useState } from 'react'
import { PagesGames } from '@/lib/api'
import SlideGames from '@/Components/games/SlideGames'

function Page() {
  const [games, setGames] = useState([])
  
  // 1. On remplace activeIndex par un tableau selectedTags
  const [selectedTags, setSelectedTags] = useState([])

  const tags = [
    "Action", "Indie", "Adventure", "RPG", "Strategy",
    "Shooter", "Casual", "Simulation", "Puzzle", "Arcade",
    "Platformer", "Massively Multiplayer", "Racing", "Sports", "Fighting"
  ]

  const toggleTag = (tagName) => {
    setSelectedTags((prevSelected) => {
      if (prevSelected.includes(tagName)) {
        return prevSelected.filter((t) => t !== tagName);
      } else {
        return [...prevSelected, tagName];
      }
    });
  };

  useEffect(() => {
    const fetching = async () => {
      const data = await PagesGames(1)
      setGames(data)
      console.log(data)
    }
    fetching()
  }, [selectedTags]); 

  return (
    <div className="relative ml-10">
      <h1 className="text-white font-extrabold text-[2.3rem]">Games From Genres</h1>
      <div className="grid grid-cols-[200px_1fr] gap-2 mt-5">
        <div className='flex flex-col gap-1 py-5 justify-center items-center bg-gray-700 rounded-2xl'>
          {tags.map((self, index) => (
            <button 
              key={index} 
              onClick={() => toggleTag(self)} 
              className={`text-white w-[85%] py-2 rounded-xl transition-all ${
                selectedTags.includes(self) 
                ? "bg-red-500 border-2 border-white font-bold" 
                : "hover:bg-gray-500"
              }`}
            >
              {self.includes(" ") 
                ? self.split(" ").map((w, i) => <span key={i} className="block leading-none">{w}</span>) 
                : self
              }
            </button>
          ))}
        </div>
        <div className='bg-red-900/20 h-100 rounded-2xl w-[95%] p-4 text-white'>
           <SlideGames></SlideGames>
        </div>
      </div>
    </div>
  );
}

export default Page