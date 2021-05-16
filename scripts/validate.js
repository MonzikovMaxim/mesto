// Вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, formInput, errorMessage) => {
  const { inputErrorClass,  errorClass } = config;
  const errorElement = formElement.querySelector(`#${formInput.id}-error`); // Выбираем элемент ошибки на основе уникального класса
  formInput.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;  // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.classList.add(errorClass);    // Показываем сообщение об ошибке
}

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, formInput) => {
  const { inputErrorClass,  errorClass } = config;
  const errorElement = formElement.querySelector(`#${formInput.id}-error`); // Выбираем элемент ошибки на основе уникального класса
  formInput.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';  // Очистим ошибку
};

const hasInvalidInput = (inputList) => {
  return inputList.some(formInput => !formInput.validity.valid); 
}

const isValid = (formElement, formInput, config) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage, config);
  } else {
    hideInputError(formElement, formInput, config);
  }
};

const toggleButtonState = (buttonElement, inputList) => {
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
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(buttonElement, inputList);
  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      isValid(formElement, formInput, restConfig);
      toggleButtonState(buttonElement, inputList);
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

formInput.addEventListener('input', function () {
  isValid(formElement, formInput);
})
