import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector(".modal__form-js");
    this._handleFormSubmit = handleFormSubmit;
  }

  //change value of form input name attribute from "title" to "name"
  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".modal__input-js");

    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close(); //move to public handler ??
    });
  }

  close() {
    this._popupForm.reset();
    super.close();
    //referring to video to understand the necessity to override
    //this._popupForm.reset(); ??? i dont think this is necessary
  }

  /* The PopupWithForm should be a child of Popup, and it should comply
  with the following requirements:

It accepts two arguments: the popup selector and a callback function,
which PopupWithForm calls when the form’s submit event fires.

It has a private method named _getInputValues(), which collects data
from all the input fields and returns it as an object. This data should
 then be passed to the submission handler as an argument.

It overrides the setEventListeners() parent method. The
setEventListeners() method of the PopupWithForm class should add a
submit event listener to the form and call the setEventListeners() method
 of the parent class.

Create an instance of the PopupWithForm class for each popup that
contains a form, and call their setEventListeners() method.

(add card and edit profile popup)
*/
}
