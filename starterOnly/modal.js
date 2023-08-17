function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// **************************************fermeture du formulaire**************************************

document.addEventListener("DOMContentLoaded", function () {
  const closeInscription = document.querySelector(".close");
  const formBackground = document.querySelector(".bground");
  const closeModal = document.getElementById("submit-close");

  closeInscription.addEventListener("click", function () {
    formBackground.style.display = "none";
  });

  closeModal.addEventListener("click", () => {
    formBackground.style.display = "none";
  });
});

// ***************************************Alertes formulaire*******************************************
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // *******************message erreur prénom********************

  let input1 = document.getElementById("first");
  let firstValue = input1.value.trim();
  let errorMessage1 = document.getElementById("errorMessage1");

  if (firstValue.length >= 2) {
    errorMessage1.textContent = "";
  } else {
    errorMessage1.textContent = "Veuillez entrer au moins 2 caractères.";
  }

  // *********************message erreur Nom*********************
  let input2 = document.getElementById("last");
  let lastValue = input2.value.trim();
  let errorMessage2 = document.getElementById("errorMessage2");

  if (lastValue.length >= 2) {
    errorMessage2.textContent = "";
  } else {
    errorMessage2.textContent = "Veuillez entrer au moins 2 caractères.";
  }

  // *******************message erreur email*********************
  let email = document.getElementById("email");
  let emailValue = email.value.trim();
  let errorEmailMessage = document.getElementById("errorEmailMessage");

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    errorEmailMessage.textContent = "";
  } else {
    errorEmailMessage.textContent =
      "Veuillez entrer une adresse e-mail valide.";
  }

  // ******************message erreur date***********************
  let birthDate = document.getElementById("birthdate");
  let requiredDateValue = birthDate.value;
  let errorDateMessage = document.getElementById("errorDateMessage");

  if (requiredDateValue) {
    errorDateMessage.textContent = "";
  } else {
    errorDateMessage.textContent = "Veuillez sélectionner une date.";
  }

  // **************message erreur nbr tournois******************
  let requiredInput = document.getElementById("quantity");
  let requiredInputValue = requiredInput.value.trim();
  let errorRequiredQuantity = document.getElementById("errorRequiredQuantity");

  if (requiredInputValue.length > 0) {
    errorRequiredQuantity.textContent = "";
  } else {
    errorRequiredQuantity.textContent = "Ce champ est obligatoire.";
  }

  // ******message erreur pour non selection bouton radio*******
  let errorOptionMessage = document.getElementById("errorOptionMessage");
  const selectedOption = document.querySelector(
    'input[name="location"]:checked'
  );

  if (selectedOption) {
    errorOptionMessage.textContent = "";
  } else {
    errorOptionMessage.textContent = "Veuillez sélectionner une option.";
  }

  // **********message errur si condition non checked**********

  let requiredCheckbox = document.getElementById("checkbox1");
  let errorCheckboxMessage = document.getElementById("errorCheckboxMessage");

  if (requiredCheckbox.checked) {
    errorCheckboxMessage.textContent = "";
  } else {
    errorCheckboxMessage.textContent =
      "Vous devez accepter les termes et conditions.";
  }

  // ****** Affichage du remerciement **********
  let isValid =
    errorCheckboxMessage.textContent ||
    errorRequiredQuantity.textContent ||
    errorOptionMessage.textContent ||
    errorEmailMessage.textContent ||
    errorDateMessage.textContent ||
    errorMessage2.textContent ||
    errorMessage1.textContent; // Mettez ici la condition de validation

  if (isValid === "") {
    let finishing = document.getElementById("modal-finish");
    let modal = document.querySelector("form");
    finishing.style.display = "flex";
    modal.style.display = "none";
  }
});
