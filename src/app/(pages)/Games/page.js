"use client"
import React, { useEffect, useState } from 'react'
import { PagesGames } from '@/lib/api'
import SlideGames from '@/Components/games/SlideGames'

function Page() {

  // variable & useState 

  const [games, setGames] = useState([])
  const [IndexPage,setIndexPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  
  const [isLoding,SetIsLoding] = useState(false)
  const [selectedTags, setSelectedTags] = useState([])

  const tags_Array = [
    "Action", "Indie", "Adventure", "RPG", "Strategy",
    "Shooter", "Casual", "Simulation", "Puzzle", "Arcade",
    "Platformer", "Massively Multiplayer", "Racing", "Sports", "Fighting"
  ]

  // methode 

  const toggleTag = (tagName) => {
    setSelectedTags((prevSelected) => {
      if (prevSelected.includes(tagName)) {
        return prevSelected.filter((t) => t !== tagName);
      } else {
        return [...prevSelected, tagName];
      }
    });
  };

  // useEffects

  useEffect(() => {
    setIndexPage(1)
  }, [selectedTags])

  useEffect(() => {
    const fetching = async () => {
      SetIsLoding(false)
      try{
        const { results, totalPages } = await PagesGames(IndexPage)
        setTotalPages(totalPages)
        const filtered = results.filter(game =>
          game.tags.some(tag =>
            selectedTags.includes(tag.name)
          )
        )
        setGames(selectedTags.length > 0 ? filtered : results)
      }catch{
        setGames([])
      } finally {
        SetIsLoding(true)
      }
    }
    fetching()
  }, [selectedTags,IndexPage]); 

  return (
    <div className="relative ml-10">
      <h1 className="text-white font-extrabold text-[2.3rem]">Games From Genres</h1>
      <div className="grid grid-cols-[220px_1fr] gap-2 mt-5">
        <div className='flex flex-col gap-1.5  justify-center items-center bg-gray-700 rounded-2xl h-185'>
          {tags_Array.map((self, index) => (
            <button 
              key={index} 
              onClick={() => toggleTag(self)} 
              className={`text-white w-[85%] py-2 rounded-3xl transition-all ${
                selectedTags.includes(self) 
                ? "bg-[#ff7878] font-bold" 
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
        <div className=' rounded-2xl w-[95%] p-4 text-white py-0 mb-10'>
          <div className='flex flex-wrap justify-center gap-8'>
           {isLoding ? (games.map((game,index) => (
              <SlideGames key={index}  url={game.background_image} title={game.name} platform={game.parent_platforms} rating={game.rating}></SlideGames>
           )) ) : (games.map((game,index) => (
              <div key={index} className="h-80 w-80 rounded-2xl bg-white/5 animate-pulse" />
           )) )}
          </div>
          <div className="flex gap-2 justify-center mt-6">

              {/* First page */}
              <button
                onClick={() => setIndexPage(1)}
                className="bg-black/20 w-10 h-10 rounded-full"
              >
                1
              </button>

              {/* Middle pages */}
              {[IndexPage - 1, IndexPage, IndexPage + 1]
                .filter((p, i, arr) => p > 1 && p < totalPages && arr.indexOf(p) === i)
                .map(p => {
                  if(p > 1 && p < 100) {
                   return ( <button
                    key={p}
                    onClick={() => setIndexPage(p)}
                    className={`w-10 h-10 rounded-full ${
                      p === IndexPage
                        ? "bg-red-500 text-white"
                        : "bg-black/20"
                    }`}
                  >
                    {p}
                  </button> ); }
                  else  {
                   return ( <button
                    key={p}
                    onClick={() => setIndexPage(p)}
                    className={`w-15 h-10 rounded-full ${
                      p === IndexPage
                        ? "bg-red-500 text-white"
                        : "bg-black/20"
                    }`}
                  >
                    {p}
                  </button> ); }
                })}

              <span className="text-3xl">...</span>

              {/* Last page */}
              <button
                onClick={() => setIndexPage(totalPages)}
                className="bg-black/20 w-20 h-10 rounded-full"
              >
                {totalPages}
              </button>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Page
