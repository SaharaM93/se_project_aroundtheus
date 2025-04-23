export default class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
  }
  //reset validation is public method
  _checkInputValidity(formElement, inputElement, classSelectors) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, classSelectors);
    } else {
      hideInputError(formElement, inputElement, classSelectors);
    }
  }

  _hasInvalidInput() {
    return this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputElements, formSubmitButton, classSelectors) {
    if (hasInvalidInput(this._inputElements)) {
      this._formSubmitButton.classList.add(this._inactiveButtonClass);
      this._formSubmitButton.disabled = true;
    } else {
      this._formSubmitButton.classList.remove(this._inactiveButtonClass);
      this._formSubmitButton.disabled = false;
    }
  }

  _setEventListeners(formElement, classSelectors) {
    this._inputElements = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._formSubmitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );

    toggleButtonState(
      this._inputElements,
      this._formSubmitButton,
      classSelectors
    );

    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(this._formElement, inputElement, classSelectors);
        toggleButtonState(
          this._inputElements,
          this._formSubmitButton,
          classSelectors
        );
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, settings); //double check these arguments
  }
}

//double check all the parameters and arguments that include "settings" and an element as we have access to these already in the constructor
//remove all unnecessary arguments and parameters before project submission

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
