import React from 'react'

const API_KEY = '4d4c35e61fa845e49972f309dbd3b783';

export const Top10Games = async ( index ) => {
  let PLATFORMS = index ? '4' : '18,187'
  const START_DATE = '2000-01-01';
  const END_DATE = new Date().toISOString().split('T')[0];
  try {
    const URL = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=${PLATFORMS}&dates=${START_DATE},${END_DATE}&ordering=-metacritic&page_size=10`;
    const response = await fetch(URL);
    if (!response.ok) throw new console.error('Network response was not ok');
    const data = await response.json();
    return data.results; 
    
  } catch (error) {
    console.error("Error fetching games:", error);
    return []; 
  }
};

// Testing PLACE 

// https://api.rawg.io/api/games?key=4d4c35e61fa845e49972f309dbd3b783&search=${w}


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



// export const GetGames = async (nameGame) => {
//   const games = await SearchGames(nameGame);
  
//   if (!games || games.length === 0) return Error("We have Error in feching data");

//   console.log("Found ID:", games[0].id);

//   try {
//     const URL = `https://api.rawg.io/api/games/${games[0].id}?key=${API_KEY}`;
//     const response = await fetch(URL);
//     if (!response.ok) throw new Error('Network response was not ok');
    
//     const data = await response.json();

//     return data; 
    
//   } catch (error) {
//     console.error("Error fetching game details:", error);
//     return null; 
//   }
// };

// const text = async () => {
//   const gameDetails = await SearchGames("Warframe");
//   console.log("Full Game Object:", gameDetails);
//   console.log("Description:", gameDetails?.description_raw);
// };

// text();