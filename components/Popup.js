export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    /* refer to the setEventListeners "consider this" use this as
    this._poppupCloseButton = this._popup.querySelector(".modal__close-button-js");
     */
  }

  open() {
    this._popup.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
    //issue with binding the event listener
  }
  /* The open() method should be called in the preexisting
  event handlers in index.js */

  close() {
    this._popup.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
      //produces error --> this._popup.close();
    }
  };

  setEventListeners() {
    this._popup
      .querySelector(".modal__close-button-js")
      .addEventListener("click", () => {
        this.close();
      });

    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target === this._popup) {
        this.close();
      }
    });
  }

  /* consider this
  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target === this._popup || evt.target === this._popupCloseButton) {
        this.close();
      }
    });
  } */
}
