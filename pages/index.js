import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {
  initialCards,
  formValidationSettings,
  profileEditButton,
  addCardButton,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  addCardForm,
} from "../utils/constants.js";

import {
  renderCard,
  handleProfileSubmit,
  handleAddCardSubmit,
} from "../utils/utils.js";

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

const cardsListSection = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      renderCard(cardItem, cardsListSection);
    },
  },
  ".gallery__cards-js"
);

const addCardPopup = new PopupWithForm(
  ".modal-add-card-js",
  handleAddCardSubmit
);

addCardPopup.setEventListeners();

const imagePreviewPopup = new PopupWithImage(".modal-image-preview-js");

imagePreviewPopup.setEventListeners();

const editProfilePopup = new PopupWithForm(
  ".modal-edit-js",
  handleProfileSubmit
);

editProfilePopup.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__title-js",
  descriptionSelector: ".profile__description-js",
});

//EVENT LISTENERS
profileEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  profileTitleInput.value = userData.name;
  profileDescriptionInput.value = userData.description;
  editProfilePopup.open();
  profileEditFormValidator.resetValidation();
});

addCardButton.addEventListener("click", () => {
  addCardPopup.open();
});

//REFACTORED INITAL CARDS LAYOUT
cardsListSection.renderItems();

export {
  editProfilePopup,
  addCardPopup,
  addCardFormValidator,
  imagePreviewPopup,
  userInfo,
  cardsListSection,
};
