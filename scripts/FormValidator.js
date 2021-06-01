// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const { inputErrorClass,  errorClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); // Выбираем элемент ошибки на основе уникального класса
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;  // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.classList.add(errorClass);    // Показываем сообщение об ошибке
}

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const { inputErrorClass,  errorClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); // Выбираем элемент ошибки на основе уникального класса
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';  // Очистим ошибку
};

const hasInvalidInput = (inputList) => { 
  return inputList.some((inputElement) => {
   return !inputElement.validity.valid;
  });
};

const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

function toggleButtonState(inputList, buttonElement) {
  const { inactiveButtonClass } = config;
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, config) => {
  const { inputSelector, submitButtonSelector, ...restConfig } = config;
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, restConfig);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (config) => {
  const { formSelector, ...restConfig } = config;
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, restConfig);
  });
};

const config = { 
  formSelector: '.popup__form', 
  inputSelector: '.popup__input', 
  submitButtonSelector: '.popup__save-button', 
  inactiveButtonClass: 'popup__save-button_disabled', 
  inputErrorClass: 'popup__form_type_error', 
  errorClass: 'popup__input-error_active' 
} 
 
enableValidation(config);