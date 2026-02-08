import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";


function Slide2({ game }) {
  return (
    <div className='flex flex-col gap-2 my-3'>
      {/* WRAPPER: This is the magic part. 
          When we hover this container, everything inside rotates together.
      */}
      <div className='group relative cursor-pointer transition-transform duration-300 ease-out hover:scale-102 active:scale-95'>
        
        {/* OVERLAY: Slides in from the left and stays perfectly synced with the image */}
        <div className='absolute inset-0 w-0 group-hover:w-full transition-all duration-300 z-30 h-110 rounded-3xl bg-[#ff7878] opacity-50 pointer-events-none'></div>
        
        {/* IMAGE */}
        <img 
          className='w-full h-110 z-10 rounded-3xl object-cover' 
          src={game.background_image} 
          alt={game.name} 
        />
        

        {/* Optional: Add a small '+' icon like your screenshot */}
        <div className='absolute top-4 left-4 z-40 opacity-0 group-hover:opacity-100 transition-opacity'>
           <div className='text-white text-4xl'><IoMdAddCircleOutline /></div> 
        </div>

        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>

        <div className="absolute bottom-4 z-40 left-1 right-0 p-5 transform transition-transform duration-500 ease-out translate-y-2 group-hover:translate-y-0">
          <h3 className="text-white text-xl font-bold mb-1 drop-shadow-lg">{game.name}</h3>
          <div className="flex items-center gap-2 opacity-100 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <span className="text-red-400 text-sm font-semibold">RPG</span>
            <span className="text-gray-400 text-xs">•</span>
            <span className="text-yellow-400 text-sm font-bold">{`⭐ ${game.rating}`}</span>
          </div>
        </div>
      
      </div>

      {/* TEXT: Outside the rotating wrapper so it stays flat and readable */}
      
    
    </div>
  )
}

export default Slide2