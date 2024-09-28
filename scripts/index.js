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
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardList = document.querySelector(".gallery__cards-js");
const addCardButton = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector(".modal-add-card-js");
const addCardForm = document.forms["add-card-form"];
const addCardTitleInput = addCardModal.querySelector(
  ".modal__input_type_add-card-title-js"
);
const addCardLinkInput = addCardModal.querySelector(
  ".modal__input_type_add-card-link-js"
);
const imagePreviewModal = document.querySelector(".modal-image-preview-js");
const imagePreviewModalImage = imagePreviewModal.querySelector(".modal__image");
const imagePreviewModalCaption = imagePreviewModal.querySelector(
  ".modal__image-caption"
);
const modalCloseButtons = document.querySelectorAll(".modal__close-button-js");

//FUNCTIONS
function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__image-js");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const cardElementTitle = cardElement.querySelector(".card__title-js");
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardElementImage.addEventListener("click", () => {
    imagePreviewModalImage.src = data.link;
    imagePreviewModalImage.alt = data.name;
    imagePreviewModalCaption.textContent = data.name;
    openModal(imagePreviewModal);
  });

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });
  cardElementImage.src = data.link;
  cardElementImage.alt = data.name;
  cardElementTitle.textContent = data.name;
  return cardElement;
}

function renderCard(data, method = "prepend") {
  const cardElement = getCardElement(data);
  cardList[method](cardElement);
}

//EVENT HANDLERS
function handleProfileSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function handleAddCardSubmit(event) {
  event.preventDefault();
  const name = addCardTitleInput.value;
  const link = addCardLinkInput.value;
  renderCard({ name, link });
  closeModal(addCardModal);
  event.target.reset();
}

//EVENT LISTENERS
profileEditButton.addEventListener("click", () => {
  openModal(profileEditModal);
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
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
