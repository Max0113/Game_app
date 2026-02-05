'use client';
import React, { useRef , useState } from 'react'
import { FaSearch, FaTimes } from "react-icons/fa";

function SearchBar() {

  const [query, setQuery] = useState("");
  const [isActive, setIsActive] = useState(false);


  return (
      <form className='relative w-full max-lg:w-80 max-sm:w-10 max-w-lg group'>
          {/* Input Field */}
          <input 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search" 
            name="search"
            id='search'
            placeholder="Search services..."
            className="[&::-webkit-search-cancel-button]:bg-white w-full pl-12 pr-5 py-3 bg-[#532222a1] border border-white/10 rounded-full text-white outline-none backdrop-blur-md transition-all duration-300 focus:bg-[#6e2d2da1] focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
          />
          
          {/* Icon as a Label */}
          <label 
            htmlFor="search" 
            className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 transition-colors cursor-text'
          >
            <div className='cursor-pointer'><FaSearch /></div>
          </label>

           <label 
            htmlFor="search" 
            className='absolute text-xl right-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 transition-colors cursor-text'
          >
            <div className='cursor-pointer max-sm:hidden'><FaTimes onClick={() => setQuery("")}/></div>
          </label>

          {/* Background Glow Effect */}
          <div className='absolute inset-0 -z-10 bg-blue-600/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
      </form>
  )
}

export default SearchBar