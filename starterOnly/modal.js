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
const lastNameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");

// Regex
const nameRegex = /^[A-Za-zÀ-ÿ-]{2,}$/i;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

//***********FUNCTIONS************

function firstNameValidation() {
  if (!firstNameInput.value.match(nameRegex)) {
    firstNameInput.style.border = "solid 3px red";
    alert("Veuillez entrer au moins 2 caractères valides pour ce champ");
    return false;
  } else {
    firstNameInput.style.border = "none";
    return true;
  }
}

function lastNameValidation() {
  if (!lastNameInput.value.match(nameRegex)) {
    lastNameInput.style.border = "solid 3px red";
    alert("Veuillez entrer au moins 2 caractères valides pour ce champ");
    return false;
  } else {
    return true;
  }
}

function emailValidation() {
  if (!emailInput.value.match(emailRegex)) {
    emailInput.style.border = "solid 3px red";
    alert("Veuillez entrer une adresse email valide");
    return false;
  } else {
    return true;
  }
}

// launch modal function
function launchModal() {
  modalbg.style.display = "block";
}

// close modal function
function closeModal() {
  modalbg.style.display = "none";
}

// validate form function
function validate() {
  // (1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
  // (2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :
  //     Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
  //     Les données doivent être saisies correctement :
  //     (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
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

// validate last name
lastNameInput.addEventListener("change", lastNameValidation);

// validate email
emailInput.addEventListener("change", emailValidation);
