"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link'; // Import Link for navigation
import { GetGamesbyId } from "@/lib/api"
import ImgeSlide from "@/Components/games/pages-games/ImgeSlide"
import SimilarGames from '@/Components/games/pages-games/similar-games/SimilarGames'


// icons
import { FaSteam, FaPlaystation, FaLinux } from "react-icons/fa";
import { IoLogoXbox } from "react-icons/io";
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";
import { BsNintendoSwitch } from "react-icons/bs";

function Page() { // Capitalized component name (React convention)

  const [dataGames, setdataGames] = useState({})
  const [Loding, setLoading] = useState(false)

  const pathname = usePathname(); 
  const page = pathname.split("/")[2] || "/";

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const Games = await GetGamesbyId(page)
        setdataGames(Games || [])
      }catch(error) {
        console.error(error)
        setdataGames([])
      }finally {
        setLoading(true)
      }

    }
    fetchdata()
  }, [page]) // Added slug as dependency so it refreshes when you click a similar game

  return (
    <div className='m-10'>
        {Loding ? (
          <>
            <p className='text-white font-extrabold text-[2.3rem] ml-3 mb-1'>{dataGames.name}</p>
            
            <p className='text-white font-bold text-[1.3rem] mb-5 ml-3'>{`Rating count : ${dataGames.ratings_count} ⭐`}</p>
            
            {/* Fixed: Removed the extra closing div that was here */}
            <div className='flex gap-3 ml-3 mb-6'>
              {(dataGames.parent_platforms)?.map((item, index) => (
                <span key={index} className="text-[1.7rem]">
                    {item.platform.name === "PC" && <FaSteam className='text-white' />}
                    {item.platform.name === "PlayStation" && <FaPlaystation className='text-white' />}
                    {item.platform.name === "Xbox" && <IoLogoXbox className='text-white' />}
                    {item.platform.name === "Android" && <IoLogoGooglePlaystore className='text-white' />}
                    {item.platform.name === "Apple Macintosh" && <IoLogoAppleAppstore className='text-white' />}
                    {item.platform.name === "Linux" && <FaLinux className='text-white' />}
                    {item.platform.name === "Nintendo" && <BsNintendoSwitch className='text-white' />}
                </span>
              ))}
          </div>
          </>
          ) : 
        
          (
          <div className="space-y-4 ml-3 mb-10">
            {/* Title Skeleton */}
            <div className="h-12 w-1/2 rounded-lg bg-white/10 animate-pulse" />
            
            {/* Subtitle/Rating Skeleton */}
            <div className="h-9 w-1/4 rounded-lg bg-white/5 animate-pulse" />
            
            {/* Platforms Icons Skeleton */}
            <div className="flex gap-3">
              {(dataGames.parent_platforms || [...Array(3)])?.map((i) => (
                <div key={i} className="h-11 w-11 rounded-full bg-white/10 animate-pulse" />
              ))}
            </div>
          </div>
          )
        }

        <ImgeSlide id={page} />

        {Loding ? (<div className='text-white py-8' dangerouslySetInnerHTML={{ __html: dataGames.description }} />) : (<div className="h-50 w-full rounded-lg bg-white/5 animate-pulse" />)}

        <SimilarGames id={page}></SimilarGames>

    </div>
  )
}

export default Page