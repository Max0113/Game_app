"use client"
import React from 'react'
import Link from 'next/link'

import { TiHome } from "react-icons/ti";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { usePathname } from 'next/navigation';



function Sidebar() {

  const pathName = usePathname()
  
  const NavbarLink = [
    {
      title : "Home",
      link : "/",
      icon : <TiHome className='h-5.5 w-5.5 max-lg:h-6.5 max-lg:w-6.5'/>
    },
    {
      title : "Category",
      link : "/category",
      icon : <BsFillGrid1X2Fill className='h-4 w-4 max-lg:h-5 max-lg:w-5' />
    },
    {
      title : "Games",
      link : "/games",
      icon : <BsFillGrid1X2Fill className='h-4 w-4 max-lg:h-5 max-lg:w-5' />
    },
    {
      title : "Wlshlist",
      link : "/wlshlist",
      icon : <FaHeart className='h-5 w-5 max-lg:h-6 max-lg:w-6'/>
    },
    {
      title : "Friends",
      link : "/friends",
      icon : <FaUsers className='h-5 w-5 max-lg:h-6 max-lg:w-6'/>
    },
  ]

  

  return (
    <main className='text-white bg-[#000000a1] backdrop-blur-2xl  rounded-2xl shadow-2xl h-[97.5%] py-7 px-9 m-2 max-lg:px-0'>
        <h1 className='font-extrabold text-[1.8rem] max-lg:hidden '><span className='text-[#ff7878]'>Gaming</span>Boi</h1>
        <h1 className='font-bold text-[1.6rem] hidden max-lg:block text-center'><span className='text-[#ff7878]'>G</span>B</h1>
        <ul className='flex flex-col max-lg:items-center p-3 *:px-3 *:py-3 max-lg:*:px-0'>
            {NavbarLink.map((self, index) => (
              <li key={index}><Link href={self.link} className={`flex ${(pathName == self.link) ? "text-[#ff7878]" : ""} duration-200 items-center gap-2 hover:text-[#ff7878]`}>{self.icon}
              <snap className="max-lg:hidden font-medium">{self.title}</snap>
              </Link></li>
            ))}
        </ul>
    </main>
  )
}

export default Sidebar