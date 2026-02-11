import React from 'react'
import Search from './Search'

function TopBar() {
  return (
    <div className='flex justify-between items-center my-6 mx-15'>
        <Search />
        <div className='mx-3 grid grid-cols-[120px_120px] gap-6'>
            <button className='bg-[#542323a1] text-white px-7 py-2.5 rounded-md hover:bg-[#ff5b5b] hover:shadow-[#fd5454] duration-300 text-center'>Login</button>
            <button className='bg-[#542323a1] text-white px-7 py-2.5 rounded-md hover:bg-[#ff5b5b] hover:shadow-[#fd5454] duration-300 text-center'>Sign In</button>
        </div>
    </div>
  )
}

export default TopBar