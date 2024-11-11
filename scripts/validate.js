const formClassSelectors = {
  formSelector: ".modal__form-js",
  inputSelector: ".modal__input-js",
  submitButtonSelector: ".modal__submit-button-js",
  inactiveButtonClass: ".modal__submit-button_disabled",
  inputErrorClass: ".modal__input_type_error",
  errorClass: ".modal__error_visible",
};

function enableValidation(classSelectors) {
  console.log(classSelectors);
}

enableValidation(formClassSelectors);
