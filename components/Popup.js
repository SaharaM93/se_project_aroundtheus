export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("modal_opened");
    document.addEventListener("keydown", () => {
      this._handleEscClose();
    });
  }
  /* The open() method should be called in the preexisting
  event handlers in index.js */

  close() {
    this._popup.classList.remove("modal_opened");
    document.removeEventListener("keydown", () => {
      this._handleEscClose();
    });
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this._popup.close();
    }
  }

  setEventListeners() {
    this._popup
      .querySelector(".modal__close-button-js")
      .addEventListener("click", () => {
        this.close();
      });

    this._popup.addEventListener("mousedown", () => {
      this.close();
    });
  }
}
