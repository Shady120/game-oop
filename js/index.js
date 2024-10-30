"use strict";
let loadingPage = document.getElementById("loading-page");
let detalisGames = document.querySelector(".details-games");
let cards = document.getElementById("cards")


// Nav Links
let links = document.getElementById("links");
links.addEventListener("click", async function (e) {
  let category = e.target.textContent;
  await fetchData(category);
  let action = document.querySelectorAll("a.nav-link")
  for(let i of action){
    i.classList.remove("active")
  }
  e.target.classList.add("active")
});

//Fetch Api Category
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "2ef89e6f9amsh2c5d65d1a36e1c2p193d76jsna0b4ba3bd32d",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};
async function fetchData(category) {
  let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
  loadingPage.classList.replace("d-none" , "d-flex")
  let request = await fetch(url, options);
  let response = await request.json();
  setTimeout(function(){ loadingPage.classList.replace("d-flex" , "d-none")},1000)
  cards.innerHTML = ""; 
  for (let gameData of response) {
    let game = new GetGames(
      gameData.title,
      gameData.short_description,
      gameData.platform,
      gameData.publisher,
      gameData.genre,
      gameData.id,
    );
    game.displayGameData();
  }
}

// //--------------------------------------------------------------------------------------------------------------------
//Display Games 
import { GetGames } from "./display.js";

await fetchData("mmorpg");
//--------------------------------------------------------------------------------------------

// Part 2 
//Fetch  Detalis

export async function fetchDetails(code) {
  let url1 = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${code}`;
  let requestOne = await fetch(url1, options);
  let responseOne = await requestOne.json();
  detalisGames.innerHTML = "";
    let detailsData = new GetGamesDetalis(
      responseOne.title,
      responseOne.id,
      responseOne.genre,
      responseOne.platform,
      responseOne.status,
      responseOne.description,
      responseOne.game_url,
      responseOne.thumbnail,
    )    
    detailsData.displayGameDetails();
  }
  
// Display Detials  
import { GetGamesDetalis } from "./details.js";





 