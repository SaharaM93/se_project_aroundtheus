export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = document.querySelector(cardSelector);
    this._handleImageClick = handleImageClick;
  }

  _getCardTemplate() {
    this._cardElement = this._cardSelector.content
      .querySelector(".card")
      .cloneNode(true);
    return this._cardElement;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__delete-button-js")
      .addEventListener("click", () => {
        this._handleDeleteButton();
      });

    this._cardElement
      .querySelector(".card__like-button-js")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });

    this._cardElement
      .querySelector(".card__image-js")
      .addEventListener("click", () => {
        this._handleImageClick(this._name, this._link);
      });
  }

  getCardView() {
    this._cardElement = this._getCardTemplate();
    this._cardElement.querySelector(".card__image-js").src = this._link;
    this._cardElement.querySelector(".card__image-js").alt = this._name;
    this._cardElement.querySelector(".card__title-js").textContent = this._name;
    this._setEventListeners();
    return this._cardElement;
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".card__like-button-js")
      .classList.toggle("card__like-button_active");
  }
}
