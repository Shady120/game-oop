import { fetchDetails } from "./index.js";
let loadingPage = document.getElementById("loading-page");
let detalisGames = document.querySelector(".details-games");
let header = document.getElementById("header")
export class GetGames {
  constructor(title, short_description, platform, publisher, genre, id) {
    this.title = title;
    this.short_description = short_description;
    this.platform = platform;
    this.publisher = publisher;
    this.genre = genre;
    this.id = id;
  }

  displayGameData() {
    let card = document.createElement("div");
    card.className = "col-xl-3 col-lg-4 col-md-6 col-sm-12";
    card.id = this.id;
    card.innerHTML = `
          <div class="content">
            <div class="card-group">
              <div class="card">
                <div class="card-header">
                  <img src="https://www.freetogame.com/g/${this.id}/thumbnail.jpg" class="w-100" alt="${this.title}">
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <h5 class="card-title">${this.title}</h5>
                    <button class="btn p-2 bg-primary">free</button>
                  </div>
                  <p class="card-text text-center my-3">${this.short_description}</p>
                </div>
                <div class="spans d-flex justify-content-between align-items-center m-2">
                  <span>${this.genre}</span>
                  <span>${this.platform}</span>
                </div>
              </div>
            </div>
          </div>
        `;
    cards.append(card);
    card.addEventListener("click", () => {
      loadingPage.classList.replace("d-none", "d-flex");
      detalisGames.classList.remove("d-none");
      cards.classList.add("d-none");
      header.classList.add("d-none");
      fetchDetails(this.id);
      setTimeout(function () {
        loadingPage.classList.replace("d-flex", "d-none");
      }, 1000);
    });
  }
}
