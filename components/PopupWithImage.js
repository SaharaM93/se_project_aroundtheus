import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(".modal__image-js");
  }

  open(cardData) {
    this._popupImage.src = cardData.link;
    this._popupImage.alt = cardData.name;
    this._popup.querySelector(".modal__image-caption-js").textContent =
      cardData.name;
    super.open();
  }
}
