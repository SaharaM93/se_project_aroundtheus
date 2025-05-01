export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _getCardTemplate() {
    //changed from this._cardElement to this._element, consider changing it back before submission
    this._element = this._cardSelector.content
      .querySelector(".card")
      .cloneNode(true);
    //changed from this._cardElement to this._element
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

  //consider renaming to getCardView to avoid confusion
  generateCard() {
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
    console.log(this._element); //testing
  }
}
