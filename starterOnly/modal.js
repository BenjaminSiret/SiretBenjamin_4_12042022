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
const birthdateInput = document.querySelector("#birthdate");
const quantityInput = document.querySelector("#quantity");

// En fin de projet, envisager la possibilité de créer un array d'inputs pour itérer dessus afin de valider. Ou un objet JS avec les regex associées

// const inputs = [
//   firstNameInput,
//   lastNameInput,
//   emailInput,
//   birdthdateInput,
//   quantityInput,
// ];

//************ REGEX ****************
const nameRegex = /^[A-Za-zÀ-ÿ-]{2,}$/i;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const birthdateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
const quantityRegex = /^(0|[1-9][0-9]*)$/;

//***********ERRORS MESSAGES************
const firstNameErrorMsg =
  "Veuillez entrer au moins 2 caractères valides pour le champ prénom";

const lastNameErrorMsg =
  "Veuillez entrer au moins 2 caractères valides pour le champ nom";

const emailErrorMsg = "Veuillez saisir un email valide";

const birthdateErrorMsg = "Veuillez entrer une date de naissance valide";

const quantityErrorMsg = "Veuillez saisir une valeur numérique valide";

//***********ERRORS SPANS************
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const birthdateError = document.getElementById("birthdateError");
const quantityError = document.getElementById("quantityError");

//***********FUNCTIONS************
// launch modal function
function launchModal() {
  modalbg.style.display = "block";
}

// close modal function
function closeModal() {
  modalbg.style.display = "none";
}

// display error message function
function displayErrorMsg(validation, errorLocation, message) {
  if (!validation()) {
    errorLocation.innerHTML = message;
    errorLocation.style.backgroundColor = "red";
    errorLocation.style.fontSize = "16px";
  } else {
    errorLocation.innerHTML = "";
  }
}

function firstNameValidation() {
  if (!firstNameInput.value.match(nameRegex)) {
    return false;
  } else {
    return true;
  }
}
function lastNameValidation() {
  if (!lastNameInput.value.match(nameRegex)) {
    return false;
  } else {
    return true;
  }
}

function emailValidation() {
  if (!emailInput.value.match(emailRegex)) {
    return false;
  } else {
    return true;
  }
}

// TODO: gérer le fait qu'on peut encore passer à la case suivante sans entrer de birthdate ; regarder du côté de prevent default
function birthdateValidation() {
  if (
    birthdateInput.value == "" ||
    !birthdateInput.value.match(birthdateRegex)
  ) {
    return false;
  } else {
    return true;
  }
}

function quantityValidation() {
  if (!quantityInput.value.match(quantityRegex)) {
    return false;
  } else {
    return true;
  }
}
// validate form function
function validate() {
  // TODO ajouter la fonction displayErrorMsg pour tous les messages d'erreurs
  return (
    firstNameValidation() &&
    lastNameValidation() &&
    emailValidation() &&
    birthdateValidation() &&
    quantityValidation()
  );
  //     (4) Pour le nombre de concours, une valeur numérique est saisie.
  //     (5) Un bouton radio est sélectionné.
  //     (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
  //     Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
}

//********** EVENTS**************

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

// first name event
firstNameInput.addEventListener("change", () => {
  firstNameValidation,
    displayErrorMsg(firstNameValidation, firstNameError, firstNameErrorMsg);
});

// last name event
lastNameInput.addEventListener("change", () => {
  lastNameValidation,
    displayErrorMsg(lastNameValidation, lastNameError, lastNameErrorMsg);
});

// email event
emailInput.addEventListener("change", () => {
  emailValidation, displayErrorMsg(emailValidation, emailError, emailErrorMsg);
});

// birthdate event
birthdateInput.addEventListener("change", () => {
  birthdateValidation,
    displayErrorMsg(birthdateValidation, birthdateError, birthdateErrorMsg);
});

quantityInput.addEventListener("change", () => {
  quantityValidation,
    displayErrorMsg(quantityValidation, quantityError, quantityErrorMsg);
});
