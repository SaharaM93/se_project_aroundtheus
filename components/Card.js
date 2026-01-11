export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = document.querySelector(cardSelector);
    this._handleImageClick = handleImageClick;
  }

  _getCardTemplate() {
    this._element = this._cardSelector.content
      .querySelector(".card")
      .cloneNode(true);
    return this._element;
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

    this._element
      .querySelector(".card__image-js")
      .addEventListener("click", () => {
        this._handleImageClick(this._name, this._link);
      });
  }

  getCardView() {
    this._element = this._getCardTemplate();
    this._element.querySelector(".card__image-js").src = this._link;
    this._element.querySelector(".card__image-js").alt = this._name;
    this._element.querySelector(".card__title-js").textContent = this._name;
    this._setEventListeners();
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
