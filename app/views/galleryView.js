//? SEMANTIC - should these be buttons or anchor tags?
//https://ux.iu.edu/writings/buttons-vs-links-basic/
//https://uxmovement.com/buttons/when-to-use-a-button-or-link/

const renderGame = (game) => `
    <div class="card-holder">  
      <figure class="card">
        <div class="image-holder">
          <img src="./images/games_thumb/${game.gameThumb}" alt="${game.gameTitle}" />
          <p class="game-rating">Rating: ${game.gameRating}</p>
        </div>
        <figcaption class="card-body">
          <h1 class="card-title">${game.gameTitle}</h1>
          <p class="card-text">
            ${game.gameBriefDescription}
          </p>
        </figcaption>
      </figure>

    </div>
`;

const renderGames = (games) => `
  ${games.map((game) => renderGame(game)).join("")}
`;

export const galleryView = (games) => `

        <section class="gallery content">
          <h1 class="section-title">Games</h1>
          <div class="cards">
            ${renderGames(games)}
          </div>
        </section>

`;
