import Card from "../components/Card.js";
// import FormValidator from "../components/FormValidator.js";

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
const cardList = document.querySelector(".gallery__cards-js");
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

//FUNCTIONS
function openModal(modal) {
  modal.classList.add("modal_opened");
  modal.addEventListener("mousedown", handleCloseModalByClickOverlay);
  document.addEventListener("keydown", handleCloseModalByEsc);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("mousedown", handleCloseModalByClickOverlay);
  document.removeEventListener("keydown", handleCloseModalByEsc);
}

//create card function to generate a card before adding it to the wrapper
/* function createNewCard(data) {
  const newCard = new Card(data, cardTemplate, handleImagePreview);
  return newCard.generateCard();
} */

function renderCard(data, /*wrapper*/ method = "prepend") {
  //implementing createNewCardFunction
  //const cardElement = createNewCard(data);
  //wrapper[method](cardElement.generatecard());
  const cardElement = new Card(data, cardTemplate, handleImagePreview);
  cardList[method](cardElement.generateCard());
}

//EVENT HANDLERS
function handleProfileSubmit() {
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function handleAddCardSubmit(event) {
  const name = addCardTitleInput.value;
  const link = addCardLinkInput.value;
  renderCard({ name, link });
  closeModal(addCardModal);
  event.target.reset();
}
//handler has been updated, refer to original for changes implemented
function handleImagePreview(name, link) {
  imagePreviewModalImage.src = link;
  imagePreviewModalImage.alt = name;
  imagePreviewModalCaption.textContent = name;
  openModal(imagePreviewModal);
}

//original
/* function handleImagePreview(data) {
  imagePreviewModalImage.src = data.link;
  imagePreviewModalImage.alt = data.name;
  imagePreviewModalCaption.textContent = data.name;
  openModal(imagePreviewModal);
}
 */
function handleCloseModalByEsc(evt) {
  if (evt.key === "Escape") {
    modals.forEach(closeModal);
  }
}

function handleCloseModalByClickOverlay(evt) {
  modals.forEach((modal) => {
    if (evt.target === modal) {
      closeModal(modal);
    }
  });
}

//EVENT LISTENERS
profileEditButton.addEventListener("click", () => {
  openModal(profileEditModal);
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  //reset validation is public method
  resetValidation(
    profileEditForm,
    [profileTitleInput, profileDescriptionInput],
    formClassSelectors
  );
});
profileEditForm.addEventListener("submit", handleProfileSubmit);
addCardForm.addEventListener("submit", handleAddCardSubmit);
addCardButton.addEventListener("click", () => openModal(addCardModal));

modalCloseButtons.forEach((button) => {
  const modal = button.closest(".modal-js");
  button.addEventListener("click", () => closeModal(modal));
});

// INITIAL CARDS LAYOUT
initialCards.forEach((data) => renderCard(data));
