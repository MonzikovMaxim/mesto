class FormValidator {
  constructor(config, formElement) {
    this._formElement = formElement;
    this._formSelector = config.formSelector;
    this._inputSelector =  config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  _showInputError(formInput) { 
    const errorElement = this._formElement.querySelector(`#${formInput.id}-error`); // Выбираем элемент ошибки на основе уникального класса 
    formInput.classList.add(this._inputErrorClass); 
    errorElement.textContent = formInput.validationMessage;  // Заменим содержимое span с ошибкой на переданный параметр 
    errorElement.classList.add(this._errorClass); // Показываем сообщение об ошибке 
  }

  _hideInputError(formInput) {  
    const errorElement = this._formElement.querySelector(`#${formInput.id}-error`); // Выбираем элемент ошибки на основе уникального класса 
    formInput.classList.remove(this._inputErrorClass); 
    errorElement.classList.remove(this._errorClass); 
    errorElement.textContent = '';  // Очистим ошибку 
  }
  
  _hasInvalidInput() { 
    return this._inputList.some(formInput => !formInput.validity.valid);  
  }
  
  _isValid(formInput) { 
    if (!formInput.validity.valid) { 
      this._showInputError(formInput); 
    } else { 
      this._hideInputError(formInput); 
    } 
  }
  
  _toggleButtonState() {  
    if (this._hasInvalidInput()) { 
      this._buttonElement.disabled = true; 
      this._buttonElement.classList.add(this._inactiveButtonClass); 
    } else { 
      this._buttonElement.classList.remove(this._inactiveButtonClass); 
      this._buttonElement.disabled = false; 
    } 
  }
  
  _setEventListeners() { 
    this._formElement.addEventListener('submit', (evt) => { 
      evt.preventDefault(); 
    }); 
   
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector)); 
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector); 
    this._toggleButtonState(); 
    this._inputList.forEach((formInput) => { 
      formInput.addEventListener('input', () => { 
        this._isValid(formInput); 
        this._toggleButtonState(); 
      })
    })
  }

  deleteInputError() {
    this._inputList.forEach((formInput) => {
      this._hideInputError(formInput);
    });
    this._toggleButtonState();
  }

  enableValidation() { 
      this._formElement.addEventListener('submit', (evt) => { 
        evt.preventDefault(); 
      }) 
    this._setEventListeners();
  }
}  

export { FormValidator };