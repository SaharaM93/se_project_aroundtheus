export default class Card {
  constructor(data, cardSelector /*handleImageClick */) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    /*this._handleImageClick = handleImageClick; */
  }

  _getCardTemplate() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return this._cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__delete-button-js")
      .addEventListener("click", () => {
        this._handleDeleteButton();
      });

    this._element
      .querySelector(".card__like-button-js")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });
  }

  generateCard() {
    //grab template
    this._element = this._getCardTemplate();
    //add data
    this._element.querySelector(".card__image-js").src = this._link;
    this._element.querySelector(".card__image-js").alt = this._name;
    this._element.querySelector(".card__title-js").textContent = this._name;
    //set event listeners
    this._setEventListeners();
    //return the element
    return this._element;
  }

  _handleDeleteButton() {
    this._element.remove();
    this._element = null;
  }

  _handleLikeButton() {
    this._element
      .querySelector(".card__like-button-js")
      .classList.toggle("card__like-button_active");
  }
}
