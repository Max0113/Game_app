import React from 'react'

const API_KEY = '4d4c35e61fa845e49972f309dbd3b783';


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
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Error fetching games:", error);
    return []; 
  }
};

// Fetchin By Id

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


// Fetch for PlayStationExclusive

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

