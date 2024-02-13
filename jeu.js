const personnage = document.querySelector(".personnage");
const obstacle = document.querySelector(".obstacle1");
const scoreDisplay = document.getElementById("valeurScore");

function saut() {
  personnage.classList.add("saut");

  // Enlèvement de la fonction à la classe pour pouvoir sauter de nouveau
  setTimeout(function () {
    personnage.classList.remove("saut");
  }, 700);
}

document.addEventListener("keyup", function (event) {
  if (event.code === "Space") {
    saut();
  }
});

let jeuDemarre = false;

document.addEventListener("keydown", function (event) {
  if (!jeuDemarre && event.code === "Space") {
    jeuDemarre = true;
    glisserGauche();
  }
});

let positionActuelle = 670;
const positionFinale = 0;
let score = 0;

// Vitesse de déplacement (en pixels par frame)
const vitesse = 6;

function glisserGauche() {
  if (!jeuDemarre) return;

  if (positionActuelle > positionFinale) {
    positionActuelle -= vitesse;
    obstacle.style.left = positionActuelle + "px";
    detecterCollision();

    if (positionActuelle <= positionFinale) {
      score++;
      scoreDisplay.textContent = score;
    }
    requestAnimationFrame(glisserGauche);
  } else {
    positionActuelle = 670;
    glisserGauche();
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
  score = 0;
  scoreDisplay.textContent = score;
}

function openForm() {
  var texte = document.querySelector(".regle");
  texte.style.display = "block";
}

function closeForm() {
  var texte = document.querySelector(".regle");
  texte.style.display = "none";
}
