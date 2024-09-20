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

const profileEditButton = document.querySelector(".profile__edit-button-js");
const profileEditModal = document.querySelector(".modal-edit-js");
const profileEditCloseButton = profileEditModal.querySelector(
  ".modal__close-button-js"
);
const profileTitle = document.querySelector(".profile__title-js");
const profileTitleInput = profileEditModal.querySelector(
  ".modal__input_type_profile-title-js"
); //class change ".modal__input_type_profile-title-js"
const profileDescription = document.querySelector(".profile__description-js");
const profileDescriptionInput = profileEditModal.querySelector(
  ".modal__input_type_profile-description-js"
); //class change ".modal__input_type_profile-description-js"
const profileEditForm = document.forms["profile-edit-form"];
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardList = document.querySelector(".gallery__cards-js");

function closeEditModal() {
  profileEditModal.classList.remove("modal_opened");
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__image-js");
  const cardElementTitle = cardElement.querySelector(".card__title-js");
  cardElementImage.src = data.link;
  cardElementImage.alt = data.name;
  cardElementTitle.textContent = data.name;
  return cardElement;
}

function handleProfileSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeEditModal();
}

profileEditButton.addEventListener("click", function () {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileEditCloseButton.addEventListener("click", closeEditModal);

profileEditForm.addEventListener("submit", handleProfileSubmit);

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardList.prepend(cardElement);
});
