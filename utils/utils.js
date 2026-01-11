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
//renderCard function might need refactoring to incorporate addItem() function
//possible update idea: remove wrapper and method parameters, add "cardListGallery.setItem();" line to handleAddCardSubmit
//change "wrapper[method](cardElement.getCardView());" line to "wrapper.addItem(cardElement.getCardView());" ?? or something of that nature
function renderCard(data, wrapper) {
  const cardElement = createNewCard(data).getCardView();
  wrapper.addItem(cardElement);
  //const cardElement = createNewCard(data);
  //wrapper[method](cardElement.getCardView());

  /* method still needs to be universal to adding any cards and not
  specific to just the new places cards this can be done by:
  keeping WRAPPER and METHOD parameter then adding necassary arguments
  when necessary */
  //this code remains relevant to handle addCard dubmit
}

//EVENT HANDLERS
function handleProfileSubmit(inputValues) {
  //profileTitle.textContent = profileTitleInput.value;
  //profileDescription.textContent = profileDescriptionInput.value;
  //closeModal(profileEditModal);
  userInfo.setUserInfo({
    name: inputValues.name,
    description: inputValues.description,
  });
  editProfilePopup.close();
}
//needs refactoring to accept inputValues
function handleAddCardSubmit(inputValues) {
  //const name = addCardTitleInput.value;
  //const link = addCardLinkInput.value;
  renderCard(
    { name: inputValues.name, link: inputValues.link },
    cardsListSection
  );
  addCardPopup.close();
  //addCardForm.reset(); //this already happens with the close() method
  addCardFormValidator.resetValidation(); //move to addCardForm submit callback
}

function handleImagePreview(name, link) {
  imagePreviewPopup.open({ name, link });
  //imagePreviewModalImage.src = link;
  //imagePreviewModalImage.alt = name;
  //imagePreviewModalCaption.textContent = name;
  //openModal(imagePreviewModal);
}

export { renderCard, handleProfileSubmit, handleAddCardSubmit };
