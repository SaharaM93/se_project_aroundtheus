import Popup from "./Popup.js";
class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this.popupForm = this._popup.querySelector("modal__form-js");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    super.close();
    //this.popupForm.reset();
  }
}
