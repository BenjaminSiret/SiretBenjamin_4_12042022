function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//*************DOM Elements****************
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const firstNameInput = document.querySelector("#first");

// Regex
const firstNameRegex = /^[A-Za-zÀ-ÿ-]{2,}$/i;

//***********FUNCTIONS************
function firstNameValidation() {
  if (!firstNameInput.value.match(firstNameRegex)) {
    firstNameInput.style.border = "solid 3px red";
    return false;
  } else {
    firstNameInput.style.border = "none";
    return true;
  }
}
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validate form
function validate() {
  // (1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
  // (2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :
  //     Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
  //     Les données doivent être saisies correctement :
  //     (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
  if (!firstNameValidation()) {
    alert("formulaire non valide");
  } else {
    alert("formulaire ok :)");
  }
  //     (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
  //     (3) L'adresse électronique est valide.
  //     (4) Pour le nombre de concours, une valeur numérique est saisie.
  //     (5) Un bouton radio est sélectionné.
  //     (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
  //     Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
}

//********** MODAL EVENTS**************

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

// validate first name
firstNameInput.addEventListener("change", firstNameValidation);
