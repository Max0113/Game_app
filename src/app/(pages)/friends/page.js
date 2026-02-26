"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function page() {

  const container = useRef()
  
  useGSAP(() => {
    gsap.to(".phras",{
      autoAlpha : 1 ,
      y : 0 ,
      stagger : 0.2
    })

  },{scope : container})
  return (
    <div ref={container} className='text-center flex h-120 flex-col justify-center items-center'>
        <h1 className='text-[1.5rem] font-bold text-white phras invisible translate-y-4'>I'm sorry, but this feature is not available now 😉</h1>
        <Link href={'/'} className='text-red-950 underline text-[1.2rem] phras invisible translate-y-4'>Go to Home</Link>
    </div>
  )
}

export default page