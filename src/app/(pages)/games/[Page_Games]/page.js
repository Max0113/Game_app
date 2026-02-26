"use client"
import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { GetGamesbyId } from "@/lib/api"
import ImgeSlide from "@/Components/games/pages-games/ImgeSlide"
import SimilarGames from '@/Components/games/pages-games/similar-games/SimilarGames'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

import { FaSteam, FaPlaystation, FaLinux } from "react-icons/fa";
import { IoLogoXbox } from "react-icons/io";
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";
import { BsNintendoSwitch } from "react-icons/bs";
// ✅ Removed wrong import: Container is from postcss, not needed here

function Page() {

  const [dataGames, setDataGames] = useState(null)  // ✅ null is better default than {}
  const [loading, setLoading] = useState(false)      // ✅ Fixed capitalization convention

  const pathname = usePathname();
  const page = pathname.split("/")[2] || "/";

  const container = useRef()

  useEffect(() => {
    setLoading(false)  // ✅ Reset loading on page change
    setDataGames(null) // ✅ Clear stale data when navigating to new game

    const fetchdata = async () => {
      try {
        const games = await GetGamesbyId(page)
        setDataGames(games || null)
      } catch (error) {
        console.error(error)
        setDataGames(null)
      } finally {
        setLoading(true)
      }
    }
    fetchdata()
  }, [page])

  useGSAP(() => {
    // ✅ Guard: wait for real data with a name property
    if (!dataGames?.name) return

    const splitTitle = SplitText.create(".title", { type: "words" })
    const splitrating = SplitText.create(".rating", { type: "words" })

    gsap.set(splitTitle.words, { autoAlpha: 0, y: 10 })
    gsap.set(splitrating.words, { autoAlpha: 0, y: 10 })
    gsap.set(".icon", { autoAlpha: 0, y: 8 })
    gsap.set(".slides", { autoAlpha: 0, y: 8 })

    gsap.timeline()
      .to(splitTitle.words, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out"
      })
      .to(splitrating.words, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: "power2.out"
      },"-=50%")
      .to(".icon", {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: "power2.out"
      },"-=30%")
      .to(".slides", {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out"
      })

    return () => {
      splitTitle.revert()
      splitrating.revert()
    } // ✅ Cleanup to prevent span duplication
  }, { scope: container, dependencies: [dataGames] })

  return (
    <div ref={container} className='m-10'>

      {/* ✅ Fixed: was `{true ? ...}` — now actually checks loading state */}
      {loading && dataGames ? (
        <>
          <p className='text-white font-extrabold text-[2.3rem] ml-3 mb-1 title'>
            {dataGames.name}
          </p>

          <p className='text-white font-bold text-[1.3rem] mb-5 ml-3 rating'>
            {`Rating count : ${dataGames.ratings_count || "N/A"} ⭐`}
          </p>

          <div className='flex gap-3 ml-3 mb-6 '>
            {dataGames.parent_platforms?.map((item, index) => (
              <span key={index} className="text-[1.7rem] icon invisible">
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
      ) : (
        // ✅ Skeleton shows correctly while loading
        <div className="space-y-4 ml-3 mb-10">
          <div className="h-12 w-1/2 rounded-lg bg-white/10 animate-pulse" />
          <div className="h-9 w-1/4 rounded-lg bg-white/5 animate-pulse" />
          <div className="flex gap-3">
            {[...Array(3)].map((_, index) => (  // ✅ Fixed: was using dataGames.parent_platforms which is undefined during loading
              <div key={index} className="h-11 w-11 rounded-full bg-white/10 animate-pulse" />
            ))}
          </div>
        </div>
      )}

      {loading ? <div className='slides invisible translate-y-4'>
        <ImgeSlide id={page} />
      </div> : <div className="h-150 w-full rounded-lg bg-white/5 animate-pulse" />}

      <div className='slides invisible translate-y-4'>
          <div className='text-white py-8' dangerouslySetInnerHTML={{ __html: dataGames?.description }} />
      </div>

      <div className='slides invisible translate-y-4'>
        <SimilarGames id={page} />
      </div>

    </div>
  )
}

export default Page