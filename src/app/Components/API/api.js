import React from 'react'

const API_KEY = '4d4c35e61fa845e49972f309dbd3b783';

export const fetch10GamesPc = async () => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-added&page_size=10`
    );
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Error fetching games:", error);
    return []; 
  }
};  

export const fetch10GamesPs5 = async () => {
  const PLATFORMS = '18,187';
  try {
    const URL = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=${PLATFORMS}&ordering=-metacritic&page_size=10`;
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results; 
    
  } catch (error) {
    console.error("Error fetching games:", error);
    return []; 
  }
};

export const fetch3Games = async (nameGame) => {
  try {
    const URL = `https://api.rawg.io/api/games?key=${API_KEY}&search=${nameGame}&page_size=1`;
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Error fetching games:", error);
    return []; 
  }
};

export const SearchGames = async (nameGame) => {
  const games = await fetch3Games(nameGame);
  
  if (!games || games.length === 0) return null;

  console.log("Found ID:", games[0].id);

  try {
    const URL = `https://api.rawg.io/api/games/${games[0].id}?key=${API_KEY}`;
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();

    return data; 
    
  } catch (error) {
    console.error("Error fetching game details:", error);
    return null; 
  }
};

const text = async () => {
  const gameDetails = await SearchGames("Warframe");
  console.log("Full Game Object:", gameDetails);
  console.log("Description:", gameDetails?.description_raw);
};

text();