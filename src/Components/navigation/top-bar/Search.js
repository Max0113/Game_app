'use client';
import React, { useEffect, useState, useRef } from 'react';  
import { FaSearch, FaTimes } from "react-icons/fa";
import { SearchGames } from '../../../lib/api';
import ResultSearch from './ResultSearch';
import Link from 'next/link'

function Search() {

  const [games, setGames] = useState([]);  
  const [query, setQuery] = useState("");
  const [onSearch, setOnSearch] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const containerRef = useRef(null);  


  useEffect(() => {
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  function handleKeyDown(event) {  
    if (event.key === 'Enter') {
      event.preventDefault();
      setOnSearch(query);
      setIsActive(true);
    }
  }


  useEffect(() => {
 
    setLoading(true)
    
    const loadGames = async () => {
      try {
        const data = await SearchGames(onSearch);
        setGames(data || []);  
      } catch (error) {
        console.error("Error fetching games:", error);
        setGames([]);
      } finally {
        setLoading(false)
      }
    };
    
    loadGames();
  }, [onSearch]);

  return (
    <form 
      ref={containerRef}  
      className='relative w-full max-lg:w-80 max-sm:w-10 max-w-lg group' 
      onSubmit={(e) => e.preventDefault()}
    >
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsActive(true)}  
        type="search" 
        name="search"
        id='search'
        placeholder="Search services..."
        className="[&::-webkit-search-cancel-button]:bg-white w-full pl-12 pr-5 py-3 bg-[#532222a1] border border-white/10 rounded-full text-white outline-none backdrop-blur-md transition-all duration-300 focus:bg-[#6e2d2da1] focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
      />
      
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
        <div className='cursor-pointer max-sm:hidden'>
          <FaTimes onClick={() => setQuery("")}/>
        </div>
      </label>

      <div className='absolute inset-0 -z-10 bg-blue-600/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

      <div className={`my-3 
        overflow-y-auto 
        ${isActive && games.length > 0 ? 'block' : 'hidden'}  // ✅ Check games exist
        [&::-webkit-scrollbar]:w-3 
        [&::-webkit-scrollbar-track]:bg-gray-900 
        [&::-webkit-scrollbar-track]:hidden
        [&::-webkit-scrollbar-thumb]:bg-blue-600 
        [&::-webkit-scrollbar-thumb]:rounded-xl 
        [&::-webkit-scrollbar-thumb]:hover:bg-blue-500
        rounded-xl absolute w-full max-h-96 z-50 px-6 py-3 bg-[#6363633f] backdrop-blur-3xl`}
      >
        {
        
        !loading ? (games.map((element, index) => (
            <Link 
              href={`/games/${element.id}`} // add Link
              key={element.id || index}
            > 
              <ResultSearch 
                key={element.id || index}  
                title={element.name}
                img={element.background_image}
                rating={element.rating}
                released={element.released}
                platforms={element.parent_platforms || []}  
              />
            </Link> 
        )) )
        : (<div className="flex items-center justify-center py-6 text-white">
            <span className="animate-spin h-6 w-6 border-2 border-white/30 border-t-white rounded-full"></span>
          </div>)
        }
      </div>
    </form>
  );
}

export default Search;