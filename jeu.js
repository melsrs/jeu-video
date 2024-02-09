const personnage = document.querySelector(".personnage");

function saut() {
  personnage.classList.add("saut");
  // Enlevemment de la fonction à la classe pour pouvoir sauter de nouveau
  setTimeout(function () {
    personnage.classList.remove("saut");
  }, 500);
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    saut();
  }
});

const obstacle = document.querySelector(".obstacle");
const defilement = obstacle.getBoundingClientRect();

let positionActuelle = 670;
const positionFinale = 0;
const vitesse = 6; // Vitesse de déplacement (en pixels par frame)

// Fonction pour animer le glissement
function glisserGauche() {
  if (positionActuelle > positionFinale) {
    positionActuelle -= vitesse;
    obstacle.style.left = positionActuelle + "px";
    requestAnimationFrame(glisserGauche);
  } else {
    obstacle.style.display = "none";
  }
}
glisserGauche();

const collisionPersonnage = personnage.getBoundingClientRect();
console.log(personnage.getBoundingClientRect());

// Détecter collision 

function collision() {
  if (collisionPersonnage.y === 170) {
    console.log(collisionPersonnage)
  }
}
