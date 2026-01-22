const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const formValidationSettings = {
  inputSelector: ".modal__input-js",
  submitButtonSelector: ".modal__submit-button-js",
  inactiveButtonClass: "modal__submit-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const profileEditButton = document.querySelector(".profile__edit-button-js");
const addCardButton = document.querySelector(".profile__add-button-js");
const profileTitleInput = document.querySelector(
  ".modal__input_type_profile-title-js"
);
const profileDescriptionInput = document.querySelector(
  ".modal__input_type_profile-description-js"
);
const profileEditForm = document.forms["profile-edit-form"];
const addCardForm = document.forms["add-card-form"]; //in use

export {
  initialCards,
  formValidationSettings,
  profileEditButton,
  addCardButton,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  addCardForm,
};
