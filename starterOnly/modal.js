//*************DOM Elements****************
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtns = document.querySelectorAll(".close");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInputs = document.getElementsByName("location");
const checkBox1 = document.getElementById("checkbox1");
const submitBtn = document.querySelector(".btn-submit");

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

const errorsMessages = [
  firstNameErrorMsg,
  lastNameErrorMsg,
  emailErrorMsg,
  birthdateErrorMsg,
  quantityErrorMsg,
  locationErrorMsg,
  checkBox1ErrorMsg,
];

//***********ERRORS LOCATIONS************
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const birthdateError = document.getElementById("birthdateError");
const quantityError = document.getElementById("quantityError");
const locationError = document.getElementById("locationError");
const checkBox1Error = document.getElementById("checkbox1Error");

const errorsLocations = [
  firstNameError,
  lastNameError,
  emailError,
  birthdateError,
  quantityError,
  locationError,
  checkBox1Error,
];

//***********VALIDATIONS**********
const validations = [
  firstNameValidation,
  lastNameValidation,
  emailValidation,
  birthdateValidation,
  quantityValidation,
  locationValidation,
  checkBox1Validation,
];

//***********FUNCTIONS************
// edit nav function
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
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

// display error message
function displayErrorMsg(validation, errorLocation, errorMessage) {
  if (!validation()) {
    errorLocation.innerHTML = errorMessage;
    errorLocation.style.color = "red";
    errorLocation.style.fontSize = "14px";
  } else {
    errorLocation.innerHTML = "";
  }
}

// display all errors messages
function displayErrors() {
  for (let i = 0; i < validations.length; i++) {
    displayErrorMsg(validations[i], errorsLocations[i], errorsMessages[i]);
  }
}

// validations functions
function firstNameValidation() {
  return nameRegex.test(firstNameInput.value);
}

function lastNameValidation() {
  return nameRegex.test(lastNameInput.value);
}

function emailValidation() {
  return emailRegex.test(emailInput.value);
}

function birthdateValidation() {
  return birthdateRegex.test(birthdateInput.value);
}

function quantityValidation() {
  return quantityRegex.test(quantityInput.value);
}

function locationValidation() {
  const locations = document.getElementsByName("location");
  let radioChecked = false;
  locations.forEach((location) => {
    if (location.checked) {
      radioChecked = true;
    }
  });
  return radioChecked;
}

function checkBox1Validation() {
  return checkBox1.checked;
}

// validate form function
function validate() {
  return (
    firstNameValidation() &&
    lastNameValidation() &&
    emailValidation() &&
    birthdateValidation() &&
    quantityValidation() &&
    locationValidation() &&
    checkBox1Validation()
  );
}

//********** EVENTS**************

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtns.forEach((btn) => btn.addEventListener("click", closeModal));

// first name event
firstNameInput.addEventListener("input", () => {
  displayErrorMsg(firstNameValidation, firstNameError, firstNameErrorMsg);
});

// last name event
lastNameInput.addEventListener("input", () => {
  displayErrorMsg(lastNameValidation, lastNameError, lastNameErrorMsg);
});

// email event
emailInput.addEventListener("input", () => {
  displayErrorMsg(emailValidation, emailError, emailErrorMsg);
});

// birthdate event
birthdateInput.addEventListener("input", () => {
  displayErrorMsg(birthdateValidation, birthdateError, birthdateErrorMsg);
});

// quantity event
quantityInput.addEventListener("input", () => {
  displayErrorMsg(quantityValidation, quantityError, quantityErrorMsg);
});

// location event
locationInputs.forEach((input) => {
  input.addEventListener("input", () => {
    displayErrorMsg(locationValidation, locationError, locationErrorMsg);
  });
});
// checkbox1 event
checkBox1.addEventListener("input", () => {
  displayErrorMsg(checkBox1Validation, checkBox1Error, checkBox1ErrorMsg);
});

// submit event
submitBtn.addEventListener("click", () => {
  if (validate()) {
    document.getElementById("myForm").reset();
    document.querySelector(
      ".modal-body"
    ).innerHTML = `<p>Merci pour votre inscription !</p></br><button class="btn-submit" id="validation-message">Fermer</button>`;
    document
      .getElementById("validation-message")
      .addEventListener("click", () => {
        closeModal;
        location.reload();
      });
  }
  displayErrors();
});
