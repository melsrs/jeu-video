const personnage = document.querySelector(".personnage");
const obstacle = document.querySelector(".obstacle1");

function saut() {
  personnage.classList.add("saut");
  // Enlèvemment de la fonction à la classe pour pouvoir sauter de nouveau
  setTimeout(function () {
    personnage.classList.remove("saut");
  }, 700);
}

document.addEventListener("keyup", function (event) {
  if (event.code === "Space") {
    saut();
  }
});

const positionObstacle = obstacle.getBoundingClientRect();
let positionActuelle = 670;
const positionFinale = 0;
const vitesse = 5; // Vitesse de déplacement (en pixels par frame)

let toursEffectues = 0;

function glisserGauche() {
  if (toursEffectues < 5) {
    if (positionActuelle > positionFinale) {
      positionActuelle -= vitesse;
      obstacle.style.left = positionActuelle + "px";
      detecterCollision();
      requestAnimationFrame(glisserGauche);
    } else {
      // Réinitialiser la position et incrémenter le compteur de tours
      positionActuelle = 670;
      toursEffectues++;
      glisserGauche();
    }
  } else {
    obstacle.style.display = "none";
    alert("BRAVO TU AS GAGNÉ");
  }
}

glisserGauche();

function detecterCollision() {
  const personnagePosition = personnage.getBoundingClientRect();
  const obstaclePosition = obstacle.getBoundingClientRect();

  if (
    obstaclePosition.left < personnagePosition.right &&
    obstaclePosition.right > personnagePosition.left &&
    obstaclePosition.top < personnagePosition.bottom &&
    obstaclePosition.bottom > personnagePosition.top
  ) {
    alert("GAME OVER");
    recommencerJeu();
  }
}

function recommencerJeu() {
  positionActuelle = 670;
  toursEffectues = 0;
  obstacle.style.display = "block";
}
