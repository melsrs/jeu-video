const personnage = document.querySelector(".personnage");
const positionInitale = 0;

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    const saut = parseInt(getComputedStyle(personnage).bottom);
    personnage.style.bottom = saut + 100 + "px";
  }
});

document.addEventListener("keyup", function (event) {
  if (event.code === "Space") {
    personnage.style.bottom = positionInitale;
  }
});

const container = document.querySelector(".container");
const obstacle = document.querySelector(".obstacle");
const chou = document.querySelector(".chou");

// function deplacerElements() {
//   const defilementObstacle = obstacle.getBoundingClientRect();
//   const defilementContainer = container.getBoundingClientRect();
//   //console.log(container.getBoundingClientRect())
//   console.log(obstacle.getBoundingClientRect());

//   obstacle.style.left = obstacle.style.left - 2 + "px"; 

//   if (defilementObstacle.x > defilementContainer.x) {
//     setTimeout(deplacerElements, 1);
//   }
// }

// Lancer le défilement automatique au chargement de la page


function deplacerElements() {
  const defilementObstacle = parseInt(getComputedStyle(obstacle).right);
  const defilementChou = parseInt(getComputedStyle(chou).right);
  obstacle.style.right = defilementObstacle + 2 + "px";
  chou.style.right = defilementChou + 1 + "px";

  if (defilementObstacle >= container) {
  }

  if (defilementChou >= container) {
  }

  setTimeout(deplacerElements, 1);
}

deplacerElements();


// function glisserGauche() {
//   if (positionActuelle > positionFinale) {
//     positionActuelle -= vitesse;
//     obstacle.style.left = positionActuelle + "px";
//     requestAnimationFrame(glisserGauche);
//   } else {
//     obstacle.style.display = "none";
//     positionActuelle = obstacle;
//     obstacle.style.display = "block";

//     glisserGauche();
//   }
// }
