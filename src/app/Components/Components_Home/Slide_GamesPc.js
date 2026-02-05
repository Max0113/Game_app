import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";


function Slide2({ game }) {
  return (
    <div className='flex flex-col gap-2'>
      {/* WRAPPER: This is the magic part. 
          When we hover this container, everything inside rotates together.
      */}
      <div className='group relative cursor-pointer transition-transform duration-300 ease-out hover:scale-102 active:scale-95'>
        
        {/* OVERLAY: Slides in from the left and stays perfectly synced with the image */}
        <div className='absolute inset-0 w-0 group-hover:w-full transition-all duration-300 z-30 h-110 rounded-3xl bg-[#927e7e] opacity-50 pointer-events-none'></div>
        
        {/* IMAGE */}
        <img 
          className='w-full h-110 z-10 rounded-3xl object-cover shadow-lg group-hover:shadow-2xl' 
          src={game.background_image} 
          alt={game.name} 
        />

        {/* Optional: Add a small '+' icon like your screenshot */}
        <div className='absolute top-4 left-4 z-40 opacity-0 group-hover:opacity-100 transition-opacity'>
           <div className='text-white text-4xl'><IoMdAddCircleOutline /></div> 
        </div>
      </div>

      {/* TEXT: Outside the rotating wrapper so it stays flat and readable */}
      <h1 className=" font-bold text-[1.1rem] text-white mt-2 tracking-tight">
        {game.name}
      </h1>
    </div>
  )
}

export default Slide2