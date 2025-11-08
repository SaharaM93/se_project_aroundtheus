import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js"; //new Class import
import PopupWithForm from "../components/PopupWithForm.js"; //new Class import

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

//ELEMENTS
const profileEditButton = document.querySelector(".profile__edit-button-js");
const profileEditModal = document.querySelector(".modal-edit-js");
const profileTitle = document.querySelector(".profile__title-js");
const profileTitleInput = profileEditModal.querySelector(
  ".modal__input_type_profile-title-js"
);
const profileDescription = document.querySelector(".profile__description-js");
const profileDescriptionInput = profileEditModal.querySelector(
  ".modal__input_type_profile-description-js"
);
const profileEditForm = document.forms["profile-edit-form"];
const cardTemplate = document.querySelector("#card-template");
const cardListGallery = document.querySelector(".gallery__cards-js");
const addCardButton = document.querySelector(".profile__add-button-js");
const addCardModal = document.querySelector(".modal-add-card-js");
const addCardForm = document.forms["add-card-form"];
const addCardTitleInput = addCardModal.querySelector(
  ".modal__input_type_add-card-title-js"
);
const addCardLinkInput = addCardModal.querySelector(
  ".modal__input_type_add-card-link-js"
);
const imagePreviewModal = document.querySelector(".modal-image-preview-js");
const imagePreviewModalImage =
  imagePreviewModal.querySelector(".modal__image-js");
const imagePreviewModalCaption = imagePreviewModal.querySelector(
  ".modal__image-caption-js"
);
const modalCloseButtons = document.querySelectorAll(".modal__close-button-js");
const modals = document.querySelectorAll(".modal-js");

const formValidationSettings = {
  inputSelector: ".modal__input-js",
  submitButtonSelector: ".modal__submit-button-js",
  inactiveButtonClass: "modal__submit-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const profileEditFormValidator = new FormValidator(
  formValidationSettings,
  profileEditForm
);
profileEditFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(
  formValidationSettings,
  addCardForm
);
addCardFormValidator.enableValidation();

//cardsListSection SECTION IN PROGRESS
const cardsListSection = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      const card = new Card(cardItem, cardTemplate, handleImagePreview);

      const cardElement = card.getCardView();
      cardsListSection.addItem(cardElement);
    },
  },
  ".gallery__cards-js"
);

const addCardPopup = new PopupWithForm(".modal-add-card-js", (formData) => {
  const newCard = new Card(formData, cardTemplate, handleImagePreview);

  const newCardElement = newCard.getCardView();
  cardsListSection.addItem(newCardElement);
});
addCardPopup.setEventListeners();

//FUNCTIONS
//no longer needed as the function is being established in the Popup class
function openModal(modal) {
  modal.classList.add("modal_opened");
  modal.addEventListener("mousedown", handleCloseModalByClickOverlay);
  document.addEventListener("keydown", handleCloseModalByEsc);
}

//no longer needed as the function is being established in the Popup class
function closeModal(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("mousedown", handleCloseModalByClickOverlay);
  document.removeEventListener("keydown", handleCloseModalByEsc);
}

function createNewCard(data) {
  const newCard = new Card(data, cardTemplate, handleImagePreview);
  return newCard;
}
//renderCard function might need refactoring to incorporate addItem() function
//possible update idea: remove wrapper and method parameters, add "cardListGallery.setItem();" line to handleAddCardSubmit
//change "wrapper[method](cardElement.getCardView());" line to "wrapper.addItem(cardElement.getCardView());" ?? or something of that nature
function renderCard(data, wrapper, method = "prepend") {
  const cardElement = createNewCard(data);
  wrapper[method](cardElement.getCardView());
}

//EVENT HANDLERS
function handleProfileSubmit() {
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
  //change to profileEditModal.close(); ??
}

function handleAddCardSubmit() {
  const name = addCardTitleInput.value;
  const link = addCardLinkInput.value;
  renderCard({ name, link }, cardListGallery);
  closeModal(addCardModal);
  //change to addCardPopup.close(); ??
  addCardForm.reset();
  addCardFormValidator.resetValidation(); //move to addCardForm submit callback
}

function handleImagePreview(name, link) {
  imagePreviewModalImage.src = link;
  imagePreviewModalImage.alt = name;
  imagePreviewModalCaption.textContent = name;
  openModal(imagePreviewModal);
}
//this function is no longer necessary, method is established in Popup class
function handleCloseModalByEsc(evt) {
  if (evt.key === "Escape") {
    modals.forEach(closeModal);
  }
}

//this function is no longer necessary, method is established in Popup class
function handleCloseModalByClickOverlay(evt) {
  modals.forEach((modal) => {
    if (evt.target === modal) {
      closeModal(modal);
    }
  });
}

//EVENT LISTENERS
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
  profileEditFormValidator.resetValidation();
});
profileEditForm.addEventListener("submit", handleProfileSubmit);
addCardForm.addEventListener("submit", handleAddCardSubmit);
addCardButton.addEventListener("click", () => {
  openModal(addCardModal);
});
/*no longer needed as the modals closing is controlled by the Popup
class event listeners */
modalCloseButtons.forEach((button) => {
  const modal = button.closest(".modal-js");
  button.addEventListener("click", () => closeModal(modal));
});

// INITIAL CARDS LAYOUT
// initialCards.forEach((data) => renderCard(data, cardListGallery));

//REFACTORED INITAL CARDS LAYOUT
cardsListSection.renderItems();
