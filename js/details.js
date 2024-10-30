import { GetGames } from "./display.js";

let detalisGames = document.querySelector(".details-games");
export class GetGamesDetalis extends GetGames {
  constructor(
    title,
    id,
    genre,
    platform,
    status,
    description,
    game_url,
    thumbnail
  ) {
    super(title, description, platform, genre, id, status);
    (this.thumbnail = thumbnail),
      (this.status = status),
      (this.description = description),
      (this.genre = genre),
      (this.game_url = game_url),
      (this.id = id);
  }
  displayGameDetails() {
    detalisGames.innerHTML = `<div class="container">
    <div class="row">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="text-light fw-bolder fs-3 mb-3">Details Game</h5>
        <i class="fa-solid fa-xmark fa-xl text-light"></i>
      </div>
      <div class="col-xl-4 col-lg-4 col-sm-12">
        <img src="https://www.freetogame.com/g/${this.id}/thumbnail.jpg" alt="">
      </div>
      <div class="col-xl-7 col-lg-8 col-sm-12 text-light">
          <b class="fs-3">Title: ${this.title}</b>
          <p class="my-2">Category: <span class="text-bg-info rounded-pill">${this.genre}</span> </p>
          <p class="my-2">Platform: <span class="text-bg-info rounded-pill">${this.platform}</span> </p>
          <p class="my-2">Status: <span class="text-bg-info rounded-pill">${this.status}</span> </p>
          <p>${this.description}</p>
          <a class="btn btn-outline-warning text-light" href="${this.game_url}" id="btnLink">Show Game</a>
      </div>
    </div>
  </div>`;

    let btn = document.querySelector(".details-games i.fa-solid");
    let btnLink = document.getElementById("btnLink");
    if (btn) {
      btn.addEventListener("click", () => {
        detalisGames.classList.add("d-none");
        cards.classList.remove("d-none");
        header.classList.remove("d-none");
      });
    }
  }
}
