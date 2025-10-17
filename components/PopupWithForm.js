import Popup from "./Popup.js";
class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popup.querySelector("modal__form-js");
    this._handleFormSubmit = handleFormSubmit;
  }

  /* It has a private method named _getInputValues(),
  which collects data from all the input fields and returns it as
  an object. This data should then be passed to the submission handler
  as an argument. */

  _getInputValues() {}

  /* It overrides the setEventListeners() parent method.
  The setEventListeners() method of the PopupWithForm class should add
  a submit event listener to the form and call the setEventListeners()
  method of the parent class. */

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._popupForm.reset();
    });
  }

  close() {
    super.close();
    //this._popupForm.reset();
  }
}
