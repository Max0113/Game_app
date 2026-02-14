import React from 'react'

const API_KEY = 'd0ad34359202419fb94f193886b57e8c';


// https://api.rawg.io/api/games?key=d0ad34359202419fb94f193886b57e8c&page=1&page_size=12


// Fetchin 10 Top Games in PlayStation and Pc


export const Top10Games = async ( index ) => {
  let PLATFORMS = index ? '4' : '18,187'
  const START_DATE = '2013-01-01';
  const END_DATE = new Date().toISOString().split('T')[0];
  try {
    const URL = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=${PLATFORMS}&dates=${START_DATE},${END_DATE}&ordering=-metacritic&page_size=10`;
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results; 
    
  } catch (error) {
    console.error("Error fetching games:", error);
    return []; 
  }
};


// Fetchin For Search Use Name of Games

export const SearchGames = async (nameGame) => {
  try {
    const URL = `https://api.rawg.io/api/games?key=${API_KEY}&search=${nameGame}`;
    // https://api.rawg.io/api/games?key=b6fe510c02354ceaa226cbf650bc367d&search=gtav&ordering=-metacritic&page_size=1
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Error fetching games:", error);
    return []; 
  }
};

// Fetchin By Id Game

export const GetGamesbyId = async (id) => {
  try {
    console.log(id)
    const URL = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data; 

  } catch (error) {
    console.error("Error fetching game details:", error);
    return null; 
  }
};

// Fechin Game Screenshots by id
export const getGameScreenshots = async (id) => {
  try {
    const URL = `https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`;
    const res = await fetch(URL);
    if (!res.ok) throw new Error('Failed to fetch screenshots');
    const data = await res.json();
    return data.results || []; 
  } catch (error) {
    console.error("Screenshot Error:", error);
    return [];
  }
};

// Fechin Games Similar  by id
export const getSimilarGames = async (id) => {
    try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}/game-series?key=${API_KEY}&page_size=10`);
        // https://api.rawg.io/api/games/3498/game-series?key=4d4c35e61fa845e49972f309dbd3b783&page_size=10
        const data = await response.json();
        return data.results; // This returns the array of similar games
    } catch (error) {
        console.error("Error fetching similar games:", error);
        return [];
    }
}

// Fetch for PlayStation Exclusive

function isPlayStationExclusive(game) {
  const platforms = game.platforms.map(p => p.platform.slug);

  const hasPS = platforms.some(p => p.includes("playstation"));
  const hasPC = platforms.includes("pc");
  const hasXbox = platforms.some(p => p.includes("xbox"));

  return hasPS && !hasPC && !hasXbox;
}

export const PlaystationExclusivesAPI = async () => {
  try {
    const START_DATE = '2018-01-01';
    const END_DATE = new Date().toISOString().split('T')[0];
    const URL = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${START_DATE},${END_DATE}&platforms=18,187&ordering=-metacritic&page_size=40`;
    // https://api.rawg.io/api/games?key=4d4c35e61fa845e49972f309dbd3b783&platforms=18&ordering=-metacritic&page_size=30
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results.filter((elemnt) => isPlayStationExclusive(elemnt)); 

  } catch (error) {
    console.error("Error fetching games:", error);
    return []; 
  }
};


// Fetch 20 Games for Page 

export const PagesGames = async (index) => {
  try {
    const URL = `https://api.rawg.io/api/games?key=${API_KEY}&page=${index}&page_size=12`
    const response = await fetch(URL)
    const data = await response.json()
    const results = data?.results || []
    const totalPages = Math.max(1, Math.ceil((data?.count || 0) / 12))
    return { results, totalPages }
  }catch (error) {
    console.error(error)
    return { results: [], totalPages: 1 }
  }
}


