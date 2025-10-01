export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    //updated the constructor to an object with name and link properties { name, link }
    //update where this class is called to reflect these changes
    this._name = name; //updated "data.name" to "name" after constructor fix
    this._link = link; //updated "data.link" to "link" after constructor fix
    this._cardSelector = cardSelector;
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
