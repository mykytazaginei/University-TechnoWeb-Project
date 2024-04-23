function switchToAccessibilityMode() {
  // Fonction permettant de passer du style normal au style accessible et inversement

  console.log(window.localStorage);

  // On déclare 2 variables locales afin de stocker les 2 éléments link à modifier
  let vanilla_style = document.getElementById("stylesheet");
  let accessibility_style = document.getElementById("alternate_stylesheet");

  // Simple inversion de 2 variables
  if (window.localStorage.getItem("style") === "alternate stylesheet") {
    vanilla_style.rel = "stylesheet";
    accessibility_style.rel = "alternate stylesheet";
    window.localStorage.setItem("style", "stylesheet");
  } else {
    vanilla_style.rel = "alternate stylesheet";
    accessibility_style.rel = "stylesheet";
    window.localStorage.setItem("style", "alternate stylesheet");
  }
}

function loadStyleFromLocalStorage() {
  // Fonction permettant de charger le style stocké dans le localStorage (permettant de garder le style entre les pages)

  if (!window.localStorage.getItem("style"))
    window.localStorage.setItem("style", "stylesheet");

  if (window.localStorage.getItem("style") !== "stylesheet") {
    let vanilla_style = document.getElementById("stylesheet");
    let accessibility_style = document.getElementById("alternate_stylesheet");
    vanilla_style.rel = "alternate stylesheet";
    accessibility_style.rel = "stylesheet";
  }
}

function updateDateTime() {
  var now = new Date();
  var datetime = now.toLocaleString(); // Gets local date and time as a string
  document.getElementById("datetime").innerHTML = datetime;
  setTimeout(updateDateTime, 1000); // Update the time every second
}

document.addEventListener("DOMContentLoaded", updateDateTime); // Start the timer on page load

document.addEventListener("DOMContentLoaded", function () {
  var links = [
    "content/collection/norwegian_wood.html",
    "content/collection/kafka.html",
    "content/collection/1Q84.html",
    "content/collection/wind-Up.html",
    "content/collection/hard-Boiled.html",
    "content/collection/colorless.html",
  ];

  var randomLink = document.getElementById("randomLink");
  randomLink.addEventListener("click", function (e) {
    e.preventDefault(); // Empêche la navigation par défaut
    var randomUrl = links[Math.floor(Math.random() * links.length)]; // Sélectionne une URL au hasard
    window.location.href = randomUrl; // Redirige vers l'URL choisie
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const images = ["image/Murakami Portrait.jpeg", "image/Murakami Portrait 2.jpeg"];
  let index = 0; // Index de l'image actuelle

  const imageElement = document.getElementById("changeableImage");
  imageElement.addEventListener("click", function () {
    index = (index + 1) % images.length; // Incrémente l'index, revient à 0 si fin de liste
    imageElement.src = images[index]; // Change l'image
  });
});
