export default class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
  }

  _showInputError(inputElement) {
    const inputError = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    inputError.classList.add(this._errorClass);
    inputError.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    const inputError = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    inputError.classList.remove(this._errorClass);
    inputError.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      _showInputError(inputElement);
    } else {
      _hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //reset validation is public method
  resetValidation() {
    this._inputElements.forEach((inputElement) => {
      _hideInputError(inputElement);
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput) {
      this._formSubmitButton.classList.add(this._inactiveButtonClass);
      this._formSubmitButton.disabled = true;
    } else {
      this._formSubmitButton.classList.remove(this._inactiveButtonClass);
      this._formSubmitButton.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputElements = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._formSubmitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );

    this._toggleButtonState(inputElement);

    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputElement);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners(); //double check these arguments
  }
}

//double check all the parameters and arguments that include "settings" and an element as we have access to these already in the constructor
//remove all unnecessary arguments and parameters before project submission

//This object belongs in index.js, doesn't need to be exported
const formClassSelectors = {
  formSelector: ".modal__form-js",
  inputSelector: ".modal__input-js",
  submitButtonSelector: ".modal__submit-button-js",
  inactiveButtonClass: "modal__submit-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

//to be implemented in index.js
/* const profileEditFormValidator = new FormValidator(
  formClassSelectors,
  profileEditForm
);
profileEditFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(formClassSelectors, addCardForm);
addCardFormValidator.enableValidation(); */
