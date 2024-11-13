const formClassSelectors = {
  formSelector: ".modal__form-js",
  inputSelector: ".modal__input-js",
  submitButtonSelector: ".modal__submit-button-js",
  inactiveButtonClass: "modal__submit-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

function showInputError(formElement, inputElement, classSelectors) {
  const inputError = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(classSelectors.inputErrorClass);
  inputError.classList.add(classSelectors.errorClass);
  inputError.textContent = inputElement.validationMessage;
}

function hideInputError(formElement, inputElement, classSelectors) {
  const inputError = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(classSelectors.inputErrorClass);
  inputError.classList.remove(classSelectors.errorClass);
  inputError.textContent = "";
}

function checkInputValidity(formElement, inputElement, classSelectors) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, classSelectors);
  } else {
    hideInputError(formElement, inputElement, classSelectors);
  }
}

function hasInvalidInput(inputElements) {
  return inputElements.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function resetValidation(formElement, inputElements, classSelectors) {
  inputElements.forEach((inputElement) => {
    hideInputError(formElement, inputElement, classSelectors);
  });
}

function toggleButtonState(inputElements, formSubmitButton, classSelectors) {
  if (hasInvalidInput(inputElements)) {
    formSubmitButton.classList.add(classSelectors.inactiveButtonClass);
    formSubmitButton.disabled = true;
  } else {
    formSubmitButton.classList.remove(classSelectors.inactiveButtonClass);
    formSubmitButton.disabled = false;
  }
}

function setEventListeners(formElement, classSelectors) {
  const inputElements = Array.from(
    formElement.querySelectorAll(classSelectors.inputSelector)
  );
  const formSubmitButton = formElement.querySelector(
    classSelectors.submitButtonSelector
  );

  toggleButtonState(inputElements, formSubmitButton, classSelectors);

  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, classSelectors);
      toggleButtonState(inputElements, formSubmitButton, classSelectors);
    });
  });
}

function enableValidation(classSelectors) {
  const formElements = Array.from(
    document.querySelectorAll(classSelectors.formSelector)
  );

  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, classSelectors);
  });
}

enableValidation(formClassSelectors);
