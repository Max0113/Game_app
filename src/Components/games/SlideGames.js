"use client"
import React , { useEffect , useState } from 'react'


// icon 
import { FaSteam } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { IoLogoXbox } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";


function SlideGames({ title , url , rating , platform}) {
  return (
    <div className=' group w-80 relative '>
      <div className='w-80'>
        <img src={url} className='w-full h-90 z-5 rounded-3xl object-cover'></img>
        <div className='w-full h-90 z-6 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70  group-hover:bg-black/20 transition-opacity absolute bottom-0 rounded-3xl duration-300 '></div>
      </div>

      <div className='absolute top-4 left-4 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <div className='text-white text-4xl'><IoMdAddCircleOutline /></div> 
      </div>

      <div className='absolute bottom-5 left-5 *:mb-2 z-7 group-hover:-translate-y-1 transition-all duration-300'>
        <h1 className='text-[1.2rem] font-bold'>{title}</h1>
        <div className='flex flex-wrap gap-2 items-center'>
          {platform?.map((item, index) => (  
            <span key={index} className="ml-[0.5px] *:text-[1.1rem]">
                {item.platform?.name === "PC" && <FaSteam className=' text-white' />}
                {item.platform.name === "PlayStation" && <FaPlaystation className=' text-white' />}
                {item.platform.name === "Xbox" && <IoLogoXbox className=' text-white' />}
                {item.platform.name === "Android" && <IoLogoGooglePlaystore className=' text-white' />}
                {item.platform.name === "Apple Macintosh" && <IoLogoAppleAppstore className=' text-white' />}
            </span>
          ))}
          <span className='font-bold'>{` . ⭐ ${rating}`}</span>
        </div>
      </div>
    </div>
  )
}

export default SlideGames