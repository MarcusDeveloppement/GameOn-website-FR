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

// **************************************************************************** fermeture du formulaire ***********************************************************

document.addEventListener("DOMContentLoaded", function () {
  const closeInscription = document.querySelector(".close");
  const formBackground = document.querySelector(".bground");
  const closeModal = document.getElementById("submit-close");

  closeInscription.addEventListener("click", function () {
    formBackground.style.display = "none";
  });

  // ****************** fenetre de remerciement ******************

  closeModal.addEventListener("click", () => {
    formBackground.style.display = "none";
    window.location.reload();
  });
});

// ******************************************************************************* Alertes du formulaire *********************************************************************
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // ******************* message erreur prénom ********************

  const input1 = document.getElementById("first");
  const firstValue = input1.value.trim();
  const errorMessage1 = document.getElementById("errorMessage1");

  if (firstValue.length >= 2) {
    errorMessage1.textContent = "";
  } else {
    errorMessage1.textContent = "Veuillez entrer au moins 2 caractères.";
  }

  // ********************* message erreur Nom *********************
  const input2 = document.getElementById("last");
  const lastValue = input2.value.trim();
  const errorMessage2 = document.getElementById("errorMessage2");

  if (lastValue.length >= 2) {
    errorMessage2.textContent = "";
  } else {
    errorMessage2.textContent = "Veuillez entrer au moins 2 caractères.";
  }

  // ******************* message erreur email *********************
  const email = document.getElementById("email");
  const emailValue = email.value.trim();
  const errorEmailMessage = document.getElementById("errorEmailMessage");

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    errorEmailMessage.textContent = "";
  } else {
    errorEmailMessage.textContent =
      "Veuillez entrer une adresse e-mail valide.";
  }

  // ****************** message erreur date ***********************
  const birthDate = document.getElementById("birthdate");
  const requiredDateValue = birthDate.value;
  const errorDateMessage = document.getElementById("errorDateMessage");

  if (requiredDateValue) {
    errorDateMessage.textContent = "";
  } else {
    errorDateMessage.textContent = "Veuillez sélectionner une date.";
  }

  // ************** message erreur nbr tournois ******************
  const requiredInput = document.getElementById("quantity");
  const requiredInputValue = requiredInput.value.trim();
  const errorRequiredQuantity = document.getElementById(
    "errorRequiredQuantity"
  );

  if (requiredInputValue.length > 0) {
    errorRequiredQuantity.textContent = "";
  } else {
    errorRequiredQuantity.textContent = "Ce champ est obligatoire.";
  }

  // ****** message erreur pour non selection bouton radio *******
  const errorOptionMessage = document.getElementById("errorOptionMessage");
  const selectedOption = document.querySelector(
    'input[name="location"]:checked'
  );

  if (selectedOption) {
    errorOptionMessage.textContent = "";
  } else {
    errorOptionMessage.textContent = "Veuillez sélectionner une option.";
  }

  // ********* message erreur si condition non checked ***********

  const requiredCheckbox = document.getElementById("checkbox1");
  const errorCheckboxMessage = document.getElementById("errorCheckboxMessage");

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
    errorMessage1.textContent;

  if (isValid === "") {
    const finishing = document.getElementById("modal-finish");
    const modal = document.querySelector("form");
    finishing.style.display = "flex";
    modal.style.display = "none";
  }
});
