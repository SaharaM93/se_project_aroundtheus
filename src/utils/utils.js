import {
  editProfilePopup,
  addCardPopup,
  addCardFormValidator,
  imagePreviewPopup,
  userInfo,
  cardsListSection,
} from "../pages/index.js";

import Card from "../components/Card.js";

function createNewCard(data) {
  const newCard = new Card(data, "#card-template", handleImagePreview);
  return newCard;
}

function renderCard(data, wrapper) {
  const cardElement = createNewCard(data).getCardView();
  wrapper.addItem(cardElement);
}

function handleProfileSubmit(inputValues) {
  userInfo.setUserInfo({
    name: inputValues.name,
    description: inputValues.description,
  });
  editProfilePopup.close();
}

function handleAddCardSubmit(inputValues) {
  renderCard(
    { name: inputValues.name, link: inputValues.link },
    cardsListSection
  );
  addCardPopup.close();
  addCardFormValidator.resetValidation();
}

function handleImagePreview(name, link) {
  imagePreviewPopup.open({ name, link });
}

export { renderCard, handleProfileSubmit, handleAddCardSubmit };
