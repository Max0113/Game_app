"use client"
import Image from 'next/image';
import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function HeroCarouselSlides({ link, logo, Title, Text, isActive }) {
    const container = useRef();

    useGSAP(() => {
        if (isActive) {
            gsap.to(".sna", {
                y: 0,
                autoAlpha: 1,
                stagger: 0.1,
                duration: 0.4,
            });
        } else {
            gsap.to(".sna", {
                y: 20,
                autoAlpha: 0,
                duration: 0.4,
            });
        }
    }, { dependencies: [isActive], scope: container }); // 'scope' is the magic part

    return (
        <div ref={container} className='relative w-[94%] h-140 overflow-hidden ml-[3%]'>
            <div className='absolute bottom-20 left-20 z-10'>
                {/* Initial state handled by Tailwind: invisible and translate-y-20 */}
                <Image src={logo} width={400} height={150} className='w-100 h-auto sna invisible translate-y-20' alt="logo" />
                <p className='text-white text-[2rem] font-bold my-3 sna invisible translate-y-20'>{Title}</p>
                <p className='text-white text-[1.2rem] my-3 whitespace-pre-line sna invisible translate-y-20'>{Text}</p>
                <button 
                    className='sna invisible translate-y-20 my-3 text-white px-9 py-2.5 rounded-full bg-[#ff5b5b] hover:bg-[#ff3744] transition-all duration-300 z-20 hover:scale-105'
                >
                    Find out more!
                </button>
            </div>
            <video 
                src={link} 
                className='w-full h-full object-cover rounded-2xl' 
                loop 
                autoPlay 
                muted 
                playsInline
            />
        </div>
    )
}

export default HeroCarouselSlides;