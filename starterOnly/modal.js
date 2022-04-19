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
const locationInputs = document.getElementsByName("location");
const checkBox1 = document.getElementById("checkbox1");

//************ REGEX ****************
const nameRegex = /^[A-Za-zÀ-ÿ-]{2,}$/i;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
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

const locationErrorMsg = "Veuillez sélectionner une ville";

const checkBox1ErrorMsg = "Veuillez accepter les conditions générales";

//***********ERRORS SPANS************
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const birthdateError = document.getElementById("birthdateError");
const quantityError = document.getElementById("quantityError");
const locationError = document.getElementById("locationError");
const checkBox1Error = document.getElementById("checkbox1Error");

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
function displayErrorMsg(validation, errorLocation, errorMessage) {
  if (!validation()) {
    errorLocation.innerHTML = errorMessage;
    errorLocation.style.backgroundColor = "red";
    errorLocation.style.fontSize = "16px";
  } else {
    errorLocation.innerHTML = "";
  }
}

function firstNameValidation() {
  return nameRegex.test(firstNameInput.value);
}

function lastNameValidation() {
  return nameRegex.test(lastNameInput.value);
}

function emailValidation() {
  return emailRegex.test(emailInput.value);
}

// TODO: gérer le fait qu'on peut encore passer à la case suivante sans entrer de birthdate ; regarder du côté de prevent default
function birthdateValidation() {
  return birthdateRegex.test(birthdateInput.value);
}

function quantityValidation() {
  return quantityRegex.test(quantityInput.value);
}

function locationValidation() {
  const locations = document.getElementsByName("location");
  let radioChecked = false;
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      radioChecked = true;
    }
  }
  return radioChecked;
}

function checkBox1Validation() {
  return checkBox1.checked;
}

// validate form function
function validate() {
  if (!firstNameValidation()) {
    console.log("first");
    displayErrorMsg(firstNameValidation, firstNameError, firstNameErrorMsg);
    return false;
  } else if (!lastNameValidation()) {
    console.log("last");
    displayErrorMsg(lastNameValidation, lastNameError, lastNameErrorMsg);
    return false;
  } else if (!emailValidation()) {
    console.log("email");
    displayErrorMsg(emailValidation, emailError, emailErrorMsg);
    return false;
  } else if (!birthdateValidation()) {
    console.log("anniv");
    displayErrorMsg(birthdateValidation, birthdateError, birthdateErrorMsg);
    return false;
  } else if (!quantityValidation()) {
    console.log("quantity");
    displayErrorMsg(quantityValidation, quantityError, quantityErrorMsg);
    return false;
  } else if (!locationValidation()) {
    console.log("location");
    displayErrorMsg(locationValidation, locationError, locationErrorMsg);
    return false;
  } else if (!checkBox1Validation()) {
    console.log("checkbox");
    displayErrorMsg(checkBox1Validation, checkBox1Error, checkBox1ErrorMsg);
    return false;
  } else {
    return true;
  }

  // TODO => Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
}

//********** EVENTS**************

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

// first name event
firstNameInput.addEventListener("change", () => {
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

// quantity event
quantityInput.addEventListener("change", () => {
  quantityValidation,
    displayErrorMsg(quantityValidation, quantityError, quantityErrorMsg);
});

// location => compléter le display du message d'erreur
locationInputs.forEach((input) => {
  input.addEventListener("change", () => {
    displayErrorMsg(locationValidation, locationError, locationErrorMsg);
  });
});
// checkbox1
checkBox1.addEventListener("change", () => {
  checkBox1Validation,
    displayErrorMsg(checkBox1Validation, checkBox1Error, checkBox1ErrorMsg);
});

//**************TEST*****************/
