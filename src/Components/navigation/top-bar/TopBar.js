"use client"
import React from 'react'
import Search from './Search'
import Link from 'next/link'

function TopBar() {
  return (
    <div className='flex justify-between items-center my-6 mx-15'>
      <Search />
      <div className='mx-3 grid grid-cols-[120px_120px] gap-6'>

        <Link href='/login'
          className='bg-[#542323a1] text-white px-7 py-2.5 rounded-md hover:bg-[#ff5b5b] hover:shadow-lg hover:shadow-[#fd54547d] duration-300 text-center'>
          Login
        </Link>

        <Link href='/signin'
          className='bg-[#542323a1] text-white px-7 py-2.5 rounded-md hover:bg-[#ff5b5b] hover:shadow-lg hover:shadow-[#fd54547d] duration-300 text-center'>
          Sign In
        </Link>

      </div>
    </div>
  )
}

export default TopBar