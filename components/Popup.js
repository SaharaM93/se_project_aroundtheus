export default class Popup {
  constructor({ popupSelector }) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("modal_opened");
  }

  close() {
    //when you select the ".modal__close-button-js" this function will run
    this._popup.classList.remove("modal_opened");
  }

  _handleEscClose() {
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

    this._popup.addEventListener("click", () => {
      this.close();
    });

    //add _handleEscClose() to the even listeners??
  }
}
