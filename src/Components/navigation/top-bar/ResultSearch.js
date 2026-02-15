"use client"
import React from 'react';
import Image from 'next/image';

// icon 
import { FaSteam } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { IoLogoXbox } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { FaLinux } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";

function ResultSearch({ title, img, rating, released, platforms }) {
  return (
    <div className='flex bg-[#4a4a4a] my-3 p-4 rounded-xl hover:bg-[#8e8d8d] hover:scale-102 transition-all duration-400 cursor-pointer'>
      <div>
        {img ? 
        <div className='w-40 h-[120px] relative shrink-0'>
          <Image 
            src={img || '/placeholder.jpg'}  
            alt={title}  
            className='object-cover rounded-lg'
            fill
          /> 
        </div>
        : <div className='w-40 h-[120px] object-cover rounded-lg bg-gray-500 flex justify-center items-center'><span className='text-white'>N/A🥱</span></div>}
      </div>
      <div className='ml-6 mt-3 text-white'>
        <h1 className='font-bold text-[1.1rem] mb-2'>{title}</h1>
        <div className='flex gap-2 mb-2'>
          <span className='text-sm'>{released ? `#${released}` : 'TBA'}</span>
          <span className='font-bold'>.</span>
          <span className='text-sm'>⭐ {rating || 'N/A'}</span>
        </div>
        <div className='flex flex-wrap gap-2'>
          {platforms?.map((item, index) => (  
            <span key={index} className="ml-0 *:text-[1rem]">
                {item.platform?.name === "PC" && <FaSteam className=' text-white' />}
                {item.platform.name === "PlayStation" && <FaPlaystation className=' text-white' />}
                {item.platform.name === "Xbox" && <IoLogoXbox className=' text-white' />}
                {item.platform.name === "Android" && <IoLogoGooglePlaystore className=' text-white' />}
                {item.platform.name === "Apple Macintosh" && <IoLogoAppleAppstore className=' text-white' />}
                {item.platform.name === "Linux" && <FaLinux className=' text-white' />}
                {item.platform.name === "Nintendo" && <BsNintendoSwitch className=' text-white' />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResultSearch;