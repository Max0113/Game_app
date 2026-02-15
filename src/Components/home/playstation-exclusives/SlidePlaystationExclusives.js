"use client"
import React , {useEffect , useState} from 'react'
import Image from 'next/image';
import {  GetGamesbyId  } from '../../../lib/api'

function SlidePlaystationExclusives({ title , url , id }) {

    const [game,setgame] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const data = await GetGamesbyId(id)
            setgame(data)
        }
        fetchdata()
    },[])

  return (
    <div className='bg-zinc-800 flex justify-between h-75 rounded-2xl'>
        <div className='p-10 flex flex-col gap-5 justify-center'>
            <h1 className='text-white font-bold text-[1.3rem]'>{title}</h1> 
            <div className='w-70 h-[0.3vh] bg-[#fff]'></div>
            <p className='text-white'>
                {game?.description_raw
                    ? `${game.description_raw.slice(0, 150)} ...`
                    : 'Loading description...'}
            </p>
        </div>
        <div className='w-[150%] h-full relative'>
            <Image src={url} fill className='object-cover rounded-r-2xl' alt={title || "Playstation Exclusive"} />
        </div>
    </div>
  )
}

export default SlidePlaystationExclusives